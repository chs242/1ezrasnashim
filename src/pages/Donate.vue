<template>
  <Layout :show-logo="true">
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 py-24">
      <DonateOptionsButtons
        :selected-frequency.sync="selectedFrequency"
        :selected-method.sync="selectedMethod"
      />
      <DonateBillingForm />
      <!-- <DonateCC /> -->
    </div>
  </Layout>
</template>

<script>
import DonateOptionsButtons from "~/components/Donations/DonateOptionsButtons.vue";
import DonateBillingForm from "~/components/Donations/DonateBillingForm.vue";
import DonateCC from "~/components/Donations/DonateCC.vue";
import { PAYMENT_METHODS, RECURRING_FREQUENCIES } from "~/utils/constants";

export default {
  name: "Donate",
  components: {
    DonateOptionsButtons,
    DonateBillingForm,
    DonateCC
  },
  data() {
    return {
      selectedMethod: PAYMENT_METHODS.CC,
      selectedFrequency: RECURRING_FREQUENCIES.MONTHLY
    };
  },
  computed: {}
};
</script>

<style scoped>
.root-form {
  max-width: 800px;
}
</style>
