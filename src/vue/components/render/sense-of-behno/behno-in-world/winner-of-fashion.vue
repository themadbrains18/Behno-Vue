<template>
  <!-- Garment Up-close Start -->
  <section class=" sec_winner_fashion">
    <div class="big_container">
      <div class="sec_content">
        <div class="sec_slider modify-slider">
          <swiper
            :navigation="true"
            :modules="modules"
            :centeredSlides="true" 
            :effect="'fade'"
            :spaceBetween="100"
            :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
            }"
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay,EffectFade} from "swiper";
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
  props:{
    shopifyData:{
      type:Object,
      required:true,
    }
  }
};
</script>

<style >
@media screen and (max-width: 767px) {
   .sec_winner_fashion .swiper-button-next {
    right: -5px !important;
  }
   .sec_winner_fashion .swiper-button-prev {
    left: -5px !important;
  }
  
}
</style>


<style scoped>
.sec_winner_fashion {
  padding: 120px 0 74px;
}
.sec_content{
    display: grid;
    grid-template-columns: 47.5% 47.5%;
    align-items: center;
    gap: 52px;
}
.sec_text{
    max-width: 453px;
    width: 100%;
    margin:  0 auto;
}

.swiper-slide img {
  width: 100%;
}
.sec_heading {
  line-height: 41px;
}
.card_heading_b{
    text-transform: initial;
    margin: 14px 0;
}
.body_text{
    line-height: 19px;
}
.swiper {
  padding: 0 55px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
    .sec_winner_fashion {
        padding: 80px 0 50px;
    }
    .sec_winner_fashion .big_container{
        padding: 0 ;
    }
    .sec_winner_fashion .sec_content{
        grid-template-columns: 100%;
    }
    .sec_slider{
        order: 1;
    }
    .sec_heading {
        margin-bottom: 25px;
    }
    .sec_text{
        max-width: 100%;
        padding: 0 20px;
    }
}

@media screen and (max-width: 767px) {
  .sec_winner_fashion {
        padding: 20px 0 36px;
    }
  .sec_heading {
    margin-bottom: 18px;
    text-align: start;
  }
  .swiper {
    padding: 0 30px;
  }
}
@media screen and (max-width: 480px) {
  .modify-slider .swiper-button-prev, .modify-slider .swiper-button-next{
    display: block !important;
  }
}

</style>