<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_product extends Model
{
    use HasFactory;

    protected $guarded=[];

    public function order(){
        return $this->belongsTo(order::class);
    }

    public function product(){
        return $this->belongsTo(product::class,"product_id");
    }
}
