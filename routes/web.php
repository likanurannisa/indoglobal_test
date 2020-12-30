<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('login');
// });

  /*   Route::get('/login', function () {
        return view('login');
    })->name('login');
 */

Auth::routes();
Route::get('/', function () {
    return redirect('login');
})->name('login');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

//Route::get('/', 'HomeController@index')->name('home');
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/get_pesanan', 'HomeController@get_pesanan')->name('get_pesanan');
Route::post('/add_pesanan', 'HomeController@add_pesanan')->name('add_pesanan');
Route::post('/pesan_delete', 'HomeController@delete')->name('pesan_delete');

