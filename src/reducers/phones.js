import * as R from 'ramda'

import {FETCH_PHONES_SUCCESS} from 'actionType'

const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return {...state, ...newValues}
  }
  return state
}
