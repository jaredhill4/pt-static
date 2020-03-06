import { lazy } from 'react';

export default [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: lazy(() => import('../pages/Home/Home'))
  },
  {
    path: null,
    name: 'notFound',
    component: lazy(() => import('../pages/NotFound/NotFound'))
  }
];
