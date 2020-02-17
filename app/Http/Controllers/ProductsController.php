<?php

namespace App\Http\Controllers;

use App\products;
use Illuminate\Http\Request;
use App\Http\Resources\ProductsResource as ProductResource;
use App\ProductCategories;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = products::with('prodCategories')->get();


        foreach ($products as $p) {
            $p ->getMedia();
            
        }
        

        

        // Return collection of productss as a resource
        return ProductResource::collection($products);
}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create($request)
    {
        //
        $products = new products([
            
            'sku'=> $request->input('sku'),
            'name' => $request->input('name'),
            'description'=> $request->input('description'),
            'price '=> $request->input('price'),
            'ordering_company_id_fk' => $request->input('ordering_company_id_fk'),
            'prod_cat_fk' => $request->input('prod_cat_fk') 
            

        ]);

        $products->save();


        return response()->json('The Banner successfully added');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $data)
    {
        //  Allow for post update *or* create a new post
        $products = $request->isMethod('put') ? products::findOrFail($request->id) : new products;

        $products->sku = $request->input('sku');
        $products->name = $request->input('name');
        $products->description = $request->input('description');
        $products->price = $request->input('price');
        $products->ordering_company_id_fk = $request->input('ordering_company_id_fk');
        $products->prod_cat_fk = $request->input('prod_cat_fk');
        //$products->addMedia($request->file('productImg'))->toMediaCollection();
        //$products->addMediaFromRequest('productImg')->toMediaCollection();


       // $products->prodimage = $request-> addMediaFromRequest('productImg')->toMediaCollection();

        //if (request()->hasFile('productImg'))
        //{
          //  $products->addMedia(request()->file('productImg'))->toMediaCollection();
        //}
 

         //if (!$request->hasFile('productImg') ) {
           // return back()->with('error', 'Missing image!');
        //}

        
        if ($products->save()) {
            return new ProductResource($products);
        }

        //if (request()->hasFile('productImg'))
        //{
          //  $products->addMedia(request()->file('productImg'))->toMediaCollection();
        //}

        if($request->hasFile('productImg') && $request->file('productImg')->isValid()){
            $products->addMediaFromRequest('productImg')->toMediaCollection();
            
        }




        //if (isset($data['media'])) {
          //  $products->addMediaFromRequest('productImg')->toMediaCollection();
        //}

    }


    /**
     * Display the specified resource.
     *
     * @param  \App\products  $products
     * @return \Illuminate\Http\Response
     */
    public function show(products $products, $id)
    {
        // Get a single products
        $products = products::with('prodCategories')->findOrFail($id);
        $products ->getMedia();
        // Return a single products as a resource
        return new ProductResource($products);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\products  $products
     * @return \Illuminate\Http\Response
     */
    public function edit(products $products, $id)
    {
        // Get a single item
        $products = products::findOrFail($id) ;

        // Return a single products as a resource
        return new ProductResource($products);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, products $products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy(products $products, $id)
    {
        $products = products::find($id);
        //Delete the item, return as confirmation
        if ($products->delete()) {
        return new ProductResource($products);
        }
    }
}
