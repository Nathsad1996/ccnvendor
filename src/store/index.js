import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

let state = {
  isLogin: false,
}
let mutations = {
  SET_LOGIN(state, value){
    state.isLogin = value;
  }
}
let actions = {
  setLoginAction({commit}, value){
    commit('SET_LOGIN', value);
  }
}
let getters = {
  login: state => state.isLogin
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
