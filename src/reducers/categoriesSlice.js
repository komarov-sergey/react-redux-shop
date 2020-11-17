import {createSlice} from '@reduxjs/toolkit'
import * as R from 'ramda'

import {fetchCategories as fetchCategoriesApi} from 'api'

const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START'
const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {list: [], state: ''},
  reducers: {
    changeState(state, {payload}) {
      state.state = payload
    },
    fetchCategories(state, {payload}) {
      const newValues = R.indexBy(R.prop('id'), payload)
      return (state = newValues)
    },
  },
})

export const {fetchCategories, changeState} = categoriesSlice.actions

export const fetchCategoriesAction = async (dispatch) => {
  try {
    dispatch(changeState(FETCH_CATEGORIES_START))

    const categories = await fetchCategoriesApi()

    dispatch(changeState(FETCH_CATEGORIES_SUCCESS))
    dispatch(fetchCategories(categories))
  } catch (e) {
    dispatch(changeState(FETCH_CATEGORIES_FAILURE))
  }
}

export default categoriesSlice.reducer
