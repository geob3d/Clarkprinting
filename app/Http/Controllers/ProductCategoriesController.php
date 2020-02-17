<?php

namespace App\Http\Controllers;

use App\ProductCategories;
use Illuminate\Http\Request;
use App\Http\Resources\ProductsCategoryResource as ProductCatResource;

class ProductCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productCat =ProductCategories::all();
        
        // Return collection of productss as a resource
        return ProductCatResource::collection($productCat);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProductCategories  $productCategories
     * @return \Illuminate\Http\Response
     */
    public function show(ProductCategories $productCategories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ProductCategories  $productCategories
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductCategories $productCategories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductCategories  $productCategories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductCategories $productCategories)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProductCategories  $productCategories
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductCategories $productCategories)
    {
        //
    }
}
