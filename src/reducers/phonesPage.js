import * as R from 'ramda'

import {FETCH_PHONES_SUCCESS} from 'actionType'

const initialState = {
  ids: [],
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const ids = R.pluck('id', payload)
      return {...state, ids: [...ids]}
    default:
      return state
  }
}
