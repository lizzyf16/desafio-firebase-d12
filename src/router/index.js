import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'
// import firebaseApp from '@/firebaseConfig';
// import { getFirestore, collection, onSnapshot } from 'firebase/firestore'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUpView.vue')
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import(/* webpackChunkName: "" */ '../views/UsuarioView.vue'),
    meta: {
      login: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async (to, from, next) => {
  let authRequired = to.meta.login;
  let usuario = store.state.usuario
  if (authRequired) {
    if (usuario) {
      next();
    } else {
      next("/login")
    }
    }else {
  next();
}
})
export default router
