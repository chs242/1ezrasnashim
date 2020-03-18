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
      <span class="text-pink-500 relative" style="bottom: 0.5rem;">$</span>
      <span class="text-3xl font-bold text-pink-800">{{amounts[i]}}</span>
      <div class="text-pink-700 leading-5">{{desc}}</div>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: "DonateOptions",
  props: ["amount", "recurring"],
  data() {
    return {
      amounts: [36, 108, 360, 450, 900, 1800]
    };
  },
  computed: {
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
