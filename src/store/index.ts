import Vue from "vue";
import Vuex from "vuex";
import FuelSession from "@/models/FuelSession";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fuelTypes: ["E10 Euro95", "E10 Euro98", "E5 Euro95", "E5 Euro98"],
    fuelSessions: Array<FuelSession>()
  },
  mutations: {
    saveFuelSession(state, session: FuelSession) {
      const found = state.fuelSessions.find(s => s.id == session.id);

      if (found) {
        const idx = state.fuelSessions.indexOf(found);
        state.fuelSessions[idx] = session;
      } else {
        state.fuelSessions.push(session);
      }
    },
    deleteFuelSession(state, session: FuelSession) {
      const found = state.fuelSessions.find(s => s.id == session.id);
      if (found) {
        const idx = state.fuelSessions.indexOf(found);
        state.fuelSessions.splice(idx, 1);
      }
    },
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("store")) {
        // Replace the state object with the stored item
        const json = localStorage.getItem("store");
        if (!json) return;
        this.replaceState(Object.assign(state, JSON.parse(json, dateTimeReviver)));
      }
    }
  },
  getters: {
    getSessionById: state => (id: string) =>
      state.fuelSessions.find(session => session.id == id)
  },
  actions: {},
  modules: {}
});

const dateTimeReviver = function (key: any, value: any) {
  var a;
  if (typeof value === 'string') {
      a = /((?:2|1)\d{3}(?:-|\/)(?:(?:0[1-9])|(?:1[0-2]))(?:-|\/)(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[0-1]))(?:T|\s)(?:(?:[0-1][0-9])|(?:2[0-3])):(?:[0-5][0-9]):(?:[0-5][0-9]))(\.)(\d){3}(Z)/.exec(value);
      if (a) {
          return new Date(value);
      }
  }
  return value;
}