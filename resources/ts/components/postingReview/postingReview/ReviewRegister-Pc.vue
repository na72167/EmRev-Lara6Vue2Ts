<template>
  <div class="revRegistPc-content__form-element">
    <div class="revRegistPc-content__form-wrap">

      <h4 class="revRegistPc-content__title">Post Company Review</h4>
      <h1 class="revRegistPc-content__sub">投稿内容の確認</h1>

      <from class="revRegistPc-content__wrap">

        <div>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ joiningRouteErrMsg }}</strong>
            </span>
          </div>
          <input class="revRegistPc-content__input" :class="{ errInput: joiningRouteErrMsg }" placeholder="入社経路" v-model="joiningRoute">
        </div>

        <div>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ enrollmentStatusErrMsg }}</strong>
            </span>
          </div>
          <input class="revRegistPc-content__input" :class="{ errInput: enrollmentStatusErrMsg }" placeholder="在籍状況" v-model="enrollmentStatus">
        </div>

        <div>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ occupationErrMsg }}</strong>
            </span>
          </div>
          <input class="revRegistPc-content__input" :class="{ errInput: occupationErrMsg }" placeholder="在籍時の職種" v-model="occupation">
        </div>

        <div>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ positionErrMsg }}</strong>
            </span>
          </div>
          <input class="revRegistPc-content__input" :class="{ errInput: positionErrMsg }" placeholder="在籍時の役職" v-model="position">
        </div>

        <div>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ enrollmentPeriodErrMsg }}</strong>
            </span>
          </div>
          <input class="revRegistPc-content__input" :class="{ errInput: enrollmentPeriodErrMsg }" placeholder="在籍期間" v-model="enrollmentPeriod">
        </div>

        <div>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ employmentStatusErrMsg }}</strong>
            </span>
          </div>
          <input class="revRegistPc-content__input" :class="{ errInput: employmentStatusErrMsg }" placeholder="在籍形態" v-model="employmentStatus">
        </div>

        <div>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ welfareOfficeEnvironmentErrMsg }}</strong>
            </span>
          </div>
          <input class="revRegistPc-content__input" :class="{ errInput: welfareOfficeEnvironmentErrMsg }" placeholder="福利厚生" v-model="welfareOfficeEnvironment">
        </div>

        <div>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ workingHoursErrMsg }}</strong>
            </span>
          </div>
          <input class="revRegistPc-content__input" :class="{ errInput: workingHoursErrMsg }" placeholder="勤務時間" v-model="workingHours">
        </div>

        <div>
          <div class="revRegistPc-content__form-title">社内制度</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: inCompanySystemErrMsg }" placeholder="社内制度" v-model="inCompanySystem"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ inCompanySystemErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">企業文化</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: corporateCultureErrMsg }" placeholder="企業文化" v-model="corporateCulture"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ corporateCultureErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">休暇について</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: holidayErrMsg }" placeholder="休暇について" v-model="holiday"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ holidayErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">組織体制</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: organizationalStructureErrMsg }" placeholder="組織体制" v-model="organizationalStructure"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ organizationalStructureErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">女性の働きやすさについて</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: easeOfWorkForWomenErrMsg }" placeholder="女性の働きやすさについて" v-model="easeOfWorkForWomen"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ easeOfWorkForWomenErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">入社前とのギャップ</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: imageGapErrMsg }" placeholder="入社前とのギャップ" v-model="imageGap"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ imageGapErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">働きがい</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: rewardingWorkErrMsg }" placeholder="働きがい" v-model="rewardingWork"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ rewardingWorkErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">強み・弱み</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: strengthsAndWeaknessesErrMsg }" placeholder="強み・弱い" v-model="strengthsAndWeaknesses"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ strengthsAndWeaknessesErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">年収・給与</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: annualIncomeSalaryErrMsg }" placeholder="年収・給与" v-model="annualIncomeSalary"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ annualIncomeSalaryErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">事業展望</div>
          <textarea class="revRegistPc-content__form-areaForm" :class="{ errInput: businessOutlookErrMsg }" placeholder="事業展望" v-model="businessOutlook"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ businessOutlookErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-conciseTitle">レビュータイトル</div>
          <textarea class="revRegistPc-content__form-conciseAreaForm" placeholder="レビュータイトル" v-model="generalEstimationTitle"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ generalEstimationTitleErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistPc-content__form-title">総評</div>
          <textarea class="revRegistPc-content__form-areaForm" placeholder="総評(詳しくお願いします)" v-model="generalEstimation"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ generalEstimationErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div class="revRegistPc-content__bottom-wrap">
          <button type="submit" class="revRegistJr-content__bottom-cancel" @click="back">前の項目へ</button>
          <button type="submit" class="revRegistJr-content__bottom-next revRegistJr-content__bottom-link" @click="posting">投稿する</button>
        </div>
      </from>

    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component,Emit,Vue } from 'vue-property-decorator';
