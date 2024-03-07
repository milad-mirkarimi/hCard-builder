<template>
  {{ cardDetails.givenName }}
  {{ cardDetails.surname }}
  {{ cardDetails.country }}
  {{ cardDetails.houseName }}
  {{ cardDetails.postcode }}
  {{ cardDetails.email }}
  {{ cardDetails.suburb }}
  {{ cardDetails.phone }}
  {{ cardDetails.state }}
  {{ cardDetails.street }}
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