<?php

namespace App\Http\Controllers;

use App\Banners;
use Illuminate\Http\Request;
use App\Http\Resources\BannersResource as BannerResource;


class BannersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       // $banners =banners::all();
        $banners = Banners::with('companies')->get();

        
        // Return collection of bannerss as a resource
        return BannerResource::collection($banners);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $banners = new Banners([
            
            'company_id' => $request->$this->company_id,
            'name' => $request->input('name'),
            'chain_no'=> $request->input('chain_no')
            

        ]);
        $banners->save();

        return response()->json('The Banner successfully added');
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
        $banners = $request->isMethod('put') ? banners::findOrFail($request->id) : new banners;

        $banners->company_id = $request->input('company_id');
        $banners->name = $request->input('name');
        $banners->chain_no = $request->input('chain_no');
        
        
        if ($banners->save()) {
            return new BannerResource($banners);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Banners  $banners
     * @return \Illuminate\Http\Response
     */
    public function show(Banners $banners,$id)
    {
        // Get a single Banners
        $Banners = Banners::findOrFail($id);



        // Return a single Banners as a resource
        return new BannerResource($Banners);

        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Banners  $banners
     * @return \Illuminate\Http\Response
     */
    public function edit(Banners $banners, $id)
    {
        // Get a single item
        $banners = Banners::findOrFail($id);

        // Return a single banners as a resource
        return new BannerResource($banners);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Banners  $banners
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Banners $banners)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Banners  $banners
     * @return \Illuminate\Http\Response
     */
    public function destroy(Banners $banners, $id)
    {
        $banners = Banners::find($id);
        //Delete the item, return as confirmation
        if ($banners->delete()) {
        return new BannerResource($banners);
        }
    }
}
