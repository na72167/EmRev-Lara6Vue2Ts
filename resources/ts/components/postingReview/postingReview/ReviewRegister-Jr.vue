<template>
  <div class="revRegistJr-content__form-element">
    <div class="revRegistJr-content__form-wrap">
      <h4 class="revRegistJr-content__title">Post Company Review</h4>
      <h1 class="revRegistJr-content__sub">入社経路や在籍状況について</h1>

      <form class="revRegistJr-content__form">
        <div class="revRegistJr-content__input-wrap">

          <div>
            <div class="areaMsg">
              <span class="#">
                <strong>{{ joiningRouteErrMsg }}</strong>
              </span>
            </div>
            <input class="revRegistJr-content__input" :class="{ errInput: joiningRouteErrMsg }" placeholder="入社経路" v-model="joiningRoute">
          </div>

          <div>
            <div class="areaMsg">
              <span class="#">
                <strong>{{ enrollmentStatusErrMsg }}</strong>
              </span>
            </div>
            <input class="revRegistJr-content__input" :class="{ errInput: enrollmentStatusErrMsg }" placeholder="在籍状況" v-model="enrollmentStatus">
          </div>

          <div>
            <div class="areaMsg">
              <span class="#">
                <strong>{{ occupationErrMsg }}</strong>
              </span>
            </div>
            <input class="revRegistJr-content__input" :class="{ errInput: occupationErrMsg }" placeholder="在籍時の職種" v-model="occupation">
          </div>

          <div>
            <div class="areaMsg">
              <span class="#">
                <strong>{{ positionErrMsg }}</strong>
              </span>
            </div>
            <input class="revRegistJr-content__input" :class="{ errInput: positionErrMsg }" placeholder="在籍時の役職" v-model="position">
          </div>

          <div>
            <div class="areaMsg">
              <span class="#">
                <strong>{{ enrollmentPeriodErrMsg }}</strong>
              </span>
            </div>
            <input class="revRegistJr-content__input" :class="{ errInput: enrollmentPeriodErrMsg }" placeholder="在籍期間" v-model="enrollmentPeriod">
          </div>

          <div>
            <div class="areaMsg">
              <span class="#">
                <strong>{{ employmentStatusErrMsg }}</strong>
              </span>
            </div>
            <input class="revRegistJr-content__input" :class="{ errInput: employmentStatusErrMsg }" placeholder="在籍形態" v-model="employmentStatus">
          </div>

          <div>
            <div class="areaMsg">
              <span class="#">
                <strong>{{ welfareOfficeEnvironmentErrMsg }}</strong>
              </span>
            </div>
            <input class="revRegistJr-content__input" :class="{ errInput: welfareOfficeEnvironmentErrMsg }" placeholder="福利厚生" v-model="welfareOfficeEnvironment">
          </div>

          <div>
            <div class="areaMsg">
              <span class="#">
                <strong>{{ workingHoursErrMsg }}</strong>
              </span>
            </div>
            <input class="revRegistJr-content__input" :class="{ errInput: workingHoursErrMsg }" placeholder="勤務時間" v-model="workingHours">
          </div>

        </div>

        <!-- TODO:切り分けるかも -->
        <div class="revRegistJr-content__bottom-wrap">
          <button class="revRegistJr-content__bottom-cancel" @click="cancel">会社選択画面に戻る</button>
          <button type="submit" class="revRegistJr-content__bottom-next revRegistJr-content__bottom-link" @click="next">次の項目へ</button>
        </div>
      </form>

    </div>
  </div>

</template>

<script lang="ts" scoped>
import { Component,Prop,Emit,Vue } from 'vue-property-decorator';
import Cookies from "js-cookie"
import { APPLYCOMPANY_NUM,CommonErrMsg } from '@/utils/setting-applyCompany';
import { SETTINGS_INTERNAL_SYSTEMS_AND_CORPORATE_CULTURE } from '@/utils/setting-postingReview';
import { validHalfNumAlp,validMaxLen,validMinLen } from '@/utils/validate';

@Component
export default class ReviewRegisterJr extends Vue {

  public joiningRoute:any = null;
  public enrollmentStatus:any = null;
  public occupation:any = null;
  public position:any = null;
  public enrollmentPeriod:any = null;
  public employmentStatus:any = null;
  public welfareOfficeEnvironment:any = null;
  public workingHours:any = null;

