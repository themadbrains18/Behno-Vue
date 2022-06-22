<template>
  <!-- Collacction Banner Code -->
  <h2>{{ shopifyData.collactionTittle }}</h2>
  <div class="collaction_banner">
    <img
      src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/collaction-banner.jpg?v=1655384242"
      alt="Collaction Image"
    >
    <h2 class="banner_heading">
      THE ELIZABETH BAGUETTE SERIES
    </h2>
  </div>
  <div class="filter_responsive">
    <div class="filter_cta_wrapper">
      <button
        id="filterCta"
        class="filter_cta"
        @click="myFilter"
      >
        {{ shopifyData.filterDropdownTextResponsive }}
      </button>
      <button
        id="sortCta"
        class="filter_cta"
        @click="sortBy"
      >
        {{ shopifyData.sortByDropdownTextResponsive }}
      </button>
    </div>
  </div>
  <div class="filter_row">
    <div class="row_inner">
      <div class="apply_filter_cta_wrapper">
        <button
          class="apply_filter_cta"
          disabled
          @click="applyfilter"
        >
          {{ shopifyData.applyFilterCta }}
        </button>
      </div>
      <div class="filters">
        <div class="filters_inner_row">
          <div class="filters_responsive">
            <div
              class="close-btn"
              @click="closeMenu"
            >
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
          <div class="filters_inner">
            <!-- Categories filter -->
            <div
              class="filter"
              @mouseenter="isMobile == true ? null : (show = true)"
              @mouseleave="isMobile == true ? null : (show = false)"
              @click="isMobile == false ? null : closeDropDown(show, 'show')"
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
                <button class="c-form-input">
                  Categories
                </button>
              </div>
              <div
                class="multiselect"
                :class="{ active: show }"
              >
                <div class="tmb_header_dopdown">
                  <ul>
                    <li
                      v-for="option in ddTestCategory"
                      :key="option.id"
                    >
                      <input
                        :id="option.id"
                        class="multiselectOption"
                        type="radio"
                        name="category"
                        :value="option.value"
                        @change="onCheck($event)"
                      >
                      <label
                        class="optionLabel"
                        :for="option.id"
                      >{{
                        option.text.toLowerCase()
                      }}</label>
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
                <button class="c-form-input">
                  Color
                </button>
              </div>
              <div
                class="multiselect"
                :class="{ active: showColor }"
              >
                <div class="tmb_header_dopdown">
                  <ul>
                    <li
                      v-for="option in ddTestColor"
                      :key="option.id"
                    >
                      <input
                        :id="option.id"
                        class="multiselectOption"
                        type="radio"
                        name="color"
                        :value="option.value"
                        @change="onCheckColor($event)"
                      >
                      <label
                        class="optionLabel"
                        :for="option.id"
                      >{{
                        option.text.toLowerCase()
                      }}</label>
                    </li>
                  </ul>
                  <div class="btn_wrapper">
                    <!-- <button class="filterBtn modifier" @click="filterProductByColor">Apply</button> -->
                    <button
                      class="filterBtn"
                      @click="clearCheckBoxs('color')"
                    >
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
                <button class="c-form-input">
                  Size
                </button>
              </div>
              <div
                class="multiselect"
                :class="{ active: showSize }"
              >
                <div class="tmb_header_dopdown">
                  <ul>
                    <li
                      v-for="option in ddTestSize"
                      :key="option.id"
                    >
                      <input
                        :id="option.id"
                        class="multiselectOption"
                        type="radio"
                        name="size"
                        :value="option.value"
                        @change="onCheckSize($event)"
                      >
                      <label
                        class="optionLabel"
                        :for="option.id"
                      >{{
                        option.text.toLowerCase()
                      }}</label>
                    </li>
                  </ul>
                  <div class="btn_wrapper">
                    <!-- <button class="filterBtn modifier" @click="filterProductBySize">Apply</button> -->
                    <button
                      class="filterBtn"
                      @click="clearCheckBoxs('size')"
                    >
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
                <button class="c-form-input">
                  Material
                </button>
              </div>
              <div
                class="multiselect"
                :class="{ active: showMaterial }"
              >
                <div class="tmb_header_dopdown">
                  <ul>
                    <li
                      v-for="option in ddTestMaterial"
                      :key="option.id"
                    >
                      <input
                        :id="option.id"
                        class="multiselectOption"
                        type="radio"
                        name="material"
                        :value="option.value"
                        @change="onCheckMaterial($event)"
                      >
                      <label
                        class="optionLabel"
                        :for="option.id"
                      >{{
                        option.text.toLowerCase()
                      }}</label>
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
                  <path
                    d="M0.5 1L5 5.5L2.75 3.25L0.5 1Z"
                    stroke="white"
                  />
                  <path
                    d="M5 1L0.5 5.5L2.75 3.25L5 1Z"
                    stroke="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="sort_by">
        <div class="filters_responsive">
          <div
            class="close-btn"
            @click="closeMenu"
          >
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
            >
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
            <div
              class="multiselect"
              :class="{ active: showSort }"
            >
              <div class="tmb_header_dopdown">
                <ul>
                  <li
                    v-for="option in ddTestSort"
                    :key="option.id"
                  >
                    <input
                      :id="option.id"
                      class="multiselectOption"
                      type="radio"
                      name="sort"
                      :checked="option.id == 'sort1' ? true : false"
                      :value="option.value"
                      @change="onCheckSort($event)"
                    >
                    <label
                      class="optionLabel"
                      :for="option.id"
                      @click="
                        (event) => {
                          closeSortMenu(event);
                        }
                      "
                    >{{ option.text }}</label>
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
      <div
        v-for="(value, key) in Products"
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
              id="item_left_"
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
                alt="{{ value.single.featured_image }}"
                class="normal"
              >
              <img
                :src="value.single.images[1]"
                alt="{{ value.single.images[1] }}"
                class="hoverImg"
              >
            </div>
            <div
              v-else-if="(value.single.images.length == 1)"
              class="product_img_wrapper"
            >
              <img
                :src="value.single.featured_image"
                alt="{{ value.single.featured_image }}"
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

            <h5 class="card-title product_title">
              {{ value.single.title }}
            </h5>
            <h5 class="card-title bold product_price">
              $ {{ (value.single.price / 100).toFixed(2) }}
            </h5>
          </a>

          <div class="quickButton quickActive">
            <div class="color_swatches" />
            <div
              class="product_cta_wrapper"
              data-v-32bfb114=""
            >
              <!-- if quantity is 0 then hide -->

              <span v-if="value.single.variants[0].inStock != 0">
                <button
                  :id="'quickAdd' + value.single.id"
                  class="quickAdd"
                  :variantid="value.single.variants[0].id"
                  @click="addToCard"
                >
                  <span>Quick Add</span>
                </button>
              </span>
            </div>
          </div>
        </div>

        <!-- this block work for single product products -->

        <div
          v-if="value.hasOwnProperty('variable') && (value.variable.length - 1) >= value.active"
          class="card"
        >
          <a :href="`/products/` + value.variable[value.active].handle">
                
            <div
              id="item_left_"
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
                alt="{{ value.variable[value.active].images[0] }}"
                class="normal"
              >
              <img
                :src="value.variable[value.active].images[1]"
                alt="{{ value.variable[value.active].images[1] }}"
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
                alt="{{ value.variable[value.active].images[0] }}"
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

            <h5 class="card-title product_title">
              {{ value.variable[value.active].title }}
            </h5>
            <h5 class="card-title bold product_price">
              $ {{ (value.variable[value.active].price / 100).toFixed(2) }}
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

            <div
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="loader"></div>
    <div
      class="row centeralign addmargin"
      :class="{ productnotfound: Products.length === 0, productfound: Products.length > 0 }"
    >
      <h2 class="sec_heading">
        We're sorry, no matches were found.
      </h2>
      <h4 class="body_text">
        We couldn't find any results for your selected filters. Clear your filters, or contact
        our team
        and
        we'll be happy to help.
      </h4>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import {
//     graphQl
// } from "../../../assets/graphql/collection-query";

import assets from "../../../assets/graphql/assets.json";
import {
    ShopifyAPI
} from "../../Shopify/Shopify";

export default {
    props: {
        shopifyData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isActive: false,
            isMobile: false,
            gridMax: false,
            gridMin: false,
            show: false,
            showSort: false,
            showColor: false,
            showSize: false,
            showMaterial: false,
            selected: '',
            selectedFilter: [],
            selectedSort: ["Recommended"],
            selectedColor: '',
            selectedSize: '',
            selectedMaterial: '',

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
            ddTestSort: [{
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

            /** latest code **/
            Products: [],
            AllProducts:[],
            ErrorCase: false,
            shopifyPagination: false,
            themeAssets: [],
            loadInit:false
        };
    },
    mounted() {
        // document.addEventListener('click', this.onClick);
        document.getElementById("loader").style.display = "none";
        
         
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }

        window.onunload = function () {
            window.scrollTo(0, 0);
        };
        this.loadMore();

        if(window.innerWidth<=767){
            this.isMobile=true;
        }

        this.filterStorage()
        this.fetchProdustQuery();
        this.setScreenRangeGrid();
        this.roughData();
        this.loadInit=true;
    },
    methods: {

      /* load product on scroll */
        loadMore() {
            
            window.onscroll = () => {
                if(this.busy == false){
                  let bottomOfWindow = document.documentElement.scrollHeight - document.documentElement.scrollTop;
                  if (bottomOfWindow < 1200 && this.Products.length != this.AllProducts.length) {
                      let obj = this;
                      this.busy = true;
                      document.getElementById("loader").style.display = "block";
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
                
                
            }
        },
     
        filterStorage() {
            var arr = []
            localStorage.setItem('fillters', arr)
        },
        roughData() {
            var productData = window.atob(this.shopifyData.collectionListing);
            return JSON.parse(productData);
        },
        closeSortMenu: function (event) {
            console.log(event);
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
            console.log(product.id);
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
                    console.log(varints[0].featured_image.src);
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

            let arrayName = ['category', 'color', 'size', 'material'];
            arrayName.map(item => {
                this.clearCheckBoxs(item);
            })

            localStorage.setItem('fillters', [])
            this.showClearAll = false;
            this.fetchProdustQuery()
        },
        /* End Clear all filter */

        /* start unchecked checkbox when click clear button in dropdown */
        clearCheckBoxs: function (name) {
            var markedCheckbox = document.getElementsByName(name);
            for (var checkbox of markedCheckbox) {
                if (checkbox.checked) checkbox.checked = false;
            }

            var savedFilter = []
            var savedItem = localStorage.getItem('fillters') || []
            var category, size, material, color, sort;
            category = -1
            size = -1
            material = -1
            color = -1
            sort = -1
            if (savedItem != '') {
                savedFilter = JSON.parse(savedItem)
                savedFilter.map((e, i) => {
                    if (Object.prototype.hasOwnProperty.call(e, "Category")) {
                        category = i
                    } else if (Object.prototype.hasOwnProperty.call(e, "Color")) {
                        color = i
                    } else if (Object.prototype.hasOwnProperty.call(e, "Size")) {
                        size = i
                    } else if (Object.prototype.hasOwnProperty.call(e, "Material")) {
                        material = i
                    } else if (Object.prototype.hasOwnProperty.call(e, "sort")) {
                        sort = i
                    }
                })
            }

            if (name == "category") {
                this.selected = [];
                this.filterByCategory = [];
                if (category >= 0) {
                    savedFilter.splice(parseInt(category), parseInt(savedFilter.length))
                }
            } else if (name == "color") {
                this.selectedColor = [];
                this.filterByColor = [];
                if (color >= 0) {
                    savedFilter.splice(parseInt(color), parseInt(savedFilter.length))
                }
            } else if (name == "size") {
                this.selectedSize = [];
                this.filterBySize = [];
                if (size >= 0) {
                    savedFilter.splice(parseInt(size), parseInt(savedFilter.length))
                }
            } else if (name == "material") {
                this.selectedMaterial = [];
                this.filterByMaterial = [];
                if (material >= 0) {
                    savedFilter.splice(parseInt(material), parseInt(savedFilter.length))
                }
            } else if (name == "sort") {
                if (sort >= 0) {
                    savedFilter.splice(parseInt(sort), parseInt(savedFilter.length))
                }
            }

            localStorage.setItem('fillters', JSON.stringify(savedFilter))
            this.fetchProdustQuery()
            this.clearAllOption()

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
            this.selectedColor = (event.target.value);
            this.filterProductByColor()
        },

        /* set selected size checkbox value */
        onCheckSize: function (event) {
            this.selectedSize = (event.target.value);
            this.filterProductBySize();
        },

        /* set selected material checkbox value */
        onCheckMaterial: function (event) {

            this.selectedMaterial = (event.target.value);
            this.filterProductByMaterial();
        },

        /* set selected sort checkbox value */
        onCheckSort: function (event) {

            this.saveFilter("sort", event.target.value)
            this.page_index = 0;
            // var markedCheckbox = document.getElementsByName("sort");
            // for (var checkbox of markedCheckbox) {
            //     this.selectedSort = [];
            //     if (checkbox.id == event.target.id) {
            //         if (
            //             this.sortObject.id != undefined &&
            //             this.sortObject.id == event.target.id
            //         ) {
            //             checkbox.checked = false;
            //             this.sortProduct();
            //             this.sortObject = {};
            //         } else {
            //             markedCheckbox = document.getElementById(event.target.id);
            //             markedCheckbox.checked = true;
            //             this.sortObject = markedCheckbox;
            //             this.selectedSort.push(event.target.value);

            //             this.saveFilter("sort", event.target.value)
            //             this.page_index = 0;

            //         }
            //     } else {
            //         checkbox.checked = false;
            //     }
            // }

            // to close responsive menu in mobile
        },

        /* Fill category dropdown from products data */

        getCategoryDropDownList: function () {
            let products = this.roughData();

            let array = [];
            products.map((item) => {
                item[0].tags.map((ca) => {
                    array.push(ca);
                });
            });

            let data = [...new Set(array)];
            array = [];
            data.map((item, index) => {
                let obj = {
                    id: item + index,
                    value: item,
                    text: item,
                };
                array.push(obj);
            });
            return array;
        },
        /* End Fill category dropdown from products data */

        /* Fill color dropdown from products data */

        getColorDropDownList: function () {
            let products = this.roughData();
            let array = [];
            products.map((item) => {
                if (Object.values(item[0].options).includes("Color") == false) return;
                var Data = item[0].options;

                var index = Data.map(function (e) {
                    return e;
                }).indexOf("Color");

                item[0].variants.map((col) => {

                    array.push(col["option" + (index + 1)].toUpperCase());
                });
            });

            let data = [...new Set(array)];

            array = [];
            data.map((item, index) => {
                let obj = {
                    id: item + index,
                    value: item,
                    text: item,
                };
                if (item != null) {
                    array.push(obj);
                }
            });
            return array;
        },

        /* End Fill color dropdown from products data */

        /* Fill size dropdown from products data */
        getSizeDropDownList: function () {
            let products = this.roughData();

            let array = [];
            products.map((item) => {
                if (Object.values(item[0].options).includes("Size") == false) return;
                var Data = item[0].options;

                var index = Data.map(function (e) {
                    return e;
                }).indexOf("Size");

                item[0].variants.map((col) => {
                    var size = ['XS', 'S', 'M', 'L', 'Xl', 'Xxl', 'Xxxl', 'Xxs', 'Xl', 'XXL', 'XXXL', 'XXS', 'XL']
                    if (size.includes(col["option" + (index + 1)])) {
                        return
                    } else {
                        array.push(col["option" + (index + 1)]);
                    }

                });
            });

            let data = [...new Set(array)];
            array = [];
            data.map((item, index) => {
                let obj = {
                    id: item + index,
                    value: item,
                    text: item,
                };
                if (item != null) {
                    array.push(obj);
                }
            });
            return array;
        },
        /* End Fill size dropdown from products data */

        /* Fill material dropdown from products data */
        getMaterialDropDownList: function () {
            let products = this.roughData();

            let array = [];
            products.map((item) => {
                if (Object.values(item[0].options).includes("Material") == false)
                    return;
                var Data = item[0].options;

                var index = Data.map(function (e) {
                    return e;
                }).indexOf("Material");

                item[0].variants.map((col) => {
                    array.push(col["option" + (index + 1)]);
                });
            });

            let data = [...new Set(array)];
            array = [];
            data.map((item, index) => {
                let obj = {
                    id: item + index,
                    value: item,
                    text: item,
                };
                if (item != null) {
                    array.push(obj);
                }
            });
            return array;
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

        /**
         * save filter in localstorage when user choose filter option
         */
        saveFilter(name, value) {
            var saveVal = []

            // var filter = localStorage.setItem('fillters',[])
            var filter = localStorage.getItem('fillters')
            var dd = {}

            /* when selectedFilter is empty */
            if (filter == '') {

                dd[name] = value
                saveVal.push(dd)
                localStorage.setItem('fillters', JSON.stringify(saveVal))
                this.showClearAll = true;
                this.fetchProdustQuery()
                return;
            }

            var prev = JSON.parse(filter)

            var values = prev.map(function (o) {
                return o[name];
            });

            var flag = false
            var index = prev.map(function (e, i) {
                if (Object.prototype.hasOwnProperty.call(e, name)) {
                    flag = true
                }
            });

            var ColVal = value

            /* in property has already filled */
            if (flag) {
                var newArray = []
                prev.map(function (o) {
                    // return o.Category; 
                    if (Object.prototype.hasOwnProperty.call(o, name)) {
                        var updateval = {
                            [name]: ColVal
                        }
                        newArray.push(updateval)
                    } else {
                        newArray.push(o)
                    }
                })
                localStorage.setItem('fillters', JSON.stringify(newArray))
            } else {
                dd[name] = ColVal
                prev.push(dd)
                localStorage.setItem('fillters', JSON.stringify(prev))
            }

            this.showClearAll = true;
            this.fetchProdustQuery()

            // console.log(localStorage.getItem('fillters'))

        },

        /* set selected category checkbox value */
        onCheck(event) {
            this.saveFilter("Category", event.target.value)
            this.page_index = 0;
        },

        /* set product in array based on selected color option */
        filterProductByColor: function () {
            this.saveFilter("Color", this.selectedColor)
            this.page_index = 0;
        },

        /* set product in array based on selected size option */
        filterProductBySize: function () {
            this.saveFilter("Size", this.selectedSize)
            // this.filterBySize = [];
            //     this.clearAllOption();
            this.page_index = 0;
        },

        /* set product in array based on selected material option */
        filterProductByMaterial: function () {
            this.saveFilter("Material", this.selectedMaterial)
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

        async fetchProdustQuery() {

            /// fetch shopify graphQl queries

            var productData = window.atob(this.shopifyData.collectionListing);
            var Products = JSON.parse(productData);

            var filterListing = [];
            var duplicateRecord = [];

            /*********************************************************/
            // start filter (initailize value)
            /*********************************************************/
            var Categories, Color, Size, Material;
            Categories = ''
            Color = ''
            Size = ''
            Material = ''
            let getSavedFilter = localStorage.getItem('fillters')

            if (getSavedFilter != '') {
                let savefiltr = JSON.parse(getSavedFilter)
                savefiltr.map((filter_elem, filter_index) => {
                    if (Object.prototype.hasOwnProperty.call(filter_elem, "Category")) {
                        Categories = Object.values(filter_elem)[0]
                    } else if (Object.prototype.hasOwnProperty.call(filter_elem, "Color")) {
                        Color = Object.values(filter_elem)[0]
                    } else if (Object.prototype.hasOwnProperty.call(filter_elem, "Size")) {
                        Size = Object.values(filter_elem)[0]
                    } else if (Object.prototype.hasOwnProperty.call(filter_elem, "Material")) {
                        Material = Object.values(filter_elem)[0]
                    }
                })
            }

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

                var handle = p.handle;

                /*********************************************************/
                /// category filter applied here (start)
                /*********************************************************/

                if (Categories != '') { // first check if value set
                    if (p.tags.includes(Categories) == false) {
                        continue
                    }
                }

                /*********************************************************/
                /// category filter applied here (end)
                /*********************************************************/
                if(getSavedFilter !='') {
                    // check handle is already used then return
                    if (duplicateRecord.includes(handle)) {
                        continue;
                    }
                }
                   

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

                    if (Size || Material || Color) {
                        // set filter priority

                        var priority = []

                        if (Size != '')
                            priority.push(Size)
                        if (Material != '')
                            priority.push(Material)
                        if (Color != '')
                            priority.push(Color)

                        var activeIndex = 0
                        var flagForPair = false
                        var filterpair = []
                        for (let swatchPl in swatch) {

                            var Phandle = swatch[swatchPl].link;

                            for (let childPair in Products) {
                                //  console.log(products[childPair].node.handle,'===', Phandle)
                                if (Products[childPair][0].handle == Phandle.replace("/products/", "")) {
                                    // console.log(Products[childPair][0]);

                                    var sP1_variant = Products[childPair][0].variants

                                    var counterMatch = 0

                                    sP1_variant.map((sP) => { // sP means single product
                                        counterMatch = 0
                                        sP.options.map((options) => { // sP means single product

                                            if (options == Size)
                                                counterMatch++
                                            else if (options == Material)
                                                counterMatch++
                                            else if (options == Color)
                                                counterMatch++
                                        })
                                    })

                                    if (counterMatch == priority.length) {
                                        flagForPair = true
                                        activeIndex = swatchPl
                                    }

                                    Products[childPair][0].variants = this.appendStock(Products[childPair][0].variants, Products[childPair][2]);


                                    filterpair.push(Products[childPair][0])
                                    collectPairProducts.push(Products[childPair][0])

                                    // if(flagForPair){
                                    //   collectPairProducts.push(Products[childPair][0]);
                                    // }
                                }
                            }

                        }

                        if (flagForPair == false) {
                            filterpair = []
                            continue
                        }

                        productType["active"] = activeIndex
                        productType["variable"] = filterpair;
                        productType["swatches"] = swatch;
                        filterListing.push(productType);

                    } else {

                        /*********************************************/
                        // default load code for variable products
                        /*********************************************/

                        var variableActiveIndex = 0
                        for (let swatchPl in swatch) {
                            var Phandle2 = swatch[swatchPl].link;
                            
                            for (let childPair in Products) {
                                //  console.log(products[childPair].node.handle,'===', Phandle)
                                if (Products[childPair][0].handle == Phandle2.replace("/products/", "")) {

                                    if(handle == Products[childPair][0].handle){
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

                    }

                    /*********************************************************/
                    /// filter variable product (END)
                    /*********************************************************/

                } else if (bindInPair.length == 0) {

                    /*********************************************************/
                    /// filter apply at single products
                    /*********************************************************/

                    if (Size || Material || Color) {

                        // set filter priority

                        var priorityS = [] // priorityS for single

                        if (Size != '')
                            priorityS.push(Size)
                        if (Material != '')
                            priorityS.push(Material)
                        if (Color != '')
                            priorityS.push(Color)

                        var VaraintFlag = false
                        var sP_variant = p.variants
                        var counterMatch1 = 0

                        sP_variant.map((sP) => { // sP means single product
                            counterMatch1 = 0
                            sP.options.map((options) => { // sP means single product
                                if (options == Size)
                                    counterMatch++
                                else if (options == Material)
                                    counterMatch++
                                else if (options == Color)
                                    counterMatch++
                            })
                        })

                        if (counterMatch1 == priorityS.length) {
                            /// append stock qty
                            p.variants = this.appendStock(p.variants, stock);
                            productType["single"] = p;
                            filterListing.push(productType);
                        }
                    } else {
                        /// first time browser load
                        /// append stock qty
                        p.variants = this.appendStock(p.variants, stock);
                        productType["single"] = p;
                        filterListing.push(productType);
                    }

                    /*********************************************************/
                    /// filter variable product (END)
                    /*********************************************************/

                } else if (flag) {
                    // else condition will be work if product have no variation
                    // filterListing.push(p);
                }
            }

            filterListing = this.shuffle(filterListing)


            this.Products = [...filterListing].slice(0, this.page_size);
            this.AllProducts=[...filterListing].slice(0, 100);

            if (getSavedFilter != "") {
                let savefiltr = JSON.parse(getSavedFilter);

                if (savefiltr.length>0 && Object.prototype.hasOwnProperty.call(savefiltr[0], 'sort')) {
                    this.sortProduct(savefiltr[0].sort);
                }
            }
        },
       shuffle(array) {
          let currentIndex = array.length,  randomIndex;

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

        /* sort product based on price low to high and vice-verse */
        sortProduct: function (obj) {
            this.Products.sort(function (a, b) {
                if (obj == "LowToHigh") {
                    if (Object.prototype.hasOwnProperty.call(a, 'variable')) {
                        return a.variable[a.active].price - (b.variable != undefined ? b.variable[b.active].price : b.single.price);
                    }
                    if (Object.prototype.hasOwnProperty.call(a, 'single')) {
                        return a.single.price - (b.single != undefined ? b.single.price : b.variable[b.active].price);
                    }

                } else if (obj == "HighToLow") {
                    if (Object.prototype.hasOwnProperty.call(b, 'variable')) {
                        return b.variable[b.active].price - (a.variable != undefined ? a.variable[a.active].price : a.single.price);
                    }
                    if (Object.prototype.hasOwnProperty.call(b, 'single')) {
                        return b.single.price - (a.single != undefined ? a.single.price : a.variable[a.active].price);
                    }
                } else if (obj == "Latest") {
                    if (Object.prototype.hasOwnProperty.call(b, 'variable')) {
                        return new Date(b.variable[b.active].created_at) - (a.variable != undefined ? new Date(a.variable[a.active].created_at) : new Date(a.single.created_at));
                    }
                    if (Object.prototype.hasOwnProperty.call(b, 'single')) {
                        return new Date(b.single.created_at) - (a.single != undefined ? new Date(a.single.created_at) : new Date(a.variable[a.active].created_at));
                    }
                }
            });

        },

        randomIntFromInterval(min, max) {
            // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

        addToCard(event) {
            var product = event.target.parentNode;
            var variant = product.getAttribute("variantid");
            var dynamic = new ShopifyAPI();

            var item = {
                id: variant,
                qty: 1,
            };

            dynamic.addItem(item);
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
            grid.querySelector(".product_price").innerHTML =
                "$ " + (activeProduct.price / 100).toFixed(2);

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
            console.log(activeProduct)


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
/* Collaction Banner Css Code */
.collaction_banner {
    position: relative;
}

.collaction_banner img {
    width: 100%;
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
    color: #FFFFFF;
    text-shadow: 0px 2.3824px 55.3909px rgba(0, 0, 0, 0.42);
}

.product_item:empty {
    display: none;
}

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

.multiselect>.tmb_header_dopdown>ul>li {
    display: flex;
    align-items: center;
    gap: 5px;
}

.multiselect>.tmb_header_dopdown>ul>li:not(:last-child) {
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

.multiselectOption:checked+label::after {
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
    margin: 21px 0 12px;
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

.card>img {
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

input#img-1:checked~.nav-dots label#img-dot-1,
input#img-2:checked~.nav-dots label#img-dot-2,
input#img-3:checked~.nav-dots label#img-dot-3,
input#img-4:checked~.nav-dots label#img-dot-4,
input#img-5:checked~.nav-dots label#img-dot-5,
input#img-6:checked~.nav-dots label#img-dot-6 {
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
    visibility: visible !important;
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

    .filter_row {
        margin: 5px 0 12px;
    }
}
</style>

<!-- loader -->
<style scoped>
/* Center the loader */
#loader {
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 1;
  width: 50px;
  height: 50px;
  margin: -76px 0 0 -76px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s
}

@-webkit-keyframes animatebottom {
  from { bottom:-100px; opacity:0 } 
  to { bottom:0px; opacity:1 }
}

@keyframes animatebottom { 
  from{ bottom:-100px; opacity:0 } 
  to{ bottom:0; opacity:1 }
}



</style>
