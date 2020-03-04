<template>
  <Layout>
    <IndexBanner />    
    <IndexSection1 />
    <IndexSection2 />
    <IndexSection3 />
    <IndexSection4 />
  </Layout>
</template>

<script>
import IndexBanner from "~/components/IndexBanner"
import IndexSection1 from "~/components/IndexSection1"
import IndexSection2 from "~/components/IndexSection2"
import IndexSection3 from "~/components/IndexSection3"
import IndexSection4 from "~/components/IndexSection4"

export default {
    components:{
        IndexBanner,
        IndexSection1,
        IndexSection2,
        IndexSection3,
        IndexSection4
    }    
}
</script>

