<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReportCategory extends Model
{
    protected $fillable = [
        'id', 'name', 'deleted_at', 'created_at', 'updated_at'
    ];
}
