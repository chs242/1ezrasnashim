<template>
<<<<<<< HEAD
    <Layout>
        <div>
            <DonateOptionsButtons />
            <DonateBillingForm />
            <DonateCC />
        </div>
        
    </Layout>
=======
  <Layout :show-logo="true">
    <DonateOptionsButtons />
    <DonateBillingForm />
    <DonateCC />
  </Layout>
>>>>>>> 0bce79500669f1b99952f5650dbcc4d5f1f2191a
</template>

<script>
import DonateOptionsButtons from "~/components/Donations/DonateOptionsButtons.vue";
import DonateBillingForm from "~/components/Donations/DonateBillingForm.vue";
import DonateCC from "~/components/Donations/DonateCC.vue";

export default {
  name: "Donate",
  components: {
    DonateOptionsButtons,
    DonateBillingForm,
    DonateCC
  }
};
</script>

<style scoped>
.root-form {
  max-width: 800px;
}
</style>
