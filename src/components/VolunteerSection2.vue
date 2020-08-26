<template>
  <div class="custom-bg pb-12">
    <h1 class="font-roboto text-3xl text-white font-bold text-center py-4">Register Online</h1>
    <!-- Hidden input, inputs wrapped in labels are in place to ensure netlify parses the form correctly
    Note: checkbox inputs have to have a unique name that matches the formData node to work -->
    <form 
      name="VOLUNTEER"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/Success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="VOLUNTEER" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>

      <div class="lg:flex lg:px-20 xl:justify-center">
        <div
          id="checkbox-form"
          class="text-white w-full p-4 md:w-4/5 md:flex md:mx-auto md:mb-8 lg:mx-0 lg:mb-2 lg:px-8 lg:w-1/2 lg:flex-col lg:items-start xl:w-1/3 xl:px-0"
        >
          <fieldset class="md:w-2/3 lg:w-full lg:mb-8">
            <div>
              <legend
                class="font-source font-semibold text-lg mb-4 mt-4 lg:mt-0 lg:mb-2"
              >How Would you like to volunteer?</legend>
            </div>
            <div class="lg:flex">
              <div class="lg:w-3/4">
                <div>
                  <label>Become an EMT<br>
                    <input 
                      type="checkbox" 
                      name="volunteerEMT" 
                      value="emt" 
                      v-model="formData.volunteerEMT" 
                    />
                  </label>
                </div>
                <div>
                  <label>Become a Dispatcher<br>
                    <input 
                      type="checkbox" 
                      name="volunteerDispatcher" 
                      value="dispatcher" 
                      v-model="formData.volunteerDispatcher" 
                    />
                  </label>
                </div>
              </div>
              <div class="lg:w-full">
                <div>
                  <label>Volunteer Driver<br>
                    <input 
                      type="checkbox" 
                      name="volunteerDriver" 
                      value="driver" 
                      v-model="formData.volunteerDriver" 
                    />
                  </label>
                </div>
                <div>
                  <label>Fundraising/Administrative<br>
                    <input 
                      type="checkbox" 
                      name="volunteerAdmin" 
                      value="administrative" 
                      v-model="formData.volunteerAdmin" 
                    />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="md:w-1/2 lg:w-3/4 lg:mb-8">
            <div>
              <legend
                class="font-source font-semibold text-lg mb-4 mt-4 lg:mt-0 lg:mb-2"
              >Your EMT Certification</legend>
            </div>
            <div class="lg:flex">
              <div class="lg:w-3/4">
                <div>
                  <label>Expired<br>
                    <input 
                      type="checkbox" 
                      name="certificationExpired" 
                      value="expired" 
                      v-model="formData.certificationExpired" 
                    />
                  </label>
                </div>
                <div>
                  <label>Current<br>
                    <input 
                      type="checkbox" 
                      name="certificationCurrent" 
                      value="current" 
                      v-model="formData.certificationCurrent" 
                    />
                  </label>
                </div>
              </div>
              <div class="lg:w-full">
                <div>
                  <label>Interested in Course<br>
                    <input 
                      type="checkbox" 
                      name="certificationNone" 
                      value="course" 
                      v-model="formData.certificationNone" 
                    />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset class="md:w-1/2 lg:w-3/4 lg:mb-8">
            <div>
              <legend 
                class="font-source font-semibold text-lg mb-4 mt-4 lg:mt-0 lg:mb-2"
              >Do You Drive</legend>
            </div>
            <div class="lg:flex">
              <div class="lg:w-3/4">
                <div>
                  <label>No<br>
                    <input 
                      type="checkbox" 
                      name="driveNo" 
                      value="no" 
                      v-model="formData.driveNo" 
                    />
                  </label>
                </div>
                <div>
                  <label>Yes, with Car<br>
                    <input 
                      type="checkbox" 
                      name="drive" 
                      value="car" 
                      v-model="formData.drive" 
                    />
                  </label>
                </div>
              </div>
              <div class="lg:w-full">
                <div>
                  <label>Yes, Without Car<br>
                    <input 
                      type="checkbox" 
                      name="driveNoCar"
                      value="nocar" 
                      v-model="formData.driveNoCar" 
                    />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div
          id="text-form"
          class="bg-gray-200 py-8 px-3 mx-1 shadow-md text-center rounded-xl md:w-2/3 md:px-16 md:mx-auto lg:w-1/2 lg:px-8 lg:flex lg:flex-wrap lg:content-center xl:w-2/5 xl:mx-0"
        >
          <div
            class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1"
          >
            <input
              type="text"
              id="name"
              name="name"
              v-model="formData.name"
              placeholder="Name"
              class="w-full custom-width py-1 text-center custom-border"
              required
            />
          </div>
          <div
            class="star-address relative w-full my-4 mx-auto lg:text-right font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1"
          >
            <input
              type="text"
              id="address"
              name="address"
              v-model="formData.address"
              placeholder="Address"
              class="w-full custom-width py-1 text-center custom-border"
              required
            />
          </div>

          <div
            class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1"
          >
            <input
              type="text"
              id="email"
              name="email"
              v-model="formData.email"
              placeholder="Email"
              class="w-full custom-width py-1 text-center custom-border"
              required
            />
          </div>

          <div
            class="relative w-full my-4 mx-auto lg:text-right font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1"
          >
            <input
              type="text"
              id="phone"
              name="phone"
              v-model="formData.phone"
              placeholder="Phone"
              class="w-full custom-width py-1 text-center custom-border"
            />
          </div>

          <div
            class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1"
          >
            <input
              type="text"
              id="cellphone"
              name="cellphone"
              v-model="formData.cellphone"
              placeholder="Cellphone"
              class="w-full custom-width py-1 text-center custom-border"
              required
            />
          </div>

          <div
            class="relative w-full my-4 mx-auto lg:text-right font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-1"
          >
            <input
              type="text"
              id="certification"
              name="certification"
              v-model="formData.certification"
              placeholder="Certification"
              class="w-full custom-width py-1 text-center custom-border"
            />
          </div>

          <div class="relative w-full mx-auto my-4 font-source text-lg shadow-md lg:shadow-none">
            <textarea
              rows="4"
              cols="30"
              name="comment"
              v-model="formData.comment"
              placeholder="Comment..."
              class="w-full py-1 text-left custom-border"
            ></textarea>
          </div>

          <div class="w-full lg:text-right">
            <button 
              type="submit"
              class="px-16 py-2 font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full leading-normal shadow-md"
            >
              <span class="">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Volunteer"
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/Success/"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style scoped>
.custom-bg {
  background-color: #72298f;
}
.custom-border {
  border-radius: 5px;
}

.star:before {
  content: "*";
  color: red;
  position: absolute;
  top: 0px;
  left: 2px;
}
.star-address:before {
  content: "*";
  color: red;
  position: absolute;
  top: 0px;
  left: 6px;
}
@media (min-width: 1024px) {
  .custom-width {
    width: 98%;
  }
}
</style>
