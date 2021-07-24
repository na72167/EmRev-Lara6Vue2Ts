<?php

namespace app\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Carbon\Carbon;

class AuthController extends Controller
{
  // クエリビルダ
  // https://readouble.com/laravel/5.6/ja/queries.html

  // ユーザー登録機能
  protected function register(Request $request){

    Log::debug('登録処理を行います。');
    $registerUser = User::create([
      'email' => $request['email'],
      'password' => Hash::make($request['password']),
    ]);

    Log::debug("登録結果の内容".$registerUser);
    return response()->json($registerUser,201);

  }

  //-ログイン処理-
  protected function login(Request $request){

    Log::debug('ログイン処理を行います。');
    Log::debug("リクエスト内容".$request);
    $loginUser = User::where('email',$request['email'])->first();
    Log::debug("検索結果".$loginUser);

    //TODO:ログイン情報が存在しない場合に「$loginUser->email」部分でエラーが出る。
    if($request['email'] === $loginUser->email && Hash::check($request['password'],$loginUser->password)){
      Log::debug("条件が合致しました");
      return response()->json($loginUser,200);
    }else{
      Log::debug("条件に合致しませんでした");
      return response()->json(false);
    };
  }

  //パスワード変更用認証キー
  protected function passwordReceive(Request $request){

    Log::debug('パスワード更新処理を行います。');
    Log::debug("リクエスト内容".$request);
    $UpdatePasswordUser = User::where('email',$request['authEmail'])->first();
    Log::debug("検索結果".$UpdatePasswordUser);

    if($request['authEmail'] === $UpdatePasswordUser->email && $request['authenticationKey'] === $UpdatePasswordUser->emailToken){
      Log::debug("条件が合致しました");
      $UpdateUser = User::where('email',$UpdatePasswordUser->email)->update(['password' => Hash::make($request['changedPassword'])]);
      return response()->json($UpdateUser,201);
    }else{
      Log::debug("条件に合致しませんでした");
      return false;
    };

  }

  // Laravel,PHPで日付や時間を操作・取得したいとき
  // https://qiita.com/morocco/items/427914b276badcd394b6
  //退会機能
  protected function withdrawal(Request $request){

    Log::debug('退会処理を行います。');
    Log::debug("リクエスト内容".$request);

    $UserData = User::where('id',$request['user_id'])
      ->update(['deleted_at' => Carbon::now()]);

    Log::debug("保存結果".$UserData);

    return $UserData;
  }
}
