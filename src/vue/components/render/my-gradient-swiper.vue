
<template>
  <!-- Gradient Carousel -->
  <section class="gradient_carousel big_container modify-slider">
    <swiper
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="20"
      navigation
    >
      <swiper-slide v-for="(value, key) in shopifyData.box" :key="key">
        <div class="grid_item gradient_carousel_item">
          <a :href=(value.link) class="grid_img-wrap line-h-0 d-block">
            <v-lazy-image
              class="grid_img"
              :src=(value.imgUrl.src)
              :src-placeholder=(value.imgUrl.placeholder)
              :alt=(value.imgUrl.alt)
            />
          </a>
          <h3 class="card_heading grid_heading">{{ value.title }}</h3>
          <a :href=(value.link) class="link body_text">
            {{ value.linkText }}
          </a>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage,
    Swiper,
    SwiperSlide,
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
  setup() {
    return {
      modules: [Navigation],
    };
  }
};
</script>