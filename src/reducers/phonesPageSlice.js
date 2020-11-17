import {createSlice} from '@reduxjs/toolkit'
import * as R from 'ramda'

import {fetchPhones as fetchPhonesApi} from 'api'

const FETCH_PHONES_START = 'FETCH_PHONES_START'
const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS'
const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE'

const phonesPageSlice = createSlice({
  name: 'phonesPage',
  initialState: {ids: [], search: ''},
  reducers: {
    changeState(state, {payload}) {
      state.state = payload
    },
    fetchPhonesPage(state, {payload}) {
      const ids = R.pluck('id', payload)
      // return {...state, ids: [...ids], state: FETCH_PHONES_SUCCESS}
      return (state.ids = [...ids])
    },
    // LOAD_MORE_PHONES_SUCCESS(state, {payload}) {
    //   const moreIds = R.pluck('id', payload)
    //   return {...state, ids: R.concat(moreIds, state.ids)}
    // },
    // SEARCH_PHONE(state, {payload}) {
    //   return R.merge(state, {search: payload})
    // },
  },
})

const {
  changeState,
  fetchPhonesPage, //,
  // LOAD_MORE_PHONES_SUCCESS,
  // SEARCH_PHONE,
} = phonesPageSlice.actions

export const fetchPhonesPageAction = async (dispatch) => {
  try {
    dispatch(changeState(FETCH_PHONES_START))

    const phones = await fetchPhonesApi()

    dispatch(changeState(FETCH_PHONES_SUCCESS))
    dispatch(fetchPhonesPage(phones))
    // dispatch({
    //   type: FETCH_PHONES_SUCCESS,
    //   payload: phones,
    // })
  } catch (e) {
    dispatch(changeState(FETCH_PHONES_FAILURE))
  }
}

export default phonesPageSlice.reducer
