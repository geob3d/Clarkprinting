<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order_items extends Model
{
    protected $fillable = ['order_no_fk', 'custom_product','delivery_status','quanitity','price'];

    public function orders()
    {
        return $this->hasONE('App\Orders','order_no','order_no_fk');

    }


}
