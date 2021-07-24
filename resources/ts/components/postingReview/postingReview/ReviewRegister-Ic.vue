<template>
  <div class="revRegistCc-content__form-element">
    <div class="revRegistCc-content__form-wrap">
      <h4 class="revRegistCc-content__title">Post Company Review</h4>
      <h1 class="revRegistCc-content__sub">社内制度や企業文化について</h1>

      <form class="revRegistJr-content__form">

        <div>
          <div class="revRegistCc-content__form-title">社内制度</div>
          <textarea class="revRegistJr-content__input" :class="{ errInput: corporateCultureErrMsg }" placeholder="企業文化" v-model="corporateCulture"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ corporateCultureErrMsg }}</strong>
            </span>
          </div>
        </div>


        <div>
          <div class="revRegistCc-content__form-title">社内制度</div>
          <textarea class="revRegistJr-content__input" :class="{ errInput: inCompanySystemErrMsg }" placeholder="休暇について" v-model="inCompanySystem"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ inCompanySystemErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistCc-content__form-title">企業文化</div>
          <textarea class="revRegistJr-content__input" :class="{ errInput: corporateCultureErrMsg }" placeholder="休暇について" v-model="corporateCulture"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ corporateCultureErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistCc-content__form-title">休暇について</div>
          <textarea class="revRegistJr-content__input" :class="{ errInput: holidayErrMsg }" placeholder="休暇について" v-model="holiday"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ holidayErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistCc-content__form-title">組織体制</div>
          <textarea class="revRegistJr-content__input" :class="{ errInput: organizationalStructureErrMsg }" placeholder="組織体制" v-model="organizationalStructure"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ organizationalStructureErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistCc-content__form-title">女性の働きやすさについて</div>
          <textarea class="revRegistJr-content__input" :class="{ errInput: easeOfWorkForWomenErrMsg }" placeholder="女性の働きやすさについて" v-model="easeOfWorkForWomen"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ easeOfWorkForWomenErrMsg }}</strong>
            </span>
          </div>
        </div>

        <!-- TODO:切り分けるかも -->
        <div class="revRegistJr-content__bottom-wrap">
          <button type="submit" class="revRegistJr-content__bottom-cancel" @click="back">前の項目へ</button>
          <button type="submit" class="revRegistJr-content__bottom-next revRegistJr-content__bottom-link" @click="next">次の項目へ</button>
        </div>
      </form>

    </div>
  </div>

</template>

<script lang="ts" scoped>
import { Component,Emit,Vue } from 'vue-property-decorator';

@Component
export default class ReviewRegisterIc extends Vue {

  @Emit() public changeformcomponents(){};

  // TODO:backメソッド発火後のコンポーネントの動作が上手く行かない。
  public back() {
    sessionStorage.setItem('changeComponentsStates','JoiningRoutee');
    this.changeformcomponents();
  }

