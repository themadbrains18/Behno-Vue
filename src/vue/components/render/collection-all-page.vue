<template>
  <div class="product_grid">
    <div class="grid_inner product-containers">
      <div class="product_item" v-for="(value, key) in Products" :key="key">
        <!-- this block work for single product products -->
        <div class="card" v-if="value.hasOwnProperty('single')">
          <a :href="`/products/` + value.single.handle">
            <div
              class="item_left"
              v-bind:class="{ item_left_active: value.totalInventory < 5 }"
              id="item_left_"
            >
              {{
                value.totalInventory <= 5 && value.totalInventory >= 1
                  ? "ONLY " + value.totalInventory + " LEFT"
                  : value.totalInventory == 0
                  ? "Out Of Stock"
                  : ""
              }}
            </div>

            <div
              class="product_img_wrapper"
              v-if="value.single.images.edges.length > 2"
            >
              <img
                :src="value.single.images.edges[0].node.transformedSrc"
                alt="{{ value.single.images.edges[0].node.altText }}"
                class="normal"
              />
              <img
                :src="value.single.images.edges[1].node.transformedSrc"
                alt="{{ value.single.images.edges[0].node.altText }}"
                class="hoverImg"
              />
            </div>
            <div class="product_img_wrapper" v-else>
              <img
                src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
                alt=""
                class="normal"
              />
            </div>

            <h5 class="card-title">
              {{ value.single.title }}
            </h5>
            <h5 class="card-title bold">
              $ {{ value.single.priceRange.minVariantPrice.amount }}
            </h5>
          </a>

          <div class="quickButton quickActive">
            <div class="color_swatches"></div>
            <div class="product_cta_wrapper" data-v-32bfb114="">
              <button
                :id="'quickAdd' + value.single.id.match(/\d+/)"
                class="quickAdd"
                v-bind:class="{
                  quickAdd_deactive: value.single.totalInventory == 0,
                }"
                v-on:click="addToCard"
              >
                <span>Quick Add</span>
              </button>
            </div>
          </div>
        </div>

        <!-- this block work for single product products -->

        <div class="card" v-if="value.hasOwnProperty('variable')">
          <a :href="`/products/` + value.variable[0].handle">
            <div
              class="item_left"
              v-bind:class="{
                item_left_active: value.variable[0].totalInventory < 5,
              }"
              id="item_left_"
            >
              {{
                value.variable[0].totalInventory <= 5 &&
                value.variable[0].totalInventory >= 1
                  ? "ONLY " + value.variable[0].totalInventory + " LEFT"
                  : value.variable[0].totalInventory == 0
                  ? "Out Of Stock"
                  : ""
              }}
            </div>

            <div
              class="product_img_wrapper"
              id="product_img_wrapper6617090588769"
            >
              <img
                :src="value.variable[0].images.edges[0].node.transformedSrc"
                alt="{{ value.variable[0].images.edges[0].node.altText }}"
                class="normal"
              />
              <img
                :src="value.variable[0].images.edges[1].node.transformedSrc"
                alt="{{ value.variable[0].images.edges[0].node.altText }}"
                class="hoverImg"
              />
            </div>
            <h5 class="card-title">
              {{ value.variable[0].title }}
            </h5>
            <h5 class="card-title bold">
              $ {{ value.variable[0].priceRange.minVariantPrice.amount }}
            </h5>
          </a>

          <div class="quickButton quickActive">
            <div class="color_swatches">
              <ul :mainKey="JSON.stringify(value)">
                <li
                  v-for="(sValue, sKey) in value.swatches"
                  :key="sKey"
                  :index="sKey"
                  :link="sValue.link"
                  @click="selectVariation"
                  class="nav-dots"
                  v-bind:class="sKey == 0 ? 'active' : ''"
                >
                  <span>
                    <img
                      :src="getThemeAssets(sValue.img)"
                      :class="sValue.img"
                    />
                  </span>
                </li>
              </ul>
            </div>
            <div class="product_cta_wrapper" data-v-32bfb114="">
              <button
                :id="'quickAdd' + value.variable[0].id.match(/\d+/)"
                :variantid="
                  value.variable[0].variants.edges[0].node.id.match(/\d+/)
                "
                qty="1"
                class="quickAdd"
                v-bind:class="{
                  quickAdd_deactive: value.variable[0].totalInventory == 0,
                }"
                v-on:click="addToCard"
              >
                <span>Quick Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { graphQl } from "../../../assets/graphql/collection-query";
