import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators';

// 【TypeScript】type の使いどころが知りたい話
// https://mslgt.hatenablog.com/entry/2019/12/06/063526
// TODO:リテラル部分を外部ファイルに読み込む。

import store from '@/store';
import { SignUpOrLogin,SignUp,Login,OpenAboutMenu } from '@/store/models.d';

@Module({
  dynamic: true,
  store,
  name: 'tool',
  namespaced: true,
})

class ToolStore extends VuexModule {

  private loading: boolean = false
  private aboutMenuState: OpenAboutMenu = false
  public authComponentsState: SignUpOrLogin = 'signUp'

  get isLoading(): boolean {
    return this.loading;
  }

  get AboutMenuState(): OpenAboutMenu {
    return this.aboutMenuState;
  }

  get getAuthComponentsState(): SignUpOrLogin{
    return this.authComponentsState
  }

  @Mutation
  private SET_LOADING(): void{
    this.loading = true;
  }

  @Mutation
  private CLEAR_LOADING(): void{
    this.loading = false;
  }

  @Mutation
  private SWITCH_MENU(val: any): void{
    this.aboutMenuState = val;
  }

  @Mutation
  private SET_CHANGE_SIGNUP_COMPONENTS(val: SignUpOrLogin): void{
    this.authComponentsState = val;
  }

  @Mutation
  private SET_CHANGE_LOGIN_COMPONENTS(val: SignUpOrLogin): void{
    this.authComponentsState = val;
  }

  @Action
  public setLoading(): void {
    this.SET_LOADING();
  }

  @Action
  public switchMenuComponent(val: any): void {
    this.SWITCH_MENU(val);
  }

  @Action
  public changeSignUpComponents(val: SignUpOrLogin): void{
    this.SET_CHANGE_SIGNUP_COMPONENTS(val);
  }

  @Action
  public changeLoginComponents(val: SignUpOrLogin): void{
    this.SET_CHANGE_LOGIN_COMPONENTS(val);
  }

}
export const toolStoreModule = getModule(ToolStore);
