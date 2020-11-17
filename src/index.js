import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'

import createRootReducer from 'reducers'
import routes from 'routes'

import './main.css'

const history = createBrowserHistory()

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
