<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Companies Routes
Route::get('companies', 'CompaniesController@index');

//Route for single
Route::get('companies/{id}', 'CompaniesController@show');

// Create a new 
Route::post('company', 'CompaniesController@store');
    
// Update 
Route::put('company/{id}', 'CompaniesController@store');
    
// Delete 
Route::delete('company/{id}', 'CompaniesController@destroy');


//Banners Routes
Route::get('banners', 'BannersController@index');

//Route for single
Route::get('banners/{id}', 'BannersController@show');

// Create a new 
Route::post('banner', 'BannersController@store');
    
// Update 
Route::put('banner/{id}', 'BannersController@store');
    
// Delete 
Route::delete('banner/{id}', 'BannersController@destroy');


//Stores Banners
Route::get('stores', 'StoresController@index');

    //Route for single
Route::get('stores/{id}', 'StoresController@show');

    // Create a new 
Route::post('store', 'StoresController@store');
    
    // Update 
Route::put('store/{id}', 'StoresController@store');
    
    // Delete 
Route::delete('store/{id}', 'StoresController@destroy');


//Stores Prodcuts
Route::get('products', 'ProductsController@index');

    //Route for single
Route::get('products/{id}', 'ProductsController@show');

    // Create a new 
Route::post('product', 'ProductsController@store');
    
    // Update 
Route::put('product/{id}', 'ProductsController@store');
    
    // Delete 
Route::delete('product/{id}', 'ProductsController@destroy');


//Stores Product Attributes
Route::get('product/attributes', 'ProductAttributeController@index');

    //Route for single
Route::get('product/attributes/{id}', 'ProductAttributeController@show');

    // Create a new 
Route::post('product/attribute', 'ProductAttributeController@store');
    
    // Update 
Route::put('product/attribute/{id}', 'ProductAttributeController@store');
    
    // Delete 
Route::delete('product/attribute/{id}', 'ProductAttributeController@destroy');


//Stores Product Categories
Route::get('product/categories', 'ProductCategoriesController@index');

    //Route for single
Route::get('product/categories/{id}', 'ProductCategoriesController@show');

    // Create a new 
Route::post('product/category', 'ProductCategoriesController@store');
    
    // Update 
Route::put('product/category/{id}', 'ProductCategoriesController@store');
    
    // Delete 
Route::delete('product/category/{id}', 'ProductCategoriesController@destroy');