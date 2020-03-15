<template>
    <Layout>
       <img src="../assets/images/contact-tab/world-map.png" alt="" class="hidden md:block mx-auto">
       <div id="contact-page" class="w-full py-2 lg:flex md:absolute">
           <ContactPhone></ContactPhone>
           <ContactForm></ContactForm>
       </div>
    </Layout>
</template>

<script>
import ContactPhone from "~/components/ContactPhone"
import ContactForm from "~/components/ContactForm"
export default {
    components:{
        ContactPhone,
        ContactForm
    }
}
</script>

<style scoped>
    img{
      filter: hue-rotate(65deg) opacity(40%); 
      transform: scale(1.1);
      margin-top: 5%
    }
    #contact-page{
        top: 25%;
    }
@media (min-width: 768px) and (max-width: 1024px){
    img{
      margin-top: 45%;
      transform: scale(0.9);
    }
    #contact-page{
        top: 5%;
    }
} 
</style>