<template>
    <div class="w-full px-1 pt-2 mt-16 relative flex flex-col md:mt-20 md:flex-row md:flex-wrap md:justify-start lg:mt-0">
        <TeamBranches class="lg:hidden"></TeamBranches>
       <TeamMeet />
       <TeamBranches class="hidden lg:block"></TeamBranches>
       <div class="w-full flex flex-col flex-wrap justify-center lg:justify-center lg:flex-row lg:w-3/4">
            <TeamRachel />
            <TeamAllen />
            <TeamCommitee />
            <TeamAbout />
        </div>
    </div>
</template>

<script>
import TeamMeet from "~/components/TeamMeet"
import TeamBranches from "~/components/TeamBranches"
import TeamRachel from "~/components/TeamRachel"
import TeamAllen from "~/components/TeamAllen"
import TeamCommitee from "~/components/TeamCommitee"
import TeamAbout from "~/components/TeamAbout"


export default {
    components:{
        TeamMeet,
        TeamBranches,
        TeamRachel,
        TeamAllen,
        TeamCommitee,
        TeamAbout
    }    
}
</script>