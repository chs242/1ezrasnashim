<template>
  <div id="app" class="min-h-screen flex flex-col">
    <header
      class="fixed w-full lg:relative py-2 lg:py-4 px-6 bg-gray-200 flex justify-between items-center custom-border"
    >
      <div class="hidden lg:flex -ml-4 justify-center items-center">
        <g-link
          to="/"
          class="px-2 lg:px-3 font-roboto text-sm lg:text-base font-semibold hover:text-purple-800 transition duration-100 ease-linear xl:text-lg truncate"
        >Home</g-link>
        <g-link
          to="/volunteer/"
          class="px-2 lg:px-3 font-roboto text-sm lg:text-base font-semibold hover:text-purple-800 transition duration-100 ease-linear xl:text-lg truncate"
        >Volunteer</g-link>
        <g-link
          to="/contact/"
          class="px-2 lg:px-3 font-roboto text-sm lg:text-base font-semibold hover:text-purple-800 transition duration-100 ease-linear xl:text-lg truncate"
        >Contact</g-link>

        <ul class="menu">
          <li
            class="px-2 lg:px-4 font-roboto text-sm lg:text-base font-semibold hover:text-purple-800 transition duration-100 ease-linear xl:text-lg"
          >
            <g-link to="/about/">
              About
              <svg fill="currentColor" viewBox="0 0 20 20" class="inline w-6 h-6">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </g-link>
            <ul class="sub-menu bg-gray-200 p-2 rounded-lg shadow-2xl">
              <li>
                <g-link to="/services/">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="ml-3">Services</span>
                </g-link>
              </li>
              <li>
                <g-link to="/about/#about-team">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="ml-3">Branches</span>
                </g-link>
              </li>
              <li>
                <g-link to="/news/">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                  <span class="ml-3">News &amp; Press</span>
                </g-link>
              </li>
              <li>
                <g-link to="/endorsements/">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-8 h-8"
                  >
                    <path
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <span class="ml-3">Endorsements</span>
                </g-link>
              </li>
            </ul>
          </li>
        </ul>
        <g-link
          to="/testimonials/"
          class="px-2 font-roboto text-sm lg:text-base font-semibold hover:text-purple-800 transition duration-100 ease-linear lg:px-3 lg:pl-1 lg:-ml-28 xl:px-0 xl:text-lg truncate"
        >Testimonials</g-link>
      </div>

      <g-link
        to="/donate/"
        class="hidden lg:flex ml-4 font-roboto text-sm font-bold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full px-12 py-2 leading-normal shadow-md lg:text-base"
      >Donate</g-link>

      <Logo class="lg:absolute bottom-0 right-0 left-0 lg:mx-auto lg:transform lg:translate-y-2/3" />

      <!-- Bear in mind there is additional CSS below in the styles tag -->
      <div class="lg:hidden" :class="{ 'is-drawerActive': isActive }">
        <button
          type="button"
          class="c-button p-hamburger self-end lg:hidden absolute"
          @click="isActive = !isActive"
          aria-controls="global-nav"
          :aria-expanded="isActive ? 'true' : 'false'"
        >
          <span class="p-hamburger__line"></span>
          <span class="u-visuallyHidden"></span>
        </button>
      </div>

      <!-- Bear in mind there is additional CSS below in the styles tag -->
      <div id="mySidenav" :class="{open: isActive}" class="sidenav" @click="isActive = !isActive">
        <g-link to="/" class="mobile">Home</g-link>
        <g-link to="/volunteer/" class="mobile">Volunteer</g-link>
        <g-link to="/contact/" class="mobile">Contact</g-link>
        <g-link to="/about/" class="mobile">About</g-link>
        <g-link to="/services/" class="mobile">Services</g-link>
        <g-link to="/news/" class="mobile">News & Press</g-link>
        <g-link to="/testimonials/" class="mobile">Testimonials</g-link>
        <g-link to="/endorsements/" class="mobile">Endorsements</g-link>
        <g-link to="/donate/" class="mobile donate">Donate</g-link>
      </div>
    </header>
    <transition name="slideUp" appear>
      <main class="main flex-1" :class="[bgColor]">
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Footer from "~/components/Footer.vue";
export default {
  props: {
    showLogo: { default: true },
    bgColor: String
  },
  components: {
    Logo,
    Footer
  },
  data() {
    return {
      links: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "Volunteer",
          url: "/volunteer/"
        },
        {
          name: "Contact",
          url: "/contact/"
        }
      ],
      isActive: false
    };
  }
};
</script>

<style scoped lang="scss">
.custom-border {
  border-bottom: 2px solid #72298f;
  z-index: 100000;
}

/* about: dropdown menu */
.menu {
  display: inline-block;
}
.menu > li {
  float: left;

  // width: 140px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  .sub-menu {
    transform: scale(0);
    opacity: 0;
    transform-origin: top center;
    transition: all 300ms ease-in-out;

    li {
      @apply text-purple-800;
      transition: all 300ms ease-in-out;
      &:last-child {
        border-bottom: 0;
      }
      a {
        @apply px-3 flex items-center rounded;
        &:hover {
          @apply bg-gray-100;
        }
        svg {
          @apply text-purple-500 w-5 h-5;
        }
      }
    }
  }
  &:hover .sub-menu {
    transform: scale(1);
    opacity: 1;
    li {
      transform: scale(1);
    }
  }
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

.donate{
  font-weight: bold;
}

@media (min-width: 320px) and (max-width: 1024px) {
  .sidenav {
    top: 4rem;
  }
  .open {
    height: 27rem !important;
    background: #cbd5e0;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .sidenav {
    top: 5rem;
  }
  .open {
    height: 27rem !important;
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

.slideUp-enter-active {
  transition: all 0.3s ease-in;
}
.slideUp-leave-active {
  transition: none;
}
.slideUp-enter,
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
