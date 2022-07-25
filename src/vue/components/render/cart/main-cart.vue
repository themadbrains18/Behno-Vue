<template>
  <!-- ====== Shoping cart Default template ====== -->
  <section
    class="cart_default_sec"
    :style="cartData.item_count == 0 ? 'display:block' : 'display:none'"
  >
    <div class="big_container">
      <div class="sec_head">
        <div class="pre_arrow_wrapper">
          <button class="prev_cta">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/left-arrow-new.svg?v=1654580925"
              alt="error"
            >
          </button>
        </div>
      </div>
      <div class="sec_content">
        <h3 class="cart_heading">
          {{ shopifyData.defaultSecHeading }}
        </h3>
        <p class="body_text">
          {{ shopifyData.defaultSecInfo }}
        </p>
        <div class="cta_wrapper">
          <template
            v-for="(item, index) in shopifyData.sectionCta"
            :key="index"
          >
            <a
              :href="item.secCtaLink"
              class="cta_btn cta_btn-black"
            >
              {{ item.secCta }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>

  <!-- ====== Shoping cart With Products template ====== -->
  <section
    class="cart_with_products"
    :style="(cartData.item_count > 0 ) ? 'display:block' : 'display:none'"
  >
    <div class="big_container">
      <div class="sec_head">
        <div class="pre_arrow_wrapper">
          <button class="prev_cta">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/left-arrow-new.svg?v=1654580925"
              alt="error"
            >
          </button>
        </div>
      </div>
      <div class="sec_content">
        <div class="sec_left">
          <h3 class="cart_heading">
            {{ shopifyData.defaultSecHeading }}
          </h3>
          <div class="product_grid">
            <div
              v-for="(value, key) in cartData.items"
              :key="key"
              class="card"
            >
              <!-- <a :href=(value.url)> -->
              <div
                :id="product_img_wrapper"
                class="product_img_wrapper"
              >
                <div class="loder_tmb"> 
                  <span /><span />
                  <span /><span />
                  <span />
                </div>
                <img
                  :id="value.id"
                  :src="value.featured_image.url"
                >
                <button
                  class="body_text1 remove"
                  :variant="value.key"
                  @click="removeCart"
                >
                  Remove
                </button>
              </div>
              <h5 class="card-title">
                {{ value.product_title }}
              </h5>
              <h5 class="card-title bold">
                ${{ (value.price / 100).toFixed(2) }}
              </h5>
              <!-- </a> -->
            </div>
          </div>
        </div>
        <div class="sec_right">
          <div class="sec_right_inner">
            <h4 class="subtotal_heading">
              {{ shopifyData.subtotalHeading }}
            </h4>
            <p class="subtotal_price body_text">
              ${{ (cartData.original_total_price / 100).toFixed(2) }}
            </p>
            <p class="body_text">
              {{ shopifyData.taxInfo }}
            </p>
            <p class="body_text text-mdifier">
              or 4 interest payments of $270 with
            </p>
            <div class="logo_wrapper">
              <img
                src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/after-pay-logo.png?v=1654761076"
                alt="error"
              >
              <p class="body_text">
                ⓘ
              </p>
            </div>
            <div class="cta_wrapper">
              <a
                class="cta_btn"
                href="/checkout"
              >
                {{ shopifyData.checkoutCtaText }}
              </a>
              <a
                :href="shopifyData.continuCtaLink"
                class="cta_btn cta-modifier"
              >{{ shopifyData.continuCtaText }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ====== Thanks template ====== -->
  <section class="thanks_sec">
    <div class="big_container">
      <div class="sec_head">
        <div class="pre_arrow_wrapper">
          <button class="prev_cta">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/left-arrow-new.svg?v=1654580925"
              alt="error"
            >
          </button>
        </div>
      </div>
      <div class="sec_content">
        <h3 class="cart_heading">
          {{ shopifyData.thanksSecHeading }}
        </h3>
        <p class="body_text">
          {{ shopifyData.thanksSecInfo }}
        </p>
        <div class="cta_wrapper">
          <a
            :href="shopifyData.ThanksSecCtaLink"
            class="cta_btn cta_btn-black"
          >{{ shopifyData.ThanksSecCtaText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { ShopifyAPI } from "../../../Shopify/Shopify";

export default {
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cartData: [],
    };
  },
  mounted() {
    this.refreshMainCart();
  },
  methods: {
    refreshMainCart() {

      //    console.log(this.shopifyData.cartItems)
      let cartdata = window.atob(this.shopifyData.cartItems); // decode cart string
      cartdata = JSON.parse(cartdata);

      this.cartData = cartdata;
    },
    async removeCart(event) {
      var dd = this;
      event.target.closest(".card").classList.add("active")
      var variant = event.target.getAttribute("variant");
      var shopifyApi = new ShopifyAPI();
      var item = {
        id: variant,
        quantity: 0,
      };
      var newData = await shopifyApi.removeItem(item);
      event.target.closest(".card").classList.remove("active")
      await new Promise(r => setTimeout(r, 500));
      dd.cartData = newData.data;
      
    },
  },
};
</script>


<style scoped>


.cart_default_sec,
.cart_with_products,
.thanks_sec {
  padding: 45px 50px 179px;
}
.big_container {
  padding: 0;
}
.cart_default_sec,
.thanks_sec {
  display: none;
}
.cart_default_sec .sec_content {
  max-width: 365px;
  width: 100%;
  margin: 43px auto 0;
}
.pre_arrow_wrapper img {
  cursor: pointer;
}
.cart_heading {
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 42px;
}
.cart_default_sec .body_text {
  margin-bottom: 41px;
  font-family: "Helvetica Neue", sans-serif;
}
.cta_wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 45px;
}
.cart_with_products .cart_heading {
  margin: 47px 0 27px;
}
.cart_with_products .sec_content {
  display: flex;
  align-items: flex-start;
  gap: 170px;
}
.cart_with_products .sec_left {
  width: 62%;
}
.cart_with_products .sec_right {
  width: 38%;
  height: 100vh;
  position: sticky;
  top: 100px;
  left: 0;
  padding-left: 70px;
  border-left: 1px solid #000;
}
.product_grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6px;
  row-gap: 28px;
}
.card .card-title {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  margin-top: 6px;
}
.card-title.bold {
  font-weight: 700;
}
.subtotal_heading {
  margin-bottom: 41px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #000000;
}
.cart_with_products .body_text {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 12px;
  line-height: 14px;
}
.subtotal_price {
  font-weight: bold;
}
.logo_wrapper {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.logo_wrapper img {
  width: 90px;
}
.body_text.text-mdifier {
  margin-top: 15px;
  font-weight: 600;
}

.cart_with_products .cta_btn {
  padding: 20px 19px;
  background: #000;
  color: #ffff;
  max-width: 377px;
  width: 100%;
  text-align: center;
  border: 1px solid transparent;
}
.cart_with_products .cta_btn.cta-modifier {
  padding: 0;
  background: unset;
  color: #000;
  max-width: 100%;
  width: 100%;
  text-align: start;
  border: 1px solid transparent;
  text-decoration-line: underline;
  font-size: 12px;
  font-weight: 400;
}
.cart_with_products .cta_btn:hover {
  border-color: #000;
  background: #fff;
  color: #000;
}
.cart_with_products .cta_btn.cta-modifier:hover {
  border-color: transparent;
  background: unset;
  color: #000;
}
.cart_with_products .cta_wrapper {
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
.product_img_wrapper {
  position: relative;
}
.body_text.remove {
  position: absolute;
  top: 10px;
  right: 11px;
  text-decoration: underline;
}
.subtotal_price.body_text {
  font-size: 14px;
}

/* Thanks sec css */
.thanks_sec .sec_content {
  max-width: 365px;
  width: 100%;
  margin: 43px auto 0;
}
.thanks_sec .sec_content .body_text {
  font-size: 12px;
  line-height: 14.32px;
  font-family: "Helvetica Neue", sans-serif;
}
.thanks_sec .cart_heading {
  margin-bottom: 10px;
}
.thanks_sec .cta_wrapper {
  margin-top: 73px;
}

.body_text1.remove{
    position: absolute;
    text-decoration: underline;
    top: 13px;
    right: 11px;
    z-index: 1;
}
/* RESPONSIVE BREAKPOINTS */
@media (max-width: 1200px) {
  .cart_with_products .sec_content {
    gap: 25px;
  }
}
@media (max-width: 1024px) {
  .cart_with_products .sec_right {
    padding-left: 30px;
  }
}
@media (max-width: 991px) {
  .cart_with_products,
  .cart_default_sec {
    display: none;
  }
}
@media (max-width: 480px) {
  .thanks_sec {
    padding: 45px 20px 179px;
  }
  .thanks_sec .cta_wrapper {
    justify-content: center;
  }
}
</style>
