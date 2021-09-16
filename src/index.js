import AslHello from "./components/AslHello/index"
import AslTest from "./components/AslTest/index"
function install(Vue){
  Vue.use(AslHello)
  Vue.use(AslTest)
}

//通过`script`标签引入组件库的情况，注册所有组件
if (window && window.Vue) {
  Vue.use(install)
}

/***
在es模块中， 能被按需引入的变量需要用这些方式导出：
export const a = 1
export function a(){}
export { a, b }
而不能使用export default
***/

export {    
  AslHello,
  AslTest
}

export default install  //umd
