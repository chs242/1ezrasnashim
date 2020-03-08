<template>
  <Layout>
    <VolunteerBanner />    
    <VolunteerSection1 />    
  </Layout>
</template>

<script>
import VolunteerBanner from "~/components/VolunteerBanner"
import VolunteerSection1 from "~/components/VolunteerSection1"

export default {
    components:{
        VolunteerBanner,
        VolunteerSection1,
    }    
}
</script>