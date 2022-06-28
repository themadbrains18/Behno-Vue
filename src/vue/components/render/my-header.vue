<template>
  <header class="tmbHeader">
    <!-- ======= Desktop Navigation ======= -->
    <div class="navbar-desktop-wrap">
      <nav class="navbar navbar-desktop">
        <!-- Toggle Button -->
        <div class="header_toggle_wrap">
          <button type="button" class="header_toggle" @click="togleHeader">
            <span class="toggle_bar toggle_bar-top" />
            <span class="toggle_bar toggle_bar-center" />
            <span class="toggle_bar toggle_bar-bottom" />
          </button>
        </div>
        <!-- left Navlist -->
        <ul class="navlist navlist-left">
          <li class="navitem first-navitem" >
            <a :href="HeaderNavData[0].url" class="navlink navlink_drpdown" v-html="HeaderNavData[0].title"></a>
            <!--  HANDBAGS & WALLETS Start -->
            <div class="navlink__hover"  @mouseenter="stopScroll" @mouseleave="workScroll">
              <ul class="navink__hover_list">
                <li class="navlink__hover_item" v-for="subLink in  HeaderNavData[0].links" :key="subLink.title">
                  <ul class="subnavlink__list hover-img">
                    <template v-for="(nestedSubLink,nestedSubLinkIndex) in  subLink.links" :key="nestedSubLink.title">
                          <template v-if="nestedSubLink.url.includes('.png') || nestedSubLink.url.includes('.jpg') || nestedSubLink.url.includes('.svg')">
                              <!-- continue Content -->
                          </template>    
                          <template v-else>  
                            <li class="subnavlink__item" >
                                  <template v-if="(typeof(subLink.links[nestedSubLinkIndex + 1]) != 'undefined') && (subLink.links[nestedSubLinkIndex + 1].url.includes('.png') || subLink.links[nestedSubLinkIndex + 1].url.includes('.jpg') || subLink.links[nestedSubLinkIndex + 1].url.includes('.svg'))">
                                      <a :href="nestedSubLink.url" class="subnavlink" @mouseover="subnavlinkHover" v-html="nestedSubLink.title">
                                      </a>
                                      <a :href="nestedSubLink.url" class="subnavlink subnavlink-img">
                                        <img :src="subLink.links[nestedSubLinkIndex + 1].url">
                                      </a>
                                  </template>    
                                  <template v-else-if="nestedSubLink.url == '#'">
                                    <span class="subnavlink subnavlink-heading" v-html="nestedSubLink.title">
                                    </span>
                                  </template>
                                  <template v-else>
                                    <a :href="nestedSubLink.url" class="subnavlink" v-html="nestedSubLink.title"></a>
                                  </template>    
                              </li>
                        </template>
                    </template>
                  </ul>
                </li>
              </ul>
            </div>
            <!--  HANDBAGS & WALLETS End -->
          </li>
          <li class="navitem" >
            <a :href="HeaderNavData[1].title" class="navlink navlink_drpdown" v-html="HeaderNavData[1].title"></a>
            <!--NANAMOTA  Start -->
            <div class="navlink__hover"  @mouseenter="stopScroll" @mouseleave="workScroll">
              <ul class="navink__hover_list">
                <li class="navlink__hover_item" v-for="(subLink,subLinkIndex) in  HeaderNavData[1].links" :key="subLink.title">
                  <ul class="subnavlink__list hover-img">
                        <template v-if="HeaderNavData[1].links.length - 1 == subLinkIndex">
                            <li class="navlink__hover_item">
                              <ul class="subnavlink__list hover-img">
                                <li class="subnavlink__item">
                                  <div class="nanamoto-basics-crd">
                                    <a :href="subLink.links[0].url"  class="d-block">
                                      <img src="https://cdn.shopify.com/s/files/1/1000/3130/files/nanamoto-logo.svg?v=1621615505" alt="" >
                                    </a>
                                    <div  class="nanamoto-basics-crd-txt">
                                      <template v-for="(nestedSubLink) in  subLink.links" :key="nestedSubLink.title">
                                        <a :href="nestedSubLink.url" v-html="nestedSubLink.title"></a>
                                      </template>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                        </template>
                        <template v-else>
                            <template v-for="(nestedSubLink,nestedSubLinkIndex) in  subLink.links" :key="nestedSubLink.title">
                                  <template v-if="nestedSubLink.url.includes('.png') || nestedSubLink.url.includes('.jpg') || nestedSubLink.url.includes('.svg')">
                                      <!-- continue Content -->
                                  </template>    
                                  <template v-else>  
                                    <li class="subnavlink__item" >
                                          <template v-if="(typeof(subLink.links[nestedSubLinkIndex + 1]) != 'undefined') && (subLink.links[nestedSubLinkIndex + 1].url.includes('.png') || subLink.links[nestedSubLinkIndex + 1].url.includes('.jpg') || subLink.links[nestedSubLinkIndex + 1].url.includes('.svg'))">
                                              <a :href="nestedSubLink.url" class="subnavlink" @mouseover="subnavlinkHover" v-html="nestedSubLink.title"></a>
                                              <a :href="nestedSubLink.url" class="subnavlink subnavlink-img"><img :src="subLink.links[nestedSubLinkIndex + 1].url"></a>
                                          </template>    
                                          <template v-else-if="nestedSubLink.url == '#'">
                                            <span class="subnavlink subnavlink-heading" v-html="nestedSubLink.title">
                                            </span>
                                          </template>
                                          <template v-else>
                                            <a :href="nestedSubLink.url" class="subnavlink" v-html="nestedSubLink.title"></a>
                                          </template>    
                                      </li>
                                  </template>
                          </template>
                      </template>
                  </ul>
                </li>
              </ul>
            </div>
            <!--NANAMOTA End  -->
          </li>

          <li class="navitem" v-if="HeaderNavData[2]">
            <a :href="HeaderNavData[2].title" class="navlink navlink_drpdown" v-html="HeaderNavData[2].title"></a>
          </li>
        </ul>

        <!-- Header logo -->
        <div class="logo_wrap line-h-0">
          <a class="logo d-inline-block" :href="HeaderNavData[this.logoImageIndex].url">
            <img :src="HeaderNavData[this.logoImageIndex].title" alt=""/>
          </a>
        </div>

        <!-- Rigth Navlist -->
        <ul class="navlist navlist-right">
          <li class="navitem" >
            <a :href="HeaderNavData[this.logoImageIndex + 1].url" class="navlink navlink_drpdown"> {{ HeaderNavData[this.logoImageIndex + 1].title }} </a>
            <!-- CLIENT SERVICES Start -->
            <div class="navlink__hover" @mouseenter="stopScroll" @mouseleave="workScroll">
              <ul class="navink__hover_list">
                <li class="navlink__hover_item" v-for="subLink in  HeaderNavData[this.logoImageIndex + 1].links" :key="subLink.title">
                  <ul class="subnavlink__list">
                    <li class="subnavlink__item" v-for="(nestedSubLink) in  subLink.links" :key="nestedSubLink.title">
                      <template v-if="nestedSubLink.url == '#'">
                        <span class="subnavlink" v-html="nestedSubLink.title">
                        </span>
                      </template>
                      <template v-else>
                        <a :href="nestedSubLink.url" class="subnavlink" v-html="nestedSubLink.title"></a>
                      </template>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- CLIENT SERVICES End -->
          </li>
          <li class="navitem" >
            <a :href="HeaderNavData[this.logoImageIndex + 2].url" class="navlink navlink_drpdown" v-html="HeaderNavData[this.logoImageIndex + 2].title">  </a>
            <!-- THE SENSE OF BEHNO Start -->
            <div class="navlink__hover" @mouseenter="stopScroll" @mouseleave="workScroll">
              <ul class="navink__hover_list">
                <!-- ===   ON hover Class Show First row ===  -->
                <li class="navlink__hover_item" v-for="subLink in  HeaderNavData[this.logoImageIndex + 2].links" :key="subLink.title">
                  <ul class="subnavlink__list">
                    <li class="subnavlink__item" v-for="(nestedSubLink) in  subLink.links" :key="nestedSubLink.title">
                      <template v-if="nestedSubLink.url == '#'">
                        <span class="subnavlink" v-html="nestedSubLink.title">
                        </span>
                      </template>
                      <template v-if="nestedSubLink.title.includes('.png') || nestedSubLink.title.includes('.jpg') || nestedSubLink.title.includes('.svg')">
                        <a :href="nestedSubLink.url" class="nav_sensebehno__img subnavlink">
                          <img :src="nestedSubLink.title" alt="">
                        </a>
                      </template>
                      <template v-else>
                        <a :href="nestedSubLink.url" class="subnavlink" v-html="nestedSubLink.title"></a>
                      </template>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- THE SENSE OF BEHNO End -->
          </li>
          <!-- Header Button Group -->
          <li class="desktop_btn_grp">
            <div class="nav_btns">
              <button class="search_btn" id="searcBtn" @click="toggleSearchBar">
                <v-lazy-image :src="(shopifyData.search)" alt="Search Icon" />
              </button>
              <a class="shopping_btn" @click="show = !show">
                <v-lazy-image :src="(shopifyData.bag)" alt="Shopping Icon"/>
                <span class="shopping_btn_count">0</span>
              </a>
            </div>
          </li>
        </ul>
        <!-- Responsive Mobile Btn Grp -->
        <div class="mobile_btn_grp">
          <div class="nav_btns">
            <button class="search_btn">
              <v-lazy-image
                :src="(shopifyData.search)"
                alt="Search Icon"
              />
            </button>
            <button
              class="shopping_btn"
              @click="show = !show"
            >
              <v-lazy-image
                :src="(shopifyData.bag)"
                alt="Shopping Icon"
              />
              <span class="shopping_btn_count">0</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
    <!-- ======= Desktop Navigation End ======= -->

    <!-- ======= Mobile Navigation Start ======= -->
    <nav class="m_navbar_list navbar-Mobile">
      <ul class="m_navlist d-block w-100">
        <li class="m_navitem" v-for="(link) in MobileNavData" :key="link.title" >

          <template v-if="link.links.length > 0">
            <button class="navlink nav_drpbtn w-100 t-left" @click="toggleDropDown" v-html="link.title">
            </button>
            <div class="nav_drpbtn_content">
              <ul class="m_drpdown_list">
                <!--  sub nav link  -->
                <li class="m_drpdown_item" v-for="subLink in link.links" :key="subLink.title">
                  <template v-if="subLink.links.length > 0">
                    <button class="subnavlink nav_drpbtn w-100 t-left" @click="toggleDropDown" v-html="subLink.title">
                    </button>
                    <div class="nav_drpbtn_content">
                      <ul class="m_subnavlink_list">
                        <li class="m_subnavlink_item" v-for="(nestedSubLink) in  subLink.links" :key="nestedSubLink.title">
                          <a :href="nestedSubLink.url" class="navlink">{{ nestedSubLink.title }}</a>
                        </li>
                      </ul>
                    </div>
                  </template>
                  <template v-else>
                    <a :href="subLink.url" class="subnavlink" v-html="subLink.title"></a>
                  </template>
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
            <a :href="link.url" class="navlink w-100 t-left" v-html="link.title"></a>
          </template>
        </li>
      </ul>
    </nav>
    <!-- ======= Mobile Navigation End ======= -->
       <!-- ======= Search Bar Start ======= -->
    <div class="main_search_bar" id="mainSearchBar">
      <form action="/search" class="search_bar_items" id="searchBar">
        <button type="submit" class="search_icon">
          <img :src="shopifyData.search" alt="Search Icon" />
        </button>
        <input type="text" name="type" hidden value="product"/>
        <input type="text" name="q" class="search_item" placeholder="Search..." />
        <button type="button" @click="toggleSearchBar()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </form>
    </div>
    <!-- ======= Search Bar Start ======= -->
  </header>

  <!-- ====== Shoping Mini Cart ====== -->
  <!-- :class= "{active: !show }" -->
  <!-- :class="[{ active: !show }, mini_cart_container]" -->
  <section class="mini_cart">
    <div :class="[{ active: !show }, 'mini_cart_container']" >
      <div class="mini_cart-header">
        <h3>YOUR BAG</h3>
        <button
          id="remove-btn"
          @click="show = !show"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M11.8861 11.8865L35.6587 35.6591"
              stroke="#656565"
              stroke-width="1.5"
            />
            <path
              d="M11.8861 35.6587L35.6587 11.8861"
              stroke="#656565"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
      <div>
        <span class="brk_line" />
         
        <!-- if card is not empty  -->
        <div id="mini_cart_content" />
         
        <!-- if cart is empty  -->
        <div class="if_cart_is_empty">
          <p>Your bag is empty.</p>
        </div>
      </div>
          
      <div class="mini_cart-payment">
        <span class="brk_line" />
        <div class="sec_right">
          <div class="sec_right_inner">
            <h4 class="subtotal_heading">
              SUBTOTAL
            </h4>
            <p class="subtotal_price body_text">
              $1,080
            </p>      
            <p class="body_text">
              Excluding tax & shipping
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
          </div>
        </div>
        <div class="mini_shopping_cart">
          <a
            href="/cart"
            class="shp_cart"
          >View shopping cart</a>
        </div> 
      </div>
    </div>
    <span :class="[{ active: !show }, 'bg_layer_removecart']" @click="show = !show" >
    </span>
    <div
      class="mini-add-card"
      :class="{ active: !show }"
    >   
      <a
        href="/checkout"
        class="add-card-chk"
      >CHECKOUT</a>
    </div>
  </section>
