<template>
  <router-view />
</template>
<script>
export default { }
</script>

<style lang="scss">
body{
  padding: 0px;
  margin: 0px;
  background-color: #121212;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #bfbfbf
}

.header {
  display: flex;
  flex-wrap: wrap;
  background: #272727;
  align-items: center;
  color: #bfbfbf;
  height: 64px;
  border: 1px solid #1e1e1e;
  border-bottom-color: #414141;
}
.header img {
  margin: 0px 10px 0px 10px;
  margin-top: -10px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  gap: 20px;;
  flex: 1 1 240px;
}

.flex > div {
  flex: 1 1 240px;
  margin: 5px;
}

.row {
  min-height: 30px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 0fr;
}

.image {
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
}

.image-large {
  max-width: 400px;
  height: auto;
  display: block;
}

.clickable {
  cursor: pointer;
}

.subtitle {
  text-align: center;
}

.pull-right {
  float: right;
}

.pull-left {
  float:left;
}

.input-search {
  border-radius: 10px;
  color: #bfbfbf;
  background-color: #1e1e1e;
  border: none;
  height: 46px;
  font-size: 16px;
  outline: none;
}

@media (max-width: 600px){
  .flex-carousel{
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
  .flex-carousel > div {
    flex: 1 0 240px;
    scroll-snap-align: start;
  }
  .image {
    width: auto;
    height: 400px;
  }
  .image-large {
    max-width: 100%;
    height: auto;
  }
}

</style>
