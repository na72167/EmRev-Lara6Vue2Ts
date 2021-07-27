<template>
  <section class="empregEmployeeRegister">
    <div class="empregEmployeeRegister__content">
      <h1 class="empregEmployeeRegister__title">Employee Registration</h1>

      <form>
        <h4>現在ログイン中のメールアドレス</h4>
        <strong>{{ commonErrMsg }}</strong>
        <div class="empregEmployeeRegister__outputStyle">
          <!-- ここは必ずメールアドレスが表示されないといけないので分岐処理はナシ。 -->
          <!-- TODO:第三者が触る事を考えてemailを表示させない方に変更する。 -->
          {{ email }}
        </div>
        <h4 class="empregEmployeeRegister__secondText">のメールアドレスで投稿者登録します。宜しいですか?</h4>
        <div class="empregEmployeeRegister__bottom-wrap">
          <!-- 時間がある時にinput・valueの形のボタンに変更する。 -->
          <bottom type="submit" class="empregEmployeeRegister__bottom-return" @click="cancel">キャンセル</bottom>
          <bottom type="submit" class="empregEmployeeRegister__bottom-next" @click="registe">登録する</bottom>
        </div>
      </form>

    </div>
  </section>
</template>

<script lang="ts" scoped>
import { Component,Watch,Vue } from 'vue-property-decorator';
import axios from "axios";
import Cookies from "js-cookie"
import { CommonErrMsg } from '@/utils/auth';
import { toolStoreModule } from '@/store/modules/tool';

@Component
export default class AboutMenu extends Vue {
  public user_id: string | null | undefined = null;
  public email: string |null | undefined = null;
  public commonErrMsg: string |null = null;

  public cancel(){
    this.$router.push(`/MyPage/${Cookies.get('user_id')}`);
  }

  public async registe(){
    try {

      const param = {
        user_id: this.user_id,
        email: this.email
      }

      toolStoreModule.setLoading();
      const employeeRegistration = await axios.post('/api/contributorRegistration',param);
      console.dir(employeeRegistration);
      toolStoreModule.clearLoading();

      this.$router.push(`/MyPage/${Cookies.get('user_id')}`);
    } catch (e) {
      console.log("登録処理中に例外エラーが発生しました。");
      this.commonErrMsg = CommonErrMsg.commonErrMsg;
    }
  }

  @Watch('$route')
  public fetchdata(){
    this.user_id = Cookies.get('user_id');
    this.email = Cookies.get('email');
  }

  public created(){
    this.fetchdata();
  }

}
</script>

<style lang="scss" scope>
.empregEmployeeRegister{
    height: 590px;
    width: 1400px;
    background-color: #fff;
    border-radius: 3px;
    padding: 30px 0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    position: relative;
    top:-20px;
  &__content{
    height: 200px;
    width: 700px;
    margin: 0 auto;
    padding: 20px 0;
  }
  &__input{
    border: 1px solid #b4becb;
    height: 40px;
    width: 700px;
  }
  &__title{
    font-size: 2rem;
    text-align: center;
    margin-bottom: 50px;
  }
  &__outputStyle{
    border-bottom: 1px solid #b4becb;
    margin: 10px auto;
    text-align: center;
    height: 30px;
    width: 550px;
  }
  &__secondText{
    position: relative;
    left: 450px;
  }
  &__content-bottom{
    display: block;
    height: 46px;
    width: 116px;
    margin: 20px auto 0;
    padding: 10px 27px;
    font-size: 15px;
    background-color: #06D1EC;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
  }
  &__bottom-wrap{
    position: relative;
    top:50px;
    margin: 0 auto;
    width: 385px;
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
