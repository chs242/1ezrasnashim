<template>
  <transition-group name="fade" class="w-full flex justify-center flex-wrap my-6">
    <div
      v-for="(desc, i) in descriptions"
      :key="amounts[i]"
      :class="{active: amounts[i] == amount}"
      @click.stop="$emit('update:amount', amounts[i])"
      class="item relative w-1/3 rounded-xl bg-pink-100 p-4 m-2 cursor-pointer"
      style="min-width: 120px;"
    >
      <span
        class="text-pink-500 relative pr-1"
        style="bottom: 0.5rem;"
      >{{ currencySymbols[currencyIndex] }}</span>
      <span class="text-3xl font-bold text-pink-800">{{amounts[i]}}</span>
      <div class="text-pink-700 leading-5">{{desc}}</div>
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
        [36, 108, 360, 450, 900, 1800], // USD
        [50, 150, 500, 650, 1125, 2250], // CAD
        [33, 99, 330, 370, 750, 1500], // EUR
        [27, 85, 270, 310, 625, 1250], // GBP
        [130, 390, 1300, 1500, 3000, 6000] // ILS
      ]
    };
  },
  computed: {
    amounts() {
      return this.allAmounts[this.currencyIndex];
    },
    descriptions() {
      return !this.recurring
        ? [
            "Sponsor a radio",
            "Sponsor 3 radios",
            "Sponsor 10 radios",
            "Sponsor a month of equipment",
            "Sponsor half an EMT course",
            "Sponsor a whole EMT course"
          ]
        : [
            "Sponsor a radio",
            "Sponsor 3 radios",
            "Sponsor 10 radios",
            "Sponsor a month of equipment"
          ];
    }
  }
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
