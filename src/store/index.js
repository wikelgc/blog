import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import blog from './modules/blog.js'
import resume from './modules/resume.js'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    blog,
    resume
  },
  strict: debug
})
