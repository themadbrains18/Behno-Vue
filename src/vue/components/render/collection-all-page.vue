<template>
  <div class="filter_responsive">
    <div class="filter_cta_wrapper">
      <button id="filterCta" class="filter_cta" @click="myFilter">
        {{ shopifyData.filterDropdownTextResponsive }}
      </button>
      <button id="sortCta" class="filter_cta" @click="sortBy">
        {{ shopifyData.sortByDropdownTextResponsive }}
      </button>
    </div>
  </div>
  <!-- Collacction Banner Code -->

  <div class="collaction_banner">
    <h2 class="cross_heading">
       {{ shopifyData.bannerHeading }}
    </h2>
    <div>
      <img :src="shopifyData.bannerImage" />
      <h2 class="banner_heading">{{ shopifyData.bannerHeading }}</h2>
    </div>
  </div>



  <div class="filter_row">
    <div class="row_inner">
      <div class="apply_filter_cta_wrapper">
        <button class="apply_filter_cta" disabled @click="applyfilter">
          {{ shopifyData.applyFilterCta }}
        </button>
      </div>
      <div class="filters">
        <div class="filters_inner_row">
          <div class="filters_responsive">
            <div class="close-btn" @click="closeMenu">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8861 11.8864L35.6587 35.6589"
                  stroke="#656565"
                  stroke-width="1.5"
                />
                <path
                  d="M11.8861 35.6586L35.6587 11.886"
                  stroke="#656565"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div class="filter_cta_wrapper">
              <button class="filter_cta filter-modifier">
                {{ shopifyData.filterinnerResponsive }}
              </button>
              <button
                class="filter_cta clear-modifier"
                :class="{ activeClear: showClearAll }"
                @click="clearAllFilter()"
              >
                CLEAR FILTERS
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-bb57343a=""
                >
                  <path
                    d="M0.5 1L5 5.5L2.75 3.25L0.5 1Z"
                    stroke="white"
                    data-v-bb57343a=""
                  />
                  <path
                    d="M5 1L0.5 5.5L2.75 3.25L5 1Z"
                    stroke="white"
                    data-v-bb57343a=""
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="filters_inner" >
            <!-- Categories filter -->
            <div
              class="filter"
              @mouseenter="isMobile == true ? null : (show = true)"
              @mouseleave="isMobile == true ? null : (show = false)"
              @click="isMobile == false ? null : closeDropDown(show, 'show')"
              v-if="(hideCategorydropdown === 1)"
            >
              <!-- v-on:mouseover="show = !show" -->
              <div
                class="dropdown"
                @click="
                  (event) => {
                    addActive(event);
                  }
                "
              >
                <div class="overselect">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="black"
                      stroke-width="0.75"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <button class="c-form-input">Categories</button>
              </div>
              <div class="multiselect" :class="{ active: show }" >
                <div class="tmb_header_dopdown">
                  <ul>
                    <li
                      v-for="option in ddTestCategory[0]"
                      :key="'Categories_' + option.id"
                   >
                      <input
                        :id="'Categories_' + option.id"
                        class="multiselectOption"
                        type="checkbox"
                        name="category"
                        :value="option.value"
                        @change="onCheck($event)"
                      />
                      <label
                        class="optionLabel"
                        :for="'Categories_' + option.id"
                        >{{ option.text.toLowerCase() }} </label
                      >
                    </li>
                  </ul>
                  <div class="btn_wrapper">
                    <!-- <button class="filterBtn modifier" @click="filterProduct">Apply</button> -->
                    <button
                      class="filterBtn"
                      @click="clearCheckBoxs('category')"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- color filter -->
            <div
              class="filter color-filter"
              @mouseenter="isMobile == true ? null : (showColor = true)"
              @mouseleave="isMobile == true ? null : (showColor = false)"
              @click="
                isMobile == false ? null : closeDropDown(showColor, 'showColor')
              "
            >
              <div
                class="dropdown"
                @click="
                  (event) => {
                    addActive(event);
                  }
                "
              >
                <div class="overselect">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="black"
                      stroke-width="0.75"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <button class="c-form-input">Color</button>
              </div>
              <div class="multiselect" :class="{ active: showColor }">
                <div class="tmb_header_dopdown">
                  <ul>
                    <li
                      v-for="option in ddTestColor[0]"
                      :key="'Color_' + option.id"
                    >
                      <input
                        :id="'Color_' + option.id"
                        class="multiselectOption"
                        type="checkbox"
                        name="color"
                        :value="option.value"
                        @change="onCheckColor($event)"
                      />
                      <label class="optionLabel" :for="'Color_' + option.id"
                        >{{ option.text.toLowerCase() }}</label
                      >
                    </li>
                  </ul>
                  <div class="btn_wrapper">
                    <!-- <button class="filterBtn modifier" @click="filterProductByColor">Apply</button> -->
                    <button class="filterBtn" @click="clearCheckBoxs('color')">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- size filter -->
            <div
              class="filter size-filter"
              @mouseenter="isMobile == true ? null : (showSize = true)"
              @mouseleave="isMobile == true ? null : (showSize = false)"
              @click="
                isMobile == false ? null : closeDropDown(showSize, 'showSize')
              "
            >
              <div
                class="dropdown"
                @click="
                  (event) => {
                    addActive(event);
                  }
                "
              >
                <div class="overselect">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="black"
                      stroke-width="0.75"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <button class="c-form-input">Size</button>
              </div>
              <div class="multiselect" :class="{ active: showSize }">
                <div class="tmb_header_dopdown">
                  <ul>
                    <li v-for="option in ddTestSize" :key="'Size_' + option.id">
                      <input
                        :id="'Size_' + option.id"
                        class="multiselectOption"
                        type="checkbox"
                        name="size"
                        :value="option.value"
                        @change="onCheckSize($event)"
                      />
                      <label class="optionLabel" :for="'Size_' + option.id"
                        >{{ option.text.toLowerCase() }} </label
                      >
                    </li>
                  </ul>
                  <div class="btn_wrapper">
                    <!-- <button class="filterBtn modifier" @click="filterProductBySize">Apply</button> -->
                    <button class="filterBtn" @click="clearCheckBoxs('size')">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- material filter -->
            <div
              class="filter filter-modifier"
              @mouseenter="isMobile == true ? null : (showMaterial = true)"
              @mouseleave="isMobile == true ? null : (showMaterial = false)"
              @click="
                isMobile == false
                  ? null
                  : closeDropDown(showMaterial, 'showMaterial')
              "
            >
              <div
                class="dropdown"
                @click="
                  (event) => {
                    addActive(event);
                  }
                "
              >
                <div class="overselect">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="black"
                      stroke-width="0.75"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <button class="c-form-input">Material</button>
              </div>
              <div class="multiselect" :class="{ active: showMaterial }">
                <div class="tmb_header_dopdown">
                  <ul>
                    <li
                      v-for="option in ddTestMaterial[0]"
                      :key="'Material_' + option.id"
                    >
                      <input
                        :id="'Material_' + option.id"
                        class="multiselectOption"
                        type="checkbox"
                        name="material"
                        :value="option.value"
                        @change="onCheckMaterial($event)"
                      />
                      <label class="optionLabel" :for="'Material_' + option.id"
                        >{{ option.text.toLowerCase() }} </label
                      >
                    </li>
                  </ul>
                  <div class="btn_wrapper">
                    <!-- <button class="filterBtn modifier" @click="filterProductByMaterial">Apply</button> -->
                    <button
                      class="filterBtn"
                      @click="clearCheckBoxs('material')"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Clear Filter -->
            <div class="filter">
              <button
                class="clearFilter"
                :class="{ activeClear: showClearAll }"
                @click="clearAllFilter()"
              >
                Clear filters
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 1L5 5.5L2.75 3.25L0.5 1Z" stroke="white" />
                  <path d="M5 1L0.5 5.5L2.75 3.25L5 1Z" stroke="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="sort_by">
        <div class="filters_responsive">
          <div class="close-btn" @click="closeMenu">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8861 11.8864L35.6587 35.6589"
                stroke="#656565"
                stroke-width="1.5"
              />
              <path
                d="M11.8861 35.6586L35.6587 11.886"
                stroke="#656565"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div class="filter_cta_wrapper">
            <button class="filter_cta filter-modifier">
              {{ shopifyData.sortinnerResponsive }}
            </button>
          </div>
        </div>
        <div class="sort_by_inner">
          <div class="range">
            <div class="add_remove">
              <button>-</button>
              <button>+</button>
            </div>
            <input
              id="ageInputId"
              type="range"
              value="{{gridColumn}}"
              min="2"
              max="6"
              step="2"
              class="progress"
              @input="sliderChange($event)"
            />
          </div>
          <div
            class="sortFilter"
            @mouseenter="showSort = true"
            @mouseleave="showSort = false"
          >
            <button class="sortBtn">
              Sort By
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-v-35171425=""
                  d="M1 1L5 5L9 1"
                  stroke="black"
                  stroke-width="0.75"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="multiselect" :class="{ active: showSort }">
              <div class="tmb_header_dopdown">
                <ul>
                  <li v-for="option in ddTestSort" :key="option.id">
                    <input
                      :id="option.id"
                      class="multiselectOption" :class="{ isPercentShow: option.value == 'Discount' && isPercentDiscount == false }"
                      type="radio"
                      name="sort"
                      :checked="option.id == 'sort1' ? true : false"
                      :value="option.value"
                      @change="onCheckSort($event)"
                    />
                    <label
                      class="optionLabel" :class="{ isPercentShow: option.value == 'Discount' && isPercentDiscount == false }"
                      :for="option.id"
                      @click="
                        (event) => {
                          closeSortMenu(event);
                        }
                      "
                      >{{ option.text }}</label
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="product_grid">
    <div
      class="grid_inner product-containers"
      :class="{ grid_inner_max: gridMax, grid_inner_min: gridMin }"
    >
      <div v-for="(value, key) in Products" :key="key" class="product_item">
        <!-- this block work for single product products -->
        <div v-if="value.hasOwnProperty('single')" class="card">
          <a :href="`/products/` + value.single.handle">
            <div
              :id="`item_left_` + value.single.handle"
              class="item_left"
              :class="{
                item_left_active: value.single.variants[0].inStock < 5,
              }"
            >
              {{
                value.single.variants[0].inStock <= 5 &&
                value.single.variants[0].inStock >= 1
                  ? "ONLY " + value.single.variants[0].inStock + " LEFT"
                  : value.single.variants[0].inStock == 0
                  ? "Out Of Stock"
                  : ""
              }}
            </div>

            <div
              v-if="value.single.images.length > 1"
              class="product_img_wrapper"
            >
              <img :src="value.single.featured_image" alt="" class="normal" />
              <img :src="value.single.images[1]" alt="" class="hoverImg" />
            </div>
            <div
              v-else-if="value.single.images.length == 1"
              class="product_img_wrapper"
            >
              <img :src="value.single.featured_image" alt="" class="normal" />
            </div>
            <div v-else class="product_img_wrapper">
              <img
                src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
                alt=""
                class="normal"
              />
            </div>

            <h5 class="card-title product_title">
              {{ value.single.title }}
            </h5>
            <h5 class="card-title bold product_price">
              <span v-if="(value.single.price && value.single.compare_at_price)">
                  ${{ (value.single.price / 100) }} <del> ${{ (value.single.compare_at_price / 100) }} </del>
              </span>
              <span v-else>
                  $ {{ (value.single.price / 100) }}
              </span>
            </h5>
          </a>

          <div class="quickButton quickActive">
            <div class="color_swatches" />
            <div class="product_cta_wrapper qwert">
              <!-- if quantity is 0 then hide -->

              <span v-if="value.single.variants[0].inStock != 0">
                <button :id="'quickAdd' + value.single.id" class="quickAdd" :variantid="value.single.variants[0].id" @click="addToCard">
                  <span>Add</span>
                  <div class="loder_tmb">
                    <span /><span /> <span /><span />
                    <span />
                  </div>
                </button>
              </span>
            </div>
          </div>
        </div>

        <!-- this block work for single product products -->

        <div
          v-if="
            value.hasOwnProperty('variable') &&
            value.variable.length - 1 >= value.active
          "
          class="card"
        >
          <a :href="`/products/` + value.variable[value.active].handle">
            <div
              :id="`item_left_` + value.variable[value.active].handle"
              class="item_left"
              :class="{
                item_left_active:
                  value.variable[value.active].variants[0].inStock < 5,
              }"
            >
              {{
                value.variable[value.active].variants[0].inStock <= 5 &&
                value.variable[value.active].variants[0].inStock >= 1
                  ? "ONLY " +
                    value.variable[value.active].variants[0].inStock +
                    " LEFT"
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
              />
              <img
                :src="value.variable[value.active].images[1]"
                alt=""
                class="hoverImg"
              />
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
              />
            </div>
            <div v-else class="product_img_wrapper">
              <img
                src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
                alt=""
                class="normal"
              />
            </div>

            <h5 class="card-title product_title">
              {{ value.variable[value.active].title }}
            </h5>
            <h5 class="card-title bold product_price">
              <span v-if="(value.variable[value.active].price && value.variable[value.active].compare_at_price)">
                  ${{ (value.variable[value.active].price / 100) }} <del> ${{ (value.variable[value.active].compare_at_price / 100) }} </del>
              </span>
              <span v-else>
                  $ {{ (value.variable[value.active].price / 100) }}
              </span>

              <!-- $ {{ (value.variable[value.active].price / 100) }} -->
            </h5>
          </a>

          <div class="quickButton quickActive">
            <div class="color_swatches">
              <swiper class="swatches_inner mySwiper" :slidesPerView="'auto'" :spaceBetween="7" :navigation="true" :modules="modules" :productData="value.swatches" :mainKey="JSON.stringify(value)">
                <swiper-slide
                  v-for="(sValue, sKey) in value.swatches"
                  :key="sKey"
                  :index="sKey"
                  :link="sValue.link"
                  class="nav-dots"
                  :class="sKey == value.active ? 'active' : ''"
                  @click="selectVariation"
                >
                  <span>
                    <img :src="getThemeAssets(sValue.img, value.variable[value.active].swatchesImage)" :class="sValue.img" />
                  </span>
                </swiper-slide>
              </swiper>
            </div>
            <div class="product_cta_wrapper" data-v-32bfb114="">
              <button
                :id="'quickAdd' + value.variable[value.active].id"
                :class="{
                  quickAdd_deactive:
                    value.variable[value.active].variants[0].inStock == 0,
                }"
                :variantid="value.variable[value.active].variants[0].id"
                qty="1"
                class="quickAdd"
                @click="addToCard"
              >
                <span>Add</span>
                <div class="loder_tmb">
                  <span /><span /> <span /><span />
                  <span />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="loader">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    <div
      class="row centeralign addmargin"
      :class="{
        productnotfound: Products.length === 0,
        productfound: Products.length > 0,
      }"
    >
      <h2 class="sec_heading">We're sorry, no matches were found.</h2>
      <h4 class="body_text">
        We couldn't find any results for your selected filters. Clear your
        filters, or contact our team and we'll be happy to help.
      </h4>
    </div>
  </div>
