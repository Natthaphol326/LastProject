import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: true,
  },
  getters: {},
  mutations: {
    getShow: (state, n) => {
      state.show = n;
    },
  },
  actions: {},
  modules: {},
});
