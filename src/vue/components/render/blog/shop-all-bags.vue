<template>
    <section class="all_feature_bag_sec ">
        <div class="container">
            <h3 class="card_heading">{{ shopifyData.sectionHeading }}</h3>
            <!-- Sec Content -->
            <div class="sec_content">
                <div class="product_cards">
                    <div class="card" v-for="(value, index) in Products" :key="index">
                        <!-- this block work for single product products -->
                        <div v-if="value.hasOwnProperty('single')">
                            <a :href="`/products/` + value.single.handle">
                                <div class="product_img_wrapper" v-if="value.single.images.length > 2">
                                    <img :src="value.single.images[0]" alt="{{ value.single.images[0] }}"
                                        class="normal" />
                                    <img :src="value.single.images[1]" alt="{{ value.single.images[1] }}"
                                        class="hoverImg" />
                                </div>
                                <div class="product_img_wrapper" v-else>
                                    <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
                                        alt="" class="normal" />
                                </div>

                                <h5 class="card-title product_title">
                                    {{ value.single.title }}
                                </h5>
                                <h5 class="card-title bold product_price">
                                    $ {{ (value.single.compare_at_price / 100).toFixed(2) }}
                                </h5>
                            </a>

                            <div class="quickButton quickActive">
                                <div class="color_swatches"></div>
                                <div class="product_cta_wrapper" data-v-32bfb114="">
                                    <button :id="'quickAdd' + value.single.id" class="quickAdd" v-on:click="addToCard"
                                        :variantid="value.single.variants[0].id">
                                        <span>Quick Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- this block work for single product products -->

                        <div v-if="value.hasOwnProperty('variable') && (value.variable.length - 1) >= value.active">

                            <a :href="`/products/`">
                                <div class="product_img_wrapper" id="product_img_wrapper6617090588769"
                                    v-if="value.variable[value.active].images.length > 2">
                                    <img :src="value.variable[value.active].images[0]"
                                        alt="{{ value.variable[value.active].images[0] }}" class="normal" />
                                    <img :src="value.variable[value.active].images[1]"
                                        alt="{{ value.variable[value.active].images[1] }}" class="hoverImg" />
                                </div>
                                <div class="product_img_wrapper" v-else>
                                    <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
                                        alt="" class="normal" />
                                </div>

                                <h5 class="card-title product_title">
                                    {{ value.variable[value.active].title }}
                                </h5>
                                <h5 class="card-title bold product_price">
                                    $ {{ value.variable[value.active].compare_at_price }}
                                </h5>
                            </a>

                            <div class="quickButton quickActive">
                                <div class="color_swatches">
                                    <ul :mainKey="JSON.stringify(value)">
                                        <li v-for="(sValue, sKey) in value.swatches" :key="sKey" :index="sKey"
                                            :link="sValue.link" @click="selectVariation" class="nav-dots"
                                            v-bind:class="sKey == value.active ? 'active' : ''">
                                            <span>
                                                <img :src="getThemeAssets(sValue.img)" :class="sValue.img" />
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="product_cta_wrapper" data-v-32bfb114="">
                                    <button :id="'quickAdd' + value.variable[value.active].id"
                                        :variantid="value.variable[value.active].variants[0].id" qty="1"
                                        class="quickAdd" v-on:click="addToCard">
                                        <span>Quick Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="product_cards tmb-md-none">
                <div class="card" v-for="(item, index) in Products" :key="index">
                        <a :href=(item.product.productUrl)  :product-id=(item.product.productid) class="product_link" >
                            <img :src="item.product.productidImage"  />
                            <div class="product_info"> 
                                <p class="subtitle">{{item.product.productTitle}}</p>
                                <p class="subtitle_b">{{item.product.productidPrice}}</p>
                            </div>
                        </a>
                    <div class="product_varients">
                        <div class="product_colores">
                            <ul>
                                <li class="color">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/yellow.png?v=1651228173" alt="error">
                                </li>
                                <li class="color">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/golden.png?v=1651228172" alt="error">
                                </li>
                                <li class="color">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/white.png?v=1651228173" alt="error">
                                </li>
                                <li class="color">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/skyblue.png?v=1651228172" alt="error">
                                </li>
                                <li class="color">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/black.png?v=1651228172" alt="error">
                                </li>
                                <li class="color">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/red_purple.png?v=1651228172" alt="error">
                                </li>
                            </ul>
                            
                                <svg class="next_arrow" width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.588135 10.0294L4.9999 5.61765L0.588135 1.20589" stroke="#6B6B6B" stroke-linejoin="round"/>
                                </svg>
                            
                        </div>
                        <div class="product_btn">
                            <a :href=(item.product.productUrl)  :product-id=(item.product.productid) class="cta_btn">{{shopifyData.addfeatureBagBtn}}</a>
                        </div>
                    </div>
                </div>
            </div> -->
                <div class="cta_link t-center">
                    <button class="cta_btn" v-on:click="showproducts">
                        <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L16 16.5L31 1.5" stroke="#A4A4A4" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.all_feature_bag_sec {
    padding: 32px 15px 84px;
}

