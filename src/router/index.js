import Vue from 'vue'
import VueRouter from 'vue-router'

//通过懒加载的方式淡入组件
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Cart = () => import('../views/cart/Cart')

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]
const router = new VueRouter({
  routes:routes,
  mode:'history'  //history模式，路径没有#
})

//3.导出router
export default router
