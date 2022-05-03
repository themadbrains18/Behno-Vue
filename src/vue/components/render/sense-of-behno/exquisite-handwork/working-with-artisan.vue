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
          <div class="sec_header">
            <h2 class="quotes_text">
                “WORKING WITH ARTISAN COMMUNITIES PRESERVES INDIGENOUS CRAFT WHILE ALSO HAVING A DIRECT POSITIVE IMPACT ON LOCAL COMMUNITIES AND POVERTY REDUCTION.”
            </h2>
        </div>
        </div>
        <div class="sec_content_inner">
          <div class="big_container">
            <div class="sec_text">
                <h2 class="sec_heading">Critical collaboration: an exchange of ideas.</h2>
                <h4 class="card_heading_b">Working hands on with artisans allows us to open the door for real, hands-on collaboration.</h4>
                <p class="body_text">
                    Our team spends a lot of time at Gulfam’s on our trips to India and working with the members of his collective has been an incredibly valuable experience toward the development of ideas.
                </p>
                <p class="body_text">
                    While immensely rewarding on a personal level, we are grateful to have the opportunity to learn, preserve and re-introduce such historically rich techniques into our work directly from the communities that have been practicing this art for centuries.
                </p>
                <div class="text_inner_img">
                  <img src="https://i.shgcdn.com/c4c0e58d-8757-48f6-8367-fa09f80d1093/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">
                </div>
            </div>
            <div class="sec_img">
                <img src="https://i.shgcdn.com/889fab22-a174-49e6-8e47-6e86cce0e308/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">
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
@media screen  and (max-width: 767px){
  .sec_working_with_artisan .swiper-button-next{
      right: -5px!important;
  }
  .sec_working_with_artisan .swiper-button-prev{
      left: -5px!important;
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
  @media screen  and (max-width: 991px){
  .sec_working_with_artisan{
    padding: 60px 0 60px;
  }
  .sec_heading{
      margin-bottom:25px;
  }
  .sec_content_inner .big_container{ 
    grid-template-columns: 1fr;
    padding: 0 18px 27px;
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
  .sec_img{
      width: calc(100% + 36px);
      margin-left: -18px;
  }
  
  }

  @media screen  and (max-width: 767px){
  .sec_working_with_artisan{
      padding: 47px 0 40px;
  }
  .sec_working_with_artisan .big_container{
      padding: 0 18px;
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