.container {
    max-width: 1410px;
    margin: 0 auto;
}

.card_heading {
    margin-bottom: 17px;
}

.product_info {
    margin-top: 6px;
}

.product_cards {
    display: grid;
    gap: 6px;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
}

.card>a {
    display: block;
}

.product_cards:not(:last-child) {
    padding-bottom: 54px;
}

.cta_link {
    margin-top: 30px;
}

.cta_btn {
    padding: 0;
}

.product_btn .cta_btn {
    padding: 10px 26px;
    background: #fff;
    color: #000;
    border: 1px solid #000;
}

.product_btn .cta_btn:hover {
    background: #000;
    color: #fff;
    border: 1px solid transparent;
}

/* product colors selector Start */
.product_colores,
.product_colores>ul {
    display: flex;
    align-items: center;
    gap: 11px;
}

.product_colores>ul>li {
    line-height: 0;
}

.product_varients {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    opacity: 0;
    visibility: hidden;
    transition: 0.4s;
}

.next_arrow,
.color img {
    cursor: pointer;
}

.color img {
    border: 1px solid #E0E0E0;
    border-radius: 50%;
}

.card>a:hover+.product_varients,
.product_varients:hover {
    opacity: 1;
    visibility: visible;
}

.sec_content::-webkit-scrollbar {
    display: none;
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
    object-fit: cover;
}

