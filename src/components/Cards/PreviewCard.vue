<template>
  <div class="card">
    <header class="card-header is-relative">
      <h6 test-data="name" class="title is-6 card-header-title mt-6">
        {{ cardDetails.givenName }} {{ cardDetails.surname }}
      </h6>
      <img
        test-data="avatar"
        v-if="cardDetails.avatar"
        class="avatar"
        alt="avatar" 
        :src="cardDetails.avatar" />
    </header>
    <div class="card-content">
      <div class="content">
        <div class="detail-container pl-2 columns mb-4 is-mobile">
          <p class="column is-3 p-0 mb-0">EMAIL</p>
          <p test-data="email" class="p-0 is-9 column">{{ cardDetails.email }}</p>
        </div>

        <div class="detail-container pl-2 columns mb-4 is-mobile">
          <p class="column is-3 p-0 mb-0">PHONE</p>
          <p test-data="phone" class="p-0 is-9 column">{{ cardDetails.phone }}</p>
        </div>

        <div class="detail-container pl-2 columns mb-4 is-mobile">
          <p class="column is-3 p-0 mb-0">ADDRESS</p>
          <p test-data="address" class="p-0 is-9 column">{{ cardDetails.houseName }} {{ cardDetails.street }}</p>
        </div>

        <div class="detail-container pl-2 columns mb-4 is-mobile">
          <p class="column is-3 p-0 mb-0"></p>
          <p test-data="suburb-state" class="p-0 is-9 column">{{ cardDetails.suburb }}{{ cardDetails.suburb && ',' }} {{ cardDetails.state }}</p>
        </div>

        <div class="detail-container pl-2 columns is-mobile mb-4">
          <p class="column is-3 p-0 mb-0">POSTCODE</p>
          <p test-data="postcode" class="p-0 is-4 column">{{ cardDetails.postcode }}</p>

          <p class="column is-3 p-0 mb-0">COUNTRY</p>
          <p test-data="country" class="p-0 is-5 column">{{ cardDetails.country }}</p>
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
  height: 250px;
  min-width: 340px;

  .card-header {
    height: 100px;

    h6 {
      max-width: 220px;
    }

    .avatar {
      position: absolute;
      right: 15px;
      bottom: -10px;
      width: 95px;
      height: 100px;
      object-fit: cover;
    }
  }
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