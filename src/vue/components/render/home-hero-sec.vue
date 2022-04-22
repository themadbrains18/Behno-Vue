<template>
  <!-- Hero Section -->
  

  <section class="hero_sec t-center big_container">
    <h1 class="main_heading heroheading_top">{{ shopifyData.heading }} </h1>
    <a :href="getHref(link)" >
      <v-lazy-image class="hero_img" 
      :src="getImage('imgSrc')" 
      :src-placeholder="getImage('placeHolder')"
      alt="Hero Image"
      />
    </a>
    <h1 class="main_heading heroheading_bottom">{{ shopifyData.subHeading }}</h1>
    
  </section>
</template>

<style scoped>
/* index Hero sec */
.hero_sec {
  padding: 50px 0px 100px;
}
.hero_img {
  margin: 0 auto;
}
.heroheading_top {
  transform: translateY(40%);
}
.heroheading_bottom {
  transform: translateY(-45%);
}

@media only screen and (max-width: 767px) {
  .hero_sec {
    padding: 50px 0px 70px;
  }
  .heroheading_bottom {
    transform: translateY(-35%);
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
      var imgObj = this.shopifyData.heroImage;
      var ImgSrc = "";
      for (let data in imgObj) {
        if ($name == data) {
          ImgSrc = imgObj[data];
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
