import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/Index.vue'
import Withdrawal from '@/views/withdrawal/Index.vue'
import EmployeeRegistration from '@/views/employeeRegistration/Index.vue'
import ProfileEdit from '@/views/profileEdit/Index.vue'
import FavoriteReview from '@/views/favoriteReview/Index.vue'
import MyPage from '@/views/myPage/Index.vue'
import ApplyCompany from '@/views/applyCompany/Index.vue'
import SelectReviewCompany from '@/views/postingReview/selectReviewCompany/Index.vue'
import ReviewRegisterForm from '@/views/postingReview/postingReview/Index.vue'
import DirectMessage from '@/views/dm/Index.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // path: '/myPage/:user_id',
    // TODO:上の様にクエリパラメータを取得する前提にしたまま
    //フロント側でrouter-linkを設定・使用すると
    //特定コンポーネントに切り替わりはするが、なぜかurlにパラメータしか残らなくなる。
    path: '/myPage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/Withdrawal',
    name: 'Withdrawal',
    component: Withdrawal
  },
  {
    path: '/EmployeeRegistration',
    name: 'EmployeeRegistration',
    component: EmployeeRegistration
  },
  {
    path: '/profileEdit',
    name: 'ProfileEdit',
    component: ProfileEdit
  },
  {
    path: '/favoriteReview',
    name: 'FavoriteReview',
    component: FavoriteReview
  },
  {
    path: '/ApplyCompany',
    name: 'ApplyCompany',
    component: ApplyCompany
  },
  {
    path: '/selectReviewCompany',
    name: 'selectReviewCompany',
    component: SelectReviewCompany
  },
  {
    path: '/reviewRegisterForm/:company_id',
    name: 'ReviewRegisterForm',
    component: ReviewRegisterForm
  },
  {
    path: '/directMessage/:toUser_id',
    name: 'DirectMessage',
    component: DirectMessage
  },
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
