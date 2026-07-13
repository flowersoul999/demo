import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import ChroniclesPage from '@/pages/ChroniclesPage.vue'
import CulturePage from '@/pages/CulturePage.vue'
import VoicePage from '@/pages/VoicePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/team',
    name: 'team',
    component: TeamPage,
  },
  {
    path: '/chronicles',
    name: 'chronicles',
    component: ChroniclesPage,
  },
  {
    path: '/culture',
    name: 'culture',
    component: CulturePage,
  },
  {
    path: '/voice',
    name: 'voice',
    component: VoicePage,
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