</template>


<script>
import { ShopifyAPI } from "../../Shopify/Shopify"

import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage,
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
  data() {
    window.addEventListener("scroll", this.scollHeader);
    return {
      logoImageIndex :0,
      lastScrollY: 100,
      show: true,
      HeaderNavData: this.shopifyData.HeaderNavData,
      MobileNavData: this.shopifyData.MobileNavData
    };
  },
  created: function () {
    this.header = document.getElementsByClassName("tmbHeader");   
  },
  mounted (){

      this.refreshMiniCart(),
      this.shopifyData.HeaderNavData.forEach((element,index) => {
        if(element.title.includes('.png') || element.title.includes('.jpg') || element.title.includes('.svg')){
          this.logoImageIndex = index;
        }
      });
  },
 
  methods: {
    toggleSearchBar(){
      document.querySelector("#mainSearchBar").classList.toggle("show");
      document.querySelector("#mainSearchBar .search_item").focus();
    },
    refreshMiniCart(){
        var refreshCart = new ShopifyAPI()
        refreshCart.refreshMiniCart();
    },
    togleHeader() {
      if(document.body.getAttribute("style")){
        document.body.removeAttribute("style");
      }else{
        document.body.setAttribute("style","overflow:hidden;")
      }
      this.header[0].classList.toggle("active");
    },

    toggleDropDown(e) {
      if (e.currentTarget.matches(".subnavlink")) {
        let parentElement = e.currentTarget.closest(".nav_drpbtn_content");
        let currentElement = e.currentTarget.nextElementSibling;
        if (e.currentTarget.matches(".active")) {
          parentElement.setAttribute(
            "style",
            `height: ${
              parentElement.offsetHeight - currentElement.scrollHeight
            }px;`
          );
        } else {
          parentElement.setAttribute(
            "style",
            `height: ${
              parentElement.offsetHeight + currentElement.scrollHeight
            }px;`
          );
        }
      }
      if (e.currentTarget.matches(".active")) {
        e.currentTarget.nextElementSibling.removeAttribute("style");
      } else {
        e.currentTarget.nextElementSibling.setAttribute(
          "style",
          `height:${e.currentTarget.nextElementSibling.scrollHeight}px;`
        );
      }
      e.currentTarget.classList.toggle("active");
    },
    
    scollHeader(e) {
      if (window.scrollY >= this.lastScrollY) {
        this.header[0].classList.add("stickyup");
      } else {
        this.header[0].classList.remove("stickyup");
      }

      if(window.scrollY >= 100){
        this.lastScrollY = window.scrollY;
      }
    },

    subnavlinkHover(e) {
      let alreadyActive = e.currentTarget
        .closest(".subnavlink__list")
        .querySelector(".hover_active");
      if (alreadyActive) {
        alreadyActive.classList.remove("hover_active");
      }
      e.currentTarget.classList.add("hover_active");
    },

    stopScroll(e){
        const bodyWidth = document.body.offsetWidth;  
        document.body.setAttribute("style", `overflow:hidden;`);
        if(e.currentTarget.closest(".navlist-right")){
          e.currentTarget.setAttribute("style", `max-width: ${e.currentTarget.offsetWidth + document.body.offsetWidth - bodyWidth}px;`);  
        }
        this.header[0].setAttribute("style", `width:calc(100% - ${document.body.offsetWidth - bodyWidth}px);`);
        document.body.style.paddingRight = `${document.body.offsetWidth - bodyWidth}px`;
    },
    workScroll(e){
       if(e.currentTarget.closest(".navlist-right")){
        e.currentTarget.removeAttribute("style");  
      }
      this.header[0].removeAttribute("style");
      document.body.removeAttribute("style");
    },

    // toggle cart menu
    // addActiveBody:function(e){
    //     console.log("qwer");
    // }
  } 
};
</script>

