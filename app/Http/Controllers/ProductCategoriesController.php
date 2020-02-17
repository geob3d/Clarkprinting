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
        $productCategories = ProductCategories::all();
        
        // Return collection of productss as a resource
        return ProductCatResource::collection($productCategories);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($request)
    {
        $productCategories = new ProductCategories([
            'name' => $request->input('name'),
            'description' => $request->$this->description,

        ]);
        $productCategories->save();

        return response()->json('A Product Category successfully added');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
            //  Allow for post update *or* create a new post
            $productCategories = $request->isMethod('put') ? ProductCategories::findOrFail($request->id) : new ProductCategories;

            $productCategories->name = $request->input('name');
            $productCategories->description  = $request->input('description');
            
            if ($productCategories->save()) {
                return new ProductCatResource($productCategories);
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProductCategories  $productCategories
     * @return \Illuminate\Http\Response
     */
    public function show(ProductCategories $productCategories, $id)
    {
        // Get a single Product Categories
        $productCategories = ProductCategories::findOrFail($id);

        // Return a single Product Categories as a resource
        return new ProductCatResource($productCategories);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ProductCategories  $productCategories
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductCategories $productCategories, $id)
    {
        // Get a single item
        $productCategories = ProductCategories::findOrFail($id);

        // Return a single Product Categories as a resource
        return new ProductCatResource($productCategories);
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
    public function destroy(ProductCategories $productCategories, $id)
    {
        $productCategories = ProductCategories::find($id);
        //Delete the item, return as confirmation
        if ($productCategories->delete()) {
        return new ProductCatResource($productCategories);
        }
    }
}