import assets from "../../../assets/graphql/assets.json";
import { ShopifyAPI } from "../../Shopify/Shopify"


export default {
  data() {
    return {
      Products: [],
      ErrorCase: false,
      shopifyPagination: false,
      themeAssets: [],
    };
  },
  mounted() {
    this.fetchProdustQuery();
  },
  methods: {
    async fetchProdustQuery() {
      /// fetch shopify graphQl queries
      var queries = new graphQl();

      const options = {
        method: "post",
        url: "https://store-testing-tmb.myshopify.com/api/2022-04/graphql.json",
        headers: queries.queryHeaderRequest(),
        data: queries.allCollectionBuilder(),
      };

// localStorage.setItem("apiData",'');

      if (
        localStorage.getItem("apiData") == null ||
        localStorage.getItem("apiData") == ""
      ) {
        var response = await axios(options)
          .then((response) => {
            localStorage.setItem("apiData", JSON.stringify(response));
            return response;
          })
          .catch((err) => {
            return err;
            // Manage the state of the application if the request
            // has failed
          });
      } else {
        var response = JSON.parse(localStorage.getItem("apiData"));
      }


      // if collection is not exist
      if (response.data.data.products == null) {
        // screen display to user there no product
        this.ErrorCase = true;
        return false;
      }


      var products = response.data.data.products.edges;

      var duplicatePair = []; // collect duplicate pair list

      var productListing = [];

      for (let product in products) {
        /**
         * remove product from the list if already in paired
         */
        if (duplicatePair.includes(products[product].node.handle)) {
          continue;
        }

        /**
         *   get product list filter in already in pair
         */

        var productHandle = products[product].node.handle;
        var metaFields = products[product].node.metafields.edges;
        var links = ""; /// product pair links
        for (let aaa in metaFields) {
          // console.log(metaFields[aaa].node.key == 'variants_products')
          if (metaFields[aaa].node.key == "variants_products") {
            links = metaFields[aaa].node.value;
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
              if (links[lnk].replace("/products/", "") == productHandle) {
              } else {
                bindInPair.push(links[lnk].replace("/products/", ""));
                duplicatePair.push(links[lnk].replace("/products/", ""));
              }
            }
          }
        } else {
          flag = true;
        }

        // console.log(bindInPair.length)

        /**
         * collection all product listing if in same pair
         */

        var productType = {}; // check product type is single or variation

        if (bindInPair.length > 0) {
          var swatch = await this.getSwatch(metaFields);

          var collectPairProducts = [];
          // console.log(swatch)

          for (let swatchPl in swatch) {
            var Phandle = swatch[swatchPl].link;
            for (let childPair in products) {
              //  console.log(products[childPair].node.handle,'===', Phandle)
              if (
                products[childPair].node.handle ==
                Phandle.replace("/products/", "")
              ) {
                collectPairProducts.push(products[childPair].node);
              }
            }
          }

          // console.log(collectPairProducts)

          productType.variable = collectPairProducts;
          productType.swatches = swatch;

          productListing.push(productType);
        } else if (bindInPair.length == 0) {
          // if length is 0 that means no variation

          productType["single"] = products[product].node;
          productListing.push(productType);
        } else if (flag) {
          // else condition will be work if product have no variation

          productListing.push(products[product].node);
        }

        //  if(links.length > )
        // var collectPair = this.collectProductInPair(swatch,bindInPair,productHandle)

        // productListing.push(swatch)
      }

      // console.log(productListing)

      this.Products = [...productListing].slice(0, 12);
    },

    addToCard(event) {
        
        var product = event.target.parentNode
        var variant = product.getAttribute('variantid')
        var dynamic = new ShopifyAPI()

        var item = {
           id : variant,
           qty : 1
        }

        dynamic.addItem(item)

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
        var key = metaFields[meta].node.key;
        if (key == "variants_products") {
          links = metaFields[meta].node.value.split(" ");
        }
        if (key == "variants_swtach") {
          swatchs = metaFields[meta].node.value.split(" ");
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


      /// update link of the grid
      grid
        .getElementsByTagName("a")[0]
        .setAttribute("href", "/products/" + activeProduct.handle); 

      // chnage images of the grid
      grid
        .querySelector("img.normal")
        .setAttribute("src", activeProduct.featuredImage == null ? 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png' : activeProduct.featuredImage.transformedSrc);
     
      grid
        .querySelector("img.hoverImg")
        .setAttribute("src", (activeProduct.images.edges.length >  2) ? activeProduct.images.edges[1].node.transformedSrc : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png');

      // chnage quick button content
       grid
        .querySelector("button")
        .setAttribute("variantid", activeProduct.variants.edges[0].node.id.match(/\d+/));

      if(activeProduct.totalInventory == 0){
          grid.querySelector("button").classList.add('quickAdd_deactive')
      }else{
          grid.querySelector("button").classList.remove('quickAdd_deactive')
      }

      // check how many product are left in product inventory 

      if(activeProduct.totalInventory == 0){
          grid.querySelector(".item_left").classList.add('item_left_active')
          grid.querySelector(".item_left").innerHTML = 'Out Of Stock';
      }else if (activeProduct.totalInventory < 5) {
          grid.querySelector(".item_left").classList.add('item_left_active')
          grid.querySelector(".item_left").innerHTML = 'Only '+activeProduct.totalInventory+' Left';
      }else{
          grid.querySelector(".item_left").classList.remove('item_left_active')
      }



    },
    /**
     * get theme upload assets list
     */

    getThemeAssets(image) {
      // console.log(image)

      let assetsLIst = assets.assets;

      var src = "";
      for (let images in assetsLIst) {
        // console.log(response[images].key )
        if (assetsLIst[images].key == "assets/" + image) {
          src = assetsLIst[images].public_url;
        }
      }

      return src;
    },
  },
};
</script>

<style scoped>
.color_swatches ul {
  display: flex;
  gap: 7px;
}
.color_swatches ul li {
  position: relative;
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

/* ETHICS IN FASHION CSS START */
.ethics_in_fashion {
  padding: 60px 0;
  border-top: 1px solid #000;
}
.ethics_content_inner .body_text,
.ethics_content_inner .sec_heading {
  text-align: center;
}
.ethics_content_inner .body_text {
  margin-bottom: 50px;
}
.fashion_img_grid {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
}
.fashion_img_grid img {
  width: 55px;
}
.apply_filter_cta_wrapper {
  display: none;
}
/* ETHICS IN FASHION CSS END */

/* common css */
/* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} */

body {
  margin: 0px !important;
}
.vue-logo-back {
  background-color: black;
}

img {
  max-width: 100%;
}

.pt-6 {
  padding-top: 1.5rem;
}

.flex {
  display: flex;
}

button {
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
}

button:focus {
  outline: none;
}

ul {
  list-style: none;
  width: 100%;
  text-align: center;
  justify-content: center;
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

.filter-option {
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  z-index: 9;
}

.col {
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
}

label {
  margin: 0;
}

/***** MultiSelect *****/

.dropdown {
  position: relative;
  cursor: pointer;
}

.multiselect {
  position: relative;
}

.sortFilter .multiselect .tmb_header_dopdown {
  right: 0;
  left: auto;
}

.multiselect .tmb_header_dopdown {
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-top: 0;
  border-radius: 0 0 3px 3px;
  left: 0px;
  padding: 20px;
  position: absolute;
  top: 30px;
  width: 100%;
  list-style: none;
  min-width: 260px;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}

.multiselect ul {
  overflow-y: scroll;
  max-height: 250px;
  padding: 10px 0;
  overscroll-behavior: none;
}

.multiselect.active .tmb_header_dopdown {
  top: 0px;
  opacity: 1;
  visibility: visible;
}

.multiselect.active .btn_wrapper {
  opacity: 1;
  visibility: visible;
  padding-top: 10px;
}

.multiselect .btn_wrapper {
  opacity: 0;
  visibility: hidden;
}
.multiselect ul::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.multiselect ul::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(223, 223, 223);
  border-radius: 10px;
}

/* Handle */
.multiselect ul::-webkit-scrollbar-thumb {
  background: rgb(155, 152, 152);
  border-radius: 10px;
}

/* .multiselect ul::-webkit-scrollbar {
    display: none;
} */

.sort_by_inner .multiselect ul {
  left: -204px;
}
.overselect {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.c-form-input {
  background: transparent;
  border: none;
  outline: none;
  color: #000000;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  padding-right: 12px;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.multiselect > .tmb_header_dopdown > ul > li {
  display: flex;
  align-items: center;
  gap: 5px;
}

.multiselect > .tmb_header_dopdown > ul > li:not(:last-child) {
  margin-bottom: 19px;
}

.multiselectOption {
  width: 14px;
  height: 14px;
  display: none;
}

.optionLabel {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #000000;
  position: relative;
  padding-left: 22px;
  cursor: pointer;
  text-align: start;
  text-transform: capitalize;
}

.optionLabel::after {
  position: absolute;
  content: "";
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 14px;
  height: 14px;
  background: #fff;
  border: 1px solid #000;
}

.multiselectOption:checked + label::after {
  background: #000;
}

.btn_wrapper {
  display: flex;
  align-items: center;
  gap: 1px;
  width: 100%;
}

.filterBtn {
  background: #ffffff;
  border: 1px solid #000000;
  padding: 4px 15px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
}
.multiselect .filterBtn:hover {
  background: #000;
  border: 1px solid transparent;
  color: #fff;
}

.filterBtn.modifier {
  background: #000;
  color: #fff;
}

.clearFilter {
  background: #000000;
  padding: 6px;
  max-width: 94px;
  width: 100%;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  justify-content: center;
  color: #ffffff;
  gap: 4px;
  cursor: pointer;
  visibility: hidden;
}

.clearFilter.activeClear {
  visibility: visible;
}

.filter_row {
  padding: 0 15px;
  margin: 115px 0 12px;
  position: sticky;
  top: 0;
  z-index: 4;
}

.filters_inner,
.row_inner {
  display: flex;
  align-items: center;
  gap: 45px;
}

.row_inner {
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  background: #ffff;
  padding: 10px 0;
}

.sortBtn {
  background: transparent;
  padding: 0;
  color: #000;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  gap: 5px;
  align-items: center;
  letter-spacing: 0.02em;
}

.product_grid {
  padding: 0 15px 103px;
}

.grid_inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 6px;
  row-gap: 28px;
}

.grid_inner_max {
  grid-template-columns: repeat(6, 1fr) !important;
  transition: 0.3s;
}

.grid_inner_min {
  grid-template-columns: repeat(2, 1fr) !important;
  transition: 0.3s;
}

.grid_inner .card {
  border: none;
}

.card > img {
  width: 100%;
  height: 100%;
}

.responsiveFilter {
  display: none;
}

.sort_by_inner {
  display: flex;
  align-items: center;
  gap: clamp(20px, 11vw, 150px);
}

.progress {
  background: #252525;
  border-radius: 8px;
  height: 1px;
  width: 134px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
}

.progress::-webkit-slider-thumb {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  -webkit-appearance: none;
  cursor: ew-resize;
  background: #252525;
}

.add_remove {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add_remove button {
  line-height: 0;
}
.nav-dots span {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  box-shadow: 0 0 1px 0 #000;
  border-radius: 50%;
}
.nav-dots span::-webkit-scrollbar {
  display: none;
}

.pt-6 li {
  padding: 10px;
}

.p-2 {
  text-decoration: none;
}

.pageactive .p-2 {
  border-bottom: solid 3px #25a26b;
}

.productnotfound {
  display: block;
  padding: 10%;
  text-align: center;
}

.productfound {
  display: none;
}

.centeralign.addmargin .body_text {
  padding: 20px 0;
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

.quickButton {
  justify-content: space-between;
  display: flex;
  opacity: 0;
  visibility: hidden;
  align-items: center;
  transition: 0.3s;
}

.product_img_wrapper .hoverImg {
  position: absolute;
  left: 0;
  visibility: hidden;
  opacity: 0;
}

.product_item:hover .quickActive,
.product_item:hover .hoverImg {
  opacity: 1;
  visibility: visible;
}
.quickButton ul {
  text-align: left;
  /* width: 50%; */
}
.quickButton .product_cta_wrapper {
  width: 50%;
  text-align: end;
}

.nav-dots {
  /* width: 100%; */
  /* bottom: 9px; */
  /* height: 11px; */
  display: block;
  /* padding: 15px 0px; */
}

.nav-dots .nav-dot {
  top: 0px;
  min-width: 13px;
  height: 13px;
  margin: 0 6px;
  position: relative;
  border-radius: 100%;
  display: inline-block;
  background: red;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  transition: 0.3s;
}

/* .nav-dots .nav-dot:hover {
  background-color: rgba(0, 0, 0, 0.8);
} */

input#img-1:checked ~ .nav-dots label#img-dot-1,
input#img-2:checked ~ .nav-dots label#img-dot-2,
input#img-3:checked ~ .nav-dots label#img-dot-3,
input#img-4:checked ~ .nav-dots label#img-dot-4,
input#img-5:checked ~ .nav-dots label#img-dot-5,
input#img-6:checked ~ .nav-dots label#img-dot-6 {
  background: rgba(0, 0, 0, 0.8);
}
.red {
  background: red;
}
.black {
  background: black;
}
.AZURE {
  background: #007fff;
}
.product-form__color-swatch {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 4px;
}
.item_left {
  text-align: end;
  height: 12px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 12px;
  align-items: center;
  letter-spacing: 0.02em;

  color: #878787;
  visibility: hidden;
}
.out_of_stock img {
  opacity: 0.2;
}
.item_left_active {
  visibility: visible !important;
}
.product_img_wrapper {
  position: relative;
}
.out_of_stock_text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 700;
  font-size: 24px;
  line-height: 12px;
  align-items: center;
  letter-spacing: 0.02em;
  color: red;
  transform: translate(-50%, -50%);
  visibility: hidden;
}
.out_of_stock_text_active {
  visibility: visible !important ;
}
.color_swatches {
  position: relative;
}
.arrow_icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -11px;
  line-height: 0;
  cursor: pointer;
}

/* RSPONSIVE FILTER BTNS CSS START */
.filter_responsive {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  display: none;
}
.filter_responsive .filter_cta_wrapper {
  display: flex;
  align-items: center;
  gap: 2px;
}
.filter_cta {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  background: #e9e7e3;
  border: 1px solid #000000;
  width: 100%;
  padding: 14px;
}
.filters_responsive {
  display: none;
}
/* RSPONSIVE FILTER BTNS CSS END*/
.activecolor {
  border: 1px solid #878787 !important;
}
.product_img_wrapper img {
  width: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .filter .overselect svg,
  .sortFilter svg {
    transition: 0.3s;
  }
  .filter:hover .overselect svg,
  .sortFilter:hover svg {
    transform: rotate(180deg);
  }
}
/* RESPONSIVE BREAKPOINTS START */
@media (max-width: 1440px) {
  .product_img_wrapper img {
    height: 348px;
    max-width: 348px;
  }
}
@media (max-width: 1200px) {
  .product_img_wrapper img {
    height: auto;
    max-width: 348px;
  }
  .quickAdd[data-v-bb57343a] {
    padding: 8px 20px;
  }
}
@media (max-width: 1024px) {
  .out_of_stock_text {
    font-size: 14px;
  }
  .grid_inner {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 991px) {
  .progress {
    width: 105px;
  }
}
@media (max-width: 767px) {
  .product_img_wrapper img {
    height: auto;
    max-width: 100%;
    width: 100%;
  }
  .filter_row {
    margin: 18px 0 0px;
    z-index: 5;
  }
  .product_cta_wrapper {
    display: none;
  }
  .grid_inner {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2px;
    row-gap: 11px;
  }
  .card-title {
    font-size: 12px;
    margin: 10px 0 0;
  }
  .product_grid,
  .filter_row {
    padding: 0 2px;
  }
  .product_grid {
    padding-bottom: 80px;
  }
  .filter {
    width: 100%;
  }
  .dropdown {
    display: flex;
    align-items: center;
    width: 100%;

    background: #e9e7e3;
  }
  .overselect svg {
    position: absolute;
    top: 50%;
    right: 0;
    transition: 0.3s;
    transform: translateY(-50%);
  }
  .dropdown.active .overselect svg {
    transform: translateY(-50%) rotate(180deg);
  }
  .filters_responsive {
    display: block;
    z-index: 4;
  }
  .filters,
  .sort_by {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #e9e7e3;
    padding: 11px;
    height: calc(100% - 58px);
    z-index: 9;
    transition: 0.3s;
    overflow-y: scroll;
  }
  /* .qwe{
        height: 380px;
    } */
  .sort_by {
    height: 100%;
    min-height: 100vh;
    transform: translateX(110%);
  }
  .filters {
    transform: translateX(-110%);
  }
  .filters.show,
  .sort_by.show {
    transform: translateX(0);
  }
  .filters_inner {
    flex-direction: column;
    gap: 0;
    margin-top: 45px;
  }
  .filter_responsive {
    display: inline-block;
    margin-top: 11px;
  }
  .row_inner {
    flex-direction: column;
    overflow: hidden;
    position: relative;
    padding: 0;
  }
  .filters .filter_cta_wrapper {
    display: flex;
    gap: 2px;
    width: calc(100% + 18px);
    margin-left: -9px;
  }

  .filters .filter_cta_wrapper .filter-modifier {
    border: none;
  }

  .filters .multiselect ul {
    padding: 10px 0 40px;
  }
  .filters .filter_cta_wrapper .clear-modifier {
    background-color: #000000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }
  .filters .filter_cta_wrapper .clear-modifier.activeClear {
    opacity: 1;
    visibility: visible;
  }
  .filters .filter_cta_wrapper .clear-modifier svg {
    width: 10px;
    height: 10px;
    margin-top: -2px;
  }
  .c-form-input {
    font-size: 18px;
    line-height: 21px;
    padding-right: 0;
  }
  .multiselect .tmb_header_dopdown {
    position: static !important;
    height: 0;
    overflow: hidden;
    background: #e9e7e3;
    box-shadow: none;
    display: inline-block;
  }
  .tmb_header_dopdown .btn_wrapper {
    display: none;
  }
  .optionLabel {
    font-size: 18px;
    line-height: 21px;
    padding-left: 35px;
  }
  .filter .optionLabel {
    padding-left: 30px;
  }
  .filter .multiselect .tmb_header_dopdown {
    padding: 10px 14px 0;
  }
  .filter .multiselect.active .tmb_header_dopdown {
    min-height: 250px;
    /* overflow: visible; */
  }
  .filters_inner .clearFilter {
    display: none;
  }
  .multiselect {
    height: 0;
    overflow: hidden;
    transition: 0.3s;
  }
  .multiselect.active {
    height: 250px;
    overflow: visible;
  }
  .range,
  .sortBtn {
    display: none;
  }
  .sortFilter {
    width: 100%;
  }
  .sort_by .filter-modifier {
    border: none;
    width: 50%;
  }
  .sort_by .filter_cta_wrapper {
    text-align: end;
  }
  .sort_by .multiselect,
  .sort_by .multiselect .tmb_header_dopdown {
    top: 0px;
    opacity: 1;
    visibility: visible;
    height: 250px;
    overflow: visible;
  }
  .sort_by .multiselect ul {
    overflow: unset;
    height: auto;
    max-height: unset;
  }
  .sort_by .tmb_header_dopdown {
    padding: 0;
  }
  .sort_by .multiselect li {
    margin: 0 !important;
    padding: 14px 0 14px 9px;
    border-bottom: 1px solid #000;
  }
  .nav-dots {
    margin-top: 9px;
  }
  .ethics_in_fashion {
    padding: 30px 0 60px;
  }
  .fashion_img_grid {
    gap: 20px;
  }
  .fashion_img_grid img {
    width: 38px;
  }
  .ethics_content_inner .body_text,
  .ethics_content_inner .sec_heading {
    text-align: start;
    padding: 0 12px;
  }
  .filters_inner .filter {
    border-bottom: 1px solid #000;
    padding: 13px 0 13px 9px;
    position: relative;
    overflow: hidden;
  }
  .filters_inner .filter:last-child {
    border-bottom: none;
  }
  .apply_filter_cta_wrapper {
    display: block;
    background: #e9e7e3;
    padding: 11px;
    position: fixed;
    left: 0;
    bottom: 0px;
    transform: translateX(-110%);
    z-index: 99;
    transition: 0.3s;
    width: 100%;
    text-align: center;
  }
  .apply_filter_cta_wrapper.show {
    left: 50%;
    transform: translateX(-50%);
  }
  .apply_filter_cta {
    background: #000000;
    border: 1px solid #000000;
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    padding: 13px;
    transition: 0.3s;
  }
  .multiselect ul {
    overscroll-behavior: unset;
  }
  .filters_inner_row {
    height: 80vh;
    margin-bottom: 45px;
  }
  .apply_filter_cta[disabled] {
    opacity: 0;
    visibility: hidden;
  }
  .color-filter ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  }
}
</style>