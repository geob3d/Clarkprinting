<?php

namespace App\Http\Controllers;

use App\Orders;
use App\Order_items as Oitems;
use Illuminate\Http\Request;
use App\Http\Resources\OrdersResource as OrdersResource;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Orders::with('orderItems')->get();
        
        // Return collection of productss as a resource
        return OrdersResource::collection($orders);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)

    /// This will create both the order and order items
    {
        $orders = new Orders([
            
            'user_id'=> $request->input('user_id'),
            'order_no' => $request->input('order_no'),
            'order_status'=> $request->input('order_status'),
            'delivery_date'=> $request->input('delivery_date'),

        ]);

        $orders->save();
        
         $oitems = new Oitems([
            
             //'order_no_fk' => $request->input('order_no_fk'),
             'custom_product'=> $request->input('custom_product'),
             'delivery_status'=> $request->input('delivery_status'),
             'quanitity'=> $request->input('quanitity'),
             'price'=> $request->input('price'),

         ]);

         $orders->orderItems()->save($oitems);
        //$orders->save();


        return response()->json('The Orders successfully added');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $orders = $request->isMethod('put') ? Orders::with('orderItems')->findOrFail($request->id) : new Orders();


        // $orders->user_id = $request->input('user_id');
        // $orders->order_no = $request->input('order_no');
        // $orders->order_status= $request->input('order_status');
        // $orders->delivery_date = $request->input('delivery_date');
      

        // $orders->orderItems->order_no_fk = $request-> input('order_no_fk');
        // $orders->orderItems->custom_product = $request-> input('custom_product');
        // $orders->orderItems->delivery_status = $request-> input('delivery_status');
        // $orders->orderItems->quanitity = $request-> input('quanitity');
        // $orders->orderItems->price = $request-> input('price');

        
        // if ($orders->save()) {
        //     return new OrdersResource($orders);
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function show(Orders $orders)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function edit(Orders $orders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Orders $orders)
    {
        $orders =  Orders::with('orderItems')->findOrFail($request->id);

        $orders->user_id = $request->input('user_id');
        $orders->order_no = $request->input('order_no');  // do not let user change
        $orders->order_status= $request->input('order_status'); //only by clark
        $orders->delivery_date = $request->input('delivery_date');
      

        $orders->orderItems->order_no_fk = $request-> input('order_no_fk'); //do not let user change
        $orders->orderItems->custom_product = $request-> input('custom_product');// cannot be changed
        $orders->orderItems->delivery_status = $request-> input('delivery_status');
        $orders->orderItems->quanitity = $request-> input('quanitity');
        $orders->orderItems->price = $request-> input('price');//do not let user change

        
        if ($orders->save()) {
            return new OrdersResource($orders);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function destroy(Orders $orders)
    {
        //
    }
}