</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Navigation } from "swiper";


// import axios from "axios";
// import {
//     graphQl
// } from "../../../assets/graphql/collection-query";

// import assets from "../../../assets/graphql/assets.json";

import { ShopifyAPI } from "../../Shopify/Shopify";

export default {
   components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modules: [Navigation],
      categoryRules: [],
      colorRules: [],
      cizeRules: [],
      materialRules: [],
      isPercentDiscount:true,
      isActive: false,
      isMobile: false,
      gridMax: false,
      gridMin: false,
      show: false,
      showSort: false,
      showColor: false,
      showSize: false,
      showMaterial: false,
      selected: [],
      selectedFilter: [],
      selectedSort: ["Recommended"],
      selectedColor: [],
      selectedSize: [],
      selectedMaterial: [],

      ddTestCategory: this.getCategoryDropDownList(),
      ddTestColor: this.getColorDropDownList(),
      ddTestSize: this.getSizeDropDownList(),
      ddTestMaterial: this.getMaterialDropDownList(),
      // productList: [], //this.array_chunk(products, 20),
      // fullproductList: products,

      page_index: 0,
      page_size: 12,
      filterByCategory: [],
      filterByColor: [],
      filterBySize: [],
      filterByMaterial: [],
      busy: false,
      showClearAll: false,
      gridColumn: 4,
      productId: 0,
      ddTestSort: [
        {
          id: "sort1",
          value: "Recommended",
          text: "Recommended",
        },
        {
          id: "sort2",
          value: "LowToHigh",
          text: "Price: Low to High",
        },
        {
          id: "sort3",
          value: "HighToLow",
          text: "Price: High to Low",
        },
        {
          id: "sort4",
          value: "Latest",
          text: "Latest Arrivals",
        },
        {
          id: "sort5",
          value: "Discount",
          text: "Percent Discount",
        },
      ],
      sortObject: {},
      selectedSortPercent : [],

      /** latest code **/
      Products: [],
      AllProducts: [],
      ErrorCase: false,
      shopifyPagination: false,
      themeAssets: [],
      hideCategorydropdown : 1,
      loadInit: false,
    };
  },
  mounted() {
    // document.addEventListener('click', this.onClick);
    document.getElementById("loader").style.display = "none";

    window.onbeforeunload = function () {
      // window.scrollTo(0, 0);
    };

    this.loadMore();

    if (window.innerWidth <= 767) {
      this.isMobile = true;
    }


    this.hideCategoryDropdown()
    this.filterStorage();
    this.fetchProdustQuery();
    this.setScreenRangeGrid();
    this.roughData();
    this.loadInit = true;
  },




  methods: {

    hideCategoryDropdown(){
       
         var blackListPage = JSON.parse(window.atob(this.shopifyData.hidecollection))
         var url = window.location.pathname;
         var parts = url.split("/");
         var last_part = parts[parts.length - 1];
         if(blackListPage.includes(last_part)){
           this.hideCategorydropdown = 0
         }
        
    },
    /* load product on scroll */
    loadMore() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.onscroll = () => {
        if (this.busy == false) {
          let bottomOfWindow =
            document.documentElement.scrollHeight -
            document.documentElement.scrollTop;
          if (
            bottomOfWindow < 1200 &&
            this.Products.length != this.AllProducts.length
          ) {
            let obj = this;
            this.busy = true;
            document.getElementById("loader").style.display = "flex";
            setTimeout(() => {
              const append = obj.AllProducts.slice(
                obj.Products.length,
                obj.Products.length + obj.page_size
              );
              obj.Products = obj.Products.concat(append);
              obj.busy = false;
              document.getElementById("loader").style.display = "none";
            }, 1000);
          }
        }
      };
    },

    filterStorage() {
      var arr = [];
      localStorage.setItem("fillters", arr);
    },
    roughData() {
      var productData = window.atob(this.shopifyData.collectionListing);
      return JSON.parse(productData);
    },
    closeSortMenu: function (event) {
      // console.log(event);
      if (event.target.closest(".show") != null) {
        event.target.closest(".show").classList.remove("show");
      }
    },

    addActive: function (event) {
      event.currentTarget.classList.toggle("active");
    },

    closeDropDown: function (show, type) {
      if (type == "show") {
        if (show == true) {
          this.show = false;
        } else {
          this.show = true;
        }
      }
      if (type == "showColor") {
        if (show == true) {
          this.showColor = false;
        } else {
          this.showColor = true;
        }
      }
      if (type == "showSize") {
        if (show == true) {
          this.showSize = false;
        } else {
          this.showSize = true;
        }
      }
      if (type == "showMaterial") {
        if (show == true) {
          this.showMaterial = false;
        } else {
          this.showMaterial = true;
        }
      }
    },
    // open filter navbar
    myFilter: function () {
      var filters = document.querySelector(".filters");
      var applyfilters = document.querySelector(".apply_filter_cta_wrapper");
      applyfilters.classList.add("show");
      filters.classList.toggle("show");
    },

    // open sortBy navbar
    sortBy: function () {
      var sortBy = document.querySelector(".sort_by");
      sortBy.classList.toggle("show");
    },

    // close navbar
    closeMenu: function (e) {
      var activeMenu = e.currentTarget.closest(".show");
      activeMenu.classList.remove("show");
      var applyfilters = document.querySelector(".apply_filter_cta_wrapper");
      applyfilters.classList.remove("show");
    },

    // apply filter and close filter
    applyfilter: function () {
      var applyfilters = document.querySelector(
        ".apply_filter_cta_wrapper.show"
      );
      var applyfilterShow = document.querySelector(".filters.show");
      applyfilters.classList.remove("show");
      applyfilterShow.classList.remove("show");
    },

    cardmouseleave: function (id) {
      this.productId = 0;
      let quickAdd = document.querySelector("#quickAdd" + id);
      quickAdd.classList.remove("quickAdd_active");
    },

    inlineBgImage: function (colors) {
      let color = colors.toLowerCase().replace(/[^A-Z0-9]+/gi, "-");
      let bgImage =
        "//cdn.shopify.com/s/files/1/0899/2182/files/" +
        color +
        ".png?v=5251390435792914590";

      let url = `background-image:url(${bgImage});`;
      return url + "background:" + color;
    },

    onSelectColor: function (color, product, event) {
      // console.log(product.id);
      if (event.currentTarget.parentElement.children.length > 1) {
        let childcolor = event.currentTarget.parentElement.children;
        for (let item of childcolor) {
          item.classList.remove("activecolor");
        }
      }
      event.currentTarget.classList.add("activecolor");
      let img = document.getElementById(product.id);
      let div = document.querySelector("#item_left_" + product.id);
      let product_img_div = document.querySelector(
        "#product_img_wrapper" + product.id
      );
      let out_of_stock_text = document.querySelector(
        "#out_of_stock_text" + product.id
      );
      let quickAdd = document.querySelector("#quickAdd" + product.id);

      // console.log(img);
      let varints = product.variants.filter((item) => {
        return item.title.includes(color);
      });
      if (varints.length > 0) {
        if (varints[0].featured_image != null) {
          // console.log(varints[0].featured_image.src);
          img.src = varints[0].featured_image.src;
        }
        div.textContent =
          varints[0].stock <= 5 ? "ONLY " + varints[0].stock + " LEFT" : "";

        if (varints[0].stock == 0) {
          div.textContent = "Out Of Stock";
          out_of_stock_text.classList.add("out_of_stock_text_active");
          product_img_div.classList.add("out_of_stock");
          quickAdd.classList.remove("quickAdd_active");
          quickAdd.classList.add("quickAdd_deactive");
        } else {
          out_of_stock_text.classList.remove("out_of_stock_text_active");
          product_img_div.classList.remove("out_of_stock");
          quickAdd.classList.remove("quickAdd_deactive");
          quickAdd.classList.add("quickAdd_active");
        }
      }
    },

    /* change images on hover */
    mouseover: function (event, imgsrc) {
      event.target.src = imgsrc;
    },
    mouseleave: function (event, imgsrc) {
      event.target.src = imgsrc;
    },
    /* end change images on hover */

    /* change grid column */
    setScreenRangeGrid: function () {
      let width = window.innerWidth;
      if (width > 2000) {
        this.gridColumn = 6;
      } else if (width > 767 && width < 2000) {
        this.gridColumn = 4;
      } else {
        this.gridColumn = 2;
      }
    },

    sliderChange: function (event) {
      if (event.target.value == 2) {
        this.gridMin = false;
        this.gridMax = true;
      } else if (event.target.value == 6) {
        this.gridMin = true;
        this.gridMax = false;
      } else {
        this.gridMin = false;
        this.gridMax = false;
      }
    },
    /* end change grid column */
    /* Clear all filter */
    clearAllFilter: function () {
      let arrayName = ["category", "color", "size", "material"];
      arrayName.map((item) => {
        this.clearCheckBoxs(item);
      });

      localStorage.setItem("fillters", []);
      this.showClearAll = false;
      this.fetchProdustQuery();
    },
    /* End Clear all filter */

    /* start unchecked checkbox when click clear button in dropdown */
    clearCheckBoxs: function (name) {
      var markedCheckbox = document.getElementsByName(name);
      for (var checkbox of markedCheckbox) {
        if (checkbox.checked) checkbox.checked = false;
      }

      var savedFilter = [];
      var savedItem = localStorage.getItem("fillters") || [];
      var category, size, material, color, sort;
      category = -1;
      size = -1;
      material = -1;
      color = -1;
      sort = -1;
      if (savedItem != "") {
        savedFilter = JSON.parse(savedItem);
        savedFilter.map((e, i) => {
          if (Object.prototype.hasOwnProperty.call(e, "Category")) {
            category = i;
          } else if (Object.prototype.hasOwnProperty.call(e, "Color")) {
            color = i;
          } else if (Object.prototype.hasOwnProperty.call(e, "Size")) {
            size = i;
          } else if (Object.prototype.hasOwnProperty.call(e, "Material")) {
            material = i;
          } else if (Object.prototype.hasOwnProperty.call(e, "sort")) {
            sort = i;
          }
        });
      }

      if (name == "category") {
        this.selected = [];
        this.filterByCategory = [];
        if (category >= 0) {
          savedFilter.splice(parseInt(category), parseInt(savedFilter.length));
        }
      } else if (name == "color") {
        this.selectedColor = [];
        this.filterByColor = [];
        if (color >= 0) {
          savedFilter.splice(parseInt(color), parseInt(savedFilter.length));
        }
      } else if (name == "size") {
        this.selectedSize = [];
        this.filterBySize = [];
        if (size >= 0) {
          savedFilter.splice(parseInt(size), parseInt(savedFilter.length));
        }
      } else if (name == "material") {
        this.selectedMaterial = [];
        this.filterByMaterial = [];
        if (material >= 0) {
          savedFilter.splice(parseInt(material), parseInt(savedFilter.length));
        }
      } else if (name == "sort") {
        if (sort >= 0) {
          savedFilter.splice(parseInt(sort), parseInt(savedFilter.length));
        }
      }

      localStorage.setItem("fillters", JSON.stringify(savedFilter));
      this.fetchProdustQuery();
      this.clearAllOption();
    },

    /* clear option that selected in drop down under particular option */
    clearAllOption: function () {
      if (this.selected.length > 0) {
        this.filterProduct();
      } else if (this.selectedColor.length > 0) {
        this.filterProductByColor();
      } else if (this.selectedSize.length > 0) {
        this.filterProductBySize();
      } else if (this.selectedMaterial.length > 0) {
        this.filterProductByMaterial();
      } else {
        this.showClearAll = false;
        this.productList = this.fullproductList; //this.array_chunk(products, 20);
        var applyCta = document.querySelector(".apply_filter_cta");
        applyCta.setAttribute("disabled", "");
      }
    },

    /* set selected color checkbox value */
    onCheckColor: function (event) {
      if (this.selectedColor.includes(event.target.value)) {
        this.selectedColor = this.selectedColor.filter(function (geeks) {
          return geeks != event.target.value;
        });
      } else {
        this.selectedColor.push(event.target.value);
      }
      this.fetchProdustQuery();
      // console.log(this.selectedColor);
    },

    /* set selected size checkbox value */
    onCheckSize: function (event) {
      if (this.selectedSize.includes(event.target.value.toLowerCase())) {
        this.selectedSize = this.selectedSize.filter(function (geeks) {
          return geeks != event.target.value.toLowerCase();
        });
      } else {
        this.selectedSize.push(event.target.value.toLowerCase());
      }
      this.fetchProdustQuery();
      // console.log(this.selectedSize);
    },

    /* set selected material checkbox value */
    onCheckMaterial: function (event) {
      if (this.selectedMaterial.includes(event.target.value)) {
        this.selectedMaterial = this.selectedMaterial.filter(function (geeks) {
          return geeks != event.target.value;
        });
      } else {
        this.selectedMaterial.push(event.target.value);
      }
      this.fetchProdustQuery();
      // console.log(this.selectedMaterial);
    },

    /* set selected category checkbox value */
    onCheck(event) {
      if (this.selected.includes(event.target.value)) {
        this.selected = this.selected.filter(function (geeks) {
          return geeks != event.target.value;
        });
      } else {
        this.selected.push(event.target.value);
      }

      this.fetchProdustQuery();
      this.page_index = 0;
    },

    /* set selected sort checkbox value */
    onCheckSort: function (event) {
      this.sortProduct(event.target.value);
      if('Discount' == event.target.value){
        this.selectedSortPercent = []
        this.selectedSortPercent = [event.target.value]
        this.fetchProdustQuery()
      }
    },

    /* Fill category dropdown from products data */

    getCategoryDropDownList: function () {
      let products = this.roughData();

      let data = window.atob(this.shopifyData.category);
      let data2 = window.atob(this.shopifyData.category2);



      let url = window.location.pathname.split('/');
      var lastSegment = url.pop() || url.pop();

      let category1 = JSON.parse(data2);
      let category2 = JSON.parse(data);
      let flag = false;
      console.log(lastSegment)

      category1.map((mapUrl) => {
          if(mapUrl.rules.handle == lastSegment){
              flag = true
          }
      })
      var cat;
      if(flag == false){
         cat = category2
      }else{
         cat = category1
      }
      // cat = category2



      let array = [];
      let rol = [];


      var $pCpunt = 0;
      cat.map((cList, index) => {
        $pCpunt = 0;
        products.map((plist) => {
          if (plist.length === 5) {
            if (plist[3].includes(cList.rules.title)) {
              $pCpunt++;
            }
          }
        });

        // console.log($pCpunt);

        let obj = {
          id: index + 1,
          value: cList.label,
          text: cList.label,
          count: $pCpunt,
        };
        array.push(obj);
        rol.push(cList.rules);
      });

      let newarray = [array, rol];

      return newarray;
    },
    /* End Fill category dropdown from products data */

    /* Fill color dropdown from products data */

    getColorDropDownList: function () {
      let products = this.roughData();
      let array = [];
      let rol = [];
      let color = JSON.parse(window.atob(this.shopifyData.color));
      color.map((cColor, index) => {
        var $pCpunt = 0;
        products.map((plist) => {
          if (plist.length === 5) {
            if (plist[3].includes(cColor.rules.title)) {
              $pCpunt++;
            }
          }
        });

        let obj = {
          id: index + 1,
          value: cColor.label,
          text: cColor.label,
          count: $pCpunt,
        };
        array.push(obj);
        rol.push(cColor.rules);
      });
      return [array, rol];
    },

    /* End Fill color dropdown from products data */

    /* Fill size dropdown from products data */
    getSizeDropDownList: function () {
      let Products = this.roughData();
      let array = [];
      let size = JSON.parse(window.atob(this.shopifyData.size));

      size.map((cSize, index) => {
        var $pCpunt = 0;

        for (let product in Products) {
          if (Products[product][0]["options"].indexOf("Size") !== -1) {
            var indexOF = Products[product][0]["options"].indexOf("Size");
            Products[product][0].variants.map((m_varint) => {
              
              if (
                m_varint[`option${parseInt(indexOF) + 1}`].toLowerCase() ===
                cSize.label.toLowerCase()
              ) {
                $pCpunt++;
              }
            });
          }
        }

        let obj = {
          id: index + 1,
          value: cSize.label,
          text: cSize.label,
          count: $pCpunt,
        };
        array.push(obj);
      });

      return array;
    },
    /* End Fill size dropdown from products data */

    /* Fill material dropdown from products data */
    getMaterialDropDownList: function () {
      let products = this.roughData();
      let array = [];
      let rol = [];
      let material = JSON.parse(window.atob(this.shopifyData.material));
      material.map((cMaterial, index) => {
        var $pCpunt = 0;
        products.map((plist) => {
          if (plist.length === 5) {
            if (plist[3].includes(cMaterial.rules.title)) {
              $pCpunt++;
            }
          }
        });

        let obj = {
          id: index + 1,
          value: cMaterial.label,
          text: cMaterial.label,
          count: $pCpunt,
        };
        array.push(obj);
        rol.push(cMaterial.rules);
      });
      return [array, rol];
    },
    /* End Fill material dropdown from products data */

    /* set product in array based on selected category option */
    filterProduct: function () {
      let array = [];
      this.filterByCategory = this.selected;
      array = this.getUniqueRecord(this.selected, "category");

      // this.filterByCategory = [];
      // this.clearAllOption();
      this.page_index = 0;
    },

    /* set product in array based on selected color option */
    filterProductByColor: function () {
      this.saveFilter("Color", this.selectedColor);
      this.page_index = 0;
    },

    /* set product in array based on selected size option */
    filterProductBySize: function () {
      this.saveFilter("Size", this.selectedSize);
      // this.filterBySize = [];
      //     this.clearAllOption();
      this.page_index = 0;
    },

    /* set product in array based on selected material option */
    filterProductByMaterial: function () {
      this.saveFilter("Material", this.selectedMaterial);
      //   this.filterByMaterial = [];
      //     this.clearAllOption();
      this.page_index = 0;
    },

    filterArrayToUniqueRecord: function (array, filterWithArray) {
      return filterWithArray.filter((el) => {
        return array.some((f) => {
          return f.id === el.id;
        });
      });
    },

    categoryRulesApplied(currentCollection, product) {
      var Categoriesrules = JSON.parse(
        JSON.stringify(this.getCategoryDropDownList())
      )[1];

      // check rules is empty
      if (Categoriesrules.length === 0) {
        return false;
      }

      Categoriesrules.map((colection, i) => {
        if (currentCollection === colection.title) {
          console.log(i, Categoriesrules);
        } else {
          return false;
        }
      });

      return false;
    },

    async fetchProdustQuery() {
      /// fetch shopify graphQl queries

      var productData = window.atob(this.shopifyData.collectionListing);
      var Products = JSON.parse(productData);


      var filterListing = [];
      var duplicateRecord = [];
      var percentCount = 0;
      var notpercentCount = 0;
      /*********************************************************/
      // start filter (initailize value)
      /*********************************************************/

      var Categories,
        Color,
        Size,
        Material,
        ColorRules,
        SizeRules,
        MaterialRules,
        Categoriesrules;

      Categories = JSON.parse(JSON.stringify(this.selected));
      Color = JSON.parse(JSON.stringify(this.selectedColor));
      Size = JSON.parse(JSON.stringify(this.selectedSize));
      Material = JSON.parse(JSON.stringify(this.selectedMaterial));

      var selectedSortPercent = JSON.parse(JSON.stringify(this.selectedSortPercent));



      // filter roles
      ColorRules = JSON.parse(JSON.stringify(this.getColorDropDownList()))[1];
      SizeRules = "";
      MaterialRules = JSON.parse(
        JSON.stringify(this.getMaterialDropDownList())
      )[1];
      Categoriesrules = JSON.parse(
        JSON.stringify(this.getCategoryDropDownList())
      )[1];

      // console.log(Categories, Color, Size, Material)
      let getSavedFilter = "";

      /*********************************************************/
      // end filter
      /*********************************************************/

      for (let product in Products) {
        // Products.map(async (e, i) => {
        // product type

        // console.log(e)
        var p = Products[product][0]; /// product object
        var v = Products[product][1]; /// variant object
        var stock = Products[product][2]; /// variant object
        var collection = Products[product][3]; /// variant object

        var handle = p.handle;


        


        /*********************************************************/
        /// category filter applied here (start)
        /*********************************************************/

        // console.log(this.getColorRules)
        // console.log(this.getMaterialRules)


        if (Categories.length !== 0) {
          // ********************************************************************** //
          //                                                                        //
          // ********************************************************************** //

          var catFlag = false;
          var catFlagRules = false;

          Categories.map((selectedCats) => {
            if (collection.includes(selectedCats)) {
              catFlag = true;
            }

            /// rule applied here

            Categoriesrules.map((catRules) => {
              if (selectedCats === catRules.title) {
                if (Object.prototype.hasOwnProperty.call(catRules, "rules")) {
                  catRules.rules.map((rule) => {
                    if (rule.column == "title" && rule.relation == "contains") {
                      if (p.title.indexOf(rule.condition) > -1) {
                        catFlagRules = true;
                      }
                    }

                    if (rule.column == "title" && rule.relation == "equals") {
                      if (p.title === rule.condition) {
                        colorFlagRules = true;
                      }
                    }
                  });
                }
              }
            });
          });

          if (catFlag == false && catFlagRules == false) {
            //
            continue;
          }
        }

        if (Color.length !== 0) {
          // ********************************************************************** //
          //                                                                        //
          // ********************************************************************** //
          var colorFlag = false;
          var colorFlagRules = false;

          Color.map((selectedColor) => {
            if (collection.includes(selectedColor)) {
              colorFlag = true;
            }
            /// rule applied here

            ColorRules.map((colRules) => {
              if (selectedColor === colRules.title) {
                if (Object.prototype.hasOwnProperty.call(colRules, "rules")) {
                  colRules.rules.map((c_rule) => {
                    if (
                      c_rule.column == "title" &&
                      c_rule.relation == "contains"
                    ) {
                      if (p.title.indexOf(c_rule.condition) > -1) {
                        colorFlagRules = true;
                      }
                    }

                    if (
                      c_rule.column == "title" &&
                      c_rule.relation == "equals"
                    ) {
                      if (p.title === c_rule.condition) {
                        colorFlagRules = true;
                      }
                    }
                  });
                }
              }
            });
          });

          // ********************************************************************** //
          //                                                                        //
          // ********************************************************************** //

          if (colorFlagRules == false && colorFlag == false) {
            //
            continue;
          }
        }

        if (Material.length !== 0) {
          // ********************************************************************** //
          //                                                                        //
          // ********************************************************************** //

          var materialFlag = false;
          var materialFlagRules = false;

          Material.map((selectedMaterial) => {
            if (collection.includes(selectedMaterial)) {
              materialFlag = true;
            }
            /// rule applied here

            MaterialRules.map((matRules) => {
              if (selectedMaterial === matRules.title) {
                if (Object.prototype.hasOwnProperty.call(matRules, "rules")) {
                  matRules.rules.map((m_rule) => {
                    if (
                      m_rule.column == "title" &&
                      m_rule.relation == "contains"
                    ) {
                      if (p.title.indexOf(m_rule.condition) > -1) {
                        materialFlagRules = true;
                      }
                    }

                    if (
                      m_rule.column == "title" &&
                      m_rule.relation == "equals"
                    ) {
                      if (p.title === m_rule.condition) {
                        materialFlagRules = true;
                      }
                    }
                  });
                }
              }
            });
          });

          // ********************************************************************** //
          //                                                                        //
          // ********************************************************************** //

          if (materialFlag == false && materialFlagRules == false) {
            //
            continue;
          }
        }

          // ********************************************************************** //
          //                                                                        //
          // ********************************************************************** //
        if (Size.length !== 0) {
          
          var sizeFlag = false;
            if (Products[product][0]["options"].indexOf("Size") !== -1) {
              var indexOF = Products[product][0]["options"].indexOf("Size");
              Products[product][0].variants.map((m_varint) => {
                  if (Size.includes(m_varint[`option${parseInt(indexOF) + 1}`].toLowerCase())) {
                    sizeFlag = true;
                  }
              });
            }
            if (sizeFlag === false) continue;
        }



        if(p.compare_at_price > p.price){
          percentCount++;
        }

        

        if(selectedSortPercent.length > 0 && p.compare_at_price === null ){
            continue;
        }else if(p.compare_at_price === 0){
            continue;
        }
        

          // ********************************************************************** //
          //                                                                        //
          // ********************************************************************** //


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

          var variableActiveIndex = 0;
          for (let swatchPl in swatch) {
            var Phandle2 = swatch[swatchPl].link;

            for (let childPair in Products) {
              //  // console.log(products[childPair].node.handle,'===', Phandle)
              if (
                Products[childPair][0].handle ==
                Phandle2.replace("/products/", "")
              ) {
                if (handle == Products[childPair][0].handle) {
                  variableActiveIndex = swatchPl;
                }
                // console.log(Products[childPair][0]);
                // append stock qty
                Products[childPair][0].variants = this.appendStock(
                  Products[childPair][0].variants,
                  Products[childPair][2]
                );

                Products[childPair][0]["collection"] = Products[childPair][3].length === 0 ? [] : Products[childPair][3];
                Products[childPair][0]["swatchesImage"] = Products[childPair][4].length === 0 ? [] : Products[childPair][4];

                collectPairProducts.push(Products[childPair][0]);
              }
            }
          }

          // console.log(variableActiveIndex)

          productType["variable"] = collectPairProducts;
          productType["swatches"] = swatch;
          productType["active"] = variableActiveIndex;

          filterListing.push(productType);

          /*********************************************************/
          /// filter variable product (END)
          /*********************************************************/
        } else if (bindInPair.length == 0) {
          /*********************************************************/
          /// filter apply at single products
          /*********************************************************/

          /// first time browser load
          /// append stock qty
          p.variants = this.appendStock(p.variants, stock);
          p["collection"] = Products[product][3];
          productType["single"] = p;
          filterListing.push(productType);

          /*********************************************************/
          /// filter variable product (END)
          /*********************************************************/
        } else if (flag) {
          // else condition will be work if product have no variation
          // filterListing.push(p);
        }
      }

      // filterListing = this.shuffle(filterListing);
      // console.log('percent Count','======',percentCount);

      if(percentCount == 0){
        this.isPercentDiscount=false;
      }

      // console.log('not percent Count','=====',notpercentCount);


      if(Categories.length !== 0 || Color.length !== 0 || Size.length !==0 || Material.length !== 0){
         console.log('i am here! 111111111111111111');
          this.filterDropdow([...filterListing]);
      }

      this.Products = [...filterListing].slice(0, this.page_size);
      this.AllProducts = [...filterListing].slice(0, 100);

      // if (getSavedFilter != "") {
      //   let savefiltr = JSON.parse(getSavedFilter);

      //   if (
      //     savefiltr.length > 0 &&
      //     Object.prototype.hasOwnProperty.call(savefiltr[0], "sort")
      //   ) {
      //     this.sortProduct(savefiltr[0].sort);
      //   }
      // }
    },

    // fillter dropdownlist

    intersect(a, b) {
      return a.filter(Set.prototype.has, new Set(b));
    },

    filterDropdow($productList) {
      // global variables
      var ddTestCategory = JSON.parse(JSON.stringify(this.ddTestCategory));
      var ddTestColor = JSON.parse(JSON.stringify(this.ddTestColor));
      var ddTestSize = JSON.parse(JSON.stringify(this.ddTestSize));
      var ddTestMaterial = JSON.parse(JSON.stringify(this.ddTestMaterial));

      var Categories = JSON.parse(JSON.stringify(this.selected));
      var Color = JSON.parse(JSON.stringify(this.selectedColor));
      var Size = JSON.parse(JSON.stringify(this.selectedSize));
      var Material = JSON.parse(JSON.stringify(this.selectedMaterial));

      var AllFillters = [];

      if (Categories.length !== 0) Categories.map((c) => AllFillters.push(c));
      if (Color.length !== 0) Color.map((cl) => AllFillters.push(cl));
      if (Size.length !== 0) Size.map((s) => AllFillters.push(s));
      if (Material.length !== 0) Material.map((m) => AllFillters.push(m));

      if (Categories.length !== 0 || Color.length !== 0 || Size.length !== 0 || Material.length !== 0) {
        // category filter

        /******************************************************************************/
        ///////////////  category filter
        /******************************************************************************/

        ddTestCategory[0].map((catList, index) => {
          var cat_count = 0;
          for (let plist of $productList) {
            if (Object.prototype.hasOwnProperty.call(plist, "variable")) {
              var checkOnce = false;
              plist.variable.map((c_list) => {
                if (c_list.collection.includes(catList.value) && this.intersect(AllFillters, c_list.collection).length > 0 && checkOnce === false) {
                  cat_count++;
                  checkOnce = true;
                }
              });
            } else if (Object.prototype.hasOwnProperty.call(plist, "single")) {
              if (plist.single.collection.includes(catList.value) && this.intersect(AllFillters, plist.single.collection).length > 0) {
                cat_count++;
              }
            }
          }

          ddTestCategory[0][index].count = cat_count;
        });

        this.ddTestCategory = ddTestCategory;

        /******************************************************************************/
        ///////////////  Color Filter
        /******************************************************************************/

        ddTestColor[0].map((colList, index) => {
          var color_count = 0;
          for (let p_color_list of $productList) {
            if (Object.prototype.hasOwnProperty.call(p_color_list, "variable")) {
              var colorCheckOnce = false;
              p_color_list.variable.map((c_color_list) => {
                if (c_color_list.collection.includes(colList.value) && this.intersect(AllFillters, colList.collection).length > 0 && colorCheckOnce === false) {
                  color_count++;
                  colorCheckOnce = true;
                }
              });
            } else if (Object.prototype.hasOwnProperty.call(p_color_list, "single")) {
              if (p_color_list.single.collection.includes(colList.value) && this.intersect(AllFillters, p_color_list.single.collection).length > 0) {
                color_count++;
              }
            }
          }

         

          ddTestColor[0][index].count = color_count;

        });

        this.ddTestColor = ddTestColor


        // console.log(ddTestCategory)
        // console.log(ddTestColor)
        // console.log(ddTestSize)
        // console.log(ddTestMaterial)
        // console.log($productList)
      }
    },

    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },

    appendStock(variants, stocks) {
      var newVariants = [];
      variants.map((appendStock) => {
        var V_id = appendStock.id;
        for (let stok in stocks) {
          if (stok == V_id) {
            var newVar = appendStock;
            newVar.inStock = stocks[stok];
            newVariants.push(newVar);
          }
        }
      });
      return newVariants;
    },

    // getSalesProduct:function(){
    //   this.AllProducts.map(()=>{

    //   })
    // },

    /* sort product based on price low to high and vice-verse */
    sortProduct: function (obj) {
      var newArrivalCount = 0;
      var product=[];

       var AllProducts = JSON.parse(JSON.stringify(this.AllProducts));

      if (obj == "Latest"){
        AllProducts.map((p)=>{
          var countOnce=false;
          if (Object.prototype.hasOwnProperty.call(p, "variable")){
            p.variable.map((n)=>{
              if(n.collection.includes('NEW ARRIVALS') && countOnce == false){
                newArrivalCount++;
                countOnce=true;
                product.push(p);
              }
            })
          }else{
            if(p.single.collection.includes('NEW ARRIVALS')){
              newArrivalCount++;
              product.push(p);
            }
          }
        })
        let filter = JSON.parse(JSON.stringify(product))
        this.Products = [...filter].slice(0, this.page_size);
        this.AllProducts = [...filter].slice(0, 100);
        console.log(newArrivalCount);
      }
      else{
       
      const aa =     AllProducts.sort(function (a, b) {
            if (obj == "LowToHigh") {
              

              if (Object.prototype.hasOwnProperty.call(a, "variable")) {
                return (a.variable[0].price - (b.variable != undefined ? b.variable[0].price : b.single.price));
              }
              if (Object.prototype.hasOwnProperty.call(a, "single")) {
                return (a.single.price - (b.single != undefined ? b.single.price : b.variable[0].price));
              }
            } else if (obj == "HighToLow") {
              if (Object.prototype.hasOwnProperty.call(b, "variable")) {
                return ( b.variable[0].price - (a.variable != undefined ? a.variable[0].price : a.single.price) );
              }
              if (Object.prototype.hasOwnProperty.call(b, "single")) {
                return (
                  b.single.price -
                  (a.single != undefined
                    ? a.single.price
                    : a.variable[0].price)
                );
              }
            }
          });
            this.Products = [...aa].slice(0, this.page_size);
            this.AllProducts = [...aa].slice(0, 100);
      }

      
  
      
    },

    randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    async addToCard(event) {
      // document.querySelector('.bg_layer_removecart').classList.add('active');

      event.target.closest(".card").classList.add("active");
      var product = event.target.parentNode;
      var variant = product.getAttribute("variantid");
      var dynamic = new ShopifyAPI();

      var item = {
        id: variant,
        qty: 1,
      };
      await dynamic.addItem(item);
      event.target.closest(".card").classList.remove("active");
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

      grid.querySelector(".product_title").innerHTML = activeProduct.title;

      let  priceHtml = "$ " + (activeProduct.price / 100);
          
      if(activeProduct.price && activeProduct.compare_at_price){
          priceHtml = `$${(activeProduct.price / 100)}&nbsp;<del>$${(activeProduct.compare_at_price / 100)}</del>`;
      }
      
      grid.querySelector(".product_price").innerHTML = priceHtml
        

      /// update link of the grid
      grid
        .getElementsByTagName("a")[0]
        .setAttribute("href", "/products/" + activeProduct.handle);

      // chnage images of the grid
      grid
        .querySelector("img.normal")
        .setAttribute(
          "src",
          activeProduct.images[0] == null
            ? "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
            : activeProduct.images[0]
        );

      grid
        .querySelector("img.hoverImg")
        .setAttribute(
          "src",
          activeProduct.images.length > 2
            ? activeProduct.images[1]
            : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
        );

      // chnage quick button content
      // console.log(activeProduct)

      grid
        .querySelector("button")
        .setAttribute("variantid", activeProduct.variants[0].id);

      if (activeProduct.variants[0].inStock == 0) {
        grid.querySelector("button").classList.add("quickAdd_deactive");
      } else {
        grid.querySelector("button").classList.remove("quickAdd_deactive");
      }

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
    /**
     * get theme upload assets list
     */

    getThemeAssets(image,object) {
      object = JSON.parse(JSON.stringify(object));
      var src = "";
      object.map((img, index) => {
          if(Object.prototype.hasOwnProperty.call(img,image)){
            src = img[image];
          }
      })
      return src;
    },
  },
};
</script>

