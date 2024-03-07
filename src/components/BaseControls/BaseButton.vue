<template>
  <button :class="[`button is-fullwidth is-${color}`]">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      default: 'primary',
      type: String
    }
  }
}
</script>