import axios from "axios";
import { validHalfNumAlp,validMaxLen,validMinLen } from '@/utils/validate';
import { toolStoreModule } from '@/store/modules/tool';

@Component
export default class ReviewRegisterPc extends Vue {

  public joiningRoute:any = null;
  public enrollmentStatus:any = null;
  public occupation:any = null;
  public position:any = null;
  public enrollmentPeriod:any = null;
  public employmentStatus:any = null;
  public welfareOfficeEnvironment:any = null;
  public workingHours:any = null;

  public inCompanySystem:any = null;
  public corporateCulture:any = null;
  public holiday:any = null;
  public organizationalStructure:any = null;
  public easeOfWorkForWomen:any = null;

  public imageGap :any = null;
  public rewardingWork :any = null;
  public strengthsAndWeaknesses :any = null;
  public annualIncomeSalary :any = null;
  public businessOutlook :any = null;

  public generalEstimationTitle :any = null;
  public generalEstimation :any = null;


  public joiningRouteErrMsg:any = null;
  public enrollmentStatusErrMsg:any = null;
  public occupationErrMsg:any = null;
  public positionErrMsg:any = null;
  public enrollmentPeriodErrMsg:any = null;
  public employmentStatusErrMsg:any = null;
  public welfareOfficeEnvironmentErrMsg:any = null;
  public workingHoursErrMsg:any = null;

  public inCompanySystemErrMsg:any = null;
  public corporateCultureErrMsg:any = null;
  public holidayErrMsg:any = null;
  public organizationalStructureErrMsg:any = null;
  public easeOfWorkForWomenErrMsg:any = null;

  public imageGapErrMsg :any = null;
  public rewardingWorkErrMsg :any = null;
  public strengthsAndWeaknessesErrMsg :any = null;
  public annualIncomeSalaryErrMsg :any = null;
  public businessOutlookErrMsg :any = null;

  public generalEstimationTitleErrMsg :any = null;
  public generalEstimationErrMsg :any = null;
  public commonErrMsg :any = null;

  @Emit() public changeformcomponents(){};

  // TODO:backメソッド発火後のコンポーネントの動作が上手く行かない。
  public back() {
    sessionStorage.setItem('changeComponentsStates','GeneralComment');
    this.changeformcomponents();
  }

