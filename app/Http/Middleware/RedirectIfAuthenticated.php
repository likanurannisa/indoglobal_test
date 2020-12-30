<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            $role = session('level_id');
            if($role == 1 ) {
                return redirect('/menu_admin');
            }elseif($role == 3){
                return redirect('/menu_verifikator');
            }
            else {
                return redirect('/menu');
            }

        }

        return $next($request);
    }
}
