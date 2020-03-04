<template>
    <div class="bg-gray-200 flex flex-col items-center py-12 relative shadow-sm">
    <div class="wrap overflow-hidden">
        <figure class="tint relative shadow-md overflow-hidden rounded-xl">
            <img src="../assets/images/hands.jpg" class="img" />
        </figure>
    </div>
    <div class="absolute mt-20 px-12 text-white text-right">
        <div class="flex mb-6 justify-center">
            <img src="../assets/images/join-2-icon.png" class="w-20 m-2" />
            <img src="../assets/images/join-icon.png" class="w-20 m-2" />
        </div>
        <h4 class="font-source text-sm font-light">Become a member of our amazing corps of volunteers</h4>
        <h1 class="mb-20 font-roboto text-4xl font-semibold">Join Ezras Nashim</h1>
        <a href="/volunteer" class="px-6 py-4 font-roboto text-sm font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full leading-normal shadow-md">Found Out More</a>

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
    .img{
        min-height: 500px;
        max-width: 320px;
    }

</style>