  public async posting() {

    //入社経路欄
    if (!this.joiningRoute) {
      this.commonErrMsg = null,
      this.joiningRoute = null,
      this.joiningRouteErrMsg = null,
      //未入力チェック
      console.log("入社経路欄が未入力です。");
      this.joiningRouteErrMsg = "入社経路欄が未入力です。";
    } else if(!validHalfNumAlp(this.joiningRoute)){
      this.commonErrMsg = null,
      this.joiningRoute = null,
      this.joiningRouteErrMsg = null;
      // 半角英数時チェック
      console.log("入社経路は半角英数字で入力してください");
      this.joiningRouteErrMsg = "入社経路は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("入社経路欄のバリテーションOKです");
      this.joiningRouteErrMsg = null;
      this.commonErrMsg = null
      sessionStorage.setItem('joining_route',this.joiningRoute);
    }

    //在籍状況欄
    if (!this.enrollmentStatus) {
      this.commonErrMsg = null,
      this.enrollmentStatus = null,
      this.enrollmentStatusErrMsg = null,
      //未入力チェック
      console.log("在籍状況欄が未入力です。");
      this.enrollmentStatusErrMsg = "在籍状況欄が未入力です。";
    } else if(!validHalfNumAlp(this.enrollmentStatus)){
      this.commonErrMsg = null,
      this.enrollmentStatus = null,
      this.enrollmentStatusErrMsg = null,
      // 半角英数時チェック
      console.log("在籍状況欄は半角英数字で入力してください");
      this.enrollmentStatusErrMsg = "在籍状況欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("在籍状況欄のバリテーションOKです");
      this.enrollmentStatusErrMsg = null;
      this.commonErrMsg = null;
      sessionStorage.setItem('enrollment_status',this.enrollmentStatus);
    }

    //在籍時の職種欄
    if (!this.occupation) {
      this.commonErrMsg = null,
      this.occupation = null,
      this.occupationErrMsg = null,
      //未入力チェック
      console.log("在籍時の職種欄が未入力です。");
      this.occupationErrMsg = "在籍時の職種欄が未入力です。";
    } else if(!validHalfNumAlp(this.occupation)){
      this.commonErrMsg = null,
      this.occupation = null,
      this.occupationErrMsg = null,
      // 半角英数時チェック
      console.log("在籍時の職種欄は半角英数字で入力してください");
      this.occupationErrMsg = "在籍時の職種欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("在籍時の職種欄のバリテーションOKです");
      this.occupationErrMsg = null;
      this.commonErrMsg = null;
      sessionStorage.setItem('occupation',this.occupation);
    }

    //在籍時の役職欄
    if (!this.position) {
      this.commonErrMsg = null,
      this.position = null,
      this.commonErrMsg = null,
      //未入力チェック
      console.log("在籍時の役職欄が未入力です。");
      this.positionErrMsg = "在籍時の役職欄が未入力です。";
    } else if(!validHalfNumAlp(this.position)){
      this.commonErrMsg = null,
      this.position = null,
      this.positionErrMsg = null,
      // 半角英数時チェック
      console.log("在籍時の役職欄は半角英数字で入力してください");
      this.positionErrMsg = "在籍時の役職欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("在籍時の役職欄のバリテーションOKです");
      this.positionErrMsg = null;
      this.commonErrMsg = null;
      sessionStorage.setItem('position',this.position);
    }

    //在籍期間欄
    if (!this.enrollmentPeriod) {
      this.commonErrMsg = null,
      this.enrollmentPeriod = null,
      this.enrollmentPeriodErrMsg = null,
      //未入力チェック
      console.log("在籍期間欄が未入力です。");
      this.enrollmentPeriodErrMsg = "在籍期間欄が未入力です。";
    } else if(!validHalfNumAlp(this.enrollmentPeriod)){
      this.commonErrMsg = null,
      this.enrollmentPeriod = null,
      this.enrollmentPeriodErrMsg = null;
      // 半角英数時チェック
      console.log("在籍期間欄は半角英数字で入力してください");
      this.enrollmentPeriodErrMsg = "在籍期間欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("在籍期間欄のバリテーションOKです");
      this.enrollmentPeriodErrMsg = null;
      this.commonErrMsg = null
      sessionStorage.setItem('enrollment_period',this.enrollmentPeriod);
    }

    //在籍形態欄
    if (!this.employmentStatus) {
      this.commonErrMsg = null,
      this.employmentStatus = null,
      this.employmentStatusErrMsg = null,
      //未入力チェック
      console.log("在籍形態欄が未入力です。");
      this.employmentStatusErrMsg = "在籍形態欄が未入力です。";
    } else if(!validHalfNumAlp(this.employmentStatus)){
      this.commonErrMsg = null,
      this.employmentStatus = null,
      this.employmentStatusErrMsg = null,
      // 半角英数時チェック
      console.log("在籍形態欄は半角英数字で入力してください");
      this.employmentStatusErrMsg = "在籍形態欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("在籍形態欄のバリテーションOKです");
      this.commonErrMsg = null;
      this.employmentStatusErrMsg = null;
      sessionStorage.setItem('employment_status',this.employmentStatus);
    }

    //福利厚生欄
    if (!this.welfareOfficeEnvironment) {
      this.commonErrMsg = null,
      this.welfareOfficeEnvironment = null,
      this.welfareOfficeEnvironmentErrMsg = null,
      //未入力チェック
      console.log("福利厚生欄が未入力です。");
      this.welfareOfficeEnvironmentErrMsg = "福利厚生欄が未入力です。";
    } else if(!validHalfNumAlp(this.welfareOfficeEnvironment)){
      this.commonErrMsg = null,
      this.welfareOfficeEnvironment = null,
      this.welfareOfficeEnvironmentErrMsg = null,
      // 半角英数時チェック
      console.log("福利厚生は半角英数字で入力してください");
      this.welfareOfficeEnvironmentErrMsg = "福利厚生は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("福利厚生のバリテーションOKです");
      this.welfareOfficeEnvironmentErrMsg = null;
      this.commonErrMsg = null;
      sessionStorage.setItem('welfare_office_environment',this.welfareOfficeEnvironment);
    }

    //勤務時間
    if (!this.workingHours) {
      this.commonErrMsg = null,
      this.workingHours = null,
      this.workingHoursErrMsg = null,
      //未入力チェック
      console.log("勤務時間欄が未入力です。");
      this.workingHoursErrMsg = "勤務時間欄が未入力です。";
    } else if(!validHalfNumAlp(this.workingHours)){
      this.commonErrMsg = null,
      this.workingHours = null,
      this.workingHoursErrMsg = null,
      // 半角英数時チェック
      console.log("半角英数時チェックは半角英数字で入力してください");
      this.workingHoursErrMsg = "半角英数時チェックは半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("半角英数時チェックのバリテーションOKです");
      this.workingHoursErrMsg = null;
      this.commonErrMsg = null;
      sessionStorage.setItem('working_hours',this.workingHours);
    }

      //社内制度
    if (!this.inCompanySystem) {
      this.commonErrMsg = null,
      this.inCompanySystem = null,
      this.inCompanySystemErrMsg = null,
      //未入力チェック
      console.log("社内制度欄が未入力です。");
      this.inCompanySystemErrMsg = "社内制度欄が未入力です。";
    } else if(!validHalfNumAlp(this.inCompanySystem)){
      this.commonErrMsg = null,
      this.inCompanySystem = null,
      // 半角英数時チェック
      console.log("社内制度は半角英数字で入力してください");
      this.inCompanySystemErrMsg = "社内制度は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("社内制度欄のバリテーションOKです");
      this.commonErrMsg = null,
      this.inCompanySystemErrMsg = null;
      sessionStorage.setItem('inCompany_system',this.inCompanySystem);
    }

    //企業文化
    if (!this.corporateCulture) {
      this.commonErrMsg = null,
      this.corporateCulture = null,
      this.corporateCultureErrMsg = null,
      //未入力チェック
      console.log("企業文化欄が未入力です。");
      this.corporateCultureErrMsg = "企業文化欄が未入力です。";
    } else if(!validHalfNumAlp(this.corporateCulture)){
      this.commonErrMsg = null,
      this.corporateCulture = null,
      // 半角英数時チェック
      console.log("企業文化欄は半角英数字で入力してください");
      this.corporateCultureErrMsg = "企業文化欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("企業文化欄のバリテーションOKです");
      this.commonErrMsg = null,
      this.corporateCultureErrMsg = null;
      sessionStorage.setItem('corporate_culture',this.corporateCulture);
    }

    //休暇について
    if (!this.holiday) {
      this.commonErrMsg = null,
      this.holiday = null,
      this.holidayErrMsg = null,
      //未入力チェック
      console.log("休暇についての欄が未入力です。");
      this.holidayErrMsg = "休暇についての欄が未入力です。";
    } else if(!validHalfNumAlp(this.holiday)){
      this.commonErrMsg = null,
      this.holiday = null,
      // 半角英数時チェック
      console.log("休暇についての欄は半角英数字で入力してください");
      this.holidayErrMsg = "休暇についての欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("休暇についての欄のバリテーションOKです");
      this.commonErrMsg = null,
      this.holidayErrMsg = null;
      sessionStorage.setItem('holiday',this.holiday);
    }

    //組織体制
    if (!this.organizationalStructure) {
      this.commonErrMsg = null,
      this.organizationalStructure = null,
      this.organizationalStructureErrMsg = null,
      //未入力チェック
      console.log("組織体制欄が未入力です。");
      this.organizationalStructureErrMsg = "組織体制欄が未入力です。";
    } else if(!validHalfNumAlp(this.organizationalStructure)){
      this.commonErrMsg = null,
      this.organizationalStructure = null,
      // 半角英数時チェック
      console.log("組織体制欄は半角英数字で入力してください");
      this.organizationalStructureErrMsg = "組織体制欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("組織体制欄のバリテーションOKです");
      this.commonErrMsg = null,
      this.organizationalStructureErrMsg = null,
      sessionStorage.setItem('organizational_structure',this.organizationalStructure);
    }

    //女性の働きやすさについて
    if (!this.easeOfWorkForWomen) {
      this.commonErrMsg = null,
      this.easeOfWorkForWomen = null,
      this.easeOfWorkForWomenErrMsg = null,
      //未入力チェック
      console.log("女性の働きやすさについての欄が未入力です。");
      this.easeOfWorkForWomenErrMsg = "女性の働きやすさについての欄が未入力です。";
    } else if(!validHalfNumAlp(this.easeOfWorkForWomen)){
      this.commonErrMsg = null,
      this.easeOfWorkForWomen = null,
      // 半角英数時チェック
      console.log("女性の働きやすさについての欄は半角英数字で入力してください");
      this.easeOfWorkForWomenErrMsg = "女性の働きやすさについての欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("女性の働きやすさについての欄のバリテーションOKです");
      this.commonErrMsg = null
      this.easeOfWorkForWomenErrMsg = null,
      sessionStorage.setItem('ease_of_work_for_women',this.easeOfWorkForWomen);
    }

    //入社前とのギャップ
    if (!this.imageGap) {
      this.commonErrMsg = null,
      this.imageGap = null,
      this.imageGapErrMsg = null;
      //未入力チェック
      console.log("入社前とのギャップ欄が未入力です。");
      this.imageGapErrMsg = "入社前とのギャップ欄が未入力です。";
    } else if(!validHalfNumAlp(this.imageGap)){
      this.commonErrMsg = null,
      this.imageGap = null,
      this.imageGapErrMsg = null;
      // 半角英数時チェック
      console.log("入社前とのギャップは半角英数字で入力してください");
      this.imageGapErrMsg = "入社前とのギャップは半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("入社前とのギャップ欄のバリテーションOKです");
      this.imageGapErrMsg = null;
      this.commonErrMsg = null
      sessionStorage.setItem('image_gap',this.imageGap);
    }

    //働きがい
    if (!this.rewardingWork) {
      this.commonErrMsg = null,
      this.rewardingWork = null,
      this.rewardingWorkErrMsg = null;
      //未入力チェック
      console.log("働きがいの欄が未入力です。");
      this.rewardingWorkErrMsg = "働きがいの欄が未入力です。";
    } else if(!validHalfNumAlp(this.rewardingWork)){
      this.rewardingWorkErrMsg = null;
      this.commonErrMsg = null,
      this.rewardingWork = null,
      // 半角英数時チェック
      console.log("働きがいの欄は半角英数字で入力してください");
      this.rewardingWorkErrMsg = "働きがいの欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("働きがい欄のバリテーションOKです");
      this.commonErrMsg = null,
      this.rewardingWorkErrMsg = null;
      sessionStorage.setItem('rewarding_work',this.rewardingWork);
    }

    //強み・弱み
    if (!this.strengthsAndWeaknesses) {
      this.commonErrMsg = null,
      this.strengthsAndWeaknesses = null,
      this.strengthsAndWeaknessesErrMsg = null,
      //未入力チェック
      console.log("強み・弱みの欄が未入力です。");
      this.strengthsAndWeaknessesErrMsg = "強み・弱みの欄が未入力です。";
    } else if(!validHalfNumAlp(this.strengthsAndWeaknesses)){
      this.commonErrMsg = null,
      this.strengthsAndWeaknesses = null,
      this.strengthsAndWeaknessesErrMsg = null,
      // 半角英数時チェック
      console.log("強み・弱みの欄は半角英数字で入力してください");
      this.strengthsAndWeaknessesErrMsg = "強み・弱みの欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("強み・弱みの欄のバリテーションOKです");
      this.commonErrMsg = null,
      this.strengthsAndWeaknessesErrMsg = null,
      sessionStorage.setItem('strengths_and_weaknesses',this.strengthsAndWeaknesses);
    }

    //年収・給与
    if (!this.annualIncomeSalary) {
      this.commonErrMsg = null,
      this.annualIncomeSalary = null,
      this.annualIncomeSalaryErrMsg = null,
      //未入力チェック
      console.log("年収・給与欄が未入力です。");
      this.annualIncomeSalaryErrMsg = "年収・給与欄が未入力です。";
    } else if(!validHalfNumAlp(this.annualIncomeSalary)){
      this.commonErrMsg = null,
      this.annualIncomeSalary = null,
      this.annualIncomeSalaryErrMsg = null,
      // 半角英数時チェック
      console.log("年収・給与欄は半角英数字で入力してください");
      this.annualIncomeSalaryErrMsg = "年収・給与欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("年収・給与欄のバリテーションOKです");
      this.commonErrMsg = null,
      this.annualIncomeSalaryErrMsg = null;
      sessionStorage.setItem('annual_income_salary',this.annualIncomeSalary);
    }

    //事業展望
    if (!this.businessOutlook) {
      this.commonErrMsg = null,
      this.businessOutlook = null,
      this.businessOutlookErrMsg = null,
      //未入力チェック
      console.log("事業展望欄が未入力です。");
      this.businessOutlookErrMsg = "事業展望欄が未入力です。";
    } else if(!validHalfNumAlp(this.businessOutlook)){
      this.commonErrMsg = null,
      this.businessOutlook = null,
      this.businessOutlookErrMsg = null,
      // 半角英数時チェック
      console.log("事業展望欄は半角英数字で入力してください");
      this.businessOutlookErrMsg = "事業展望欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("事業展望欄のバリテーションOKです");
      this.commonErrMsg = null
      this.businessOutlookErrMsg = null;
      sessionStorage.setItem('enrollment_period',this.businessOutlook);
    }

     //レビューのタイトル
    if (!this.generalEstimationTitle) {
      this.commonErrMsg = null,
      this.generalEstimationTitle = null,
      this.generalEstimationTitleErrMsg = null;
      //未入力チェック
      console.log("レビューのタイトル欄が未入力です。");
      this.generalEstimationTitleErrMsg = "レビューのタイトル欄が未入力です。";
    } else if(!validHalfNumAlp(this.generalEstimationTitle)){
      this.commonErrMsg = null,
      this.generalEstimationTitle = null,
      this.generalEstimationTitleErrMsg = null;
      // 半角英数時チェック
      console.log("レビューのタイトルは半角英数字で入力してください");
      this.generalEstimationTitleErrMsg = "レビューのタイトルは半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("レビューのタイトル欄のバリテーションOKです");
      this.commonErrMsg = null,
      this.generalEstimationTitleErrMsg = null;
      sessionStorage.setItem('general_estimation_title',this.generalEstimationTitle);
    }

    //総評
    if (!this.generalEstimation) {
      this.commonErrMsg = null,
      this.generalEstimation = null,
      this.generalEstimationErrMsg = null;
      //未入力チェック
      console.log("総評欄が未入力です。");
      this.generalEstimationErrMsg = "総評欄が未入力です。";
    } else if(!validHalfNumAlp(this.generalEstimation)){
      this.commonErrMsg = null,
      this.generalEstimation = null,
      this.generalEstimationErrMsg = null;
      // 半角英数時チェック
      console.log("総評欄は半角英数字で入力してください");
      this.generalEstimationErrMsg = "総評欄は半角英数字で入力してください";
    } else {
      //バリテーションがOKな場合
      console.log("総評欄のバリテーションOKです");
      this.commonErrMsg = null
      this.generalEstimationErrMsg = null;
      sessionStorage.setItem('general_estimation',this.generalEstimation);
    }

    if(this.joiningRouteErrMsg === null && this.enrollmentStatusErrMsg === null &&
      this.occupationErrMsg === null && this.positionErrMsg === null &&
      this.enrollmentPeriodErrMsg === null && this.employmentStatusErrMsg === null &&
      this.welfareOfficeEnvironmentErrMsg === null && this.workingHoursErrMsg === null &&
      this.inCompanySystemErrMsg === null && this.corporateCultureErrMsg === null &&
      this.holidayErrMsg === null && this.organizationalStructureErrMsg === null &&
      this.easeOfWorkForWomenErrMsg === null && this.imageGapErrMsg === null &&
      this.rewardingWorkErrMsg === null && this.strengthsAndWeaknessesErrMsg === null &&
      this.annualIncomeSalaryErrMsg === null && this.businessOutlookErrMsg === null &&
      this.commonErrMsg === null &&  this.generalEstimationTitleErrMsg === null &&
      this.generalEstimationErrMsg === null){

      try {
        toolStoreModule.setLoading();

        const param = {
          joining_route: sessionStorage.getItem('joining_route'),
          enrollment_status: sessionStorage.getItem('enrollment_status'),
          occupation: sessionStorage.getItem('occupation'),
          position: sessionStorage.getItem('position'),
          enrollment_period: sessionStorage.getItem('enrollment_period'),
          employment_status: sessionStorage.getItem('employment_status'),
          welfare_office_environment: sessionStorage.getItem('welfare_office_environment'),
          working_hours: sessionStorage.getItem('working_hours'),

          inCompany_system: sessionStorage.getItem('inCompany_system'),
          corporate_culture: sessionStorage.getItem('corporate_culture'),
          holiday: sessionStorage.getItem('holiday'),
          organizational_structure: sessionStorage.getItem('organizational_structure'),
          ease_of_work_for_women: sessionStorage.getItem('ease_of_work_for_women'),

          image_gap: sessionStorage.getItem('image_gap'),
          rewarding_work: sessionStorage.getItem('rewarding_work'),
          strengths_and_weaknesses: sessionStorage.getItem('strengths_and_weaknesses'),
          annual_income_salary: sessionStorage.getItem('annual_income_salary'),
          business_outlook: sessionStorage.getItem('enrollment_period'),

          general_estimation_title: sessionStorage.getItem('general_estimation_title'),
          general_estimation: sessionStorage.getItem('general_estimation'),
        }

        const registPostingReview = await axios.post('/api/registPostingReview',param);
        console.dir(registPostingReview);
        toolStoreModule.clearLoading();

        sessionStorage.setItem('changeComponentsStates','SubmissionComplete');
        this.changeformcomponents();
      } catch (e) {
        console.log("登録処理中に例外エラーが発生しました。");
        this.commonErrMsg = null;
        this.commonErrMsg = '接続エラーが発生しました。時間を置いたのち再度送信して下さい';
      }
    }
  }

