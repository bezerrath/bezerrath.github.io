<template>
  <div>
    <button @click="isMobile = !isMobile">Toggle Display</button>

    <BaseList :items="pokemons" :is-mobile="isMobile" />
  </div>
</template>

<script>
import BaseList from '@/components/BaseList'

export default {
  components: {
    BaseList
  },
  name: 'Home',
  data: () => ({
    pokemons: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    pageDetail: 'PokemonDetail',
    isMobile: false
  }),
  methods: {}
}
</script>
