<template>
  <div>
    <Intro
      :introTextTitle="introTextTitle"
      :introTextSub="introTextSub"
    />
    <Edit/>
  </div>
</template>
<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import Intro from '@/components/intro/Intro';
import Edit from '@/components/profileEdit/Edit';
import { SETTINGS_APPLY_COMPANY } from '@/utils/setting-applyCompany'

@Component({
  components: {
    Intro,
    Edit
  }
})
export default class ProfileEdit extends Vue {

  public introTextTitle: string = SETTINGS_APPLY_COMPANY.introTextTitle;
  public introTextSub: string = SETTINGS_APPLY_COMPANY.introTextSub;

}
</script>
<style lang="scss" scope>
</style>
