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

use App\products;

Route::get('/{any}', 'ApplicationController')->where('any', '.*');
Route::post('files/upload/{id}', ['uses' =>'ProductsController@upload']);


