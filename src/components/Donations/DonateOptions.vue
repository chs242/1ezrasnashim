<template>
  <div class="w-full flex justify-center flex-wrap my-6">
    <div
      v-for="(num, i) in amounts"
      :key="num"
      :class="{active: num == amount}"
      @click="$emit('update:amount', num)"
      class="item relative w-1/3 rounded-xl bg-pink-100 p-4 m-2 cursor-pointer"
      style="min-width: 120px;"
    >
      <span class="text-pink-500 relative" style="bottom: 0.5rem;">$</span>
      <span class="text-3xl font-bold text-pink-800">{{num}}</span>
      <div class="text-pink-700 leading-5">{{descriptions[i]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonateOptions",
  props: ["amount"],
  data() {
    return {
      amounts: [36, 108, 360, 450, 900, 1800],
      descriptions: [
        "Sponsor a radio",
        "Sponsor 3 radios",
        "Sponsor 10 radios",
        "Sponsor a month of equipment",
        "Sponsor half an EMT course",
        "Sponsor a whole EMT course"
      ]
    };
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
</style>
