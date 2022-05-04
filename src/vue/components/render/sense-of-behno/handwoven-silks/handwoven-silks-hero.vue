<template>
  <!-- Section Constructing Ethos Hero Start -->
  <section class="sec_handwoven_hero">
          <h2 class="card_heading_b">HANDWOVEN SILKS</h2>
        <div class="container">
          <div class="main_contenet">
        <h2 class="sec_heading">A homeworker economy hard at work.</h2>
        <h4
          class="card_heading_b sec_inner_heading"
        >In 2019, our founder, Shivam Punjya, visited Loom to Luxury in Varanasi, India for the first time.</h4>
        <p class="body_text">
            Varanasi, the spiritual capital of India, also grew to become an important epicenter for handwoven silk and fine muslin textiles. Loom to Luxury, a critical player in this world of weavers, facilitates a dialogue between a modernizing world and a heritage craft, where handweaving communities date back a millennia.
        </p>        
        <p class="body_text">
        In Varanasi, Shivam met with artisans and their families in their creative, technical, and meticulous spaces as they kept alive certain traditional techniques over 500-years-old. He observed a bustling homeworker economy in these villages preserving a basic necessity with their hands – to clothe ourselves.
        </p>       
        <p class="body_text">
        Loom to Luxury also has a significant partnership with NEST, a nonprofit organization building a new handworker economy to increase global workforce inclusivity, improve women’s wellbeing beyond factories, and safeguard important cultural traditions.
        </p>       
          </div>
      </div>
      <div class="sec_img">
          <img src="https://i.shgcdn.com/f4b6b131-9e9e-47a5-be67-9f5d4c914bf2/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">
      </div>
      <p class="subtitle">
          LOOM TO LUXURY. VARANASI, INDIA.
      </p>
  </section>
  <!-- Constructing Ethos Hero Start -->
</template>

<style scoped>
.sec_handwoven_hero {
  padding-top: 45px;
  position: relative;
}
.sec_handwoven_hero::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height:calc(100% - 30px);
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E9E7E3 100%);
  z-index: -1;
}
.card_heading_b {
  margin-bottom: 72px;
  text-align: center;
  text-transform: initial;
}
.card_heading_b.sec_inner_heading {
  margin: 14px 0;
  text-align: start;
}
.subtitle{
    margin: 6px 0 0 18px;
}

.sec_video iframe {
  width: 100%;
  height: 715px;
}
.sec_heading {
  line-height: 44px;
}
.main_contenet {
  max-width: 716px;
  margin: 0 auto 83px auto;
  width: 100%;
  
}

.sec_content {
  display: grid;
  grid-template-columns: 28% 64%;
  align-items: center;
  margin-top: 34px;
  gap: 30px;
}

.body_text {
  line-height: 19px;
  margin-bottom: 20px;
}
.body_text:last-child {
  margin-bottom: 0px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_handwoven_hero {
    padding-top: 55px;
  }
  .main_contenet {
    padding: 0 20px;
    margin-bottom: 35px;
  }
  .card_heading_b {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 767px) {
  .main_contenet {
    margin-bottom: 25px;
  }
  .subtitle{
    margin: 6px 0 0 10px;
}
}
</style>



