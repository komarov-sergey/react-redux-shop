import {createSlice} from '@reduxjs/toolkit'
import * as R from 'ramda'

import {fetchPhoneById as fetchPhoneByIdApi} from 'api'

const FETCH_PHONES_BY_ID_START = 'FETCH_PHONES_BY_ID_START'
const FETCH_PHONES_BY_ID_SUCCESS = 'FETCH_PHONES_BY_ID_SUCCESS'
const FETCH_PHONES_BY_ID_FAILURE = 'FETCH_PHONES_BY_ID_FAILURE'

const phonePageSlice = createSlice({
  name: 'phonePage',
  initialState: {id: null, state: ''},
  reducers: {
    changeState(state, {payload}) {
      state.state = payload
    },
    fetchPhoneById(state, {payload}) {
      return {...state, id: payload.id}
    },
  },
})

const {changeState, fetchPhoneById} = phonePageSlice.actions

export const fetchPhoneByIdAction = async (dispatch, id) => {
  try {
    dispatch(changeState(FETCH_PHONES_BY_ID_START))
    const phone = await fetchPhoneByIdApi(id)
    dispatch(changeState(FETCH_PHONES_BY_ID_SUCCESS))
    dispatch(fetchPhoneById(phone))
  } catch (e) {
    dispatch(changeState(FETCH_PHONES_BY_ID_FAILURE))
  }
}

export default phonePageSlice.reducer
