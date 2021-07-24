<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneralProf extends Model
{
    protected $fillable = [
        'id', 'user_id', 'username', 'age', 'tel', 'profImg', 'zip', 'addr', 'deleted_at', 'created_at', 'updated_at'
    ];

    protected $table = 'GeneralProfs';
}
