import BaseFile from './BaseFile'
import { mount } from '@vue/test-utils'

test('When uploading the avatar, component emits the URL', async () => {
  const wrapper = mount(BaseFile)
  global.URL.createObjectURL = jest.fn(() => 'http://avatarUrl.com')
  const avatarFile = [new File(['avatar'], 'avatar.png', { type: 'image/png' })]

  const e = {
    target: {
      files: avatarFile
    }
  }

  await wrapper.vm.handleAvatarUpload(e)

  const emittedArray = wrapper.emitted('avatarUploaded')
  expect(emittedArray).toHaveLength(1)
  expect(emittedArray[0][0]).toContain('http://avatarUrl.com')
})
