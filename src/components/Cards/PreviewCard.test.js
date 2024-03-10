import PreviewCard from './PreviewCard'
import { mount } from '@vue/test-utils'

test('When card details give, it displays the details in correct positions', async () => {
  const wrapper = mount(PreviewCard)

  await wrapper.setProps({
    cardDetails: {
      givenName: 'John',
      surname: 'Doe',
      email: 'john.doe@gmail.com',
      phone: '02112345789',
      houseName: '2',
      street: 'Pollen Street',
      suburb: 'Grey Lynn',
      state: 'NSW',
      postcode: '1204',
      country: 'New Zealand',
      avatar: 'http://avatar-image.com'
    }
  })

  expect(wrapper.find('[test-data="name"]').text()).toBe('John Doe')
  expect(wrapper.find('[test-data="email"]').text()).toBe('john.doe@gmail.com')
  expect(wrapper.find('[test-data="phone"]').text()).toBe('02112345789')
  expect(wrapper.find('[test-data="address"]').text()).toBe('2 Pollen Street')
  expect(wrapper.find('[test-data="suburb-state"]').text()).toBe('Grey Lynn, NSW')
  expect(wrapper.find('[test-data="postcode"]').text()).toBe('1204')
  expect(wrapper.find('[test-data="country"]').text()).toBe('New Zealand')
  expect(wrapper.find('[test-data="avatar"]').attributes('src')).toBe('http://avatar-image.com')
})
