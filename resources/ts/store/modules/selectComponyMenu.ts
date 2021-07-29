
import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators';

import store from '@/store';
import Cookies from "js-cookie";
import axios from "axios";

@Module({
  dynamic: true,
  store,
  name: 'SelectComponyMenu',
  namespaced: true,
})

class ComponyMenu extends VuexModule {
  //TODO:挿入される要素を見直して↓の型数を減らす。
  //memo:初期値を設定していないと他関数を経由して値を代入しても
  //「値が定義された」という認識で決して「値が変更された」とは認識されないっぽい。
  public selectComponyData: any = null;

  // public lording : boolean = false;

  get getSelectComponyData(): any{
    console.log(this.selectComponyData);
    return this.selectComponyData;
  }

  // @Mutation
  // private SET_LOADING(): void{
  //   this.lording = !this.lording
  // }

  @Mutation
  private SET_SELECT_COMPONY_MENU(val: any): void{
    this.selectComponyData = val;
  }

  @Mutation
  private SET_CONDITIONAL_SEARCH_COMPANY_DATE(val: any): void{
    this.selectComponyData = val;
  }

  @Action
  public async setSelectComponyMenu(query?: any){
    const componyMenuDatas = await axios.post('/api/searchCompanyDate', query);
    //TODO:修正予定(.data.data.data)
    this.SET_SELECT_COMPONY_MENU(componyMenuDatas.data.data);
  }

  @Action
  public async setConditionalSearchCompanyDate(params?: any,query?: any){
    const componyMenuDatas = await axios.post('/api/conditionalSearchCompanyDate',params,query);
    //TODO:修正予定(.data.data.data)
    this.SET_CONDITIONAL_SEARCH_COMPANY_DATE(componyMenuDatas);
  }

}
export const selectComponyMenu = getModule(ComponyMenu);
