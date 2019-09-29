import Vue from 'vue'
import Vuex from 'vuex'
import global from './global'
Vue.use(Vuex)

// const modulesFiles = require.context('./modules', true, /\.js$/)
// const modules = () =>{
//   let obj = {}
//   let key = modulesFiles.keys().forEach((path)=>{
//     const value = modulesFiles(path);
//     const moduleName = path.replace(/^\.\/(.*)\.\w+$/, '$1');
//     obj[moduleName] = value.default;
//   })
//   return obj
// }
// modules()

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default
  return modules
}, {})
const obj = {}
obj.modules = modules;
const options = Object.assign(global,obj)
console.log(JSON.parse(JSON.stringify(options)))
console.log(options)
const store = new Vuex.Store(options)
export default store