.card:hover .quickActive,
.card:hover .hoverImg {
    opacity: 1;
    visibility: visible;
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

.color_swatches {
    position: relative;
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

.quickButton .quickAdd:hover {
    background: #000;
}

.quickButton .quickAdd:hover span {
    color: #fff;
}

.quickButton {
    justify-content: space-between;
    display: flex;
    opacity: 0;
    visibility: hidden;
    align-items: center;
    transition: 0.3s;
}

.quickButton ul {
    text-align: left;
    /* width: 50%; */
}

.quickButton .product_cta_wrapper {
    width: 50%;
    text-align: end;
}

/* product colors selector End */

/* Responsive Breakpoints */
@media(max-width:1350px) {
    .product_btn .cta_btn {
        padding: 10px;
    }

}

@media(max-width:1250px) {
    .product_varients {
        gap: 10px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 10px;
    }
}

@media(max-width:767px) {

    .product_img_wrapper img {
        height: auto;
        max-width: 100%;
        width: 100%;
    }
    .all_feature_bag_sec {
        padding: 10px 0 31px 2px;
    }

    .card_heading {
        margin: 0 0 6px 12px;
    }

    .product_cards {
        gap: 2px;
        justify-content: unset;
        display: flex;
    }

    .card {
        min-width: 166px;
    }

    .product_info {
        margin: 8px 0 0 4px;
    }

    .sec_content {
        overflow-x: scroll;
        display: flex;
        gap: 2px;
    }

    .subtitle,
    .subtitle_b {
        font-size: 10px;
        line-height: 12px;
    }

    .card>a {
        max-width: 166px;
    }

    .subtitle {
        margin-bottom: 7px;
    }

    .product_cards:not(:last-child) {
        padding-bottom: 20px;
    }

    .cta_link.t-center {
        display: none;
    }

    .product_cards.tmb-md-none.show {
        height: 0 !important;
    }

    .product_varients {
        display: none;
    }

}

@media(min-width:768px) {
    .product_cards.tmb-md-none {
        opacity: 0;
        visibility: hidden;
        height: 0;
        overflow: hidden;
        padding-bottom: 0;
        transition: 0.4s;
    }

    .product_cards.tmb-md-none.show+.cta_link {
        margin-top: 84px;
        transform: rotate(180deg);
    }

    .cta_btn {
        transition: 0.4s;
    }

}

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
</style>
<script>
import assets from "../../../../assets/graphql/assets.json";
// import assets from "../../../assets/graphql/assets.json";
export default {
    props: {
        shopifyData: {
            type: Object,
            required: true,
        }
    },
    mounted() {
        this.fetchProdustQuery();
    },
    data() {
        return {
            Products: []
        }
    },
    methods: {

        showproducts() {
            let productRow = document.querySelectorAll(".product_cards.tmb-md-none");
            let rowBtn = document.querySelector(".sec_content .cta_btn");

            for (let pr of productRow) {
                let rowHeight = pr.scrollHeight;
                if (pr.classList.contains("show")) {
                    pr.classList.remove("show");
                    pr.setAttribute("style", "height:0;opacity:0;visibility:hidden;overflow:hidden;");
                } else {
                    pr.classList.add("show");
                    pr.setAttribute("style", `height:${rowHeight}px;opacity:1;visibility:visible;overflow:visible;`);
                }
            }
            rowBtn.classList.toggle("rotate");
        },

        async fetchProdustQuery() {

            /// fetch shopify graphQl queries
            var productData = window.atob(this.shopifyData.productData);

            console.log(JSON.parse(productData))
            // return;
            var Products = JSON.parse(productData);

            var filterListing = [];
            var duplicateRecord = [];

            for (let product in Products) {

                var p = Products[product][0]; /// product object
                var v = Products[product][1]; /// variant object

                var handle = p.handle;

                // check handle is already used then return
                if (duplicateRecord.includes(handle)) {
                    continue;
                }

                /// filter variants check links exist
                var links = ""; /// product pair links
                for (let varints in v) {
                    if ("variants_products" == varints || "variants_swtach" == varints) {
                        var links = v["variants_products"];
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
                            if (links[lnk].replace("/products/", "") == handle) { } else {
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
                    
                    var swatch = await this.getSwatch(v);
                    var collectPairProducts = [];

                        for (let swatchPl in swatch) {
                            var Phandle = swatch[swatchPl].link;
                            for (let childPair in Products) {
                                if (Products[childPair][0].handle == Phandle.replace("/products/", "")) {
                                    collectPairProducts.push(Products[childPair][0]);
                                }
                            }
                        }

                        productType["variable"] = collectPairProducts;
                        productType["swatches"] = swatch;
                        productType["active"] = this.randomIntFromInterval(0, (collectPairProducts.length - 1))

                        filterListing.push(productType);
                } 
                else if (bindInPair.length == 0) {
                        /// first time browser load
                        productType["single"] = p;
                        filterListing.push(productType);

                } else if (flag) {
                    // else condition will be work if product have no variation
                    // filterListing.push(p);
                }
            }

            console.log(filterListing);

            this.Products = [...filterListing].slice(0, 100);
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
        },

        randomIntFromInterval(min, max) {
            // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
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

            console.log(productsData);

            // active product
            var activeProduct = productsData.variable[index];
            // update product data

            // change title

            grid.querySelector(".product_title").innerHTML = activeProduct.title;
            grid.querySelector(".product_price").innerHTML =
                "$ " + (activeProduct.compare_at_price / 100).toFixed(2);

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
            grid
                .querySelector("button")
                .setAttribute("variantid", activeProduct.variants[0].id);

        },

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
        }
    },
};
</script>
