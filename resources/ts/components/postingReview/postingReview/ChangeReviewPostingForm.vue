<template>
  <div>
    <!-- Vue.jsでコンポーネントのイベント名をキャメルケースにすると反応しない -->
    <!-- https://qiita.com/kai_kou/items/86aeb3c7f85c361c60a1 -->
    <!-- @changeformcomponents="changeFormComponents()"は子コンポーネントから親コンポーネント内関数を
    発火させるのが目的なので()は付ける。 -->
    <!-- TODO:フォーム事の個別情報をmappingファイル等に纏めたのちに汎用性を意識したinputコンポーネントを作成。
    その後下の個別コンポーネントを削除する。 -->
    <!-- TODO:これやってみる。
    アニメーション機能を提供する<transition>要素 [Vue.js]
    https://johobase.com/vue-js-transition/ -->
    <ReviewRegisterJr
      v-if="changeFormComponent === 'JoiningRoute' && !initializing"
      @changeformcomponents="changeFormComponents()"
    />
    <ReviewRegisterIc
      v-if="changeFormComponent === 'InternalSystemsAndCorporateCulture' && !initializing"
      @changeformcomponents="changeFormComponents()"
    />
    <ReviewRegisterGj
      v-if="changeFormComponent === 'GapsAndJobSatisfactionAfterJoiningTheCompany' && !initializing"
      @changeformcomponents="changeFormComponents()"
    />
    <ReviewRegisterGc
      v-if="changeFormComponent === 'GeneralComment' && !initializing"
      @changeformcomponents="changeFormComponents()"
    />
    <ReviewRegisterPc
      v-if="changeFormComponent === 'PostingCheck' && !initializing"
      @changeformcomponents="changeFormComponents()"
    />
    <ReviewRegisterSc
      v-if="changeFormComponent === 'SubmissionComplete' && !initializing"
      @changeformcomponents="changeFormComponents()"
    />
  </div>
</template>

<script lang="ts" scoped>
import { Component,Prop,Vue } from 'vue-property-decorator';
import ReviewRegisterJr from '@/components/postingReview/postingReview/ReviewRegister-Jr'
import ReviewRegisterIc from '@/components/postingReview/postingReview/ReviewRegister-Ic'
import ReviewRegisterGj from '@/components/postingReview/postingReview/ReviewRegister-Gj'
import ReviewRegisterGc from '@/components/postingReview/postingReview/ReviewRegister-Gc'
import ReviewRegisterPc from '@/components/postingReview/postingReview/ReviewRegister-Pc'
import ReviewRegisterSc from '@/components/postingReview/postingReview/ReviewRegister-Sc'
import { toolStoreModule } from '@/store/modules/tool';

@Component({
  components: {
    ReviewRegisterJr,
    ReviewRegisterIc,
    ReviewRegisterGj,
    ReviewRegisterGc,
    ReviewRegisterPc,
    ReviewRegisterSc
  }
})
export default class ChangeReviewPostingForm extends Vue {

  public initializing: boolean = false;
  public changeFormComponent?: any = sessionStorage.getItem('changeComponentsStates');

  public changeFormComponents(){
    this.initializing = true;
    this.changeFormComponent = sessionStorage.getItem('changeComponentsStates');
    toolStoreModule.setProgressPostingReviewState(this.changeFormComponent);
    this.initializing = false;
  }

  // TODO:画面移動をした際にwebストレージを破棄させる処理を走らせる。
  public created(){
    this.initializing = true;
    toolStoreModule.setProgressPostingReviewState(sessionStorage.getItem('progressPostingReviewState'));
    this.initializing = false;
  }
}
</script>
