<template>
    <div id="volunteer-section-banner" class="w-full mt-12 lg:my-12">
        <div class="cont w-full relative overflow-hidden lg:w-4/5 lg:rounded-xl lg:mx-auto xl:3/4">
            <figure class="tint relative -ml-20">
                <img src="../assets/images/services-tab/banner-services.jpg" class="banner-image h-64 md:h-64 md:w-full object-cover lg:h-auto">
            </figure>
            <h1 class="banner-h1 text-white absolute left-0 right-0 text-center text-2xl font-source font-bold px-12 leading-none md:px-6 md:font-light md:text-5xl md:text-left lg:font-light lg:px-20 lg:text-4xl xl:text-6xl">Community<br> Services</h1>
        </div>
    </div>
</template>

<style scoped>
  .banner-h1{
      top: 60%;
  }
  .tint:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(1,1,1, 0.2);
    }
@media (min-width: 320px) and (max-width: 768px) {
  .tint:before{
    background: rgba(1,1,1, 0.4);
    }
  }
@media (min-width: 768px) and (max-width: 1024px) {
    .tint:before{
    background: rgba(1,1,1, 0.2);
    }
     .banner-h1{
      top: 55%;
  }
  }
@media (min-width: 768px) and (max-width: 1024px) {
    .banner-image{
        transform: scale(1.1)
    }
  }
@media (min-width: 1024px) {
   .banner-h1{
      top: 50%;
  }
  }

</style>