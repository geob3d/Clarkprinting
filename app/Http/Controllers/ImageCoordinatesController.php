<?php

namespace App\Http\Controllers;

use App\ImageCoordinates;
use Illuminate\Http\Request;
use App\Http\Resources\ImageCoordinatesResource as IOResource;

class ImageCoordinatesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $imageCoordinates = ImageCoordinates::all();


        
        // Return collection of productss as a resource
        return IOResource::collection($imageCoordinates);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $imageCoordinates = new ImageCoordinates([
            
            'model_id'=> $request->input('model_id'),
            'row_id' => $request->input('row_id'),
            'field_name'=> $request->input('field_name'),
            'field_type'=> $request->input('field_type'),
            'x_coordinate'=> $request->input('x_coordinate'),
            'y_coordinate'=> $request->input('y_coordinate'),
            'scaleX'=> $request->input('scaleX'),
            'scaleY'=> $request->input('scaleY'),
            'width'=> $request->input('width'),
            'height'=> $request->input('height'),
            'angle'=> $request->input('angle'),
            

        ]);

        $imageCoordinates->save();

        return response()->json('The Image Coordinates successfully added');

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
     * @param  \App\ImageCoordinates  $imageCoordinates
     * @return \Illuminate\Http\Response
     */
    public function show(ImageCoordinates $imageCoordinates,$cordid)
    {
        // Get a single Companies
        $imageCoordinates = ImageCoordinates::findOrFail($cordid);

        // Return a single Companies as a resource
        return new IOResource($imageCoordinates);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ImageCoordinates  $imageCoordinates
     * @return \Illuminate\Http\Response
     */
    public function edit(ImageCoordinates $imageCoordinates)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ImageCoordinates  $imageCoordinates
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ImageCoordinates $imageCoordinates)
    {
        $imageCoordinates =  ImageCoordinates::findOrFail($request->cordid);

        $imageCoordinates->model_id = $request->input('model_id');
        $imageCoordinates->row_id = $request->input('row_id');  // do not let user change
        $imageCoordinates->field_name= $request->input('field_name'); //only by clark
        $imageCoordinates->x_coordinate = $request->input('x_coordinate');
        $imageCoordinates->y_coordinate = $request->input('y_coordinate');
        $imageCoordinates->scaleX = $request->input('scaleX');
        $imageCoordinates->scaleY = $request->input('scaleY');
        $imageCoordinates->width = $request->input('width');
        $imageCoordinates->height = $request->input('height');
        $imageCoordinates->angle = $request->input('angle');

        if ($imageCoordinates->save()) {
            return new IoResource($imageCoordinates);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ImageCoordinates  $imageCoordinates
     * @return \Illuminate\Http\Response
     */
    public function destroy(ImageCoordinates $imageCoordinates,$cordid)
    {
        $imageCoordinates = ImageCoordinates::find($cordid);
        //Delete the item, return as confirmation
        if ($imageCoordinates->delete()) {
        return new IOResource($imageCoordinates);
        }
    }
}
