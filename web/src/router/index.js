import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from "../views/pk/PkIndexView.vue"
import RecordIndexView from "../views/record/RecordIndexView.vue"
import NotFoundView from "../views/error/NotFoundView.vue"
import RankListIndexView from "../views/ranklist/RankListIndexView.vue"
import UserBotIndexView from "../views/user/bot/UserBotIndexView.vue"
const routes = [
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView,
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,
  },
  {
    path: "/rank/",
    name: "ranklist_index",
    component: RankListIndexView,
  },
  {
    path: "/user/bot/",
    name: "user_index",
    component: UserBotIndexView,
  }, 
  {
    path: "/404/",
    name: "NotFound_index",
    component: NotFoundView,
  },
  // {
  //   path: "/:catchAll(.*)",
  //   redirect: "/404/"
  // }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
