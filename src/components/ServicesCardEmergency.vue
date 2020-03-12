<template>
    <div class="custom-height bg-white w-full pb-2 my-2 rounded-b-xl md:pb-0 md:my-4 md:flex md:flex-row md:rounded-r-xl lg:my-8 shadow-lg">
        <div id="img" class="w-full overflow-hidden md:w-1/2">
            <img src="../assets/images/other-imgs/ambulance-freier.jpg" class="custom-height h-64 object-cover md:h-full">
        </div>
        <div id="text" class="w-full px-2 my-8 md:px-4 md:w-1/2 md:my-2 md:pb-8">
            <div>
                <h1 class="text-xl font-bold font-roboto text-gray-800 mt-2 line md:mt-0">Emergency Care</h1>
            </div>
            <div>
                <p class="font-source text-xs lg:text-sm text-gray-700 font-light py-4 md:mt-2">
                    The motivation behind Ezras Nashim was to respond to Emergency labor and OB/GYN emergencies; however, we are trained to respond to all emergencies. To serve the needs of the community, we are responding to pediatric, adolescent and geriatric emergencies. We also provide follow-up phone calls and visits.<br><br>
                    When you call Ezras Nashim, you receive the highest quality emergency medical service as well as the extra support which is inherent in women as caregivers. We can assist when you find yourself as a loss and need a female caregiver… post-op, postpartum, ob/gyn, prehospital, pre-operative, terminal illnesses, blood pressure monitoring, pain management, geriatric issues… we fill in the gaps in emergency medical care.
                </p>
            </div>
            <div class="mt-4">
                <a href="/about" class="px-12 py-3 font-roboto text-sm font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full leading-normal shadow-md lg:text-base">About Our EMT's</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* added in these custom heights specifically for chrome.It is interpreting the tailwind h-full directive wrongly. */
     @media (min-width: 768px) and (max-width: 1024px) {
    .custom-height{
        max-height: 380px !important;
    }
}
     @media (min-width: 1024px) {
    .custom-height{
        max-height: 410px !important;
    }
}
</style>