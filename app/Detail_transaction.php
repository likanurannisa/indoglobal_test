<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detail_transaction extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'id_transaction','id_product','qty','subtotal','created_at','updated_at'
    ];

}
