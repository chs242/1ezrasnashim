<template>
  <button
    v-on="$listeners"
    class="text-sm font-semibold border-2 border-pink-600 rounded-full px-12 py-2 leading-normal shadow-md lg:text-base"
    :class="{
      'bg-pink-600 text-white hover:text-pink-600 hover:bg-white': cta,
      'bg-white text-pink-600 hover:bg-pink-100': !cta
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    cta: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  transition: all 0.3s ease;
  &[disabled] {
    @apply opacity-50 cursor-not-allowed;
  }
  &.small {
    @apply px-2 py-0;
  }
}
</style>
