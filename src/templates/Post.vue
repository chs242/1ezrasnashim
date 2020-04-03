<template>
  <Layout class="bg-gray-100">
      <div class="mt-20 py-12 px-3 md:px-8">
          <h1 class="font-source font-bold text-3xl text-center md:text-5xl">
              {{ $page.post.title }}
          </h1>
          <PostMeta class="mt-4 py-4 text-xs lg:text-center" :post="$page.post" />
          <div class="">
              <g-image class="mx-auto custom-height object-cover" alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
          </div>
          <div class="bg-white px-3 custom-rounded shadow-xl lg-custom-width">
              <div class="py-12 md:text-lg px-4" v-html="$page.post.description" />
              <div class="py-12 md:text-lg px-4" v-html="$page.post.content" />
              <div class="pb-4">
                  <PostTags :post="$page.post" />
              </div>
          </div>
      </div>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style scoped>
  .custom-height{
    height: 300px;
  }

  .custom-rounded{
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

@media (min-width: 768px) and (max-width: 1024px) {
  .custom-height{
    height: auto;
    width: 100%;
  }
}
@media (min-width: 1024px) and (max-width: 1280px) {
  .custom-height{
    height: auto;
    width: 700px;
  }
  .lg-custom-width{
    margin: 0 auto;
    width: 700px;
  }
}
@media (min-width: 1280px) {
  .custom-height{
    height: auto;
    width: 850px;
  }
  .lg-custom-width{
    margin: 0 auto;
    width: 850px;
  }
}
</style>
