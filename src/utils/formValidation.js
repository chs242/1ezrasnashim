export default {
  methods: {
    formComplete(formData) {
      const empty = /^\s*$/
      if (
        !formData.firstName || empty.test(formData.firstName) ||
        !formData.lastName || empty.test(formData.lastName) ||
        !formData.address || empty.test(formData.address) ||
        !formData.city || empty.test(formData.city) ||
        !formData.state || empty.test(formData.state) ||
        !formData.zip || empty.test(formData.zip) ||
        !formData.phone || empty.test(formData.phone) ||
        !this.validateEmail(formData.email)
      ) {
        return false
      }
      return true
    },
    validateEmail(email) {
      // StripeElement StripeElement--focus [hack against purge-css 🤪]
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
