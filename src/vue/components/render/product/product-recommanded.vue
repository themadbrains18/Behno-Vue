<template>
  <div>
    <!-- featured Carousel -->
    <section
      v-if="relatedProduct.length > 0"
      class="product_slider big_container modify-slider"
    >
      <h2 class="card_heading product_slider_heading">
        {{ shopifyData.secHeading }}
      </h2>
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="10"
        :mousewheel="{
          invert: false,
          releaseOnEdges: true
        }"
        navigation
      >
        <!-- product Card -->
        <template v-if="shopifyData.showProduct === 'true'">
          <swiper-slide
            v-for="(value, key) in relatedProduct"
            :key="key"
            class="product_item"
          >
            <!-- this block work for single product products -->
            <div
              v-if="value.hasOwnProperty('single')"
              class="card"
            >
              <a :href="`/products/` + value.single.handle">
                <div
                  :id="`item_left_` + value.single.handle"
                  class="item_left"
                  :class="{ item_left_active: value.single.variants[0].inStock < 5 }"
                >
                  {{
                  
                    value.single.variants[0].inStock <= 5 && value.single.variants[0].inStock >= 1
                      ? "ONLY " + value.single.variants[0].inStock + " LEFT"
                      : value.single.variants[0].inStock == 0
                        ? "Out Of Stock"
                        : ""
                  }}
                </div>



                <div
                  v-if="(value.single.images.length > 1)"
                  class="product_img_wrapper"
                >
                  <img
                    :src="value.single.featured_image"
                    alt=""
                    class="normal"
                  >
                  <img
                    :src="value.single.images[1]"
                    alt=""
                    class="hoverImg"
                  >
                </div>
                <div
                  v-else-if="(value.single.images.length == 1)"
                  class="product_img_wrapper"
                >
                  <img
                    :src="value.single.featured_image"
                    alt=""
                    class="normal"
                  >
                </div>
                <div
                  v-else
                  class="product_img_wrapper"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
                    alt=""
                    class="normal"
                  >
                </div>

                <!-- <h5 class="card-title product_title">
                  {{ value.single.title }}
                </h5>
                <h5 class="card-title bold product_price">
                  $ {{ (value.single.price / 100).toFixed(2) }}
                </h5> -->
              </a>

              <div class="quickButton quickActive">
                <div class="color_swatches " />
                <!-- <div class="product_cta_wrapper" data-v-32bfb114="">

                  <span v-if="value.single.variants[0].inStock != 0">
                    <button :id="'quickAdd' + value.single.id" class="quickAdd" :variantid="value.single.variants[0].id"
                      @click="addToCard">
                      <span>Quick Add</span>
                      <div class="loder_tmb">
                        <span /><span />
                        <span /><span />
                        <span />
                      </div>

                    </button>
                  </span>
                </div> -->
              </div>
            </div>

            <!-- this block work for single product products -->

            <div
              v-if="value.hasOwnProperty('variable') && (value.variable.length - 1) >= value.active"
              class="card"
            >
              <a :href="`/products/` + value.variable[value.active].handle">

                <div
                  :id="`item_left_` + value.variable[value.active].handle"
                  class="item_left"
                  :class="{
                    item_left_active: value.variable[value.active].variants[0].inStock < 5,
                  }"
                >
                  {{
                    value.variable[value.active].variants[0].inStock <= 5 &&
                      value.variable[value.active].variants[0].inStock >= 1
                      ? "ONLY " + value.variable[value.active].variants[0].inStock + " LEFT"
                      : value.variable[value.active].variants[0].inStock == 0
                        ? "Out Of Stock"
                        : ""
                  }}
                </div>

                <div
                  v-if="value.variable[value.active].images.length > 2"
                  id="product_img_wrapper6617090588769"
                  class="product_img_wrapper"
                >
                  <img
                    :src="value.variable[value.active].featured_image"
                    alt=""
                    class="normal"
                  >
                  <img
                    :src="value.variable[value.active].images[1]"
                    alt=""
                    class="hoverImg"
                  >
                </div>
                <div
                  v-else-if="value.variable[value.active].images.length == 1"
                  id="product_img_wrapper6617090588769"
                  class="product_img_wrapper"
                >
                  <img
                    :src="value.variable[value.active].featured_image"
                    alt=""
                    class="normal"
                  >
                </div>
                <div
                  v-else
                  class="product_img_wrapper"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
                    alt=""
                    class="normal"
                  >
                </div>

                <!-- <h5 class="card-title product_title">
                  {{ value.variable[value.active].title }}
                </h5>
                <h5 class="card-title bold product_price">
                  $ {{ (value.variable[value.active].price / 100).toFixed(2) }}
                </h5> -->
              </a>

              <div class="quickButton quickActive">
                <div class="color_swatches ">
                  <ul :mainKey="JSON.stringify(value)">
                    <li
                      v-for="(sValue, sKey) in value.swatches"
                      :key="sKey"
                      :index="sKey"
                      :link="sValue.link"
                      class="nav-dots"
                      :class="sKey == value.active ? 'active' : ''"
                      @click="selectVariation"
                    >
                      <span>
                        <img
                          :src="getThemeAssets(sValue.img)"
                          :class="sValue.img"
                        >
                      </span>
                    </li>
                  </ul>
                </div>
                <!-- <div
                  class="product_cta_wrapper"
                  data-v-32bfb114=""
                >
                  <button
                    :id="'quickAdd' + value.variable[value.active].id"
                    :class="{ quickAdd_deactive: value.variable[value.active].variants[0].inStock == 0 }"
                    :variantid="value.variable[value.active].variants[0].id"
                    qty="1"
                    class="quickAdd"
                    @click="addToCard"
                  >
                    <span>Quick Add</span>
                    <div class="loder_tmb"> 
                      <span /><span />
                      <span /><span />
                      <span />
                    </div>
                  </button>
                </div> -->
              </div>
            </div>
          </swiper-slide>
        </template>
        <!-- Custom card -->
      </swiper>
    </section>
    <section
      v-if="relatedProduct.length == 0"
      class="product_slider big_container modify-slider"
    >
      <h2 class="card_heading product_slider_heading">
        {{ shopifyData.secHeading }}
      </h2>
      <p> No Related Product Here </p>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Mousewheel } from "swiper";