<style >
button.behno_increment_dec {
    position: relative;
    display: flex;
}
button.behno_increment_dec:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.tmbMain{
  margin-top: 80px;
}
@media only screen and (max-width:991px){
  .tmbMain{
    margin-top: 63px;
  }   
}

.mini_cart_container .card {
    padding-bottom: 30px;
    position: relative;
}
.mini_cart_container .card .subtitle_b{
  margin-top: 5px;
}
.mini_cart_container .card:not(:last-child):after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc( 100% + 36px);
    background: #000;
    height: 1px;
    margin-left: -18px;
}
.mini_cart_container .card:not(:first-child){
  margin-top: 23px;
}





/*------- Mini Cart Css -------*/

.product_img_wrapper {
    position: relative;
    margin-bottom: 11px;
    line-height: 1;
}

.mini_cart{
  position: relative;
  overflow: hidden;
}
.mini_cart_container
{
    max-width:377px;
    background-color:white;
    width:100%;
    min-height:100vh;
    height:100%;
    overflow-y:scroll;
    position:fixed;
    top:0;
    right:0;
    z-index:6;
    border:1px solid black;
    transition: 0.3s;
    transform: translateX(110%);
    padding:30px 42px 0;
    overscroll-behavior: none;
}
.mini-add-card{
  max-width:377px;
  width: 100%;
  position:fixed;
  right: 0;  
  top: auto;
  bottom: 0;
  z-index:5;
  transition: 0.3s;
  transform: translateX(110%);
  text-align:center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px; 
}

