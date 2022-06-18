<template>
    <section class="all_feature_bag_sec" v-if="shopifyData.showSection == 'true'">
        <div class="container">
        <h3 class="card_heading">{{shopifyData.sectionHeading}}</h3>
        <!-- Sec Content -->
        <div class="sec_content">
            <div class="product_cards">
                <div class="card" v-for="(item, index) in shopifyData.productData.slice(0,4)" :key="index" >
                    <a :href=(item.product.productUrl) :product-id=(item.product.productid) class="product_link">
                        <img :src="item.product.productidImage" />
                        <div class="product_info"> 
                            <p class="subtitle">{{item.product.productTitle}}</p>
                            <p class="subtitle_b">{{item.product.productidPrice}}</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="product_cards tmb-md-none">
                <div class="card" v-for="(item, index) in shopifyData.productData.slice(4)" :key="index">
                        <a :href=(item.product.productUrl)  :product-id=(item.product.productid) class="product_link" >
                            <img :src="item.product.productidImage"  />
                            <div class="product_info"> 
                                <p class="subtitle">{{item.product.productTitle}}</p>
                                <p class="subtitle_b">{{item.product.productidPrice}}</p>
                            </div>
                        </a>
                </div>
            </div>
            <div class="cta_link t-center">
                <button class="cta_btn" v-on:click = "showproducts">
                    <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L16 16.5L31 1.5" stroke="#A4A4A4" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
        </div>
    </section>
</template>


<style scoped>
    .all_feature_bag_sec{
        padding: 32px 15px 84px;
    }
    .container{
        max-width: 1410px;
        margin: 0 auto;
    }
    .card_heading{
        margin-bottom: 17px;
    }
    .product_info{
        margin-top: 6px;
    }
    .product_cards{
        display: grid;
        gap:34px 6px;
        justify-content: center;
        grid-template-columns: repeat(4,1fr);
    }
    .card > a{
        display: block;    
    }
    .product_cards:not(:last-child){
        padding-bottom: 34px;
    }
    .cta_link{
        margin-top: 30px;
    }
    .cta_btn {
        padding: 0;
    }
    .product_btn .cta_btn{
        padding: 10px 26px;
        background: #fff;
        color: #000;
        border: 1px solid #000;
    }
    .product_btn .cta_btn:hover{
        background: #000;
        color: #fff;
        border: 1px solid transparent;
    }
   

    /* Responsive Breakpoints */
    @media(max-width:1350px){
        .product_btn .cta_btn{
            padding: 10px;
        }
        
    }
    @media(max-width:1250px){
        .product_varients{
            gap: 10px;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 10px;
        }
   }
    @media(max-width:767px){
        .all_feature_bag_sec{
            padding: 10px 0 31px 2px;
        }
        .card_heading{
            margin: 0 0 6px 12px;
        }
        .product_cards{
            gap:2px;
            justify-content: unset;
            display: flex;
        }
        .card{
            min-width: 166px;
        }
        
        .product_info{
            margin:8px 0 0 4px;
        }
        .sec_content{
            overflow-x:scroll;
            display: flex;
            gap: 2px;
        }
        .subtitle,
        .subtitle_b{
            font-size: 10px;
            line-height: 12px;
        }
        .card > a {
            max-width: 166px;
        }
        .subtitle{
            margin-bottom: 7px;
        }
        .product_cards:not(:last-child){
            padding-bottom: 20px;
        }
        .cta_link.t-center{
            display: none;
        }
        .product_cards.tmb-md-none.show{
            height: 0 !important;
        }
        .product_varients{
            display: none;
        }
        
    }

    @media(min-width:768px){
        .product_cards.tmb-md-none{
            opacity: 0;
            visibility: hidden;
            height: 0;
            overflow: hidden;
            padding-bottom: 0;
            transition: 0.4s;
        }
        .product_cards.tmb-md-none.show + .cta_link{
            margin-top:84px;
            transform: rotate(180deg);
        }
        .cta_btn{
            transition: 0.4s;
        }

    }
</style>
<script>

export default {
    data() {
        console.log(this.shopifyData);
    },
    props:{
        shopifyData:{
            type:Object,
            required:true,
        }
    },
    methods: {
        showproducts() {
            let productRow = document.querySelectorAll(".product_cards.tmb-md-none");
            let rowBtn = document.querySelector(".sec_content .cta_btn");
            
            for(let pr of productRow){
                let rowHeight = pr.scrollHeight;
                if(pr.classList.contains("show")){
                    pr.classList.remove("show");
                    pr.setAttribute("style","height:0;opacity:0;visibility:hidden;overflow:hidden;");
                }else{
                    pr.classList.add("show");
                    pr.setAttribute("style",`height:${rowHeight}px;opacity:1;visibility:visible;overflow:visible;`);
                }
            }
            rowBtn.classList.toggle("rotate");
        },
    },
};
</script>
