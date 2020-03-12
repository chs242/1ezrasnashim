<template>
    <div class="custom-height bg-white w-full pb-2 my-2 rounded-b-xl md:pb-0 md:my-4 md:flex md:flex-row md:rounded-r-xl lg:my-8 shadow-lg">
        <div id="img" class="w-full overflow-hidden md:w-1/2">
            <img src="../assets/images/neo-natal-emts.jpg" class="custom-height h-64 object-cover md:h-full">
        </div>
        <div id="text" class="w-full px-2 my-8 md:w-1/2 md:px-4 md:my-2 md:py-4 lg:p-12">
            <div>
                <h1 class="text-xl font-bold font-roboto text-gray-800 mt-2 line md:mt-0">EMT Training</h1>
            </div>
            <div>
                <p class="font-source text-xs lg:text-sm text-gray-700 font-light py-4 px-2 md:mt-2">
                    We are here to serve and educate the community. For women interested in becoming an EMT, we offer EMT classes which include lectures and skills/lab training. Qualified applicants who join Ezras Nashim pay be eligible for partial reimbursement of EMT training tuition.
                </p>
            </div>
            <div class="mt-4">
                <a href="/volunteer" class="px-12 py-3 font-roboto text-sm font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full leading-normal shadow-md lg:text-base">Find Out More</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* added in these custom heights specifically for chrome.It is interpreting the tailwind h-full directive wrongly. */
     @media (min-width: 768px) and (max-width: 1024px) {
    .custom-height{
        max-height: 250px !important;
    }
}
     @media (min-width: 1024px) {
    .custom-height{
        max-height: 320px !important;
    }
}
</style>