import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import ProfileDashboard from './components/ProfileDashboard.vue'
/* @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
  },
  { path: '/:path(.*)', component: NotFound },
  {
    path: '/profile',
    meta: { title: ' my profile' },
    component: Profile,

    children: [{
      path: 'dashboard',
      components:{
        default:Login,
        profile:ProfileDashboard
      }
    }]
  },
  {
    path: '/login',
    meta: { title: 'login' },
    component: Login,
  },
  {
    path: '/signup',
    meta: { title: 'signup' },
    component: Signup,
  }
  
]
