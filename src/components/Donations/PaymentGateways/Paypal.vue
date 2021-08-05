<template>
  <div
    class="mb-4 method paypal"
    :class="{ 'opacity-50 pointer-events-none': !complete }"
  >
    <p v-if="!complete" class="text-sm text-center text-red-600">
      Please fill out the required fields above.
    </p>
    <div ref="paypalBtns" id="paypal-button-container"></div>
  </div>
</template>

<script>
import BaseButton from "~/components/UI/BaseButton";
import { STATES, PAYPAL_PLANS_IDS } from "~/utils/constants";
import formComplete from "~/utils/formValidation";

export default {
  name: "Paypal",
  props: [
    "state",
    "paypalLoaded",
    "recurring",
    "plan",
    "amount",
    "currency",
    "formData",
  ],
  components: { BaseButton },
  mixins: [formComplete],
  computed: {
    complete() {
      return this.paypalLoaded && this.formComplete(this.formData);
    },
    paypalConfig() {
      console.log(
        `paypal action: ${this.recurring ? "subscription" : "charge"}`
      );
      return this.recurring
        ? {
            createSubscription: (data, actions) => {
              const amount = this.amount;
              const planId = PAYPAL_PLANS_IDS[this.currency][this.plan];
              console.log({ amount }, { planId });
              return actions.subscription.create({
                plan_id: planId,
                quantity: amount,
              });
            },
            onApprove: (data, actions) => {
              console.log("You have successfully created subscription", data);
              this.$emit("update:state", STATES.SUCCESS);
            },
          }
        : {
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: this.currency,
                      value: this.amount,
                    },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              this.$emit("update:state", STATES.PROCESSING);
              return actions.order.capture().then((details) => {
                console.log("Transaction details:", details);
                this.$emit("update:state", STATES.SUCCESS);
              });
            },
          };
    },
  },
  watch: {
    paypalLoaded(newVal, oldVal) {
      if (newVal) {
        this.setupPayPalButton();
      }
    },
    recurring() {
      if (!window.paypal) return;
      console.log("rerender paypal btns");
      this.setupPayPalButton();
    },
  },
  mounted() {
    if (this.paypalLoaded) {
      this.setupPayPalButton();
    }
  },
  methods: {
    setupPayPalButton() {
      this.$refs.paypalBtns.innerHTML = ""; // remove old buttons first
      paypal
        .Buttons({
          style: {
            color: "blue",
            shape: "rect",
            label: "paypal",
          },
          ...this.paypalConfig,
          onError: (err) => {
            this.$emit("update:state", STATES.ERROR);

            console.log("Paypal error", err);
          },
        })
        .render("#paypal-button-container");
    },
  },
};
</script>

<style>
</style>
