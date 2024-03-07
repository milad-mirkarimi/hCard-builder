<template>
  <div class="card">
    <header class="card-header">
      <h4 class="title is-4 card-header-title mt-4">
        {{ cardDetails.givenName }} {{ cardDetails.surname }}
      </h4>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="detail-container pl-2 columns mb-4">
          <p class="column is-2 p-0 mb-0">EMAIL</p>
          <p class="p-0 is-10 column">{{ cardDetails.email }}</p>
        </div>

        <div class="detail-container pl-2 columns mb-4">
          <p class="column is-2 p-0 mb-0">PHONE</p>
          <p class="p-0 is-10 column">{{ cardDetails.phone }}</p>
        </div>

        <div class="detail-container pl-2 columns mb-4">
          <p class="column is-2 p-0 mb-0">ADDRESS</p>
          <p class="p-0 is-10 column">{{ cardDetails.houseName }} {{ cardDetails.street }}</p>
        </div>

        <div class="detail-container pl-2 columns mb-4">
          <p class="column is-2 p-0 mb-0"></p>
          <p class="p-0 is-10 column">{{ cardDetails.suburb }}{{ cardDetails.suburb && ',' }} {{ cardDetails.state }}</p>
        </div>

        <div class="detail-container pl-2 columns is-mobile mb-4">
          <p class="column is-2 p-0 mb-0">POSTCODE</p>
          <p class="p-0 is-4 column">{{ cardDetails.postcode }}</p>

          <p class="column is-2 p-0 mb-0">COUNTRY</p>
          <p class="p-0 is-4 column">{{ cardDetails.country }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardDetails: {
      default: () => ({}),
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';
.card {
  max-width: 400px;
  height: 250px;
  min-width: 320px;
}
.card-header {
  height: 100px;
}

.detail-container {
  height: 20px;
  border-bottom: 1px solid $light-grey;
  p {
    font-size: $x-small-font-size;
  }
  :first-child,
  :nth-child(3) {
    color: $grey;
    font-size: $xx-small-font-size;
  }
}
</style>