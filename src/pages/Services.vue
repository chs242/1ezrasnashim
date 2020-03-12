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
    components:{
        ServicesBanner,
        ServicesSection1,
        ServicesOutreach
    }    
}
</script>