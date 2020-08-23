import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex);
export default new Vuex.Store({
  state,//状态对象
  mutations,//包含多个更新state函数的对象
  actions,//包含多个对应事件回调函数的对象
  getters//包含多个getters计算属性函数的对象
});
