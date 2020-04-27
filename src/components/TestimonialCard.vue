<template>

    <!-- this component has been adapted from https://codepen.io/rachelandrew/pen/QKwvxJ -->

  <div class="min-h-screen py-24 bg-gray-100">
    <div class="wrapper">
      <div class="home-hero">
        <div class="feature lg:rounded-xl">
          <p>Tonight I have watched a report on German television about “Rachels EMS” and I want to tell you that I am proud of what you established for the female community in Brooklyn.  I myself am a paramedic, have worked in EMS near my husband’s hometown in Michigan, and am now continuing my career in Germany (where I am from and where my husband and I got settled).
            <br><br>When I first started in EMS in 2003 there were only a few women in EMS and I often had to listen to silly arguments about why women should not be doing this type of work. I am happy that a lot of women did not believe these lies and actually became EMS professionals because I believe women do belong in all parts of the health care field. We are able to make a difference in people’s lives,  just like our male colleagues. 
            <br><br>Thank you for your service!
            <br><br>Carolin B.
            <br><br>Germany
          </p>
        </div>
        <div class="special lg:rounded-xl">
        <p>I live in Boulogne Billancourt, France. Just to send you my greeting from Paris. Bravo! Mazal tov for your strength and determination as women. Please do not give up. You are amazing and perfect. Go ahead and do not look back. We are proud of you.
          <br><br>I felt so proud to see your victory despite all the difficulties you faced in your community. I am proud to see that you are able to be mothers, but also women and able to do the same that men. You are so intelligent, strong, sensitive, and beautiful in your fight. You won all together, and despite all. I am a mother and a woman; I am Jewish and so proud to be.
          <br><br>Marie M.
          <br><br>Paris, France
        </p>

        </div>
        <div class="amazing lg:rounded-xl">
          <p>Hello, my name is Sophie. I am French, I am 49 years old, mother of a boy of 19, and I am neither Jewish nor religious. I just watched the documentary film “93Queen” and I want to congratulate your entire team for your perseverance and determination. Congratulations to all the women of Ezras Nashim!
            <br><br>Sophie G.
          </p>
        </div>

        <div class="news lg:rounded-xl">
          <p>I just want to congratulate you for your energy shared to help the other from France. I’m sure you will succeed.
            <br><br>Boublil N.
            <br><br>France 
          </p>

        </div>
        <div class="photos lg:rounded-xl">
          <p>You Rock! I just saw your documentary and you all deeply inspired me. Thank you.
            <br><br>Annabelle F.
          </p>
        </div>

        <div class="cta lg:rounded-xl">
          <p>Hello and Shalom from Berlin. As a German Jew, I have seen on ARTE TV a documentary about your wonderful organization and your so great efforts to create this. 
            <br><br>I wish you only the best for the future. 
            <br><br>Werner R.
            <br><br>Berlin, Germany
          </p>
        </div>
        
      

      </div>
      <div class="home-hero second-batch">
        
        <div class="special-2 lg:rounded-xl">
        <p>Hello, I’ve just seen a documentary on your organization and I couldn’t hold myself sending those few words of support. Your bravery, as a group, and kindness are examples for many.
          <br><br>Tamboura
          <br><br>France
        </p>

        </div>
        <div class="fantastic-2 lg:rounded-xl">
        <p>Hello, we saw on ARTE TV the 93 Queen film. Congratulations, you have all my support. Baruch Hashem. Thanks to women Machiach will come.
          <br><br>Moshe T.
          <br><br>Villeurbanne, France
        </p>

        </div>
        <div class="amazing-2 lg:rounded-xl">
          <p>I am currently watching a documentary that addresses you. I just wanted to say that I think it’s great what you’ve done, despite all the resistance. That should be an inspiration to us all. Greetings from Germany.
            <br><br>Meike
            <br><br>Germany
          </p>
        </div>

        <div class="news-2 lg:rounded-xl">
          <p>I am from Germany and I am also a paramedic. I saw your organization on ARTE TV and I want to tell you that you make a great job. I like your idea to make an ambulance service just for women, great! Wish that idea/service comes to Germany too!
            <br><br>Stephanie W.
            <br><br>Germany 
          </p>

        </div>
        <div class="photos-2 lg:rounded-xl">
          <p>I just saw a documentary on German TV about your service. I’m not Jewish nor religious, but thumbs up — go on Ladys!
            <br><br>Yvonne I.
            <br><br>Northern Germany
          </p>
        </div>

        <div class="cta-2 lg:rounded-xl">
          <p>Thank you for giving new opportunities for women; thank you for making the world a better place to live for women. Thank you for making us proud to be religious women. Keep going.
            <br><br>Elicheva M.
            <br><br>France
          </p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.feature, .photos, .photos-2, .news, .news-2, .special, .special-2, .amazing, .amazing-2, .cta, .cta-2, .fantastic-2 {
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
  
  /* .feature-2 {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  } */
  
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

  /* .wonderful-2{
    grid-column: 1 ;
    grid-row: 3 / 6; 
  } */
  
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
}
</style>
