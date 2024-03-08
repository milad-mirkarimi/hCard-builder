<template>
  <label class="file-label">
    <input
      @change="handleAvatarUpload($event)"
      accept="image/png"
      class="file-input" 
      type="file"
      name="avatar">
    <div class="file-cta">
      <div class="file-label is-flex is-justify-content-center">
        {{ label }}
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'BaseFile',
  emits: ['avatarUploaded'],
  props: {
    name: {
      default: '',
      type: String
    },
    label: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      url: ''
    }
  },
  methods: {
    handleAvatarUpload(e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
      this.$emit('avatarUploaded', this.url)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.file-label,
.file-cta {
  cursor: pointer;
  width: 100%;
  background: $grey;
  border-radius: 5px;
  outline: none;
  border: none;

  :hover {
    background: $grey;
  }

  .file-cta {
    font-weight: 350;
    text-align: center;
    color: white;
  }
}
</style>