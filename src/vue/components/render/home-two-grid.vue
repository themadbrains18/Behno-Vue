<template>
  <!-- Grid Two  -->
  <section class="grid_two big_container">
    <div class="mobile_stories">
      <button
        class="story_cta"
        @click="show = !show , addActiveBody()"
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/mobile-stories.svg?v=1655358553"
          alt="error"
        >
      </button>
    </div>
    <div
      class="mobile_stories_wrapper"
      :class="{ active: !show }"
    >
      <swiper
        :scrollbar="{ hide: false }"
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="10"
        :mousewheel="{
          invert: false,
          releaseOnEdges: true,
        }"
        navigation
      >
        <swiper-slide
          v-for="(value, key) in shopifyData.storyData"
          :key="key"
        >
          <div class="card_preview_img">
            <img :src="value.previewimage.src">
          </div>
          <div class="slider_product_btn">
            <a
              :href="(value.storyBtnLink)"
              class="slider_tmb_btn"
            >
              <img
                src="//cdn.shopify.com/s/files/1/0577/1178/8125/t/5/assets/slider-arrow.svg?v=7926845654508591761"
                alt="error"
              >
            </a>
            <span
              class="color-white subtitle"
              :style="{ 'color': value.bottomTextColor}"
            >{{ value.storyBtn }}</span>
          </div>
          <div
            class="close_icon"
            @click="show = !show , addActiveBody()"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/x-storie.svg?v=1655114346"
              alt="error"
              class="popup_close"
            >
          </div>
          <div
            class="sec_text"
            :style="{'top': value.storyText +'%'}"
          >
            <h4 class="card_heading_b">
              {{ value.storyHeading }}
            </h4>
            <p class="body_text">
              {{ value.storyBrief }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="grid_two_inner">
      <div
        v-for="(value, key) in shopifyData.box"
        :key="key"
        class="grid_item"
      >
        <a
          :href="(value.link)"
          class="grid_img-wrap line-h-0 d-block"
        >
          <v-lazy-image
            class="grid_img" 
            :src="(value.imgUrl.src)"
            :src-placeholder="(value.imgUrl.placeholder)"
            :alt="(value.imgUrl.alt)"
          />
        </a>
        <div class="grid_info">
          <h3 class="card_heading grid_heading">
            {{ value.title }}
          </h3>
          <a
            :href="(value.link)"
            class="link body_text"
          > {{ value.linkText }} </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VLazyImage from "v-lazy-image";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar} from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

export default {
  components: {
    VLazyImage,
    Swiper,
    SwiperSlide
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
  setup() {
      return {
        modules: [Navigation, Scrollbar],
      };
  },
  data: function () {
    window.addEventListener("scroll",()=>{
      let heroSec = document.querySelector(".hero_sec");
      let storyCta = document.querySelector(".mobile_stories");
      let heroHeight = heroSec.getBoundingClientRect().height;
      if(window.scrollY > heroHeight){
        storyCta.setAttribute("style","opacity:1;visibility:visible;");
      }else{
        storyCta.setAttribute("style","opacity:0;visibility:hidden;");
      }
    });
    return {
        show: true,
    };
  },
  methods : {
      addActiveBody:function(){
          document.querySelector("body").classList.toggle("show");
      }
  }
};
</script>

<style scoped>
/* Two Grid */
.grid_two {
  padding: 0 15px;
}
.grid_two_inner{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px 5px;
}
.mobile_stories,
.mobile_stories_wrapper
{
  display: none;
}


@media only screen and (max-width: 991px) {
  .grid_two {
    padding: 0;
  }
}
@media only screen and (max-width: 767px) {
  .grid_two_inner {
    grid-template-columns: 1fr;
  }
 
  
}
@media only screen and (max-width: 575px) {
  .mobile_stories{
    display: block;
    margin-bottom: -30px;
    position: fixed;
    z-index: 9;
    top: 80px;
    left: 22px;
    border-radius: 50%;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }
/* mobile stories css start */
.mobile_stories_wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    height: 100%;
    min-height: 100vh;
    background-color:#fff;
    display: block;
}
.mobile_stories_wrapper.active{
    visibility: visible;
    opacity: 1;
}
.slider_product_btn {
    display: grid;
    margin-right: 0;
    gap: 13px;
    position: absolute;
    bottom: 17px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}
.subtitle{
  margin: 0;
}
.slider_product_btn img{
    transform: rotate(90deg);
}
.close_icon{
    position: absolute;
    top: 15px;
    left: 0;
}
.mobile_stories_wrapper .card_preview_img img{
    height: 100vh;
    object-fit: cover;
    width: 100% !important;
    object-position: center;
}
.mobile_stories_wrapper .card_heading_b{
    margin: 0 0 14px 0;
    font-size: 12px;
    line-height: 10.49px;
    color: #fff;
}
.mobile_stories_wrapper .body_text{
    font-size: 12px;
    line-height: 12.95px;   
    color: #fff;
}
.sec_text {
    position: absolute;
    top: 30%;
    background: #000;
    padding: 23px 25px;
    max-width: 309px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
}
}
</style>
