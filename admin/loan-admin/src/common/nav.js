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
        name: 'H5合作',
        icon: 'mobile',
        path: 'h5',
        component: dynamicWrapper(app, [], () => import('../pages/H5')),
      },
      {
        name: 'API合作',
        path: 'api',
        icon: 'copy',
        children: [
          // {
          //   name: '分析页',
          //   path: 'analysis',
          //   component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
          // },
          {
            name: '数据汇总',
            path: 'data-all',
            component: dynamicWrapper(app, ['dataAll'], () => import('../pages/API/DataAll/')),
          },
          {
            name: '数据详情',
            path: 'detail',
            component: dynamicWrapper(app, ['dataDetail'], () => import('../pages/API/Detail/')),
          },
          {
            name: '整体趋势',
            path: 'all-trend',
            component: dynamicWrapper(app, [], () => import('../pages/API/AllTrend/')),
          },
          {
            name: '转化率趋势',
            path: 'conversion-trend',
            component: dynamicWrapper(app, [], () => import('../pages/API/ConversionTrend/')),
          },
          {
            name: '还款统计',
            path: 'repayment',
            component: dynamicWrapper(app, ['repay'], () => import('../pages/API/Repayment/')),
          },
          {
            name: '产品结算设置',
            path: 'expressions-setting',
            component: dynamicWrapper(app, ['expressions'], () => import('../pages/API/ExpressionsSetting/')),
          },
        ],
      },
      {
        name: '权限设置',
        icon: 'setting',
        path: 'authorized',
        component: dynamicWrapper(app, [], () => import('../pages/Authorized')),
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
