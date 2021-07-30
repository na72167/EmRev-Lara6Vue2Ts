<template>
  <!-- メニューバー -->
  <nav class="menuAbout">
    <ul class="menuAbout__itemWrap">
      <!-- リンク関係 -->
      <!-- TODO:メニューから特定のリンクに飛んだ際にメニューバーが閉まらない -->
      <span>
        <router-link :to="{ name: 'MyPage', query: { user_id: user_id }}" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">マイページ</li>
        </router-link>
        <!-- TODO:パス周りに問題あり -->
        <router-link :to="{ name: 'ProfileEdit', query: { user_id: user_id }}" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">マイプロフィール</li>
        </router-link>
        <router-link :to="{ name: 'FavoriteReview', query: { user_id: user_id }}" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">お気に入りレビュー一覧</li>
        </router-link>
        <router-link to="aboutMenu.link" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">投稿されたレビュー一覧</li>
        </router-link>
        <router-link :to="{ name: 'EmployeeRegistration', query: { user_id: user_id }}" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">投稿者登録</li>
        </router-link>
        <router-link to="aboutMenu.link" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">閲覧履歴</li>
        </router-link>
        <router-link to="aboutMenu.link" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">登録社員一覧</li>
        </router-link>
        <router-link to="aboutMenu.link" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">パスワード変更</li>
        </router-link>
        <router-link to="/ApplyCompany" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">レビュー会社登録申請</li>
        </router-link>
        <router-link to="/Withdrawal" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="checkMenuState">退会する</li>
        </router-link>
      </span>
    </ul>
  </nav>
</template>

<script lang="ts" scoped>
import { Component,Vue } from 'vue-property-decorator';
import { toolStoreModule } from '@/store/modules/tool';
import { OpenAboutMenu } from '@/store/models.d';
import Cookies from "js-cookie"

// Vue.js to TypeScriptの書き方一覧
// https://qiita.com/ryo2132/items/4d43209ea89ad1297426

@Component
export default class AboutMenu extends Vue {
  public user_id = Cookies.get('user_id');
}
</script>


<style lang="scss" scope>
  // メニューバーの内容部分のスタイル
  .menuAbout{
    max-height: 2421px;
    width: 100%;
    background: #2A3A50;
    display: block;
    position: fixed;
    top: 70px;
    left: -100%;
    text-align: center;
    transition: all .5s;
    border-top: 1px solid #b4becb;
    border-bottom: 1px solid #b4becb;
    z-index: 2;
    &__itemWrap{
      height: 100%;
      width: 100%;
      display: block;
    }
    &__itemWrap-lineNone{
      text-decoration:none;
    }
    &__itemWrap-item{
      height: 9%;
      display: block;
      padding: 32px 0;
      font-size: 20px;
      text-decoration:none;
      font-family: montserrat;
      color:#fff;
      &:visited{
        color:#fff;
      }
      &:hover{
        transition: .5s;
        border-top: 1px solid #b4becb;
        border-bottom: 1px solid #b4becb;
        background-color: #fff;
        color: #0082e6;
      }
    }
  }
</style>
