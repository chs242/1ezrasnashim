<template>
  <Layout>
    <div id="index-section-banner" class="w-full mt-12 lg:mt-0">
      <IndexBanner />
    </div>
    <IndexSection1 />
  </Layout>
</template>

<script>
import IndexBanner from "~/components/IndexBanner"
import IndexSection1 from "~/components/IndexSection1"

export default {
    components:{
        IndexBanner,
        IndexSection1
    }    
}
</script>

