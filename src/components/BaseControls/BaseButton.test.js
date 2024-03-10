import BaseButton from './BaseButton'
import { mount } from '@vue/test-utils'

test('If color given, color of the button is set to that value', async () => {
  const wrapper = mount(BaseButton)

  await wrapper.setProps({
    color: 'purple'
  })

  const button = wrapper.find('[test-data="button"]')
  expect(button.classes()).toContain('is-purple')
})
