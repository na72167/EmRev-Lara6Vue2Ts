<template>
  <div calss="#">
    <DirectMessageSearch/>
    <DirectMessageHeader/>
    <DirectMessage
      :message=message
    />
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import axios from "axios";
import Cookies from "js-cookie";
import Intro from '@/components/intro/Intro';
import DirectMessageSearch from '@/components/dm/DirectMessageSearch';
import DirectMessageHeader from '@/components/dm/DirectMessageHeader';
import DirectMessage from '@/components/dm/DirectMessage';
import { SETTINGS_JOINING_ROUTE,SETTINGS_JOINING_ROUTE_FORM } from '@/utils/setting-postingReview';
import { toolStoreModule } from '@/store/modules/tool';

@Component({
  components: {
    Intro,
    DirectMessageSearch,
    DirectMessageHeader,
    DirectMessage
  }
})
export default class DirectMessageBoard extends Vue {

  public initializing: boolean = false;
  public loginUserId: any = null;
  public loginUserEmail: any = null;
  public loginUserRoll: any = null;
  public message: any = null;


  private async fetchData(){

    this.initializing = true;
    this.loginUserId = Cookies.get('user_id');
    this.loginUserEmail = Cookies.get('email');
    this.loginUserRoll = Cookies.get('roll');

    toolStoreModule.setLoading();
    console.log("登録処理に入りました。");

    const params = {
      email: this.loginUserId,
    }
    const message = await axios.post('/api/register',params);
    console.dir(message);
    this.message = message;

    toolStoreModule.clearLoading();
    this.initializing = false;
  }

  private created(){
    this.fetchData();
  }

}
</script>
<style lang="scss" scope>
  // .wrap{
  //   height: 1295px;
  //   position: relative;
  //   &__componentsPostion{
  //   }
  // }
</style>
