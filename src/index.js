import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'animate.css'

import './styles/globals.css'
import App from './components/App'
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()
const Root = (
  <Provider store={store}>
    <App />
  </Provider>
)
render(Root, document.getElementById('app-root'))
registerServiceWorker()
