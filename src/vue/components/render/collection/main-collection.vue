<template>
    <section class="collection-sec ">
        <div class="home">
            <div class="filter_responsive">
                <div class="filter_cta_wrapper">
                    <button class="filter_cta" id="filterCta" v-on:click="myFilter">FILTER</button>
                    <button class="filter_cta" id="sortCta" v-on:click="sortBy">SORT</button>
                </div>
            </div>
            <div class="filter_row">
                <div class="row_inner">
                    <div class="filters">
                        <div class="filters_responsive">
                            <div class="close-btn" v-on:click="closeMenu">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.8861 11.8864L35.6587 35.6589" stroke="#656565" stroke-width="1.5"/>
                                    <path d="M11.8861 35.6586L35.6587 11.886" stroke="#656565" stroke-width="1.5"/>
                                </svg>
                            </div>
                            <div class="filter_cta_wrapper">
                                <button class="filter_cta filter-modifier">FILTER</button>
                                <button class="filter_cta clear-modifier" @click="clearAllFilter()">CLEAR FILTERS
                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bb57343a=""><path d="M0.5 1L5 5.5L2.75 3.25L0.5 1Z" stroke="white" data-v-bb57343a=""></path><path d="M5 1L0.5 5.5L2.75 3.25L5 1Z" stroke="white" data-v-bb57343a=""></path></svg>
                                </button>
                            </div>
                        </div>
                        <div class="filters_inner">
                            <div class="filter" @mouseenter="isMobile == true?null:show = true" @mouseleave="show = false" @click="isMobile == false?null:closeDropDown(show,'show')">
                                <!-- v-on:mouseover="show = !show" -->
                                <div class="dropdown" >
                                    <div class="overselect">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <button class="c-form-input">
                                        Categories
                                    </button>
                                </div>
                                <div class="multiselect" v-bind:class="{ active: show }">
                                    <div class="tmb_header_dopdown">
                                        <ul>
                                            <li v-for="(option) in ddTestCategory" :key="option.id">
                                                <input class="multiselectOption" type="checkbox" name="category"
                                                    :id="option.id" :value="option.value" @change="onCheck($event)">
                                                <label class="optionLabel" :for="option.id">{{ option.text }}</label>
                                            </li>
                                        </ul>
                                        <div class="btn_wrapper">
                                            <!-- <button class="filterBtn modifier" @click="filterProduct">Apply</button> -->
                                            <button class="filterBtn" @click="clearCheckBoxs('category')">Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter" @mouseenter="isMobile == true?null:showColor = true" @mouseleave="showColor = false" @click="isMobile == false?null:closeDropDown(showColor,'showColor')">
                                <div class="dropdown" >
                                    <div class="overselect">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <button class="c-form-input">
                                        Color
                                    </button>
                                </div>
                                <div class="multiselect" v-bind:class="{ active: showColor }">
                                    <div class="tmb_header_dopdown">
                                        <ul>
                                            <li v-for="(option) in ddTestColor" :key="option.id">
                                                <input class="multiselectOption" type="checkbox" name="color"
                                                    :id="option.id" :value="option.value" @change="onCheckColor($event)">
                                                <label class="optionLabel" :for="option.id">{{ option.text }}</label>
                                            </li>
                                        </ul>
                                        <div class="btn_wrapper">
                                            <!-- <button class="filterBtn modifier" @click="filterProductByColor">Apply</button> -->
                                            <button class="filterBtn" @click="clearCheckBoxs('color')">Clear</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="filter" @mouseenter="isMobile == true?null:showSize = true" @mouseleave="showSize = false" @click="isMobile == false?null:closeDropDown(showSize,'showSize')">
                                <div class="dropdown" >
                                    <div class="overselect">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <button class="c-form-input">
                                        Size
                                    </button>
                                </div>
                                <div class="multiselect" v-bind:class="{ active: showSize }">
                                    <div class="tmb_header_dopdown">
                                        <ul>
                                            <li v-for="(option) in ddTestSize" :key="option.id">
                                                <input class="multiselectOption" type="checkbox" name="size" :id="option.id"
                                                    :value="option.value" @change="onCheckSize($event)">
                                                <label class="optionLabel" :for="option.id">{{ option.text }}</label>
                                            </li>
                                        </ul>
                                        <div class="btn_wrapper">
                                            <!-- <button class="filterBtn modifier" @click="filterProductBySize">Apply</button> -->
                                            <button class="filterBtn" @click="clearCheckBoxs('size')">Clear</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="filter filter-modifier" @mouseenter="isMobile == true?null:showMaterial = true" @mouseleave="showMaterial = false" @click="isMobile == false?null:closeDropDown(showMaterial,'showMaterial')">
                                <div class="dropdown" >
                                    <div class="overselect">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <button class="c-form-input">
                                        Material
                                    </button>
                                </div>
                                <div class="multiselect" v-bind:class="{ active: showMaterial }">
                                    <div class="tmb_header_dopdown">
                                        <ul>
                                            <li v-for="(option) in ddTestMaterial" :key="option.id">
                                                <input class="multiselectOption" type="checkbox" name="material"
                                                    :id="option.id" :value="option.value" @change="onCheckMaterial($event)">
                                                <label class="optionLabel" :for="option.id">{{ option.text }}</label>
                                            </li>
                                        </ul>
                                        <div class="btn_wrapper">
                                            <!-- <button class="filterBtn modifier" @click="filterProductByMaterial">Apply</button> -->
                                            <button class="filterBtn" @click="clearCheckBoxs('material')">Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="filter">
                                <button class="clearFilter" v-bind:class="{ activeClear: showClearAll }" @click="clearAllFilter()" >Clear filters
                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 1L5 5.5L2.75 3.25L0.5 1Z" stroke="white" />
                                        <path d="M5 1L0.5 5.5L2.75 3.25L5 1Z" stroke="white" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="sort_by">
                        <div class="filters_responsive">
                            <div class="close-btn" v-on:click="closeMenu">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.8861 11.8864L35.6587 35.6589" stroke="#656565" stroke-width="1.5"/>
                                    <path d="M11.8861 35.6586L35.6587 11.886" stroke="#656565" stroke-width="1.5"/>
                                </svg>
                            </div>
                            <div class="filter_cta_wrapper">
                                <button class="filter_cta filter-modifier">SORT</button>
                                <!-- <button class="filter_cta clear-modifier">CLEAR FILTERS
                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bb57343a=""><path d="M0.5 1L5 5.5L2.75 3.25L0.5 1Z" stroke="white" data-v-bb57343a=""></path><path d="M5 1L0.5 5.5L2.75 3.25L5 1Z" stroke="white" data-v-bb57343a=""></path></svg>
                                </button> -->
                            </div>
                        </div>
                        <div class="sort_by_inner">
                            <div class="range">
                                <div class="add_remove">
                                    <button>-</button>
                                    <button>+</button>
                                </div>
                                <input id="ageInputId" type="range" value={{gridColumn}} min="2" max="6" step="2"
                                    class="progress" @input="sliderChange($event)">
                            </div>
                            <div class="sortFilter" @mouseenter="showSort = true" @mouseleave="showSort = false">
                                <button class="sortBtn">
                                    Sort By
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path data-v-35171425="" d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75"
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </button>
                                <div class="multiselect" v-bind:class="{ active: showSort }">
                                    <div class="tmb_header_dopdown">
                                        <ul>
                                            <li v-for="(option) in ddTestSort" :key="option.id">
                                                <input class="multiselectOption" type="checkbox" name="sort"
                                                    :id="option.id" :value="option.value" @change="onCheckSort($event)">
                                                <label class="optionLabel" :for="option.id">{{ option.text }}</label>
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
                <div class="grid_inner" v-bind:class="{ grid_inner_max: gridMax, grid_inner_min: gridMin }">
                    <div class="product_item" v-for="product in productList" :key="product.id">
                        <div class="card" v-if="product.images.length>0" @mouseenter="isMobile==false?productId=product.id:''" @mouseleave="cardmouseleave(product.id)">
                            <div class="item_left" v-bind:class="{ item_left_active: product.id == productId }" :id="'item_left_'+product.id">{{product.variants[0].stock<=5 && product.variants[0].stock>=1?'ONLY '+ product.variants[0].stock +' LEFT':product.variants[0].stock==0?'Out Of Stock':''}}</div>
                            
                            <div class="product_img_wrapper" :id="'product_img_wrapper'+product.id" v-bind:class="{ out_of_stock: product.variants[0].stock == 0 }">
                                <img v-if="product.variants[0].featured_image!=null" :src="product.variants[0].featured_image.src" :id="product.id" />
                                <img  :src="product.images[0].src" :id="product.id"
                                @mouseenter="mouseover($event, product.images[product.images.length - 1].src)"
                                @mouseleave="mouseleave($event, product.images[0].src)" v-else />
                                <!-- <div class="out_of_stock_text" :id="'out_of_stock_text'+product.id" v-bind:class="{ out_of_stock_text_active: product.variants[0].stock == 0 }">Out Of Stock</div> -->
                            </div>
                            <h5 class="card-title">{{ product.title }}</h5>
                            <h5 class="card-title bold">${{ Math.floor(product.variants[0].price) }}</h5>
                            <div class="quickButton quickActive" v-bind:class="{ quickActive: isMobile==false?product.id == productId:true }">
                                <div class="color_swatches">
                                    <ul>
                                        <li :key="color+index" class="nav-dots" v-for="color in product.options">
                                            <span v-if="color.name.toLowerCase().includes('color')">
                                                <template v-if="color.values.length <= 4 ">
                                                    <label for="img-1" :key="colors" class="nav-dot" :style="inlineBgImage(colors)" :id="'img-dot-'+product.id+colors" @click="(e)=>onSelectColor(colors,product,e)" v-for="colors in color.values"></label>
                                                </template>
                                                <template v-else>
                                                    <swiper
                                                        :modules="modules"
                                                        :slidesPerView="4"
                                                        :slidesPerSlide="1"
                                                        navigation
                                                        >
                                                            <swiper-slide :key="colors" v-for="colors in color.values">
                                                                <label for="img-1"  class="nav-dot" :style="inlineBgImage(colors)" :id="'img-dot-'+product.id+colors" @click="(e)=>onSelectColor(colors,product,e)" ></label>
                                                            </swiper-slide>
                                                    </swiper>
                                                </template>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="product_cta_wrapper">
                                    <button :id="'quickAdd'+product.id" class="quickAdd" v-bind:class="{ quickAdd_deactive: product.variants[0].stock == 0 }" @click="addToCard(product)">
                                        <span>Quick Add</span>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="row centeralign addmargin"
                    v-bind:class="{ productnotfound: productList.length == 0, productfound: productList.length > 0 }">
                    <h2 class="sec_heading">We're sorry, no matches were found.</h2>
                    <h4 class="body_text">We couldn't find any results for your selected filters. Clear your filters, or contact
                        our team
                        and
                        we'll be happy to help.</h4>
                </div>
            </div>
        </div>
        <div class="big_container">
            <div class="ethics_in_fashion">
                <div class="ethics_content">
                    <div class="ethics_content_inner">
                        <h2 class="sec_heading">We are working to redefine sustainability and ethics in fashion.</h2>
                        <p class="body_text">Each behno piece is handcrafted in facilities incrementally implementing The behno Standard, a set of six guiding principles:</p>
                    </div>
                    <div class="fashion_img_grid">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/standard-card-2.png?v=1653631202" alt="error">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/standard-card1-2.png?v=1653631202" alt="error">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/standard-card3-2.png?v=1653631202" alt="error">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/standard-card4-2.png?v=1653631202" alt="error">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/standard-card5-2.png?v=1653631202" alt="error">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/standard-card6-2.png?v=1653631202" alt="error">
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>

