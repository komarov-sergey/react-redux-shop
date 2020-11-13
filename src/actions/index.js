import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONES_BY_ID_START,
  FETCH_PHONES_BY_ID_SUCCESS,
  FETCH_PHONES_BY_ID_FAILURE,
  ADD_PHONE_TO_BASKET,
  SEARCH_PHONE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from 'actionTypes'
import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchPhoneById as fetchPhoneByIdApi,
  fetchCategories as fetchCategoriesApi,
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

export const fetchCategories = async (dispatch) => {
  try {
    dispatch({type: FETCH_CATEGORIES_START})

    const categories = await fetchCategoriesApi()

    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories,
    })
  } catch (e) {
    dispatch({type: FETCH_CATEGORIES_FAILURE, payload: e, error: true})
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

export const fetchPhoneById = async (dispatch, id) => {
  dispatch({type: FETCH_PHONES_BY_ID_START})

  try {
    const phone = await fetchPhoneByIdApi(id)

    dispatch({
      type: FETCH_PHONES_BY_ID_SUCCESS,
      payload: phone,
    })
  } catch (e) {
    dispatch({type: FETCH_PHONES_BY_ID_FAILURE, payload: e, error: true})
  }
}

export const addPhoneToBasket = (dispatch, id) => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id,
  })
}

export const searchPhone = (dispatch, text) => {
  dispatch({
    type: SEARCH_PHONE,
    payload: text,
  })
}
