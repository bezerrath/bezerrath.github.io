<template>
  <div>
    <BaseNavbar>
      <template v-slot:actions>
        <input class="input-search" autocomplete="off" type="text" v-model="name" :placeholder="$t('Search...')">
      </template>
    </BaseNavbar>
    <div class="flex flex-carousel">
      <div v-for="(pokemon, id) in pokemons" :key="id" class="clickable" @click="pokemonDetail(pokemon.id)">
          <img :src="pokemon.images?.small" :alt="pokemon.name" class="image">
          <figcaption class="subtitle">
            <strong class="pull-left">{{pokemon.name}}</strong><code>{{pokemon.id}}</code>
            <small class="pull-right"><BaseEnergy :types="pokemon.types"/></small>
          </figcaption>
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
  name: '',
  data: () => ({
    name: null,
    isTyping: false,
    pageDetail: 'PokemonDetail'
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
    this.getPokemons()
  },
  watch: {
    name: function () {
      if (!this.isTyping) {
        setTimeout(() => {
          this.getPokemons(this.name)
          this.isTyping = false
        }, 1000)
      }

      this.isTyping = true
    }
  }
}
</script>
