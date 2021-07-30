<template>
  <div>
    <Intro
      :introTextTitle="introTextTitle"
      :introTextSub="introTextSub"
    />
    <SearchFavoliteReview
    />
    <SortCompanyDataComponets
    />
    <FavoriteReview/>
  </div>
</template>

<script lang="ts" scoped>
import { Component,Vue } from 'vue-property-decorator';
import Intro from '@/components/intro/Intro';
import SearchFavoliteReview from '@/components/search/SearchFavoliteReview';
import SortCompanyDataComponets from '@/components/search/SortCompanyDataComponets';
import FavoriteReview from '@/components/favoriteReview/FavoriteReview';
import { SETTINGS_APPLY_COMPANY } from '@/utils/setting-applyCompany'

@Component({
  components: {
    Intro,
    SortCompanyDataComponets,
    SearchFavoliteReview,
    FavoriteReview
  }
})
export default class FavoriteReviewList extends Vue {

  public introTextTitle: string = SETTINGS_APPLY_COMPANY.introTextTitle;
  public introTextSub: string = SETTINGS_APPLY_COMPANY.introTextSub;

}
</script>


<style lang="scss" scope>
</style>
