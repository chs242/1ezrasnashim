<template>
    <div class="bg-gray-100 w-full px-1 pt-2 mt-16 flex flex-col md:mt-20 md:flex-row md:flex-wrap md:justify-center lg:mt-0">
       <TeamMeet />
       <div class="w-full flex flex-col flex-wrap justify-center lg:justify-between lg:flex-row lg:w-4/5 xl:w-3/4">
        <TeamRachel />
        <TeamAllen />
        <TeamCommitee />
        <TeamAbout />
       </div>
    </div>
</template>

<script>
import TeamMeet from "~/components/TeamMeet"
import TeamRachel from "~/components/TeamRachel"
import TeamAllen from "~/components/TeamAllen"
import TeamCommitee from "~/components/TeamCommitee"
import TeamAbout from "~/components/TeamAbout"


export default {
    components:{
        TeamMeet,
        TeamRachel,
        TeamAllen,
        TeamCommitee,
        TeamAbout
    }    
}
</script>