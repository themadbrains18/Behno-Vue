
<template>
     <!-- Gradient Carousel -->
  <section class="gradient_carousel big_container modify-slider">
    <swiper
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="20"
      navigation
    >
      <swiper-slide>
        <div class="grid_item gradient_carousel_item">
          <a href="#" class="grid_img-wrap line-h-0 d-block">
            <img
              class="grid_img" src="http://cdn.shopify.com/s/files/1/0577/1178/8125/t/3/assets/grid-three.jpg?v=4448133654909769685" alt="" />
          </a>
          <h3 class="card_heading grid_heading">TITLE OF THE EDIT.</h3>
          <a href="#" class="link body_text"> Clickable link. </a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid_item gradient_carousel_item">
          <a href="#" class="grid_img-wrap line-h-0 d-block">
            <img class="grid_img" src="http://cdn.shopify.com/s/files/1/0577/1178/8125/t/3/assets/grid-three.jpg?v=4448133654909769685" alt="" />
          </a>
          <h3 class="card_heading grid_heading">TITLE OF THE EDIT.</h3>
          <a href="#" class="link body_text"> Clickable link. </a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid_item gradient_carousel_item">
          <a href="#" class="grid_img-wrap line-h-0 d-block">
            <img class="grid_img" src="http://cdn.shopify.com/s/files/1/0577/1178/8125/t/3/assets/grid-three.jpg?v=4448133654909769685" alt="" />
          </a>
          <h3 class="card_heading grid_heading">TITLE OF THE EDIT.</h3>
          <a href="#" class="link body_text"> Clickable link. </a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid_item gradient_carousel_item">
          <a href="#" class="grid_img-wrap line-h-0 d-block">
            <img class="grid_img" src="http://cdn.shopify.com/s/files/1/0577/1178/8125/t/3/assets/grid-three.jpg?v=4448133654909769685" alt="" />
          </a>
          <h3 class="card_heading grid_heading">TITLE OF THE EDIT.</h3>
          <a href="#" class="link body_text"> Clickable link. </a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid_item gradient_carousel_item">
          <a href="#" class="grid_img-wrap line-h-0 d-block">
            <img class="grid_img" src="http://cdn.shopify.com/s/files/1/0577/1178/8125/t/3/assets/grid-three.jpg?v=4448133654909769685" alt="" />
          </a>
          <h3 class="card_heading grid_heading">TITLE OF THE EDIT.</h3>
          <a href="#" class="link body_text"> Clickable link. </a>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid_item gradient_carousel_item">
          <a href="#" class="grid_img-wrap line-h-0 d-block">
            <img
              class="grid_img" src="http://cdn.shopify.com/s/files/1/0577/1178/8125/t/3/assets/grid-three.jpg?v=4448133654909769685" alt="" />
          </a>
          <h3 class="card_heading grid_heading">TITLE OF THE EDIT.</h3>
          <a href="#" class="link body_text"> Clickable link. </a>
        </div>
      </swiper-slide>
    </swiper>
  </section>

  
</template>

<style >


/* Gradient Carousel Text */

.gradient_carousel {
  padding: 70px 0 40px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e9e7e3 100%);
}

.gradient_carousel .swiper {
  padding-left: 50px;
}
.gradient_carousel .swiper-slide {
  max-width: 407px;
}

@media only screen and (max-width: 991px) {
  .gradient_carousel {
    padding: 50px 0 0;
    background: transparent;
  }
  .gradient_carousel .swiper {
    padding-left: 20px;
  }
 
}
@media only screen and (max-width: 480px) {
  .gradient_carousel .swiper-slide {
    max-width: 70%;
  }
 
}

</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
// Import Swiper styles

  import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
};
</script>