import phones from './mockPhones'

export const fetchPhones = async () => {
  return new Promise((resolve) => {
    resolve(phones)
  })
}
