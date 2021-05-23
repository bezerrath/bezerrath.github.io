<template>
  <div>
    <BaseNavbar>
      <template v-slot:actions><h3>Pokemon Name</h3></template>
    </BaseNavbar>
    <div class="flex" v-if="pokemon">
      <div>
        <img :src="pokemon.images.large" class="image" alt="">
      </div>
      <div>
        <div>ID: {{pokemon.id}}</div>
        <div>Name: {{pokemon.name}}</div>
        <div>Typo: {{pokemon.types}}</div>
        <div>Resistances: {{pokemon.resistances}} </div>
        <div>Weakness: {{pokemon.weaknesses}}</div>
        <div @click="modal=true">More details</div>
      </div>
    </div>
    <BaseModal v-if="modal" @close="modal = false">
      <template v-slot:header>Attacks</template>
      <template v-slot:body>{{pokemon.attacks}}</template>
    </BaseModal>
  </div>
</template>
<script>
import BaseNavbar from '@/components/BaseNavbar'
import BaseModal from '@/components/BaseModal'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    BaseNavbar,
    BaseModal
  },
  data: () => ({
    modal: false
  }),
  methods: {
    ...mapActions(['getPokemon'])
  },
  computed: {
    ...mapGetters(['pokemon'])
  },
  created () {
    this.$store.dispatch('getPokemon', this.$route.params.id)
  }
}
</script>