.mini_cart_container::-webkit-scrollbar {
    display: none;
}

.mini_cart .remove{
    position: absolute;
    text-decoration: underline;
    top: 13px;
    right: 11px;
    z-index: 1;
}

.mini_cart .body_text{
    font-family:inherit;
}

.mini_cart-header{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-bottom:26px;
}

.mini_cart-header #remove-btn svg{
    display:block;
}

.mini_cart-header h3{
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
}

.mini_cart-products{
    display: flex;
    align-items: center;
    margin: 26px 0 0;
}

.mini_cart-products span{
    margin:0 36px;
}

.mini_cart-products span input{
  border: none;
  width: 25px;
  text-align: center;
}
.mini_cart-products span input:focus{
  outline: none;
}

.mini_cart .subtotal_price.body_text {
    font-weight:700;
    font-size:15px;
    line-height:18.31px;
}
.mini_cart-payment{
    display:flex;
    gap:50px;
    flex-direction:column;
    justify-content: space-between;
    
}

.add-card-chk{
    color:white;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    padding: 21px;
    background: #000;
    width: 100%;
    display: block;
    transition: 0.3s;
    border: 1px solid transparent;
}
@media(min-width:991px) {
    .add-card-chk:hover{
     border: 1px solid #000;
     color:#000;
     background: #fff;
  }
}

