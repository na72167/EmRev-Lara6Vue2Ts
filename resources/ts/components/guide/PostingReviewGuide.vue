<template>
  <div class="revProgress">
    <div class="revProgress__content-wrap">
      <h2 class="revProgress__content-title">PROGRESS</h2>
      <!-- Vue.jsのv-bind:classで動的なクラス割り当て -->
      <!-- https://ti-tomo-knowledge.hatenablog.com/entry/2018/06/21/111721 -->
      <div class="revProgress__content-guide" :class="[ currentPosition === 'JoiningRoute' ? 'active' : '' ]">1.入社経路や在籍状況について</div>
      <div class="revProgress__content-guide" :class="[ currentPosition === 'InternalSystemsAndCorporateCulture' ? 'active' : '' ]">2.社内制度や企業文化について</div>
      <div class="revProgress__content-guide" :class="[ currentPosition === 'GapsAndJobSatisfactionAfterJoiningTheCompany' ? 'active' : '' ]">3.入社後のギャップや働きがい</div>
      <div class="revProgress__content-guide" :class="[ currentPosition === 'GeneralComment' ? 'active' : '' ]">4.総評</div>
      <div class="revProgress__content-guide" :class="[ currentPosition === 'PostingCheck' ? 'active' : '' ]">5.投稿内容の確認</div>
      <div class="revProgress__content-guide" :class="[ currentPosition === 'SubmissionComplete' ? 'active' : '' ]">6.投稿完了</div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import { toolStoreModule } from '@/store/modules/tool';

@Component
export default class PostingReviewGuide extends Vue {

  get currentPosition() {
    return toolStoreModule.getProgressPostingReviewState;
  }

}
</script>

<style lang="scss" scope>
.revProgress{
  height: 440px;
  width: 290px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  float: left;
  &__content-wrap{
    position: relative;
    top: calc(310px / 2 - 220px / 2);
    width: 180px;
    margin: 0 auto;
  }
  &__content-title{
    font-size: 1.5rem;
    text-align: center;
    margin: 20px 0;
  }
  &__content-guide{
    font-weight: 10;
    font-size: 0.8rem;
    margin-bottom: 20px;
    border: 0;
    border-bottom: 1px solid #b4becb;
  }
}
.active{
  background-color: blue;
}
</style>
