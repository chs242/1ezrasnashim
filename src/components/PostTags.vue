<template>
   <div class="">
   		<g-link class="bg-gray-200 py-1 px-2 mx-1 rounded-xl" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			<span>#</span> {{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped>

</style>