.mini_shopping_cart {
    margin:50px 0 80px;
}

.shp_cart{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-decoration-line: underline;
}

.brk_line{
    min-width:328px;
    height:1px;
    background-color:black;
    display:block;
    margin:0 -22px 40px;
}

.mini_cart_container.active ,
.mini-add-card.active
{
    transform: translateX(0);
}
.logo_wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
}
.logo_wrapper > img {
    width: 80px;
}
.subtotal_heading {
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #000000;
}
.mini_cart-payment .body_text.text-mdifier {
    margin-bottom: 20px;
}
.subtotal_price + .body_text {
    margin-bottom: 15px;
}
.body_text.remove {
    font-size: 12px;
    line-height: 14px;
}

.bg_layer_removecart.active{
  visibility: visible;
  transition: 0.3s;
}
.bg_layer_removecart{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000;
  opacity: 0.3;
  z-index: 5;
  visibility: hidden;
}


</style>


<style scoped>
.tmbHeader .main_search_bar.show{
  transform: translateY(55px);
}
.tmbHeader .main_search_bar{
    position: absolute;
    /* border-bottom: solid 1px #eee; */
    box-shadow: 0 0 20px #eee;
    transform: translateY(-100%);
    transition: transform .3s linear;
    max-width: 480px;
    width: 100%;
    background: #fff;
    right: 0;
    top: 0;
}
.search_bar_items {
  display: flex;
  align-items: center;
  padding: 10px;
}
.search_item{
  border: none;
  margin: 0 10px;
  width: 100%;
  outline: none;
}

