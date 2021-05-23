import { createStore } from 'vuex'

import pokemons from '@/store/modules/pokemons'
import createPersistedState from 'vuex-persistedstate'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  strict: debug,
  modules: {
    pokemon: pokemons
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]

})
