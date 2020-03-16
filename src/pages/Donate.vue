<template>
  <Layout>
    <img src="../assets/images/contact-tab/world-map.png" alt="" class="hidden lg:block mx-auto">

    <div id="donate-page" class="max-w-6xl mx-auto sm:px-6 lg:absolute md:mx-0 lg:px-8 py-24">
      <div class="flex flex-wrap items-center">
        <div class="flex-2 px-4">
          <DonateOptionsButtons
            :selected-frequency.sync="selectedFrequency"
            :selected-method.sync="selectedMethod"
          />
          <DonateBillingForm />
          <!-- <DonateCC /> -->
        </div>
        <div class="flex-1 px-4 text-gray-800">
          <h2
            class="text-brand-100 text-4xl font-semibold leading-tight mb-5"
          >Lights. Sirens. Passion!</h2>
          <p
            class="mb-3"
          >Ezras Nashim is rapidly expanding to new communities across America, and we are treating more patients every day. We are revolutionizing emergency medical care for women – but we need YOUR help!</p>
          <p>With a monthly or one time donation, you can sponsor much-needed equipment and training for our dedicated team of EMTs. Partner with Ezras Nashim and join us in our life-saving work!</p>
        </div>
      </div>
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
@media (min-width: 1024px) {
img{
      filter: hue-rotate(65deg) opacity(40%); 
      transform: scale(1.1);
      margin-top: 5%
    }
    #donate-page{
        top: 5%;
        left: 10%;
    }
}
@media (min-width: 768px) and (max-width: 1024px){
    img{
      margin-top: 45%;
      transform: scale(0.9);
    }
    #donate-page{
        top: 5%;
    }
} 
.root-form {
  max-width: 800px;
}
</style>
