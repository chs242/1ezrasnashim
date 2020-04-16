<template>
  <div class="w-full text-left mt-4">
    <g-link
      class="bg-pink-100 text-pink-700 hover:text-brand py-1 px-3 mx-1 rounded-full"
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
    >
      <span class="text-pink-300 font-bold text-sm">#</span>
      {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
</style>
