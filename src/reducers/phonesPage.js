import * as R from 'ramda'

import {FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS} from 'actionType'

const initialState = {
  ids: [],
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const ids = R.pluck('id', payload)
      return {...state, ids: [...ids]}
    case LOAD_MORE_PHONES_SUCCESS:
      const moreIds = R.pluck('id', payload)
      return {...state, ids: R.concat(moreIds, state.ids)}
    default:
      return state
  }
}
