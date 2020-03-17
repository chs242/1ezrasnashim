<template>
  <div class="text-center">
    <div class="flex justify-center mb-8">
      <button
        v-for="(time, i) in frequencies"
        :key="time"
        class="font-bold py-4 px-8 uppercase text-lg tracking-wider"
        :class="{
        'bg-brand text-white' : selectedPlan === i,
        'bg-gray-300 hover:bg-gray-400 text-gray-800': selectedPlan !== i,
        'rounded-l-full': i === 0, 'rounded-r-full': i === frequencies.length - 1
      }"
        @click="$emit('update:selected-plan', i)"
      >{{time}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonateOptionsButtons",
  props: ["selectedPlan"],
  data() {
    return {
      frequencies: ["Give Once", "Monthly"]
    };
  }
};
</script>
