<?php

namespace App\Http\Controllers\roll;

use App\Http\Controllers\Controller;
use App\Models\ContributorProf;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class changeOfAuthorityController extends Controller
{
  // 投稿者登録処理
  protected function contributorRegistration(Request $request)
  {
    Log::debug('投稿者登録処理を行います。');
    Log::debug("リクエスト内容".$request);

    $ContributorRegistrationResults = ContributorProf::create([
      'user_id' => $request['user_id'],
    ]);

    //TODO:joinを使う意味無いのであとで修正
    $Results = User::leftJoin('ContributorProfs','Users.id','=','ContributorProfs.user_id')
    ->where('Users.id','=',$request['user_id'])
    ->update(['Users.roll' => 50]);

    Log::debug($Results);
    return response()->json(201);
  }
}