.search_icon img{
  width: 20px;
}

.search_item + button svg{
  width: 20px;
  height: 20px;
}
@media only screen and (max-width: 575px){
  .tmbHeader .main_search_bar{
    max-width: 320px;
  }
}
/*   search bar */

.header_toggle_wrap,
.mobile_btn_grp,
.navbar-Mobile {
  display: none;
}
.tmbHeader {
  padding: 14px 50px  10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 5;
  transition: transform 0.5s ;
}

.tmbHeader.stickyup {
  transform: translateY(-100%);
}

.navbar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}
.navlist {
  display: grid;
  gap: 45px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
}


.navlist-right {
  justify-content: flex-end;
}

.navitem {
  display: flex;
}

.navlink,
.subnavlink {
  font-size: 12px;
  letter-spacing: 0.05em;
  position: relative;
  font-weight: 400;
  display: inline-block;
  text-transform: uppercase;
}

.nav_btns {
  display: grid;
  gap: 25px;
  grid-auto-flow: column;
  align-items: center;
  width: fit-content;
}

.logo{
  line-height: 0;
}
.nav_btns > a ,
.nav_btns > button 
{
  display: grid;
  place-items: center;
}

.shopping_btn {
  position: relative;
  cursor: pointer;
}
.shopping_btn_count {
  position: absolute;
  bottom: 1px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
}

.header_toggle {
  position: relative;
  height: 10px;
  width: 15px;
}

.toggle_bar {
  height: 1px;
  width: 100%;
  background: #000000;
  display: block;
  
  position: absolute;
  left: 0;
  transform-origin: center;
}

.toggle_bar-center {
  top: 50%;
  transform: translateY(-50%);
}

.toggle_bar-top {
  top: 0;
  transition: transform 0.3s ,top 0.3s 0.3s;
}
.toggle_bar-bottom {
  bottom: 0;
  transition: transform 0.3s ,bottom 0.3s 0.3s;
}
.active .toggle_bar-top{
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  transition: top 0.3s,transform 0.3s 0.3s;
}
.active .toggle_bar-bottom {
  bottom: 50%;
  transition: bottom 0.3s,transform 0.3s 0.3s;
  transform: translateY(50%) rotate(-45deg);
}

.active .toggle_bar-center {
  opacity: 0;
}



.subnavlink__item {
  margin-bottom: 10px;
  display: flex;
}

.nanamoto-basics-crd {
  margin-top: 15px;
  padding: 50px 30px;
  background: #758f8f;
  width: 100%;
}
.nanamoto-basics-crd img {
  display: block;
}

