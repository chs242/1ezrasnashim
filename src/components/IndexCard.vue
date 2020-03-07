<template>
    <div class="w-full md:w-64 mb-4 md:my-4 flex flex-col items-center">
        <a href="/services">
        <div class="hover w-64 md:w-56 bg-white pt-16 pb-2 px-4 shadow-md md:shadow-2xl rounded-xl">
        <img id="icon" :src="icon" class="w-20">
        <h2 id="title" class="text-xl font-bold font-roboto text-gray-800 mt-2 line">{{ title }}</h2>
        <p id="description" class="font-source text-sm text-gray-700 font-normal mt-4">{{ description }}</p>
        <a href="" id="read-more" class="block text-4xl text-pink-600 text-right font-roboto">&#8594;</a>
        </div>
        </a>
   </div>
</template>

<script>
export default {
    props:[
        "icon",
        "title",
        "description"
    ]
}
</script>

<style scoped>
    .hover{
        transition: 200ms linear;

    }
    .hover:hover{
        transition: 200ms linear;
        transform: scale(1.05);
    }
</style>