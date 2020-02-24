<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImageCoordinates extends Model
{
    protected $fillable = ['model_id', 'row_id','field_name','field_type','x_coordinate','y_coordinate','scaleX','scaleY','width','height','angle'];


    public function products()
    {
 
        return $this->hasOne('App\Products','id','model_id');
    }
}


