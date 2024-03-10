<template>
  <div :class="['field full-width', rootClass]">
    <label
      test-data="label"
      class="label" 
      :for="name">
      {{ label.toUpperCase() }}
    </label>
    <div class="control">
      <input
        test-data="input"
        id="firstname"
        class="input"
        ref="inputRef"
        :value="modelValue"
        @input="updateValue"
        v-bind="$attrs"
        autocomplete="OFF"
        :name="name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  emits: ['update:modelValue'],
  inheritAttrs: false,
  props: {
    label: {
      default: '',
      type: String
    },
    name: {
      default: '',
      type: String
    },
    modelValue: {
      type: String,
      default: ''
    },
    rootClass: {
      default: '',
      type: String
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$attrs,
        input: this.updateValue
      }
    }
  },
  methods: {
    focusInput() {
      this.$refs.inputRef.focus()
    },
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

input {
  height: 40px;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

label {
  font-size: $small-font-size;
  color: $dark-grey;
}
</style>
