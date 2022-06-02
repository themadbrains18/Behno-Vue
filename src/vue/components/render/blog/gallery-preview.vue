<template>
  <section class="gallery_preview_sec bg-sand" id="app">
    <!-- Sec Content -->
    <div class="sec_content">
      <h1 class="main_heading">
        {{ shopifyData.GalleryPreviewHeading }}
      </h1>
      <!-- Preview Images -->
      <div
        class="gallery_preview"
        v-for="(item, index) in shopifyData.productData"
        :key="index"
      >
        <img
          @click="show = !show"
          :src="item.previewimage.src"
          :src-placeholder="item.previewimage.placeholder"
          :alt="item.previewimage.alt"
          v-if="index <= 3"
        />
      </div>
      <div class="gallery-cta">
        <button @click="show = !show" class="subtitle">
          {{ shopifyData.GalleryCta }}
        </button>
      </div>
      <!-- Overlay -->
      <divs
        class="overlay"
        :class="{ active: !show }"
        @click="show = !show"
      ></divs>
      <!-- Preview Images Popup -->
      <div class="gallery_preview_popup" :class="{ active: !show }">
        <div class="gallery_preview_inner">
          <div class="popup_top_row">
            <h3 class="card_heading">{{shopifyData.PopupHeading}}</h3>
            <img
              src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/close-icon.png?v=1651150909"
              alt="error"
              class="popup_close"
              @click="show = !show"
            />
          </div>
          <div class="gallery_cards">   
            <div class="card" v-for="(value, key) in shopifyData.productData" :key="key">
              <a :href=(value.product.productUrl)  :product-id=(value.product.productid) class="product_link">
                  
                <div class="card_img">
                    <img :src="value.product.productidImage"  />
                    <div class="card_preview_img" >
                        <img :src="value.previewimage.src"  />
                    </div>
                </div>
                <p class="subtitle">{{value.product.productTitle}}</p>
                <p class="subtitle_b">{{value.product.productidPrice }}</p>
              </a>
            </div>
          
          </div>
        </div>
      </div>

      <!-- Responsive Slider -->
      <div
        class="gallery_preview_popup responsive_slider"
        :class="{ active: !show }"
      >
        <div class="gallery_preview_inner modify-slider">
          <div class="popup_top_row">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/close-icon.png?v=1651150909"
              alt="error"
              class="popup_close"
              @click="show = !show"
            />
          </div>
          <swiper
            :scrollbar="{hide: true,}"
            :modules="modules"
            :slidesPerView="'auto'"
            :spaceBetween="10"
            :mousewheel="{
              invert: false,
              releaseOnEdges: true,
            }"
            navigation
          >
            <swiper-slide
              v-for="(value, key) in shopifyData.productData"
              :key="key"
            >
              <div class="card">
                  <div class="card_preview_img">
                    <img :src="value.previewimage.src" />
                  </div>
                  <div class="slider_image bg-black">
                    <div>
                      <p class="subtitle color-white">{{ value.product.productTitle }}</p>
                      <p class="subtitle_b color-white">
                        {{ value.product.productidPrice }}
                      </p>
                      <a  :href="value.product.productUrl"
                          :product-id="value.product.productid" 
                          class="slider_product_btn">
                          <div class="slider_tmb_btn">
                            <img src="//cdn.shopify.com/s/files/1/0577/1178/8125/t/5/assets/slider-arrow.svg?v=7926845654508591761" alt="">
                          </div>
                        <span  class="color-white">
                          slider_product_btn
                        </span>
                      </a>
                    </div>
                    <div class="card_img">
                      <img :src="value.product.productidImage" />
                    </div>
                  </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation,Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation,Scrollbar],
    };
  },
  data: function () {
    return {
      show: true,
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

<style scoped>





/* common css */
html {
  scroll-behavior: smooth;
}

.gallery_preview_sec {
  padding: 0 56px 45px 56px;
}
.main_heading {
  margin-bottom: 50px;
  max-width: 694px;
}
.gallery_preview {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 17px;
  padding-left: 4px;
}
.gallery-cta {
  padding-left: 4px;
}
.gallery_preview > img {
  width: 100px;
  height: 140px;
  object-fit: cover;
}
.gallery_preview_popup {
  padding: 19px 40px 140px;
  background: #fff;
  max-width: 1343px;
  margin: 0 auto;
  z-index: 4;
  position: fixed;
  top: 210px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  overflow-y: scroll;
  overscroll-behavior: none;
  min-height: 100vh;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(180deg, #ddcec7 0%, #ffffff 100%), #ffffff;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
}
.gallery_preview_popup.active {
  top: 110px;
}
.overlay.active,
.gallery_preview_popup.active {
  opacity: 1;
  visibility: visible;
}
.gallery_cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 12px;
}
.popup_top_row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.card_preview_img img {
  width: 100%;
  transition: 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  object-fit: cover;

}

@media (hover: hover) { 
  .card:hover .card_preview_img img {
    opacity: 0;
  }
}

.gallery_preview img {
  cursor: pointer;
}
.card_img {
  position: relative;
}
.popup_close {
  width: 33px;
  height: 33px;
  position: absolute;
  top: 9px;
  right: 10px;
  cursor: pointer;
}
.card .subtitle {
  margin-top: 7px;
}
.gallery_preview_popup::-webkit-scrollbar {
  width: 5px;
}
.gallery_preview_popup::-webkit-scrollbar-thumb {
  background: grey;
}
.gallery_preview_popup::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Responsive Slider Css Code */
.gallery_preview_popup.responsive_slider{
  display: none;
}

/* Responsive Breakpoints */

@media screen and (max-width: 575px) {
  .gallery_preview_popup.responsive_slider {
    display: block;
    top: 0;
    z-index: 9;
    padding:0;
  }
  

  .gallery_preview_popup{
    display: none;
  } 
  /* Responsive Slider Cdd Code */
.responsive_slider .card_preview_img img {
  position: static;
  opacity: 1;
  width: initial;
  transform: translate(0, 0);
  height: 100%;
}
.responsive_slider .card_img img{
  height: 105px;
  width: 105px;
}

.responsive_slider .subtitle_b{
  margin-bottom: 11px;
}
.responsive_slider .card .subtitle{
  margin: 0px 0 10px;
  
}
.slider_product_btn{
  display: grid;
  justify-content: end;
  margin-right: 45px;
}
.slider_product_btn img{
  transform: rotate(90deg);
}

.slider_tmb_btn{
  text-align: center;
  margin-bottom: 13px;
}

  


.gallery_preview_popup .card_preview_img{
  line-height: 0;
}

.responsive_slider .popup_top_row img{
  left: 15px;
  top: 15px;
  right: auto;
  z-index: 9;
}
.responsive_slider .popup_top_row{
  margin-bottom: 0;
}
.slider_image{
  display: grid;
  padding: 8px;
  grid-template-columns: 77% 22%;
  gap: 4px;
  justify-content: space-between;
}


.card_img{
  width: 100%;
  height: 100%;
  text-align: end;
}
}
@media screen and (max-width: 767px) {
  .gallery_preview_sec {
    padding: 0 0px 28px 13px;
  }
  .gallery_preview {
    overflow-x: scroll;
    padding-left: 0;
    margin-bottom: 10px;
  }
  .main_heading {
    margin-bottom: 15px;
    max-width: 264px;
    line-height: 41px;
  }
  .gallery-cta {
    padding-left: 0px;
  }
  .gallery_preview_popup,
  .overlay {
    display: none;
    
  }
}
</style>
<style>
/* Resposnive Slider Css Code */
.responsive_slider .swiper-scrollbar{
  bottom: auto;
  top: 8px;
  background: rgba(0, 0, 0, 0.14);
  height: 3px;
}
.responsive_slider .swiper-scrollbar-drag{
  background: #fff;
  border-radius:0;
}
@media screen and (max-width: 480px) {
 .responsive_slider .modify-slider .swiper-button-prev,.responsive_slider .modify-slider .swiper-button-next{
   display: block;
}
}
</style>

