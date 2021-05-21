<template>
  <div class="grid">
    <div class="grid-item" v-for="index in 12" :key="index" @click="pokemonDetail(index)">{{ index }}</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    n: 12,
    pokemons: []
  }),
  methods: {
    pokemonDetail: function (index) {
      this.$router.push({
        name: 'PokemonDetail',
        params: {
          id: index
        }
      })
    }
  }
}
</script>
<style scoped>
.grid {
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.grid-item {
  background-color: dodgerblue;
  color: white;
  padding: 1rem;
  height: 4rem;
}
</style>
