import { createRouter, createWebHistory } from 'vue-router'
const Home=()=>import("../views/HomeView.vue")
const Search=()=>import("../views/SearchView.vue")
const Compare=()=>import("../views/CompareView.vue")
const Recommend=()=>import("../views/RecommendView.vue")
const Teacher=()=>import("../views/TeacherView.vue")
const Student=()=>import("../views/StuUserView.vue")
const School=()=>import("../views/SchoolMView.vue")

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/compare',
    name: 'compare',
    component: Compare
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: Teacher
  },

  {
    path: '/student',
    name: 'student',
    component: Student
  },

  {
    path: '/school',
    name: 'school',
    component: School
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
