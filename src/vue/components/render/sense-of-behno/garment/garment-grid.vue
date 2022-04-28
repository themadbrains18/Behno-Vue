<template>
  <!-- Section Garment Grid Slider Start -->
  <section class="sec_garment_grid_slider">
    <div class="big_container">
      <div class="sec_content">
  <swiper :navigation="true" :modules="modules" 
     :breakpoints="{
      '@1.00': {
        enabled:true 
      },
      '@1.10': {
        enabled:false 
      },
    }"

       class="mySwiper">
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/c8deb46e-a994-44fb-bc6b-e573f95b1eb3/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/f6720123-d893-4764-9c9e-15158e69c047/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/8db71474-d8fc-4671-b5e9-d9b54a041e30/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/7470c048-fb06-4c52-84e4-2a1b5a01f27e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/09b3c3a7-443b-424e-9d47-0061e318ed83/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/fffe79d8-43ba-4c5d-ac5d-53c98d76f310/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
         <swiper-slide>
          <img
            src="https://i.shgcdn.com/dec03bd0-4280-4879-9f19-9fe1f44952e5/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
         <swiper-slide>
          <img
            src="https://i.shgcdn.com/3191c2b8-2679-4452-91e3-7e9a6de58209/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
         <swiper-slide>
          <img
            src="https://i.shgcdn.com/baad84fe-556c-4a58-bfa2-72ca327e458b/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
         <swiper-slide>
          <img
            src="https://i.shgcdn.com/49d21504-ffd5-487e-a128-11a9341b1730/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/285bc02c-df60-4b7b-80cd-b5eb84cf7c83/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
         <swiper-slide>
          <img
            src="https://i.shgcdn.com/8f52ce51-ad94-44a8-b329-9bf3c647709e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/a788e2c7-a35e-40ae-96b8-f20d42e0cfcd/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
         <swiper-slide>
          <img
            src="https://i.shgcdn.com/bec4af7d-a1fe-4807-81e7-5f605578994f/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/5b730889-f279-4461-93f4-7b6c05735ad2/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
         <swiper-slide>
          <img
            src="https://i.shgcdn.com/4d32b2fa-c47b-471d-aad7-a50f21d0b9c8/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
          
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

// import required modules
import { Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation],      
    };
  }
};
</script>

<style > 
.sec_garment_grid_slider{
  margin-top: 14px;
}

.sec_garment_grid_slider .swiper-slide img{
  width: 100%;
  height: 100%;
}

.sec_garment_grid_slider .swiper-button-next:after, .sec_garment_grid_slider .swiper-button-prev:after {
    font-size: 17px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    color: #000;
}
.sec_garment_grid_slider .swiper-button-next:after{
  padding: 7.5px  10.86px 7.5px   12.57px;
}

.sec_garment_grid_slider .swiper-button-prev:after{
  padding: 7.5px 12.57px 7.5px 10.86px ;
}
/* Responsive Css Code */
@media screen  and (min-width: 767px){

.sec_garment_grid_slider .swiper-slide{
  width: 100%!important;
}
.sec_garment_grid_slider .swiper-wrapper{
  display: grid!important;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  gap: 4px;
}
}
@media screen  and (max-width: 767px){

.sec_garment_grid_slider .big_container{
  padding: 0;
}
}
</style>