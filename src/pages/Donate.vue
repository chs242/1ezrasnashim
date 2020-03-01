<template>
    <Layout :show-logo="true">
        <DonateOptionsButtons />
        <DonateBillingForm />
        <DonateCC />
       
        
    </Layout>
</template>
 
<script>

  import DonateOptionsButtons from '~/components/Donations/DonateOptionsButtons.vue'
  import DonateBillingForm from '~/components/Donations/DonateBillingForm.vue'
  import DonateCC from '~/components/Donations/DonateCC.vue'

  export default{
    name: "Donate",
    components:{  
      DonateOptionsButtons,
      DonateBillingForm,
      DonateCC
  }
}
</script> 

<style scoped>
    .root-form{
        max-width: 800px;   
    }
</style>