<template>
  <!-- Grid Text image -->
  <section class="grid_text_image big_container">
    <div class="grid_item">
      <h2 class="main_heading grid_text_image_heading color-white">
        {{ shopifyData.secHeading }}
      </h2>
      <a  :href="getHref(link)" class="cta_btn bg-white"> {{ shopifyData.btnText }} </a>
    </div>
    <div class="grid_item grid_item_img">
      <a  :href="getHref(link)" class="grid_img-wrap line-h-0 d-block">
        <v-lazy-image class="grid_img" :src="getImage('image')" />
      </a>
    </div>
  </section>
</template>

<style scoped>
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
    },
  },
  created: function () {
    this.getImage();
    this.getHref();
  },
  methods: {
    getImage($name) {
      var imgObj = this.shopifyData;
      var ImgSrc = "";

      for (let data in imgObj) {
        if ($name == data) {
          ImgSrc = imgObj.image;
        } else {
          continue;
        }
      }
      return ImgSrc;
    },
    getHref($name) {
      var imgObj = this.shopifyData;
      var ImgSrc = "";
      for (let data in imgObj) {
        if ($name == data) {
          ImgSrc = imgObj.link;
        } else {
          continue;
        }
      }
      return ImgSrc;
    },
  },
};
</script>
