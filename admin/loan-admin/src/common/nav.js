import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: '贷款数据分析',
        path: 'data',
        icon: 'copy',
        children: [
          // {
          //   name: '分析页',
          //   path: 'analysis',
          //   component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
          // },
          {
            name: '充值金额与充值用户',
            path: 'recharge',
            component: dynamicWrapper(app, ['dataAll'], () => import('../pages/LoanData/recharge/')),
          },
          {
            name: '新增与申请认证用户',
            path: 'add',
            component: dynamicWrapper(app, ['dataAll'], () => import('../pages/LoanData/add_user/')),
          },
          {
            name: '消费用户',
            path: 'buy',
            component: dynamicWrapper(app, ['dataAll'], () => import('../pages/LoanData/buy_user/')),
          },
          {
            name: '净收入与退款',
            path: 'earning',
            component: dynamicWrapper(app, ['dataAll'], () => import('../pages/LoanData/earning/')),
          },
        ],
      },
      {
        name: '数据管理',
        icon: 'edit',
        path: 'edit',
        children: [
          {
            name: '编辑查看数据',
            path: 'data',
            component: dynamicWrapper(app, ['dataAll'], () => import('../pages/Edit/data/')),
          },
        ],
      },
    ],
  }
  // {
  //   component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
  //   path: '/user',
  //   layout: 'UserLayout',
  //   children: [
  //     {
  //       name: '帐户',
  //       icon: 'user',
  //       path: 'user',
  //       children: [
  //         {
  //           name: '登录',
  //           path: 'login',
  //           component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
  //         },
  //         {
  //           name: '注册',
  //           path: 'register',
  //           component: dynamicWrapper(app, ['register'], () => import('../routes/User/Register')),
  //         },
  //         {
  //           name: '注册结果',
  //           path: 'register-result',
  //           component: dynamicWrapper(app, [], () => import('../routes/User/RegisterResult')),
  //         },
  //       ],
  //     },
  //   ],
  // }
];
