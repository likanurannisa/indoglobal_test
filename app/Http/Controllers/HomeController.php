<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Detail_transaction;
use App\Transaction;
use App\Product;
use App\Detail_user;
use auth;
use DB;

class HomeController extends Controller
{

/**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
        public function index(){

            return view('home');

        }
        public function get_pesanan(){
            $user_id = auth::user()->id;
            $transaction = Transaction::select('transactions.id','transactions.code_transaction','transactions.date_transaction','transactions.total','detail_users.name')
                                        ->join('detail_users','detail_users.user_id','=','transactions.user_id')
                                          ->where('status',1) //status = 1 transaksi belum dibayar belum selesai 
                                          ->where('transactions.user_id',$user_id)
                                          ->first();
            if ($transaction) {
                $pesanan = Detail_transaction::select('products.id as product_id','products.name'
                ,'products.qty as qty_product','products.price','products.name'
                ,'detail_transactions.qty as qty_pesan', 'detail_transactions.id',
                'detail_transactions.id_transaction','detail_transactions.subtotal' )
            ->join('products','products.id','=','detail_transactions.id_product')
            ->where('detail_transactions.id_transaction', $transaction->id)
            ->get();
            }else{
                $pesanan = Detail_transaction::select('products.id as product_id','products.name'
                ,'products.qty as qty_product','products.price','products.name'
                ,'detail_transactions.qty as qty_pesan', 'detail_transactions.id',
                'detail_transactions.id_transaction','detail_transactions.subtotal' )
            ->join('products','products.id','=','detail_transactions.id_product')
             ->get();

            }
     $product = Product::get();
     return response()->json([
                'code' => "200",
                'pesanan' => $pesanan,
                'user_id' => $user_id,
                'product' => $product,
                'transaction' => $transaction,
                
              ]);


        }
        public function add_pesanan(Request $request){
            $this->validate($request, [
                'product' => 'required',
                'jumlah' => 'required',
                'user_id' => 'required',

 ]);

 $product_count = Product::where('id',$request->product['id'])->first();


 
            DB::beginTransaction();
            try {

                if ($request->id_transaction == '') {
                    $code = 'TR'.date('d').date('m').date('Y').rand(4,10);
                    $transaction= Transaction::create([

                        'user_id' => $request->user_id,
                        'code_transaction' => $code,
                        'status' => 1,
                        'date_transaction' =>new \DateTime(),
                        'total' => $request->jumlah * $product_count->price
    
    
                      ]);
    
                      if(!$transaction){
                        return response()->json([
                            'code' => "400",
                            'msg' => "Gagal Transaksi",
                          ]);
                      }
                      else{
                        $detail_transaction= Detail_transaction::create([
    
                            'id_product' => $request->product['id'],
                            'id_transaction' => $transaction->id,
                            'qty' => $request->jumlah,
                            'subtotal' => $request->jumlah * $product_count->price,
                            'date_transaction' =>new \DateTime(),
        
        
                          ]);
                      }
                   
                 }
                 else {
                     $trans = Transaction::where('id',$request->id_transaction)->first();
                    $transaction= Transaction::where('id',$request->id_transaction)->update([

                        'total' => $trans->total + ($request->jumlah * $product_count->price)
    
    
                      ]);
    
                      if(!$transaction){
                        return response()->json([
                            'code' => "400",
                            'msg' => "Gagal Transaksi",
                          ]);
                      }
                      else{
                        $detail_transaction= Detail_transaction::create([
    
                            'id_product' => $request->product['id'],
                            'id_transaction' => $trans->id,
                            'qty' => $request->jumlah,
                            'subtotal' => $request->jumlah * $product_count->price,
                            'date_transaction' =>new \DateTime(),
        
        
                          ]);
                      }
                
                 }
                

                 DB::commit();

                 return response()->json([
                    'code' => "200",
                    'msg' => "Data berhasil disimpan.",
                  ]);
            } catch (Exception $e) {
                DB::rollback();

            }

        }

        public function delete(Request $request)
        {
            $transaction_detail = Detail_transaction::where('id', '=', $request->id )->delete();;
            if(!$transaction_detail) {
                throw new HttpException(500);
            }
    
            return response()->json([
                'code' => "200",
                'msg' => "Data berhasil dihapus.",
              ]);
  
        }
}
