import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
} from 'actionType'
import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
} from 'api'

export const fetchPhones = async (dispatch) => {
  try {
    dispatch({type: FETCH_PHONES_START})

    const phones = await fetchPhonesApi()

    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones,
    })
  } catch (e) {
    dispatch({type: FETCH_PHONES_FAILURE, payload: e, error: true})
  }
}

export const loadMorePhones = async (dispatch, getState) => {
  const offset = getState
  dispatch({type: LOAD_MORE_PHONES_START})

  try {
    const phones = await loadMorePhonesApi({offset})

    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones,
    })
  } catch (e) {
    dispatch({type: LOAD_MORE_PHONES_FAILURE, payload: e, error: true})
  }
}
