<template>
  <!-- Section Constructing Ethos Hero Start -->
  <section class="sec_Constructing_ethos_hero">
      <h2 class="card_heading_b">BEHNO IN THE WORLD</h2>
      <div class="main_contenet">
        <h2 class="sec_heading">Envisioning manufacturing to be radically different.</h2>
        <h4
          class="card_heading_b sec_inner_heading"
        >Our founder, Shivam Punjya, created a space where garment workers, artisans, and factories were an intimate part of a brand’s core DNA.</h4>
        <p
          class="body_text"
        >Ensuring garment workers and artisans have a safe working space should be the norm. But it isn’t.</p>
        <p
          class="body_text"
        >“The behno Standard” was crafted after a deep dive into academia, time spent in the field, and having worked closely with various stakeholders at the back-end of fashion’s supply chain.</p>
        <p
          class="body_text"
        >To take “The behno Standard” from theory to reality, Shivam partnered with nonprofit Muni Seva Ashram (MSA) and an industry veteran, Mukesh Kothari, to build a factory called MSA Ethos.</p>
        <p
          class="body_text"
        >MSA Ethos is a revolutionary, intersectional approach to manufacturing where MSA assisted in its social programming and Mr. Kothari, its Managing Director, overlooked factory operations ensuring quality control and a smooth functioning of operations.</p>
      </div>
      <div class="sec_slider">
        <div class="sec_slider modify-slider">
          <swiper
            :navigation="false"
            :modules="modules"
            :centeredSlides="true"
            :spaceBetween="100"
            :loop="true"
            :effect="'fade'"
            :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
            }"
            class="mySwiper"
          >
            <swiper-slide>
              <img
                src="https://i.shgcdn.com/0a9750dc-b99f-4175-93ce-098db2f1087a/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="Image-description"
              />
            </swiper-slide>

            <swiper-slide>
              <img
                src="https://i.shgcdn.com/854b8dff-0834-4e98-b579-5fa4625c9993/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="Image-description"
              />
            </swiper-slide>
        
          </swiper>
        </div>
      </div>
      <p class="subtitle">
          MSA ETHOS. GUJARAT, INDIA.
      </p>
  </section>
  <!-- Constructing Ethos Hero Start -->
</template>

// Slider Script
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay,EffectFade } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation,Autoplay,EffectFade]
    };
  }
};
</script>

// Section Css COde
<style scoped>
.sec_Constructing_ethos_hero {
  padding-top: 45px;
  position: relative;
}
.sec_Constructing_ethos_hero::after{
  content: "";
  position: absolute;
  top: 45px;
  left: 0;
  height: 510px;
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E9E7E3 100%);
  z-index: -1;
}
.card_heading_b {
  margin-bottom: 62px;
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
  max-width: 665px;
  margin: 0 auto 61px auto;
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
.sec_img {
  margin-top: 75px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_Constructing_ethos_hero {
    padding-top: 36px;
  }
  .main_contenet {
    padding: 0 20px;
    margin-bottom: 35px;
  }
  .sec_img {
    margin-top: 5px;
  }
  .card_heading_b {
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 767px) {
  .main_contenet {
    margin-bottom: 22px;
  }
  .subtitle{
    margin: 12px 0 0 10px;
}
}
</style>



