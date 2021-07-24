<template>
  <!-- TODO:ブロックレベル要素は子要素に依存して高さが設定されるはずなのに、
  以下のコードのdivは内側のコンポーネントを認識出来ていない様子なので調べる。
  (現在は個別クラスを付属させて対応中。)  -->
  <!-- memo: 子コンポーネント3つの高さの合計値は1095px -->
  <!-- TODO: コンポーネントが関わるとstyle関係が上手く適用されない。
  例:特定のコンポーネントのみ共通スタイルを適用させたくてdivで囲んだ場合でも
  他コンポーネントにも影響されている等。 -->
  <div class="wrap">
    <Intro
      :introTextTitle="introTextTitle"
      :introTextSub="introTextSub"
    />
    <div calss="wrap__componentsPostion">
      <PostingReviewGuide
        v-if="!initializing"
      />
      <ChangeReviewPostingForm
        v-if="!initializing"
      />
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import axios from "axios";
import Intro from '@/components/intro/Intro';
import PostingReviewGuide from '@/components/guide/PostingReviewGuide';
import ChangeReviewPostingForm from '@/components/postingReview/postingReview/ChangeReviewPostingForm';
import { SETTINGS_JOINING_ROUTE,SETTINGS_JOINING_ROUTE_FORM } from '@/utils/setting-postingReview';

@Component({
  components: {
    Intro,
    PostingReviewGuide,
    ChangeReviewPostingForm
  }
})
export default class PostingReview extends Vue {

  public introTextTitle: string = SETTINGS_JOINING_ROUTE.introTextTitle;
  public introTextSub: string = SETTINGS_JOINING_ROUTE.introTextSub;
  // public introImg: any = introImg;
  public initializing: boolean = false;

  public created(){
    this.initializing = true;
    this.initializing = false;
  }
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
