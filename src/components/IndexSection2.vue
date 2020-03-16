<template>
    <div class="relative lg:flex lg:flex-col lg:items-center">
        <div class="w-full relative overflow-hidden">
            <img src="../assets/images/ambulance.jpg" class="hidden md:block md:w-full ambulance-img object-cover">
        </div>
        <div class="links-cont w-full flex flex-col items-center px-6 py-6 md:flex-row md:justify-center md:absolute top-0 bottom-0">
            <a href="https://www.93queen.com/" target="_blank"><img src="../assets/images/index-tab/movie-link.jpg" class="w-64 px-2 my-2 rounded-xl"></a>
            <a href="/news"><img src="../assets/images/index-tab/news-link.jpg" class="w-64 my-4 px-2 rounded-xl"></a>
            <a href="/services"><img src="../assets/images/index-tab/events-link.jpg" class="w-64 my-4 px-2 rounded-xl"></a>
            <a href="/volunteer"><img src="../assets/images/index-tab/courses-link.jpg" class="w-64 my-4 px-2 rounded-xl"></a>
        </div>
    </div>
</template>

<style scoped>
    
    .ambulance-img{
        filter: opacity(20%);
        max-height: 400px;
    }
     @media (min-width: 1024px) and (max-width: 1800px) {
         .ambulance-img{
        max-height: 600px;
    }
    }
    a{
        transition: 200ms linear;

    }
    a:hover{
        transition: 200ms linear;
        transform: scale(1.05);
    }


</style>