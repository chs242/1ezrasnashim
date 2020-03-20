<template>
    <g-link class="w-full my-8 font-source shadow-lg custom-radius-bottom" :to="post.path"> 
        <div >
            <g-image alt="Cover image" v-if="post.cover_image" :src="post.cover_image" class="custom-radius-top" />
        </div>
        <div class="bg-white px-3 text-center custom-radius-bottom">
            <h2 class="pt-4 pr-12 text-3xl text-left font-bold font-roboto" v-html="post.title" />
            <p class="pt-4 text-lg font-source" v-html="post.description" />
            <div class="py-4">
              <PostMeta class="" :post="post" />
              <PostTags class="" :post="post" />
            </div>
        </div>
    </g-link>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style scoped>

  .custom-radius-top{
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .custom-radius-bottom{
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
</style>
