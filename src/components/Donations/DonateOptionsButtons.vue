<template>
  <div class="text-center">
    <div
      class="m-2 inline-flex justify-center mb-8 shadow-outline-pink rounded-full overflow-hidden"
    >
      <button :class="{active: !recurring}" @click="$emit('update:recurring', false)">Give Once</button>
      <button :class="{active: recurring }" @click="$emit('update:recurring', true)">Monthly</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonateOptionsButtons",
  props: ["recurring"]
};
</script>

<style lang="scss" scoped>
button {
  @apply font-bold py-4 px-8 uppercase text-lg tracking-wider;
  &:not(.active) {
    @apply bg-pink-100  text-pink-800;
    &:hover {
      @apply bg-pink-200;
    }
  }
  &.active {
    @apply bg-pink-600 text-white;
  }
}
</style>
