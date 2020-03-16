<template>
    <a :href="aHref" target="_blank">
        <div>
            <img :src="imgSrc">
            <h5 id="caption" class="w-48 text-center"> {{ caption }} </h5>
        </div>
    </a>
    
</template>

<script>
export default {
    props:[
        "aHref",
        "imgSrc",
        "caption"
    ]
}
</script>