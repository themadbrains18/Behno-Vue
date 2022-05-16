<template>
<!-- Garment Up-close Start -->
    <section class="sec_working_with_artisan">
        <div class="big_container">
          <div class="sec_content modify-slider">
                <swiper 
                :navigation="true" 
                :modules="modules" 
                :centeredSlides= "true" 
                :spaceBetween= "100"
                :loop="true"
                :effect="'fade'"
                :autoplay="{
                delay: 1500,
                disableOnInteraction: false,
                }"
                class="mySwiper">
                <swiper-slide v-for="(value, key) in shopifyData.slideData" :key="key">
                  <img :src=(value.imgUrl.src) :src-placeholder=(value.imgUrl.placeholder) :alt=(value.imgUrl.alt)>
                </swiper-slide>
          </swiper>
        </div>
        <div class="sec_header">
            <h2 class="quotes_text">
                {{ shopifyData.redText }}
            </h2>
        </div>
        </div>
        <div class="sec_content_inner">
          <div class="big_container">
            <div class="sec_text">
                <h2 class="sec_heading">{{ shopifyData.secHeading }}</h2>
                <h4 class="card_heading_b">{{ shopifyData.subHeading }}</h4>
                <p class="body_text" v-for="(value, key) in shopifyData.paragraphData" :key="key">
                    {{ value.para }}
                </p>
                <div class="text_inner_img">
                  <img :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt)>
                </div>
            </div>
            <div class="sec_img">
                <img :src=(shopifyData.rightimgUrl.src) :src-placeholder=(shopifyData.rightimgUrl.placeholder) :alt=(shopifyData.rightimgUrl.alt)>
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
import { Autoplay,EffectFade ,Navigation} from "swiper";
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
      modules: [Autoplay,EffectFade,Navigation],      
    };
  }
};
</script>

<style >
@media screen  and (max-width: 767px){
  .sec_working_with_artisan .swiper-button-next{
      right: -5px!important;
  }
  .sec_working_with_artisan .swiper-button-prev{
      left: -5px!important;
  }
}
@media screen  and (max-width: 480px){
    .sec_working_with_artisan .modify-slider .swiper-button-prev,.sec_working_with_artisan .modify-slider .swiper-button-next{
      display: block;
    }
  }
</style>

<style scoped>
  .quotes_text{
      color: #EF0000;
  }
  .sec_header{
    margin-top: 45px;  
  }
  .body_text:last-of-type{
      margin-bottom:0px;
  }
  .text_inner_img{
    
    max-width: 354px;
    width: 100%;
    margin:62px  0 auto auto;
  }

  .card_heading_b{
      margin:  14px 0;
      text-transform: initial;
  }


  .sec_content_inner .big_container{
      display: grid;
      align-items: center;
      grid-template-columns: 48% 48%;
      gap: 32px;
      justify-content: space-between;
      padding: 75px 92px 65px;   
  }   
  .sec_content_inner{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E9E7E3 100%);
  }
  .sec_text{
      max-width: 577px;
      width: 100%;
  }
  .body_text{
      line-height: 19px;
      margin-bottom:20px;
  }
  .cta_btn {
          background: #000000;
          width: fit-content;
          margin-top: 25px;
          color: #fff;
          border: 1px solid #000000;
          display: block;
  }
  @media (hover: hover) {
      .cta_btn:hover {
          background: #fff;
          color: #000;
          border-color: #000;
      }
  }
  .invited_showcase .sec_img{
      max-width: 627px;
  }
  .sec_content.invited_showcase{
      margin-bottom:22px;
      margin-top: 16px;
  }

  .swiper-slide img{  
      width:100%;
  }
  .sec_heading{
      font-weight: 400;
      line-height: 41px;
  }
  .swiper{
      padding: 0 55px;
  }
  /* Responsive Css Code */

  @media screen  and (max-width: 1200px){
  .sec_content_inner .big_container{
      padding: 75px 40px 65px;
  }
  }
  @media only screen and (max-width: 1024px) {
  .quotes_text{
    font-size: 60px;
  }
}
  @media screen  and (max-width: 991px){
  .sec_heading{
      margin-bottom:25px;
  }
  .sec_content_inner .big_container{ 
    grid-template-columns: 1fr;
    padding: 48px 25px 27px;
    gap: 38px;
  }
  .sec_text{
    order: 2;
    max-width: 100%;
  }
  .text_inner_img{
    max-width: 100%;
    margin-top: 38px;
  }
  .sec_header{
    margin-top: 51px;  
  }
  .sec_content_inner .sec_img{
      width: calc(100% + 50px);
      margin-left: -25px;
  }
  .text_inner_img img{
    max-width: calc(100% + 14px);
    margin-left: -7px;
  }
  .quotes_text{
    font-size: 40px;
  }
  
  }

  @media screen  and (max-width: 767px){
  .sec_heading{
      margin-bottom:18px;
      text-align: start;
  }
  .swiper{
      padding: 0 22px;
  }
  .quotes_text{
    font-size: 27px;
  }
  }
</style>