import products from "@/assets/json/collectionproduct.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation} from "swiper";
// import axios from 'axios'
export default {
    components: {

        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
        modules: [Navigation],
        };
    },
    mounted() {
        // document.addEventListener('click', this.onClick);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        this.loadMore();
        this.setScreenRangeGrid();

        if(window.innerWidth<=767){
            this.isMobile=true;
        }
        window.addEventListener('resize',function(){
            if(window.innerWidth<767){
                this.isMobile=true;
            }
            else{
                this.isMobile=false;
            }
        })

    },
    data() {
        return {
            isMobile:false,
            gridMax: false,
            gridMin: false,
            show: false,
            showSort: false,
            showColor: false,
            showSize: false,
            showMaterial: false,
            selected: [],
            selectedSort: [],
            selectedColor: [],
            selectedSize: [],
            selectedMaterial: [],
            ddTestCategory: this.getCategoryDropDownList(),
            ddTestColor: this.getColorDropDownList(),
            ddTestSize: this.getSizeDropDownList(),
            ddTestMaterial: this.getMaterialDropDownList(),
            productList: [], //this.array_chunk(products, 20),
            fullproductList: products,
            page_index: 0,
            page_size: 12,
            filterByCategory: [],
            filterByColor: [],
            filterBySize: [],
            filterByMaterial: [],
            busy: false,
            showClearAll: false,
            gridColumn:4,
            productId:0,
            ddTestSort: [
                {
                    id: "sort1",
                    value: "Recommended",
                    text: "Recommended"
                },
                {
                    id: "sort2",
                    value: "LowToHigh",
                    text: "Price: Low to High"
                },
                {
                    id: "sort3",
                    value: "HighToLow",
                    text: "Price: High to Low"
                },
                {
                    id: "sort4",
                    value: "Latest",
                    text: "Latest Arrivals"
                },
                {
                    id: "sort5",
                    value: "Discount",
                    text: "Percent Discount"
                }
            ],
            sortObject:{}
        }
    },
    methods: {

        closeDropDown:function(show,type){
           if(show == false){
               if(type == 'show'){
                this.show = true;
               }
               else if(type == 'showColor'){
                this.showColor = true;
               }
               else if(type == 'showSize'){
                this.showSize = true;
               }
               else if(type == 'showMaterial'){
                this.showMaterial = true;
               }
           }
           else{
               if(type == 'show'){
                this.show = false;
               }
               else if(type == 'showColor'){
                this.showColor = false;
               }
               else if(type == 'showSize'){
                this.showSize = false;
               }
               else if(type == 'showMaterial')
               {
                this.showMaterial = false;
               }
           }
        },
        // open filter navbar
        myFilter:function(){
            var filters  = document.querySelector(".filters");
            filters.classList.toggle("show");
        },

        // open sortBy navbar
        sortBy:function(){
            var sortBy  = document.querySelector(".sort_by");
            sortBy.classList.toggle("show");
        },

        // close navbar
        closeMenu:function(e){
            var activeMenu = e.currentTarget.closest(".show");
            activeMenu.classList.remove("show");
        },

        cardmouseleave:function(id){
            this.productId=0;
            let quickAdd=document.querySelector('#quickAdd'+id);
            quickAdd.classList.remove("quickAdd_active");
        },
        
        inlineBgImage:function(colors){
            let color=colors.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
            let bgImage = "//cdn.shopify.com/s/files/1/0899/2182/files/" + color + ".png?v=5251390435792914590";

            let url=`background-image:url(${bgImage});`
            return url + 'background:'+ color;
        },

        onSelectColor:function(color,product,event){
            // console.log(product.id);
            if(event.currentTarget.parentElement.children.length>1){
                let childcolor=event.currentTarget.parentElement.children;
                for(let item of childcolor){
                    item.classList.remove('activecolor')        
                }
            }
            event.currentTarget.classList.add('activecolor')
            let img=document.getElementById(product.id);
            let div=document.querySelector('#item_left_'+product.id);
            let product_img_div=document.querySelector('#product_img_wrapper'+product.id);
            let out_of_stock_text=document.querySelector('#out_of_stock_text'+product.id);
            let quickAdd=document.querySelector('#quickAdd'+product.id);
             
            // console.log(img);
            let varints= product.variants.filter(item=>{
                return item.title.includes(color)
            })
            if(varints.length>0){
                if(varints[0].featured_image!=null){
                    // console.log(varints[0].featured_image.src);
                    img.src=varints[0].featured_image.src;
                }
                div.textContent=varints[0].stock<=5?'ONLY '+varints[0].stock+' LEFT':'';

                if(varints[0].stock == 0){
                    div.textContent='Out Of Stock';
                    out_of_stock_text.classList.add("out_of_stock_text_active");
                    product_img_div.classList.add("out_of_stock");
                    quickAdd.classList.remove("quickAdd_active");
                    quickAdd.classList.add("quickAdd_deactive");
                    
                }
                else{
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
                this.gridColumn=6;
            }
            else if (width > 767 && width < 2000) {
                this.gridColumn=4;
            }
            else {
                this.gridColumn=2;
            }
        },

        sliderChange: function (event) {
            if (event.target.value == 2) {
                this.gridMin = false;
                this.gridMax = true;
            }
            else if (event.target.value == 6) {
                this.gridMin = true;
                this.gridMax = false;
            }
            else {
                this.gridMin = false;
                this.gridMax = false;
            }
        },
        /* end change grid column */

        onClick: function (event) {
            console.log("dsadsa");
            if (event.target.classList != 'dropdown' && event.target.parentElement.classList != 'dropdown' && event.target.parentElement.classList != 'sortFilter'
                && event.target.parentElement.parentElement.classList != 'dropdown'
                && event.target.parentElement.parentElement.parentElement != 'dropdown'
                && event.target.classList != 'optionLabel' && event.target.classList != 'multiselectOption' && event.target.tagName != 'path') {
                this.show = false;
                this.showColor = false;
                this.showSize = false;
                this.showMaterial = false;
                this.showSort = false;
            }
        },

        /* Clear all filter */
        clearAllFilter: function () {
            let arrayName = ['category', 'color', 'size', 'material'];
            arrayName.map(item => {
                this.clearCheckBoxs(item);
            })
            this.showClearAll = false;
        },
        /* End Clear all filter */

        /* start unchecked checkbox when click clear button in dropdown */
        clearCheckBoxs: function (name) {
            var markedCheckbox = document.getElementsByName(name);
            for (var checkbox of markedCheckbox) {
                if (checkbox.checked)
                    checkbox.checked = false;
            }
            if (name == 'category') {
                this.selected = [];
                this.filterByCategory = [];
            }
            else if (name == 'color') {
                this.selectedColor = [];
                this.filterByColor = [];
            }
            else if (name == 'size') {
                this.selectedSize = [];
                this.filterBySize = [];
            }
            else if (name == 'material') {
                this.selectedMaterial = [];
                this.filterByMaterial = [];
            }
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
            }
        },

        /* set selected category checkbox value */
        onCheck: function (event) {
            if (this.selected.includes(event.target.value)) {
                this.selected = this.selected.filter(function (geeks) {
                    return geeks != event.target.value;
                });
            } else {
                this.selected.push(event.target.value);
            }
            this.filterProduct();
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
            this.filterProductByColor();
        },

        /* set selected size checkbox value */
        onCheckSize: function (event) {
            if (this.selectedSize.includes(event.target.value)) {
                this.selectedSize = this.selectedSize.filter(function (geeks) {
                    return geeks != event.target.value;
                });
            } else {
                this.selectedSize.push(event.target.value);
            }
            this.filterProductBySize();
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
            this.filterProductByMaterial();
        },

        /* set selected sort checkbox value */
        onCheckSort: function (event) {
            var markedCheckbox = document.getElementsByName('sort');
            for (var checkbox of markedCheckbox) {
                this.selectedSort = []
                if (checkbox.id == event.target.id){
                    if (this.sortObject.id != undefined && this.sortObject.id == event.target.id){
                        checkbox.checked=false;
                        this.sortProduct();
                        this.sortObject={};
                    }
                    else{
                        markedCheckbox = document.getElementById(event.target.id);
                        markedCheckbox.checked = true;
                        this.sortObject=markedCheckbox;
                        this.selectedSort.push(event.target.value);
                        this.sortProduct();
                    }
                }
                else{
                    checkbox.checked=false;
                }   
            }
        },

        /* Fill category dropdown from products data */

        getCategoryDropDownList: function () {
            let array = [];
            products.map((item) => {
                item.tags.map((ca) => {
                    array.push(ca);
                });
            });
            let data = [...new Set(array)];
            array = [];
            data.map((item, index) => {
                let obj = { id: item + index, value: item, text: item };
                array.push(obj);
            });
            return array;
        },
        /* End Fill category dropdown from products data */

        /* Fill color dropdown from products data */

        getColorDropDownList: function () {
            let array = [];
            products.map((item) => {
                item.options[0].values.map((col) => {
                    array.push(col);
                });
            });
            let data = [...new Set(array)];
            array = [];
            data.map((item, index) => {
                let obj = { id: item + index, value: item, text: item };
                if (item != null) {
                    array.push(obj);
                }
            });
            return array;
        },

        /* End Fill color dropdown from products data */

        /* Fill size dropdown from products data */
        getSizeDropDownList: function () {
            let array = [];
            products.map((item) => {
                item.variants.map((col) => {
                    array.push(col.option2);
                });
            });
            let data = [...new Set(array)];
            array = [];
            data.map((item, index) => {
                let obj = { id: item + index, value: item, text: item };
                if (item != null) {
                    array.push(obj);
                }
            });
            return array;
        },
        /* End Fill size dropdown from products data */

        /* Fill material dropdown from products data */
        getMaterialDropDownList: function () {
            let array = [];
            products.map((item) => {
                item.variants.map((col) => {
                    array.push(col.option3);
                });
            });
            let data = [...new Set(array)];
            array = [];
            data.map((item, index) => {
                let obj = { id: item + index, value: item, text: item };
                if (item != null) {
                    array.push(obj);
                }
            });
            return array;
        },
        /* End Fill material dropdown from products data */

        /* sort product based on price low to high and vice-verse */
        sortProduct: function () {
            if (this.selectedSort.length > 0) {
                let obj = this.selectedSort[0];
                this.productList.sort(function (a, b) {
                    if (obj == 'LowToHigh') {
                        return a.variants[0].price - b.variants[0].price
                    }
                    else if (obj == 'HighToLow') {
                        return b.variants[0].price - a.variants[0].price
                    }
                    else if(obj=='Latest'){
                        return new Date(b.created_at) - new Date(a.created_at);
                    }
                });
            }
        },

        /* set product in array based on selected category option */
        filterProduct: function () {
            let array = [];
            if (this.selected.length > 0) {
                // Get Category product after multi select option in dropdown
                this.selected.map((cate) => {
                    let filter = products.filter((item) => {
                        return item.tags.includes(cate);
                    });
                    if (array.length > 0) {
                        array = new Set([...array, ...filter]);
                        array = [...array];
                    } else {
                        array = filter;
                    }
                });
                this.filterByCategory = array;
                array = this.getUniqueRecord(array, 'category');
            } else {
                this.filterByCategory = [];
                this.clearAllOption();
            }
            this.page_index = 0;
        },

        /* set product in array based on selected color option */
        filterProductByColor: function () {
            let array = [];
            if (this.selectedColor.length > 0) {
                // Get Color product after multi select option in dropdown
                this.selectedColor.map((col) => {
                    let filter = products.filter((item) => {
                        return item.options[0].values.includes(col);
                    });
                    if (array.length > 0) {
                        array = new Set([...array, ...filter]);
                        array = [...array];
                    } else {
                        array = filter;
                    }
                });
                this.filterByColor = array;
                array = this.getUniqueRecord(array, 'color');
            } else {
                this.filterByColor = [];
                this.clearAllOption();
            }
            this.page_index = 0;
        },

        /* set product in array based on selected size option */
        filterProductBySize: function () {
            let array = [];
            if (this.selectedSize.length > 0) {
                // Get Size product after multi select option in dropdown
                this.selectedSize.map((siz) => {
                    let filter = products.filter((item) => {
                        return item.variants[0].option2 == siz.toUpperCase();
                    });
                    if (array.length > 0) {
                        array = new Set([...array, ...filter]);
                        array = [...array];
                    } else {
                        array = filter;
                    }
                });
                this.filterBySize = array;
                array = this.getUniqueRecord(array, 'size');
            } else {
                this.filterBySize = [];
                this.clearAllOption();
            }
            this.page_index = 0;
        },

        /* set product in array based on selected material option */
        filterProductByMaterial: function () {
            let array = [];
            if (this.selectedMaterial.length > 0) {
                // Get Material product after multi select
                this.selectedMaterial.map((mat) => {
                    let filter = products.filter((item) => {
                        return item.variants[0].option3 == mat;
                    });
                    if (array.length > 0) {
                        array = new Set([...array, ...filter]);
                        array = [...array];
                    } else {
                        array = filter;
                    }
                });
                this.filterByMaterial = array;
                array = this.getUniqueRecord(array, 'material');
            } else {
                this.filterByMaterial = [];
                this.clearAllOption();
            }
            this.page_index = 0;
        },

        /*satrt filter and unique order after apply filter option */
        getUniqueRecord: function (array, type) {
            if (this.filterByCategory.length > 0 && type != 'category') {
                array = this.filterArrayToUniqueRecord(array, this.filterByCategory);
            }
            if (this.filterByColor.length > 0 && type != 'color') {
                array = this.filterArrayToUniqueRecord(array, this.filterByColor);
            }
            if (this.filterBySize.length > 0 && type != 'size') {
                array = this.filterArrayToUniqueRecord(array, this.filterBySize);
            }
            if (this.filterByMaterial.length > 0 && type != 'material') {
                array = this.filterArrayToUniqueRecord(array, this.filterByMaterial);
            }
            // const append = array.slice(
            //     array.length,
            //     this.page_size
            // );
            // this.productList = array.concat(append);
            this.productList = array; ///this.array_chunk(array, 20);
            this.showClearAll = true;
            this.sortProduct();
            return array;
        },

        filterArrayToUniqueRecord: function (array, filterWithArray) {
            return filterWithArray.filter((el) => {
                return array.some((f) => {
                    return f.id === el.id;
                });
            });
        },
        /*end filter and unique order after apply filter option */

        /* load product on scroll */
        loadMore() {
            this.busy = true;
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if(this.filterByColor.length == 0 && this.filterBySize.length == 0 && this.filterByCategory.length == 0 && this.filterByMaterial.length == 0){
                    if (bottomOfWindow) {
                        const append = products.slice(
                            this.productList.length,
                            this.productList.length + this.page_size
                        );
                        this.productList = this.productList.concat(append);
                        this.fullproductList=this.productList;
                    }
                }
                
            }
            if (this.productList.length == 0) {
                const append = products.slice(
                    this.productList.length,
                    this.page_size
                );
                this.productList = this.productList.concat(append);
                this.fullproductList=this.productList;
            }

            this.busy = false;
        },

        addToCard:function(product){
            // console.log(product);
        }

        /* On click page number change page */
        // paginate: function (index) {
        //     this.page_index = index;
        //     this.sortProduct();
        //     window.scrollTo({ top: 0, behavior: "smooth" });

        // },

        /* this function is used to set 20 record on single page */
        // array_chunk: function (array, size) {
        //     const chunked_arr = [];
        //     let index = 0;
        //     while (index < array.length) {
        //         chunked_arr.push(array.slice(index, size + index));
        //         index += size;
        //     }

        //     return chunked_arr;
        // },
    },
    
}

