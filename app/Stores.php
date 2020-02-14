<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stores extends Model
{
    protected $fillable = ['company_id_fk', 'banner_id_fk','customer_no','name','corporate_office','address','city','state','zip_code','phone'];

    public function banners()
    {
        return $this->hasOne('App\Banners','id','banner_id_fk');
    }

}
