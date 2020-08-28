<template>
  <!-- Donate page created by yehuda neufeld -->
  <Layout bg-color="bg-gray-100">
    <img
      src="../assets/images/contact-tab/world-map.png"
      class="absolute left-0 right-0 hidden m-auto bg-img lg:block"
    />

    <div id="donate-page" class="max-w-6xl py-24 mx-auto sm:px-0 lg:px-8">
      <div class="text-center"></div>
      <div class="flex flex-wrap items-center">
        <div class="relative px-1 py-4 steps flex-2 md:px-4">
          <div class="step" key="1" v-show="step == 1">
            <DonateOptionsButtons :recurring.sync="recurring" />
            <donate-options
              :amount.sync="amount"
              :recurring="recurring"
              :currencyIndex="selectedCurrency"
            />

            <input-group
              class="amount"
              name="or enter amount"
              v-model.number.lazy="amount"
              type="number"
              placeholder="0.00"
              min="0"
            >
              <div slot="addon-before" class="absolute inset-y-0 left-0 flex items-center">
                <select
                  v-model="selectedCurrency"
                  aria-label="Currency"
                  class="h-full py-0 pl-3 text-gray-500 bg-transparent border-transparent form-select pr-7 sm:text-sm sm:leading-5"
                >
                  <option
                    v-for="(i, code) in currencies"
                    :key="code"
                    :value="i"
                    class="font-normal"
                  >{{code}}</option>
                </select>
                <span
                  class="pl-1 font-semibold text-gray-500 sm:text-sm sm:leading-5"
                >{{currencySymbols[selectedCurrency]}}</span>
              </div>

              <div
                v-if="recurring"
                slot="addon-after"
                class="absolute inset-y-0 right-0 flex items-center border-l border-gray-300"
              >
                <select
                  v-model.number="selectedPlan"
                  class="h-full py-0 pl-2 font-semibold text-gray-500 text-gray-800 bg-transparent border-transparent form-select pr-7 sm:text-sm sm:leading-5"
                >
                  <option
                    v-for="(plan, i) in plans"
                    :key="plan"
                    :value="i"
                    class="font-normal"
                  >{{plan}}</option>
                </select>
              </div>
            </input-group>

            <base-button cta @click="continueToPayment" class="mt-6">Continue</base-button>
          </div>
          <div class="step" key="2" v-show="step == 2">
            <!-- FORM -->
            <div class="max-w-lg px-2 py-8 my-2 mt-8 bg-white shadow rounded-xl md:p-8">
              <h2 class="mb-2 text-xl font-bold text-pink-900">Personal Info</h2>
              <div class="flex flex-wrap justify-between mb-4 -mx-2">
                <input-group
                  required
                  v-model="form.firstName"
                  name="first name "
                  placeholder="John"
                  class="flex-1"
                />
                <input-group
                  required
                  v-model="form.lastName"
                  name="last name "
                  placeholder="Doe"
                  class="flex-1"
                />
              </div>
              <div class="flex flex-wrap justify-between mb-4 -mx-2">
                <input-group
                  required
                  v-model="form.email"
                  name="email "
                  type="email"
                  placeholder="John"
                  class="flex-1"
                />
              </div>
              <div class="flex flex-wrap mb-4 -mx-2">
                <input-group
                  required
                  v-model="form.address"
                  name="address "
                  placeholder="1234 Washington Avenue"
                  class="flex-1"
                />
              </div>
              <div class="flex flex-wrap -mx-2">
                <input-group required v-model="form.city" name="city " class="flex-1" />
                <input-group required v-model="form.state" name="state " class="flex-1" />
                <input-group required v-model="form.zip" name="Zip/Postal Code " class="flex-1" />
              </div>
              <div class="flex flex-wrap -mx-2">
                <input-group
                  required
                  v-model="form.phone"
                  name="phone number "
                  type="tel"
                  class="flex-1"
                />
              </div>

              <div class="flex flex-wrap mb-4 -mx-2">
                <input-group
                  v-model="form.InHonourOf"
                  name="Dedication"
                  placeholder="In honor of..."
                  type="textarea"
                  class="flex-1"
                />
              </div>

              <div class="flex flex-wrap mb-4 -mx-2">
                <input-group
                  v-model="form.HonoureeEmailAddress"
                  name="notify the honouree of your donation?"
                  placeholder="Tell us their email address"
                  class="flex-1"
                />
              </div>

              <payment-methods
                :recurring="recurring"
                :selected-method.sync="selectedMethod"
                :form-data="form"
                :plan="selectedPlan"
                :amount="amount"
                :currency-index="selectedCurrency"
                :stripe-loaded="stripeLoaded"
                :paypal-loaded="paypalLoaded"
                @payment-succeeded="submitNetlifyForm"
                @go-back="step = 1"
              />
              <base-button class="small" @click="step = 1">&larr; Back</base-button>
              <!-- <base-button class="small" @click="submitNetlifyForm">test Netlify form</base-button> -->
            </div>
            <!-- /FORM -->

            <!-- Netlify Form (hidden) -->
            <form
              name="donation"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              class="hidden"
            >
              <input type="hidden" name="form-name" value="donation" />
              <input
                type="hidden"
                name="amount"
                :value="`${amount} ${Object.keys(currencies)[selectedCurrency]} ${recurring ? plans[selectedPlan] : 'once'}`"
              />
              <input
                v-for="(field, key) in form"
                :key="key"
                type="hidden"
                :name="key"
                :value="field"
              />
            </form>
          </div>
        </div>
        <div class="flex-1 px-4 px-6 my-12 text-gray-800" style="min-width: 360px">
          <h2
            class="mb-5 text-4xl font-semibold leading-tight text-brand-100"
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
import BaseButton from "~/components/UI/BaseButton";
import DonateOptionsButtons from "~/components/Donations/DonateOptionsButtons";
import DonateOptions from "~/components/Donations/DonateOptions";
import PaymentMethods from "~/components/Donations/PaymentMethods";
import InputGroup from "~/components/InputGroup";
import { loadScript } from "~/utils/loadScript";
import {
  PAYMENT_METHODS,
  CURRENCIES,
  CURRENCY_SYMBOLS,
  PLANS,
  PLAN_NAMES,
} from "~/utils/constants";

