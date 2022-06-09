<template>
  <section class="video_sec" v-if="shopifyData.checkSection == 'true'">
    <!-- Sec Head -->
    <div class="sec_head bg-sand" v-if="shopifyData.SectionShow == 'true'">
      <h1 class="main_heading">{{ shopifyData.SecHeading }}</h1>
    </div>
    <!-- Sec Content -->
    <div
      class="sec_content bg-black t-center"
      v-if="shopifyData.VideoShow === 'true'"
    >
      <video
        autoplay="true"
        loop="true"
        muted="true"
        webkit-playsinline="true"
        playsinline="true"
        preload="none"
      >
        <source :src="shopifyData.videolink" />
      </video>
      <!-- <productPopup :productData="item.productDetail" :class="{ active: isactive.includes(key) }"  @close="toggle_selection_for(key)"/> -->
        <!-- <div class="shop_cta">   
            <button class="subtitle" v-if="windowWidth>768">
              {{ item.productDetail.secCtaText }}
            </button>
            <button class="subtitle"  @click="toggle_selection_for(key)" v-if="windowWidth<=768">
                {{ item.productDetail.secCtaText }}
            </button>
        </div> -->
    </div>
  </section>
</template>
<script>
// import productPopup from "../product-popup.vue";
export default {
  components: {
    // productPopup,
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
//     data:()=>{
//     return {
//         isactive: [],
//         windowWidth: window.innerWidth
//     }
//   },
//   methods: {
//     toggle_selection_for(key) {
//       if (this.isactive.includes(key)) {
//         this.isactive = this.isactive.filter((item) => item !== key);
//       } else {
//         this.isactive.push(key);
//       }
//     },
//   },
};
</script>

<style scoped>
.sec_head {
  padding: 43px 40px 15px;
}
video {
  height: 570px;
  object-fit: cover;
  max-width: 1020px;
}
.main_heading {
  color: #ef0000;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 700;
  line-height: 69px;
}
.sec_content {
  padding: 110px 54px 100px;
}
.sec_content iframe {
  max-width: 1020px;
  margin: 0 auto;
}
.sec_content.bg-black iframe {
  width: 100%;
  height: 570px;
}
/* Responsive Breakpoints */
@media (max-width: 767px) {
  .sec_content {
    padding: 67px 57px 159px;
  }
  .sec_head {
    padding: 0 13px 60px;
  }
  .main_heading {
    font-size: 27px;
    line-height: 27px;
  }
  .sec_content.bg-black iframe {
    height: 155px;
  }
  video {
    height: 400px;
  }
}

@media (max-width: 767px) {
  video {
    height: 203px;
  }
}
</style>