<template>
  <div>
    <BaseNavbar>
      <template v-slot:actions><h3>Pokemon Name</h3></template>
    </BaseNavbar>
    <div class="flex" v-if="pokemon">
      <div>
        <img :src="pokemon.images.large" class="image-large" alt="">
      </div>
      <div>
        <div class="row">ID: {{pokemon.id}}</div>
        <div class="row">{{$t('Name')}}: {{pokemon.name}}</div>
        <div class="row" v-if="pokemon.types">{{$t('Types')}}: <BaseEnergy :types="pokemon.types"/></div>
        <div class="row" v-if="pokemon.resistances">{{$t('Resistances')}}: <BaseEnergy :types="pokemon.resistances.map(o => o.type)"/> {{pokemon.resistances.map(o => o.value)[0]}}</div>
        <div class="row" v-if="pokemon.resistances">{{$t('Weakness')}}: <BaseEnergy :types="pokemon.weaknesses.map(o => o.type)"/> {{pokemon.weaknesses.map(o => o.value)[0]}}</div>
        <div class="row" @click="modal=true"><button class="button">{{$t('Attacks list')}}</button></div>
      </div>
    </div>
    <BaseModal v-if="modal" @close="modal = false">
      <template v-slot:header><h3>{{$t('Attacks')}}</h3></template>
      <template v-slot:body>
        <div v-if="pokemon.attacks">
          <div v-for="(attack, index) in pokemon.attacks" :key="index">
            <div>
              <div class="grid">
                <div><BaseEnergy :types="attack.cost"/></div>
                <div>{{attack.name}}</div>
                <div>{{attack.damage}}</div>
              </div>
            </div>
            <div>{{attack.text}}</div>
            <div><hr /></div>
          </div>
        </div>
        <div v-else>{{$t('No available data')}}</div>
      </template>
    </BaseModal>
  </div>
</template>
<script>
import BaseNavbar from '@/components/BaseNavbar'
import BaseModal from '@/components/BaseModal'
import BaseEnergy from '@/components/BaseEnergy'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    BaseNavbar,
    BaseModal,
    BaseEnergy
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
