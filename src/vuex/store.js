import Vue from 'vue'
import Vuex from 'vuex'
import mutations from 'mutations.js'
import getters from 'getters.js'
import actions from 'actions.js'
//注册vuex

Vue.use(Vuex)
let state={
	num:1
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})