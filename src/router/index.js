import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';

const auth = async (to, from, next) => {
  const xAccessToken = localStorage.getItem("x-access-token")
  if (!xAccessToken) {
    next({ name: "Login" })
  }
  else {
    try {
      const response = await axios.get(`${import.meta.env.CMS_API_URL}/user`, {
        headers: {
          'x-access-token': xAccessToken
        }
      })
      if (response.status === 200) {
        next()
      } else {
        next({ name: "Login" })
      }
    } catch (error) {
      next({ name: "Login" })
    }
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      beforeEnter: auth
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
      beforeEnter: auth
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/editor-artigo',
      name: 'ArticleEditor',
      component: () => import('../views/ArticleEditor.vue'),
      beforeEnter: auth

    },
    {
      path: '/editor-artigo-preview',
      name: 'ArticleEditorPreview',
      component: () => import('../views/ArticleEditorPreview.vue'),
      beforeEnter: auth
    },
    {
      path: '/artigo-seo',
      name: 'ArticleSeo',
      component: () => import('../views/ArticleSeo.vue'),
      beforeEnter: auth
    },
    {
      path: '/rascunho',
      name: 'Draft',
      component: () => import('../views/Draft.vue'),
      beforeEnter: auth

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
      name: 'AddAuthor',
      component: () => import('../views/AddAuthor.vue')
    },
    {
      path: '/adicionar-bucket',
      name: 'AddBucket',
      component: () => import('../views/AddBucket.vue'),
      beforeEnter: auth
    },
    {
      path: '/perfil',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),
      beforeEnter: auth
    },
    {
      path: '/categoria',
      name: 'Category',
      component: () => import('../views/Category.vue'),
      beforeEnter: auth
    },
    {
      path: '/adicionar-categoria',
      name: 'AddCategory',
      component: () => import('../views/AddCategory.vue'),
      beforeEnter: auth
    },
    {
      path: '/autores',
      name: 'Author',
      component: () => import('../views/Author.vue'),
      beforeEnter: auth
    },
    {
      path: '/arquivado',
      name: 'Archive',
      component: () => import('../views/Archive.vue'),
      beforeEnter: auth
    },
    {
      path: '/inicio',
      name: 'Start',
      component: () => import('../views/Start.vue'),
      beforeEnter: auth
    },
    {
      path: '/redefinir-senha',
      name: 'RedefinePassword',
      component: () => import('../views/RedefinePassword.vue'),
      beforeEnter: auth
    },

    {
      path: '/config',
      name: 'Config',
      component: () => import('../views/Config.vue'),
      beforeEnter: auth
    },
    {
      path: '/seo-blog',
      name: 'SeoBlog',
      component: () => import('../views/SeoBlog.vue'),
      beforeEnter: auth
    }
  ]

})


export default router
