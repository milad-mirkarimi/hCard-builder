import { createStore } from 'vuex'
import * as cardBuilder from '@/store/modules/cardBuilder.js'

export const store = createStore({
  modules: {
    cardBuilder
  }
})
