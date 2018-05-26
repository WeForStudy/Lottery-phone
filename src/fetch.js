
// import { TOKEN_KEY } from 'storage/keys'
// import { get } from 'storage'

// const BASEURL = 'http://localhost:1200'
const BASEURL = ''

const METHODS = {
  get: 'GET',
  post: 'POST'
}
const TIME_OUT = 120000
const LOGIN_PAH = '#/login'
// 一些异常返回码
const TOKEN_LIST = [
  100004 
]
const querystring = (obj, url = '') => {
  if(url) {
    url += '?'
  }
  for(var name in obj){
      url += name + '=' + encodeURIComponent(obj[name]) + '&'; // 转码并进行赋值
  }
  url = url.substring(0,url.length-1); // 去掉最后一个&符号
  return url; // 返回
}
const _request = async (url, method, params) => {
  let _url = BASEURL + url
  const { hash } = window.location
  if (hash === LOGIN_PAH) {
    _url = querystring(params, BASEURL + url)
  }
  //  登录验证
  // let token = get(TOKEN_KEY)
  // if (!token) {
  //   if (hash !== LOGIN_PAH) {
  //     Modal.warning({
  //       title: '系统提示',
  //       content: '未登陆，是否登陆？',
  //       onOk: () => window.location.replace(LOGIN_PAH),
  //       okText: '确定',
  //     })
  //   }
    
  // }
  const _p1 = new Promise((resolve, reject) => {
      let contentType = {}
      if(method !== 'OPTIONS') {
        contentType = {
          'Content-Type': 'application/json;application:/x-www-form-urlencoded',
        }
      }
      let headers = new Headers({
	      'Content-Type': 'text/plain;application:/x-www-form-urlencoded',
        'Authorization': 'token',
        ...contentType
      })
      let body = {}
      const { get, post } = METHODS
      if(method === post) {
        body = { body: JSON.stringify(params) }
      } else if(method === get){
        _url = querystring(params, BASEURL + url)
      }
      let req = new Request(_url,{
        method: method,
        mode: 'cors',
        headers,
        ...body
      })
      let func = fetch(req)
      func.then(res => {
        if(res.status === 200) {
          try {
           var data = res.json()
          } catch(err) {
            console.log(err)
            throw new Error(err.message || '网络异常')
          }
        } else {
          throw new Error(res.statusText || '网络异常')
        }
        return data
      }).then(res => {
        if(TOKEN_LIST.indexOf(res.code) !== -1) {
           // 如果是有意义的返回码
          // Modal.warning({
          //   title: '系统提示',
          //   content: '登录失效，是否重新登录',
          //   onOk: () => window.location.replace(LOGIN_PAH),
          //   okText: '确定',
          // })
        } else if (res.retCode === '200' || res.retCode === 200) {
          let data = (res.retValue && res.retValue) || (res.message && res.message)
          resolve(data) 
        } else {
          reject(new Error(res.data.message || '服务器异常'))
        }
      }).catch(err => {
        console.log(err)        
        reject(new Error(err.message || '服务器异常'))
      })
  })
  const _p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Error('网络请求超时'))
    }, TIME_OUT)
  })
  return Promise.race([_p1, _p2])
} 
// restFul
// 字符串模板
const http = {
  get: (url, params) => {
    return _request(url, METHODS.get)
  },
  post: (url, params = {}) => {
    return _request(url, METHODS.post, params)
  }, 
} 

export default {
  post: http.post,
  get: http.get,
}
