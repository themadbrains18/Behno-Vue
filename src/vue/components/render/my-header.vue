<template>
  <header class="tmbHeader">
    <!-- ======= Desktop Navigation ======= -->
    <div class="navbar-desktop-wrap">
      <nav class="navbar navbar-desktop">
        <!-- Toggle Button -->
        <div class="header_toggle_wrap">
          <button
            type="button"
            class="header_toggle"
            @click="togleHeader"
          >
            <span class="toggle_bar toggle_bar-top" />
            <span class="toggle_bar toggle_bar-center" />
            <span class="toggle_bar toggle_bar-bottom" />
          </button>
        </div>
        <!-- left Navlist -->
        <ul class="navlist navlist-left">
          <li class="navitem first-navitem">
            <a
              href="#"
              class="navlink navlink_drpdown"
            > HANDBAGS & WALLETS </a>
            <!--  HANDBAGS & WALLETS Start -->
            <div
              class="navlink__hover"
              @mouseenter="stopScroll"
              @mouseleave="workScroll"
            >
              <ul class="navink__hover_list">
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list hover-img">
                    <li class="subnavlink__item">
                      <a
                        href="https://behno.com/collections/all-product-sbf2019"
                        class="subnavlink"
                      >
                        SHOP ALL CATEGORIES
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/crossbody-bags"
                        class="subnavlink"
                      >
                        CROSSBODY BAGS
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/shoulder-bags"
                        class="subnavlink"
                      >
                        SHOULDER BAGS
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="https://behno.com/collections/mini-bags"
                        class="subnavlink"
                      >
                        MINI BAGS
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/top-handles"
                        class="subnavlink"
                      >
                        TOP HANDLE BAGS
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/totes"
                        class="subnavlink"
                      >
                        TOTE BAGS
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="https://behno.com/collections/clutches-and-wallets"
                        class="subnavlink"
                      >
                        CLUTCHES &amp; WALLETS
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/new-arrivals"
                        class="subnavlink"
                      >
                        NEW ARRIVALS
                      </a>
                      <a
                        href="/collections/new-arrivals"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/new_arrivals_SS22.jpg?v=1647023074"
                        >
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list hover-img">
                    <li class="subnavlink__item">
                      <span class="subnavlink subnavlink-heading">
                        NEWEST ICONS
                      </span>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="https://behno.com/collections/simone-series"
                        class="subnavlink"
                        @mouseover="subnavlinkHover"
                      >
                        SIMONE FLAP CROSSBODIES
                      </a>
                      <a
                        href="https://behno.com/collections/simone-series"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/Simone.jpg?v=1647023074"
                        >
                      </a>
                    </li>

                    <li class="subnavlink__item">
                      <a
                        href="https://behno.com/collections/lex-accordion"
                        class="subnavlink"
                        @mouseover="subnavlinkHover"
                      >
                        LEX ACCORDIONS
                      </a>
                      <a
                        href="https://behno.com/collections/lex-accordion"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/lex.jpg?v=1647023073"
                        >
                      </a>
                    </li>

                    <li class="subnavlink__item">
                      <a
                        href="https://behno.com/collections/tilda-saddle-bag-series"
                        class="subnavlink"
                        @mouseover="subnavlinkHover"
                      >
                        TILDA SADDLE BAGS
                      </a>
                      <a
                        href="https://behno.com/collections/tilda-saddle-bag-series"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/tilda.jpg?v=1647023074"
                        >
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list hover-img">
                    <li class="subnavlink__item">
                      <span class="subnavlink subnavlink-heading">
                        OUR BESTSELLERS
                      </span>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/ina-bag-series"
                        class="subnavlink"
                        @mouseover="subnavlinkHover"
                      >
                        INA &amp; TINA BUCKET BAGS
                      </a>
                      <a
                        href="/collections/ina-bag-series"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/Ina_Mini_Crossbody_Pebble_Red_Front_HiRes_copy_2.jpg?v=1644008601"
                        >
                      </a>
                    </li>

                    <li class="subnavlink__item">
                      <a
                        href="/collections/ana-ruched-series"
                        class="subnavlink"
                        @mouseover="subnavlinkHover"
                      >
                        ANA RUCHED BAGS
                      </a>
                      <a
                        href="/collections/ana-ruched-series"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/NORDSTROM_FW21_WHITE_BACKGROUND0205_copy_2.jpg?v=1644008600"
                        >
                      </a>
                    </li>

                    <li class="subnavlink__item">
                      <a
                        href="/collections/elizabeth-baguette-series"
                        class="subnavlink"
                        @mouseover="subnavlinkHover"
                      >
                        ELIZABETH BAGUETTES
                      </a>
                      <a
                        href="/collections/elizabeth-baguette-series"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/Elizabeth_Baguette_Black_Front_41293_copy_2.jpg?v=1644008601"
                        >
                      </a>
                    </li>

                    <li class="subnavlink__item">
                      <a
                        href="/collections/mary-bag-series"
                        class="subnavlink"
                        @mouseover="subnavlinkHover"
                      >
                        MARY BOX BAGS
                      </a>
                      <a
                        href="/collections/mary-bag-series"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/MARY_MINI_NAPPA_DEEP_RED_FRONT_41405-Edit_copy_2.jpg?v=1644008601"
                        >
                      </a>
                    </li>

                    <li class="subnavlink__item">
                      <a
                        href="/collections/frida"
                        class="subnavlink"
                        @mouseover="subnavlinkHover"
                      >
                        FRIDA FLAT TOTES
                      </a>
                      <a
                        href="/collections/frida"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/FRIDA_MED_GRASS_GREEN_copy_2.jpg?v=1644008601"
                        >
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list hover-img">
                    <li class="subnavlink__item">
                      <span class="subnavlink subnavlink-heading">
                        SPECIAL PROJECTS
                      </span>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/ndss"
                        class="subnavlink"
                      >
                        NATIONAL DOWN SYNDROME SOCIETY x BEHNO
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!--  HANDBAGS & WALLETS End -->
          </li>
          <li class="navitem">
            <a
              href="#"
              class="navlink navlink_drpdown"
            > NANAMOTA BASICS </a>
            <!--NANAMOTA  Start -->
            <div
              class="navlink__hover"
              @mouseenter="stopScroll"
              @mouseleave="workScroll"
            >
              <ul class="navink__hover_list">
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list hover-img">
                    <li class="subnavlink__item">
                      <a
                        href="/pages/nanamota-the-worlds-softest-basics"
                        class="subnavlink"
                      >
                        EXPLORE NANAMOTA
                      </a>
                      <a
                        href="/pages/nanamota-the-worlds-softest-basics"
                        class="subnavlink subnavlink-img"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/cloud.jpg?v=1621614772"
                        >
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/nanamota-womens-tee"
                        class="subnavlink"
                      >
                        SHOP WOMENS TEES
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/nanamota-mens-tee"
                        class="subnavlink"
                      >
                        SHOP MENS TEES
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/collections/nanamota-face-masks"
                        class="subnavlink"
                      >
                        SHOP FACE MASKS
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list hover-img">
                    <li class="subnavlink__item">
                      <div class="nanamoto-basics-crd">
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/nanamoto-logo.svg?v=1621615505"
                          alt=""
                        >
                        <a
                          href="/pages/nanamota-the-worlds-softest-basics"
                          class="nanamoto-basics-crd-txt"
                        >
                          <span>The World’s Softest Basics. </span>
                          <span>Constructed ethically. </span>
                          <span>Worn responsibly.</span>
                          <span>Sourced sustainably. </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!--NANAMOTA End  -->
          </li>
          <li class="navitem">
            <a
              href="#"
              class="navlink"
            > SALE </a>
          </li>
        </ul>

        <!-- Header logo -->
        <div class="logo_wrap line-h-0">
          <a
            class="logo d-inline-block"
            href="/"
          >
            <v-lazy-image
              :src="(shopifyData.logo)"
              alt="Logo"
            />
          </a>
        </div>

        <!-- Rigth Navlist -->
        <ul class="navlist navlist-right">
          <li class="navitem">
            <a
              href="#"
              class="navlink navlink_drpdown"
            > CLIENT SERVICES </a>
            <!-- CLIENT SERVICES Start -->
            <div
              class="navlink__hover"
              @mouseenter="stopScroll"
              @mouseleave="workScroll"
            >
              <ul class="navink__hover_list">
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list">
                    <li class="subnavlink__item">
                      <a
                        href="mailto:CLIENTSERVICES@BEHNO.COM"
                        class="subnavlink"
                      >
                        WRITE TO US AT CLIENTSERVICES@BEHNO.COM
                      </a>
                    </li>
                    <li class="subnavlink__item remove_hover">
                      <span class="subnavlink">
                        TEXT US <b>HELLO</b> AT +1(833) 217-2636
                      </span>
                    </li>
                  </ul>
                </li>
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list">
                    <li class="subnavlink__item">
                      <a
                        href="/pages/behno-client-services?tab=shipping-delivery"
                        class="subnavlink"
                      >
                        SHIPPING &amp; DELIVERY
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/pages/behno-client-services?tab=returns-exchanges"
                        class="subnavlink"
                      >
                        RETURNS &amp; EXCHANGES
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/pages/behno-client-services?tab=general-policy"
                        class="subnavlink"
                      >
                        GENERAL POLICY
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- CLIENT SERVICES End -->
          </li>
          <li class="navitem">
            <a
              href="#"
              class="navlink navlink_drpdown"
            > THE SENSE OF BEHNO </a>
            <!-- THE SENSE OF BEHNO Start -->
            <div
              class="navlink__hover"
              @mouseenter="stopScroll"
              @mouseleave="workScroll"
            >
              <ul class="navink__hover_list">
                <!-- ===   ON hover Class Show First row ===  -->
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list">
                    <li class="subnavlink__item">
                      <a
                        href="/pages/welcome-to-our-world-the-sense-of-behno"
                        class="subnavlink"
                      >
                        EXPLORE OUR WORLD
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/pages/delve-into-our-ethical-philosophy"
                        class="subnavlink"
                      >
                        OUR ETHICAL PHILISOPHY
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/pages/behno-in-the-world-milestones"
                        class="subnavlink"
                      >
                        BEHNO IN THE WORLD &amp; PRESS
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/pages/constructing-msa-ethos"
                        class="subnavlink"
                      >
                        THE BEHNO STANDARD &amp; MSA ETHOS
                      </a>
                    </li>
                    <li class="subnavlink__item">
                      <a
                        href="/pages/our-partner-handbag-factory"
                        class="subnavlink"
                      >
                        OUR PARTNER HANDBAG FACTORY
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="navlink__hover_item">
                  <ul class="subnavlink__list">
                    <li class="subnavlink__item">
                      <a
                        href="/pages/welcome-to-our-world-the-sense-of-behno"
                        class="nav_sensebehno__img subnavlink"
                      >
                        <img
                          src="https://cdn.shopify.com/s/files/1/1000/3130/files/the-sense-of-behno.png?v=1621617767"
                          alt=""
                        >
                      </a>
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
              <button class="search_btn">
                <v-lazy-image
                  :src="(shopifyData.search)"
                  alt="Search Icon"
                />
              </button>
              <a
                class="shopping_btn"
                @click="show = !show"
              >
                <v-lazy-image
                  :src="(shopifyData.bag)"
                  alt="Shopping Icon"
                />

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
        <li class="m_navitem">
          <button
            class="navlink nav_drpbtn w-100 t-left"
            @click="toggleDropDown"
          >
            HANDBAGS & WALLETS
          </button>
          <div class="nav_drpbtn_content">
            <ul class="m_drpdown_list">
              <!--  sub nav link  -->
              <li class="m_drpdown_item">
                <a
                  href="#"
                  class="subnavlink"
                > SHOP ALL </a>
              </li>
              <!--  sub nav link  -->
              <li class="m_drpdown_item">
                <button
                  class="subnavlink nav_drpbtn w-100 t-left"
                  @click="toggleDropDown"
                >
                  SHOP BY CATEGORY
                </button>
                <div class="nav_drpbtn_content">
                  <ul class="m_subnavlink_list">
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > CROSSBODY BAGS </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > SHOULDER BAGS </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > MINI BAGS </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > TOP HANDLES</a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > TOTE BAGS</a>
                    </li>
                  </ul>
                </div>
              </li>
              <!--  sub nav link  -->
              <li class="m_drpdown_item">
                <button
                  class="subnavlink nav_drpbtn w-100 t-left"
                  @click="toggleDropDown"
                >
                  NEWEST ICONS
                </button>
                <div class="nav_drpbtn_content">
                  <ul class="m_subnavlink_list">
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > SIMONE FLAP CROSSBODIES </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > LEX ACCORDIONS </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > TILDA SADDLE BAGS </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="m_navitem">
          <button
            class="navlink nav_drpbtn w-100 t-left"
            @click="toggleDropDown"
          >
            HANDBAGS & WALLETS
          </button>
          <div class="nav_drpbtn_content">
            <ul class="m_drpdown_list">
              <!--  sub nav link  -->
              <li class="m_drpdown_item">
                <a
                  href="#"
                  class="subnavlink"
                > SHOP ALL </a>
              </li>
              <!--  sub nav link  -->
              <li class="m_drpdown_item">
                <button
                  class="subnavlink nav_drpbtn w-100 t-left"
                  @click="toggleDropDown"
                >
                  SHOP BY CATEGORY
                </button>
                <div class="nav_drpbtn_content">
                  <ul class="m_subnavlink_list">
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > CROSSBODY BAGS </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > SHOULDER BAGS </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > MINI BAGS </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > TOP HANDLES</a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > TOTE BAGS</a>
                    </li>
                  </ul>
                </div>
              </li>
              <!--  sub nav link  -->
              <li class="m_drpdown_item">
                <button
                  class="subnavlink nav_drpbtn w-100 t-left"
                  @click="toggleDropDown"
                >
                  NEWEST ICONS
                </button>
                <div class="nav_drpbtn_content">
                  <ul class="m_subnavlink_list">
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > SIMONE FLAP CROSSBODIES </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > LEX ACCORDIONS </a>
                    </li>
                    <li class="m_subnavlink_item">
                      <a
                        href="#"
                        class="navlink"
                      > TILDA SADDLE BAGS </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <!-- ======= Mobile Navigation End ======= -->
  </header>

  <!-- ====== Shoping Mini Cart ====== -->
  
  <section class="mini_cart">
    <div
      class="mini_cart_container"
      :class="{ active: !show }"
    >
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
      lastScrollY: 100,
      show: true
    };
  },
  created: function () {
    this.header = document.getElementsByClassName("tmbHeader");   
  },
  mounted (){
      this.refreshMiniCart();
      
  },
 
  methods: {
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
    z-index:5;
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


/* Tmb Loder Css Code */

.mini_cart_container .card.active .loder_tmb{
  visibility: visible;
}

#mini_cart_content .product_img_wrapper{
  position: relative;
}

