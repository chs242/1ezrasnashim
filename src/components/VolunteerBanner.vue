<template>
    <div id="volunteer-section-banner" class="w-full mt-12 md:mt-16 lg:mt-0">
        <div class="cont w-full relative">
            <figure class="tint relative overflow-hidden">
                <img src="../assets/images/volunteer-tab/banner-volunteer.jpg" class="banner-img h-64 md:h-auto md:w-full object-cover lg:object-none lg:w-auto lg:float-right lg:mr-20">
            </figure>
            <h1 class="banner-h1 text-white absolute text-center text-2xl font-source font-bold leading-none px-12 md:text-4xl md:text-right md:px-32 lg:font-light lg:px-20 lg:text-4xl"><span class="font-normal md:text-5xl lg:text-2xl lg:font-light">Become a member of our amazing</span><br class="lg:hidden"><br>Corps of Volunteers</h1>
        </div>
        <div  class="bg-gray-200 flex flex-col py-6 items-center md:items-start md:px-12 lg:px-40 md:py-0">
            <div class="relative -mt-12 text-center md:-mt-48 lg:-mt-56">
                <h2 class="font-roboto text-base text-white bg-purple-800 rounded-full w-56 px-6 my-1 py-2 leading-normal">Become an EMT</h2>
                <h2 class="font-roboto text-base text-white bg-purple-800 rounded-full w-56 px-6 my-1 py-2 leading-normal">Become a Dispatcher</h2>
                <h2 class="font-roboto text-base text-white bg-purple-800 rounded-full w-56 px-6 my-1 py-2 leading-normal">Join Our Outreach</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
  .banner-h1{
      top:25%;
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
  .banner-h1{
      top: 30%;
    }
    .tint:before{
    background: rgba(1,1,1, 0.2);
    }
  }
@media (min-width: 1024px) {
    .cont{
        background-color: #e5e5e5;
    }
    .banner-img{
        margin-top: 80px;
        height: 370px !important;
    }
}
</style>