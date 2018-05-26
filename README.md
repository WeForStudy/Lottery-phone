# Lottery-phone
A react-native project for loterry

### 目录详解
 - services 
   > 里面封装了所有的fetch请求，根据模块的不同写在不同的js文件内
    - 1.先在apis.js里面添加对应的路径
    - 2.在services里对应的模块添加方法
    - 3.在页面import调用

  - tool
   > 一些常用的方法,adapter适配方法
  - page
   > 所有的页面
  - assets
   > 资源文件
  - navigation
   > 导航的配置
  

  #### redux相关
   - actions
   > redux的相关action
   - reduces
   > redux的相关reduces（对数据的操作在这里进行）
   - actionTypes
     > 相关的actionType

  #### 新建一个redux状态
  1.在reduces里新建一个对应文件
  2.写好相关initialState和reduces
  3.配上对应的actionType
  4.在action对应的模块配好actionType
  5.在reduces里的combine里加入你的模块
  6.在页面引用相关action和state里的值
  7.适配mapStateToProps和mapDispatchToProps（state为属性值，dispatch为方法）
  8.使用connect链接此页面与redux的属性，一般在export default操作
  9.恭喜，你可以像正常属性一样使用redux中的值了
  