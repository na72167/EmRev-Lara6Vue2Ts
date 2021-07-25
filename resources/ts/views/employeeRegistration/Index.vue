<template>
  <div>
    <Intro
      :introTextTitle="introTextTitle"
      :introTextSub="introTextSub"
    />
    <EmployeeRegister/>
  </div>
</template>

<script lang="ts" scoped>
import { Component,Vue } from 'vue-property-decorator';
import Cookies from "js-cookie"
import Intro from '@/components/intro/Intro';
import EmployeeRegister from '@/components/employeeRegister/EmployeeRegister';
import { toolStoreModule } from '@/store/modules/tool';
import { SETTINGS_JOINING_ROUTE,SETTINGS_JOINING_ROUTE_FORM } from '@/utils/setting-postingReview';

// Vue.js to TypeScriptの書き方一覧
// https://qiita.com/ryo2132/items/4d43209ea89ad1297426

@Component({
  components: {
    Intro,
    EmployeeRegister
  }
})
export default class AboutMenu extends Vue {

  public introTextTitle: string = SETTINGS_JOINING_ROUTE.introTextTitle;
  public introTextSub: string = SETTINGS_JOINING_ROUTE.introTextSub;

}
</script>
