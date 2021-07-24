<template>
  <section class="withdrawal">
    <div class="withdrawal__content">
      <button class="withdrawal__content-bottom" type="submit" @click="withdrawal">退会する</button>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import { Component,Vue } from 'vue-property-decorator';
import Cookies from "js-cookie"
import axios from "axios";
// import { AuthModule } from '@/store/modules/auth';

@Component
export default class ReviewRegisterGc extends Vue {

  // public user_id?: any;

  public async withdrawal(){

    const user_id = Cookies.get('user_id');

    const resultWithdrawal = await axios.post('/api/withdrawal',user_id);
    console.dir(resultWithdrawal);

    //TODO:フラッシュメッセージで「退会しました」と表示する。
    this.$router.push('/');
  }
}
</script>

<style lang="scss" scope>
.withdrawal{
  &__content{
    position: relative;
    top: -30px;
    height: 600px;
    width: 1400px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
  }
  &__content-bottom{
    position: absolute;
    top:230px;
    left: 610px;
    padding: 20px 47px;
    font-size: 30px;
    background-color: #EC0618;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
  }
}
</style>
