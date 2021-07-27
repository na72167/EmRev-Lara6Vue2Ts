<?php

namespace App\Http\Controllers\postingReview;

use App\Http\Controllers\Controller;
use App\Models\EmployeeReview;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class postingReviewController extends Controller
{
  // 投稿者登録処理
  protected function registPostingReview(Request $request)
  {
    Log::debug('レビュー登録処理を行います。');
    Log::debug("リクエスト内容".$request);

    $RegistPostingReviewResults = EmployeeReview::create([
      'employee_id' => $request['user_id'],
      'review_company_id' => $request['company_id'],
      'joining_route' => $request['joining_route'],
      'enrollment_status' => $request['enrollment_status'],
      'occupation' => $request['occupation'],
      'position' => $request['position'],
      'enrollment_period' => $request['enrollment_period'],
      'employment_status' => $request['employment_status'],
      'welfare_office_environment' => $request['welfare_office_environment'],
      'working_hours' => $request['working_hours'],
      'inCompany_system' => $request['inCompany_system'],
      'corporate_culture' => $request['corporate_culture'],
      'holiday' => $request['holiday'],
      'organizational_structure' => $request['organizational_structure'],
      'ease_of_work_for_women' => $request['ease_of_work_for_women'],
      'image_gap' => $request['image_gap'],
      'rewarding_work' => $request['rewarding_work'],
      'strengths_and_weaknesses' => $request['strengths_and_weaknesses'],
      'annual_income_salary' => $request['annual_income_salary'],
      'business_outlook' => $request['business_outlook'],
      'general_estimation_title' => $request['general_estimation_title'],
      'general_estimation' => $request['general_estimation'],
    ]);

    Log::debug($RegistPostingReviewResults);
    return response()->json(201);
  }
}
