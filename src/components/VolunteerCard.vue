<template>
    <div class="w-full px-2 mb-4 flex flex-col items-center md:my-4">
        <div class="w-full bg-white pt-16 pb-2 px-4 shadow-md rounded-xl md:w-3/5 md:shadow-2xl lg:w-full">
            <img id="icon" :src="icon" class="w-20">
            <h2 id="title" class="text-xl font-bold font-roboto text-gray-800 mt-2 line">{{ title }}</h2>
            <p id="description" class="font-source text-sm text-gray-700 font-normal mt-4">{{ description }}</p>
            <p id="description2" class="font-source text-sm text-gray-700 font-normal mt-4 mb-2">{{ description2 }}</p>
        </div>
   </div>
</template>

<script>
export default {
    props:[
        "icon",
        "title",
        "description",
        "description2"
    ]
}
</script>

<style scoped>

</style>
