<template>
  <div id="app" class="min-h-screen flex flex-col">
    <header
      class="bg-gray-200 flex fixed top-0 left-0 right-0 h-16 md:h-20 lg:static lg:h-24 z-10 custom-border"
    >
      <div class="hidden lg:inline-flex justify-center items-center lg:w-2/4">
        <a
          href="/"
          class="px-3 font-roboto text-sm lg:text-base font-semibold hover:text-purple-800 transition duration-100 ease-linear xl:text-lg"
        >Home</a>
        <a
          href="/volunteer"
          class="px-3 font-roboto text-sm lg:text-base font-semibold hover:text-pink-900 transition duration-100 ease-linear xl:text-lg"
        >Volunteer</a>
        <a
          href="/contact"
          class="px-3 font-roboto text-sm lg:text-base font-semibold hover:text-pink-900 transition duration-100 ease-linear xl:text-lg"
        >Contact</a>
        <a
          href="/news"
          class="px-3 font-roboto text-sm lg:text-base font-semibold hover:text-pink-900 transition duration-100 ease-linear xl:text-lg"
        >News & Press</a>
        <a
          href="/services"
          class="px-3 font-roboto text-sm lg:text-base font-semibold hover:text-pink-900 transition duration-100 ease-linear xl:text-lg"
        >Services</a>
        <a
          href="/about"
          class="px-3 font-roboto text-sm lg:text-base font-semibold hover:text-pink-900 transition duration-100 ease-linear xl:text-lg"
        >About</a>
        <!-- <a href="/news" class="">News & Press</a> -->
      </div>

      <div class="pl-6 lg:pl-0 md:pt-2 lg:pt-8 lg:w-1/5 lg:flex justify-center z-10">
        <Logo />
      </div>
      <!-- Bear in mind there is additional CSS below in the styles tag -->
      <div class="lg:hidden" :class="{ 'is-drawerActive': isActive }">
        <button
          type="button"
          class="c-button p-hamburger self-end lg:hidden absolute"
          @click="drawer"
          aria-controls="global-nav"
          :aria-expanded="isActive ? 'true' : 'false'"
        >
          <span class="p-hamburger__line"></span>
          <span class="u-visuallyHidden"></span>
        </button>
      </div>

      <div class="hidden lg:w-2/4 lg:inline-flex justify-center items-center">
        <a
          href="/donate"
          class="font-roboto text-sm font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full px-12 py-2 leading-normal shadow-md lg:text-base"
        >Donate</a>
      </div>

      <!-- Bear in mind there is additional CSS below in the styles tag -->
      <div id="mySidenav" :class="{open: isActive}" class="sidenav" @click="isActive = !isActive">
        <a href="/" class="mobile">Home</a>
        <a href="/volunteer" class="mobile">Volunteer</a>
        <a href="/contact" class="mobile">Contact</a>
        <a href="/news" class="mobile">News & Press</a>
        <a href="/services" class="mobile">Services</a>
        <a href="/about" class="mobile">About</a>
        <a href="/donate" class="mobile donate">Donate</a>
      </div>
    </header>
    <main class="main flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Footer from "~/components/Footer.vue";
export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    Footer
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    drawer: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
.custom-border {
  border-bottom: 2px solid #72298f;
  z-index: 100000;
}

/* sidenav  */
.sidenav {
  display: inline;
}

.sidenav {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 64px;
  right: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: 0.5s;
  padding-top: 30px;
  font-family: "source sans pro", sans-serif;
  display: flex;
  flex-flow: column;
  align-items: center;
}

@media (min-width: 320px) and (max-width: 1024px) {
  .open {
    height: 20rem !important;
    background: #cbd5e0;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .sidenav {
    top: 5rem;
  }
  .open {
    height: 20rem !important;
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
  z-index: 1000;
}

.sidenav a:hover {
  color: #2c3e50;
}
.sidenav a:active {
  color: #2c3e50;
}

@media (min-width: 1024px) {
  .sidenav {
    display: none;
  }
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
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.p-hamburger:hover,
.p-hamburger:focus {
  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.5);
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
  content: "";
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
