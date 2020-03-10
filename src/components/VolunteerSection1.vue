<template>
      <div id="index-section-1" class="w-full flex flex-col bg-gray-200 relative lg:flex lg:flex-row xl:px-40">
        <div class="lg:w-1/2">
            <VolunteerCard :icon="require('../assets/images/cpr-icon.png')" title="Become an EMT" description="EMT classes cover material based on New York State Protocols. Total class time is 180 hours of lectures and skills/lab training. Generally, classes are twice a week, given by certified female instructors at convenient locations. Our course generally runs from October through May, with testing in June. Qualified applicants who pass the state exam and join Ezras Nashim, may be entitled to partial reimbursement of tuition." description2="Ezras Nashim has begun an internship program for qualified young women who will be able to obtain EMT certification and begin as interns, assisting experienced EMTs." />
            <VolunteerCard :icon="require('../assets/images/volunteer-tab/dispatcher-icon.png')" title="Become a Dispatcher" description="Dispatch training classes are done in small groups or one on one by our qualified trainer. Training takes several hours and after home practice, and showing adequate skills, the dispatchers are cleared. To volunteer as a dispatcher, which can be from your home or office, you must have a landline phone and internet access." />
        </div>
        <div class="lg:w-1/2 lg:mt-1/2">
            <VolunteerCard :icon="require('../assets/images/volunteer-tab/outreach-icon.png')" title="Volunteer for Community Outreach" description="If you have an interest in health care and medicine, yet cannot become an EMT or Dispatcher, you can still join Ezras Nashim by signing up as a Community Outreach Volunteer. You will have the opportunity to work with our Administrative Staff in scheduling meetings and events, coordinating programs, attending health fairs, visiting schools and other educational forums which promote the mission of Ezras Nashim." description2="We will train you in the basics of pre-hospital emergency care as well as proactive and preventive health care on a community and individual level." />
            <div class=" py-16 mx-auto relative">
                <h1 class="font-bold font-source text-5xl text-center text-gray-700">Ready to Join?</h1> 
                <a href="tel:718-232-1300" class="block font-bold font-source text-3xl text-center text-gray-700">718-232-1304</a> 
                <a href="mailto:leah@ezrasnashim.org" class="block font-bold font-source text-3xl text-center text-gray-700">leah@ezrasnashim.org</a> 
            </div>
        </div>
      </div>
</template>

<script>
import VolunteerCard from "~/components/VolunteerCard"
export default {
    components:{
        VolunteerCard,
    },
}
</script>

<style scoped>
    .tint:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(1,1,1, 0.8);
    }
</style>