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
import Cookies from "js-cookie";

@Module({
  dynamic: true,
  store,
  name: 'tool',
  namespaced: true,
})

class ToolStore extends VuexModule {

  public loading : boolean = false;
  private aboutMenuState: OpenAboutMenu = false
  public authComponentsState: SignUpOrLogin = 'signUp'
  public loginUser: any = null;
  public progressPostingReviewState: any = sessionStorage.getItem('progressPostingReviewState');

  get isLording(): boolean{
    return this.loading;
  }

  get AboutMenuState(): OpenAboutMenu {
    return this.aboutMenuState;
  }

  get getAuthComponentsState(): SignUpOrLogin{
    return this.authComponentsState
  }

  get getProgressPostingReviewState(): any{
    return this.progressPostingReviewState
  }

  @Mutation
  private SET_LOADING(): void{
    this.loading = true
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

  @Mutation
  private SET_PROGRESS_POSTING_REVIEWSTATE(val: any): void{
    sessionStorage.setItem('progressPostingReviewState',val);
    this.progressPostingReviewState = sessionStorage.getItem('progressPostingReviewState');
  }

  @Action
  public setLoading(): void {
    this.SET_LOADING()
  }

  @Action
  public clearLoading(): void {
    this.CLEAR_LOADING()
  }

  @Action
  public setLoginUser(): void {
    this.loginUser = Cookies.get('user_id');
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

  @Action
  public setProgressPostingReviewState(val: any): void{
    this.SET_PROGRESS_POSTING_REVIEWSTATE(val);
  }

}
export const toolStoreModule = getModule(ToolStore);
