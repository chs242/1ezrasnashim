<template>
    <Layout>
        <TestimonialCard v-for="edge in $page.posts.edges" :key="edge.node.id" :testimonial="edge.node" />
    </Layout>
</template>

<page-query>
query {
  Posts : allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        path
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