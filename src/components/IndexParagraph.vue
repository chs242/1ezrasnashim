<template>
    <div class="mb-4 p-4 md:w-1/2 lg:ml-40 xl:w-2/5 xl:ml-12 xl:mt-56">
        <h3 id="pre-title" class="text-base text-pink-600 font-source">{{ preTitle }}</h3>
        <h1 id="title-1" class="text-3xl text-gray-800 font-source font-bold leading-none mt-2">{{ title1 }}</h1>
        <h1 id="title-2" class="text-3xl text-gray-600 font-source font-bold leading-none">{{ title2 }}</h1>
        <p id="description" class="font-roboto text-sm text-gray-700 font-normal mt-2">{{ description }}</p>
        <a :href="path" id="read-more" class="block text-base text-pink-600 text-right font-source">Read More &#8594;</a>
    </div>
</template>

<script>
export default {
    props:[
        "preTitle",
        "title1",
        "title2",
        "description",
        "path"
    ]
}
</script>