<template>
    <div class="px-2 my-4 lg:my-0 lg:w-3/5">
        <form name="contact-form" id="text-form" class="bg-white py-8 px-8 mx-auto shadow-md text-center rounded-xl md:mx-auto lg:py-12 lg:flex lg:flex-wrap lg:justify-center lg:mx-0 custom-m-width custom-opacity">
                    
            <div class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-3">
                <input type="text" id="name" name="name" placeholder="Name" class="w-full custom-width py-1 text-center custom-border">
            </div>
            <div class="hidden relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:my-1 lg:pt-1 lg:inline-flex lg:w-1/2 lg:shadow-none lg:my-3">
                <img src="../assets/images/contact-tab/phone-icon.png" alt="" class="h-8 mx-2">
                <h5 class="w-full py-1 font-source text-left text-sm font-bold text-pink-600">718-232-1304</h5>
            </div>

            <div class="star relative w-full my-4 mx-auto lg:text-right font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-3">
                <input type="text" id="subject" name="subject" placeholder="Subject" class="w-full custom-width py-1 text-center custom-border">
            </div>
            <div class="hidden relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:inline-flex lg:w-1/2 lg:shadow-none lg:my-3">
                <img src="../assets/images/contact-tab/email-icon.png" alt="" class="h-8 mx-2">
                <h5 class="w-full py-1 font-source text-left text-sm font-bold text-pink-600">leah@ezrasnashim.org</h5>
            </div>

            <div class="star relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:w-1/2 lg:shadow-none lg:my-3">
                <input type="email" id="email" name="email" placeholder="Email" class="w-full custom-width py-1 text-center custom-border">
            </div>

            <div class="hidden relative w-full my-4 mx-auto lg:text-left font-source text-lg shadow-md lg:inline-flex lg:w-1/2 lg:shadow-none lg:my-3">
                <img src="../assets/images/contact-tab/register-icon.png" alt="" class="h-8 mx-2">
                <h5 class="w-full py-1 font-source text-left text-sm font-bold text-pink-600">Register</h5>
            </div>


            <div class="relative w-full mx-auto my-4 font-source text-lg lg:shadow-none custom-border">
                <textarea  rows="4" cols="30" name="message" form="contact-form" placeholder="Message..." class="w-full py-1 text-left lg:custom-border"></textarea>
            </div>

            <div class="w-full lg:text-right">
                <input type="submit" value="Submit" class="px-16 py-2 font-roboto text-base font-semibold text-white hover:text-pink-600 bg-pink-600 hover:bg-white border-2 border-pink-600 rounded-full leading-normal shadow-md">
            </div>
        </form>
    </div>
</template>

<style scoped>
    .star:before{
        content: "*";
        color: red;
        position: absolute;
        top: 0px;
        left: 2px;
    }

    .custom-border{
        border-radius: 5px;
        border: 1px solid #72298f;
    }

@media (min-width: 320px) and (max-width: 768px) {
  .custom-m-width{
      width: 320px
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .custom-m-width{
      width: 400px
  }
}
@media (min-width: 1024px) {
  .custom-m-width{
      width: 500px
  }
  .custom-opacity{
      background-color: rgba(256,256,256,.9);
  }
}
</style>