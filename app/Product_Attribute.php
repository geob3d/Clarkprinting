<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class Product_Attribute extends Model implements HasMedia
{
    protected $fillable = ['Banner_ID_fk', 'Dept_ID_fk','Prod_ID_fk','ordering_company_id_fk'];
    use HasMediaTrait;
    
    //

    public function banners()
    {
        return $this->hasMany('App\Banners','id','Banner_ID_fk');
    }
}
