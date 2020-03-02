        <!-- this is the light/dark mode toggle <ToggleTheme /> -->
<template>
  <div id="app">

    <header class="bg-gray-200 flex lg:h-20">
      <div class="hidden lg:w-2/4 lg:inline-flex justify-center items-center">
        <a href="/" class="px-3 font-roboto text-sm font-semibold hover:text-purple-800 transition duration-100 ease-linear">Home</a>
        <a href="/volunteer" class="px-3 font-roboto text-sm font-semibold hover:text-purple-800 transition duration-100 ease-linear">Volunteer</a>
        <a href="/contact" class="px-3 font-roboto text-sm font-semibold hover:text-purple-800 transition duration-100 ease-linear">Contact</a>
        <a href="/contact" class="px-3 font-roboto text-sm font-semibold hover:text-purple-800 transition duration-100 ease-linear">News & Press</a>
        <a href="/about" class="px-3 font-roboto text-sm font-semibold hover:text-purple-800 transition duration-100 ease-linear">About</a>
        <!-- <a href="/news" class="">News & Press</a> -->
      </div>

      <div class="pl-6 lg:pl-0 lg:w-1/5 lg:flex justify-center lg:pt-8 z-10">
        <Logo />
      </div>
      <div class="lg:hidden" :class="{ 'is-drawerActive': isActive }">
        <button type="button" class="c-button p-hamburger self-end lg:hidden absolute" @click="drawer" aria-controls="global-nav" :aria-expanded="isActive ? 'true' : 'false'">
          <span class="p-hamburger__line"></span>
          <span class="u-visuallyHidden"></span>
        </button>
      </div>

      <div class="hidden lg:w-2/4 lg:inline-flex justify-center items-center">
        <a href="/donate" class="font-roboto text-sm font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full px-12 py-2 leading-normal shadow-2xl">Donate</a>
      </div>
      
      
      <div class="hidden">
        <a href="/about" class="">About</a>
        <a href="/endorsements" class="">Endorsments</a>
        <!-- <a href="/news" class="">News & Press</a> -->
        <a href="/volunteer" class="">Volunteer</a>
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer bg-gray-200 mt-40 flex flex-col">
      <div id="subscribe" class="shadow-2xl">
        <div class="flex justify-center w-full px-6 text-center">
          <h1 class="font-source text-2xl text-purple-800 font-semibold">Keep up with the latest happenings at Ezras Nashim</h1>
        </div>
        <div class="flex justify-center w-full mt-4">
          <input type="text" placeholder="Your Email..." class="font-roboto text-base text-center font-light border-2 rounded-full w-4/5 py-1 leading-normal shadow-2xl">
        </div>
        <div class="flex justify-center w-full mt-4">
          <button href="#" class="font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 rounded-full w-4/5 py-2 leading-normal shadow-2xl">Subscribe</button>
        </div>
      </div>
      <div id="footer-end" class="mt-4">
        <div class="flex flex-col text-center">
          <div class="flex justify-center">
            <img src="../assets/images/logo-footer.png" alt="Logo" class="w-16">
          </div>
          <p>Email: leah@ezrasnashim.org</p>
          <p>Address: 1716 56th St. Brokklyn, NY 11204</p>
        </div>
        <div class="w-full flex mt-4">
          <div class="w-1/2 flex flex-col text-center">
            <p class="w-full font-roboto text-base font-medium">Service</p>
            <a href="/about" class="w-full font-source text-md font-medium">Our Team</a>
            <a href="/volunteer" class="w-full font-source text-md font-medium">Our Services</a>
            <a href="/endorsements" class="w-full font-source text-md font-medium">Endorsments</a>
            <a href="/endorsements" class="w-full font-source text-md font-medium">About Us</a>
          </div>
          <div class="w-1/2 flex flex-col text-center">
            <p class="w-full font-roboto text-base font-medium">Popular</p>
            <a href="/about" class="w-full font-source text-md font-medium">News & Press</a>
            <a href="/volunteer" class="w-full font-source text-md font-medium">Volunterr</a>
            <a href="/endorsements" class="w-full font-source text-md font-medium">Donate</a>
            <a href="/endorsements" class="w-full font-source text-md font-medium">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  },
  data() {
    return{
    isActive: false
    }
  },
  methods: {
    drawer: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>


  
.c-button {
  display: inline-block;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}


.p-hamburger {
  right: 1.3rem;
  top: 0.7rem;
  width: 48px;
  height: 48px;
  /* margin: auto; */
  border-radius: 50%;
  border: 1px solid purple;
  box-shadow: 0 0 2rem transparent;
  outline: none;
  -webkit-transition: all .3s ease-in-out;
          transition: all .3s ease-in-out;
}
.p-hamburger:hover,
.p-hamburger:focus {
  box-shadow: 0 0 .5rem rgba(255, 255, 255, .5 );
}

.p-hamburger__line {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 18px;
  height: 2px;
  background-color: purple;
  -webkit-transition: inherit;
          transition: inherit;
}
.p-hamburger__line::before,
.p-hamburger__line::after {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color: inherit;
  content: '';
  -webkit-transition: inherit;
          transition: inherit;
}
.p-hamburger__line::before {
  top: -5px;
}
.p-hamburger__line::after {
  top: 5px;
}

.p-hamburger[aria-expanded="true"] .p-hamburger__line {
  background-color: transparent;
}

.p-hamburger[aria-expanded="true"] .p-hamburger__line::before,
.p-hamburger[aria-expanded="true"] .p-hamburger__line::after {
  top: 0;
  background-color: purple;
}

.p-hamburger[aria-expanded="true"] .p-hamburger__line::before {
  -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
          transform: rotate(45deg);
}

.p-hamburger[aria-expanded="true"] .p-hamburger__line::after {
  -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.u-visuallyHidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%); 
  margin: -1px;
}

.footer{
  border: 2px solid red;
}
</style>
