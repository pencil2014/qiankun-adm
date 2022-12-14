import Cookies from 'js-cookie'

const TokenKey = 'X-TOKEN'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setTokenTime(time) {
  return Cookies.set(TokenKeyTime, time)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
