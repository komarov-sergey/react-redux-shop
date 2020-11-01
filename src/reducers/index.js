import {connectRouter} from 'connected-react-router'
import {combineReducers} from 'redux'
import {connectedRouter} from 'connected-react-router'

import phones from 'reducers/phones'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    phones,
  })
