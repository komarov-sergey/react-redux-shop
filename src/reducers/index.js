import {connectRouter} from 'connected-react-router'
import {combineReducers} from 'redux'

import phones from 'reducers/phones'
import phonesPage from 'reducers/phonesPage'
import basketReducer from 'reducers/basketSlice'
import categoriesReducer from 'reducers/categoriesSlice'
import phonePageReducer from 'reducers/phonePageSlice'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    phones,
    phonesPage,
    phonePage: phonePageReducer,
    basket: basketReducer,
    categories: categoriesReducer,
  })
