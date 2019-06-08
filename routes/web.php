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

Route::get('/', function () {
    return view('welcome');
});

Route::view('/blog', 'welcome');

Route::view('/blog/1', 'welcome');

Route::view('/blog/2', 'welcome');

Route::view('/blog/3', 'welcome');

Route::post('/message', 'MessageController@send');