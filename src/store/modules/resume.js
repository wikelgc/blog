import {
  GET_RESUME_DETAILS
} from '../types.js'
import {post} from '../../api/resources.js'

const state = {
  resume: null
}
const mutations = {
  [GET_RESUME_DETAILS] (state, action) {
    state.resume = action
  }
}
const actions = {
  // Register
  getResume ({commit}, data) {
    post('/users/wikelgc', data).then(response => {
      // console.log(response)
      // commit(GET_ACCOUNT_TAKEN)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
