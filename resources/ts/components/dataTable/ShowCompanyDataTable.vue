<template>
    <!-- TODO:もう少しコンポーネントらしく再利用性の高いものにする。 -->
  <div>
    <div v-for="displayData in displayDatas" :key="displayData.id">
      <div class="rigisRigisterReviewList__reviewLink">{{ settings.numberOfReviews }}<span>{{ displayData.number_of_reviews }}</span>){{ settings.case }}</div>

      <div class="rigisRigisterReviewList__mainContent">
        <div class="rigisRigisterReviewList__imgComInfoWrap">
          <div class="rigisRigisterReviewList__imgStyle">
            <img class="rigisRigisterReviewList__img"
            src="<?php echo etc::showImg(etc::sanitize($val['pic1'])); ?>">
          </div>

          <div class="rigisRigisterReviewList__companyWrap">
            <div class="rigisRigisterReviewList__industryClassification">{{ settings.industryClassification }}<span>{{ displayData.industry }}</span></div>
            <div class="rigisRigisterReviewList__companyName">{{ settings.companyName }}<span>{{ displayData.company_name }}</span></div>
            <div class="rigisRigisterReviewList__location">{{ settings.location }}<span>{{ displayData.location }}</span></div>
          </div>
          <div class="rigisRigisterReviewList__reviewLink">{{ settings.numberOfReviews }}<span>{{ displayData.number_of_Reviews }}</span>){{ settings.case }}</div>
        </div>

        <div class="rigisRigisterReviewList__userDetail">
          <div class="rigisRigisterReviewList__name">(総合的な会社の印象が出力される予定)</div>
          <div class="rigisRigisterReviewList__dmIncumbentWrap">
            <div class="rigisRigisterReviewList__age">{{ settings.postedDate }}<span>{{ displayData.created_at }}</span></div>
            <div class="rigisRigisterReviewList__dm">{{ settings.generalComment }}<span>サンプルサンプルサンプルサンプル<br>サンプルサンプルサンプルサンプルサ...</span><h1 class="rigisRigisterReviewList__userProfLink">{{ settings.details }}</h1></div>
          </div>
          <div class="rigisRigisterReviewList__userNameAgeFavoliteWrap">
            <div class="rigisRigisterReviewList__userNameAgeWrap">:<span>ユーザー名</span>{{ settings.mr }}<span>〇〇</span>{{ settings.age }}</div>
            <div class="rigisRigisterReviewList__favorite">{{ settings.star }}</div>
          </div>
        </div>

        <!-- :to="`/reviewRegisterForm/company_id=${displayData.id}`" -->
        <div @click="next">
          <router-link
            :to="{name: 'ReviewRegisterForm', query: {company_id: `${displayData.id}`}}"
            class="menuAbout__itemWrap-lineNone"
          >
            <li>{{settings.makeReview}}</li>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>
<script lang="ts" scoped>
import { Component,Prop,Vue } from 'vue-property-decorator';

@Component
export default class ShowCompanyDataTable extends Vue {
  @Prop(Object) public displayDatas!: Object;
  @Prop(Object) public settings!: Object;

  public next(){
    sessionStorage.setItem('changeComponentsStates','JoiningRoute');
    sessionStorage.setItem('progressPostingReviewState','JoiningRoute');
  }
}
</script>

<style lang="scss" scope>
.rigisRigisterReviewList{
  height: 100%;
  width: 720px;
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  margin-left: 870px;
  margin-right: auto;
  &__header{
    border-bottom: 1px solid #b4becb;
    padding:5px 20px;
    text-align: center;
  }
  &__title{
    font-size: 2rem;
  }
  &__mainContent{
    height: 100%;
    width: 680px;
    margin: 12px 0;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
  }

  &__imgComInfoWrap{
    width: 380px;
  }

  &__industryClassification{
    font-size: 12px;
    width: 360px;
  }

  &__companyName{
    font-size: 12px;
  }

  &__location{
    font-size: 12px;
  }

  &__reviewLink{
    width: 230px;
    font-size: 12px;
    float: left;
    position: relative;
    top:120px;
    left: -95px;
  }

  &__imgStyle{
    height: 90px;
    width: 90px;
    border-radius: 5px;
    margin: 20px 15px 10px 15px;
    float: left;
    overflow: hidden;
  }

  &__img{
    height: 90px;
    width: 90px;
    border-radius: 5px;
    border: 1px solid #b4becb;
    background-color: black;
    float: left;
  }

  &__companyWrap{
    font-size: 20px;
    height: 1px;
    position: relative;
    top:35px;
    right: 5px;
  }

  &__userDetail{
    height: 155px;
    width: 330px;
    float: right;
    margin-top: -20px;
    padding: 15px 5px 5px 20px;
    border-left: 1px solid #b4becb;
  }

  &__nameAgeWrap{
    width: 300px;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 3px;
  }

  &__name{
    float: left;
  }

  &__age{
    float: left;
    margin-top: 10px;
    font-size: 14px;
  }

  &__dmIncumbentWrap{
    width: 350px;
    overflow: hidden;
  }

  &__dm{
    float: left;
  }

  &__userNameAgeFavoliteWrap{
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
    margin-left:20px;
    width: 320px;
  }

  &__userNameAgeWrap{
    float: left;
  }

  &__affiliatedCompanyStateWrap{
    width: 350px;
    overflow: hidden;
    margin-bottom: 5px;
  }

  &__Incumbent{
    float: left;
    margin-left: 10px;
  }

  &__affiliatedCompanyStateWrap{
    width: 350px;
    overflow: hidden;
    margin-bottom: 5px;
  }

  &__affiliatedCompany{
    float: left;
    width: 80px;
    margin-top: 35px;
  }

  &__san{
    float: left;
    width: 32px;
    margin-top: 40px;
  }

  &__favorite{
    margin-right: 0px;
    margin-top: -10px;
    font-size: 20px;
    float: right;
  }

  &__state{
    float: left;
    margin-left: 10px;
  }

  &__userProfLink{
    font-size: 12px;
    margin-top: 2px;
  }

  &__pageTransition{
    height: 50px;
    border-top: 1px solid #b4becb;
    border-bottom: 1px solid #b4becb;
  }
  &__pageTransition-contentWrap{
    width: 80px;
    margin: 10px auto 0;
  }
  &__pageTransition-leftArrow{
    float: left;
  }
  &__pageTransition-guideNumber{
    float: left;
  }
  &__pageTransition-rightArrow{
    float: left;
  }
}
</style>
