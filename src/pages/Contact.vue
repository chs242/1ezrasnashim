<template>
    <Layout>
        <div class="lg:min-h-screen">
       <img src="../assets/images/contact-tab/world-map.png" alt="" class="hidden md:block mx-auto md-custom-margin">
       <div id="contact-page" class="w-full py-2 lg:flex md:absolute">
           <ContactPhone></ContactPhone>
           <ContactForm></ContactForm>
       </div>
       </div>
    </Layout>
</template>

<script>
import ContactPhone from "~/components/ContactPhone"
import ContactForm from "~/components/ContactForm"
export default {
    metaInfo: {
    title: "Contact",
    meta: [
        {name: 'description', content: 'For the past five decades, Jewish women have been given only two sub-par options in emergency care: be treated by men in their immediate community, resulting in a very uncomfortable situation that threatens their Tznius or turn outside the community for assistance. Inspired by our ancestral midwives, Shifrah and Pooah, it is time for Bnos Yisroel to reclaim our role as healers and midwives for our mothers, daughters, sisters and fellow woman. B’Zchus Nashim Tzidkaniyos, we invite you to become our partners.'}
      ],
      link: [
        {rel: 'canonical', href: 'https://ezrasnashim.org/contact/'}
      ]
  },
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
    .md-custom-margin{
        margin-bottom: 25rem;
    }
} 

</style>