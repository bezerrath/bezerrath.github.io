module.exports = {
  lintOnSave: true,

  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import "@/assets/scss/_variables.scss";
                    @import "@/assets/scss/_mixins.scss";
                    @import "@/assets/scss/_functions.scss";
                    @import "@/assets/scss/modal.scss";
                `
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
