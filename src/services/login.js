import http from '../fetch'
import apis from '../api'
import { nonNull  } from '../tool'
// 如果参数是必须填，给nonNull方法,
export const onLogin = (params = {}) => {
  return http.post(apis.onLogin, params)
}