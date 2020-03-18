<template>
  <div class="md:w-full mx-auto">
    <h2 class="text-xl font-bold text-pink-900 mt-6 mb-2">Payment Details</h2>

    <div v-show="state === STATES.IDLE" class="payment-method">
      <div class="text-center my-6">
        <span class="relative z-0 inline-flex shadow-sm">
          <button
            v-for="(method, i) in paymentMethods"
            :key="method"
            @click="$emit('update:selected-method', i)"
            type="button"
            :class="{
            'rounded-l-md': i === 0,
            'rounded-r-md': i === paymentMethods.length - 1,
            'shadow-outline-brand bg-pink-100 text-pink-900 z-20' : selectedMethod === i
          }"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm uppercase tracking-wider leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            <svg
              v-if="method == 'Paypal'"
              class="w-5 h-5 inline mr-2"
              viewBox="0 0 256 302"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M217.168476,23.5070146 C203.234077,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.3030619,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.076601 C-0.637664968,263.946149 3.13311322,268.357876 8.06925331,268.357876 L65.804612,268.357876 L80.3050438,176.385849 L79.8555471,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.46841,167.970272 C174.366398,167.970272 216.569147,146.078116 228.897012,82.7490197 C229.263268,80.8761167 229.579581,79.0531577 229.854273,77.2718188 C228.297683,76.4477414 228.297683,76.4477414 229.854273,77.2718188 C233.525163,53.8646924 229.829301,37.9325302 217.168476,23.5070146"
                  fill="#27346A"
                />
                <path
                  d="M102.396976,68.8395929 C103.936919,68.1070797 105.651665,67.699203 107.449652,67.699203 L180.767565,67.699203 C189.449511,67.699203 197.548776,68.265236 204.948824,69.4555699 C207.071448,69.7968545 209.127479,70.1880831 211.125242,70.6375799 C213.123006,71.0787526 215.062501,71.5781934 216.943728,72.1275783 C217.884341,72.4022708 218.808307,72.6852872 219.715624,72.9849517 C223.353218,74.2002577 226.741092,75.61534 229.854273,77.2718188 C233.525163,53.8563683 229.829301,37.9325302 217.168476,23.5070146 C203.225753,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.2947379,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.068277 C-0.637664968,263.946149 3.13311322,268.349552 8.0609293,268.349552 L65.804612,268.349552 L95.8875974,77.5798073 C96.5035744,73.6675208 99.0174265,70.4627756 102.396976,68.8395929 Z"
                  fill="#27346A"
                />
                <path
                  d="M228.897012,82.7490197 C216.569147,146.069792 174.366398,167.970272 120.46841,167.970272 L93.0241367,167.970272 C86.4398419,167.970272 80.8794007,172.764903 79.8555471,179.265958 L61.8174095,293.621258 C61.1431644,297.883153 64.4394738,301.745495 68.7513129,301.745495 L117.421821,301.745495 C123.182038,301.745495 128.084882,297.550192 128.983876,291.864891 L129.458344,289.384335 L138.631407,231.249423 L139.222412,228.036354 C140.121406,222.351053 145.02425,218.15575 150.784467,218.15575 L158.067979,218.15575 C205.215193,218.15575 242.132193,199.002194 252.920115,143.605884 C257.423406,120.456802 255.092683,101.128442 243.181019,87.5519756 C239.568397,83.4399129 235.081754,80.0437153 229.854273,77.2718188 C229.571257,79.0614817 229.263268,80.8761167 228.897012,82.7490197 L228.897012,82.7490197 Z"
                  fill="#2790C3"
                />
                <path
                  d="M216.952052,72.1275783 C215.070825,71.5781934 213.13133,71.0787526 211.133566,70.6375799 C209.135803,70.1964071 207.071448,69.8051785 204.957148,69.4638939 C197.548776,68.265236 189.457835,67.699203 180.767565,67.699203 L107.457976,67.699203 C105.651665,67.699203 103.936919,68.1070797 102.4053,68.8479169 C99.0174265,70.4710996 96.5118984,73.6675208 95.8959214,77.5881313 L80.3133678,176.385849 L79.8638711,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.476734,167.970272 C174.374722,167.970272 216.577471,146.078116 228.905336,82.7490197 C229.271592,80.8761167 229.579581,79.0614817 229.862597,77.2718188 C226.741092,75.623664 223.361542,74.2002577 219.723948,72.9932757 C218.816631,72.6936112 217.892665,72.4022708 216.952052,72.1275783"
                  fill="#1F264F"
                />
              </g>
            </svg>
            <svg
              v-else-if="method == 'Credit Card'"
              class="w-5 h-5 inline mr-2 text-pink-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fill-rule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="truncate text-xs md:text-sm">{{method}}</span>
          </button>
        </span>
      </div>
      <div class="total my-6">
        <label class="label">Donation Total:</label>
        <span class="font-bold text-2xl text-pink-900 mr-1">${{ amount }}</span>
        <span
          v-if="recurring"
          class="inline-flex items-center mx-2 px-3 py-0.5 rounded text-sm font-medium bg-green-100 text-green-800"
        >
          <svg class="-ml-1 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
          </svg>
          {{ plans[plan] }}
        </span>
        <span
          @click="$emit('go-back')"
          class="underline text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
        >change</span>
      </div>
      <!-- STRIPE -->
      <div v-show="selectedMethod == 0" class="method stripe">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold"
          for="grid-password"
        >Credit Card Details</label>
        <component
          :is="cc"
          :options="stripeOptions"
          :stripe="stripePublicKey"
          @change="stripeComplete = $event.complete"
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
      <!-- PAYPAL -->
      <div v-show="selectedMethod == 1" class="method paypal">
        <div ref="paypalBtns" id="paypal-button-container"></div>
      </div>
    </div>
    <div v-show="state == STATES.PROCESSING" class="my-14 my-16">
      <loader />
    </div>
    <div v-show="state == STATES.SUCCESS" class="my-16 text-center">
      <h1 class="text-3xl font-roboto font-bold uppercase tracking-wider text-pink-600">Thank You!</h1>
      <p class="text-gray-700">Your donation will make a big difference to our organization.</p>
    </div>
    <div v-show="state == STATES.ERROR" class="my-16 text-center">
      <h1 class="text-3xl font-roboto font-bold uppercase tracking-wider text-pink-600">Sorry.</h1>
      <p class="text-gray-700">There has been a problem with your payment.</p>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/UI/BaseButton";