.nanamoto-basics-crd-txt {
  display: inline-block;
  margin-top: 25px;
}
.nanamoto-basics-crd-txt a:first-child {
  margin-bottom: 15px;
}
.nanamoto-basics-crd-txt a{
  font-size: 13px;
  color: #fff;
  font-weight: 400;
  display: block;
}

.navlink__hover {
  position: fixed;
  top: 80px;
  height: 100%;
  min-height: 100vh;
  background: #eae8e4;
  max-width: 515px;
  width: 100%;
  padding: 40px 50px;
  z-index: 5;
  overflow-y: scroll;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s linear,max-width 0s;
}

.navlink__hover::-webkit-scrollbar {
  width: 3px;
}
.navlink__hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.navlist-left .navlink__hover {
  left: 0;
}
.navlist-right .navlink__hover {
  right: 0;
}

.navlink__hover_item {
  position: relative;
  margin-bottom: 60px;
}

.subnavlink-heading {
  font-weight: 700;
}

.first-navitem .subnavlink__list {
  width: calc(100% - 170px);
}
.hover-img .subnavlink-img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  display: block;
}

.navlist-left .subnavlink-img {
  height: 130px;
  width: 130px;
  object-fit: cover;
}
.nav_sensebehno__img {
  transform: translateX(50px);
}

@media (hover: hover) {
  .navlink_drpdown:hover {
    padding-bottom: 50px;
    margin-bottom: -50px;
  }
  
  .subnavlink:hover {
    color: #767676;
  }
  .subnavlink-heading:hover{
    color: #000;
    cursor: default;
  }
  .navlink_drpdown:hover + .navlink__hover,
  .navlink__hover:hover {
    opacity: 1;
    visibility: visible;
  }
  .subnavlink:hover + .subnavlink-img,
  .subnavlink.hover_active + .subnavlink-img {
    z-index: 2;
  }
}



@media only screen and (max-width: 1440px) {
  .tmbHeader {
    padding: 10px 20px;
  }
  .navlist {
    gap: 25px;
  }
}

@media only screen and (max-width: 1024px) {
  .logo img{
      max-width: 70px;
  }
}

@media only screen and (max-width: 991px) {
  .header_toggle_wrap,
  .mobile_btn_grp {
    display: flex;
  }
  .desktop_btn_grp,
  .navlist-left,
  .navlist-right {
    display: none;
  }

  .nav_btns {
    margin: 0 0 0 auto;
  }

  .m_navbar_list {
    position: fixed;
    top: 63px;
    left: -100%;
    height: 100%;
    min-height: 100vh;
    width: min(100%, 300px);
    background: #f3f3f3;
    padding: 25px 20px 70px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transition: 0.5s;
    overflow: scroll;
  }
  .active .m_navbar_list {
    left: 0;
  }
  .m_navitem {
    margin-top: 18px;
  }
  .nav_drpbtn::after,
  .nav_drpbtn::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    height: 1px;
    transition: 0.2s;
    transform: translateY(-50%);
    width: 8px;
    background-color: #000;
    transform-origin: center;
  }
  .nav_drpbtn::before {
    transform: translateY(-50%) rotate(90deg);
  }
  .nav_drpbtn.active::before {
    transform: translateY(-50%);
  }
  .m_drpdown_list {
    padding: 15px 0 15px 10px;
  }

  .m_drpdown_item {
    font-size: 0;
    margin-top: 10px;
  }
  .m_drpdown_item:first-child,
  .m_subnavlink_item:first-child,
  .m_navitem:first-child {
    margin: 0;
  }
  .subnavlink {
    font-weight: 700;
  }
  .nav_drpbtn_content {
    height: 0;
    overflow: hidden;
    transition: 0.2s;
  }
  .m_subnavlink_list {
    padding: 20px 0 15px 10px;
  }
  .m_subnavlink_item {
    margin-top: 10px;
  }
}
@media only screen and (max-width: 767px) {

  .subtitle_b {
    margin-bottom: 0 !important;
  }
}


  


</style>

