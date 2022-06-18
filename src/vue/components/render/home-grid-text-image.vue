<template>
  <!-- Grid Text image -->
  <section class="grid_text_image big_container">
    <div class="grid_item">
      <h2 class="main_heading grid_text_image_heading color-white">
        {{ shopifyData.secHeading }}
      </h2>
      <a  :href=(shopifyData.link) class="cta_btn cta_btn-white"> {{ shopifyData.btnText }} </a>
    </div>
    <div class="grid_item grid_item_img">
      <a  :href=(shopifyData.link) class="grid_img-wrap line-h-0 d-block" >
          <template v-if="shopifyData.checkImage === 'true'">
            <video  controls autoplay="true" loop="true" muted="true"  controlsList="nodownload" disablepictureinpicture webkit-playsinline="true" playsinline="true" preload="none" >
              <source :src=(shopifyData.videolink) >
            </video>
          </template>
          <template v-else>
            <v-lazy-image class="grid_img" :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt) />
          </template>
      </a>
    </div>
  </section>
</template>

<style scoped>
.main_heading{
  line-height: 62px;
}
/* Grid Text Image */
.grid_text_image {
  background: #000;
  padding: 65px 15px 120px;
  display: grid;
  grid-template-columns: minmax(auto, 480px) minmax(auto, 720px);
  align-items: center;
  justify-content: center;
  gap: 45px;
}
.grid_text_image_heading {
  margin-bottom: 45px;
} 
@media only screen and (max-width: 991px) {
  /* Grid Text Image */
  .grid_text_image {
    text-align: center;
    padding: 65px 15px 110px;
    grid-template-columns: 1fr;
  }
  .grid_item_img {
    grid-row-start: -1;
  }
}
@media only screen and (max-width: 767px){
  .main_heading{
    font-size: 72px;
  }

}

</style>

<script>
import VLazyImage from "v-lazy-image";
export default {
  components: {
    VLazyImage,
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
};
</script>
