<template>
  <!-- Grid Single  -->
  <section class="grid_single big_container">
    <div class="grid_item">
      <a :href="getHref('link')" class="grid_img-wrap line-h-0 d-block">
        <v-lazy-image class="grid_img" :src="getImage('imgUrl')" alt="Hero Image" />
      </a>
      <div class="grid_info">
        <h3 class="card_heading grid_heading">{{ shopifyData.title }}</h3>       
        <a :href="getHref('link')" class="link body_text"> Clickable link. </a>
      </div>
    </div>
  </section>
</template> 

<style scoped>
.grid_single {
  padding: 40px 15px 20px;
}
.grid_single .grid_img {
  min-height: 239px;
}
@media only screen and (max-width: 991px) {
  .grid_single {
    padding: 0px 0px 35px;
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
    getImage($key) {
      var imgObj = this.shopifyData;
      var ImgSrc = "";

      for (let data in imgObj) {

        if ($key == data) {
          ImgSrc = imgObj.imgUrl;
        } else {
          continue;
        }
      }
      return ImgSrc;
    },
    getHref($key) {
      var imgObj = this.shopifyData;
      var link = "";
      
      for (let data in imgObj) {
        if ($key == data) {
          link = imgObj.link;
        } else {
          continue;
        }
      }
      return link;
    },
  },
};
</script>