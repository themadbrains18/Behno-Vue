<template>
  <!-- Grid Single  -->
  <section class="grid_single big_container">
    <div class="grid_item">
      <a :href=(shopifyData.link) class="grid_img-wrap single line-h-0 d-block">
        <v-lazy-image class="grid_img single"  :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt) :style="{ height: shopifyData.imageHeight + 'px'}" />
      </a>
      <div class="grid_info">
        <h3 class="card_heading grid_heading">{{ shopifyData.title }}</h3>       
        <a :href=(shopifyData.link)  class="link body_text"> {{ shopifyData.linktext }} </a>
      </div>
    </div>
  </section>
</template> 

<style scoped>
.grid_single {
  padding: 40px 15px 20px;
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
    }
  }
};
</script>