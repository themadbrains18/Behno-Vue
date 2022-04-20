<template>
  <!-- Grid Two  -->
  {{ box }}
  <section class="grid_two big_container">
    <div class="grid_item" v-for="(value, key) in shopifyData.box" :key="key">
      <a href="#" class="grid_img-wrap line-h-0 d-block">
        <v-lazy-image class="hero_img" :src="getImage(key)" alt="Hero Image" />
      </a>
      <div class="grid_info">
        <h3 class="card_heading grid_heading">{{ value.title }}</h3>
        <a :href="getHref(key)" class="link body_text"> Clickable link. </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Two Grid */
.grid_two {
  padding: 0 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px 5px;
}
.grid_img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.grid_heading {
  margin: 7px 0 5px;
}
@media only screen and (max-width: 991px) {
  .grid_two {
    padding: 0;
  }
}
@media only screen and (max-width: 767px) {
  .grid_two {
    grid-template-columns: 1fr;
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
      var imgObj = this.shopifyData.box;
      var ImgSrc = "";

      for (let data in imgObj) {
        if ($name == data) {
          ImgSrc = imgObj[data].imgUrl;
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
