<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detail_user extends Model
{
    protected $fillable = [
        'id', 'user_id','name','address','no_hp','no_ktp','created_at','updated_at'
    ];
}
