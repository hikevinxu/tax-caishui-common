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
        title: '海外公司注册专题'
      }
    },
    {
      path: '/agencyAccountProject',
      name: 'agencyAccountProject',
      component: () => import('../views/subjectPages/agencyAccount.vue'),
      meta: {
        title: '代理记账专题'
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
      path: '/landPage',
      name: 'landPage',
      component: () => import('../views/downLoadPages/landPage/landPage.vue'),
      meta: {
        title: '财税鱼渠道页'
      }
    },
    {
      path: '/downloadAPP',
      name: 'downloadAPP',
      component: () => import('../views/downLoadPages/landPage/download.vue'),
      meta: {
        title: '财税鱼渠道页'
      }
    },
    {
      path: '/agencyAccount',
      name: 'agencyAccount',
      component: () => import('../views/downLoadPages/agencyAccount.vue'),
      meta: {
        title: '代理记账推广_01'
      }
    },
    {
      path: '/kaihu',
      name: 'kaihu',
      component: () => import('../views/downLoadPages/companyRegister.vue'),
      meta: {
        title: '公司注册'
      }
    },
    {
      path: '/agencyAccount_2',
      name: 'agencyAccount_2',
      component: () => import('../views/downLoadPages/agencyAccount_2.vue'),
      meta: {
        title: '代理记账推广_02'
      }
    },
    {
      path: '/overseasRegister',
      name: 'overseasRegister',
      component: () => import('../views/downLoadPages/overseasCompany.vue'),
      meta: {
        title: '海外注册推广_01'
      }
    },
    {
      path: '/overseasRegister_2',
      name: 'overseasRegister_2',
      component: () => import('../views/downLoadPages/overseasCompany_2.vue'),
      meta: {
        title: '海外注册推广_02'
      }
    },
    {
      path: '/overseasDownload_sgbs1cs1',
      name: 'overseasDownload_sgbs1cs1',
      component: () => import('../views/downLoadPages/overseasDownload_sgbs1cs1.vue'),
      meta: {
        title: '海外注册推广_D02'
      }
    },
    {
      path: '/overseasDownload_bdyf1cs1',
      name: 'overseasDownload_bdyf1cs1',
      component: () => import('../views/downLoadPages/overseasDownload_bdyf1cs1.vue'),
      meta: {
        title: '海外注册推广_D02'
      }
    },
    {
      path: '/overseasDownload_360pz1cs1',
      name: 'overseasDownload_360pz1cs1',
      component: () => import('../views/downLoadPages/overseasDownload_360pz1cs1.vue'),
      meta: {
        title: '海外注册推广_D02'
      }
    },
    {
      path: '/companyRegister',
      name: 'companyRegister',
      component: () => import('../views/downLoadPages/companyRegister.vue'),
      meta: {
        title: '公司注册'
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
