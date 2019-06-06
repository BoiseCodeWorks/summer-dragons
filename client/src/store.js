import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'

const _api = axios.create({
  baseURL: '//localhost:3000/api'   //   https://dragon-duel.herokuapp.com/api/
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    champions: [],
    dragons: [],
    champion: '',
    dragon: '',
    game: {}
  },
  mutations: {
    setChampions(state, data) {
      state.champions = data
    },
    setDragons(state, data) {
      state.dragons = data
    },
    setDragon(state, id) {
      state.dragon = id
    },
    setChampion(state, id) {
      state.champion = id
    },
    setGame(state, data) {
      state.game = data
    }
  },
  actions: {
    async getChampions({ commit, dispatch }) {
      try {
        let res = await _api.get('champions')
        commit('setChampions', res.data)
      }
      catch (e) {
        console.error(e)
      }
    },
    async getDragons({ commit, dispatch }) {
      try {
        let res = await _api.get('dragons')
        commit('setDragons', res.data)
      }
      catch (e) {
        console.error(e)
      }
    },
    async getGameById({ commit, dispatch }, id) {
      let res = await _api.get('games/' + id)
      commit('setGame', res.data)
    },
    setChampion({ commit, dispatch }, id) {
      commit("setChampion", id)
    },
    setDragon({ commit, dispatch }, id) {
      commit("setDragon", id)
    },
    async createGame({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('games', payload)
        router.push({ name: 'game', params: { id: res.data._id } })
      } catch (error) {
        console.error(error)
      }
    },
    async attack({ commit, dispatch }, payload) {
      try {
        let res = await _api.put("games/" + payload.id, payload)
        commit('setGame', res.data)
      } catch (error) {
        console.error(error)
      }
    }


  }
})
