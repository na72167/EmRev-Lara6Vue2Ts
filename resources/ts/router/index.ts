import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/Index.vue'
import MyPage from '@/views/myPage/Index.vue'
import ApplyCompany from '@/views/applyCompany/Index.vue'
import SelectReviewCompany from '@/views/postingReview/selectReviewCompany/Index.vue'
import ReviewRegisterForm from '@/views/postingReview/postingReview/Index.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myPage',
    name: 'MyPage',
    component: MyPage
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
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
