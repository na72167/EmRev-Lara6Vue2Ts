<template>
  <div class="signup js-signup-style">
    <form class="signup-formStyle" @submit.prevent="signUp">

      <h2 class="signup-title">SignUp</h2>
      <div class="signup-commonMsgArea">
        <!-- 接続エラー等のメッセージをここに出力させる。 -->
        <span class="#">
          <strong>{{ commonErrMsg }}</strong>
        </span>
      </div>

      <!-- メールアドレス入力欄 -->
      <div class="signup-emailaddressField">
        <label class="#">
          <input class="signup-emailForm" :class="{ errInput: emailErrMsg }" type="text" placeholder="Email" v-model="email">
          <div class="signup-areaMsg">
            <span class="#">
              <strong>{{ emailErrMsg }}</strong>
            </span>
          </div>
        </label>
      </div>

      <!-- パスワード入力 -->
      <div class="signup-passwardField">
        <label class="#">
          <input class="signup-passwordForm" :class="{ errInput: passwordErrMsg }" type="password" placeholder="Password" v-model="password">
          <div class="signup-areaMsg">
            <span class="#">
              <strong>{{ passwordErrMsg }}</strong>
            </span>
          </div>
        </label>
      </div>

      <!-- 確認用パスワード入力 -->
      <div class="signup-confirmationPasswardField">
        <!-- 後にphpでエラー時用のスタイルを付属させる様にする。 register-->
        <label class="#">
          <input class="signup-passwordConfirmationForm" :class="{ errInput: passwordConfirmation }" type="password" placeholder="Confirmation Password" v-model="passwordConfirmation">
        </label>
      </div>

      <div class="signup-registerBtnField">
        <button class="signup-registerBtnField"
          type="submit"
          :disabled="isSubmit"
        >
        {{ signUpButton }}
        </button>
      </div>

    </form>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import axios from "axios";
import Cookies from "js-cookie"
import { EmailFormErrMsg,PasswordFormErrMsg,CommonErrMsg } from '@/utils/auth';
import { SIGNUP_NUM } from '@/utils/auth-mapping';
import { validEmail,validHalfNumAlp,validMaxLen,validMinLen,validEmailDup } from '@/utils/validate';
import { toolStoreModule } from '@/store/modules/tool';

@Component
export default class SignUp extends Vue {

  public email: string | null = null;
  public password: string | null = null;
  public passwordConfirmation: string | null = null;

  public emailErrMsg: string |null = null;
  public passwordErrMsg: string | null = null;
  public commonErrMsg: string |null = null;

  public isSubmit: boolean = false;
  public signUpButton = '登録する';

  // private signUpParams = {
  //   email: this.email,
  //   password: this.password,
  // };
  // private sesLimit: SIGNUP_NUM.SES_LIMIT;

