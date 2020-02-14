<?php

namespace App\Http\Controllers;

use App\Stores;
use Illuminate\Http\Request;
Use App\Http\Resources\StoresResource as StoreResource;

class StoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$stores = Stores::with('banners.companies')->get();


        $stores = Stores::with(['banners.companies' => function($query) {
            $query->select(['companies.id','companies.name','companies.company_code']);
         }])->get();
        //$stores = Stores::all();

        return StoreResource::collection($stores);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $stores = new Stores([


            'company_id_fk' => $request->input('company_id_fk'),
            'company_code' => $request->$this->company_code,
            'banner_id_fk' => $request->input('banner_id_fk'),
            'customer_no' => $request->input('customer_no'),
            'name' => $request->input('name'),
            'corporate_office' => $request->input('corporate_office'),
            'address' => $request->input('address'),
            'city' => $request->input('city'),
            'state' => $request->input('state'),
            'zip_code' => $request->input('zip_code'),
            'phone' => $request->input('phone'),

        ]);
        $stores->save();

        return response()->json('The Store successfully added');
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
        $stores = $request->isMethod('put') ? Stores::findOrFail($request->id) : new stores;


        $stores->company_id_fk = $request->input('company_id_fk');
        $stores->company_code = $request->input('company_code');
        $stores->banner_id_fk = $request->input('banner_id_fk');
        $stores->customer_no = $request->input('customer_no');
        $stores->name = $request->input('name');
        $stores->corporate_office = $request->input('corporate_office');
        $stores->address = $request->input('address');
        $stores->city = $request->input('city');
        $stores->state = $request->input('state');
        $stores->zip_code = $request->input('zip_code');
        $stores->phone = $request->input('phone');

        if ($stores->save()) {
            return new StoreResource($stores);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Stores  $stores
     * @return \Illuminate\Http\Response
     */
    public function show(Stores $stores,$id)
    {
        // Get a single stores
        $stores = Stores::findOrFail($id);

        // Return a single stores as a resource
        return new StoreResource($stores);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Stores  $stores
     * @return \Illuminate\Http\Response
     */
    public function edit(Stores $stores,$id)
    {
        // Get a single item
        $stores = Stores::findOrFail($id);

        // Return a single stores as a resource
        return new StoreResource($stores);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Stores  $stores
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Stores $stores)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Stores  $stores
     * @return \Illuminate\Http\Response
     */
    public function destroy(Stores $stores,$id)
    {
        $stores = Stores::find($id);
        //Delete the item, return as confirmation
        if ($stores->delete()) {
        return new StoreResource($stores);
        }
    }
}
