export const nonNull = (text = '参数不能为空') => {
  return  new Error(text)
}