export default {
  metaInfo: {
    title: "Donate",
    meta: [
      {
        name: "description",
        content:
          "Ezras Nashim is rapidly expanding to new communities across America, and we are treating more patients every day. We are revolutionizing emergency medical care for women – but we need YOUR help! With a monthly or one time donation, you can sponsor much-needed equipment and training for our dedicated team of EMTs. Partner with Ezras Nashim and join us in our life-saving work!",
      },
    ],
    link: [{ rel: "canonical", href: "https://ezrasnashim.org/donate/" }],
  },
  name: "Donate",
  components: {
    BaseButton,
    DonateOptionsButtons,
    DonateOptions,
    InputGroup,
    PaymentMethods,
  },
  data() {
    return {
      step: 1,
      selectedMethod: PAYMENT_METHODS.CC,
      selectedPlan: PLANS.MONTHLY,
      selectedCurrency: CURRENCIES.USD,
      amount: 36,
      recurring: false,
      currencies: CURRENCIES,
      currencySymbols: CURRENCY_SYMBOLS,
      plans: PLAN_NAMES,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        InHonourOf: "",
        HonoureeEmailAddress: "",
      },
      stripeLoaded: false,
      paypalLoaded: false,
    };
  },
  computed: {
    paypalScriptUrl() {
      const currencyCodes = Object.keys(this.currencies);
      return `https://www.paypal.com/sdk/js?client-id=${
        process.env.GRIDSOME_PAYPAL_CLIENT_ID
      }&currency=${
        currencyCodes[this.selectedCurrency]
      }&vault=true&disable-funding=credit,card`;
    },
  },
  methods: {
    continueToPayment() {
      this.loadPaypal();
      this.step = 2;
    },
    submitNetlifyForm() {
      console.log(this.encode({ "form-name": "donation", ...this.form }));
      fetch("/donate", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "donation",
          amount: `${this.amount} ${
            Object.keys(this.currencies)[this.selectedCurrency]
          } ${
            this.recurring ? this.plans[this.selectedPlan] : "One time donation"
          }`,
          ...this.form,
        }),
      })
        .then(() => alert("Success!"))
        .catch((error) => alert(error));
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    async loadStripe() {
      if (window.Stripe) {
        this.stripeLoaded = true;
        return; // don't load Stripe twice
      }
      try {
        const result = await loadScript("https://js.stripe.com/v3/");
        this.stripeLoaded = result.successful;
      } catch (e) {
        console.log("stripe error", e);
      }
    },
    async loadPaypal() {
      if (window.paypal) {
        this.paypalLoaded = true;
        return; // don't load Paypal twice
      }
      try {
        const result = await loadScript(this.paypalScriptUrl, "paypalScript");
        this.paypalLoaded = result.successful;
      } catch (e) {
        console.log("PayPal error", e);
      }
    },
  },
  mounted() {
    this.loadStripe();
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  img.bg-img {
    filter: hue-rotate(65deg) opacity(5%);
    margin-top: 5%;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  img.bg-img {
    margin-top: 45%;
    transform: scale(0.9);
  }
}
.root-form {
  max-width: 800px;
}
.step {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.amount {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
}
.custom-opacity {
  opacity: 0.6;
}
</style>
