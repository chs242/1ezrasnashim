        <!-- this is the light/dark mode toggle <ToggleTheme /> -->
<template>
  <div id="app">

    <header class="bg-gray-200 flex fixed left-0 right-0 lg:static lg:h-20">
      <div class="hidden lg:w-2/4 lg:inline-flex justify-center items-center">
        <a href="/" class="px-3 font-roboto text-sm font-semibold hover:text-purple-800 transition duration-100 ease-linear">Home</a>
        <a href="/volunteer" class="px-3 font-roboto text-sm font-semibold hover:text-pink-900 transition duration-100 ease-linear">Volunteer</a>
        <a href="/contact" class="px-3 font-roboto text-sm font-semibold hover:text-pink-900 transition duration-100 ease-linear">Contact</a>
        <a href="/contact" class="px-3 font-roboto text-sm font-semibold hover:text-pink-900 transition duration-100 ease-linear">News & Press</a>
        <a href="/about" class="px-3 font-roboto text-sm font-semibold hover:text-pink-900 transition duration-100 ease-linear">About</a>
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
        <a href="/donate" class="font-roboto text-sm font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full px-12 py-2 leading-normal shadow-md">Donate</a>
      </div>
      
      
       <div id="mySidenav" :class="{open: isActive}" class="sidenav" @click="isActive = !isActive">
        <a href="/" class="mobile">Home</a>
        <a href="/volunteer" class="mobile">Volunteer</a>
        <a href="/contact" class="mobile">Contact</a>
        <a href="/contact" class="mobile">News & Press</a>
        <a href="/about" class="mobile">About</a>
    </div>
    </header>

    <main class="main min-h-screen">
      <slot/>
    </main>

    <footer class="footer bg-gray-200 pb-4 md:pb-8 flex flex-col md:text-xs">
      <div id="subscribe" class="shadow-md py-4 md:flex">
        <div class="flex justify-center w-full px-6 text-center md:w-1/2 lg:pl-40">
          <h1 class="font-source text-2xl lg:text-4xl lg:text-left text-pink-900 font-semibold">Keep up with the latest happenings at Ezras Nashim!</h1>
        </div>
        <div class="flex justify-center w-full mt-4 md:mt-0 md:inline-flex md:w-1/2 md:relative md:pr-8 md:items-center lg:px-32 lg:pr-48">
          <input type="email" placeholder="Your Email..." class="font-roboto text-base text-center md:text-left font-light border-2 rounded-full w-4/5 min-w-40 md:w-full md:px-2 py-2 lg:py-3 leading-normal shadow-2xl">
          <button href="#" class="hidden md:inline md:absolute md:right-0 md:w-1/3 lg:w-32 md:mr-4 lg:mr-24 xl:mr-40 font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 rounded-full w-4/5 py-2 lg:py-3 leading-normal shadow-2xl">Subscribe</button>
        </div>
        <div class="flex justify-center w-full mt-2 md:hidden">
          <button href="#" class="font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 rounded-full w-4/5 py-2 leading-normal shadow-2xl">Subscribe</button>
        </div>
      </div>
      <div id="footer-end" class="mt-4">
        <div class="md:hidden flex flex-col text-center">
          <div class="flex justify-center">
            <img src="../assets/images/logo-footer.png" alt="Logo" class="w-16">
          </div>
          <p>Email: leah@ezrasnashim.org</p>
          <p>Address: 1716 56th St. Brokklyn, NY 11204</p>
        </div>
        <div class="w-full flex mt-4 md:mt-24">
          
          <div class="w-1/2 flex flex-col text-center lg:text-left hover:text-purple-800 xl:pl-32">
            <p class="w-full font-roboto text-sm font-medium md:mb-6 lg:w-1/2 lg:pl-40 xl:pl-64">Service</p>
            <a href="/about" class="w-full font-source text-gray-700 text-xs font-medium lg:w-2/3 lg:pl-40 xl:pl-64">Our Team</a>
            <a href="/volunteer" class="w-full font-source text-gray-700 text-xs font-medium lg:w-2/3 lg:pl-40 xl:pl-64">Our Services</a>
            <a href="/endorsements" class="w-full font-source text-gray-700 text-xs font-medium lg:w-2/3 lg:pl-40 xl:pl-64">Endorsments</a>
            <a href="/endorsements" class="w-full font-source text-gray-700 text-xs font-medium lg:w-2/3 lg:pl-40 xl:pl-64">About Us</a>
          
          </div>
          <div class="hidden md:inline text-center">
          <div class="flex justify-center">
            <img src="../assets/images/logo-footer.png" alt="Logo" class="w-16">
          </div>
          <p>Email: leah@ezrasnashim.org</p>
          <p>Address: 1716 56th St. Brokklyn, NY 11204</p>
        </div>
          <div class="w-1/2 flex flex-col text-center lg:text-left hover:text-purple-800 xl:pr-32">
            <p class="w-full font-roboto text-sm font-medium md:mb-6 lg:w-1/2 lg:pl-40 xl:pl-56">Popular</p>
            <a href="/about" class="w-full font-source text-gray-700 text-xs font-medium lg:w-2/3 lg:pl-40 xl:pl-56">News & Press</a>
            <a href="/volunteer" class="w-full font-source text-gray-700 text-xs font-medium lg:w-2/3 lg:pl-40 xl:pl-56">Volunterr</a>
            <a href="/endorsements" class="w-full font-source text-gray-700 text-xs font-medium lg:w-2/3 lg:pl-40 xl:pl-56">Donate</a>
            <a href="/endorsements" class="w-full font-source text-gray-700 text-xs font-medium lg:w-2/3 lg:pl-40 xl:pl-56">Contact Us</a>
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
    isActive: false,
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

/* sidenav  */
.sidenav{
  display: inline;
}

.sidenav {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 60px;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 30px;
  font-family: 'source sans pro', sans-serif;
  display: flex;
  flex-flow: column;
  align-items: center;
}


@media (min-width: 320px) and (max-width: 1024px) {
  .open {
  height: 40% !important;
  background: #cbd5e0;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .open {
  height: 30% !important;
  background: #cbd5e0;
  }
}
.sidenav a {
  width: 40%;
  max-width: 150px;
  position: relative;
  padding: 5px 0 5px 0px;
  border-bottom: 1px solid purple;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  color: purple;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #2c3e50;
}
.sidenav a:active {
  color: #2c3e50;
}
  
/* hamburgur */
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

</style>
