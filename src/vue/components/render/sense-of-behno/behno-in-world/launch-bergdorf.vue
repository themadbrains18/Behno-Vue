<template>
  <!-- Garment Up-close Start -->
  <section class="sec_launch_bergdoft">
    <div class="big_container">
      <div class="sec_content">
        <div class="sec_slider modify-slider">
          <swiper
            :navigation="true"
            :modules="modules"
            :centered-slides="true"
            :effect="'fade'"
            :space-between="100"
            :autoplay="{
              delay: 1500,
              disableOnInteraction: false,
            }"
            :loop="true"

            class="mySwiper"
          >
            <swiper-slide
              v-for="(value, key) in shopifyData.slide"
              :key="key"
            >
              <img
                :src="value.imgUrl.src"
                :placeholder="value.imgUrl.placeholder"
                :alt="value.imgUrl.alt"
              >
            </swiper-slide>
          </swiper>
        </div>
        <!--    Section text        -->
        <div class="sec_text">
          <h2 class="sec_heading">
            {{ shopifyData.secHeading }}
          </h2>
          <h4 class="card_heading_b">
            {{ shopifyData.secSubHeading }}
          </h4>
          <p class="body_text">
            {{ shopifyData.secInfo }}
          </p>
        </div>
      </div>
    </div> 
  </section>
  <!-- Garment Up-close End -->
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props:{
    shopifyData:{
        type:Object,
        required:true,
    }
  },
  setup() {
    return {
      modules: [Navigation,Autoplay]
    };
  } 
};
</script>

<style>
.sec_launch_bergdoft .modify-slider .swiper-button-next{
  background-color: transparent !important;
}

/* Responsive Breakpoints */
@media screen and (max-width: 767px) {
  .sec_launch_bergdoft .swiper-button-next {
    right: -5px !important;
    transform: rotate(180deg);
  }
  .sec_launch_bergdoft .swiper-button-prev {
    left: -5px !important;
    transform:none;
  }
}
@media screen and (max-width: 480px) {
.sec_launch_bergdoft .swiper-button-prev,.sec_launch_bergdoft .swiper-button-next{
    display: block!important;
}
}
</style>


<style scoped>
.sec_launch_bergdoft {
  padding: 136px 0 0px;
}
.sec_content {
  display: grid;
  grid-template-columns: 47.5% 47.5%;
  align-items: center;
  gap: 32px;
}
.sec_text {
  max-width: 577px;
  width: 100%;
  margin: 0 auto;
}

.swiper-slide img {
  width: 100%;
}
.sec_heading {
  line-height: 41px;
}
.card_heading_b {
  text-transform: initial;
  margin: 14px 0;
}
.body_text {
  line-height: 19px;
}
.swiper {
  padding: 0 55px;
}


/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_launch_bergdoft {
    padding: 80px 0 20px;
  }
  .sec_launch_bergdoft .big_container {
    padding: 0;
  }
  .sec_launch_bergdoft .sec_content {
    grid-template-columns: 100%;
  }
  .sec_slider {
    order: 1;
  }
  .sec_heading {
    margin-bottom: 25px;
  }
  .sec_text {
    max-width: 100%;
    padding: 0 25px;
  }
 
}

@media screen and (max-width: 767px) {
  .sec_launch_bergdoft {
    padding-top: 20px ;
  }
  .sec_heading {
    margin-bottom: 18px;
    text-align: start;
  }
  .swiper {
    padding: 0 30px;
  }
  .sec_launch_bergdoft .swiper-button-prev{
    display: block!important;
  }
}

</style>
