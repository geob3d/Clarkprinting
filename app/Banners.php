<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banners extends Model
{
    protected $fillable = ['company_id', 'name','chain_no'];
    
    public function companies()
    {
        return $this->hasOne('App\Companies','id','company_id');
    }

    public function stores()
    {
        return $this->hasMany('App\Stores','banner_id_fk','id');
    }

    public function productAtribute()
    {
        return $this->belongsTo('App\Product_Attribute','banner_id_fk','id');
    }

}