  //TODO:修正予定
  public fetchData(){
    this.joiningRoute = sessionStorage.getItem('joining_route');
    this.enrollmentStatus = sessionStorage.getItem('enrollment_status');;
    this.occupation = sessionStorage.getItem('occupation');
    this.position = sessionStorage.getItem('position');
    this.enrollmentPeriod = sessionStorage.getItem('enrollment_period');
    this.employmentStatus = sessionStorage.getItem('employment_status');
    this.welfareOfficeEnvironment = sessionStorage.getItem('welfare_office_environment');
    this.workingHours = sessionStorage.getItem('working_hours');
    this.inCompanySystem = sessionStorage.getItem('inCompany_system');
    this.corporateCulture = sessionStorage.getItem('corporate_culture');
    this.holiday = sessionStorage.getItem('holiday');
    this.organizationalStructure = sessionStorage.getItem('organizational_structure');
    this.easeOfWorkForWomen = sessionStorage.getItem('ease_of_work_for_women');
    this.imageGap = sessionStorage.getItem('image_gap');
    this.rewardingWork = sessionStorage.getItem('rewarding_work');
    this.strengthsAndWeaknesses = sessionStorage.getItem('strengths_and_weaknesses');
    this.annualIncomeSalary = sessionStorage.getItem('annual_income_salary');
    this.businessOutlook = sessionStorage.getItem('business_outlook');
    this.generalEstimationTitle = sessionStorage.getItem('general_estimation_title');
    this.generalEstimation = sessionStorage.getItem('general_estimation');
  }

