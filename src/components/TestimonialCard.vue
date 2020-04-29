<template>

    <!-- this component has been adapted from https://codepen.io/rachelandrew/pen/QKwvxJ -->

  <div class="min-h-screen py-32 bg-gray-100">

    <div class=" w-4/5 mx-auto flex flex-row justify-center font-roboto text-lg text-pink-800 md:pb-6 lg:pb-12">
      <div
        class="bg-pink-100 border border-pink-300 rounded-full rounded-r-none" 
        :class="{'bg-pink-600 text-white': decoratedPatient}">
        <TestimonialButton
          class="py-1 px-6 md:py-4" 
          @click="patientReviews">Patient Reviews
        </TestimonialButton>
      </div>
      <div 
        class="bg-pink-100 border border-pink-300 rounded-full rounded-l-none"
        :class="{'bg-pink-600 text-white': decoratedFan}">
        <TestimonialButton
          class="py-1 px-8 md:py-4"
          @click="fanReviews">Fan Reviews
        </TestimonialButton>
      </div>
    </div>

    <div class="wrapper" key="1" v-show="step == 1">
      
      <div class="home-hero second-batch">
        <TestimonialReview class="devoiry lg:rounded-xl"
          review="I needed a trained woman to look me in the eye and tell me, you're ok, you can do this, we are here for you... It feels so good to know there are are woman who have the good fortune of being able to count on other woman when they need it the most!"
          name="Devoiry P"
        />

        <TestimonialReview class="moshe lg:rounded-xl"
          review="I have no words to thank you for being there for me in my most vulnarable time in my life."
          newline="there was absolutely no way i would allow men to see me and treat me in this state."
          name="Ezras Nashim volunteers came within minutes and kept me calm and took care of me in the most proffesional manner. May you all be gebentched."
          location="Haddasah"
        />
        <TestimonialReview class="yiddish lg:rounded-xl"
          review="I had always been of the opininon Ezras Nashim is an organization of great importance, but one cannot compare hearing to seeing. After seeing firsthand the care with which they treated my wife I've become their biggest supporter!"
          newline="The presence of a caring and professional woman during such a frightening and emotional time was both reassuring and calming for my wife. I'm so grateful to this wonderful organization for continuing to persevere and help woman."
          name="Mendel lowy"
          location="(Translated from Yiddish)"
        />

        <TestimonialReview class="tzippy lg:rounded-xl"
          review="Thank you Ezras Nashim for providing my mother with oxygen this past shabbos; it saved her life! Thank you for being so calm and reassuring during these challenging and turbulant times."
          name="With much appreciation"
          location="Tzippy"
        />
        <TestimonialReview class="chany lg:rounded-xl"
          review="I want to take the opportunity to express my appreciation and admiration for the amazing work you do. Last week when we needed your assisitence you really came through. Your response time was quick and your volunteers were professional and kind. As soon as she arrived we were put at ease and she was there with us as long as we needed her"
          newline="B'h we made it to the hospital in time but we felt calm knowing competent help was there if neccesary."
          name="May HKB'H repay you for your kindness and benth you with much hatzlacha."
          location="Chany"
        />

        <TestimonialReview class="elisheva lg:rounded-xl"
          review="Thank you for giving new opportunities for women; thank you for making the world a better place to live for women. Thank you for making us proud to be religious women. Keep going."
          name="Elicheva M."
        />
        
      </div>
    </div>


    <div class="wrapper" key="2" v-show="step == 2">
      <div class="home-hero">
        <TestimonialReview class="feature lg:rounded-xl"
          review="Tonight I have watched a report on German television about “Rachels EMS” and I want to tell you that I am proud of what you established for the female community in Brooklyn.  I myself am a paramedic, have worked in EMS near my husband’s hometown in Michigan, and am now continuing my career in Germany (where I am from and where my husband and I got settled)."
          newline="When I first started in EMS in 2003 there were only a few women in EMS and I often had to listen to silly arguments about why women should not be doing this type of work. I am happy that a lot of women did not believe these lies and actually became EMS professionals because I believe women do belong in all parts of the health care field. We are able to make a difference in people’s lives,  just like our male colleagues. 
          Thank you for your service!"
          name="Carolin B."
          location="Germany"          
        />

        <TestimonialReview class="special lg:rounded-xl"
          review="I live in Boulogne Billancourt, France. Just to send you my greeting from Paris. Bravo! Mazal tov for your strength and determination as women. Please do not give up. You are amazing and perfect. Go ahead and do not look back. We are proud of you.
          I felt so proud to see your victory despite all the difficulties you faced in your community. I am proud to see that you are able to be mothers, but also women and able to do the same that men. You are so intelligent, strong, sensitive, and beautiful in your fight. You won all together, and despite all. I am a mother and a woman; I am Jewish and so proud to be."
          name="Marie M."
          location="Paris, France"
        />
      
         <TestimonialReview class="amazing lg:rounded-xl"
          review="Hello, my name is Sophie. I am French, I am 49 years old, mother of a boy of 19, and I am neither Jewish nor religious. I just watched the documentary film “93Queen” and I want to congratulate your entire team for your perseverance and determination. Congratulations to all the women of Ezras Nashim!"
          name="Sophie G."
        />

        <TestimonialReview class="news lg:rounded-xl"
          review="I just want to congratulate you for your energy shared to help the other from France. I’m sure you will succeed."
          name="Boublil N."
          location="France" 
        />

        <TestimonialReview class="photos lg:rounded-xl"
          review="You Rock! I just saw your documentary and you all deeply inspired me. Thank you."
          name="Annabelle F."
        />

        <TestimonialReview class="cta lg:rounded-xl"
          review="Hello and Shalom from Berlin. As a German Jew, I have seen on ARTE TV a documentary about your wonderful organization and your so great efforts to create this. 
          I wish you only the best for the future."
          name="Werner R."
          location="Berlin, Germany"
        />
      </div>

      <div class="home-hero second-batch">
        
        <TestimonialReview class="special-2 lg:rounded-xl"
          review="Hello, I’ve just seen a documentary on your organization and I couldn’t hold myself sending those few words of support. Your bravery, as a group, and kindness are examples for many."
          name="Tamboura"
          location="France"
        />

        <TestimonialReview class="fantastic-2 lg:rounded-xl"
          review="Hello, we saw on ARTE TV the 93 Queen film. Congratulations, you have all my support. Baruch Hashem. Thanks to women Machiach will come."
          name="Moshe T."
          location="Villeurbanne, France"
        />

        <TestimonialReview class="amazing-2 lg:rounded-xl"
          review="I am currently watching a documentary that addresses you. I just wanted to say that I think it’s great what you’ve done, despite all the resistance. That should be an inspiration to us all. Greetings from Germany."
          name="Meike"
          location="Germany"
        />

        <TestimonialReview class="news-2 lg:rounded-xl"
          review="I am from Germany and I am also a paramedic. I saw your organization on ARTE TV and I want to tell you that you make a great job. I like your idea to make an ambulance service just for women, great! Wish that idea/service comes to Germany too!"
          name="Stephanie W."
          location="Germany"
        />
          
        <TestimonialReview class="photos-2 lg:rounded-xl"
          review="I just saw a documentary on German TV about your service. I’m not Jewish nor religious, but thumbs up — go on Ladys!"
          name="Yvonne I."
          location="Northern Germany"
        />

        <TestimonialReview class="cta-2 lg:rounded-xl"
          review="Thank you for giving new opportunities for women; thank you for making the world a better place to live for women. Thank you for making us proud to be religious women. Keep going."
          name="Elicheva M."
          location="France"
        />
        
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialButton from "~/components/UI/TestimonialButton";
import TestimonialReview from "~/components/TestimonialReview";
export default {
  data(){
    return{
      step: 1,
      decoratedPatient: true,
      decoratedFan: false,

    }
  },
  components:{
    TestimonialButton,
    TestimonialReview
  },
  methods:{
    patientReviews(){
      this.step = 1;
      this.decoratedPatient = true;
      this.decoratedFan = false;
      console.log(this.step)
    },
    fanReviews(){
      this.step = 2;
      this.decoratedFan = true
      this.decoratedPatient = false;
      console.log(this.step)
    },
  }
}
</script>

