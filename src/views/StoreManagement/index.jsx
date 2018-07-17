import React,{Component} from 'react';
import {RouteWithSubRoutes} from '../../routes'

const StoreManagement = (props) => {
  return (
    props.routes.map((route, i) => 
    (<RouteWithSubRoutes key={i} exact={route.exact} {...route} />))
  )
}

export default StoreManagement;