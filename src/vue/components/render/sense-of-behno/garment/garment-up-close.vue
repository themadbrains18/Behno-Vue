<template>
<!-- Garment Up-close Start -->
    <section class="sec_up_close">
        <div class="big_container">
            <div class="sec_content">
                <h2 class="sec_heading">
                    Up close and live at Sotheby’s circa July 2016.
                </h2>
                <swiper 
                :navigation="true" 
                :modules="modules" 
                :centeredSlides= "true" 
                :spaceBetween= "100"
                :loop="true"
       class="mySwiper">
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/9408d3bc-7ca6-464c-a070-340ae41291fe/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
         <swiper-slide>
          <img
            src="https://i.shgcdn.com/7880ee83-f68d-44c2-85ec-bc16855a36b2/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://i.shgcdn.com/c86d391e-a8e8-4281-9fb4-ccacd27b3db3/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
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
.sec_up_close .swiper-button-next:after, .sec_up_close .swiper-button-prev:after {
    font-size: 17px;
    border-radius: 50%;
    color: #000000;
}
.sec_up_close .swiper-button-next:after{
  padding: 7.5px  10.86px 7.5px   12.57px;
}

.sec_up_close .swiper-button-prev:after{
  padding: 7.5px 12.57px 7.5px 10.86px ;
}


@media screen  and (max-width: 767px){

.sec_up_close .swiper-button-next{
    right: -5px!important;
}
.sec_up_close .swiper-button-prev{
    left: -5px!important;
}

}

</style>


<style scoped>

.swiper-slide img{  
    width:100%;
}
.sec_up_close{
    padding: 74px 0 74px;
}
.sec_heading{
    font-weight: 400;
    text-align: center;
    margin-bottom:30px;
}
.swiper{
    padding: 0 55px;
}
/* Responsive Css Code */
@media screen  and (max-width: 991px){
.sec_up_close{
    padding: 60px 0 60px;
}
.sec_heading{
    margin-bottom:25px;
}
}

@media screen  and (max-width: 767px){
.sec_up_close{
    padding: 47px 0 40px;
}
.sec_up_close .big_container{
    padding: 0 13px;
}
.sec_heading{
    margin-bottom:18px;
    text-align: start;
}
.swiper{
    padding: 0 22px;
}

}
</style>