<style scoped>
.custom-bg{
  background-color: #d9d9d9;
}
.second-batch{
  margin-top: 7px;
}
h3 {
  margin: 0;
}

.wrapper {
  width: 90%;
  max-width: 940px;
  margin: 20px auto;
  font-weight: bold;
}

.home-hero {
  display: grid;
  grid-gap: 7px;
  grid-auto-rows: minmax(150px, auto);
}

.home-hero > * {
  padding: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #333;
  color: #fff;
}

.feature, .photos, .photos-2, .news, .news-2, .special, .special-2, .amazing, .amazing-2, .cta, .cta-2, .fantastic-2, .devoiry, .moshe, .yiddish, .tzippy, .chany, .elisheva {
  background-image: linear-gradient(rgba(114,41,143,.8), rgba(0,0,0,0.9)), url("../assets/images/logo.png"); 
   background-position: center;
  background-repeat: no-repeat; 
  background-size: contain;
  color: #fff;
}

@media (min-width: 500px) {
  .home-hero {
    grid-template-columns: 1fr 1fr;
  }
  
  .feature {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  
  .special {
    grid-column: 1;
    grid-row: 3 / 6;
  }
  .amazing {
    grid-column: 1;
    grid-row: 6;
  }
  .cta {
    grid-column: 2;
    grid-row: 5 / 7;
  }
  
  .special-2 {
    grid-column: 2;
    grid-row: 2 / 4;
  }
  .amazing-2 {
    grid-column: 2;
    grid-row: 4 / 6;
  }
  .cta-2 {
    grid-column: 1;
    grid-row: 3 / 6;
  }
  .yiddish {
    grid-column: 1;
    grid-row: 2 / 4;
  }
  .moshe {
    grid-column: 1;
    grid-row: 4;
  }
  .devoiry {
    grid-column: 2;
    grid-row: 4 / 5;
  }
  
  .chany {
    grid-column: 2;
    grid-row: 1 / 3;
  }
  .tzippy {
    grid-column: 2;
    grid-row: 3 / 4;
  }
  .elisheva {
    grid-column: 1;
    grid-row: 1 / 2;
  }
}

@media (min-width: 800px) {
   .home-hero {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: minmax(150px, auto) minmax(150px, auto);
    grid-auto-rows: minmax(100px, auto);
  }
  .feature {
    grid-column: 1 ;    
    grid-row: 1 / 6;
  }
  
  .special {
    grid-column: 2;
    grid-row: 1 / 4;
  }
  .amazing {
    grid-column: 2;
    grid-row: 4 / 6;
  }
  .cta {
    grid-column: 3;
    grid-row: 3 / 6;
  }
  .feature-2 {
    grid-column: 1 ;
    grid-row: 1 / 3;
  }
  
  .special-2 {
    grid-column: 2;
    grid-row: 1 / 2;
  }
  .fantastic-2 {
    grid-column: 2;
    grid-row: 2 / 4;
  }
  .amazing-2 {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  .photos-2{
    grid-column: 1;
    grid-row: 3 / 4;
  }
  .news-2 {
    grid-column: 3;
    grid-row: 1 / 3;
  }
  .cta-2 {
    grid-column: 3;
    grid-row: 3 / 4;
  }
  .devoiry {
    grid-column: 2;
    grid-row: 1 / 2;
  }
  .moshe {
    grid-column: 2;
    grid-row: 2 / 6;
  }
  .yiddish {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  .tzippy{
    grid-column: 1;
    grid-row: 3 / 6;
  }
  .chany {
    grid-column: 3;
    grid-row: 1 / 4;
  }
  .elisheva {
    grid-column: 3;
    grid-row: 4 / 6;
  }
}
</style>
