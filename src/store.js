import Vue from "vue";
import Vuex from "vuex";
import State from './store/state'
import Mutation from './store/mutation'
import Action from './store/action'

Vue.use(Vuex);

export default new Vuex.Store({
  state: State,
  mutations: Mutation,
  actions: Action
});