.mini_cart .card.active .product_img_wrapper::after{
  visibility: visible;
}

.product_img_wrapper::after{
    content: "";
    position: absolute;
    right: 0%;
    top: 0%;
    background: #000;
    z-index: 2;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    visibility: hidden;
}

.loder_tmb {
  display:flex;
  position: absolute;
  left: 50%;
  transition: 0.3s;
  gap: 5px;
  top:50%;
  align-items: center;
  transform: translate(-50% , -50%);
  bottom: 0;
  z-index: 3;
  width: 100%;
  height: 50px;
  justify-content: center;
  visibility: hidden;
  
}
.loder_tmb span {
   vertical-align:middle;
   border-radius:100%;
   display:inline-block;
   width:10px;
   height:10px;
   margin:3px 2px;
   -webkit-animation:loader1 0.8s linear infinite alternate;
   animation:loader1 0.8s linear infinite alternate;
}
.loder_tmb span:nth-child(1) {
   -webkit-animation-delay:-1s;
   animation-delay:-1s;
  background:#dbdbdb;
}
.loder_tmb span:nth-child(2) {
   -webkit-animation-delay:-0.8s;
   animation-delay:-0.8s;
  background:#dbdbdb;
}
.loder_tmb span:nth-child(3) {
   -webkit-animation-delay:-0.26666s;
   animation-delay:-0.26666s;
  background:#dbdbdb;
}
.loder_tmb span:nth-child(4) {
   -webkit-animation-delay:-0.8s;
   animation-delay:-0.8s;
  background:#dbdbdb;
  
}
.loder_tmb span:nth-child(5) {
   -webkit-animation-delay:-1s;
   animation-delay:-1s;
  background:#dbdbdb;
}

@keyframes loader1 {
   from {transform: scale(0, 0);}
   to {transform: scale(1, 1);}
}
@-webkit-keyframes loader1 {
   from {-webkit-transform: scale(0, 0);}
   to {-webkit-transform: scale(1, 1);}
}



</style>


<style scoped>
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
  margin-bottom: 10px;
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
  margin-top: 60px;
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
.nanamoto-basics-crd-txt span:first-child {
  margin-bottom: 15px;
}
.nanamoto-basics-crd-txt span {
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

