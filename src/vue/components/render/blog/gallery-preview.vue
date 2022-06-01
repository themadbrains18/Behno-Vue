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
      <!-- <div class="gallery_preview_popup" :class="{ active: !show }">
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
      </div> -->

      <!-- Responsive Slider -->
      <div class="gallery_preview_popup responsive_slider" :class="{ active: !show }">
        <div class="gallery_preview_inner">
          <div class="popup_top_row">
            <h3 class="card_heading">{{ shopifyData.PopupHeading }}</h3>
            <img
              src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/close-icon.png?v=1651150909"
              alt="error"
              class="popup_close"
              @click="show = !show"
            />
          </div>
          <swiper
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
                <a
                  :href="value.product.productUrl"
                  :product-id="value.product.productid"
                  class="product_link"
                >
                <div class="card_preview_img">
                      <img :src="value.previewimage.src" />
                    </div>
                  <div class="card_img">
                    <img :src="value.product.productidImage" />
                    
                  </div>
                  <p class="subtitle">{{ value.product.productTitle }}</p>
                  <p class="subtitle_b">{{ value.product.productidPrice }}</p>
                </a>
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
import { Navigation, Mousewheel } from "swiper";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Mousewheel],
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
.card:hover .card_preview_img img {
  opacity: 0;
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
.gallery_preview_popup.responsive_slider{
        display: none;
}

/* Responsive Breakpoints */
@media screen and (max-width: 575px) {
    .gallery_preview_popup.responsive_slider{
        display: block;
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
