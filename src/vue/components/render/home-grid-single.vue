<template>
  <!-- Grid Single  -->
  <section class="grid_single big_container">
    <div class="grid_item">
      <a
        :href="(shopifyData.link)"
        class="grid_img-wrap single line-h-0 d-block"
      >
        <picture>
          <source
            media="(max-width:767px)"
            :srcset="(shopifyData.responsiveimgUrl.src)"
            :src-placeholder="(shopifyData.responsiveimgUrl.placeholder)"
            :alt="(shopifyData.responsiveimgUrl.alt)"
          >
          <v-lazy-image
            class="grid_img single"
            :src="(shopifyData.imgUrl.src)"
            :src-placeholder="(shopifyData.imgUrl.placeholder)"
            :alt="(shopifyData.imgUrl.alt)"
            :style="{ height: imageHeight + 'px'}"
          />
        </picture>
      </a>
      <div class="grid_info">
        <h3 class="card_heading grid_heading">
          {{ shopifyData.title }}
        </h3>       
        <a
          :href="(shopifyData.link)"
          class="link body_text"
        > {{ shopifyData.linktext }} </a>
      </div>
    </div>
  </section>
</template> 

 

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
  },
  data() {
    window.addEventListener("resize",this.setImageHeight);
    return {
      imageHeight : 'auto'
    }
  },
  mounted() {
    this.setImageHeight()
  },
  methods:{
    setImageHeight(){
      if(window.innerWidth >= 768 ){
        this.imageHeight = this.shopifyData.imageHeight;
      }
      else{
        this.imageHeight = this.shopifyData.MobileimageHeight;
      }
    }
  }
};
</script>


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