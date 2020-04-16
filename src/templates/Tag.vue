<template>
  <Layout class="bg-gray-100">
    <div class="mt-20 pt-20 pb-12 px-3 md:px-8 lg-custom-width">
      <h1 class="font-source font-bold text-3xl text-center md:text-5xl"># {{ $page.tag.title }}</h1>
    </div>
    <div class="lg-custom-width mx-auto rounded-xl mb-10">
      <PostCard
        class="custom-border"
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: "Tags"
  }
};
</script>

<style scoped>
@media (min-width: 1024px) and (max-width: 1280px) {
  .lg-custom-width {
    width: 700px;
  }
}
@media (min-width: 1280px) {
  .lg-custom-width {
    margin: 0 auto;
    width: 850px;
  }
}
</style>
