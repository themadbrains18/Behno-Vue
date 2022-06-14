<template>
  <!-- Grid Three  -->
  <section class="grid_three big_container">
    <div class="grid_item" v-for="(value, key) in shopifyData.box" :key="key">
      <a :href=(value.link) class="grid_img-wrap line-h-0 d-block">
        <v-lazy-image class="grid_img" :src=(value.imgUrl.src)  :src-placeholder=(value.imgUrl.placeholder) :alt=(value.imgUrl.alt) />
      </a>
      <div class="grid_info">
        <h3 class="card_heading grid_heading">{{ value.title }}</h3>
        <a :href=(value.link) class="link body_text"> {{ value.linkText }} </a>
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
    }
  }
};
</script>