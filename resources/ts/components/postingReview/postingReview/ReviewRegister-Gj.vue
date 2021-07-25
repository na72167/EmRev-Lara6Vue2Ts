<template>

  <div class="revRegistCc-content__form-element">
    <div class="revRegistCc-content__form-wrap">
      <h4 class="revRegistCc-content__title">Post Company Review</h4>
      <h1 class="revRegistCc-content__sub">入社後のギャップや働きがい</h1>

      <form class="revRegistJr-content__form">

        <div>
          <div class="revRegistJw-content__form-title">入社前とのギャップ</div>
          <textarea class="revRegistJw-content__form-areaForm" :class="{ errInput: imageGapErrMsg }" placeholder="入社前とのギャップ" v-model="imageGap"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ imageGapErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistJw-content__form-title">働きがい</div>
          <textarea class="revRegistJw-content__form-areaForm" :class="{ errInput: rewardingWorkErrMsg }" placeholder="働きがい" v-model="rewardingWork"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ rewardingWorkErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistJw-content__form-title">強み・弱み</div>
          <textarea class="revRegistJw-content__form-areaForm" :class="{ errInput: strengthsAndWeaknessesErrMsg }" placeholder="強み・弱い" v-model="strengthsAndWeaknesses"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ strengthsAndWeaknessesErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistJw-content__form-title">年収・給与</div>
          <textarea class="revRegistJw-content__form-areaForm" :class="{ errInput: annualIncomeSalaryErrMsg }" placeholder="年収・給与" v-model="annualIncomeSalary"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ annualIncomeSalaryErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistJw-content__form-title">事業展望</div>
          <textarea class="revRegistJw-content__form-areaForm" :class="{ errInput: businessOutlookErrMsg }" placeholder="事業展望" v-model="businessOutlook"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ businessOutlookErrMsg }}</strong>
            </span>
          </div>
        </div>

        <!-- TODO:切り分けるかも -->
        <div class="revRegistJw-content__bottom-wrap">
          <button type="submit" class="revRegistJw-content__bottom-cancel" @click="back">前の項目へ</button>
          <button type="submit" class="revRegistJw-content__bottom-next revRegistJr-content__bottom-link" @click="next">次の項目へ</button>
        </div>
      </form>

    </div>
  </div>

</template>

<script lang="ts" scoped>
import { Component,Emit,Vue } from 'vue-property-decorator';
import { validHalfNumAlp,validMaxLen,validMinLen } from '@/utils/validate';

@Component
export default class ReviewRegisterGj extends Vue {

  public imageGap :any = null;
  public rewardingWork :any = null;
  public strengthsAndWeaknesses :any = null;
  public annualIncomeSalary :any = null;
  public businessOutlook :any = null;

  public imageGapErrMsg :any = null;
  public rewardingWorkErrMsg :any = null;
  public strengthsAndWeaknessesErrMsg :any = null;
  public annualIncomeSalaryErrMsg :any = null;
  public businessOutlookErrMsg :any = null;
  public commonErrMsg:any = null;

  @Emit() public changeformcomponents(){};

  // TODO:backメソッド発火後のコンポーネントの動作が上手く行かない。
  public back() {
    sessionStorage.setItem('changeComponentsStates','InternalSystemsAndCorporateCulture');
    this.changeformcomponents();
  }

  public next() {

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

    if(this.imageGapErrMsg === null &&
      this.rewardingWorkErrMsg === null &&
      this.strengthsAndWeaknessesErrMsg === null &&
      this.annualIncomeSalaryErrMsg === null &&
      this.businessOutlookErrMsg === null &&
      this.commonErrMsg === null){
      sessionStorage.setItem('changeComponentsStates','GeneralComment');
      this.changeformcomponents();
    }

  }

  public fetchData(){
    this.imageGap = sessionStorage.getItem('image_gap');
    this.rewardingWork = sessionStorage.getItem('rewarding_work');
    this.strengthsAndWeaknesses = sessionStorage.getItem('strengths_and_weaknesses');
    this.annualIncomeSalary = sessionStorage.getItem('annual_income_salary');
    this.businessOutlook = sessionStorage.getItem('enrollment_period');
  }

  public created(){
    this.fetchData();
  }
}
</script>
<style lang="scss" scope>
.revRegistJw-content{
  height: 1280px;
  width: 100%;
  background-color: #fff;
  &__wrap{
    max-width: 1000px;
    margin: 30px auto;
  }
  &__form-element{
    height: 1100px;
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
