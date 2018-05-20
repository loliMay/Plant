import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

Vue.use(Vuex)

// 需要维护的状态
const state = {
  currentNav: '1'
}

// 改变状态的方法
const mutations = {
  SET_ACTIVE_NAV_CURRENT (state, current) {
    state.current = current
  }
}

export default new Vuex.Store({
  getters,
  state,
  mutations
})
