<template>
  <Layout :show-logo="true" bg-color="bg-gray-100">
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 py-24">
      <div class="flex flex-wrap items-center">
        <div class="steps flex-2 px-4 relative">
          <transition-group name="fade" mode="out-in">
            <div class="step" key="1" v-if="step == 1">
              <DonateOptionsButtons
                :selected-frequency.sync="selectedFrequency"
                :selected-method.sync="selectedMethod"
              />
              <button class="cta" @click="step = 2">Continue</button>
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

                <h2 class="text-xl font-bold text-pink-900 mt-6 mb-2">Payment Details</h2>
                <DonateCC :form-data="form" :recurring-frequency="selectedFrequency" />
                <button class="cta" @click="step = 1">Back</button>
              </div>
              <!-- /FORM -->
            </div>
          </transition-group>
        </div>
        <div class="flex-1 px-4 text-gray-800 order-1">
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
import DonateOptionsButtons from "~/components/Donations/DonateOptionsButtons.vue";
import DonateCC from "~/components/Donations/DonateCC.vue";
import InputGroup from "~/components/InputGroup";
import { PAYMENT_METHODS, RECURRING_FREQUENCIES } from "~/utils/constants";

export default {
  name: "Donate",
  components: {
    DonateOptionsButtons,
    InputGroup,
    DonateCC
  },
  data() {
    return {
      step: 1,
      selectedMethod: PAYMENT_METHODS.CC,
      selectedFrequency: RECURRING_FREQUENCIES.MONTHLY,
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
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

button.cta {
  @apply bg-pink-600 text-white text-base py-4 px-8 rounded-xl;
  &[disabled] {
    @apply opacity-50 cursor-not-allowed;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-80px);
}

.fade-leave-active {
  @apply w-full h-full absolute;
  transition: all 1s;
  transform: translateY(0px);
}
</style>
