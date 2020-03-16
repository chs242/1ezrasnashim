<template>
  <div class="text-center">
    <div class="flex justify-center mb-8">
      <button
        v-for="(time, i) in frequencies"
        :key="time"
        class="font-bold py-4 px-8 uppercase text-lg tracking-wider"
        :class="{
        'bg-brand text-white' : selectedFrequency === i,
        'bg-gray-300 hover:bg-gray-400 text-gray-800': selectedFrequency !== i,
        'rounded-l-full': i === 0, 'rounded-r-full': i === frequencies.length - 1
      }"
        @click="$emit('update:selected-frequency', i)"
      >{{time}}</button>
    </div>
    <div
      class="bg-pink-100 text-pink-700 inline-flex justify-center rounded-lg overflow-hidden shadow-lg"
    >
      <button
        v-for="(method, i) in paymentMethods"
        :key="method"
        class="text-sm py-2 px-4 uppercase tracking-wider"
        :class="{
        'hover:text-pink-800': selectedMethod !== i,
        'bg-pink-300 text-pink-900 font-bold' : selectedMethod === i,
      }"
        @click="$emit('update:selected-method', i)"
      >{{method}}</button>
    </div>
  </div>
</template>

<script>
import { RECURRING_FREQUENCIES } from "~/utils/constants";

export default {
  name: "DonateOptionsButtons",
  props: ["selectedMethod", "selectedFrequency"],
  data() {
    return {
      frequencies: ["Give Once", "Monthly"]
    };
  },
  computed: {
    paymentMethods() {
      return this.selectedFrequency === RECURRING_FREQUENCIES.ONCE
        ? ["Credit Card", "Paypal", "Cheque"]
        : ["Credit Card", "Paypal"];
    }
  }
};
</script>
