<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReviewLike extends Model
{
    protected $fillable = [
        'id', 'user_id', 'favorite_recode', 'deleted_at', 'created_at', 'updated_at'
    ];

    protected $table = 'ReviewLikes';
}
