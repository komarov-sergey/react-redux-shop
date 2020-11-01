import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
} from 'actionType'
import {fetchPhones as fetchPhonesApi} from 'api'

export const fetchPhones = () => async (dispatch) => {
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
