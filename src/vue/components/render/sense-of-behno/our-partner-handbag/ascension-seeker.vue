<template>
    <section class="ascension_seeker_sec bg-black">
        <div class="big_container">
            <!-- section content -->
            <div class="sec_content">
                <div class="sec_content_innner">
                    <div class="sec_text">
                        <h2 class="sec_heading"> {{ shopifyData.secHeading }}</h2>
                        <h4 class="card_heading_b"> {{ shopifyData.secSubHeading }} </h4>
                        <p class="body_text" v-for="(item, index) in shopifyData.paragraph" :key="index">
                            {{ item.para }}
                        </p>
                    </div>
                    <div class="sec_img">
                        <img :src=(shopifyData.SecImg.src) :placeholder=(shopifyData.SecImg.placeholder) :alt=(shopifyData.SecImg.alt)>
                    </div>
                </div>
                <!-- section slider -->
                <div class="sec_slider">
                    <swiper
                        :navigation="true"
                        :modules="modules"
                        :centeredSlides="true"
                        :spaceBetween="100"
                        :loop="true"
                        :effect="'fade'"
                        :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false,
                        }"
                        class="mySwiper ascension-seeker-slider">
                        <swiper-slide v-for="(value, key) in shopifyData.SlidedynamicData" :key="key">
                            <img :src=(value.sliderImg.src) :placeholder=(value.sliderImg.placeholder) :alt=(value.sliderImg.src)>
                        </swiper-slide>
                    </swiper>   
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.ascension_seeker_sec{
    padding: 120px 0 84px;
}
.sec_content_innner{
    display: flex;
    align-items: center;
    gap: 70px;
    justify-content: flex-end;
    padding: 0 54px 0;
    margin: 0 0 165px  0;
}
.sec_img{
    width: 50%;
}
.sec_text{
    max-width: 445px;
    width: 100%;
}
.body_text,
.sec_heading,
.card_heading_b
{
    color: #FFFFFF;
}
.body_text{
    margin-bottom: 20px;
}
.body_text:last-child{
    margin-bottom: 0;
}

/* ===== RESPONSIVE BREAKPOINTS START ===== */
@media screen and (max-width: 1024px) {
    .sec_content_innner {
        flex-direction: column;
        gap: 22px;
        margin: 0 0 98px 0;
    }
    .sec_content_innner  > div{
        width: 100%;
        max-width: 100%;
    }
}

@media screen and (max-width: 767px) {
    .ascension_seeker_sec{
        padding: 36px 0 83px;
    }
    .sec_content_innner{
        padding: 0 5px 0;
    }
    .ascension-seeker-slider {
        padding: 0 34px;
        width: calc(100% + 24px);
        margin-left: -12px;
    }
}
</style>

<style>
    .ascension-seeker-slider {
        padding: 0 43px;
        /* height: 654px; */
    }
    .ascension-seeker-slider .swiper-button-prev:after{
        content: url(https://cdn.shopify.com/s/files/1/0577/1178/8125/files/left-arrow.svg?v=1653027823);
        left: -10px;
        position: absolute;
    }
    .ascension-seeker-slider .swiper-button-next:after{
        content: url(https://cdn.shopify.com/s/files/1/0577/1178/8125/files/right-arrow.svg?v=1653027823);
        right: -10px;
        position: absolute;
    }
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay,EffectFade } from "swiper";
export default {
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
      modules: [Navigation,Autoplay,EffectFade]
    };
  }
};
</script>