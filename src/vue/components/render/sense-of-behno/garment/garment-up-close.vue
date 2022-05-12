<template>
  <!-- Garment Up-close Start -->
  <section class="sec_up_close">
    <div class="big_container">
      <div class="sec_content modify-slider">
        <h2 class="sec_heading">
          {{ shopifyData.secHeading }}
        </h2>
        <swiper
          :navigation="true"
          :effect="'fade'"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          :centeredSlides="true"
          :spaceBetween="100"
          :loop="true"
          class="mySwiper"
        >
          <swiper-slide v-for="(value, key) in shopifyData.Slide" :key="key">
            <img
              :src="value.imgUrl.src"
              :src-placeholder="value.imgUrl.placeholder"
              :alt="value.imgUrl.alt"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <!-- Garment Up-close End -->
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, Autoplay, EffectFade } from "swiper";
export default {
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay, EffectFade],
    };
  },
};
</script>

<style >
@media screen and (max-width: 767px) {
  .sec_up_close .swiper-button-next {
    right: -5px !important;
  }
  .sec_up_close .swiper-button-prev {
    left: -5px !important;
  }
}
</style>


<style scoped>
.swiper-slide img {
  width: 100%;
}
.sec_up_close {
  padding: 74px 0 74px;
}
.sec_heading {
  font-weight: 400;
  text-align: center;
  margin-bottom: 30px;
}
.swiper {
  padding: 0 55px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_up_close {
    padding: 60px 0 60px;
  }
  .sec_heading {
    margin-bottom: 25px;
  }
}

@media screen and (max-width: 767px) {
  .sec_up_close {
    padding: 47px 0 40px;
  }
  .sec_up_close .big_container {
    padding: 0 13px;
  }
  .sec_heading {
    margin-bottom: 18px;
    text-align: start;
  }
  .swiper {
    padding: 0 22px;
  }
}
</style>