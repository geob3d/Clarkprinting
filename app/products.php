<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class products extends Model implements HasMedia
{
    use HasMediaTrait;


    protected $fillable = ['sku', 'name','description','price','ordering_company_id_fk','prod_cat_fk',];
    
    public static function last (){

        return static::all()->last();
    }
    

}