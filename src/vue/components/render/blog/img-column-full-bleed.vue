<template>
  <section class="img_column_full_bleed_sec "
    v-if="shopifyData.checkSection == 'true'">
    <div class="sec_sontent">
      <div class="sec_img" v-for="(item, key) in shopifyData.productData" :key="key">
        <div class="product_popup" >
          <img
          @click="toggle_selection_for(key)"
            :src="item.previewImg.src"
            :src-placeholder="item.previewImg.placeholder"
            :alt="item.previewImg.alt"
          />
          <productPopup :productData="item.productDetail" :class="{ active: isactive.includes(key) }"  @close="toggle_selection_for(key)" />
        </div>
        <div class="shop_cta">
            <button class="subtitle"   @click="toggle_selection_for(key)" >
                {{ item.productDetail.secCtaText }}
            </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.img_column_full_bleed_sec {
  padding: 49px 0 67px;
}
.sec_sontent {
  display: flex;
  align-items: center;
  gap: 3px;
}
.sec_img img {
  display: block;
}
.shop_cta {
  margin: 11px 0 0 10px;
}

/* Popup card Css start */
.product_popup {
  position: relative;
  overflow: hidden;
}
.product_popup img {
  display: block;
}
.product_info_card {
  position: absolute;
  bottom: 0;
  /* left: -100%; */
  transition: 0.3s linear;
  z-index: 99;
}
.sec_img .product_popup > img {
  transition: 0.3s linear;
}
/* Popup card Css end */

/* Responsive Breakpoints */
@media (max-width: 767px) {
  .img_column_full_bleed_sec {
    padding: 0px 0 88px;
  }
  .sec_sontent {
    flex-direction: column;
    gap: 53px;
    background: #000;
    padding-bottom: 49px;
  }
  .shop_cta {
    margin: 10px 0 0 13px;
  }
  .subtitle {
    color: #fff;
  }
}
</style>

<script>
import productPopup from "../product-popup.vue";

export default {
    
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
 methods: {
    toggle_selection_for(key) {
      if(window.innerWidth <= 768){
        if (this.isactive.includes(key)) {
          this.isactive = this.isactive.filter(
            (item) => item !== key
          );
        } else {
          this.isactive.push(key);
        }
      }
    },
  },
   data() {
    return {
      windowWidth: window.innerWidth,
      isactive: []
    };
  },
  components: {
    productPopup,
    
  },
};
</script>
