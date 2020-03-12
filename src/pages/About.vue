<template>
    <Layout>
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
