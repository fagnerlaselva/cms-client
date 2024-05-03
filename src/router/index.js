import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/editor-artigo',
      name: 'ArticleEditor',
      component: () => import('../views/ArticleEditor.vue')
    },
    {
      path: '/recuperar-senha',
      name: 'RecoverPassword',
      component: () => import('../views/RecoverPassword.vue')
    },
    {
      path: '/registrar-se',
      name: 'Register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/recuperacao-senha-solicitada',
      name: 'PasswordResetRequested',
      component: () => import('../views/PasswordResetRequested.vue')
    },
    {
      path: '/adicionar-membro',
      name: 'AddMember',
      component: () => import('../views/AddMember.vue')
    },
    {
      path: '/perfil',
      name: 'Profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/categoria',
      name: 'Category',
      component: () => import('../views/Category.vue')
    },
    {
      path: '/adicionar-categoria',
      name: 'AddCategory',
      component: () => import('../views/AddCategory.vue')
    },
    {
      path: '/membros',
      name: 'Member',
      component: () => import('../views/Member.vue')
    },
    {
      path: '/redefinir-senha',
      name: 'RedefinePassword',
      component: () => import('../views/RedefinePassword.vue')
    },
    {
      path: '/teste',
      name: 'ViewTeste',
      component: () => import('../views/Teste.vue')
    },
  ]

})

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
