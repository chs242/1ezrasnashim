<template>
    <footer class="footer bg-gray-200 pb-4 md:pb-8 flex flex-col md:text-xs">
      <div id="subscribe" class="shadow-xl py-4 md:flex">
        <div class="flex justify-center w-full px-6 text-center md:w-1/2 lg:pl-40">
          <h1 class="font-source text-2xl lg:text-4xl lg:text-left text-pink-900 font-light">Keep up with the latest happenings at Ezras Nashim!</h1>
        </div>
        <div class="flex justify-center w-full mt-4 md:mt-0 md:inline-flex md:w-1/2 md:relative md:pr-8 md:items-center lg:px-32 lg:pr-48">
          <input type="email" placeholder="Your Email..." class="font-roboto text-base text-center md:text-left font-light border-2 rounded-full w-4/5 min-w-40 md:w-full md:px-2 py-2 lg:py-3 leading-normal shadow-2xl">
          <button href="#" class="hidden md:inline md:absolute md:right-0 md:w-1/3 lg:w-32 md:mr-4 lg:mr-24 xl:mr-40 font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full w-4/5 py-2 lg:py-3 leading-normal shadow-2xl">Subscribe</button>
        </div>
        <div class="flex justify-center w-full mt-2 md:hidden">
          <button href="#" class="font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full w-4/5 py-2 leading-normal shadow-2xl">Subscribe</button>
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
</template>