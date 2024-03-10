import Vuex from 'vuex'
import * as cardBuilder from '@/store/modules/cardBuilder'

let store

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      cardBuilder
    }
  })
})

describe('actions', () => {
  test('setCardDetails', async () => {
    const payload = { value: 'New Zealand', field: 'country' }
    store.dispatch('cardBuilder/setCardDetails', payload)

    expect(store.state.cardBuilder.cardDetails).toMatchObject({ country: 'New Zealand' })
  })
})

describe('mutations', () => {
  test('SET_CARD_DETAILS', async () => {
    const payload = { value: 'Trump', field: 'surname' }
    await store.commit('cardBuilder/SET_CARD_DETAILS', payload)

    expect(store.state.cardBuilder.cardDetails).toMatchObject({ surname: 'Trump' })
  })
})
