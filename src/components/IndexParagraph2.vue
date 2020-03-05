<template>
    <div class="mb-4 p-4 md:mb-0 md:pt-0 lg:py-8 xl:py-12 xl:px-12">
        <h3 id="pre-title" class="text-base text-pink-400 font-source">{{ preTitle }}</h3>
        <h1 id="title-1" class="text-3xl text-white font-source font-light leading-none mt-2">{{ title1 }}</h1>
        <p id="description" class="font-roboto text-sm text-white mt-2">{{ description }}</p>
        <a :href="path" id="read-more" class="block text-base text-pink-400 text-right font-source">Read More &#8594;</a>
    </div>
</template>

<script>
export default {
    props:[
        "preTitle",
        "title1",
        "description",
        "path"
    ]
}
</script>