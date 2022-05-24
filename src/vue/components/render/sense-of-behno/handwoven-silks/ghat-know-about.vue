<template>
  <!-- Section ghat Know Hero Start -->
  <section class="sec_ghat_know_about">
    <div class="big_container">
      <div class="main_contenet">
        <h2 class="sec_heading">{{ shopifyData.secHeading }}</h2>
        <h4 class="card_heading_b sec_inner_heading">
          {{ shopifyData.subHeading }}
        </h4>
        <p class="body_text" v-for="(item, index) in shopifyData.paragraph" :key="index">
          {{ item.paragraph }}
        </p>
       
      </div>
      <div class="sec_slider">
        <div class="sec_slider modify-slider">
          <swiper
            :navigation="true"
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
            <swiper-slide v-for="(item, index) in shopifyData.sliderImg" :key="index">
              <img
                :src=(item.imgUrl.src)
                :src-placeholder=(item.imgUrl.placeholder)
                :alt=(item.imgUrl.alt)
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>


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
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>
.swiper{
  padding: 0 55px;
}
.back_sense_behno{
  margin: 85px  auto 0;
} 
.sec_ghat_know_about {
  padding: 45px 0 126px;
  
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
.sec_ghat_know_about + .back_sense_behno{
    margin: 0 auto 85px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_ghat_know_about {
    padding: 36px 0 80px;
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
  .back_sense_behno{
    margin-top: 65px;
  }
}

@media screen and (max-width: 767px) {
  .sec_ghat_know_about{
    padding: 24px 0 56px;
  }
  .main_contenet {
    margin-bottom: 22px;
  }
  .subtitle{
    margin: 12px 0 0 10px;
  }
  .big_container{
    padding: 0;
  }
  .swiper{
    padding: 0 36px;
  }
}
</style>

<style >
@media screen and (max-width:767px) {
  .sec_ghat_know_about .swiper-button-prev{
    left: 0;
    transform: translateY(0);
  }
  .sec_ghat_know_about .swiper-button-next{
    right: 0; 
    transform: translateY(0%) rotate(180deg);
  }
}

@media screen and (max-width:480px) {
  .sec_ghat_know_about .swiper-button-next,.sec_ghat_know_about .swiper-button-prev{
    display: block;
  }
}
</style>