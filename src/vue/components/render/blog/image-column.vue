<template>
    <section class="image_column_sec bg-sand">
        <!-- Sec Content -->
        <div class="sec_content">
            <div class="sec_img">
                <div class="product_popup">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/shop-bag1.jpg?v=1651035680" alt="error">
                    <productPopup />
                </div>
                <div class="shop_cta">
                    <a href="#" class="subtitle">SHOP THE BAG</a>
                </div>
            </div>
            <div class="sec_img">
                <div class="product_popup">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/shop-bag2.jpg?v=1651035680" alt="error">
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
    .image_column_sec{
        padding:0 30px 56px;
    }
    .sec_content{
        display: flex;
        align-items: center;
        gap: 28px;
        justify-content: center;
    }
    .sec_img img{
        width: 336px;
        height: 410px;
    }
    .shop_cta{
        margin-top: 10px;
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
        .sec_content{
            flex-direction: column;
            gap: 42px;
        }    
        .image_column_sec{
            padding:0 0px 66px;
        }
        .sec_img img{
            width: 390px;
            height: 478px;
        }
        .shop_cta .subtitle{
            margin-left: 13px;
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

