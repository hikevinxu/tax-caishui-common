import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.back()
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/overseasCompany',
      name: 'overseasCompany',
      component: () => import('../views/subjectPages/overseasCompany.vue'),
      meta: {
        title: '海外公司注册'
      }
    },
    {
      path: '/agencyAccountProject',
      name: 'agencyAccountProject',
      component: () => import('../views/subjectPages/agencyAccount.vue'),
      meta: {
        title: '代理记账'
      }
    },
    {
      path: '/QA',
      name: 'QA',
      component: () => import('../views/subjectPages/QA.vue'),
      meta: {
        title: '注册海外公司要注意什么？'
      }
    },
    {
      path: '/agencyAccount',
      name: 'agencyAccount',
      component: () => import('../views/downLoadPages/agencyAccount.vue'),
      meta: {
        title: '代理记账'
      }
    },
    {
      path: '/overseasRegister',
      name: 'overseasRegister',
      component: () => import('../views/downLoadPages/overseasCompany.vue'),
      meta: {
        title: '海外公司注册'
      }
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/downLoadPages/downloadCommon.vue'),
      meta: {
        title: '财税鱼'
      }
    },
    {
      path: '/netError',
      name: 'netError',
      component: () => import('../views/errorPage/netError.vue'),
      meta: {
        title: '网络错误'
      }
    },
    {
      path: '/404',
      name: 'error404',
      component: () => import('../views/errorPage/error404.vue'),
      meta: {
        title: '404'
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
