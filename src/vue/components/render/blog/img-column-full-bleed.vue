<template>
    <section class="img_column_full_bleed_sec">
        <div class="sec_sontent">
            <div class="sec_img">
                <div class="product_popup">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/bleed1.jpg?v=1651040773" alt="error">
                    <productPopup />
                </div>
                <div class="shop_cta">
                    <a href="#" class="subtitle">SHOP THE BAG</a>
                </div>
            </div>
            <div class="sec_img">
                <div class="product_popup">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/bleed2.jpg?v=1651040959" alt="error">
                    <productPopup />
                </div>
                <div class="shop_cta">
                    <a href="#" class="subtitle">SHOP THE BAG</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .img_column_full_bleed_sec{
        padding:49px 0 67px;
    }
    .sec_sontent{
        display: flex;
        align-items:center;
        gap:3px;
    }
    .sec_img img{
        display: block;
    }
    .shop_cta{
        margin: 11px 0 0 10px;        
    }

    /* Popup card Css start */
    .product_popup {
        position: relative;
        overflow: hidden;
    }
    .product_popup img{
        display: block;
    }
    .product_info_card {
        position: absolute;
        bottom: 0;
        left: -100%;
        transition: 0.3s linear;
        z-index: 99;
    }
    .sec_img .product_popup > img{
        transition: 0.3s linear;
    }
    /* Popup card Css end */

    /* Responsive Breakpoints */
    @media(max-width:767px){
        .img_column_full_bleed_sec{
            padding:0px 0 88px;
        }
        .sec_sontent {
            flex-direction: column;
            gap: 53px;
            background: #000;
            padding-bottom: 49px;
        }
        .shop_cta{
            margin: 10px 0 0 13px;        
        }
        .subtitle{
            color: #fff;
        }
    }
</style>



<script>
import productPopup from '../product-popup.vue'

export default {
    components:{
        productPopup
    }
}
</script>
