<template>

<section :data-id=(shopifyData.productId) class="product_sec">
    <div class="product_grid">
        <div class="product_grid_image">
            <swiper
                :navigation="false"
                :modules="modules"
                :autoHeight="true"
                :loop="true"
                :pagination="{
                    el: '.swiper-pagination',
                    type: 'fraction',
                }"
                :autoplay="{
                    delay: 1000000,
                }"
            >
                <swiper-slide v-for="(value, key) in shopifyData.productMedia" :key="key" class="product_slide">
                    <img :src=(value.img.src) :alt=(value.img.alt) />
                </swiper-slide>
            </swiper>
        </div>
        <div class="product_grid_content">
            <h1 class="product_title">{{shopifyData.productTitle}}</h1>
            <h2 class="product_price">{{shopifyData.productPrice}}</h2>
            <p class="after_pay">or 4 interest-free installments of $97.50 by<img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/afterpay.png?v=1653477636"></p>
            <div class="product_variant">
                <template  v-for="(value, key) in shopifyData.productVariant" :key="key">
                    <button type="button" >
                        {{value.title}}
                    </button>
                </template>
                
            </div>
        </div>
    </div>
</section>

</template>

<style scoped>
    .product_sec {
        padding-top: 30px;
    }
    .product_grid{
        display: grid;
        grid-template-columns: 55% 370px;
        gap: 80px;
    }
    
    .product_slide img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .product_title {
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        line-height: 18px;
    }
    .product_price{
        font-size: 15px;
        letter-spacing: 0.02em;
        margin: 9px 0;
        line-height: 18px;
    }
    .after_pay{
        font-size: 11px;
        letter-spacing: 0.015em;
    }
    .after_pay img{
        vertical-align: middle;
    }
    .product_variant{
        display: flex;
        gap: 12px;
        margin: 20px 0 17px;
    }
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay,Pagination } from "swiper";
export default {
  data() {
       return (
           console.log(this.shopifyData)
       )
  },
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
      modules: [Navigation,Autoplay,Pagination]
    };
  }
};

</script>