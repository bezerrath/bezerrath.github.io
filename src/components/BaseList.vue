<template>
  <div>
    <div class="carousel" v-if="isMobile">
      <div class="carousel-items">
        <div class="carousel-item" v-for="(item, index) in items" :key="index">
          <router-link to="/pokemon/1">
            <img class="carousel-image" src="/img/card-model.png" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="list" v-else>
      <div class="list-item" v-for="(item, index) in items" :key="index">
        <img src="https://images.pokemontcg.io/xy1/1.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
<style scoped>
.list {
  max-width: 100%;
  display: grid;
  gap: 1rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
}
.list-item {
  background-color: dodgerblue;
  color: white;
  padding: 1rem;
}
.carousel {
  width: 100vw;
}
.carousel-items {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
.carousel-item {
  flex: none;
  width: 100%;
  scroll-snap-align: start;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
