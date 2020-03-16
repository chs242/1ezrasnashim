<template>
  <div class="md:w-full mx-auto">
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold"
      for="grid-password"
    >Credit Card Details</label>
    <component
      :is="cc"
      :options="stripeOptions"
      :stripe="stripePublicKey"
      @change="complete = $event.complete"
      :class="{ complete }"
      class="my-2"
      id="card"
    />
    <button class="cta mt-6" @click="pay" icon="card" :disabled="!complete">Donate Now</button>
  </div>
</template>

<script>
import submitPaymentStripe from "~/utils/paymentWithStripe";
import loadScript from "~/utils/loadScript";
import { Card, createToken } from "vue-stripe-elements-plus";
import { PAYMENT_METHODS, RECURRING_FREQUENCIES } from "~/utils/constants";

export default {
  name: "DonateCC",
  props: ["formData", "recurringFrequency"],
  data() {
    return {
      stripeLoaded: false,
      stripePublicKey: process.env.GRIDSOME_STRIPE_PUBLISHABLE_KEY,
      complete: false,
      stripeOptions: {
        hidePostalCode: true,
        style: {
          base: {
            iconColor: "#ffad1f",
            fontSize: "1rem",
            fontFamily: "Montserrat, Heebo, sans-serif",
            color: "#192734",
            lineHeight: "25px",
            "::placeholder": {
              color: "#889aab"
            }
          }
        }
      }
    };
  },
  computed: {
    cc() {
      return this.stripeLoaded && Card;
    }
  },
  methods: {
    pay() {
      createToken().then(data => {
        submitPaymentStripe({
          ...data,
          user: { ...this.formData },
          recurring: this.recurringFrequency
        });
      });
    }
  },
  async mounted() {
    if (window.Stripe) {
      this.stripeLoaded = true;
      return; // don't load Stripe twice
    }
    try {
      const result = await loadScript("https://js.stripe.com/v3/");
      this.stripeLoaded = result.successful;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
#card {
  .StripeElement {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #ffffff;
    border-color: #d2d6dc;
    border-width: 1px;
    border-radius: 0.375rem;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    &.StripeElement--focus {
      @apply shadow-outline-blue border-blue-300 outline-none;
    }
  }
}
</style>