<style>

.color_swatches .swiper-wrapper .swiper-slide {
    width: 20px !important;
    /* max-width:20px !important ; */
    height: 20px;
    display: block;
}
.color_swatches .swiper-button-next {
    right: 0;
}
.color_swatches .swiper-button-prev{
  left: 0;
}
.color_swatches .swiper-button-prev:after,
.color_swatches .swiper-button-next:after
{
  content: url(https://cdn.shopify.com/s/files/1/0577/1178/8125/files/arrow.svg?v=1653913857);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  line-height: 0;
}
.color_swatches .swiper-button-prev:after{
  transform: translate(0%,-50%) rotate(90deg);
  left: 0;
}
.color_swatches .swiper-button-next:after{
  transform: translate(0%,-50%) rotate(-90deg);
  right: 0;
  left: auto;
}
.color_swatches .swiper-button-disabled {
    transition: 0.3s;
    visibility: hidden;
}
.color_swatches .swiper-button-lock{
  display: block;  
}
.color_swatches .swiper,
.color_swatches .swiper-wrapper{
  position: static;
}
/* .grid_inner.product-containers > div{
  padding-left: 6px;
}
.grid_inner.product-containers > div:first-child{
  padding-left: 0px;
} */
</style>

<style scoped>
/* Collaction Banner Css Code */
.collaction_banner {
  position: relative;
}

.collaction_banner img {
  width: 100%;
  height: 330px;
  object-fit: cover;
  object-position: center;
}

.isPercentShow{
  display: none;
}

.collaction_banner .banner_heading {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 0 20px;
  transform: translate(-50%, -50%);
  font-weight: 700;
  text-align: center;
  font-size: 49px;
  color: #ffffff;
  text-shadow: 0px 2.3824px 55.3909px rgba(0, 0, 0, 0.42);
}

.product_item:empty {
  display: none;
}

.color_swatches .swatches_inner {
  display: flex;
  gap: 7px;
}

.color_swatches .swatches_inner .nav-dots {
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

.color_swatches .nav-dots img {
  height: 20px;
  width: 20px;
  border-radius: 50%;
}

.color_swatches .swatches_inner .nav-dots:hover {
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
del {
    color: #b4b4b4;
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

.cross_heading {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #000000;
  padding-top: 59px;
  text-align: center;
}

.cross_heading_res {
  display: none;
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
  margin: 18px 0 12px;
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
  position: relative;
}

.grid_inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 6px;
  row-gap: 28px;
}

/* .grid_inner[data-v-251cec58] {
  display: flex;
    column-gap: 0;
    row-gap: 28px;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow: hidden;
} */
/* .grid_inner.product-containers > div {
    width: 25%;
} */


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
  position: relative;
}
.grid_inner .card .item_left {
  position: absolute;
  top: 7px;
  right: 7px;
  z-index: 1;
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

/* .quickAdd_deactive {
  visibility: hidden;
} */

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

.quickButton .swatches_inner {
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
  transition: all 200ms ease-in-out;
}

.out_of_stock img {
  opacity: 0.2;
}

.product_item:hover .item_left_active {
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
  visibility: visible !important;
}

.color_swatches {
  position: relative;
  max-width: 132px;
  width: 100%;
  overflow: hidden;
  padding: 0 15px;
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
  /* height: 348px; */
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

  .collaction_banner .banner_heading {
    font-size: 40px;
  }
}

@media (max-width: 767px) {
  .product_img_wrapper img {
    height: auto;
    max-width: 100%;
    width: 100%;
  }
  .quickButton{
    opacity: 1;
    visibility: visible;
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

  .cross_heading {
    padding: 41px 0 37px;
    margin-bottom: -18px;
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

  .color_swatches {
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

  .collaction_banner .banner_heading {
    font-size: 30px;
    text-shadow: 0px 0.794134px 18.4636px rgba(0, 0, 0, 0.42);
  }
}

@media (max-width: 575px) {
  .collaction_banner .banner_heading {
    font-size: 16.3333px;
    text-shadow: 0px 0.794134px 18.4636px rgba(0, 0, 0, 0.42);
  }
  .grid_inner .card .item_left {
    top: 5px;
    right: 5px;
  }
  .filter_row {
    margin: 5px 0 12px;
  }
}
@media (max-width: 480px) {
  .collaction_banner img{
    height: 190px;
  }
}

span.ezsd-dots-wrapper {
    display: none !important;
}

</style>

<!-- loader -->
<style scoped>
/* Center the loader */
/* #loader {
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 1;
  width: 50px;
  height: 50px;
  margin: -76px 0 0 -76px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
} */

#loader {
  display: flex;
  position: absolute;
  left: 50%;
  gap: 5px;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
  justify-content: center;
}
#loader span {
  vertical-align: middle;
  border-radius: 100%;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 3px 2px;
  -webkit-animation: loader1 0.8s linear infinite alternate;
  animation: loader1 0.8s linear infinite alternate;
}
#loader span:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: #dbdbdb;
}
#loader span:nth-child(2) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: #dbdbdb;
}
#loader span:nth-child(3) {
  -webkit-animation-delay: -0.26666s;
  animation-delay: -0.26666s;
  background: #dbdbdb;
}
#loader span:nth-child(4) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: #dbdbdb;
}
#loader span:nth-child(5) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: #dbdbdb;
}

@keyframes loader1 {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@-webkit-keyframes loader1 {
  from {
    -webkit-transform: scale(0, 0);
  }
  to {
    -webkit-transform: scale(1, 1);
  }
}

/* @-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} */

/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s;
}

@-webkit-keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0px;
    opacity: 1;
  }
}

@keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}
</style>