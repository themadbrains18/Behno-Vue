<template>
  <section
    v-if="shopifyData.checkSection == 'true'"
    class="image_column_sec"
  >
    <!-- Sec Content -->
    <div class="sec_content">
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
.image_column_sec {
  padding: 30px 30px 0;
}
.sec_content {
  display: flex;
  align-items: center;
  gap: 28px;
  justify-content: center;
}
.sec_img img {
  width: 336px;
  height: 410px;
}
.shop_cta {
  margin-top: 10px;
}

/* Popup card Css start */
.product_popup {
  position: relative;
  overflow: hidden;
}
.product_popup img {
  display: block;
}
.sec_img .product_popup > img {
  transition: 0.3s linear;
}
/* Popup card Css end */

/* Responsive Breakpoints */
@media (max-width: 767px) {
  .sec_content {
    flex-direction: column;
    gap: 42px;
  }
  .image_column_sec {
    padding: 30px 0px 66px;
  }
  .sec_img img {
    width: 390px;
    height: 478px;
  }
  .shop_cta .subtitle {
    margin-left: 13px;
  }
}

@media (max-width: 575px) {
  .shop_cta .subtitle{
    margin-top: 0;
  } 
}

</style>

