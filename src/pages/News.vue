<template>
  <Layout>

    <div class="min-h-screen bg-gray-100">
      <div class="w-4/5 pt-32 mx-auto flex flex-row justify-center font-roboto text-lg text-pink-800 md:pb-6 lg:pb-10">
        <div
          class="bg-pink-100 border border-pink-300 rounded-full rounded-r-none" 
          :class="{'bg-pink-600 text-white': decoratedPatient}">
          <TestimonialButton
            class="py-1 px-7 md:py-4" 
            @click="blogPosts">Blog Posts
          </TestimonialButton>
        </div>
        <div class="bg-pink-100 border border-pink-300 bg-pink-600 text-white" >
          <TestimonialButton
            class="py-1 px-8 md:py-4" 
            @click="allMedia">All Media
          </TestimonialButton>
        </div>
        <div 
          class="bg-pink-100 border border-pink-300 rounded-full rounded-l-none"
          :class="{'bg-pink-600 text-white': decoratedFan}">
          <TestimonialButton
            class="py-1 px-6 md:py-4"
            @click="inTheNews">In the News
          </TestimonialButton>
        </div>
      </div>

      <div class="w-full bg-gray-100 px-3 pb-12 mt-20 md:pt-12 md:flex md:flex-row md:flex-wrap md:justify-start lg:mt-0">
        <PostCard class="md:w-1/2 lg:w-1/3 xl:w-1/4" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
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
import TestimonialButton from "~/components/UI/TestimonialButton";
import TestimonialReview from "~/components/TestimonialReview";
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  data(){
    return{
      decoratedPatient: false,
      decoratedFan: false,

    }
  },
  methods:{
    blogPosts(){
      this.decoratedFan = false;
      this.decoratedPatient = true;
      console.log(this.step)
    },
    inTheNews(){
      this.decoratedFan = true
      this.decoratedPatient = false;
      console.log(this.step)
    },
  },
  components: {
    TestimonialButton,
    TestimonialReview,
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