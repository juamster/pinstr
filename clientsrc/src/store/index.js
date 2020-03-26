import Vue from 'vue';
import Vuex from 'vuex';
import { $resource } from "./resource";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pins: []
  },
  mutations: {
    setPins(state, pins) {
      state.pins = pins;
    },
    addPin(state, pin) {
      state.pins.push(pin);
    }
  },
  actions: {
    async getPins({ commit }) {
      let pins = await $resource.get("api/pins");
      commit("setPins", pins);
    },
    async createPin({ commit }, pinData) {
      let pin = await $resource.post("api/pins", pinData);
      commit("addPin", pin);
    }

  },
  modules: {
  }
});
