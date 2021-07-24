<template>
  <div>
    <Header/>
    <!-- TODO:v-show="loading"の実装 -->
      <div class="#">
        <RouterView />
      </div>
    <Footer/>
  </div>
</template>
<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
// import $blue from '@/style/_variables';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss" scope>
.revProgress{
  height: 440px;
  width: 290px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  float: left;
  &__content-wrap{
    position: relative;
    top: calc(310px / 2 - 220px / 2);
    width: 180px;
    margin: 0 auto;
  }
  &__content-title{
    font-size: 1.5rem;
    text-align: center;
    margin: 20px 0;
  }
  &__content-guide{
    font-weight: 10;
    font-size: 0.8rem;
    margin-bottom: 20px;
    border: 0;
    border-bottom: 1px solid #b4becb;
  }
}
</style>

