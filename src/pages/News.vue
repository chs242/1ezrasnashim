<template>
  <Layout>
    <div class="w-full bg-gray-100 px-3 pb-12 mt-20 md:pt-12 md:flex md:flex-row md:flex-wrap md:justify-start lg:mt-0">
      <PostCard class="md:w-1/2 lg:w-1/3 xl:w-1/4" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
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
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'News',
    meta: [
        {name: 'description', content: 'Ezras Nashim operates under the auspices of rabbonim and is endorsed by gedolei hador.'}
      ],
      link: [
        {rel: 'canonical', href: 'https://ezrasnashim.org/news/'}
      ]
  }
}
</script>