<template>
  <div class="px-2 my-4 lg:my-0 lg:w-3/5">
      <form
        name="CONTACT"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/Success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="bg-white py-8 px-8 mx-auto shadow-md text-center rounded-xl md:mx-auto lg:py-12 lg:flex lg:flex-wrap lg:justify-center lg:mx-0 custom-m-width custom-opacity"
      >
      <input type="hidden" name="form-name" value="CONTACT" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>
      <div
        class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-3"
      >
        <input
          type="text"
          id="name"
          name="name"
          v-model="formData.name"
          placeholder="Name"
          class="w-full custom-width py-1 text-center custom-border"
        />
      </div>
      <div
        class="hidden relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:my-1 lg:pt-1 lg:inline-flex lg:w-1/2 lg:shadow-none lg:my-3"
      >
        <img src="../assets/images/contact-tab/phone-icon.png" alt class="h-8 mx-2" />
        <h5 class="w-full py-1 font-source text-left text-sm font-bold text-pink-600">718-232-1304</h5>
      </div>

      <div
        class="star relative w-full my-4 mx-auto lg:text-right font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-3"
      >
        <input
          type="text"
          id="subject"
          name="subjectMatter"
          v-model="formData.subjectMatter"
          placeholder="Subject"
          class="w-full custom-width py-1 text-center custom-border"
        />
      </div>
      <div
        class="hidden relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:inline-flex lg:w-1/2 lg:shadow-none lg:my-3"
      >
        <img src="../assets/images/contact-tab/email-icon.png" alt class="h-8 mx-2" />
        <h5
          class="w-full py-1 font-source text-left text-sm font-bold text-pink-600"
        >leah@ezrasnashim.org</h5>
      </div>

      <div
        class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-3"
      >
        <input
          type="email"
          id="email"
          name="email"
          v-model="formData.email"
          placeholder="Email"
          class="w-full custom-width py-1 text-center custom-border"
        />
      </div>

      <div
        class="hidden relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:inline-flex lg:w-1/2 lg:shadow-none lg:my-3"
      >
        <img src="../assets/images/contact-tab/register-icon.png" alt class="h-8 mx-2" />
        <h5 class="w-full py-1 font-source text-left text-sm font-bold text-pink-600">Register</h5>
      </div>
      <div
        class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:shadow-none lg:my-3"
      >
        <input
          type="text"
          name="address"
          v-model="formData.address"
          form="contact-form"
          placeholder="Full address"
          class="w-full custom-width py-1 text-center custom-border"
        />
      </div>
      <div class="relative w-full mx-auto my-4 font-source text-lg lg:shadow-none custom-border">

        <textarea
          rows="4"
          cols="30"
          name="message"
          v-model="formData.message"
          form="contact-form"
          placeholder="Message..."
          class="w-full py-1 text-left lg:custom-border"
        ></textarea>
      </div>

      <div class="w-full lg:text-right">
        <button 
          type="submit"
          class="px-16 py-2 font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full leading-normal shadow-md"
        >
          <span class="mdc-button__label">Send!</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact"
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
.star:before {
  content: "*";
  color: red;
  position: absolute;
  top: 0px;
  left: 2px;
}

.custom-border {
  border-radius: 5px;
  border: 1px solid #72298f;
}

@media (min-width: 320px) and (max-width: 768px) {
  .custom-m-width {
    width: 320px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .custom-m-width {
    width: 400px;
  }
}
@media (min-width: 1024px) {
  .custom-m-width {
    width: 500px;
  }
  .custom-opacity {
    background-color: rgba(256, 256, 256, 0.9);
  }
}
</style>
