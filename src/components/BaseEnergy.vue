<template>
    <span v-for="(type, index) in types" :key="index" :class="className(type)"></span>
</template>

<script>
export default {
  props: {
    types: {
      type: Array,
      default: null
    }
  },
  methods: {
    className: function (type) {
      return 'energy ' + type.toLowerCase()
    }
  }
}
</script>
