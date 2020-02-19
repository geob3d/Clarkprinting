<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $fillable = ['user_id', 'order_no','order_status','delivery_date'];

    public function orderItems()
    {
        return $this->hasMany('App\Order_Items','order_no_fk','order_no');

    }

}