import Loader from "~/components/UI/Loader";
import submitPaymentStripe from "~/utils/paymentWithStripe";
import { Card, createToken } from "vue-stripe-elements-plus";
import {
  PAYMENT_METHODS,
  PLANS,
  PLAN_NAMES,
  PAYPAL_PLANS_IDS,
  STATES
} from "~/utils/constants";

export default {
  name: "DonateCC",
  props: [
    "formData",
    "amount",
    "plan",
    "selectedMethod",
    "stripeLoaded",
    "paypalLoaded",
    "recurring"
  ],
  components: { BaseButton, Loader },
  data() {
    return {
      STATES: STATES,
      state: STATES.IDLE,
      stripePublicKey: process.env.GRIDSOME_STRIPE_PUBLISHABLE_KEY,
      stripeComplete: false,
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
      },
      plans: PLAN_NAMES
    };
  },

  computed: {
    cc() {
      return this.stripeLoaded && Card;
    },
    paymentMethods() {
      return this.plan === PLANS.ONCE
        ? ["Credit Card", "Paypal", "Cheque"]
        : ["Credit Card", "Paypal"];
    },
    complete() {
      return this.stripeComplete && this.validateEmail(this.formData.email);
    },
    paypalConfig() {
      console.log(
        `paypal action: ${this.recurring ? "subscription" : "charge"}`
      );

      return this.recurring
        ? {
            createSubscription: (data, actions) => {
              const amount = this.amount;
              const planId = PAYPAL_PLANS_IDS[this.plan];
              console.log({ amount }, { planId });
              return actions.subscription.create({
                plan_id: planId,
                quantity: amount
              });
            },
            onApprove: (data, actions) => {
              console.log("You have successfully created subscription", data);
              this.state = STATES.SUCCESS;
            }
          }
        : {
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: this.amount
                    }
                  }
                ]
              });
            },
            onApprove: (data, actions) => {
              this.state = STATES.PROCESSING;
              return actions.order.capture().then(details => {
                console.log("Transaction details:", details);
                this.state = STATES.SUCCESS;
              });
            }
          };
    }
  },
  methods: {
    async payWithStripe() {
      this.state = STATES.PROCESSING;
      const token = await createToken();
      const result = await submitPaymentStripe({
        ...token,
        user: { ...this.formData },
        recurring: this.recurring,
        plan: this.plan,
        amount: this.amount
      });

      if (result.data.status == "failed") {
        this.state = STATES.ERROR;
      } else {
        this.state = STATES.SUCCESS;
      }

      console.log({ result });
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    setupPayPalButton() {
      this.$refs.paypalBtns.innerHTML = "";
      paypal
        .Buttons({
          style: {
            color: "blue",
            shape: "rect",
            label: "paypal"
          },
          ...this.paypalConfig,
          onError: err => {
            this.state = STATES.ERROR;
            console.log("Paypal error", err);
          }
        })
        .render("#paypal-button-container");
    }
  },
  watch: {
    paypalLoaded(newVal, oldVal) {
      if (newVal) {
        this.setupPayPalButton();
      }
    },
    recurring() {
      console.log("rerender paypal btns");

      this.setupPayPalButton();
    }
  },
  mounted() {
    if (this.paypalLoaded) {
      this.setupPayPalButton();
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
