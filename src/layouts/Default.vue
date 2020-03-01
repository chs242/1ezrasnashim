        <!-- this is the light/dark mode toggle <ToggleTheme /> -->
<template>
  <div id="app">

    <header class="bg-white flex lg:h-20">
      <div class="hidden lg:inline-flex w-2/4 items-center">
        <a href="/about" class="">About</a>
        <a href="/endorsements" class="">Endorsments</a>
        <!-- <a href="/news" class="">News & Press</a> -->
        <a href="/volunteer" class="">Volunteer</a>
      </div>

      <div class="pl-6 lg:pl-0 lg:w-1/5">
        <Logo />
      </div>
      <div class="lg:hidden" :class="{ 'is-drawerActive': isActive }">
        <button type="button" class="c-button p-hamburger self-end lg:hidden absolute" @click="drawer" aria-controls="global-nav" :aria-expanded="isActive ? 'true' : 'false'">
          <span class="p-hamburger__line"></span>
          <span class="u-visuallyHidden"></span>
        </button>
      </div>

      <div class="hidden lg:inline-block w-2/4">
        <a href="/donate" class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Donate</a>
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

    <footer class="footer mt-56">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//www.suits.at"> SUITS </a></span>
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
