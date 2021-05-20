module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import "@/assets/scss/variables.scss";
                    @import "@/assets/scss/mixins.scss";
                    @import "@/assets/scss/functions.scss";
                `
      }
    }
  }
}
