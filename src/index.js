import 'babel-polyfill'
import React,{createElement} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './App.jsx'
import store from './redux/store/store'


let rootElement = document.getElementById('react-root')

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootElement
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(createElement(App)))
}
