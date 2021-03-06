import * as R from 'ramda'

import phones from 'api/mockPhones'
import categories from 'api/mockCategories'

export const fetchPhones = async () => {
  return new Promise((resolve) => {
    resolve(phones)
  })
}

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    resolve(categories)
  })
}

export const loadMorePhones = async ({offset}) => {
  return new Promise((resolve) => {
    resolve(phones)
  })
}

export const fetchPhoneById = async (id) => {
  return new Promise((resolve) => {
    const phone = R.find(R.propEq('id', id), phones)
    resolve(phone)
  })
}
