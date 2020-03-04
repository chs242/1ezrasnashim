<template>
    <div class="links-cont py-6">
        <IndexParagraph2 preTitle="Our EMT's are highly trained and state certified:" title1="Our Team" :description="descriptions[0]" path="/about" />
        <img src="../assets/images/neo-natal-emts.jpg" class="short-img w-full px-2 object-cover">
        <IndexParagraph2 preTitle="We service the full spectrum of emergency calls" title1="Our Services"  :description="descriptions[1]" path="/about" />
        <img src="../assets/images/first-response-vehicle.jpg" class="tall-img w-full px-2">
    </div>
</template>

<script>
import IndexParagraph2 from "~/components/IndexParagraph2"
export default {
    data(){
        return{
            descriptions:[
                "Many of our members are also trained in complementing fields, such as Paramedics, Registered Nurses, doulas, labor coaches, camp and school nurses. Ezras Nashim EMTs have the unique opportunity to join New York City EMTs by riding with them on FDNY ambulances as they respond to emergency calls.",
                "The motivation behind Ezras Nashim was to respond to Emergency labor and OB/GYN emergencies; however, we are trained to respond to all emergencies. To serve the needs of the community, we are responding to pediatric, adolescent and geriatric emergencies. We also provide follow-up phone calls and visits. When you call Ezras Nashim, you receive the highest quality emergency medical service as well as the extra support which is inherent in women as caregivers. We can assist when..."
            ],
        }
    },
    components:{
        IndexParagraph2
    },
}
</script>

<style scoped>
.links-cont{
        background: #72298f;
    }
    .short-img{
        min-height: 210px;
    }
    .tall-img{
        max-height: 210px;
    }
</style>