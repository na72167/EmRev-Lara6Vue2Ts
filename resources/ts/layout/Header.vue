<template>
  <header id="index-top" class="header js-toggle-sp-menu-target">
    <div class="header__content-wrap">
        <h1 class="header__title">
          <router-link to="/" class="header__title-link">
            Title
          </router-link>
        </h1>

        <!-- TODO:下処理の再レンタリングが上手く行かない。 -->
        <!-- 参考予定: Vue.jsでビューの変更がされないときに疑うこと+主な解決策方法 -->
        <!-- https://qiita.com/bobu_web/items/ec5a98d03758d12ad721#dom%E3%81%8C%E5%86%8D%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%95%E3%82%8C%E3%81%9A%E5%A4%89%E6%9B%B4%E5%89%8D%E3%81%AE%E5%80%A4%E3%81%8C%E6%AE%8B%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B -->
      <div>
        <nav class="header__nav"  v-if="checkUserData">
          <li class="header__nav-list" @click="switchMenuState">MENU</li>
          <router-link to="/SelectReviewCompany" class="menuAbout__itemWrap-lineNone">
            <li class="header__nav-list" @click="checkMenuState">POSTING REVIEW</li>
          </router-link>
          <li class="header__nav-list" @click="logout">LOGOUT</li>
          <AboutMenu
            :class="checkAboutMenuState"
          />
        </nav>

        <nav class="header__nav" v-if="!checkUserData">
          <div>
            <li class="header__nav-list" @click="checkMenuState">MENU</li>
            <li class="header__nav-list active-login-menu" @click="changeLoginProp">LOGIN</li>
            <li class="header__nav-list active-signup-menu" @click="changeSignUpProp">SIGNUP</li>
          </div>
          <AboutMenu
            :class="checkAboutMenuState"
          />
        </nav>

      </div>
    </div>
  </header>
</template>

<script lang="ts" scoped>
import { Component,Vue } from 'vue-property-decorator';
import { toolStoreModule } from '@/store/modules/tool';
import Cookies from "js-cookie";
import AboutMenu from '@/layout/components/header/AboutMenu';
import { OpenAboutMenu } from '@/store/models.d';
// import { SIGNUP_NAME,LOGIN_NAME } from '@/utils/auth-mapping';

@Component({
  components: {
    AboutMenu
  }
})
export default class Header extends Vue {

  private aboutMenuState: OpenAboutMenu = false;
  private switchingMenuState: string | null | false = null;

  get checkUserData() {
    return Cookies.get('user_id');
  }

  get checkAboutMenuState() {
    this.aboutMenuState = toolStoreModule.AboutMenuState;
    return toolStoreModule.AboutMenuState;
  }

  public checkMenuState(){
    if (this.aboutMenuState === 'openAboutMenu'){
      toolStoreModule.switchMenuComponent(false);
    }
  }

  public switchMenuState(){
    // aboutMenuState内の要素を反転させる。
    this.switchingMenuState = this.aboutMenuState === false ? 'openAboutMenu' : false;
    toolStoreModule.switchMenuComponent(this.switchingMenuState);
  }

  public changeLoginProp(): void{
    //memo:何故か外部ファイルで定義したリテラルをそのまま持ってきた場合だと型周りでエラー吐く
    toolStoreModule.changeLoginComponents('login');
  }

  public changeSignUpProp(): void{
    toolStoreModule.changeSignUpComponents('signUp');
  }

  public logout(): void{
    Cookies.remove('user_id');
    Cookies.remove('email');
    Cookies.remove('roll');
    this.$router.push('/');
  }

}

</script>

<style lang="scss" scope>
  .header{
    height: 70px;
    background-color: #047aed;
    overflow: hidden;
    width: 100%;
    &__content-wrap{
      height: 100%;
      margin: 0 auto;
      max-width: 1100px;
    }
    &__title{
      display: inline;
      font-size: 2em;
      position: relative;
      color:#fff;
      top: calc(70px / 2 - 51px / 2);
      margin-left: 67px;
      font-weight: 300;
    }
    &__title-link{
      color:#fff;
      text-decoration: none;
      &:link{
      color:#fff;
      }
      &:visited{
      color:#fff;
      }
    }
    &__nav{
      float: right;
      position: relative;
      margin-right: 67px;
      top: calc(70px / 2 - 25px / 2);
      &-list{
      list-style-type: none;
      float: left;
      margin-right: 10px;
      color:#fff;
      &:last-child{
          margin-right: 0px;
      }
      &:hover {
          border-bottom: 2px #fff solid;
      }
      }
    }
  }
  .openAboutMenu{
    transition: all .5s;
    transform: translateX(100%);
  }
</style>
