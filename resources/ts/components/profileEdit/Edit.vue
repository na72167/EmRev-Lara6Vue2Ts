<template>

  <div>
  <!-- 直書きスタイルは一般会員ユーザー用のもの -->
    <section class="profEdiUserProfile" style='height:320px; margin-top:50px;'>

        <!-- 一般ユーザーの場合 -->
        <!-- enctype属性・・・送信する情報のエンコードタイプを指定する。form-dataはフォームにファイルを送信する機能がある場合に指定する。 -->
        <!-- Vue.js でファイルをポストしたいとき -->
        <!-- http://tech.aainc.co.jp/archives/10714 -->
        <form enctype="multipart/form-data">

          <!-- 共通エラーの出力 -->
          <div class="area-msg">
            {{ commonErrMsg }}
          </div>

          <!-- TODO:入力フォームの作成 -->

        <!-- ユーザープロフ画像の登録 -->
        <div class="profEdiUserProfile__img-wrap">
          <img class="profEdiUserProfile__img">
          <!-- ここが写真の入力フォームになる予定 -->
            <!-- {{ 画像関係 }} -->
          <!-- TODO:入力フォームの作成 -->
          <!-- <input type="file" name="pic" class="profEdiUserProfile__img" style="height:370px;"> -->
        </div>

        <div class="profEdiUserProfile__detail">

          <label class="<?php if(!empty($generalUserDate->getErr_msUserName())) echo 'err'; ?>">
            <div class="profEdiUserProfile__name">

              <!-- <div class="profEdiUserProfile__name-areaMsg">
                {{ Err_msUserName }}
              </div> -->

              <h1 class="profEdiUserProfile__name-element">name</h1>
                {{ userName }}
              <!-- <input class="profEdiUserProfile__name-output" type="text" name="username" value="<?php if(!empty($generalUserDate->getUsername())) echo $generalUserDate->getUsername(); ?>"> -->
            </div>
          </label>

          <div class="profEdiUserProfile__ageTel-Wrap">

          <label class="<?php if(!empty($generalUserDate->getErr_msAge())) echo 'err'; ?>">
            <div class="profEdiUserProfile__age">
                <div class="profEdiUserProfile__age-areaMsg">
                  {{ errMsAge }}
                </div>
                <div class="profEdiUserProfile__age-element">age</div>
                  {{ age }}
                <!-- <input class="profEdiUserProfile__age-output" type="text" name="age" value="<?php echo $generalUserDate->getAge(); ?>"> -->
            </div>
          </label>

          <label class="<?php if(!empty($generalUserDate->getErr_msTel())) echo 'err'; ?>">
            <div class="profEdiUserProfile__tel">
              <div class="profEdiUserProfile__tel-areaMsg">
                {{ errMsTel }}
              </div>
              <div class="profEdiUserProfile__tel-element">tel</div>
                {{ tel }}
              <!-- <input class="profEdiUserProfile__tel-output" type="text" name="tel" value="<?php echo $generalUserDate->getTel(); ?>"> -->
            </div>
          </label>

          </div>

          <label class="<?php if(!empty($generalUserDate->getErr_msAddr())) echo 'err'; ?>">
            <div class="profEdiUserProfile__address">
                <div class="profEdiUserProfile__address-areaMsg">
                  {{ errAddress }}
                </div>
                <div class="profEdiUserProfile__address-element">address</div>
                  {{ address }}
                <!-- <input class="profEdiUserProfile__address-output" type="text" name="address" value="<?php echo $generalUserDate->getAddr(); ?>"> -->
            </div>
          </label>
        </div>
      </form>
    </section>

    <div class="profEdiUserProfile__bottom-wrap" style="margin-bottom:5px;">
      <!-- post内容を初期化したのち、マイページへ移動 -->
      <input type="submit" name='cancel-button' class="profEdiUserProfile__bottom-return" onclick="location.href='mypage.php'" value="変更を取り消す">
      <!-- 送信処理に沿って画面遷移 -->
      <input type="submit" name='update-button' class="profEdiUserProfile__bottom-next" value="変更する">

    </div>

  </div>
</template>
<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Edit extends Vue {

  public commonErrMsg: string |null = null;
}
</script>
<style lang="scss" scope>
  .profEdiUserProfile{
  height: 480px;
  width: 850px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0 auto;
  padding: 50px 100px 0px;
  position: relative;
  top: -100px;
  overflow: hidden;
  &__img-wrap{
    height: 230px;
    width: 230px;
    border: 1px solid #b4becb;
    border-radius: 10px;
    float: left;
  }
  &__detail{
    float: left;
    margin: 10px 0 30px 130px;
  }
  &__name{
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
      display: block;
    }
  }

  &__ageTel-Wrap{
    overflow: hidden;
    width: 230px;
  }
  &__age{
    float: left;
    width: 50px;
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
      width: 20px;
    }
  }
  &__tel{
    float: left;
    height: 22px;
    width: 150px;
    margin-left: 30px;
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      width: 120px;
      float: left;
    }
  }
  &__address{
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      height: 20px;
      width: 160px;
      float: left;
    }
  }
  &__state{
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
    }
  }
  &__dmState{
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
    }
  }
  &__employeeInfoWrap{
    position: relative;
    top:270px;
    right: 580px;
    width: 1180px;
  }

  &__affiliationCompany{
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
      width: 500px;
    }
  }

  &__incumbentPositionWrap{
    overflow: hidden;
  }
  &__incumbent{
    float: left;
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
    }
  }
  &__Position{
    float: left;
    margin-left: 30px;
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
    }
  }
  &__currentDepartment{
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
      width: 520px;
    }
  }

  &__bottom-wrap{
    background-color: #fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    top: -140px;
    height: 60px;
    width: 850px;
    padding: 10px 0 0;
    margin: 0 auto -60px;
    text-align: center;
  }
  &__bottom-link{
    text-decoration: none;
  }
  &__bottom-return{
    padding: 10px 87px;
    background-color: #fff;
    color: #06D1EC;
    border: 1px solid #06D1EC;
    border-radius: 3px;
  }
  &__bottom-next{
    padding: 10px 107px;
    margin-left: 50px;
    background-color: #06D1EC;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
  }
}
</style>
