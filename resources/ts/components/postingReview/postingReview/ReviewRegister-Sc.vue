<template>
  <div class="revRegistCm-content__form-element">
    <div class="revRegistCm-content__form-wrap">
      <h4 class="revRegistCm-content__title">投稿完了</h4>
      <h1 class="revRegistCm-content__sub">投稿ありがとうございました</h1>
        <div class="revRegistCm-content__bottom-wrap">
          <button type="submit" class="revRegistCm-content__bottom-next revRegistCm-content__bottom-link" @click="myPage">マイページへ</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component,Emit,Vue } from 'vue-property-decorator';
import Cookies from "js-cookie"

@Component
export default class ReviewRegisterSc extends Vue {

  @Emit() public changeformcomponents(){};

  public myPage(){
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

    this.$router.push(`/MyPage/${Cookies.get('user_id')}`);
  }

}
</script>
<style lang="scss" scope>

.revRegistCm-content{
  height: 630px;
  width: 100%;
  background-color: #fff;
  &__wrap{
    max-width: 1000px;
    margin: 30px auto;
  }
  &__form-element{
    height: 230px;
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
  &__bottom-wrap{
    width: 500px;
    margin: 50px auto 0px;
    text-align: center;
  }
  &__bottom-link{
    text-decoration: none;
  }
  &__bottom-next{
    padding: 10px 47px;
    margin-left: 15px;
    background-color: #06D1EC;
    color: #fff;
    border: none;
    border: 1px solid #fff;
  }
}
</style>
