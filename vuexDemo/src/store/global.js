/**
 * Created by Echonessy on 2019.09.11
 * 全局store 配置
 */

//components 执行dispatch('addAction')
// 触发actions的addAction方法
//  addAction通过commit('add')触发mutations的add方法改变state
//  getter计算后重新渲染到页面上

//golbal state
export const state = {
  golbalNumber:0
}
//golbal getters
export const getters = {
  golbalNumber: state => state.golbalNumber+'_golbalGetters',
}
//golbal mutations
export const mutations = {
  addGolbalMutation:state => {state.golbalNumber++;},
  subGolbalMutation:state => {state.golbalNumber--;},
}
//golbal actions
export const actions = {
  addGolbalAction ({ commit }) {
    commit('addGolbalMutation')
  },
  subGolbalAction ({ commit }) {
    commit('subGolbalMutation')
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}


