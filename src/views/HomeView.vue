<template>
  <div class="home">
    <div class="columns">
      <div class="column p-6 is-7 form-container">
        <h3 class="title is-3">hCard Builder</h3>
        <CardBuilderForm />
      </div>
      <div class="column p-6 is-5 is-flex is-justify-content-center is-align-items-center is-4 preview-container">
        <PreviewCard
          :card-details="cardDetails" />
      </div>
    </div>
  </div>
</template>

<script>
import CardBuilderForm from '@/components/Forms/CardBuilderForm'
import PreviewCard from '@/components/Cards/PreviewCard'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    CardBuilderForm,
    PreviewCard
  },
  data() {
    return {
      surname: ''
    }
  },
  computed: {
    ...mapState('cardBuilder', ['cardDetails'])
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.preview-container {
  background: #ccc;
  @media screen and (min-width: $small) {
    height: 100vh;
  }
}

.form-container {
  height: 100%;
}
</style>