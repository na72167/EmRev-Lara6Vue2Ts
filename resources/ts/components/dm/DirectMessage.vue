<template>

  <div class="dmScreen__contactBoard">

    <!-- <?php
      if(!empty($viewData)){
        foreach($viewData as $key => $val){
        // メッセージ送信者判定
        // from_user内のIDがログインユーザーのIDと一致しているか確認。
        // 一致した場合はログインユーザー側でメッセージを出力する。
        if($val['from_user'] === $dmInfo->getFromUser_id()){
    ?>

    <!-- ログインユーザー側DM -->
    <!-- <div class="dmScreen__contactBoard-contactMyself">
      <div class="dmScreen__contactBoard-imgStyleMyself">
        <img href="#">
      </div>
      <div class="dmScreen__contactBoard-TextMyself">
        <span><?php echo $val['msg'] ?></span>
        <span><?php echo $val['send_date'] ?></span>
      </div>
    </div>
    <?php
      // 一致しなかった場合は相手側のメッセージスタイルのメッセージスタイルでメッセージを出力する。
      }else{
    ?>
    <!-- 相手側DM -->
    <!-- <div class="dmScreen__contactBoard-contactPerson">
      <div class="dmScreen__contactBoard-imgStylePerson">
        <img href="#">
      </div>
      <div class="dmScreen__contactBoard-personText">
        <span><?php echo $val['msg'] ?></span>
        <span><?php echo $val['send_date'] ?></span>
      </div>
    </div>
    <?php
        }
      }
      //そもそも判定元レコードが無い場合
      }else{
    ?>
      <!-- メッセージ送信情報がない場合 -->
      <!-- <p>メッセージ投稿はまだありません</p>
      <?php
        }
      ?>
    </div>
    <div class="dmScreen__inputForm">
      <form method="post" class="dmScreen__inputForm-clickSignal">
        <input class="dmScreen__inputForm-style" name="msg" placeholder="Type Something">
        <!-- 空でもvalueをつけないとtype="submit"を指定した要素はデフォルト文字「送信」が表示される。 -->
        <!-- https://www.tagindex.com/html_tag/form/input_submit.html -->
        <!-- <input type="submit" class="dmScreen__inputForm-button" name="send" value="送信">
      </form>
    </div> --> --> --> --> -->
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DirectMessage extends Vue {
}
</script>
<style lang="scss" scope>
.dmScreen{
  height: 730px;
  width: 1400px;
  margin: 20px auto;
  position: relative;
  top: -50px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  &__userList-wrap{
    height: 730px;
    width: 380px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
  &__userSearch-padding{
    display: block;
    padding: 50px 30px 0px;
  }
  &__userSearch-wrap{
    height: 80px;
    width: 380px;
    padding: 30px 70px 0;
    background-color: #fff;
  }
  &__userSearch-input{
    height: 40px;
    width: 197px;
    display: block;
    font-size: 15px;
    float: left;
    border:0;
    border-bottom: 2px solid #b4becb;
    &:focus{
      outline: none;
      border-bottom: 2px solid #047aed;
    }
  }
  &__userSearch-button{
    height: 40px;
    width: 40px;
    float: left;
    margin-left: 2px;
    border-radius: 3px;
    background-color: #047aed;
  }
  &__recent-wrap{
    height: 100%;
    width: 100%;
  }
  &__recent-style{
    color: #047aed;
    font-size: 28px;
    padding: 5px 0;
    position: relative;
    left: 20px;
  }
  &__recent-element{
    height: 75px;
    overflow: hidden;
    z-index: -1;
    &:focus{
      outline: none;
      transition: box-shadow .5s;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }
    &:focus .dmScreen__recent-marker{
      transition: background-color .5s;
      background-color: #84d4f4;
    }
  }
  &__recent-imgStyle{
    height: 65px;
    width: 65px;
    margin: 5px 0 5px 20px;
    border-radius: 100px;
    background-color: black;
  }
  &__recent-activeSignal{
    height: 13px;
    width: 13px;
    position: absolute;
    border: 1px solid #fff;
    border-radius: 100px;
    background-color: #06EC67;
  }
  &__recent-name{
    width: 100px;
    position: relative;
    top: -51px;
    left: 120px;
    float: left;
    font-size: 18px;
  }
  &__recent-time{
    width: 100px;
    position: relative;
    top: -50px;
    left: 220px;
    float: left;
  }
  &__recent-marker{
    height: 75px;
    width: 10px;
    float: right;
    // 応急処置(クリック後のマーカー部分の位置関係)
    // floatで親要素の幅等に影響受けなくなっているのでそれを踏まえて後で修正する。
    position: relative;
    top:-75px;
  }


  &__thisWeek-element{
    height: 75px;
    overflow: hidden;
    &:focus{
      outline: none;
      transition: box-shadow .5s;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }
    &:focus .dmScreen__thisWeek-marker{
      transition: background-color .5s;
      background-color: #84d4f4;
    }
  }
  &__thisWeek-imgStyle{
    height: 65px;
    width: 65px;
    margin: 5px 0 5px 20px;
    border-radius: 100px;
    background-color: black;
  }
  &__thisWeek-activeSignal{
    height: 13px;
    width: 13px;
    position: absolute;
    border: 1px solid #fff;
    border-radius: 100px;
    background-color: #06EC67;
  }
  &__thisWeek-name{
    width: 100px;
    position: relative;
    top: -51px;
    left: 120px;
    float: left;
    font-size: 18px;
  }
  &__thisWeek-time{
    width: 100px;
    position: relative;
    top: -50px;
    left: 220px;
    float: left;
  }
  &__thisWeek-marker{
    height: 75px;
    width: 10px;
    float: right;
    // 応急処置(クリック後のマーカー部分の位置関係)
    // floatで親要素の幅等に影響受けなくなっているのでそれを踏まえて後で修正する。
    position: relative;
    top:-75px;
  }
  &__thisWeek-style{
    color: #047aed;
    font-size: 25px;
    padding: 5px 0;
    position: relative;
    left: 20px;
  }
  &__callPartner-element{
    height: 130px;
    width: 1020px;
    background-color: #047aed;
    float: right;
    position: absolute;
    top: 0px;
    left: 380px;
    border-radius: 0 3px 0 0;
    border-bottom: 3px solid #b4becb;
  }
  &__inputForm{
    height: 65px;
    width: 1020px;
    position: absolute;
    top:665px;
    left: 380px;
    padding: 15px 0px 20px 180px;
    background-color: #F0EAEA;
  }
  &__inputForm-clickSignal{
    height: 40px;
    width: 2px;
    border-left: 3px solid #047aed;
    padding: 5px 0 8px 30px;
  }
  &__inputForm-style{
    font-size: 20px;
    width: 730px;
    background-color: #F0EAEA;
  }
  &__inputForm-button{
    height: 40px;
    width: 40px;
    border: 0;
    border-radius: 5px;
    position: relative;
    top:-32px;
    left: 730px;
    background-color: #047aed;
  }
  &__callPartner-imgStyle{
    height: 65px;
    width: 65px;
    margin: 30px 0 5px 50px;
    border-radius: 100px;
    border: 2px solid #fff;
    background-color: black;
  }
  &__callPartner-activeSignal{
    height: 13px;
    width: 13px;
    position: absolute;
    border: 1px solid #fff;
    border-radius: 100px;
    background-color: #06EC67;
  }
  &__callPartner-name{
    width: 100px;
    position: relative;
    top: -58px;
    left: 150px;
    float: left;
    font-size: 18px;
  }
  &__callPartner-time{
    width: 100px;
    position: relative;
    top: -10px;
  }
  &__contactBoard{
    height: 520px;
    width: 900px;
    position: relative;
    left: 380px;
  }
  &__contactBoard-contactPerson{

  }
  &__contactBoard-imgStylePerson{
    height: 65px;
    width: 65px;
    margin: 0px 0 5px 50px;
    float: left;
    border-radius: 100px;
    border: 2px solid #fff;
    background-color: black;
    position: relative;
  }
  &__contactBoard-personText{
    height: 80px;
    width: 500px;
    border-radius: 5px;
    background-color: #F0EAEA;
    position: absolute;
    top: 30px;
    left: 130px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
  &__contactBoard-contactMyself{
    position: relative;
    top: 130px;
    left: 420px;
  }
  &__contactBoard-imgStyleMyself{
    height: 65px;
    width: 65px;
    margin: 0px 0 5px 400px;
    float: left;
    border-radius: 100px;
    border: 2px solid #fff;
    background-color: black;
    position: relative;
  }
  &__contactBoard-TextMyself{
    height: 80px;
    width: 500px;
    border-radius: 5px;
    background-color: #ABF0F0;
    position: absolute;
    top: 30px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