  public next() {
  //   //
  //   if (!this.joiningRoute) {
  //     this.commonErrMsg = null,
  //     this.joiningRoute = null,
  //     //未入力チェック
  //     console.log("欄が未入力です。");
  //     this.joiningRouteErrMsg = "エラーメッセージ"
  //   } else if(!validHalfNumAlp(this.joiningRoute)){
  //     this.commonErrMsg = null,
  //     this.joiningRoute = null,
  //     // 半角英数時チェック
  //     console.log("()は半角英数字で入力してください");
  //     this.joiningRouteErrMsg = "エラーメッセージ";
  //   } else {
  //     //バリテーションがOKな場合
  //     console.log("()のバリテーションOKです");
  //     this.commonErrMsg = null
  //   }

  //   //
  //   if (!this.enrollmentStatus) {
  //     this.commonErrMsg = null,
  //     this.enrollmentStatus = null,
  //     //未入力チェック
  //     console.log("欄が未入力です。");
  //     this.enrollmentStatusErrMsg = "エラー"
  //   } else if(!validHalfNumAlp(this.enrollmentStatus)){
  //     this.commonErrMsg = null,
  //     this.enrollmentStatus = null,
  //     // 半角英数時チェック
  //     console.log("()は半角英数字で入力してください");
  //     this.enrollmentStatusErrMsg = ''
  //   } else {
  //     //バリテーションがOKな場合
  //     console.log("()のバリテーションOKです");
  //     this.commonErrMsg = null
  //   }

  //   //
  //   if (!this.occupation) {
  //     this.commonErrMsg = null,
  //     this.occupation = null,
  //     //未入力チェック
  //     console.log("欄が未入力です。");
  //     this.occupationErrMsg = "エラー";
  //   } else if(!validHalfNumAlp(this.occupation)){
  //     this.commonErrMsg = null,
  //     this.occupation = null,
  //     // 半角英数時チェック
  //     console.log("()は半角英数字で入力してください");
  //     this.occupationErrMsg = "エラー";
  //   } else {
  //     //バリテーションがOKな場合
  //     console.log("()のバリテーションOKです");
  //     this.commonErrMsg = null
  //   }

  //   //
  //   if (!this.position) {
  //     this.commonErrMsg = null,
  //     this.position = null,
  //     //未入力チェック
  //     console.log("欄が未入力です。");
  //     this.positionErrMsg = "エラー";
  //   } else if(!validHalfNumAlp(this.position)){
  //     this.commonErrMsg = null,
  //     this.position = null,
  //     // 半角英数時チェック
  //     console.log("()は半角英数字で入力してください");
  //     this.positionErrMsg = "えらめ";
  //   } else {
  //     //バリテーションがOKな場合
  //     console.log("()のバリテーションOKです");
  //     this.commonErrMsg = null
  //   }

  //   //
  //   if (!this.enrollmentPeriod) {
  //     this.commonErrMsg = null,
  //     this.enrollmentPeriod = null,
  //     //未入力チェック
  //     console.log("欄が未入力です。");
  //     this.enrollmentPeriodErrMsg = "エラー";
  //   } else if(!validHalfNumAlp(this.enrollmentPeriod)){
  //     this.commonErrMsg = null,
  //     this.enrollmentPeriod = null,
  //     // 半角英数時チェック
  //     console.log("()は半角英数字で入力してください");
  //     this.enrollmentPeriodErrMsg = "えらめ";
  //   } else {
  //     //バリテーションがOKな場合
  //     console.log("()のバリテーションOKです");
  //     this.commonErrMsg = null
  //   }

  //   //
  //   if (!this.employmentStatus) {
  //     this.commonErrMsg = null,
  //     this.employmentStatus = null,
  //     //未入力チェック
  //     console.log("欄が未入力です。");
  //     this.employmentStatusErrMsg = "エラー";
  //   } else if(!validHalfNumAlp(this.employmentStatus)){
  //     this.commonErrMsg = null,
  //     this.employmentStatus = null,
  //     // 半角英数時チェック
  //     console.log("()は半角英数字で入力してください");
  //     this.employmentStatusErrMsg = "エラー";
  //   } else {
  //     //バリテーションがOKな場合
  //     console.log("()のバリテーションOKです");
  //     this.commonErrMsg = null
  //   }

  //   //
  //   if (!this.welfareOfficeEnvironment) {
  //     this.commonErrMsg = null,
  //     this.welfareOfficeEnvironment = null,
  //     //未入力チェック
  //     console.log("欄が未入力です。");
  //     this.welfareOfficeEnvironmentErrMsg = "エラー";
  //   } else if(!validHalfNumAlp(this.welfareOfficeEnvironment)){
  //     this.commonErrMsg = null,
  //     this.welfareOfficeEnvironment = null,
  //     // 半角英数時チェック
  //     console.log("()は半角英数字で入力してください");
  //     this.welfareOfficeEnvironmentErrMsg
  //   } else {
  //     //バリテーションがOKな場合
  //     console.log("()のバリテーションOKです");
  //     this.commonErrMsg = null
  //   }

  //   //
  //   if (!this.workingHours) {
  //     this.commonErrMsg = null,
  //     this.workingHours = null,
  //     //未入力チェック
  //     console.log("欄が未入力です。");
  //     this.workingHoursErrMsg = "エラー";
  //   } else if(!validHalfNumAlp(this.workingHours)){
  //     this.commonErrMsg = null,
  //     this.workingHours = null,
  //     // 半角英数時チェック
  //     console.log("()は半角英数字で入力してください");
  //     this.workingHoursErrMsg = "エラー";
  //   } else {
  //     //バリテーションがOKな場合
  //     console.log("()のバリテーションOKです");
  //     this.commonErrMsg = null
  //   }

  //   // TODO:配列の型周りでエラーが出てしまうので今のところはsetItemの引数を個別指定している。
  //   // https://typescript-jp.gitbook.io/deep-dive/type-system/types

  //   sessionStorage.setItem('joining_route',this.joiningRoute);
  //   sessionStorage.setItem('enrollment_status',this.enrollmentStatus);
  //   sessionStorage.setItem('occupation',this.occupation);
  //   sessionStorage.setItem('position',this.position);
  //   sessionStorage.setItem('enrollment_period',this.enrollmentPeriod);
  //   sessionStorage.setItem('employment_status',this.employmentStatus);
  //   sessionStorage.setItem('welfare_office_environment',this.welfareOfficeEnvironment);
  //   sessionStorage.setItem('working_hours',this.workingHours);

  //   this.changeformcomponents("GapsAndJobSatisfactionAfterJoiningTheCompany");

    sessionStorage.setItem('changeComponentsStates','GapsAndJobSatisfactionAfterJoiningTheCompany');
    this.changeformcomponents();
  }
}
</script>

<style lang="scss" scope>
.revRegistCc-content{
  height: 1280px;
  width: 100%;
  background-color: #fff;
  &__wrap{
    max-width: 1000px;
    margin: 30px auto;
  }
  &__form-element{
    height: 1230px;
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
  &__title{
    font-size: 2rem;
    text-align: center;
  }
  &__sub{
    text-align: center;
    margin-bottom: 40px;
  }
  &__form-title{
    width: 110px;
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
