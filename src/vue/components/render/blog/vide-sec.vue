<template>
  <section
    v-if="shopifyData.checkSection == 'true'"
    class="video_sec"
  >
    <!-- Sec Head -->
    <div
      v-if="shopifyData.SectionShow == 'true'"
      class="sec_head"
    >
      <h1 class="main_heading">
        {{ shopifyData.SecHeading }}
      </h1>
    </div>
    <!-- Sec Content -->
    <div
      v-if="shopifyData.VideoShow === 'true'"
      class="sec_content bg-black"
    >
      <div class="sec_video modify-slider">
        <div class="tmb_blog_slider_image">
          <div v-if="shopifyData.CheckVideoImage == 'false'">
            <video
              class="subtitle"
              controls
              autoplay="true"
              loop="true"
              muted="true"
              controlsList="nodownload"
              disablepictureinpicture
              webkit-playsinline="true"
              playsinline="true"
              preload="none"
              @click="toggle_selection_for(key)"
            >
              <source :src="shopifyData.videolink">
            </video>
          </div>  
          <div
            v-if="shopifyData.CheckVideoImage == 'true'"
            class="sec_image_slider"
          >
            <div
              class="sec_content modify-slider "
              @click="toggle_selection_for(key)"
            >
              <swiper
                :effect="'fade'" 
                :modules="modules"
                :centered-slides="true"
                :space-between="100"
                :loop="true"
                class="mySwiper"
              >
                <swiper-slide
                  v-for="(value, key) in shopifyData.SliderImagesData"
                  :key="key"
                >
                  <img
                    :src="value.SliderImage.src"
                    :src-placeholder="value.SliderImage.placeholder"
                    :alt="value.SliderImage.alt"
                  >
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <swiper
            :class="{ active: isactive.includes(key) }"
            class="product_info_card"
            :modules="modules"
            :loop="true"
            :slides-per-view="'1'"
            :mousewheel="{ invert: false, releaseOnEdges: true }"
            :navigation="true"
          >
            <swiper-slide
              v-for="(product, index) in shopifyData.productData"
              :key="index"
            >
              <productPopup
                :product-data="product"
                
                @close="toggle_selection_for(key)"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div
          v-if="shopifyData.checkShopBtn == 'true'"
          class="shop_cta"
        >
          <button
            class="subtitle"
            @click="toggle_selection_for(key)"
          >
            {{ shopifyData.secCta }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// Producct Popup Component Import
import productPopup from "../product-popup.vue";

// Slider Import
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
export default {
  components: {
    productPopup,
    Swiper,
    SwiperSlide,
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },

  setup() {
    return {
      modules: [Navigation, Autoplay, EffectFade],
    };
  },
  data() {
    window.addEventListener("scroll",()=>{
      if(document.querySelector(".video_sec")){
        let VideoSection=document.querySelector(".video_sec");
        VideoSection.getBoundingClientRect();
        if(VideoSection.getBoundingClientRect().top<0){
          VideoSection.classList.add("active");
          document.body.classList.add("active-Bg");
        }
        else{
          VideoSection.classList.remove("active");
          document.body.classList.remove("active-Bg");
        }
      }
    });
    return {
      windowWidth: window.innerWidth,
      isactive: [],
    };
  },
  methods: {
    
    toggle_selection_for(key) {
      if(window.innerWidth <= 768){
        if (this.isactive.includes(key)) {
          this.isactive = this.isactive.filter(
            (item) => item !== key
          );
        } else {
          this.isactive.push(key);
        }
      }
    },
  },
};
</script>


<style scoped>
.product_info_card {
  position: absolute !important;
  width: 240px;
  height: 340px;
}


/* .video_sec.active .sec_content.bg-black{
  background: #000;
} */

/* Hover Show Product Cart Css */
.sec_video.modify-slider > .product_info_card {
  transform: translateX(-100%);
}
.sec_video.modify-slider {
  overflow: hidden;
  cursor: pointer;
}
.sec_video.modify-slider .swiper-button-next,
.sec_video.modify-slider .swiper-button-prev {
  background-color: rgba(255, 255, 255, 0.5);
}


@media (hover: hover) {
  .sec_video.modify-slider:hover .tmb_blog_slider_image> .product_info_card {
    transform: translateX(0%);
    cursor: pointer;
  }
}
.swiper.active.product_info_card {
  transform: translateX(0%);
}

.sec_head {
  padding: 43px 40px 15px;
}
.sec_video {
  max-width: 1020px;
  margin: 0 auto;
}
.tmb_blog_slider_image{
    position: relative;
}
.shop_cta {
  text-align: start;
  margin-top: 12px;
}
.subtitle {
  color: #ffffff;
}
.main_heading {
  color: #ef0000;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 700;
  line-height: 69px;
}
.sec_content.bg-black{
  padding: 110px 54px 100px;
  transition: 0.5s;
  background-color: transparent;
}
.sec_content iframe {
  max-width: 1020px;
  margin: 0 auto;
}
.sec_content.bg-black iframe {
  width: 100%;
  height: 570px;
}
.sec_image_slider {
    height: 100%;
}

.sec_image_slider img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

/* Responsive Breakpoints */
@media (max-width: 767px) {
  .sec_content.bg-black{
    padding: 67px 14px 125px;
  }
  .sec_head {
    padding: 0 13px 60px;
  }
  .main_heading {
    font-size: 46px;
    line-height: 44px;
  }
  .sec_content.bg-black iframe {
    height: 155px;
  }
  video {
    height: auto;
  }
  .subtitle{
      margin-top:0;
  }
}

@media (max-width: 575px) {
  .tmb_blog_slider_image .swiper-slide img{
    min-height: 520px;
    object-fit: cover;
    height: 100%;
  }
  .sec_content.bg-black {
    padding: 67px 0 125px;
  }
}
</style>

<style>

/* Slider Css Code */

/* .sec_video.modify-slider .swiper-slide img{
  display: block;
  height: 100%;  
} */

.sec_video.modify-slider .swiper-slide{
  height: initial;  
}
.sec_video.modify-slider .swiper-button-prev, .modify-slider .swiper-button-next{
  background-color:#fff;
}
.sec_video.modify-slider .swiper-button-prev{
  left: 5px;
  
}
.sec_video.modify-slider .swiper-button-next{
  right: 5px;
}

.sec_video .swiper-slide.swiper-slide .product_info_card{
    transform: translateX(0);
}

@media (max-width: 575px) {
  .shop_cta{
    margin-left:13px;
  }
}

@media (max-width: 480px) {
  .swiper.product_info_card {
    height: 100%;
    width: 100%;
  }
  .video_sec .product_info_card {
    max-width: 100%;
    height: 100%;
    width: 100%;
  }
  .video_sec .swiper-button-next,
  .video_sec .swiper-button-prev {
    display: block !important;
  }
  .product_info_card .product_info_card a img{
    height: 266px;
    object-fit: cover;
  }
}
</style>
