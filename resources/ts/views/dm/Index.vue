<template>
  <!-- TODO:ブロックレベル要素は子要素に依存して高さが設定されるはずなのに、
  以下のコードのdivは内側のコンポーネントを認識出来ていない様子なので調べる。
  (現在は個別クラスを付属させて対応中。)  -->
  <!-- memo: 子コンポーネント3つの高さの合計値は1095px -->
  <!-- TODO: コンポーネントが関わるとstyle関係が上手く適用されない。
  例:特定のコンポーネントのみ共通スタイルを適用させたくてdivで囲んだ場合でも
  他コンポーネントにも影響されている等。 -->
  <div class="wrap">
    <!-- TODO:title修正 -->
    <Intro
      :introTextTitle="introTextTitle"
      :introTextSub="introTextSub"
    />
    <div calss="wrap__componentsPostion">
      <DirectMessageBoard
        v-if="!initializing"
      />
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component,Prop,Vue } from 'vue-property-decorator';
import axios from "axios";
import Intro from '@/components/intro/Intro';
import DirectMessageBoard from '@/components/dm/DirectMessageBoard';
import { SETTINGS_JOINING_ROUTE,SETTINGS_JOINING_ROUTE_FORM } from '@/utils/setting-postingReview';

@Component({
  components: {
    Intro,
    DirectMessageBoard
  }
})
export default class DirectMessagePage extends Vue {

  public introTextTitle: string = SETTINGS_JOINING_ROUTE.introTextTitle;
  public introTextSub: string = SETTINGS_JOINING_ROUTE.introTextSub;
  public initializing: boolean = false;

}
</script>
<style lang="scss" scope>
  .wrap{
    height: 1295px;
    position: relative;
    &__componentsPostion{
    }
  }
</style>

// TODO: DM機能 今のところまでの案
// messageを管理するStoreを永続化(https://www.webopixel.net/javascript/1463.html)
// ここにSkyWayもしくはpeer.js(出来ればSkyWay)を使ってブラウザ間でDM内容のデータを送信。各ストア内に保持させる。
// そのストア内を監視。データの変更・追加があった際にはそれをコンポーネントに反映。再レンタリングを実行する。

// 【WebRTC】PeerJSを使ってブラウザ間でデータ送受信 https://reffect.co.jp/html/webrtcpeerjs
// (https://qiita.com/n0bisuke/items/efbe6e09e30ebd941105)
// OSSを使って独自のWeb会議アプリ(SkyWay Conf)を立てる方法(https://qiita.com/yusuke84/items/e86501810acaa146195d)
// https://qiita.com/SanQ/items/81ef52d5a3e9240f1f5a
// 【PeerJS】リアルタイムビデオ通話のデモ実装編(2) - PeerJS疎通確認 https://qiita.com/Futo_Horio/items/1c840895e8bb0e36a7ff
//
