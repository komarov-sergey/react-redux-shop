import {connectRouter} from 'connected-react-router'
import {combineReducers} from 'redux'

import phones from 'reducers/phones'
import phonesPage from 'reducers/phonesPage'
import phonePage from 'reducers/phonePage'
import basketReducer from 'reducers/basketSlice'
import categoriesReducer from 'reducers/categoriesSlice'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    phones,
    phonesPage,
    phonePage,
    basket: basketReducer,
    categories: categoriesReducer,
  })
