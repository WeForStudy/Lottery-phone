export default (config => {
  return Object.keys(config).reduce((copy, name) => {
    copy[name] = config[name]
    return copy
  }, {})
})({
  // login模块
  'onLogin': '/api/user/login',
})
