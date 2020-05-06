<template>
  <Layout>

    <div class="min-h-screen bg-gray-100">
       <div class="w-4/5 pt-32 mx-auto flex flex-row justify-center font-roboto text-lg text-pink-800 md:pb-6 lg:pb-10">
        <div
          class="bg-pink-100 border border-pink-300 rounded-full rounded-r-none" 
          :class="{'bg-pink-600 text-white': isSelected === 'blog'}">
          <TestimonialButton
            class="py-1 px-7 md:py-4" 
            @click="filterPosts('blog')">Blog Posts
          </TestimonialButton>
        </div>
        <div 
          class="bg-pink-100 border border-pink-300" 
          :class="{'bg-pink-600 text-white': isSelected === 'allMedia'}">
          <TestimonialButton
            class="py-1 px-8 md:py-4" 
            @click="postsToShow=$page.posts.edges; isSelected = 'allMedia'"
          >All Media
          </TestimonialButton>
        </div>
        <div 
          class="bg-pink-100 border border-pink-300 rounded-full rounded-l-none"
          :class="{'bg-pink-600 text-white': isSelected === 'news'}">
          <TestimonialButton
            class="py-1 px-6 md:py-4"
            @click="filterPosts('news')">In the News
          </TestimonialButton>
        </div>
      </div> 

      <div class="w-full bg-gray-100 px-3 pb-12 mt-20 md:pt-12 md:flex md:flex-row md:flex-wrap md:justify-start lg:mx-auto lg:mt-0 lg-custom-width">
        <PostCard class="md:w-1/2 lg:w-1/3 xl:w-1/3" v-for="edge in postsToShow" :key="edge.node.id" :post="edge.node"/>
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
      postsToShow: [], // this is now the source of truth, filters are manipulating thi array
      isSelected: 'allMedia',
      decoratedBlog: false,
      decoratedMedia: true,
      decoratedNews: false,

    }
  },
  methods:{
    filterPosts (tagName) {
      this.isSelected = tagName;
      this.postsToShow = this.$page.posts.edges
        .filter(post => post.node.tags.some(tag => tag.title.toLowerCase() === tagName))
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
    },
    mounted () {
      // this.$page will be defined only after the mount, initially no filter is applied
      this.postsToShow = this.$page.posts.edges;

    }
  
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .lg-custom-width{
    width: 940px;
  }
}
</style>