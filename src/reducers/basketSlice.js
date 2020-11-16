import * as R from 'ramda'
import {createSlice} from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addPhoneToBasket(state, {payload}) {
      state.push(payload)
    },
    removePhoneFromBasket(state, {payload}) {
      return state.filter((elem) => elem !== payload)
    },
    cleanBasket(state) {
      state = []
      return state
    },
  },
})

export const {
  addPhoneToBasket,
  removePhoneFromBasket,
  cleanBasket,
} = basketSlice.actions

export default basketSlice.reducer
