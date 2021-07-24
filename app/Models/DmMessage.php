<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DmMessage extends Model
{
    protected $fillable = [
        'id', 'send_date', 'to_user', 'from_user', 'msg', 'deleted_at', 'created_at', 'updated_at'
    ];

    protected $table = 'DmMessages';
}
