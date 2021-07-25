<template>
  <div class="revRegistCc-content__form-element">
    <div class="revRegistCc-content__form-wrap">
      <h4 class="revRegistCc-content__title">Post Company Review</h4>
      <h1 class="revRegistCc-content__sub">社内制度や企業文化について</h1>

      <form class="revRegistJr-content__form">

        <div>
          <div class="revRegistCc-content__form-title">社内制度</div>
          <textarea class="revRegistCc-content__form-areaForm" :class="{ errInput: inCompanySystemErrMsg }" placeholder="社内制度" v-model="inCompanySystem"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ inCompanySystemErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistCc-content__form-title">企業文化</div>
          <textarea class="revRegistCc-content__form-areaForm" :class="{ errInput: corporateCultureErrMsg }" placeholder="企業文化" v-model="corporateCulture"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ corporateCultureErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistCc-content__form-title">休暇について</div>
          <textarea class="revRegistCc-content__form-areaForm" :class="{ errInput: holidayErrMsg }" placeholder="休暇について" v-model="holiday"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ holidayErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistCc-content__form-title">組織体制</div>
          <textarea class="revRegistCc-content__form-areaForm" :class="{ errInput: organizationalStructureErrMsg }" placeholder="組織体制" v-model="organizationalStructure"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ organizationalStructureErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistCc-content__form-title">女性の働きやすさについて</div>
          <textarea class="revRegistCc-content__form-areaForm" :class="{ errInput: easeOfWorkForWomenErrMsg }" placeholder="女性の働きやすさについて" v-model="easeOfWorkForWomen"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ easeOfWorkForWomenErrMsg }}</strong>
            </span>
          </div>
        </div>

        <!-- TODO:切り分けるかも -->
        <div class="revRegistCc-content__bottom-wrap">
          <button type="submit" class="revRegistJr-content__bottom-cancel" @click="back">前の項目へ</button>
          <button type="submit" class="revRegistJr-content__bottom-next revRegistJr-content__bottom-link" @click="next">次の項目へ</button>
        </div>
      </form>

    </div>
  </div>

</template>

<script lang="ts" scoped>
import { Component,Emit,Vue } from 'vue-property-decorator';
import { validHalfNumAlp,validMaxLen,validMinLen } from '@/utils/validate';

@Component
export default class ReviewRegisterIc extends Vue {

  public inCompanySystem:any = null;
  public corporateCulture:any = null;
  public holiday:any = null;
  public organizationalStructure:any = null;
  public easeOfWorkForWomen:any = null;

  public inCompanySystemErrMsg:any = null;
  public corporateCultureErrMsg:any = null;
  public holidayErrMsg:any = null;
  public organizationalStructureErrMsg:any = null;
  public easeOfWorkForWomenErrMsg:any = null;
  public commonErrMsg:any = null;

  @Emit() public changeformcomponents(){};

  // TODO:backメソッド発火後のコンポーネントの動作が上手く行かない。
  public back() {
    sessionStorage.setItem('changeComponentsStates','JoiningRoute');
    this.changeformcomponents();
  }

  public next() {

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
      this.organizationalStructure = null,
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
      this.organizationalStructure = null,
      sessionStorage.setItem('organizational_structure',this.organizationalStructure);
    }

    //女性の働きやすさについて
    if (!this.easeOfWorkForWomen) {
      this.commonErrMsg = null,
      this.easeOfWorkForWomen = null,
      this.easeOfWorkForWomen = null,
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
      this.easeOfWorkForWomen = null,
      sessionStorage.setItem('ease_of_work_for_women',this.easeOfWorkForWomen);
    }

    // TODO:配列の型周りでエラーが出てしまうので今のところはsetItemの引数を個別指定している。
    // https://typescript-jp.gitbook.io/deep-dive/type-system/types

    if(this.inCompanySystemErrMsg === null &&
      this.corporateCultureErrMsg === null &&
      this.holidayErrMsg === null &&
      this.organizationalStructureErrMsg === null &&
      this.easeOfWorkForWomenErrMsg === null){
      sessionStorage.setItem('changeComponentsStates','GapsAndJobSatisfactionAfterJoiningTheCompany');
      this.changeformcomponents();
    }

  }

  public fetchData(){
    this.inCompanySystem = sessionStorage.getItem('inCompany_system');
    this.corporateCulture = sessionStorage.getItem('corporate_culture');
    this.holiday = sessionStorage.getItem('holiday');
    this.organizationalStructure = sessionStorage.getItem('organizational_structure');
    this.easeOfWorkForWomen = sessionStorage.getItem('ease_of_work_for_women');
  }

  public created(){
    this.fetchData();
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
