import {createSlice} from '@reduxjs/toolkit'
import * as R from 'ramda'

import {fetchPhones as fetchPhonesApi} from 'api'

const FETCH_PHONES_START = 'FETCH_PHONES_START'
const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS'
const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE'

const phonesSlice = createSlice({
  name: 'phones',
  initialState: {state: ''},
  reducers: {
    changeState(state, {payload}) {
      state.state = payload
    },
    fetchPhones(state, {payload}) {
      const newValues = R.indexBy(R.prop('id'), payload)
      return (state = newValues)
    },
    loadMorePhonesSuccess(state, {payload}) {
      const moreValues = R.indexBy(R.prop('id'), payload)
      return {...state, ...moreValues}
    },
    fetchPhonesByIdSuccess() {},
  },
})

const {
  changeState,
  fetchPhones,
  loadMorePhonesSuccess,
  fetchPhonesByIdSuccess,
} = phonesSlice.actions

export const fetchPhonesAction = async (dispatch) => {
  try {
    dispatch(changeState(FETCH_PHONES_START))

    const phones = await fetchPhonesApi()
    dispatch(changeState(FETCH_PHONES_SUCCESS))
    console.log({phones})
    dispatch(fetchPhones(phones))
  } catch (e) {
    dispatch(changeState(FETCH_PHONES_FAILURE))
  }
}

export default phonesSlice.reducer
