<template>
  <div>
    <Intro
      :introTextTitle="introTextTitle"
      :introTextSub="introTextSub"
    />
    <UserProfile/>
    <MyReviewList/>
    <MypeDmList/>
    <MyFavoriteList/>
  </div>
</template>
<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import Intro from '@/components/intro/Intro';
import UserProfile from '@/components/myPage/UserProfile';
import MyReviewList from '@/components/myPage/MyReviewList';
import MypeDmList from '@/components/myPage/MypeDmList';
import MyFavoriteList from '@/components/myPage/MyFavoriteList';
import { SETTINGS_APPLY_COMPANY } from '@/utils/setting-applyCompany'

@Component({
  components: {
    UserProfile,
    Intro,
    MyReviewList,
    MypeDmList,
    MyFavoriteList
  }
})
export default class MyPage extends Vue {

  public introTextTitle: string = SETTINGS_APPLY_COMPANY.introTextTitle;
  public introTextSub: string = SETTINGS_APPLY_COMPANY.introTextSub;


}
</script>
