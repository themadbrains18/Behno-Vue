<template>
  <div>
    <!-- featured Carousel -->
    <section class="featured_carousel big_container modify-slider">
      <h2 class="card_heading featured_carousel_heading">FEATURED IN</h2>
      <swiper
        :modules="modules"
        :slidesPerView="'auto'"
        :spaceBetween="10"
        navigation
      >
        <swiper-slide v-for="(value, key) in shopifyData.box" :key="key">
          <div class="grid_item featured_carousel_item">
            <a :href="getHref(key)" class="grid_img-wrap line-h-0 d-block">
              <v-lazy-image
                class="grid_img"
                :src="getImage(key, 'src')"
                :src-placeholder="getImage(key, 'placeholder')"
                alt="Hero Image"
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import VLazyImage from "v-lazy-image";

import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    VLazyImage,
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
  
  created: function () {
    this.getImage();
    this.getHref();
  },
  methods: {
    getImage($name,type = 'src') {
      var imgObj = this.shopifyData.box;
      var ImgSrc = "";
      for (let data in imgObj) {
        if ($name == data) {
           ImgSrc = imgObj[data].imgUrl[type];
        } else {
          continue;
        }
      }
      return ImgSrc;
    },
    getHref($name) {
      var imgObj = this.shopifyData.box;
      var ImgSrc = "";

      for (let data in imgObj) {
        if ($name == data) {
          ImgSrc = imgObj[data].link;
        } else {
          continue;
        }
      }
      return ImgSrc;
    },
  },
};
</script>