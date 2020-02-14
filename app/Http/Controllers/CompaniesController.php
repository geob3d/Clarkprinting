<?php

namespace App\Http\Controllers;

use App\Companies;
use Illuminate\Http\Request;
use App\Http\Resources\CompaniesResource as CompanyResource;

class CompaniesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$companies = Companies::all();
        //$companies = Companies::with('banners')->get();


        $companies = Companies::with(['banners' => function($query) {
           $query->select(['id','company_id','name','chain_no']);
        }])->get();
        
        // Return collection of Companiess as a resource
        return CompanyResource::collection($companies);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $companies = new Companies([
            'name' => $request->input('name'),
            'company_code' => $request->$this->company_code,

        ]);
        $companies->save();

        return response()->json('The Company successfully added');
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
        $companies = $request->isMethod('put') ? companies::findOrFail($request->id) : new companies;

        $companies->name = $request->input('name');
        $companies->company_code  = $request->input('company_code');
        
        if ($companies->save()) {
            return new CompanyResource($companies);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Companies  $companies
     * @return \Illuminate\Http\Response
     */
    public function show(Companies $companies, $id)
    {
        // Get a single Companies
        $Companies = Companies::findOrFail($id);

        // Return a single Companies as a resource
        return new CompanyResource($Companies);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Companies  $companies
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // Get a single item
        $companies = Companies::findOrFail($id);

        // Return a single Companies as a resource
        return new companyResource($companies);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Companies  $companies
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Companies $companies,$id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Companies  $companies
     * @return \Illuminate\Http\Response
     */
    public function destroy(Companies $companies,$id)
    {
        $companies = Companies::find($id);
        //Delete the item, return as confirmation
        if ($companies->delete()) {
        return new CompanyResource($companies);
        }
    }
}
