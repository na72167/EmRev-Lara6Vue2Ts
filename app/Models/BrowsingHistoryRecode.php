<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class BrowsingHistoryRecode extends Model
{
    protected $fillable = [
        'id', 'review_id', 'user_id', 'deleted_at', 'browsing_history_date', 'created_at', 'updated_at'
    ];

    protected $table = 'BrowsingHistoryRecodes';
}
