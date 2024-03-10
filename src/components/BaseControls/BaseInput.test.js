import BaseInput from './BaseInput'
import { mount } from '@vue/test-utils'

test('If Label is given, it displays the label in the right format', async () => {
  const wrapper = mount(BaseInput)

  await wrapper.setProps({
    label: 'No#0 FirSt'
  })

  const label = wrapper.find('[test-data="label"]')
  expect(label.text()).toBe('NO#0 FIRST')
})

test('When Value of input is changed, it emits the correct value', async () => {
  const wrapper = mount(BaseInput)
  const inputValue = 'John Doe'
  const inputEl = wrapper.find('[test-data="input"]')

  await inputEl.setValue(inputValue)
  const emittedArray = wrapper.emitted('update:modelValue')

  expect(emittedArray).toHaveLength(1)
  expect(emittedArray[0][0]).toBe(inputValue)
})
