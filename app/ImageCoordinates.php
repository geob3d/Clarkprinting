<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImageCoordinates extends Model
{
    protected $fillable = ['model_id', 'row_id','field_name','field_type','x_coordinate','y_coordinate','scaleX','width','height','angle'];
}


