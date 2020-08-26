<template>
  <footer class="footer bg-gray-200 flex flex-col md:text-xs">

    <!-- Begin Mailchimp Signup Form -->

    <div id="mc_embed_signup">
      <form 
        action="https://ezras-nashim.us7.list-manage.com/subscribe/post?u=595de164da802e29869878694&amp;id=5f22530505" 
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form" 
        class="validate" 
        target="_blank" 
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div id="subscribe" class="shadow-xl py-4 md:flex">
            <div class="flex justify-center w-full px-6 text-center md:w-1/2 lg:pl-40">                     
              <h2
                for="mce-EMAIL"
                class="font-source text-2xl lg:text-4xl lg:text-left text-pink-900 font-light"
              >Keep up with the latest happenings at Ezras Nashim!
              </h2>
            </div>
            
            <div
              class="flex justify-center w-full mt-4 md:mt-0 md:inline-flex md:w-1/2 md:relative md:pr-8 md:items-center lg:px-32 lg:pr-48"
            >
              <input 
                type="email" 
                value="" 
                name="EMAIL" 
                class="font-roboto text-base text-center md:text-left font-light border-2 rounded-full w-4/5 min-w-40 md:w-full md:px-2 py-2 lg:py-3 leading-normal shadow-2xl"
                id="mce-EMAIL" 
                placeholder="email address" 
                required
              >
              <input
                type="submit" 
                value="Subscribe" 
                name="subscribe" 
                id="mc-embedded-subscribe"
                class="hidden text-center md:inline md:absolute md:right-0 md:w-1/3 lg:w-32 md:mr-4 lg:mr-24 xl:mr-40 font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full w-4/5 py-2 lg:py-3 leading-normal shadow-2xl"
              />
            </div>

            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_595de164da802e29869878694_5f22530505" tabindex="-1" value=""></div>
            
            <div class="flex justify-center w-full mt-2 md:hidden">
              <input
                type="submit" 
                value="Subscribe" 
                name="subscribe" 
                id="mc-embedded-subscribe"
                class="font-roboto text-base font-semibold text-center text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full w-4/5 py-2 leading-normal shadow-2xl"
              />
            </div>
          </div>
        </div>
      </form>
    </div>

    <!--End mc_embed_signup-->


    <div id="footer-end" class="mt-4">
      <div class="md:hidden flex flex-col text-center">
        <div class="flex justify-center">
          <img src="../assets/images/logo-footer.png" alt="Logo" class="w-16" />
        </div>
        <p>Email: Leah@ezrasnashim.org</p>
        <p>Address: 1716 56th St. Brooklyn, NY 11204</p>
      </div>

      <div class="w-full pb-4 mt-4 flex flex-row shadow-sm md:mt-24">
        <div class="w-1/2 flex flex-col text-center">
          <p class="w-full font-roboto text-sm lg:text-lg font-medium md:mb-6">Service</p>
          <g-link
            to="/about/"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >Our Team</g-link>
          <g-link
            to="/volunteer/"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >Our Services</g-link>
          <g-link
            to="/endorsements/"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >Endorsments</g-link>
          <g-link
            to="/about/"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >About Us</g-link>
          <g-link
            to="/testimonials/"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >Testimonials</g-link>
        </div>

        <div class="hidden md:block text-xs lg:text-sm text-center">
          <div class="flex justify-center">
            <img src="../assets/images/logo-footer.png" alt="Logo" class="w-16" />
          </div>
          <p>Email: Leah@ezrasnashim.org</p>
          <p>Address: 1716 56th St. Brooklyn, NY 11204</p>
        </div>

        <div class="w-1/2 flex flex-col text-center">
          <p class="w-full font-roboto text-sm lg:text-lg font-medium md:mb-6">Popular</p>
          <g-link
            to="/news/"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >News & Press</g-link>
          <g-link
            to="/volunteer/"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >Volunteer</g-link>
          <g-link
            to="/about/#about-team"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >Branches</g-link>
          <g-link
            to="/donate"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >Donate</g-link>
          <g-link
            to="/contact/"
            class="w-full font-source text-gray-700 text-xs lg:text-sm font-medium hover:text-purple-800"
          >Contact Us</g-link>
        </div>
      </div>
      <div id="softwarebuild" class="my-4 px-4 text-sm flex justify-center md:justify-end">
        <h4>&copy; 2020 Powered by</h4>
        <a href="https://www.softwarebuild.co.uk/" target="_blank" class="inline-block">
          <img src="../assets/images/SVGLogo.svg" alt class="w-12" />
        </a>
      </div>
    </div>
  </footer>
</template>
