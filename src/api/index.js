import phones from './mockPhones'

export const fetchPhones = async () => {
  return new Promise((resolve) => {
    resolve(phones)
  })
}

export const loadMorePhones = async ({offset}) => {
  return new Promise((resolve) => {
    resolve(phones)
  })
}
