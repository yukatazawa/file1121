import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
const pinia = createPinia()



import 'vuetify/styles'
import { createVuetify } from 'vuetify'
const vuetify = createVuetify()

createApp(App)
    .use(router)
    .use(vuetify)
    .use(pinia)
    .mount('#app')