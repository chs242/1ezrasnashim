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
    metaInfo: {
    title: "Volunteer",
    meta: [
        {name: 'description', content: "Become a member of Esras Nashim's amazing Corps of Volunteers"}
      ],
      link: [
        {rel: 'canonical', href: 'https://ezrasnashim.org/volunteer/'}
      ]
  },
    components:{
        VolunteerBanner,
        VolunteerSection1,
        VolunteerSection2
    }    
}
</script>