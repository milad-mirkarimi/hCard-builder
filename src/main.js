import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Vue3Mq } from 'vue3-mq'
import { store } from './store'

import './styles/styles.scss'

const app = createApp(App)

//VueMq library https://www.npmjs.com/package/vue-mq
app.use(Vue3Mq, {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
})

app.use(router)
app.use(store)
app.mount('#app')
