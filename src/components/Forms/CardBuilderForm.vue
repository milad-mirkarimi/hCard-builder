<template>
  <form>
    <section id="personal-details">
      <p class="section-title mb-5">PERSONAL DETAILS</p>
      <div class="field-group is-flex">
        <BaseInput
          root-class="mr-5"
          placeholder="Sam"
          type="text"
          label="given name"
          name="givenName"
          v-model.trim="givenName"
          :validation="v$.givenName"
          @input="updateCardDetails(givenName, 'givenName')"
          id="givenName" />
  
        <BaseInput
          placeholder="Smith"
          type="text"
          label="surname"
          name="surname"
          v-model.trim="surname"
          :validation="v$.surname"
          @input="updateCardDetails(surname, 'surname')"
          id="surname" />
      </div>

      <div class="field-group is-flex mb-5">
        <BaseInput
          root-class="mr-5"
          placeholder="sam.smith@designcrowd.com"
          type="text"
          label="email"
          name="email"
          v-model.trim="email"
          :validation="v$.email"
          @input="updateCardDetails(email, 'email')"
          id="email" />
  
        <BaseInput
          placeholder="02 1234 5678"
          type="number"
          label="phone"
          name="phone"
          v-model.trim="phone"
          :validation="v$.givenName"
          @input="updateCardDetails(phone, 'phone')"
          id="phone" />
      </div>
    </section>

    <section id="address">
      <p class="section-title mb-5">ADDRESS</p>
      <div class="field-group is-flex">
        <BaseInput
          root-class="mr-5"
          placeholder="2"
          type="text"
          label="house name or #"
          name="houseName"
          v-model.trim="houseName"
          :validation="v$.houseName"
          @input="updateCardDetails(houseName, 'houseName')"
          id="houseName" />
  
        <BaseInput
          placeholder="Hill St"
          type="text"
          label="street"
          name="street"
          v-model.trim="street"
          :validation="v$.street"
          @input="updateCardDetails(street, 'street')"
          id="street" />
      </div>

      <div class="field-group is-flex">
        <BaseInput
          root-class="mr-5"
          placeholder="Surry Hills"
          type="text"
          label="suburb"
          name="suburb"
          v-model.trim="suburb"
          :validation="v$.suburb"
          @input="updateCardDetails(suburb, 'suburb')"
          id="suburb" />
  
        <BaseInput
          placeholder="NSW"
          type="text"
          label="state"
          name="state"
          v-model.trim="state"
          :validation="v$.state"
          @input="updateCardDetails(state, 'state')"
          id="state" />
      </div>

      <div class="field-group is-flex mb-5">
        <BaseInput
          root-class="mr-5"
          placeholder="2010"
          type="number"
          label="postcode"
          name="postcode"
          v-model.trim="postcode"
          :validation="v$.postcode"
          @input="updateCardDetails(postcode, 'postcode')"
          id="postcode" />
  
        <BaseInput
          placeholder="Australia"
          type="text"
          label="country"
          name="country"
          v-model.trim="country"
          :validation="v$.country"
          @input="updateCardDetails(country, 'country')"
          id="country" />
      </div>
    </section>

    <section id="cta">
      <div class="field-group is-flex mb-5">
        <BaseButton color='link' class="mr-5">Upload Avatar</BaseButton>
        <BaseButton class="bottom-btn">Create hCard</BaseButton>
      </div>
    </section>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseControls/BaseInput'
import BaseButton from '@/components/BaseControls/BaseButton'
import useValidate from '@vuelidate/core'

export default {
  name: 'CardBuilderForm',
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      v$: useValidate(),
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      houseName: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: ''
    }
  },
  methods: {
    updateCardDetails(value, field) {
      this.$store.dispatch('cardBuilder/setCardDetails', { value, field })
    }
  },
  validations() {}
}
</script>

<style scoped lang="scss">
@import '@/styles/_variables.scss';

.section-title {
  font-size: $x-small-font-size;
  border-bottom: 1px solid $light-grey;
  color: $grey;
}

.field-group {
  @media screen and (max-width: $small) {
    flex-direction: column;
  }
}

.bottom-btn {
  @media screen and (max-width: $small) {
    margin-top: 20px;
  }
}
</style>