<template>
  <div>
    <BaseNavbar>
      <template v-slot:actions>
        <input class="input-search" autocomplete="off" type="text" name="search" :placeholder="$t('Search...')">
      </template>
    </BaseNavbar>
    <div class="flex flex-carousel">
      <div v-for="(pokemon, id) in pokemons" :key="id" class="clickable" @click="pokemonDetail(pokemon.id)">
        <p>{{pokemon.name}} <BaseEnergy :types="pokemon.types"/></p>
        <div><img :src="pokemon.images?.small" :alt="pokemon.name" class="image"></div>
        <div>{{pokemon.id}}</div>
      </div>
    </div>
</div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar'
import BaseEnergy from '@/components/BaseEnergy'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    BaseNavbar,
    BaseEnergy
  },
  name: 'Home',
  data: () => ({
    pageDetail: 'PokemonDetail',
    isMobile: false
  }),
  methods: {
    ...mapActions(['getPokemons']),
    pokemonDetail: function (id) {
      this.$router.push({
        name: 'PokemonDetail',
        params: { id: id }
      })
    }
  },
  computed: {
    ...mapGetters(['pokemons'])
  },
  created () {
    // this.getPokemons()
  }
}
</script>
