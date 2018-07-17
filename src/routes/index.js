import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'bundle-loader?lazy!../views/Home';
import StoreManagement from 'bundle-loader?lazy!../views/StoreManagement';
import StoreList from 'bundle-loader?lazy!../views/StoreManagement/StoreList';
import RoleManagement from 'bundle-loader?lazy!../views/StoreManagement/RoleManagement';
import { bundleComponent } from './bundleComponent';

export const routes = [
  {
    path: '/',
    exact: true,
    component: bundleComponent(Home)
  }, 
  {
    path: '/demo',
    exact: true,
    component: bundleComponent(Home)
  }, 
  {
    path: '/storemanagement',
    component: bundleComponent(StoreManagement),
    routes: [
      {
        path: '/storemanagement/',
        exact: true,
        component: bundleComponent(StoreList)
      },
      {
        path: '/storemanagement/role',
        exact: true,
        component: bundleComponent(RoleManagement)
      }
    ]
  }
]

export const RouteWithSubRoutes = (route) => (
    <Route 
      exact={route.exact} 
      path={route.path} 
      render={props => (<route.component { ...props } routes={ route.routes } />)} 
    />
)


