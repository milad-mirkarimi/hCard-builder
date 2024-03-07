<template>
  <form>
    <BaseInput
      placeholder="John"
      type="test"
      label="Firstname"
      name="firstname"
      v-model.trim="firstname"
      id="firstname" />
  </form>
</template>

<script>
import BaseInput from '@/components/BaseControls/BaseInput'
export default {
  name: 'CardBuilderForm',
  components: {
    BaseInput
  },
  data() {
    return {
      firstname: ''
    }
  }
}
</script>
