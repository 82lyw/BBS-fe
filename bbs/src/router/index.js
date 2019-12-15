import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 引入组件,懒加载
const Login = () => import('@/views/login/Login.vue')
const Register = () => import('@views/register/Register.vue')
const Test = () => import('@/views/test/Test.vue')
const About = () => import('@/views/about/About.vue')
const Create = () => import('@/views/create/Create.vue')
const NotFound = () => import('@views/notFound/NotFound.vue')

const Search = () => import('@views/search/Search.vue')

const Profile = () => import('@views/profile/Profile.vue')
const ProfileAvatar = () => import('@views/profile/ProfileAvatar.vue')
const ProfileMain = () => import('@views/profile/ProfileMain.vue')
const ProfileInfo = () => import('@views/profile/ProfileInfo.vue')
const ProfileMod = () => import('@views/profile/ProfileMod.vue')

const Admin = () => import('@views/admin/Admin.vue')
const AdminMain = () => import('@views/admin/AdminMain.vue')
const AdminEdit = () => import('@views/admin/AdminEdit.vue')

const TopicsPanel = () => import('@views/topicsPanel/TopicsPanel.vue')
const TopicPanel = () => import('@views/topicPanel/TopicPanel.vue')

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'topicsPanel',
    component: TopicsPanel,
    meta: {
      title: '社区首页'
    }
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component: TopicPanel,
    meta: {
      title: '文章'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录社区'
    }
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta: {
      title: '测试'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
    meta: {
      title: '发布帖子'
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      title: '注册账号'
    }
  },
  {
    path: '/profile',
    redirect: '/profile/main',
    component: Profile,
    meta: {
      title: '我的资料'
    },
    children: [
      {
        path: 'main',
        component: ProfileMain,
        meta: {
          title: '我的资料'
        }
      },
      {
        path: 'avatar',
        component: ProfileAvatar,
        meta: {
          title: '修改头像'
        }
      },
      {
        path: 'info',
        component: ProfileInfo,
        meta: {
          title: '修改个人资料'
        }
      },
      {
        path: 'mod',
        component: ProfileMod,
        meta: {
          title: '修改密码'
        }
      }
    ]
  },
  {
    path: '/admin',
    redirect: '/admin/main',
    component: Admin,
    meta: {
      title: '管理员权限'
    },
    children: [
      {
        path: 'main',
        component: AdminMain,
        meta: {
          title: '管理员权限'
        }
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: AdminEdit,
        meta: {
          title: '修改帖子'
        }
      }
    ]
  },
  {
    path: '/search/:query',
    name: 'search',
    component: Search
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: '404'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
