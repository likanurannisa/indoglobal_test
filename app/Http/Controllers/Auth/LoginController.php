<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\User;
use App\Detail_user;
use App\Group;
use Illuminate\Http\Request;
use DB;
use Auth;
use Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function username()
    {
        return 'username';
    }

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {

        $this->validate($request, [
            $this->username() => 'required|string',
            'password' => 'required|string',

        ]);


        $user = User::where('username',$request->input('username'))
                    ->where('status',1)
                   ->where(function($q) {
                    $q->where('group_id',config('constants.group.admin'))
                      ->orWhere('group_id', config('constants.group.employee'))
                   ;
                })
                ->first();

        if (!empty($user)) {
            if (Hash::check($request->input('password'), $user->password)) {



            $credentials = [
                    "username" => $request->input('username'),
                    "password" => $request->input('password'),
                ];
                if ($this->guard()->attempt($credentials)) {
                 Auth::user()->save();

                    session(['group_id' => Auth::user()->group_id]);
                    session(['user_id' => Auth::user()->id]);
                    session(['email' => Auth::user()->email]);

                    $level = Group::where('id', Auth::user()->group_id )->first();
                    if (!empty($level)) {
                        session(['level' => $level->name]);
                    }
                    else {
                        session(['level' => 'Tim Admin']);
                    }


                    $detail= Detail_user::where('id',Auth::user()->id)->first();
                    if (!empty($detail)) {
                        session(['nama_user' => $detail->name]);
                    }
                    else {
                        session(['nama_user' => 'Tim Admin']);
                    }

                    return response()->json([
                        'code' => "200",
                        'msg' => "sukses",
                        'tampilan' => "/home",
                    ]);




                }


            }else{
                return response()->json([
                    'code' => "400",
                    'msg' => \Lang::get('auth.failed'),
                ]);
            }
        }else{
            return response()->json([
                'code' => "400",
                'msg' => \Lang::get('auth.failed'),
            ]);
        }
    }


}
