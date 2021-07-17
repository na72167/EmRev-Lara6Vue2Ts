<template>
  <div>
    <Intro
      :introTextTitle="introTextTitle"
      :introTextSub="introTextSub"
    />
    <!-- :introImg="introImg" -->
    <ApplyCompanyForm/>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import Intro from '@/components/intro/Intro';
import ApplyCompanyForm from '@/components/applyCompany/ApplyCompanyForm';
import { SETTINGS_APPLY_COMPANY } from '@/utils/setting-applyCompany'
// 【Nuxt.js】imgファイルの指定方法について
// https://qiita.com/hiroyukiwk/items/a26e767d193ef8d9155b
// https://qiita.com/skmtko/items/a83f836b48f24309916d
// TODO:画像のpassが何故か合わない
// import introImg from '@/assets/img/docs.png'

@Component({
  components: {
    Intro,
    ApplyCompanyForm
  }
})
export default class ApplyCompany extends Vue {

  public introTextTitle: string = SETTINGS_APPLY_COMPANY.introTextTitle;
  public introTextSub: string = SETTINGS_APPLY_COMPANY.introTextSub;
  // public introImg: any = introImg;

}
</script>
