<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductCategories extends Model
{
    protected $fillable = ['name', 'description'];

    public function products()
    {
 
        return $this->hasMany('App\Product','prod_cat_fk','id');
    }

}


