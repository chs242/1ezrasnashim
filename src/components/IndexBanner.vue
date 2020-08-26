<template>
  <div id="index-section-banner" class="w-full mt-12 lg:mt-0">
    <div class="relative w-full">
      <h1
        class="banner-h1 text-white text-5xl md:text-6xl font-source font-bold lg:font-light absolute leading-none px-12 md:px-32 lg:mx-32 xl:mx-64"
      >
        <span class="md:text-4xl font-light">Bridging the gap for women in</span>
        <br />Emergency Medical
        <br />Care
      </h1>
      <g-link
        to="/donate/"
        class="banner-a absolute font-roboto text-xl font-bold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full px-12 lg:px-20 py-2 lg:py-3 leading-normal shadow-md"
      >Donate</g-link>
      <img
        src="../assets/images/banner-bg.jpg"
        class="banner-img h-screen lg:h-auto lg:w-full object-cover"
      />
    </div>
  </div>
</template>

<style scoped>
.banner-h1 {
  top: 18%;
}
.banner-a {
  top: 60%;
  left: 50%;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .banner-img {
    height: 50vh !important;
  }
}
@media (min-width: 1350px) {
  .banner-a {
    left: 24rem;
  }
}
</style>
