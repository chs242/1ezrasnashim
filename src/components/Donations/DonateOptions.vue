<template>
  <transition-group
    name="fade"
    class="flex flex-wrap justify-center w-full my-6"
  >
    <div
      v-for="(desc, i) in descriptions"
      :key="amounts[i]"
      :class="{ active: amounts[i] == amount }"
      @click.stop="$emit('update:amount', amounts[i])"
      class="relative w-1/3 p-4 m-2 bg-pink-100 cursor-pointer item rounded-xl"
      style="min-width: 120px"
    >
      <span class="relative pr-1 text-pink-500" style="bottom: 0.5rem">{{
        currencySymbols[currencyIndex]
      }}</span>
      <span class="text-3xl font-bold text-pink-800">{{ amounts[i] }}</span>
      <div class="leading-5 text-pink-700">{{ desc }}</div>
    </div>
  </transition-group>
</template>

<script>
import { CURRENCY_SYMBOLS } from "~/utils/constants";

export default {
  name: "DonateOptions",
  props: ["amount", "recurring", "currencyIndex"],
  data() {
    return {
      currencySymbols: CURRENCY_SYMBOLS,
      allAmounts: [
        [54, 100, 180, 450, 900, 1800], // USD
        [65, 125, 225, 560, 1120, 2250], // CAD
        [45, 85, 150, 380, 750, 1500], // EUR
        [40, 72, 130, 325, 650, 1300], // GBP
        [180, 325, 600, 1500, 3000, 6000], // ILS
      ],
    };
  },
  computed: {
    amounts() {
      return this.allAmounts[this.currencyIndex];
    },
    descriptions() {
      return !this.recurring
        ? [
            "Sponsor a pulse-oximeter",
            "Sponsor a tank of fuel for the ambulance",
            "sponsor an Oxygen Tank (per year)",
            "Sponsor a radio (per year)",
            "Sponsor a call",
            "Sponsor an EMT's fully-stocked Equipment bag",
          ]
        : [
            "Sponsor a pulse-oximeter",
            "Sponsor a tank of fuel for the ambulance",
            "sponsor an Oxygen Tank (per year)",
            "Sponsor a radio (per year)",
          ];
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  transition: all 0.3s ease;
  &:hover,
  &.active {
    @apply shadow-outline-brand;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.5);
}
</style>
