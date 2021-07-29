<?php

namespace App\Http\Controllers\companyDate;

use App\Http\Controllers\Controller;
use App\Models\CompanyInformation;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

// 会社情報を検索するのを集めたメソッド
class searchCompanyDateController extends Controller
{
  /**
   *
   * @return Response
   */
  protected function searchCompanyDate(Request $request)
  {
    // 会社情報のみの初期検索

    Log::debug('初期検索処理に入りました。');
    $data = CompanyInformation::select([
      'id',
      'company_name',
      'industry',
      'company_url',
      'zip1',
      'zip2',
      'zip3',
      'location',
      'number_of_employees',
      'year_of_establishment',
      'representative',
      'listed_year',
      'average_annual_income',
      'average_age',
      'number_of_reviews',
      'deleted_at',
      'created_at',
      'updated_at'
    ])->paginate(10);

    //TODO:カウントいらないかも。(paginate()のレスポンス内容にカウント情報があった気がする。)
    $count = CompanyInformation::select([
      'id',
      'company_name',
      'industry',
      'company_url',
      'zip1',
      'zip2',
      'zip3',
      'location',
      'number_of_employees',
      'year_of_establishment',
      'representative',
      'listed_year',
      'average_annual_income',
      'average_age',
      'number_of_reviews',
      'deleted_at',
      'created_at',
      'updated_at'
    ])->count();

    $result = array('data' => $data, 'count' => $count);

    // $result = $this->search($companyInformation)->paginate(10);
    return response()->json($result);
  }

  // 条件込みの会社情報検索
  protected function  conditionalSearchCompanyDate(Request $request)
  {
    // TDDO:初期検索処理と条件込みの検索用コントローラーを一緒にする。
    // TODO:paginate()に変更する
    // https://readouble.com/laravel/8.x/ja/pagination.html

    // [Laravel 5.7] Eloquent リレーションのクエリまとめ
    // https://qiita.com/shosho/items/fe88b79c243f4a832f04

    // Laravel5.6でRequestクラスの勉強してみた
    // http://tech.innovation.co.jp/2018/06/24/Laravel56-Request.html

    // Laravel　複数の値で検索する
    // https://qiita.com/Ioan/items/a61ad1fe24529c2477e9

    // Laravel よく使うクエリビルダと複雑なwhere
    // https://qiita.com/KZ-taran/items/64bd5d515e45224f6b95

    Log::debug('条件検索処理に入りました。');

    $query = CompanyInformation::query();

    if ($request->has('company_name') && $request->has('representative')) {
      $query->where(function ($query) use ($request) {
        $query->where('company_name', 'like', '%' . $request['company_name'] . '%')
          ->orWhere('representative', 'like', '%' . $request['representative'] . '%');
      });
    }

    $result = $query->paginate(10);
    Log::debug($result);

    return response()->json($result,201);
  }
}
