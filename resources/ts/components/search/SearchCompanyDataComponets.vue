<template>
  <section class="rigisRigisterReviewListSearch">
    <h1 class="rigisRigisterReviewListSearch__title">Company Search</h1>
    <div>{{ commonErrMsg }}</div>
    <form class="rigisRigisterReviewListSearch__form" @submit.prevent="Search">

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">会社名</h1>
        <input class="rigisRigisterReviewListSearch__inputStyle" v-model="company_name" placeholder="入力してください">
      </div>

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">代表者名</h1>
        <input class="rigisRigisterReviewListSearch__inputStyle" v-model="representative" placeholder="入力してください">
      </div>

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">所在地</h1>
        <input class="rigisRigisterReviewListSearch__inputStyle" v-model="location" placeholder="入力してください">
      </div>

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">業界</h1>
        <input class="rigisRigisterReviewListSearch__inputStyle" v-model="industry" placeholder="入力してください">
      </div>

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">設立年度</h1>
        <input class="rigisRigisterReviewListSearch__inputStyle" v-model="year_of_establishment" placeholder="入力してください">
      </div>

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">上場年</h1>
        <input class="rigisRigisterReviewListSearch__inputStyle" v-model="listed_year" placeholder="入力してください">
      </div>

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">従業員数</h1>
        <input class="rigisRigisterReviewListSearch__inputStyle" v-model="number_of_employees" placeholder="入力してください">
      </div>

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">口コミ数</h1>
        <input class="rigisRigisterReviewListSearch__inputStyle" v-model="number_of_reviews" placeholder="入力してください">
      </div>

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">平均年収</h1>
        <div class="rigisRigisterReviewListSearch__betweenStyleWrap">
          <input class="rigisRigisterReviewListSearch__betweenStyle" v-model="average_annual_income" placeholder="入力してください">
          <div class="rigisRigisterReviewListSearch__betweenStyleHoge">~</div>
          <input class="rigisRigisterReviewListSearch__betweenStyle" placeholder="入力してください">
        </div>
      </div>

      <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">平均年齢</h1>
        <div class="rigisRigisterReviewListSearch__betweenStyleWrap">
          <input class="rigisRigisterReviewListSearch__betweenStyle" v-model="average_age" placeholder="入力してください">
          <div class="rigisRigisterReviewListSearch__betweenStyleHoge">~</div>
          <input class="rigisRigisterReviewListSearch__betweenStyle" placeholder="入力してください">
        </div>
      </div>

      <!-- <div class="rigisRigisterReviewListSearch__inputContentStyle">
        <h1 class="rigisRigisterReviewListSearch__inputName">並び替え順序</h1>
        <input class="rigisRigisterReviewListSearch__inputStyle" placeholder="入力してください">
      </div> -->

      <button type="submit" class="rigisRigisterReviewListSearch__bottomStyle">検索する</button>
    </form>
  </section>
</template>
<script lang="ts" scoped>
import { Component,Emit,Vue } from 'vue-property-decorator';
import axios from "axios";
import { selectComponyMenu } from '@/store/modules/selectComponyMenu';
import { toolStoreModule } from '@/store/modules/tool';

@Component
export default class SearchCompanyDataComponets extends Vue {

  public company_name: any = null;
  public representative: any = null;
  public location: any = null;
  public industry: any = null;
  public year_of_establishment: any = null;
  public listed_year: any = null;
  public number_of_employees: any = null;
  public number_of_reviews: any = null;
  public average_annual_income: any = null;
  public average_age: any = null;

  public commonErrMsg: any = null;

  @Emit() public searchstate(value :any){};

  // TODO:これなどを参考に書き直す。
  // Vueで項目が多い検索フォームでの状態の持ち方。
  // https://zenn.dev/andynuma/articles/5f9ac0c01671d1

  public async Search(){

    toolStoreModule.setLoading();
    console.log("会社情報検索処理に入りました。");

    const params = {
      company_name: this.company_name,
      representative: this.representative,
      location: this.location,
      industry: this.industry,
      year_of_establishment: this.year_of_establishment,
      listed_year: this.listed_year,
      number_of_employees: this.number_of_employees,
      number_of_reviews: this.number_of_reviews,
      average_annual_income: this.average_annual_income,
      average_age: this.average_age,
    }

    this.searchstate(params);

  }
}
</script>
<style lang="scss" scope>
  .rigisRigisterReviewListSearch{
  height: 670px;
  width: 290px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 30px;
  position: relative;
  left: 550px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px 20px;
  &__title{
    font-size: 22px;
    text-align: center;
  }
  &__form{
    height: 100%;
    margin-top: 10px;
  }
  &__inputContentStyle{
    margin: 0 auto 10px;
    padding: 0 10px;
  }
  &__inputName{
    font-size: 14px;
    height: 16px;
  }
  &__inputStyle{
    border: 1px solid #707070;
    width: 220px;
    border-radius: 5px;
  }
  &__betweenStyleWrap{
    margin-top: 5px;
    width: 370px;
    overflow: hidden;
  }
  &__betweenStyle{
    border: 1px solid #707070;
    border-radius: 5px;
    width: 101px;
    float: left;
  }
  &__betweenStyleHoge{
    font-size: 30px;
    margin-top: -18px;
    float: left;
  }
  &__bottomStyle{
    text-align: center;
    display: block;
    width: 150px;
    padding: 5px 0;
    margin: 20px auto 0;
    background-color: #06D1EC;
    color: #fff;
    border: none;
    border: 1px solid #fff;
  }
}
</style>
