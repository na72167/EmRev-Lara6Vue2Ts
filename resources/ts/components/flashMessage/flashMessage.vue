<template>
  <span>
    <div class="msg-slide-style" :class="successMessageStyle" v-if="flashMessage.successFlg">
      <div>
        {{flashMessage.successMsg}}
      </div>
    </div>
    <div class="msg-slide-style" :class="errorMessageStyle" v-if="flashMessage.errorFlg">
      <div>
        {{flashMessage.errorMsg}}
      </div>
    </div>
  </span>
</template>

<script lang="ts" scoped>
import { Component,Watch,Vue } from 'vue-property-decorator';

@Component
export default class FlashMessage extends Vue {

  public successMessageStyle: string = 'closeErrorMsgStyle';
  public errorMessageStyle: string = 'closeErrorMsgStyle';

  public flashMessage = {
    successMsg: null,
    successFlg: false,
    errorMsg: null,
    errorFlg: false,
  };

  //TODO:ここでstore内に送られたmsg関係を取得する処理を書く。
  get test(){
    return true
  }

  @Watch('flashMessage.successFlg')
  checkSuccessMessage(){
    if(this.flashMessage.successFlg === true && this.flashMessage.successMsg){
      this.successMessageStyle = 'openSuccessMsg';
      this.successMessageStyle = 'closeErrorMsgStyle';
    }
  }

  @Watch('flashMessage.errorFlg')
  checkErrorMessage(){
    if(this.flashMessage.errorFlg === true && this.flashMessage.errorFlg){
      this.errorMessageStyle = 'openErrorMsgStyle';
      this.errorMessageStyle = 'closeErrorMsgStyle';
    }
  }

}
</script>

<style lang="scss" scope>
  // フラッシュメッセージ用スタイル
  .msg-slide{
    position: absolute;
    z-index:3;
    top: 70px;
    width:100%;
    height:70px;
    border-radius: 10px;
    background: rgba(122,206,230,0.9);
    color: #fff;
    text-align: center;
    font-size:16px;
    padding: 25px 0;
    transition: all 2s;
    opacity: 0;
    //メッセージが入った際に2秒かけて表示させる為のスタイル。
    &.fade-up{
      opacity: 0.9;
    }
  }
</style>
