<template>
  <Layout>
    <VolunteerBanner />    
    <VolunteerSection1 />    
    <VolunteerSection2 />    
  </Layout>
</template>

<script>
import VolunteerBanner from "~/components/VolunteerBanner"
import VolunteerSection1 from "~/components/VolunteerSection1"
import VolunteerSection2 from "~/components/VolunteerSection2"

export default {
    components:{
        VolunteerBanner,
        VolunteerSection1,
        VolunteerSection2
    }    
}
</script>