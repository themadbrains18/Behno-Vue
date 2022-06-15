<template>

  <!-- ====== Shoping cart Default template ====== -->
  <section class="cart_default_sec" v-bind:style="(cartData.item_count == 0 ) ? 'display:block' : 'display:none'">
    <div class="big_container">
      <div class="sec_head">
        <div class="pre_arrow_wrapper">
          <button class="prev_cta">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/left-arrow-new.svg?v=1654580925"
              alt="error"
            />
          </button>
        </div>
      </div>

      <!-- execute when cart is not empty  -->
      <div class="sec_content">
        <h3 class="cart_heading">{{ shopifyData.defaultSecHeading }}</h3>
        <p class="body_text1">{{ shopifyData.defaultSecInfo }}</p>
        <div class="cta_wrapper">
          
          <div
            v-for="(item, index) in shopifyData.sectionCta"
            :key="index"
          >
            <a :href="item.secCtaLink" class="cta_btn cta_btn-black">
              {{ item.secCta }}
            </a>
          </div>

        </div>
      </div>


    </div>
  </section>

  <!-- ====== Shoping cart With Products template ====== -->
  <section class="cart_with_products" v-bind:style="(cartData.item_count > 0 ) ? 'display:block' : 'display:none'">
    <div class="big_container">
      <div class="sec_head">
        <div class="pre_arrow_wrapper">
          <button class="prev_cta">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/left-arrow-new.svg?v=1654580925"
              alt="error"
            />
          </button>
        </div>
      </div>
      <div class="sec_content">
        <div class="sec_left">
          <h3 class="cart_heading">YOUR BAG</h3>
          <div class="product_grid" id="behno_main_cart">
            <!-- script will pull product cart listing here -->
                     <div class="card" v-for="(value, key) in cartData.items" :key="key">
                            <!-- <a :href=(value.url)> -->
                                <div class="product_img_wrapper" :id="product_img_wrapper" >
                                    <img :src="(value.featured_image.url)" :id="(value.id)" >
                                    <button class="body_text1 remove" :variant=(value.key) @click="removeCart">Remove</button>
                                </div>
                                <h5 class="card-title" >{{ value.product_title }}</h5>
                                <h5 class="card-title bold" >${{ (value.price / 100).toFixed(2) }}</h5>
                            <!-- </a> -->
                        </div>

          </div>
        </div>
        <div class="sec_right">
          <div class="sec_right_inner">
            <h4 class="subtotal_heading">SUBTOTAL</h4>
            <p class="subtotal_price body_text1">${{ (cartData.original_total_price / 100).toFixed(2) }}</p>
            <p class="body_text1">Excluding tax & shipping</p>
            <p class="body_text1 text-mdifier">
              or 4 interest payments of $270 with
            </p>
            <div class="logo_wrapper">
              <img
                src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/after-pay-logo.png?v=1654761076"
                alt="error"
              />
              <p class="body_text1">ⓘ</p>
            </div>
            <div class="cta_wrapper">
              <a class="cta_btn" href="/checkout/">CHECKOUT</a>
              <a href="/collection/all" class="cta_btn cta-modifier">Continue shopping</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.cart_default_sec,
.cart_with_products {
  padding: 45px 50px 179px;
}
.big_container {
  padding: 0;
}
.cart_default_sec {
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
.cart_default_sec .body_text1 {
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
  width: 55%;
}
.cart_with_products .sec_right {
  width: 45%;
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
.cart_with_products .body_text1 {
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
.body_text1.text-mdifier {
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
.body_text1.remove {
  position: absolute;
  top: 10px;
  right: 11px;
  text-decoration: underline;
}
.subtotal_price.body_text1 {
  font-size: 14px;
}

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
</style>

<script>
import { ShopifyAPI } from "../../../Shopify/Shopify";

export default {
  data() {
        return {
            cartData : []
        }
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.refreshMainCart();
  },
  methods :{
    
    refreshMainCart(){
        //    console.log(this.shopifyData.cartItems)
        let cartdata = window.atob(this.shopifyData.cartItems) // decode cart string
        cartdata = JSON.parse(cartdata)

         console.log(cartdata)
         this.cartData = cartdata;

    },
   
    async removeCart (event) {
        var dd = this
        var variant = event.target.getAttribute('variant')
        var shopifyApi = new ShopifyAPI()

        var item = {
            id : variant,
            quantity : 0
        }

       var  newData = await shopifyApi.removeItem(item)

         dd.cartData =  newData.data
    }
  }
};
</script>