import { lazy } from 'react';

export default [
  {
    path: '/',
    data: 'pages.home',
    exact: true,
    component: lazy(() => import('../pages/Home/Home'))
  },
  {
    path: null,
    data: 'pages.notFound',
    component: lazy(() => import('../pages/NotFound/NotFound'))
  }
];
