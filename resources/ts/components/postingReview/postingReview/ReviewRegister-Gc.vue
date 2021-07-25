<template>

  <div class="revRegistCc-content__form-element">
    <div class="revRegistCc-content__form-wrap">

      <h4 class="revRegistCc-content__title">Post Company Review</h4>
      <h1 class="revRegistCc-content__sub">総評</h1>

      <from class="revRegistGc-content__wrap">
        <div>
          <div class="revRegistGc-content__form-conciseTitle">レビュータイトル</div>
          <textarea class="revRegistGc-content__form-conciseAreaForm" placeholder="レビュータイトル" v-model="generalEstimationTitle"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ generalEstimationTitleErrMsg }}</strong>
            </span>
          </div>
        </div>

        <div>
          <div class="revRegistGc-content__form-title">総評</div>
          <textarea class="revRegistGc-content__form-areaForm" placeholder="総評(詳しくお願いします)" v-model="generalEstimation"></textarea>
          <div class="areaMsg">
            <span class="#">
              <strong>{{ generalEstimationErrMsg }}</strong>
            </span>
          </div>
        </div>

        <!-- TODO:切り分けるかも -->
        <div class="revRegistJr-content__bottom-wrap">
          <button type="submit" class="revRegistJr-content__bottom-cancel" @click="back">前の項目へ</button>
          <button type="submit" class="revRegistJr-content__bottom-next revRegistJr-content__bottom-link" @click="next">投稿内容の確認へ</button>
        </div>
      </from>

    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component,Emit,Vue } from 'vue-property-decorator';
import { validHalfNumAlp,validMaxLen,validMinLen } from '@/utils/validate';

@Component
export default class ReviewRegisterGc extends Vue {

  public generalEstimationTitle :any = null;
  public generalEstimation :any = null;

  public generalEstimationTitleErrMsg :any = null;
  public generalEstimationErrMsg :any = null;
  public commonErrMsg :any = null;

  @Emit() public changeformcomponents(){};

  // TODO:backメソッド発火後のコンポーネントの動作が上手く行かない。
  public back() {
    sessionStorage.setItem('changeComponentsStates','GapsAndJobSatisfactionAfterJoiningTheCompany');
    this.changeformcomponents();
  }

  public next() {

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

    if(this.generalEstimationTitleErrMsg === null &&
      this.generalEstimationErrMsg === null){
      sessionStorage.setItem('changeComponentsStates','PostingCheck');
      this.changeformcomponents();
    }

  }

  public fetchData(){
    this.generalEstimationTitle = sessionStorage.getItem('inCompany_system');
    this.generalEstimation = sessionStorage.getItem('corporate_culture');
  }

  public created(){
    this.fetchData();
  }
}
</script>
<style lang="scss" scope>
.revRegistGc-content{
  height: 630px;
  width: 100%;
  background-color: #fff;
  &__wrap{
    max-width: 1000px;
    margin: 30px auto;
  }
  &__form-element{
    height: 530px;
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
  &__form-conciseTitle{
    width: 150px;
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
  &__title{
    font-size: 2rem;
    text-align: center;
  }
  &__sub{
    text-align: center;
    margin-bottom: 40px;
  }
  &__form-title{
    width: 70px;
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
