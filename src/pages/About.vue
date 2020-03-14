<template>
    <Layout>
        <div class="tint relative overflow-hidden mt-16 md:mt-20 lg:mt-0">
            <img src="../assets/images/other-imgs/picture-1.jpg" alt="" class="banner-img w-full object-cover">
            <h1 class="banner-h1 text-white absolute text-6xl font-source leading-none pl-4 md:text-6xl md:px-12 lg:px-20 lg:text-6xl">About Us</h1>
        </div>
        <div class="bg-gray-100 lg:bg-gray-100">
            <div id="about-mission">
                <AboutMission />
            </div>
            <div id="about-team">
                <AboutTeam />
            </div>
        </div>
    </Layout>
</template>

<script>
import AboutTeam from "~/components/AboutTeam"
import AboutMission from "~/components/AboutMission"


export default {
    components:{
        AboutTeam,
        AboutMission,
        
    }    
}
</script>

<style scoped>
.banner-h1{
      top:75%;
  }
  .tint:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(1,1,1, 0.3);
    }
@media (min-width: 320px) and (max-width: 768px) {
   .banner-img{
        /* margin-top: 80px !important; */
        height: 300px !important;
    }
  }
@media (min-width: 768px) and (max-width: 1024px) {
 
  }
@media (min-width: 1024px) {
    .banner-img{
        /* margin-top: 80px !important; */
        height: 500px !important;
    }
}
</style>
