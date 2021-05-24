import http from '@/plugins/axios'

const state = {
  pokemons: []
}

const getters = {
  pokemons: state => {
    return state.pokemons
  },
  pokemon: state => {
    return state.pokemon
  }
}

const actions = {
  getPokemons ({ commit }, name = '') {
    http.get('cards', {
      params: {
        orderBy: 'name',
        pageSize: 25,
        q: 'name:"*' + name + '*"'
      }
    }).then(response => {
      commit('SET_POKEMONS', response.data.data)
    })
  },

  getPokemon ({ commit }, pokemonId) {
    http.get('cards/' + pokemonId).then(response => {
      commit('SET_POKEMON', response.data.data)
    })
  }
}

const mutations = {
  SET_POKEMONS (state, pokemons) {
    state.pokemons = pokemons
  },
  SET_POKEMON (state, pokemon) {
    state.pokemon = pokemon
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
