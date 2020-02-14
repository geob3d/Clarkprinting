<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Resources\ProductsAttributesResource as ProductAttrResource;
use App\Product_Attribute;

class ProductAttributeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$product_Attribute =Product_Attribute::all();
        
        $product_Attribute =Product_Attribute::all();
        

        // Return collection of productss as a resource
        return ProductAttrResource::collection($product_Attribute);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $product_attribute = new Product_Attribute([


            'Banner_ID_fk'=> $request->input('Banner_ID_fk'),
            'Dept_ID_fk' => $request->input('Dept_ID_fk'),
            'Prod_ID_fk'=> $request->input('Prod_ID_fk'),
           // 'ordering_company_id_fk'=> $request->input('ordering_company_id_fk'),
            
            $request->except(['image']),

            

        ]);
        $product_attribute->save();

            //Store Image
        if($request->hasFile('image') && $request->file('image')->isValid()){
        $product_attribute->addMediaFromRequest('image')->toMediaCollection('images');
        }
    

        return response()->json('The Product successfully added');
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
        $product_attribute= $request->isMethod('put') ? Product_Attribute::findOrFail($request->id) : new product_attribute;

        $product_attribute->Banner_ID_fk= $request->input('Banner_ID_fk');
        $product_attribute->Dept_ID_fk = $request->input('Dept_ID_fk');
        $product_attribute->Dept_ID_fk = $request->input('Dept_ID_fk');
        $product_attribute->Prod_ID_fk= $request->input('Prod_ID_fk');
        $product_attribute->ordering_company_id_fk= $request->input('ordering_company_id_fk');

       
        if ($product_attribute->save()) {
            return new ProductAttrResource($product_attribute);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product_Attribute  $product_Attribute
     * @return \Illuminate\Http\Response
     */
    public function show(Product_Attribute $product_Attribute,$id)
    {
        // Get a single products
        $product_attribute = Product_Attribute::findOrFail($id);

        // Return a single products as a resource
        return new ProductAttrResource($product_attribute);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product_Attribute  $product_Attribute
     * @return \Illuminate\Http\Response
     */
    public function edit(Product_Attribute $product_Attribute,$id)
    {
        // Get a single item
        $product_Attribute = Product_Attribute::findOrFail($id);

        // Return a single products as a resource
        return new ProductAttrResource($product_Attribute);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product_Attribute  $product_Attribute
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product_Attribute $product_Attribute)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product_Attribute  $product_Attribute
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product_Attribute $product_Attribute,$id)
    {
        $product_Attribute = Product_Attribute::find($id);
        //Delete the item, return as confirmation
        if ($product_Attribute->delete()) {
        return new ProductAttrResource($product_Attribute);
        }
    }
}
