<template>
  <div class="w-full p-1 font-source custom-radius-bottom md:p-2 lg:pt-4">
    <g-link :to="post.path">
      <div>
        <g-image
          alt="Cover image"
          v-if="post.cover_image"
          :src="post.cover_image"
          class="custom-radius-top w-full h-56 object-cover"
        />
      </div>
      <div class="bg-white px-3 text-left">
        <div class="custom-height">
          <h2 class="pt-4 pr-12 text-xl text-left font-bold font-roboto" v-html="post.title" />
        </div>
        <div class="custom-height">
          <p class="pt-4 text-lg font-source" v-html="post.description" />
        </div>
      </div>
    </g-link>
    <div class="bg-white pb-4 px-3 custom-radius-bottom">
      <PostMeta :post="post" />
      <PostTags :post="post" />
    </div>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ["post"]
};
</script>

<style scoped>
.custom-radius-top {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.custom-radius-bottom {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.custom-height {
  height: 70px;
  overflow: hidden;
}

.post-card-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  text-indent: -9999px;
  z-index: 0;
}
</style>
