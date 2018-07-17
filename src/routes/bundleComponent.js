import React from 'react'
import Bundle from './bundle'

export const bundleComponent = (Component) => (props) => (
  <Bundle load={Component}>
    { (App) => <App {...props} /> }
  </Bundle>
)
