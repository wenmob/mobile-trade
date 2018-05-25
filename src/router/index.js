import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/layout/PageTransition'
import Oneself from '@/components/layout/Oneself'
import User from '@/components/layout/User'
import APIS from '@/utils/apis'
import 'vue-layer-mobile/need/layer.css' //弹出框
import layer from 'vue-layer-mobile'
import { setToken,setDomain,getDomain } from '@/utils/auth'
import { setStatuc } from '@/utils/request'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1)
};

const router = new Router({
  routes: [
    {
      path: '*',
      component: () => import('@/components/404'),
      meta: {
        title: '404',
        requireAuth: false/*是否判断登录状态*/
      }
    },
    //交易
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [
        {
          path: 'history',
          name: 'History',
          component: () => import('@/components/History'),
          meta: {
            title: "查询",
            table: "history",
            requireAuth: true
          }
        },

        {
          path: 'position',
          name: 'Position',
          component: () => import('@/components/PositionAll'),
          meta: {
            title: "持仓",
            table: "position",
            requireAuth: true
          }
        },
        {
          path: '',
          name: 'buy',
          component: () => import('@/components/Buy'),
          meta: {
            title: "买入",
            table: "buy",
            requireAuth: true
          }
        },
        {
          path: 'sale',
          name: 'sale',
          component: () => import('@/components/Sale'),
          meta: {
            title: "卖出",
            table: "sale",
            requireAuth: true
          }
        },
        {
          path: 'repeal',
          name: 'repeal',
          component: () => import('@/components/Repeal'),
          meta: {
            title: "撤销",
            table: "repeal",
            requireAuth: true
          }
        }
      ]
    },
    //自选
    {
      path: '/oneself',
      name: 'Oneself',
      component: Oneself,
      children: [
        {
          path: '',
          name: 'OS_HOME',
          component: () => import('@/components/oneself/OS_HOME'),
          meta:{
            title: "自选",
            requireAuth: true
          }
        },
        {
            path: 'search',
            name: 'OS_SEARCH',
            component: () =>
            import ('@/components/oneself/OS_SEARCH'),
            meta: {
              title: "搜索",
              requireAuth: true
            }
        },
        {
            path: 'editor',
            name: 'OS_EDITOR',
            component: () =>
            import ('@/components/oneself/OS_EDITOR'),
            meta: {
              title: "编辑",
              requireAuth: true
            }
        },
        {
            path:'stockDetail',
            name: 'stockDetail',
            component: () => import('@/components/oneself/StockDetail'),
            children: [
              {
                path: '',
                name: 'Time_share',
                component: () => import('@/components/plugIn/Time_share'),
                meta: {
                  title: "股票",
                  kline: 0,
                  requireAuth: true
                }
              },
              {
                path: 'dayStock',
                name: 'Day_stock',
                component: () => import('@/components/plugIn/Day_stock'),
                meta: {
                  title: "股票",
                  kline: 1,
                  requireAuth: true
                }
              },
              {
                path: 'weekStock',
                name: 'Week_stock',
                component: () => import('@/components/plugIn/Week_stock'),
                meta: {
                  title: "股票",
                  kline: 2,
                  requireAuth: true
                }
              },
              {
                path: 'monthStock',
                name: 'Month_stock',
                component: () => import('@/components/plugIn/Month_stock'),
                meta: {
                  title: "股票",
                  kline: 3,
                  requireAuth: true
                }
              }
            ]
        }
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children:[
      		{
      			path:'',
      			name:'UserIndex',
      			component:() => import('@/components/user/UserIndex'),
      			meta:{
	            title: "我的",
	            requireAuth: true
	          }
          },
          {
          path: 'userDetail',
            name: 'UserDetail',
            component: () => import('@/components/user/UserDetail'),
            meta: {
              title: "我的",
              requireAuth: true
            }
          },
      		{
      			path:'changePaw',
      			name:'ChangePaw',
      			component:() => import('@/components/user/ChangePaw'),
      			meta:{
	            title: "修改密码",
	            requireAuth: true
	          }
      		},
      		{
      			path:'about',
      			name:'About',
      			component:() => import('@/components/user/About'),
      			meta:{
	            title: "关于",
	            requireAuth: true
	          }
      		}
      ]

    },
    {
      path: '/historyDetail',
      name: 'HistoryDetail',
      component: () => import('@/components/HistoryDetail'),
      meta: {
        title: "查询详情",
        table: "historyDetail",
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login'),
      meta: {
        title: "登录",
        table: "login",
        requireAuth: false
      }
    }
  ]
})

router.beforeEach((to,from,next) => {
  setStatuc(0);
  let ttoken = to.query.token;
  if (ttoken) {
    setToken(ttoken);
  }
  let domain = to.query.domain;
  if (domain) {
    domain = domain + to.hash;
    setDomain(domain);
  }
  if (to.matched.some(record => record.meta.requireAuth)) {
     APIS.checklogin().then(res => {
         if(res.code == 0) {
           Vue.prototype.Tactive = to.meta.table;
           Vue.prototype.k = to.meta.kline;
           Vue.prototype.OS_Title = to.meta.title;
           document.title = to.meta.title;
           next();
         }else{
             layer.dialog({
               title: ['提示', 'background:#AF282D;color:white;'],
               content: '由于你长时间未操作，请重新进入',
               btn: ['确定']
             }).then(function (result) {
               if (result == 0) {
               			window.location.href = "http://a.yingqw.com/h5/#/trade"
               }
             })
         }
     }).catch(error => {
        console.log(error);
     })
   }else{
    next();
   }
})

export default router
