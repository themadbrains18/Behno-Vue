<template>
  <div>
    <!-- featured Carousel -->
    <section class="product_slider big_container modify-slider">
      <h2 class="card_heading product_slider_heading">{{ shopifyData.secHeading }}</h2>
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :mousewheel= "{
          invert: false,
          releaseOnEdges: true
        }"
        navigation
      >
      <!-- product Card -->
       <template v-if="shopifyData.showProduct === 'true'">
         <swiper-slide v-for="(value, key) in shopifyData.product" :key="key">
          <div class="grid_item product_slider_item">
            <a :href=value.productLink>
              <img :src=value.productImage alt="" />
            </a>
          </div>
        </swiper-slide>
       </template>
       <!-- Custom card -->
       <template v-else>
         <swiper-slide v-for="(value, key) in shopifyData.box" :key="key">
          <div class="grid_item product_slider_item">
            <a :href=(value.link) class="grid_img-wrap line-h-0 d-block">
              <img 
                class="grid_img"
                :src=(value.imgUrl.src)
                :src-placeholder=(value.imgUrl.placeholder)
                :alt=(value.imgUrl.alt)
              />
            </a>
          </div>
        </swiper-slide>
       </template>
        
      </swiper>
    </section>
  </div>
</template>

<style scoped>

/* featured carousel */
.product_slider {
  padding: 20px 0 60px;
}
.product_slider_heading {
  margin: 0px 0 20px 15px;
}

.product_slider .swiper-slide {
  max-width: 397px;
}
.product_slider .swiper {
  padding-left: 15px;
}

@media only screen and (max-width: 991px) {
  .product_slider .swiper {
    padding-left: 5px;
  }
}
@media only screen and (max-width: 768px) {
  .product_slider {
    padding: 10px 0 50px;    
  }
}
@media only screen and (max-width: 480px) {
  .product_slider .swiper-slide {
    max-width: 70%;
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation,Mousewheel } from "swiper";

import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation,Mousewheel],
    };
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
};
</script>