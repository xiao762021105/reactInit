import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import { routes, RouteWithSubRoutes } from './routes';
import Head from './components/Header';
import Nav from './components/Nav';
import Boundary from './components/Boundary';
import './app.css';

// import { renderRoutes } from 'react-router-config'
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Head />
          <Nav />
          <Boundary />
          <div className="m-main">
            {routes.map((route, i) => (<RouteWithSubRoutes key={'Allroute' + i} {...route} />))}
          </div>
        </div>
      </Router>
    )
  }
}

export default App