import "swiper/css";
import { ShopifyAPI } from "@/vue/Shopify/Shopify";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
  setup() {
    return {
      modules: [Navigation, Mousewheel],
    };
  },
  data() {
    return {
      relatedProduct: [],
      relatedProductWithTag: []
    }
  },
  mounted() {
    this.relatedProducts();

  },
  methods: {

    getThemeAssets(image) {
      var assets = window.atob(this.shopifyData.swatchesImages);
      assets = JSON.parse(assets)

      var src = "";
      for (let images in assets) {
        if (Object.keys(assets[images])[0] == image) {
          src = Object.values(assets[images])[0];
        }
      }
      return src;
    },

    async relatedProducts() {

      /// fetch shopify graphQl queries

      var productData = window.atob(this.shopifyData.collectionListing);
      var Products = JSON.parse(productData);

      let currentProductTag = window.atob(this.shopifyData.productTag);
      currentProductTag = JSON.parse(currentProductTag);

      var filterListing = [];
      var duplicateRecord = [];


      var Categories = currentProductTag

      for (let product in Products) {
        // Products.map(async (e, i) => {
        // product type

        // console.log(e)
        var p = Products[product][0]; /// product object
        var v = Products[product][1]; /// variant object
        var stock = Products[product][2]; /// variant object

        var handle = p.handle;

        /*********************************************************/
        /// category filter applied here (start)
        /*********************************************************/
        if (Categories.length > 0) { // first check if value set
          var catFlag = false

          Categories.map((selectedTags) => {
            if (p.tags.includes(selectedTags)) {
              catFlag = true
            }
          })

          if (catFlag == false)
            continue

        }

        /*********************************************************/
        /// category filter applied here (end)
        /*********************************************************/

        /// filter variants check links exist
        var links = ""; /// product pair links
        for (let varints in v) {
          if ("variants_products" == varints || "variants_swtach" == varints) {
            links = v["variants_products"];
          }
        }

        var bindInPair = []; // product bind in same pair
        var flag = false; // flag for single product

        if (links.includes("/")) {
          links = links.split(" ");
          // console.log(links);

          if ("object" == typeof links) {
            // console.log(links)
            for (let lnk in links) {
              if (links[lnk].replace("/products/", "") == handle) {
                // 
              } else {
                bindInPair.push(links[lnk].replace("/products/", ""));
                duplicateRecord.push(links[lnk].replace("/products/", ""));
              }
            }
          }
        } else {
          flag = true;
        }

        var productType = {}; // check product type is single or variation

        if (bindInPair.length > 0) {

          /*********************************************************/
          /// filter variable product
          /*********************************************************/
          var swatch = await this.getSwatch(v);
          var collectPairProducts = [];

          /*********************************************/
          // default load code for variable products
          /*********************************************/

          var variableActiveIndex = 0
          for (let swatchPl in swatch) {
            var Phandle2 = swatch[swatchPl].link;

            for (let childPair in Products) {
              //  // console.log(products[childPair].node.handle,'===', Phandle)
              if (Products[childPair][0].handle == Phandle2.replace("/products/", "")) {

                if (handle == Products[childPair][0].handle) {
                  variableActiveIndex = swatchPl;
                }
                // console.log(Products[childPair][0]);
                // append stock qty
                Products[childPair][0].variants = this.appendStock(Products[childPair][0].variants, Products[childPair][2]);
                collectPairProducts.push(Products[childPair][0]);
              }
            }
          }

          // console.log(variableActiveIndex)

          productType["variable"] = collectPairProducts;
          productType["swatches"] = swatch;
          productType["active"] = variableActiveIndex

          filterListing.push(productType);

          /*********************************************************/
          /// filter variable product (END)
          /*********************************************************/

        } else if (bindInPair.length == 0) {

          /*********************************************************/
          /// filter apply at single products
          /*********************************************************/
          p.variants = this.appendStock(p.variants, stock);
          productType["single"] = p;
          filterListing.push(productType);

          /*********************************************************/
          /// filter single product (END)
          /*********************************************************/

        } else if (flag) {
          // else condition will be work if product have no variation
          // filterListing.push(p);
        }
      }

      filterListing = this.shuffle(filterListing)

      this.relatedProduct = [...filterListing].slice(0, 100);
    },

    /**
     *  getSwatch filter the json for each product also verify product has variation
     */
    async getSwatch(metaFields, products, activeHandle) {
      // get pair links
      let links = "";
      let swatchs = "";
      let swatchLIST = [];

      for (let meta in metaFields) {
        var key = meta;

        if (key == "variants_products") {
          links = metaFields[meta].split(" ");
        }
        if (key == "variants_swtach") {
          swatchs = metaFields[meta].split(" ");
        }
      }

      // console.log(assets.assets)

      // collection variation if exist
      if (links.length !== 0 && swatchs.length !== 0) {
        //  conbine to link and swatchs

        for (let img in swatchs) {
          var imgLoop = img;
          for (let link in links) {
            if (link == imgLoop) {
              let repeatEl = {};
              repeatEl.img = swatchs[imgLoop];

              repeatEl.link = links[link];
              swatchLIST.push(repeatEl);
            } else {
              continue;
            }
          }
        }
      }

      // activeHandle

      if (swatchLIST.length !== 0) {
        return swatchLIST;
      }

      return false;

      // /**
      //  *  if nothing variation found above loop then return false (It's mean's product have no variation)
      // */
      // return false;
    },
    appendStock(variants, stocks) {
      var newVariants = []
      variants.map((appendStock) => {
        var V_id = appendStock.id
        for (let stok in stocks) {
          if (stok == V_id) {
            var newVar = appendStock
            newVar.inStock = stocks[stok]
            newVariants.push(newVar)
          }
        }
      })
      return newVariants
    },
    shuffle(array) {
      let currentIndex = array.length, randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    },

    selectVariation: (event) => {
      /**
       * targeted element id
       */
      var target = event.target;

      var grid = target.parentNode.parentNode.parentNode.parentNode;

      var children = target.parentNode.children;
      for (var i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }

      // add active call to current active element
      target.classList.add("active");

      // get active index

      var index = target.getAttribute("index");

      var productsData = JSON.parse(target.parentNode.getAttribute("mainkey"));


      // active product
      var activeProduct = productsData.variable[index];
      // update product data

      // change title

      // grid.querySelector(".product_title").innerHTML = activeProduct.title;
      // grid.querySelector(".product_price").innerHTML =
      //   "$ " + (activeProduct.price / 100).toFixed(2);

      /// update link of the grid
      grid
        .getElementsByTagName("a")[0]
        .setAttribute("href", "/products/" + activeProduct.handle);

      // chnage images of the grid
      grid
        .querySelector("img.normal")
        .setAttribute(
          "src",
          activeProduct.images[0] == null ?
            "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png" :
            activeProduct.images[0]
        );

      grid
        .querySelector("img.hoverImg")
        .setAttribute(
          "src",
          activeProduct.images.length > 2 ?
            activeProduct.images[1] :
            "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
        );

      // chnage quick button content
      // console.log(activeProduct)


      // grid
      //     .querySelector("button")
      //     .setAttribute("variantid", activeProduct.variants[0].id);


      // if (activeProduct.variants[0].inStock == 0) {
      //     grid.querySelector("button").classList.add("quickAdd_deactive");
      // } else {
      //     grid.querySelector("button").classList.remove("quickAdd_deactive");
      // }

      // check how many product are left in product inventory

      if (activeProduct.variants[0].inStock == 0) {
        grid.querySelector(".item_left").classList.add("item_left_active");
        grid.querySelector(".item_left").innerHTML = "Out Of Stock";
      } else if (activeProduct.totalInventory < 5) {
        grid.querySelector(".item_left").classList.add("item_left_active");
        grid.querySelector(".item_left").innerHTML =
          "Only " + activeProduct.variants[0].inStock + " Left";
      } else {
        grid.querySelector(".item_left").classList.remove("item_left_active");
      }
    },
  }
};
</script>

