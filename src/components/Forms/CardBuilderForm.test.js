import CardBuilderForm from './CardBuilderForm'
import { mount } from '@vue/test-utils'
import Vuex from 'vuex'

const store = new Vuex.Store({
  modules: {
    cardBuilder: {
      namespaced: true,
      state: { cardDetails: {} }
    }
  }
})

beforeEach(() => {
  store.dispatch = jest.fn()
  jest.clearAllMocks()
})

test('Updating a value in the form, updates the value in cardBuilder store', async () => {
  const wrapper = mount(CardBuilderForm, {
    global: {
      mocks: {
        $store: store
      }
    }
  })

  wrapper.find('[test-data="givenName"]').setValue('Donald J')
  expect(store.dispatch).toHaveBeenCalledWith('cardBuilder/setCardDetails', { value: 'Donald J', field: 'givenName' })
})

test('Uploading an avatar, updates the value in cardBuilder store', async () => {
  const wrapper = mount(CardBuilderForm, {
    global: {
      mocks: {
        $store: store
      }
    }
  })

  const avatarObj = { value: 'avatar.com', field: 'avatar' }
  await wrapper.vm.onAvatarUploaded('avatar.com')
  expect(store.dispatch).toHaveBeenCalledWith('cardBuilder/setCardDetails', avatarObj)
})
