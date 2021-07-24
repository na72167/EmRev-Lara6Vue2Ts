<template>
  <div>
    <div class="rigisRigisterReviewList">
      <div class="rigisRigisterReviewList__header">
        <h1 class="rigisRigisterReviewList__title">{{ settings.title }}</h1>
        <h3>検索結果:<span>{{ displayDatas.total }}</span>件</h3>
      </div>
      <DataTable
        :displayDatas="displayDatas.data"
        :settings="settings"
      />
      <!-- 保留 -->
      <Pagination
      />
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { Component,Prop,Vue } from 'vue-property-decorator';
import DataTable from '@/components/dataTable/ShowCompanyDataTable'
import Pagination from '@/components/pagination/Pagination'

@Component({
  components: {
    DataTable,
    Pagination
  }
})
export default class SelectComponyMenu extends Vue {
  @Prop(Object) public displayDatas!: Object;
  @Prop(Object) public settings!: Object;
}
</script>

<style lang="scss" scope>
.rigisRigisterReviewList{
  height: 100%;
  width: 720px;
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  margin-left: 870px;
  margin-right: auto;
  &__header{
    border-bottom: 1px solid #b4becb;
    padding:5px 20px;
    text-align: center;
  }
  &__title{
    font-size: 2rem;
  }
}
</style>
