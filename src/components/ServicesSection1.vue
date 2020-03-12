<template>
    <div class="w-full mx-auto px-2 lg:w-4/5 xl:w-2/3">
        <ServicesCardEmergency />
        <ServicesCardCpr />
        <ServicesCardEmt />
    </div>
</template>

<script>
import ServicesCardEmergency from "~/components/ServicesCardEmergency"
import ServicesCardCpr from "~/components/ServicesCardCpr"
import ServicesCardEmt from "~/components/ServicesCardEmt"
export default {
    components:{
        ServicesCardEmergency,
        ServicesCardCpr,
        ServicesCardEmt
    }
}
</script>
