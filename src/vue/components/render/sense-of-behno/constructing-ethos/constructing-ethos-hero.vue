<template>
  <!-- Section Constructing Ethos Hero Start -->
  <section class="sec_Constructing_ethos_hero">
      <h2 class="card_heading_b">{{ shopifyData.preHeading }}</h2>
      <div class="main_contenet">
        <h2 class="sec_heading">{{ shopifyData.secHeading }}</h2>
        <h4 class="card_heading_b sec_inner_heading">{{ shopifyData.subHeading }}</h4>
          <p class="body_text" v-for="(value, key) in shopifyData.blockData" :key="key" >
              {{ value.para }}
          </p>
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
            <swiper-slide v-for="(value, key) in shopifyData.SlidedynamicData" :key="key">
              <img
                :src=(value.imgUrl.src)
                :src-placeholder=(value.imgUrl.placeholder)
                :alt=(value.imgUrl.alt)
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <p class="subtitle">
          {{ shopifyData.afterImageText}}
      </p>
  </section>
  <!-- Constructing Ethos Hero Start -->
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
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
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
  height: calc(100% - 100px);
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
