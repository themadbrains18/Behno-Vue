<template>
  <!-- Section Garment Grid Slider Start -->
  <section class="sec_garment_grid_slider">
    <div class="big_container">
      <div class="sec_content">
        <swiper
          :navigation="true"
          :effect="'fade'"
          :autoplay="{
          delay: 1500,
          disableOnInteraction: false
          }"
          :modules="modules"
          :breakpoints="{
            '@1.00': {
              enabled: true
            },
            '@1.40': {
              enabled: false
            }
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="(item, index) in shopifyData.box" :key="index">
            <a :href=(item.link) class="slider_img">
              <img
                :src=(item.image)
                :alt=(item.imagealt)
              />
              <span class="employee_name">{{item.text}}</span>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <!-- Section Garment Grid Slider End -->
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Navigation,Autoplay } from "swiper";

export default {
   
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation,Autoplay],
    };
  },
};
</script>

<style >
.sec_garment_grid_slider {
  margin-top: 14px;
}
.sec_garment_grid_slider .slider_img {
  position: relative;
}
.sec_garment_grid_slider .swiper-slide img {
  width: 100%;
  height: 100%;
}

.slider_img{
  display: block;
  position: relative;
}

@media (hover: hover) {
  .slider_img:hover .employee_name{
      visibility: visible;
      transform: translate(-50% ,0px);
      opacity: 1;
  }
}

.employee_name{
  position: absolute;
  bottom: 130px;
  left: 50%;
  transform: translate(-50% ,20px);
  opacity: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  visibility: hidden;
  letter-spacing: 0.2px;
  transition: 0.3s;
}

.sec_garment_grid_slider .swiper-button-next:after,
.sec_garment_grid_slider .swiper-button-prev:after {
  font-size: 17px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  color: #000;
}
.sec_garment_grid_slider .swiper-button-next:after {
  padding: 7.5px 10.86px 7.5px 12.57px;
}

.sec_garment_grid_slider .swiper-button-prev:after {
  padding: 7.5px 12.57px 7.5px 10.86px;
}
/* Responsive Css Code */
@media screen and (min-width: 767px) {
  .sec_garment_grid_slider .swiper-slide {
    width: 100% !important;
  }
  .sec_garment_grid_slider .swiper-wrapper {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4px;
  }
}
@media screen and (max-width: 767px) {
  .sec_garment_grid_slider .big_container {
    padding: 0;
  }
}
</style>