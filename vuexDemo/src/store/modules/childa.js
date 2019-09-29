/**
 * Created by Echonessy on 2019.09.29
 * childa 模块 配置
 */
export const state = {
  number:1
}

export const getters = {
  childNumber: state => state.number+'_fromChildA',
}

export const mutations = {
  addMutation:state => {
    state.number++;
  },
  subMutation:state =>{
    state.number--;
  }
}

export const actions  = {
  addAction ({ commit }) {
    commit('addMutation')
  },
  subAction({ commit }){
    commit('subMutation')
  }
}

export default {
  namespaced: true, //在使用模块化的时候，dispatch('childb/addAction')
  state,
  getters,
  mutations,
  actions
}
