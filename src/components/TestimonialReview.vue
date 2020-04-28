<template>
    <div>
        <p>{{ review }}
            <br><br>{{ newline }}
            <br><br>{{ name }}
            <br><br>{{ location }}
        </p>

    </div>
</template>

<script>
export default {
    name: "TestimonialReview",
    props:[        
        "review",
        "newline",
        "name",
        "location"
    ]
    
}
</script>

<style scoped>

</style>