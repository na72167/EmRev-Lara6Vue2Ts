<template>
  <div>
    <Intro
      :introTextTitle="introTextTitle"
      :introTextSub="introTextSub"
    />
    <SearchCompanyDataComponets
      @searchstate="searchCompanyData"
    />
    <SortCompanyDataComponets
    />
    <SelectComponyMenu
      v-if="companyDatas && !initializing"
      :displayDatas="companyDatas"
      :settings="settings"
    />
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue, Watch } from 'vue-property-decorator';
import Intro from '@/components/intro/Intro';
import SearchCompanyDataComponets from '@/components/search/SearchCompanyDataComponets';
import SortCompanyDataComponets from '@/components/search/SortCompanyDataComponets';
import SelectComponyMenu from '@/components/postingReview/SelectComponyMenu';
import { SETTINGS_REVIEW_COMPANY } from '@/utils/setting-postingReview';
import { selectComponyMenu } from '@/store/modules/selectComponyMenu';
import { toolStoreModule } from '@/store/modules/tool';

@Component({
  components: {
    Intro,
    SearchCompanyDataComponets,
    SortCompanyDataComponets,
    SelectComponyMenu
  }
})
export default class PostingReview extends Vue {

  public introTextTitle: string = SETTINGS_REVIEW_COMPANY.introTextTitle;
  public introTextSub: string = SETTINGS_REVIEW_COMPANY.introTextSub;
  // public introImg: any = introImg;
  public initializing: boolean = true;
  public settings: any = SETTINGS_REVIEW_COMPANY;
  //TODO:下はクエリパラメータを実際に付属させる前の動作確認用仮データなので修正する。

  get companyDatas() {
    return selectComponyMenu.getSelectComponyData;
  }

  public searchCompanyData(val? :any) {
    toolStoreModule.setLoading();
    // const params = this.$route.query;
    try {
      this.initializing = true;
      const params = val
      //TODO:仮データ
      const query = {
        current_page : 1
      }
      selectComponyMenu.setConditionalSearchCompanyDate(params,query);
      this.initializing = false;
      toolStoreModule.clearLoading();
    } catch (e) {
      // handleApiError(e);
    }
  }

  // ページの切り替え
  // TODO:ページネーションを作った結果、引数のqueryがいらない可能性があるので確認後修正
  public fetchData() {
    toolStoreModule.setLoading();
    // const params = this.$route.query;
    try {
      this.initializing = true;
      const query = {
        current_page : 1
      }
      selectComponyMenu.setSelectComponyMenu(query);
      this.initializing = false;
      toolStoreModule.clearLoading();
    } catch (e) {
      // handleApiError(e);
    }
  }

  public created(){
    this.fetchData();
    // 検索時に関係するクエリパラメータの初期化関係？
    // this.$store.dispatch('cfwdDestinations/clearSearchQueries')
  }
}
</script>
