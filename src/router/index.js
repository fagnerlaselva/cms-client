import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
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
      path: '/editor-artigo-preview',
      name: 'ArticleEditorPreview',
      component: () => import('../views/ArticleEditorPreview.vue')
    },
    {
      path: '/artigo-seo',
      name: 'ArticleSeo',
      component: () => import('../views/ArticleSeo.vue')
    },
    {
      path: '/rascunho',
      name: 'Draft',
      component: () => import('../views/Draft.vue')
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
      path: '/adicionar-autor',
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
      path: '/Autores',
      name: 'Member',
      component: () => import('../views/Member.vue')
    },
    {
      path: '/redefinir-senha',
      name: 'RedefinePassword',
      component: () => import('../views/RedefinePassword.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/config',
      name: 'Config',
      component: () => import('../views/Config.vue')
    },
    {
      path: '/seo-blog',
      name: 'SeoBlog',
      component: () => import('../views/SeoBlog.vue')
    }

  ]

})


export default router
