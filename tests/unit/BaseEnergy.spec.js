import { shallowMount } from '@vue/test-utils'
import BaseEnergy from '@/components/BaseEnergy.vue'

describe('BaseEnergy.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(BaseEnergy, {
      props: { types: ['Grass'] }
    })
    expect(wrapper.html()).toBe('<span class="energy grass"></span>')
  })
})
