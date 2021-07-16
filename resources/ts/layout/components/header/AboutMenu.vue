<template>
  <!-- メニューバー -->
  <nav class="menuAbout">
    <ul class="menuAbout__itemWrap">
      <!-- リンク関係 -->
      <span v-for="aboutMenu in aboutMenus" :key="aboutMenu.id">
        <router-link :to="aboutMenu.link" class="menuAbout__itemWrap-lineNone">
          <li class="menuAbout__itemWrap-item" @click="switchMenuState">{{aboutMenu.text}}</li>
        </router-link>
      </span>
    </ul>
  </nav>
</template>

<script lang="ts" scoped>
import { Component,Vue } from 'vue-property-decorator';
import { aboutMenu } from '@/utils/header';
import { toolStoreModule } from '@/store/modules/tool';

// Vue.js to TypeScriptの書き方一覧
// https://qiita.com/ryo2132/items/4d43209ea89ad1297426

@Component
export default class AboutMenu extends Vue {
  public aboutMenus = aboutMenu;
  private aboutMenuState: string | false  = false;
  private switchingMenuState: string | null | false = null;

  public switchMenuState(){
    // aboutMenuState内の要素を反転させる。
    this.switchingMenuState = this.aboutMenuState === false ? 'openAboutMenu' : false;
    toolStoreModule.switchMenuComponent(this.switchingMenuState);
  }
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