  public async signUp() {

      //Emailのバリデーション
    if (!this.email) {
      //空かどうかのバリテーション
      console.log("(signUp)メールアドレスの入力がありません");
      this.commonErrMsg = null,
      this.emailErrMsg = null,
      this.emailErrMsg = EmailFormErrMsg.emailErrMsgEmpty
    } else if(!validEmail(this.email)){
      // メールアドレスの形式確認
      console.log("(signUp)メールアドレスの形式が正しくありません");
      this.commonErrMsg = null,
      this.emailErrMsg = null,
      this.emailErrMsg = EmailFormErrMsg.emailErrMsgEmailFormat
    } else if(validHalfNumAlp(this.email)){
      //半角英数字のバリテーション
      console.log("(signUp)メールアドレスを半角英数で入力してください");
      this.commonErrMsg = null,
      this.emailErrMsg = null,
      this.emailErrMsg = EmailFormErrMsg.emailErrMsgHalfNumAlp
    } else if(validMaxLen(this.email,SIGNUP_NUM.SIGNUP_EMAIL_MAXLEN)){
      //最大文字数のバリテーション
      console.log("(signUp)メールアドレスを20文字以内にしてください");
      this.commonErrMsg = null,
      this.emailErrMsg = null,
      this.emailErrMsg = EmailFormErrMsg.emailErrMsgMaxLen
    } else if(validMinLen(this.email,SIGNUP_NUM.SIGNUP_EMAIL_MINLEN)){
      //最小文字数のバリテーション
      console.log("(signUp)メールアドレスは4文字以上にしてください");
      this.commonErrMsg = null,
      this.emailErrMsg = null,
      this.emailErrMsg = EmailFormErrMsg.emailErrMsgMinLen
      // TODO:ユーザー登録機能この部分が上手くいってないかも
    } else if(await validEmailDup(this.email)){
      //重複確認のバリテーション
      console.log("(signUp)メールアドレスが重複しています");
      this.commonErrMsg = null,
      this.emailErrMsg = null,
      this.emailErrMsg = EmailFormErrMsg.emailErrMsgEmailDup
    } else {
      //バリテーションがOKな場合
      console.log("(signUp)メールアドレスのバリテーションOKです");
      this.emailErrMsg = null;
    }

     //パスワードのバリデーション
    if (!this.password) {
      //空文字チェック
      console.log("(signUp)パスワードを入力してください");
      this.commonErrMsg = null,
      this.passwordErrMsg = null,
      this.passwordErrMsg = PasswordFormErrMsg.passwordErrMsgEmpty
    } else if(!validHalfNumAlp(this.password)) {
      //半角英数字チェック
      console.log("(signUp)パスワードは半角英数字で入力してください");
      this.commonErrMsg = null,
      this.passwordErrMsg = null,
      this.passwordErrMsg = PasswordFormErrMsg.passwordErrMsgHalfNumAlp
    } else if(validMaxLen(this.password,SIGNUP_NUM.SIGNUP_PASSWORD_MAXLEN)){
      //最大文字数チェック
      console.log("(signUp)パスワードは20文字以内で入力してください");
      this.commonErrMsg = null,
      this.passwordErrMsg = null,
      this.passwordErrMsg = PasswordFormErrMsg.passwordErrMsgMaxLen
    } else if(validMinLen(this.password,SIGNUP_NUM.SIGNUP_PASSWORD_MINLEN)){
      //最小文字数チェック
      console.log("(signUp)パスワードは6文字以上で入力してください");
      this.commonErrMsg = null,
      this.passwordErrMsg = null,
      this.passwordErrMsg = PasswordFormErrMsg.passwordErrMsgMinLen
    } else if(this.password !== this.passwordConfirmation){
      //確認用パスワードと条件が合うか確認
      console.log("(signUp)確認用パスワードと一致しません");
      this.commonErrMsg = null,
      this.passwordErrMsg = null,
      this.passwordErrMsg = PasswordFormErrMsg.passwordErrMsgPassMatch
    } else {
      //バリテーションOK
      console.log("(signUp)パスワードのバリテーションOKです");
      this.passwordErrMsg = null;
    }

  // バリテーションが通っているかを確認。
    if(this.emailErrMsg === null && this.passwordErrMsg === null){
      console.log("ユーザー登録用バリテーションOKです。");

      try {
        this.isSubmit = true;
        this.signUpButton = '登録中・・・';
        // TODO:ロード画面実装
        toolStoreModule.setLoading();
        console.log("登録処理に入りました。");

        const signUpParams = {
          email: this.email,
          password: this.password,
        }

        const registUser = await axios.post('/api/register',signUpParams);
        console.dir(registUser);

        Cookies.set('user_id', registUser.data.id);
        Cookies.set('email', registUser.data.email);
        Cookies.set('roll', registUser.data.roll);

        toolStoreModule.clearLoading();
        this.signUpButton = "登録する";
        this.isSubmit = false;

        this.$router.push(`/myPage/${Cookies.get('user_id')}`)
      } catch (e) {
        console.log("登録処理中に例外エラーが発生しました。");
        this.commonErrMsg = CommonErrMsg.commonErrMsg;
        this.signUpButton = '登録する';
        this.isSubmit = false;
      }
      // 上手く動かない。
      // finally {
      //   this.isSubmit = false;
      //   this.signUpButton = '登録する';
      // }
    }
  }
}
</script>

<style lang="scss" scope>
  .signup{
    height: 350px;
    width: 400px;
    background-color: #fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    float: left;
    position: relative;
    top: 10px;
    left: 10px;
    z-index: 1;
    transition: all .5s;
    &-loginWrap{
      height: 367px;
      width: 420px;
      position: relative;
      top: 40px;
      right: 10px;
      overflow: hidden;
    }
    &-title{
      text-align: center;
      font-size: 22px;
      margin: 10px 0;
    }
    &-formStyle{
      height: 236px;
      width: 320px;
      margin: 40px auto;
    }
    &-emailaddressField{
      height: 57px;
      position: relative;
    }
    &-emailForm{
      border: 0;
      border-bottom: 1px solid #b4becb;
      width: 100%;
      padding: 3px;
      font-size: 16px;
      position: absolute;
      top:27px;
      &:focus{
        outline: none;
        border-bottom: 1px solid #047aed;
      }
    }
    &-passwardField{
      height: 57px;
      position: relative;
    }
    &-passwordForm{
      border: 0;
      border-bottom: 1px solid #b4becb;
      width: 100%;
      padding: 3px;
      font-size: 16px;
      position: absolute;
      top:27px;
      &:focus{
        outline: none;
        border-bottom: 1px solid #047aed;
      }
    }
    &-confirmationPasswardField{
      height: 57px;
      position: relative;
    }
    &-passwordConfirmationForm{
      border: 0;
      border-bottom: 1px solid #b4becb;
      width: 100%;
      padding: 3px;
      font-size: 16px;
      position: absolute;
      top:27px;
      &:focus{
        outline: none;
        border-bottom: 1px solid #047aed;
      }
    }

    &-registerBtnField{
      height: 57px;
      position: relative;
      padding: 0 105px;
    }
    &-registerBtn{
      position: absolute;
      top:30px;
      padding: 10px 30px;
      background-color: #047aed;
      border: none;
      border-radius: 5px;
      color: #fff;
    }
  }
</style>
