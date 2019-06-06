import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: '//localhost:3000/api'   //   https://dragon-duel.herokuapp.com/api/
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: []
  },
  mutations: {

  },
  actions: {
    async getChampions({ commit, dispatch }) {
      try {
        let res = await _api.get('champions')
        console.log(res.data)
      }
      catch (e) {
        console.error(e)
      }
    },
    async getDragons({ commit, dispatch }) {
      try {
        let res = await _api.get('dragons')
        console.log(res.data)
      }
      catch (e) {
        console.error(e)
      }
    }
  }
})
