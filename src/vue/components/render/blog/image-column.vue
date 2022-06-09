<template>
  <section
    class="image_column_sec bg-sand"
    v-if="shopifyData.checkSection == 'true'"
  >
    <!-- Sec Content -->
    <div class="sec_content">
      <div
        class="sec_img"
        v-for="(item, key) in shopifyData.productData"
        :key="key"
      >
        <div class="product_popup"  >
          <img
            :src="item.previewImg.src"
            :src-placeholder="item.previewImg.placeholder"
            :alt="item.previewImg.alt"
          />
          <productPopup :productData="item.productDetail" :class="{ active: isactive.includes(key) }"  @close="toggle_selection_for(key)"/>
        </div>
        <div class="shop_cta">   
          <button class="subtitle" v-if="windowWidth>768">
              {{ item.productDetail.secCtaText }}
          </button>
            <button class="subtitle"  @click="toggle_selection_for(key)" v-if="windowWidth<=768">
                {{ item.productDetail.secCtaText }}
            </button>
        </div>
      </div>
    </div>
  </section>
</template>
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
</style>

<script>
import productPopup from "../product-popup.vue";

export default {
  components: {
    productPopup,
  },
  methods: {
    toggle_selection_for(key) {
      if (this.isactive.includes(key)) {
        this.isactive = this.isactive.filter(
          (item) => item !== key
        );
      } else {
        this.isactive.push(key);
      }
    },
  },
   data() {
    return {
      windowWidth: window.innerWidth,
      isactive: []
    };
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
};
</script>

