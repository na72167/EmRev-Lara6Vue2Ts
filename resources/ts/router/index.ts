import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/Index.vue'
import MyPage from '@/views/myPage/Index.vue'
import SelectReviewCompany from '@/views/postingReview/selectReviewCompany/Index.vue'

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
    path: '/SelectReviewCompany',
    name: 'SelectReviewCompany',
    component: SelectReviewCompany
  },
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
