<template>
  <div>
    <!-- featured Carousel -->
    <section class="product_slider big_container modify-slider">
      <h2 class="card_heading product_slider_heading">
        {{ shopifyData.secHeading }}
      </h2>
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="10"
        :mousewheel="{
          invert: false,
          releaseOnEdges: true
        }"
        navigation
      >
        <!-- product Card -->
        <template v-if="shopifyData.showProduct === 'true'">
          <swiper-slide
            v-for="(value, key) in relatedProduct"
            :key="key"
          >
            <div class="grid_item product_slider_item">
              <a :href="'/products/'+value.handle">
                <img
                  :src="value.featured_image"
                  alt=""
                >
              </a>
            </div>
          </swiper-slide>
        </template>
        <!-- Custom card -->
      </swiper>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation,Mousewheel } from "swiper";

import "swiper/css";
import { ShopifyAPI } from "@/vue/Shopify/Shopify";

export default {
   components: {
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
      modules: [Navigation,Mousewheel],
    };
  },
  data() {
        return {
            relatedProduct : []
        }
  },
  mounted() {
        this.relatedProducts()
  },
  methods: {
      async relatedProducts () {
        // console.log(this.shopifyData.relatedProduct)
          var relatedProduct = new ShopifyAPI();
          var data =  await relatedProduct.getRequest(this.shopifyData.relatedProduct)
          this.relatedProduct = data.data.products
          console.log(data)
      }
  }
};
</script>

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