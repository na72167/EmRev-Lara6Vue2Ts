<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContributorProf extends Model
{
    protected $fillable = [
        'id', 'user_id', 'username', 'age', 'tel', 'zip',
        'addr', 'affiliation_company', 'incumbent',
        'currently_department', 'currently_position',
        'dm_state', 'deleted_at', 'created_at', 'updated_at'
    ];

    protected $table = 'ContributorProfs';
}
