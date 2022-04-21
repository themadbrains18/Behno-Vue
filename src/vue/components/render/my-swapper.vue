<template>
  <div>
    <!-- featured Carousel -->
    <section class="featured_carousel big_container modify-slider">
      <h2 class="card_heading featured_carousel_heading">
         FEATURED IN 
      </h2>
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        :spaceBetween="10"
        navigation
      >
        <swiper-slide>
          <div class="grid_item featured_carousel_item">
            <a href="#" class="grid_img-wrap line-h-0 d-block">
              <img
                class="grid_img"
                src="//cdn.shopify.com/s/files/1/0577/1178/8125/t/4/assets/grid-three.jpg?v=4448133654909769685"
                alt=""
              />
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="grid_item featured_carousel_item">
            <a href="#" class="grid_img-wrap line-h-0 d-block">
              <img
                class="grid_img"
                src="//cdn.shopify.com/s/files/1/0577/1178/8125/t/4/assets/grid-three.jpg?v=4448133654909769685"
                alt=""
              />
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="grid_item featured_carousel_item">
            <a href="#" class="grid_img-wrap line-h-0 d-block">
              <img
                class="grid_img"
                src="//cdn.shopify.com/s/files/1/0577/1178/8125/t/4/assets/grid-three.jpg?v=4448133654909769685"
                alt=""
              />
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="grid_item featured_carousel_item">
            <a href="#" class="grid_img-wrap line-h-0 d-block">
              <img
                class="grid_img"
                src="//cdn.shopify.com/s/files/1/0577/1178/8125/t/4/assets/grid-three.jpg?v=4448133654909769685"
                alt=""
              />
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="grid_item featured_carousel_item">
            <a href="#" class="grid_img-wrap line-h-0 d-block">
              <img
                class="grid_img"
                src="//cdn.shopify.com/s/files/1/0577/1178/8125/t/4/assets/grid-three.jpg?v=4448133654909769685"
                alt=""
              />
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="grid_item featured_carousel_item">
            <a href="#" class="grid_img-wrap line-h-0 d-block">
              <img
                class="grid_img"
                src="//cdn.shopify.com/s/files/1/0577/1178/8125/t/4/assets/grid-three.jpg?v=4448133654909769685"
                alt=""
              />
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<style >
/* featured carousel */
.featured_carousel {
  background: #f1f1f1;
  padding: 20px 0 60px;
}
.featured_carousel_heading {
  margin: 0px 0 20px 15px;
}

.featured_carousel .swiper-slide {
  max-width: 397px;
}
.featured_carousel .swiper {
  padding-left: 15px;
}

@media only screen and (max-width: 991px) {
  .featured_carousel .swiper {
    padding-left: 5px;
  }
}
@media only screen and (max-width: 768px) {
  .featured_carousel {
    padding: 10px 0 50px;
  }
}
@media only screen and (max-width: 480px) {
  .featured_carousel .swiper-slide {
    max-width: 70%;
  }
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
// Import Swiper styles

import "swiper/css";

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