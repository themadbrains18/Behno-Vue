<template>
  <section class="sens_of_behno_sec bg-sand">
    <!-- Sec Head -->
    <div class="sec_head">
      <div class="hero-component">
        <h1 class="main_heading item1">{{ shopifyData.secTopHeading }}</h1>
        <div class="hero_img">
          <img :src=(shopifyData.imgUrl.src) :placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt) />
        </div>
        <h1 class="main_heading item2">{{ shopifyData.secBottomHeading }}</h1>
      </div>
      <div class="brief_wrapper"> 
      <p class="body_text t-center">
        {{ shopifyData.secBrief }}
      </p>
      <p class="body_text t-center">
        {{ shopifyData.secBrief2 }}
      </p>
      </div>
      <div class="sec_btn t-center">
        <a :href=(shopifyData.SecBtnLink) class="cta_btn">{{ shopifyData.SecBtn }}</a>
      </div>

    <div class="mobile_stories_wrapper">
        <swiper
            :scrollbar="{ hide: false }"
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
                <div class="card_preview_img">
                    <img :src="value.previewimage.src" />
                </div>
                <div class="slider_product_btn">
                    <a :href=(value.previewimage.storyBtnLink) class="slider_tmb_btn" >
                        <img src="//cdn.shopify.com/s/files/1/0577/1178/8125/t/5/assets/slider-arrow.svg?v=7926845654508591761" alt="error">
                    </a>
                    <span class="color-white subtitle">{{ shopifyData.cardCta }}</span>
                </div>
            </swiper-slide>
            </swiper>
      </div>
    </div>
    <!-- Sec Content -->
    <div class="sec_content">
        <div class="sense_cards">
            <div class="card" v-for="(value, key) in shopifyData.cardData" :key="key">
                <div class="card_img">
                    <img :src=(value.cardImg.src) :placeholder=(value.cardImg.placeholder) :alt=(value.cardImg.src) >
                    <a :href=(value.cardCtaLink) class="cta_btn">{{ value.cardCta }}</a>
                </div>
                <h4 class="card_heading_b">{{ value.cardHeading }}</h4>
                <p class="body_text">{{ value.cardBrief }}</p>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.sens_of_behno_sec {
    padding: 67px 0 117px;
    /* margin-bottom: -200px; */
}
.page\.sense-of-behno {
    background: #ddcec7;
}
.sec_head {
    padding-bottom: 117px;
}
.hero-component {
  position: relative;
}
.hero_img {
  text-align: right;
}
.hero_img img {
  max-width: 1020px;
  width: 100%;
  margin-bottom: 11px;
}
.main_heading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: 200px;   
    margin: 0 auto;
    text-align: center;
    line-height: 64px;
}
.item1 {
  top: 0;
}
.item2 {
  bottom: 30px;
}
.sec_btn{
    margin-top: 40px;
}
.cta_btn {
  padding: 30px 19px;
  background: #000;
  color: #ffff;
}
.for-mobile{
    display: none;
}
.sec_content{
    padding: 0 15px;
}
.sense_cards{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:50px 5px;
}
.card_img{
    position: relative;
}
.card_heading_b{
    margin:16px 0 12px;
}
.card .cta_btn {
    margin: 0;
    padding: 30px 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%,-50%);
    visibility: hidden;
    opacity: 0;
    transition: 0.4s;
}


.card_img img{
    display: block;
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: top;
    transition: 0.3s;
}



.brief_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1px;
}
/* Responsive Breakpoints */
@media(min-width:576px) {
    .card:hover .cta_btn{
        visibility: visible;
        opacity: 1;
    }    
    .card:hover img {
        filter: brightness(30%);
    }
    .mobile_stories_wrapper{
        display: none;
    }
}
@media(min-width:768px){
    .sec_btn{
        display: none;
}
}
@media(max-width:991px){
    .sense_cards {
        grid-template-columns: repeat(2,1fr);
    }
}
@media(max-width:767px){
    .sens_of_behno_sec {
        padding: 48px 0 250px;
    }
    .hero_img .for-mobile{
        display: block;
        width: 411px;
        height: 243px;
        margin: 0 0 0 auto;
    }
    
    .for-desktop{
        display: none;
    }
    .main_heading {
        position: relative;
        transform: none;
        top: 0;
        left: 0;
        text-align: center;
        max-width: 160px;   
    }
    .hero_img img {
        margin-bottom: 0;    
    }
    .item1 {
        margin-bottom: -40px;
    }
    .item2 {
        margin-top: -65px;
    }
    .sec_head .brief_wrapper {
        margin: 66px 0 50px;
        margin-bottom: 0;
    }
    .sec_head {
        padding-bottom: 82px;
    }

    .card .cta_btn{
        padding: 18px;
    }
    .brief_wrapper {
        flex-direction: column;
    }
}
@media(max-width:575px){
    .sense_cards {
        grid-template-columns: 1fr;
        gap:21px;
    }
    .sec_content{
        padding: 0 28px;
    }
    .card_heading_b{
        margin: 11px 0 9px;
    }
}
@media(max-width:480px){
    .card_img img{
        height: 217px;
    }
}
    
</style>
<style>
.page.page\.sense-of-behno{
    background:#DDCEC7 ;
}
</style>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar} from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

export default{
components: {
    Swiper,
    SwiperSlide,
},

setup() {
    return {
      modules: [Navigation, Scrollbar],
    };
},
props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
}
</script>

