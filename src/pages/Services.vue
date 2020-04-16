<template>
    <Layout>
        <div class="bg-gray-100 md:pt-10 lg:pt-8">
            <ServicesBanner />
            <div id="services-main-section" class="w-full">
                <ServicesSection1 />
            </div>
            <div class="px-2 md:px-0">
                <ServicesOutreach />
            </div>
        </div>
    </Layout>
</template>

<script>
import ServicesBanner from "~/components/ServicesBanner"
import ServicesSection1 from "~/components/ServicesSection1"
import ServicesOutreach from "~/components/ServicesOutreach"



export default {
    metaInfo: {
    title: "Services",
    meta: [
        {name: 'description', content: 'When you call Ezras Nashim, you receive the highest quality emergency medical service as well as the extra support which is inherent in women as caregivers. We can assist when you find yourself as a loss and need a female caregiver… post-op, postpartum, ob/gyn, prehospital, pre-operative, terminal illnesses, blood pressure monitoring, pain management, geriatric issues… we fill in the gaps in emergency medical care. '}
      ],
      link: [
        {rel: 'canonical', href: 'https://ezrasnashim.org/services/'}
      ]
  },
    components:{
        ServicesBanner,
        ServicesSection1,
        ServicesOutreach
    }    
}
</script>