<style scoped>
/* featured carousel */
.product_slider {
  padding: 20px 0 60px;
}

.product_slider_heading {
  margin: 0px 0 20px 15px;
}

.product_slider .swiper-slide {
  max-width: 397px;
}

.product_slider .swiper {
  padding-left: 15px;
  padding-bottom: 15px;
}

.color_swatches ul {
  display: flex;
  gap: 7px;
}

.color_swatches ul li {
  position: relative;
  line-height: 0;
}

li.nav-dots:after {
  position: absolute;
  top: -2px;
  width: 101%;
  height: 101%;
  border: 2px solid transparent;
  content: "";
  border-radius: 50%;
  left: -2px;
}

li.nav-dots.active:after {
  border: 2px solid rgba(0, 0, 0, 0.6);
}

.color_swatches ul li img {
  height: 20px;
  width: 20px;
  border-radius: 50%;
}

.color_swatches ul li:hover {
  cursor: pointer;
}

.card-title {
  font-size: 14px;
  text-align: left;
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

.card {
  border: none;
  position: relative;
}

.card .item_left {
  position: absolute;
  top: 7px;
  right: 7px;
  z-index: 1;
}


.card>img {
  width: 100%;
  height: 100%;
}

.product_img_wrapper .hoverImg {
  position: absolute;
  left: 0;
  visibility: hidden;
  opacity: 0;
}

.product_img_wrapper {
  position: relative;
}

.product_img_wrapper img {
  width: 100%;
  /* height: 348px; */
  object-fit: cover;
}

.product_item:hover .quickActive,
.product_item:hover .hoverImg {
  opacity: 1;
  visibility: visible;
}

.product_item:empty {
  display: none;
}

.quickButton {
  justify-content: space-between;
  display: flex;
  opacity: 0;
  visibility: hidden;
  align-items: center;
  transition: 0.3s;
  padding: 8px 0px;
}

.quickAdd {
    border: 1px solid #000;
    padding: 8px 30px;
    background: #ffffff;
    gap: 15px;
    flex-direction: row;
    align-items: flex-start;
    transition: 0.3s;
}

.quickButton .quickAdd:hover {
    background: #000;
}

.quickButton .quickAdd:hover span {
    color: #fff;
}

.quickAdd_deactive {
    visibility: hidden;
}

.quickAdd_active {
    visibility: visible;
}

.quickAdd span {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

@media only screen and (max-width: 991px) {
  .product_slider .swiper {
    padding-left: 5px;

  }
}

@media only screen and (max-width: 768px) {
  .product_slider {
    padding: 10px 0 50px;
  }

  .card-title {
    font-size: 12px;
    margin: 10px 0 0;
  }
}

@media only screen and (max-width: 480px) {
  .product_slider .swiper-slide {
    max-width: 70%;
  }
}

@media only screen and (max-width : 575) {
  .card .item_left {
    top: 5px;
    right: 5px;
  }
}
</style>