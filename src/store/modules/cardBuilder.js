export const namespaced = true

export const state = {
  cardDetails: {
    givenName: '',
    surname: '',
    email: '',
    phone: '',
    houseName: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: ''
  }
}

export const mutations = {
  SET_CARD_DETAILS(state, payload) {
    const { field, value } = payload
    state.cardDetails[field] = value
  }
}

export const actions = {
  setCardDetails({ commit }, payload) {
    commit('SET_CARD_DETAILS', payload)
  }
}