  public created(){
    this.fetchData();
  }
}
</script>
<style lang="scss" scope>
  .revRegistPc-content{
  height: 2780px;
  width: 100%;
  background-color: #fff;
  &__wrap{
    max-width: 1000px;
    margin: 30px auto;
  }
  &__form-element{
    height: 2600px;
    width: 630px;
    margin-left: 70px;
    //floatは付属させた要素はabsoluteの様に他要素の影響を受ける様になる。
    float: left;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  &__form-wrap{
    width: 500px;
    margin: 40px auto;
  }
  &__input{
    height: 27px;
    width: 100%;
    margin-bottom: 40px;
    display: block;
    border: 0;
    border-bottom: 1px solid #b4becb;
    &::placeholder{
      font-size: 15px;
    }
    &:last-child{
      margin-bottom: 0px;
    }
    &:focus{
      outline: none;
      border-bottom: 1px solid #0082e6;
    }
  }
  &__title{
    font-size: 2rem;
    text-align: center;
  }
  &__sub{
    text-align: center;
    margin-bottom: 40px;
  }
  &__form-title{
    width: 120px;
    margin-bottom: 10px;
    font-size: 13px;
    text-align: center;
    border: 0;
    border-bottom: 1px solid #b4becb;
  }
  &__form-areaForm{
    height: 100px;
    width: 500px;
    background-color: #F4F4F4;
    margin-bottom: 5px;
    border-radius: 2px;
    border: 0;
    border: 1px solid #b4becb;
    resize: none;
    &:focus{
      outline: none;
      border: 1px solid #0082e6;
    }
  }
  &__form-conciseTitle{
    width: 380px;
    margin-bottom: 10px;
    font-size: 13px;
    text-align: center;
    border: 0;
    border-bottom: 1px solid #b4becb;
  }
  &__form-conciseAreaForm{
    height: 25px;
    width: 500px;
    background-color: #F4F4F4;
    margin-bottom: 5px;
    border-radius: 2px;
    border: 0;
    border: 1px solid #b4becb;
    resize: none;
    &:focus{
      outline: none;
      border: 1px solid #0082e6;
    }
  }
  &__bottom-wrap{
    width: 500px;
    margin: 50px auto 0px;
    text-align: center;
  }
  &__bottom-link{
    text-decoration: none;
  }
  &__bottom-return{
    padding: 10px 45px;
    background-color: #fff;
    color: #06D1EC;
    border: none;
    border: 1px solid #06D1EC;
  }
  &__bottom-next{
    padding: 10px 47px;
    margin-left: 50px;
    background-color: #06D1EC;
    color: #fff;
    border: none;
    border: 1px solid #fff;
  }
}
</style>
