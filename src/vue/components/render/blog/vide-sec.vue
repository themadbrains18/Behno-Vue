<template>
  <section class="video_sec" v-if="shopifyData.checkSection == 'true'">
    <!-- Sec Head -->
    <div class="sec_head" v-if="shopifyData.SectionShow == 'true'">
      <h1 class="main_heading">{{ shopifyData.SecHeading }}</h1>
    </div>
    <!-- Sec Content -->
    <div
      class="sec_content bg-black"
      v-if="shopifyData.VideoShow === 'true'"
    >
      <div class="sec_video modify-slider">
          <div class="tmb_blog_slider_image">
            <div v-if="shopifyData.CheckVideoImage == 'false'">
            <video
                class="subtitle"
                @click="toggle_selection_for(key)"
                autoplay="true"
                loop="true"
                muted="true"
                webkit-playsinline="true"
                playsinline="true"
                preload="none"
            >
                <source :src="shopifyData.videolink" />
            </video>
            </div>  
            <div class="sec_image_slider" v-if="shopifyData.CheckVideoImage == 'true'">
                <div class="sec_content modify-slider " @click="toggle_selection_for(key)">
                    <swiper  :effect="'fade'" :autoplay="{ delay: 1500, disableOnInteraction: false, }"
                    :modules="modules"
                    :centeredSlides="true"
                    :spaceBetween="100"
                    :loop="true"
                    class="mySwiper">
                    <swiper-slide v-for="(value, key) in shopifyData.SliderImagesData" :key="key" >
                        <img :src="value.SliderImage.src" :src-placeholder="value.SliderImage.placeholder" :alt="value.SliderImage.alt"  />
                    </swiper-slide>
                    </swiper>
                </div>
            </div>
            <swiper
            :class="{ active: isactive.includes(key) }"
            class="product_info_card"
            :modules="modules"
            :slidesPerView="'1'"
            :mousewheel="{ invert: false, releaseOnEdges: true }"
            navigation-
            >
            <swiper-slide
                v-for="(product, index) in shopifyData.productData"
                :key="index"
                
            >
                <productPopup
                :productData="product"
                :class="{ active: isactive.includes(key) }"
                @close="toggle_selection_for(key)"
                />
            </swiper-slide>
            </swiper>
          </div>
        <div class="shop_cta" v-if="shopifyData.checkShopBtn == 'true'">
          <button class="subtitle" @click="toggle_selection_for(key)">
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

  setup() {
    return {
      modules: [Navigation, Autoplay, EffectFade],
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
  data() {
    window.addEventListener("scroll",()=>{
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
    });
    return {
      windowWidth: window.innerWidth,
      isactive: [],
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
.product_info_card {
  position: absolute !important;
  width: 240px;
  height: 340px;
}

.video_sec.active .sec_content.bg-black{
  background: #000;
}

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
</style>

<style>
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

  .video_sec .swiper-slide img{
    min-height: 520px;
  }
}
</style>
