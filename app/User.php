<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Carbon\Carbon;
use App\Year;
use DB;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password','group_id','status','created_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function badan_publik()
    {
        return $this->hasMany('App\Badan_public','id','badanpublik_id');
    }
    public function detail()
    {
        return $this->hasMany('App\User_detail','user_id','id');
    }
    public static  function isi($id=""){
        $mytime =Year::OrderBy('id','DESC')->first();
        $date = $mytime->year;
        $verif_id = session('verifikator_id');


         return DB::table('Badan_publics')
                    ->leftjoin('users','users.badanpublik_id','=','Badan_publics.id')
                     ->leftjoin('User_answers', function($join) use ($date){
                        $join->on('user_answers.user_id', '=', 'users.id')
                        ->orOn('user_answers.badanpublik_id', '=', 'Badan_publics.id')
                        ->where('year', $date);

                      })
                     ->leftjoin('user_details','user_details.user_id','=','users.id')
                     ->leftjoin('verifikator_permissions','verifikator_permissions.badanpublik_id','=','Badan_publics.id')
                     ->select('user_details.nama','Badan_publics.nama as nama_bp','Badan_publics.id as id_bp','User_answers.*','Badan_publics.kategori_id')
                     ->where(['kategori_id'=>$id, 'verifikator_permissions.verifikator_id'=>$verif_id])

                     ->where( function ($query) {

                            $query->Wherein('User_answers.is_verif', [2, 0])
                                  ->orWhereNull('User_answers.is_verif');
                        })
                     ->get();


    }
  /*   public static  function isi($id=""){
        $mytime =Year::OrderBy('id','DESC')->first();
        $date = $mytime->year;
        $verif_id = session('verifikator_id');
         return DB::table('Badan_publics')
                    ->leftjoin('users','users.badanpublik_id','=','Badan_publics.id')
                     ->leftjoin('User_answers', function($join){
                        $join->on('user_answers.user_id', '=', 'users.id')
                        ->orOn('user_answers.badanpublik_id', '=', 'Badan_publics.id');

                      })
                     ->leftjoin('user_details','user_details.user_id','=','users.id')
                     ->leftjoin('verifikator_permissions','verifikator_permissions.badanpublik_id','=','Badan_publics.id')
                     ->select('user_details.nama','Badan_publics.nama as nama_bp','Badan_publics.id as id_bp','User_answers.*','Badan_publics.kategori_id')
                     ->where(['kategori_id'=>$id, 'verifikator_permissions.verifikator_id'=>$verif_id])
                     ->where('year', $date)
                     ->where( function ($query) {

                            $query->Wherein('User_answers.is_verif', [2, 0])
                                  ->orWhereNull('User_answers.is_verif');
                        })
                     ->get();


    } */
}
