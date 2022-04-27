<template>
  <!-- Grid Single Text -->
  <section class="grid_single_text big_container">
    <div class="grid_item">
      <a  :href=(shopifyData.link)  class="grid_img-wrap line-h-0 d-block">
        <v-lazy-image class="grid_img" :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt)  />
        <div class="grid_img_text-wrap">
          <span class="grid_img_text grid_img_text-first"> {{ shopifyData.toptext }} </span>
          <span class="grid_img_text grid_img_text-second"> {{ shopifyData.middletop }} </span>
          <span class="grid_img_text grid_img_text-third"> {{ shopifyData.middlebottom }} </span>
          <span class="grid_img_text grid_img_text-fourth"> {{ shopifyData.bottomtext }} </span>
        </div>
      </a>
      <div class="grid_info">
        <h3 class="card_heading grid_heading">  {{ shopifyData.title }} </h3>
        <a  :href=(shopifyData.link) class="link body_text"> {{ shopifyData.btntext }} </a>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* Single Grid Text */
.grid_single_text {
  padding: 40px 45px 130px;
}
.grid_single_text .grid_img-wrap {
  position: relative;
}
.grid_single_text .grid_img {
  min-height: 132px;
}

.grid_img_text {
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 37px;
  font-weight: 700;
  color: #95c900;
  line-height: 1;
}
.grid_img_text-second {
  top: 30%;
  left: 30%;
}
.grid_img_text-third {
  top: 50%;
  left: 70%;
}
.grid_img_text-fourth {
  top: calc(100% - 35px);
  left: 40%;
  transform: translateY(-100%);
}
@media only screen and (max-width: 991px) {
  /* Grid Text Image */
  .grid_single_text {
    padding: 50px 0px 60px;
  }
  .grid_img_text {
    font-size: 30px;
  }
}
@media only screen and (max-width: 767px) {
  /* Grid Text Image */
  .grid_img_text {
    font-size: 25px;
  }
  .grid_img_text-first {
    top: 11px;
  }
  .grid_img_text-fourth {
    top: calc(100% - 11px);
  }
}
@media only screen and (max-width: 480px) {
  /* Grid Text Image */
  .grid_img_text {
    font-size: 11px;
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
  
  