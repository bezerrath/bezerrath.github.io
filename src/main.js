import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import http from '@/plugins/axios'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import i18n from '@/plugins/i18n'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueAxios, http)
app.use(i18n)
app.mount('#app')
