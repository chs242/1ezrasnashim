<template>
    <Layout>
        <TestimonialCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
        id
        title
        path
        }
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import TestimonialCard from "~/components/TestimonialCard"
export default {
    components:{
        TestimonialCard
    }
}
</script>