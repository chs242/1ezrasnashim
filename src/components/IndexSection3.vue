<template>
    <div class="links-cont">
        <img src="../assets/images/neo-natal-emts.jpg" class="short-img">
        <IndexParagraph2 class="para1" preTitle="Our EMT's are highly trained and state certified:" title1="Our Team" :description="descriptions[0]" path="/about" />
        <img src="../assets/images/first-response-vehicle.jpg" class="tall-img">
        <IndexParagraph2 class="para2" preTitle="We service the full spectrum of emergency calls" title1="Our Services"  :description="descriptions[1]" path="/services" />
    </div>
</template>

<script>
import IndexParagraph2 from "~/components/IndexParagraph2"
export default {
    data(){
        return{
            descriptions:[
                "Many of our members are also trained in complementing fields, such as Paramedics, Registered Nurses, doulas, labor coaches, camp and school nurses. Ezras Nashim EMTs have the unique opportunity to join New York City EMTs by riding with them on FDNY ambulances as they respond to emergency calls.",
                "The motivation behind Ezras Nashim was to respond to Emergency labor and OB/GYN emergencies; however, we are trained to respond to all emergencies. To serve the needs of the community, we are responding to pediatric, adolescent and geriatric emergencies. We also provide follow-up phone calls and visits."
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
        padding: 2rem 0;
    }
    
     @media (min-width: 320px) and (max-width: 768px) {
    .short-img, .tall-img{
        width: 100% !important;
        padding: 0 0.5rem !important;
        object-fit: cover !important;
        border-radius: 1rem;
    }
    .short-img{
        height: 210px;
    }
    .tall-img{
        height: 210px !important;
    }
    }
     @media (min-width: 768px) and (max-width: 1024px) {
         .links-cont{
             display: flex;
             flex-flow: row wrap;
             justify-content: center;
             align-items: flex-start;
         }
         .links-cont :nth-child(1) { order: 1; }
         .links-cont :nth-child(2) { order: 2; }
         .links-cont :nth-child(3) { order: 4; }
         .links-cont :nth-child(4) { order: 3; }
        
        .short-img, .tall-img{
            width: 45% !important;
            max-width: 350px !important;
            height: 200px !important;
            border-radius: 0;
            }
        .para1, .para2{
            width: 45% !important;
            max-width: 350px !important;
        }
        
    }
     @media (min-width: 1024px) {
         .links-cont{
             display: flex !important;
             flex-flow: row wrap !important;
             justify-content: center !important;
             align-items: center !important;
             padding: 4rem 2rem !important;
         }
         .links-cont :nth-child(1) { order: 1; }
         .links-cont :nth-child(2) { order: 2; }
         .links-cont :nth-child(3) { order: 4; }
         .links-cont :nth-child(4) { order: 3; }
        
        .short-img, .tall-img, .para1, .para2{
            width: 450px !important;
            height: 300px !important;
            object-fit: cover;
        }
        
    }
    @media (min-width: 1280px) {
        .links-cont{
            padding: 4rem 12rem !important;
        }
    }
</style>