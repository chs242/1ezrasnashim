<template>
  <transition name="modal-fade">
    <div v-show="isOpen" class="fixed z-50 flex items-center justify-center w-screen h-screen">
      <!-- overlay -->
      <div @click="closePopup" class="fixed w-screen h-screen bg-purple-200 bg-opacity-75"></div>
      <!-- modal -->
      <section
        class="relative flex flex-col items-stretch max-w-2xl max-h-full m-2 overflow-hidden bg-white rounded-lg shadow-2xl modal sm:flex-row"
      >
        <button @click="closePopup" class="absolute top-4 left-4 focus:outline-none">
          <svg
            class="text-purple-200 hover:text-purple-400 w-7"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <circle cx="12" cy="12" r="9" />
            <path d="M10 10l4 4m0-4l-4 4" />
          </svg>
        </button>
        <div class="sm:w-2/5">
          <img
            src="https://www.ezrasnashim.org/assets/img/first-response-vehicle.107cefe4.jpg"
            alt
            class="object-cover w-full h-full"
          />
        </div>
        <div class="flex-1 p-6 overflow-auto">
          <h2
            class="text-3xl font-extrabold leading-7 text-purple-900"
          >We have the most exciting news to share with you!</h2>
          <p
            class="px-3 py-2 mt-5 text-pink-900 bg-pink-200 border-l-4 border-r-4 border-pink-600"
          >This past Thursday, August.., Ezras Nashim won the vote in State EMS Counsil (SEMSCO) by a landslide. 23 for Ezras Nashim and only 2 against.</p>
          <p
            class="mt-4 text-sm"
          >We were granted the operating authority under NYS Public Health Law Article 30. Finally we will be able to transport our own patients and own our own ambulance! Now our EMTs will be able to use lights and sirens in their cars (once they go through certain trainings and inspections) thereby making our response time go up!</p>
          <div class="flex justify-center mt-4">
            <a
              href="https://www.causematch.com/en/projects/ezras-nashim/"
              target="_blank"
              role="nofollow"
              class="px-4 py-3 font-bold leading-4 text-white rounded-full bg-gradient-to-br from-pink-600 to-purple-500"
            >Donate to the Campaign</a>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    closePopup() {
      this.isOpen = false;
      localStorage.setItem("popup", new Date());
    },
    shouldPopup() {
      const lastCloseDate = localStorage.getItem("popup");
      if (!lastCloseDate) return true;
      console.log(lastCloseDate, "!!!");
      const diffTime = Math.abs(new Date(lastCloseDate) - new Date());
      const hoursAgo = diffTime / (1000 * 60 * 60);
      console.log(`Popup closed ${hoursAgo} hours ago 💡.`);
      return hoursAgo > 1;
    },
  },
  mounted() {
    if (this.shouldPopup()) {
      setTimeout(() => {
        this.isOpen = true;
      }, 2500);
    }
  },
};
</script>

<style lang="scss">
.modal-fade-enter-active,
.modal-fade-leave-active {
  opacity: 1;
  transition: all 0.3s ease-in;
  .modal {
    transform: none;
    transition: all 0.3s ease;
  }
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
  .modal {
    transform: scale(0.8);
  }
}
</style>
