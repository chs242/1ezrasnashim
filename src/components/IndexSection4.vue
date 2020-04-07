<template>
    <div class="bg-gray-200 flex flex-col items-center py-12 relative shadow-sm md:p-0">
    <div class="overflow-hidden transform md:rotate-90">
        <figure class="tint relative shadow-md overflow-hidden rounded-xl">
            <img id="img" src="../assets/images/hands.jpg" class="object-cover" />
        </figure>
    </div>
    <div class="absolute mt-20 px-16 text-white text-right md:px-12 md:mt-48 md:flex md:flex-wrap lg-custom-mt">
        <div class="flex mb-6 justify-center md:flex md:flex-col md:mx-16 lg:mt-6">
            <img src="../assets/images/join-2-icon.png" class="w-20 m-2" />
            <img src="../assets/images/join-icon.png" class="w-20 m-2" />
        </div>
        <div class="md:mt-16 md:text-center md:px-16 md:flex md:flex-col lg:pl-40">
            <h4 class="font-source text-sm font-light">Become a member of our amazing corps of volunteers</h4>
            <h1 class="mb-20 font-roboto text-4xl font-semibold md:mb-0">Join Ezras Nashim</h1>
            <a href="/volunteer" class="hidden md:block px-6 py-4 font-roboto text-sm font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full leading-normal shadow-md md:mx-16 md:mt-6">Find Out More</a>

        </div>
        <div class="md:mt-40">
        <a href="/volunteer" class="px-6 py-4 font-roboto text-sm font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full leading-normal shadow-md md:hidden">Find Out More</a>
        </div>
    </div>
    </div>
</template>
<style scoped>
    .tint:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(114,41,163, 0.7);
    }
    @media (min-width: 320px) and (max-width: 768px) {
    #img{
        height: 500px;
        width: 320px;
    }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        #img{
            height: 650px;
            width: 320px;
        }
    }
    @media (min-width: 1024px) {
        #img{
            height: 750px;
            width: 320px;
        }
        .lg-custom-mt{
            margin-top: 16rem;
        }
    }

</style>