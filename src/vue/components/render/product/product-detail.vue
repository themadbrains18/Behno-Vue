<template>
    <section :data-id=(shopifyData.productId) class="product_sec">
        <div class="product_grid">
            <div class="product_grid_image modify-slider">
                <swiper
                    :direction="'vertical'"
                    :navigation="true"
                    :modules="modules"
                    :autoHeight="true"
                    :loop="true"
                    :pagination="{
                        type: 'fraction',
                    }"
                    :mousewheel= "{
                        invert: false,
                        releaseOnEdges: true
                    }"
                    :autoplay="{
                        delay: 1000000,
                    }"
                    class="product-media-slider" id="productMediaslider"
                >
                    <swiper-slide v-for="(value, key) in shopifyData.productMedia" :key="key" class="product_slide" v-html="encodeData(value.media)">
                    </swiper-slide>
                </swiper>
            </div>
            <form class="product_grid_content">
                <h1 class="product_title card_heading">{{shopifyData.productTitle}}</h1>
                <h2 class="product_price">{{shopifyData.productPrice}}</h2>
                <p class="after_pay">or 4 interest-free installments of $97.50 by<img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/afterpay.png?v=1653477636"></p>
                <ul class="product_variant">
                    <!-- <template  v-for="(value, key) in shopifyData.productVariant" :key="key"> -->
                            <!-- {{value.title}} -->
                        <li class="color_variant_wrap">
                            <input type="radio" name="colorVariant" id="black" class="color_variant" checked>
                            <label class="color_variant_label" for="black"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/black.png?v=1651228172" alt="">
                            </label> 
                        </li>
                        <li class="color_variant_wrap">
                            <input type="radio" name="colorVariant" id="skyblue" class="color_variant">
                            <label class="color_variant_label" for="skyblue"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/skyblue.png?v=1651228172" alt="">
                            </label> 
                        </li>
                        <li class="color_variant_wrap">
                            <input type="radio" name="colorVariant" id="golden" class="color_variant">
                            <label class="color_variant_label" for="golden"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/golden.png?v=1651228172" alt="">
                            </label> 
                        </li>
                        <li  class="color_variant_wrap">
                            <input type="radio" name="colorVariant" id="yellow" class="color_variant">
                            <label class="color_variant_label" for="yellow"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/yellow.png?v=1651228173" alt="">
                            </label> 
                        </li>
                        <li class="color_variant_wrap">
                            <input type="radio" name="colorVariant" id="red_purple" class="color_variant">
                            <label class="color_variant_label" for="red_purple"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/red_purple.png?v=1651228172" alt="">
                            </label> 
                        </li>
                    <!-- </template> -->
                </ul>

                <p class="product_left subtitle_b">ONLY 2 LEFT</p>

                <div class="add_cart_btn_wrap">
                    <button type="submit" class="add_cart_btn cta_btn cta_btn-black">
                        ADD TO BAG
                    </button>
                </div>

                <div class="product_description"  v-html="encodeData(shopifyData.productDescription)">
                </div>

            </form>
        </div>
    </section>
</template>

<style>
    .product-media-slider .swiper-pagination-fraction {
        position: absolute;
        bottom: 15px;
        right: 20px;
        z-index: 2;
    }
    .product-media-slider .swiper-pagination-fraction,
    .product-media-slider .swiper-pagination-fraction span {
        color: #777777;
        font-size: 12px;
        letter-spacing: 0.01em;
    }
    .product-media-slider .swiper-button-prev{
        right: 15px;
        left: auto;
        transform: translateY(-100%) rotate(90deg);
    }
    .product-media-slider .swiper-button-next{
        transform: translateY(100%) rotate(-90deg);
    }
    .product_description .Ehic-Content li{
        display: flex;
        gap: 15px;
    }
    .product_description .Ehic-Content img{
        height: 42px;
        width: 42px;
    }
    .product_slide > *{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
<style scoped>
    .product_sec {
        padding-top: 30px;
    }
    .product_grid{
        display: grid;
        grid-template-columns: 55% 370px;
        gap: 80px;
        overflow: hidden;
    }

    .product-media-slider{
        height: 805px;
    }

    
    .product_title {
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
        align-items: center;
        gap: 12px;
        margin: 20px 0 17px;
    }
    .color_variant{
        display: none;
    }
    .color_variant_label{
        cursor: pointer;
        line-height: 0;
        height: fit-content;
        border-radius: 50%;
        display: block;
        box-shadow: 0 0  0 1px #E0E0E0;
    }
    .color_variant:checked + .color_variant_label{
        box-shadow: 0 0  0 2px #fff,0 0  0 3px #6B6B6B;
    }
    .color_variant_label img{
        height: 24px;
        width: 24px;
        border-radius: 50%;
    }
    .product_left{
        line-height: 15px;
        color: #878787;
        margin-bottom: 12px;
    }
    .add_cart_btn{
        width: 100%;
        padding-block: 15px;
    }

    @media only screen and (max-width:1600px){
        .product-media-slider{
            height: 650px;
        }
    }
    @media only screen and (max-width:1440px){
        .product_grid{
            gap: 60px;
        }
    }
    @media only screen and (max-width:1200px){
        .product-media-slider{
            height: 600px;
        }
    }
    
    @media only screen and (max-width:991px){
        .product_sec {
            padding-top: 0;
        }
        .product_grid{
            grid-template-columns : 100%;
            gap: 25px;
        }
        .product_grid_content{
            max-width: 600px;
            padding: 0 15px;
            width: 100%;
            margin: 0 auto;
        }
        .product-media-slider{
            height: 500px;
        }
        .add_cart_btn_wrap{
            padding: 0 15px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 3;
        }
    }

    @media only screen and (max-width:575px){
        .product-media-slider{
            height: 400px;
        }
    }
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay,Pagination,Mousewheel } from "swiper";
export default {
  data() {
      console.log(this.shopifyData)
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
  methods : {
      encodeData(data){
          return (
            atob(data)
          )
      }
  },
  mounted(){
    window.addEventListener('resize',()=>{
        if(window.innerWidth <= 991){
            document.querySelector(".footer_content").style.paddingBottom = `${document.querySelector(".add_cart_btn_wrap").offsetHeight}px`;
            document.querySelector(".footer_wave").style.backgroundColor = document.querySelector(".tmbMain").style.backgroundColor = "#f1f1f1";
        }else{
            document.querySelector(".footer_content").style.paddingBottom = `0`;
            document.querySelector(".footer_wave").style.backgroundColor = document.querySelector(".tmbMain").style.backgroundColor = "transparent";
        }    
    })

    if(window.innerWidth <= 991){
        document.querySelector(".footer_content").style.paddingBottom = `${document.querySelector(".add_cart_btn_wrap").offsetHeight}px`;
        document.querySelector(".footer_wave").style.backgroundColor = document.querySelector(".tmbMain").style.backgroundColor = "#f1f1f1";
    }
  },
  setup() {
    return {
      modules: [Navigation,Autoplay,Pagination,Mousewheel]
    };
  }
};

</script>