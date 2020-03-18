<template>
  <div class="method stripe">
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold"
      for="grid-password"
    >Credit Card Details</label>
    <component
      :is="cc"
      :options="stripeOptions"
      :stripe="stripePublicKey"
      @change="$emit('update:stripeComplete', $event.complete)"
      :class="{ stripeComplete }"
      class="my-2"
      id="card"
    />
    <div class="text-center">
      <base-button
        :cta="complete"
        @click="payWithStripe"
        :disabled="!complete"
        class="my-8"
      >Donate Now</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/UI/BaseButton";
import { Card, createToken } from "vue-stripe-elements-plus";
import submitPaymentStripe from "~/utils/paymentWithStripe";
import { STATES } from "~/utils/constants";

export default {
  name: "Stripe",
  props: [
    "state",
    "stripeLoaded",
    "stripeComplete",
    "recurring",
    "plan",
    "amount",
    "formData"
  ],
  components: { BaseButton },
  data() {
    return {
      stripePublicKey: process.env.GRIDSOME_STRIPE_PUBLISHABLE_KEY,
      stripeOptions: {
        hidePostalCode: true,
        style: {
          base: {
            fontSize: "1rem",
            fontFamily: "Roboto, sans serif",
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
    },
    complete() {
      return this.stripeComplete && this.validateEmail(this.formData.email);
    }
  },
  methods: {
    async payWithStripe() {
      this.$emit("update:state", STATES.PROCESSING);
      const token = await createToken();
      const result = await submitPaymentStripe({
        ...token,
        user: { ...this.formData },
        recurring: this.recurring,
        plan: this.plan,
        amount: this.amount
      });

      if (result.data && result.data.status != "failed") {
        this.$emit("update:state", STATES.SUCCESS);
      } else {
        this.$emit("update:state", STATES.ERROR);
      }
      console.log(result);
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>

<style>
</style>
