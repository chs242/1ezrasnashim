<template>
      <div id="index-section-1" class="flex flex-col bg-gray-200 md:bg-white relative xl:flex-row-reverse">
          <div>
            <img src="../assets/images/squiggle.png" class="random-img hidden xl:inline xl:absolute xl:right-0">
            <IndexPhone />
          </div>
          <div>
            <IndexParagraph preTitle="Over the last fifty years, volunteer-based" title1="Emergency Medical" title2="Services" :description="descriptions[0]" path="/about" />
          </div>
          <div class="md:flex justify-center xl:pl-40">
            <div class="xl:my-64">
                <IndexCard :icon="require('../assets/images/medical-kit-icon.png')" title="Emergency Care" description="The motivation behind Ezras Nashim was to respond to Emergency labor and OB/GYN..." />
            </div>
            <div class="md:flex md:flex-row xl:flex xl:flex-col xl:pt-20">
              <IndexCard :icon="require('../assets/images/cpr-icon.png')" title="CPR & AED Classes" description="Knowing how to save a life is a mitzvah we value and promote. Our EMTs and dispatchers..." />
              <IndexCard :icon="require('../assets/images/battery-icon.png')" title="EMT Training" description="We are here to serve and educate the community. For women who are interested in..." />
            </div>
          </div>
      </div>
</template>

<script>
import IndexPhone from "~/components/IndexPhone"
import IndexParagraph from "~/components/IndexParagraph"
import IndexCard from "~/components/IndexCard"
export default {
    data(){
        return{
            descriptions:[
                "(EMS) groups have grown to become renowned international organizations servicing Jewish communities world-wide; the care they provide is invaluable and unparalleled. We are deeply grateful to the men who volunteer their time and rely on their services for ourselves, family and friends. However, there is a significant void in first response medical services in the observant Jewish Community that we are prepared to fill: Dignified emergency care",
            ],
        }
    },
    components:{
        IndexPhone,
        IndexParagraph,
        IndexCard
    },
}
</script>

<style scoped>
    .random-img{
        filter: opacity(5%);
    }
</style>