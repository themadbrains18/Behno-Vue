<template>
  <!-- Grid Three  -->
  <section class="grid_three big_container">
    <div class="grid_item" v-for="(value, key) in shopifyData.box" :key="key">
      <a href="#" class="grid_img-wrap line-h-0 d-block">
        <v-lazy-image class="grid_img" :src="getImage(key)" alt="Hero Image" />
      </a>
      <div class="grid_info">
        <h3 class="card_heading grid_heading">{{ value.title }}</h3>
        <a :href="getHref(key)" class="link body_text"> {{ value.linkText }} </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Three Grid */
.grid_three {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px 5px;
  padding: 45px 15px 30px;
}
@media only screen and (max-width: 991px) {
  .grid_three {
    padding: 40px 0px 25px;
  }
}
@media only screen and (max-width: 767px) {
  .grid_three {
    grid-template-columns: 1fr 1fr;
  }
  .grid_three .grid_item:first-child {
    grid-column: 2 span;
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
    getImage($name,type = 'src') {
      var imgObj = this.shopifyData.box;
      var ImgSrc = "";
      for (let data in imgObj) {
        if ($name == data) {
           ImgSrc = imgObj[data].imgUrl[type];
        } else {
          continue;
        }
      }
      return ImgSrc;
    },
    getHref($name) {
      var imgObj = this.shopifyData.box;
      var ImgSrc = "";

      for (let data in imgObj) {
        if ($name == data) {
          ImgSrc = imgObj[data].link;
        } else {
          continue;
        }
      }
      return ImgSrc;
    },
  },
};
</script>