  public joiningRouteErrMsg:any = null;
  public enrollmentStatusErrMsg:any = null;
  public occupationErrMsg:any = null;
  public positionErrMsg:any = null;
  public enrollmentPeriodErrMsg:any = null;
  public employmentStatusErrMsg:any = null;
  public welfareOfficeEnvironmentErrMsg:any = null;
  public workingHoursErrMsg:any = null;
  public commonErrMsg: any = null;

  @Prop(Object) public options!: Object;
  @Prop(Object) public settings!: Object;

  @Emit() public changeformcomponents(){};

  public cancel() {
    // Vue + sessionStorageでページ移動しても検索内容をキープする
    // https://blog.capilano-fw.com/?p=7124
    // https://qiita.com/uralogical/items/ade858ccfa164d164a3b#%E4%BF%9D%E5%AD%98
    // https://techblo.shikataramuno.com/entry/2019/03/18/212544
    sessionStorage.removeItem('joining_route');
    sessionStorage.removeItem('enrollment_status');
    sessionStorage.removeItem('occupation');
    sessionStorage.removeItem('position');
    sessionStorage.removeItem('enrollment_period');
    sessionStorage.removeItem('employment_status');
    sessionStorage.removeItem('welfare_office_environment');
    sessionStorage.removeItem('working_hours');

    sessionStorage.removeItem('inCompany_system');
    sessionStorage.removeItem('corporate_culture');
    sessionStorage.removeItem('holiday');
    sessionStorage.removeItem('organizational_structure');
    sessionStorage.removeItem('ease_of_work_for_women');

    sessionStorage.removeItem('image_gap');
    sessionStorage.removeItem('rewarding_work');
    sessionStorage.removeItem('strengths_and_weaknesses');
    sessionStorage.removeItem('annual_income_salary');
    sessionStorage.removeItem('business_outlook');

    sessionStorage.removeItem('general_estimation_title');
    sessionStorage.removeItem('general_estimation');

    sessionStorage.setItem('changeComponentsStates','JoiningRoute');
    this.changeformcomponents();
    //webstrageの削除処理
    this.$router.push('/selectReviewCompany')
  }

  public next() {

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

    // TODO:配列の型周りでエラーが出てしまうので今のところはsetItemの引数を個別指定している。
    // https://typescript-jp.gitbook.io/deep-dive/type-system/types

    if(this.joiningRouteErrMsg === null && this.enrollmentStatusErrMsg === null &&
      this.occupationErrMsg === null && this.positionErrMsg === null &&
      this.enrollmentPeriodErrMsg === null && this.employmentStatusErrMsg === null &&
      this.welfareOfficeEnvironmentErrMsg === null && this.workingHoursErrMsg === null){
      sessionStorage.setItem('changeComponentsStates','InternalSystemsAndCorporateCulture');
      this.changeformcomponents();
    }

  }

  public fetchData(){
    this.joiningRoute = sessionStorage.getItem('joining_route');
    this.enrollmentStatus = sessionStorage.getItem('enrollment_status');
    this.occupation = sessionStorage.getItem('occupation');
    this.position = sessionStorage.getItem('position');
    this.enrollmentPeriod = sessionStorage.getItem('enrollment_period');
    this.employmentStatus = sessionStorage.getItem('employment_status');
    this.welfareOfficeEnvironment = sessionStorage.getItem('welfare_office_environment');
    this.workingHours = sessionStorage.getItem('working_hours');
  }

  public created(){
    this.fetchData();
  }


}
</script>

<style lang="scss" scope>
  .revRegistJr-content{
    height: 880px;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    &__wrap{
      max-width: 1000px;
      margin: 30px auto;
    }
    &__form-element{
      height: 830px;
      width: 630px;
      margin-left: 70px;
      border-radius: 10px;
      float: left;
      background-color: #fff;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }
    &__form-wrap{
      margin: 50px auto;
      max-width: 480px;
    }
    &__title{
      font-size: 2rem;
      text-align: center;
    }
    &__sub{
      text-align: center;
    }
    &__form{
      margin: 40px;
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
    &__bottom-wrap{
      margin-top: 60px;
      height: 41px;
      width: 412px;
    }
    &__bottom-link{
      text-decoration: none;
    }
    &__bottom-cancel{
      padding: 10px 15px;
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