</script>

<style>
.nav-dots .swiper-button-prev
{
    display: none !important;
}
.nav-dots .swiper-button-next::after{
    content: url(https://cdn.shopify.com/s/files/1/0577/1178/8125/files/color-swatches-arrow.svg?v=1653549630);
}
.nav-dots .swiper.swiper-initialized{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 0;
}
.nav-dots .swiper-button-next {
    position: static;
}

@media(max-width:767px) {
    .grid_inner .product_item:nth-child(5),
    .grid_inner .product_item:nth-child(10),
    .grid_inner .product_item:nth-child(15),
    .grid_inner .product_item:nth-child(20),
    .grid_inner .product_item:nth-child(25),
    .grid_inner .product_item:nth-child(30),
    .grid_inner .product_item:nth-child(35),
    .grid_inner .product_item:nth-child(40),
    .grid_inner .product_item:nth-child(45),
    .grid_inner .product_item:nth-child(50),
    .grid_inner .product_item:nth-child(55),
    .grid_inner .product_item:nth-child(60),
    .grid_inner .product_item:nth-child(65),
    .grid_inner .product_item:nth-child(70),
    .grid_inner .product_item:nth-child(75),
    .grid_inner .product_item:nth-child(80),
    .grid_inner .product_item:nth-child(85),
    .grid_inner .product_item:nth-child(90),
    .grid_inner .product_item:nth-child(95),
    .grid_inner .product_item:nth-child(100)
    {
        grid-column: 1 / span 2;
    }
}

</style>

<style scoped>
/* ETHICS IN FASHION CSS START */
.ethics_in_fashion{
    padding: 60px 0;
    border-top: 1px solid #000;
}
.ethics_content_inner .body_text,
.ethics_content_inner .sec_heading{
    text-align: center;
}
.ethics_content_inner .body_text{
    margin-bottom: 50px;
}
.fashion_img_grid{
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
}
.fashion_img_grid img {
    width: 55px;
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

.btn_wrapper
{
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
    width: 100px;
}
.nav-dots span::-webkit-scrollbar{
    display: none;
}


.pt-6 li {
    padding: 10px;
}

.p-2 {
    text-decoration: none;
}

.pageactive .p-2 {
    border-bottom: solid 3px #25A26B;
}

.productnotfound {
    display: block;
    padding: 10%;
    text-align: center;
}

.productfound {
    display: none;
}

.centeralign.addmargin .body_text{
    padding: 20px 0;
}

.quickAdd{
    border: 1px solid #000;
    padding: 8px 30px;
    background: #FFFFFF;
    gap: 15px;
    flex-direction: row;
    align-items: flex-start;
    transition: 0.3s;
}
.quickButton .quickAdd:hover{
    background: #000;
}
.quickButton .quickAdd:hover span{
    color: #fff;
}
.quickAdd_deactive{
    visibility: hidden;
}
.quickAdd_active{
    visibility: visible;
}
.quickAdd span{
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    
}


.quickButton{
    justify-content: space-between; 
    display: flex;
    opacity: 0;
    visibility: hidden;
    align-items: center;
    transition: 0.3s;
}
.quickActive{
    opacity: 1;
    visibility: visible;
}

.quickButton ul{
    text-align: left;
    /* width: 50%; */
}
.quickButton .product_cta_wrapper{
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
  border: 1px solid #E0E0E0;
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
.red{
    background: red;
}
.black{
    background: black;
}
.AZURE{
    background: #007fff;
}
.product-form__color-swatch{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 4px;
}
.item_left{
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
.out_of_stock img{
    opacity: 0.2;
}   
.item_left_active{
    visibility: visible !important;
}
.product_img_wrapper{
    position: relative;
}
.out_of_stock_text{
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: 700;
    font-size: 24px;
    line-height: 12px;
    align-items: center;
    letter-spacing: 0.02em;
    color: red;
    transform: translate(-50%,-50%);
    visibility: hidden;
}
.out_of_stock_text_active{
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
.filter_responsive{
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 4;
    display: none;
}
.filter_responsive .filter_cta_wrapper{
    display: flex;
    align-items: center;
    gap: 2px;
}
.filter_cta{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000000;
    background: #E9E7E3;
    border: 1px solid #000000;
    width: 100%;
    padding: 14px;
}
.filters_responsive{
    display: none;
}
/* RSPONSIVE FILTER BTNS CSS END*/
.activecolor{
    border: 1px solid #878787 !important;   
}


/* RESPONSIVE BREAKPOINTS START */
@media (max-width: 1024px) {
    .out_of_stock_text{
        font-size: 14px;
    }
    .grid_inner {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (max-width: 991px) {
    .progress{
        width: 105px;
    }
}
@media (max-width: 767px) {
    .filter_row{
        margin: 18px 0 0px;
        z-index: 5;
    }
    .product_cta_wrapper{
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
    .product_grid{
        padding-bottom:80px;
    }
    .filter {
        width: 100%;
    }
    .dropdown {
        display: flex;
        align-items: center;
        width: 100%;
        padding:13px 0 13px 9px;
        border-bottom: 1px solid #000;
        background: #E9E7E3;
    }
    .overselect{
        top: 50%;
        /* line-height: 0; */
        transform: translateY(-50%);
    }
    .filters_responsive{
        display: block;
        z-index: 4;
    }
    .filters,
    .sort_by
    {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #E9E7E3;
        padding: 11px;
        height: 100%;
        min-height: 100vh;
        /* display: none; */
        z-index: 9;
        transition: 0.3s;

    }
    /* .sort_by{
        display: none;
    } */
    .filters{
        transform: translateX(-110%);
    }
    .sort_by{
        transform: translateX(110%);
    }
    .filters.show,
    .sort_by.show
    {
        transform: translateX(0);
    }
    .filters_inner {
        flex-direction: column;
        gap: 0;
        margin-top: 45px;
    }
    .filter_responsive{
        display: inline-block;
        margin-top:11px;
    }
    .row_inner{
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

    .filters .filter_cta_wrapper .filter-modifier{
        border: none;
    }

    .filters .multiselect ul{
        padding: 10px 0 40px;
    }
    .filters .filter_cta_wrapper .clear-modifier{
        background-color: #000000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }
    .filters .filter_cta_wrapper .clear-modifier svg{
        width: 10px;
        height: 10px;
        margin-top: -2px;
    }
    .c-form-input{
        font-size: 18px;
        line-height: 21px;
        padding-right: 0;
    }
    .multiselect .tmb_header_dopdown {
        position: static !important;
        height: 0;
        overflow: hidden;
        background: #E9E7E3;
        box-shadow: none;
        display: inline-block;
    }
    .tmb_header_dopdown .btn_wrapper{
        display: none;
    }
    .optionLabel{
        font-size: 18px;
        line-height: 21px;
        padding-left: 35px;
    }
    .filter .optionLabel {
        padding-left: 30px;
    }
    .filter .multiselect.active .tmb_header_dopdown{
        height: 250px;
        overflow: visible;
    }
    .filters_inner .clearFilter{
        display: none;
    }
    .multiselect{
        height: 0;
        overflow: hidden;
        transition: 0.3s;
    }
    .multiselect.active{
        height: 250px;
        overflow: visible;
    }
    .range,
    .sortBtn
    {
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
    .sort_by .multiselect .tmb_header_dopdown
    {
        top: 0px;
        opacity: 1;
        visibility: visible;
        height: 250px;
        overflow: visible;
    }
    .sort_by .multiselect ul{
        overflow: unset;
        height: auto;
        max-height: unset;
    }
    .sort_by .tmb_header_dopdown{
        padding: 0;
    }
    .sort_by .multiselect li{
        margin: 0 !important;
        padding: 14px 0 14px 9px;
        border-bottom: 1px solid #000;
    }
    .nav-dots{
        margin-top: 9px;
    }
    .ethics_in_fashion{
        padding: 30px 0 60px;
    }
    .fashion_img_grid{
        gap: 20px;
    }
    .fashion_img_grid img{
        width: 38px;
    }
    .ethics_content_inner .body_text,
     .ethics_content_inner .sec_heading{
        text-align: start;
        padding: 0 12px;
    }
    

}

</style>