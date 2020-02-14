<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Companies extends Model
{
    protected $fillable = ['name', 'company_code'];
    

    public function banners()
    {
        return $this->hasMany('App\Banners','company_id','id');
    }

}
