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
