<template>
  <div class="home">
    <div class="columns">
      <div class="column is-8 p-6 form-container">
        <h3 class="title is-3">hCard Builder</h3>
        <CardBuilderForm />
      </div>
      <div class="column is-4 preview-container">

      </div>
    </div>
  </div>
</template>

<script>
import CardBuilderForm from '@/components/Forms/CardBuilderForm'
export default {
  name: 'HomeView',
  components: {
    CardBuilderForm
  },
  data() {
    return {
      surname: ''
    }
  }
}
</script>

<style scoped lang="scss">
.preview-container {
  background: #ccc;
  height: 100vh;
}

.form-container {
  height: 100%;
}
</style>