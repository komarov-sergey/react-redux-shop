import * as R from 'ramda'

import {FETCH_CATEGORIES_SUCCESS} from 'actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return {...state, ...newValues}
    default:
      return state
  }
}
