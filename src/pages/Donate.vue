<template>
  <Layout :show-logo="true" bg-color="bg-gray-100">
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 py-24">
      <div class="flex flex-wrap items-center">
        <div class="steps flex-2 px-4 relative">
          <div class="step" key="1" v-if="step == 1">
            <DonateOptionsButtons :selected-plan.sync="selectedPlan" />
            <donate-options :amount.sync="amount" />

            <input-group
              class="amount w-40"
              name="or enter amount"
              v-model.number.lazy="amount"
              type="number"
              placeholder="0.00"
              min="0"
            >
              <div
                slot="addon-before"
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <span class="text-gray-500 sm:text-sm sm:leading-5">$</span>
              </div>
              <div
                slot="addon-after"
                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
              >
                <span class="text-gray-500 sm:text-sm sm:leading-5">USD</span>
              </div>
            </input-group>
            <base-button cta @click="step = 2" class="mt-6">Continue</base-button>
          </div>
          <div class="step" key="2" v-else-if="step == 2">
            <!-- FORM -->
            <div class="max-w-lg mx-auto mt-8 bg-white shadow rounded-xl p-8 my-2">
              <h2 class="text-xl font-bold text-pink-900 mb-2">Personal Info</h2>
              <div class="-mx-2 flex flex-wrap justify-between mb-4">
                <input-group
                  v-model="form.firstName"
                  name="first name"
                  placeholder="John"
                  class="flex-1"
                />
                <input-group
                  v-model="form.lastName"
                  name="last name"
                  placeholder="Doe"
                  class="flex-1"
                />
              </div>
              <div class="-mx-2 flex flex-wrap justify-between mb-4">
                <input-group
                  v-model="form.email"
                  name="email"
                  type="email"
                  placeholder="John"
                  class="flex-1"
                />
              </div>
              <div class="-mx-2 flex flex-wrap mb-4">
                <input-group
                  v-model="form.address"
                  name="billing address"
                  placeholder="1234 Washington Avenue"
                  class="flex-1"
                />
              </div>
              <div class="-mx-2 flex flex-wrap">
                <input-group v-model="form.city" name="city" class="flex-1" />
                <input-group v-model="form.state" name="state" class="flex-1" />
                <input-group v-model="form.zip" name="Zip/Postal Code" class="flex-1" />
              </div>
              <div class="-mx-2 flex flex-wrap">
                <input-group v-model="form.phone" name="phone number" type="tel" class="flex-1" />
              </div>
              <div class="-mx-2 flex flex-wrap">
                <input-group
                  v-model="form.comment"
                  name="comments"
                  placeholder="In honor of..."
                  type="textarea"
                  class="flex-1"
                />
              </div>

              <DonateCC
                :selected-method.sync="selectedMethod"
                :form-data="form"
                :plan="selectedPlan"
              />
              <base-button @click="step = 1">Back</base-button>
            </div>
            <!-- /FORM -->
          </div>
        </div>
        <div class="flex-1 px-4 text-gray-800 my-12 px-6" style="min-width: 360px">
          <h2
            class="text-brand-50 text-4xl font-semibold leading-tight mb-5"
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
import DonateCC from "~/components/Donations/DonateCC";
import InputGroup from "~/components/InputGroup";
import { PAYMENT_METHODS, PLANS } from "~/utils/constants";

export default {
  name: "Donate",
  components: {
    BaseButton,
    DonateOptionsButtons,
    DonateOptions,
    InputGroup,
    DonateCC
  },
  data() {
    return {
      step: 1,
      selectedMethod: PAYMENT_METHODS.CC,
      selectedPlan: PLANS.MONTHLY,
      amount: 36,
      form: {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        address: undefined,
        city: undefined,
        state: undefined,
        zip: undefined,
        phone: undefined,
        comment: undefined
      }
    };
  },
  computed: {}
};
</script>

<style lang="scss">
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
</style>
