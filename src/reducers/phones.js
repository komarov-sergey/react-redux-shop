import * as R from 'ramda'

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  FETCH_PHONES_BY_ID_SUCCESS,
} from 'actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return {...state, ...newValues}
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload)
      return {...state, ...moreValues}
    case FETCH_PHONES_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state)
    default:
      return state
  }
}
