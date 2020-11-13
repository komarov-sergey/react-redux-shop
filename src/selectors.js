import * as R from 'ramda'

const getPhoneById = (state, id) => R.prop(id, state.phones)

export const getPhones = (state, activeCategoriesId) => {
  const applySearch = (item) =>
    R.contains(state.phonesPage.search, R.prop('name', item))

  const applyCategory = (item) =>
    activeCategoriesId === R.prop('categoryId', item)

  const checkActiveCategoriesId = (activeCategoriesId) => {
    return activeCategoriesId !== '/'
  }

  const phones = R.compose(
    R.filter(applySearch),
    R.when(
      () => checkActiveCategoriesId(activeCategoriesId),
      R.filter(applyCategory)
    ),
    R.map((id) => getPhoneById(state, id))
  )(state.phonesPage.ids)

  return phones
}

export const getRenderedPhonesLength = (state) => state.phonesPage.ids.length

export const getBasketPhonesWithCount = (state) => {
  const phoneCount = (id) =>
    R.compose(
      R.length,
      R.filter((basketId) => R.equals(id, basketId))
    )(state.basket)
  const phoneWithCount = (phone) =>
    R.assoc('count', phoneCount(phone.id), phone)
  const uniqueIds = R.uniq(state.basket)
  const phones = R.compose(
    R.map(phoneWithCount),
    R.map((id) => getPhoneById(state, id))
  )(uniqueIds)

  return phones
}

export const getTotalBasketPrice = (state) => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map((id) => getPhoneById(state, id))
  )(state.basket)

  return totalPrice
}
