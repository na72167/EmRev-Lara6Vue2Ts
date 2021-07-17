
import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators';

import store from '@/store';
// import VueCookies from 'vue-cookies'
import Cookies from "js-cookie";
import { User } from '@/store/models.d'

@Module({
  dynamic: true,
  store,
  name: 'AuthModule',
  namespaced: true,
})

class Auth extends VuexModule {
  //TODO:挿入される要素を見直して↓の型数を減らす。
  public user : any = {
    user_id: '',
    email: '',
    roll: '',
  };

  @Mutation
  private SET_LOGIN_USER(): void{
    this.user.user_id = Cookies.get('user_id');
    this.user.email = Cookies.get('email');
    this.user.roll = Cookies.get('roll');
  }

  get getLoginUserDate(): any{
    return this.user.user_id;
  }

  @Action
  public setLoginUser(): void {
    this.SET_LOGIN_USER()
  }

}
export const AuthModule = getModule(Auth);
