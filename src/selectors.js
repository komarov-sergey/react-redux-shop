import * as R from 'ramda'

const getPhoneById = (state, id) => R.prop(id, state.phones)

export const getPhones = (state) => {
  const phones = R.map((id) => getPhoneById(state, id), state.phonesPage.ids)

  return phones
}

export const getRenderedPhonesLength = (state) => state.phonesPage.ids.length
