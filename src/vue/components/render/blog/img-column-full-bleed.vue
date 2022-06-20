<template>
  <section
    v-if="shopifyData.checkSection == 'true'"
    class="img_column_full_bleed_sec "
  >
    <div class="sec_sontent">
      <div
        v-for="(item, key) in shopifyData.productData"
        :key="key"
        class="sec_img"
      >
        <div class="product_popup">
          <img
            :src="item.previewImg.src"
            :src-placeholder="item.previewImg.placeholder"
            :alt="item.previewImg.alt"
            @click="toggle_selection_for(key)"
          >
          <productPopup
            :product-data="item.productDetail"
            :class="{ active: isactive.includes(key) }"
            @close="toggle_selection_for(key)"
          />
        </div>
        <div class="shop_cta">
          <button
            class="subtitle"
            @click="toggle_selection_for(key)"
          >
            {{ item.productDetail.secCtaText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import productPopup from "../product-popup.vue";

export default {
  components: {
    productPopup,
    
  },
    
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
   data() {
    return {
      windowWidth: window.innerWidth,
      isactive: []
    };
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
};
</script>

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
  z-index: 1;
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
