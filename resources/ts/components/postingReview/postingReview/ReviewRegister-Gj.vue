<template>
  <div>
    <div>入社後のギャップや働きがい(gj)</div>
    <!-- TODO:切り分けるかも -->
    <div class="revRegistJr-content__bottom-wrap">
      <button type="submit" class="revRegistJr-content__bottom-cancel" @click="back">前の項目へ</button>
      <button type="submit" class="revRegistJr-content__bottom-next revRegistJr-content__bottom-link" @click="next">次の項目へ</button>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component,Emit,Vue } from 'vue-property-decorator';

@Component
export default class ReviewRegisterGj extends Vue {
  @Emit() public changeformcomponents(){};

  // TODO:backメソッド発火後のコンポーネントの動作が上手く行かない。
  public back() {
    sessionStorage.setItem('changeComponentsStates','InternalSystemsAndCorporateCulture');
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

    sessionStorage.setItem('changeComponentsStates','GeneralComment');
    this.changeformcomponents();

  }
}
</script>
