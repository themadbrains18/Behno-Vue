<template>
  <!-- section lives weavers Start -->
  <section class="sec_lives__weavers">
    <div class="big_container">
    
      <div class="sec_header">
        <h2 class="quotes_text">
          “IF YOU LOOK CLOSELY, THE TEXTILES ARE TELLING OF THE LIVES OF THE WEAVERS.”
        </h2>
      </div>
      <div class="sec_content modify-slider">
        <swiper
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :navigation="true"
          :modules="modules"
          :centeredSlides="true"
          :spaceBetween="100"
          :loop="true"
          :effect="'fade'"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="mySwiper"
        >
          <swiper-slide>
            <img
              src="https://i.shgcdn.com/416858e0-5807-4691-a113-31d6092cdc6a/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt="Image-description"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://i.shgcdn.com/8309a6f2-9260-417d-ab02-3661aac56fbb/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt="Image-description"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://i.shgcdn.com/44a045d2-20fc-40df-bd1b-9c3e6d0c2f65/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt="Image-description"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <!-- section lives weavers End -->
</template>
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper =  (swiper) => {
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation ],
      };
  }
};
</script>

<style >
@media screen and (max-width: 767px) {
  .sec_lives__weavers .swiper-button-next {
    right: -5px !important;
  }
  .sec_lives__weavers .swiper-button-prev {
    left: -5px !important;
  }
}
@media screen and (max-width: 480px) {
  .sec_lives__weavers .modify-slider .swiper-button-prev,
  .sec_lives__weavers .modify-slider .swiper-button-next {
    display: block;
  }
}
</style>

<style scoped>
.sec_lives__weavers{
    padding: 34px 0 86px;
}
.sec_lives__weavers .big_container{
    padding:  0 17px;
}
.quotes_text {
  color: #ef0000;
}
.sec_header{
    margin: 85px 0;    
    padding: 0 16px;
}
.body_text:last-of-type {
  margin-bottom: 0px;
}
.text_inner_img {
  max-width: 354px;
  width: 100%;
  margin: 62px 0 auto auto;
}

.card_heading_b {
  margin: 14px 0;
  text-transform: initial;
}

.sec_grid_img{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15px;
    column-gap: 11px;
    align-items: center;
    padding:  0 49px;
}

.swiper-slide img {
  width: 100%;
}
.swiper {
  padding: 0 55px;
}
/* Responsive Css Code */

@media only screen and (max-width: 1024px) {
  .quotes_text {
    font-size: 60px;
  }
  .sec_lives__weavers{
    padding: 20px 0 60px;
  }
  .sec_header{
    margin: 50px 0 ;
  }
  .sec_grid_img{
      padding:  0 35px;
  }

}
@media screen and (max-width: 991px) { 
  .quotes_text {
    font-size: 40px;
  }
  .sec_lives__weavers{
    padding: 12px 0 45px;
  }
  .sec_header{
    margin: 35px 0 40px;
    padding: 0 10px;
  }
  .sec_grid_img{
      padding:  0 25px;
  }
}

@media screen and (max-width: 767px) {
  .swiper {
    padding: 0 22px;
  }
  .quotes_text {
    font-size: 27px;
  }
  .sec_grid_img{
    row-gap: 5px;
    column-gap: 2px;
    padding:  0 
  }
  .sec_header{
    margin: 17px 0 28px;
    padding: 0 7px;
  }   
  .sec_lives__weavers .big_container{
      padding: 0 4px;
  }
}
</style>