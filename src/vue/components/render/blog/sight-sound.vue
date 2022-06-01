<template>
    <section class="sight_sound qwe" v-if="shopifyData.checkSection == 'true'" >
        <!-- Sec head -->
        <div class="sec_head">
            <h1 class="sec_heading">
                <template v-for="(item, key) in shopifyData.slide" :key="key">
                    <span >{{ item.secHeading }}</span>
                </template>
            </h1>
        </div>
        <!-- Sec Content -->
        <div class="sec_content">
            <div class="sec_img">
                <div class="product_popup">
                    <img :src=(shopifyData.secImg.src)  :src-placeholder=(shopifyData.secImg.placeholder) :alt=(shopifyData.secImg.alt)>
                    <template v-if="shopifyData.productData">
                        <productPopup :productData=(shopifyData.productData) />
                    </template>
                </div>
                <div class="shop_cta" >
                    <a :href=(shopifyData.secCtaLink) class="subtitle">{{ shopifyData.secCta }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        shopifyData:{
            type:Object,
            required:true,
        }
    }
}
</script>

<style scoped>
    .sight_sound{
        padding:90px 0 43px;
        position: relative;
    }
    .sec_heading{
        margin-bottom: 121px;
    }
    .sec_heading span{
        font-family: 'Big Caslon',sans-serif;
        font-weight: 400;
        font-size: 101px;
        line-height: 89px;
        text-align: center;
        color: #000000;
        display: block;
        width: fit-content;
        margin: 0 auto;
    }
    .sec_content > img{
        display: block;
    }
    .shop_cta{
        margin-top:13px;
    }
    .sec_content{
        padding:0 54px;
        max-width: 1440px;
        margin: 0 auto;
    }
    .sight_sound:after{
        content: '';
        background: #000;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 30px);
        height: 1px;
    }
    /* Responsive Breakpoints */
    @media(max-width:767px){
        .sec_content{
            padding:0;
        }
        .sec_heading span{
            font-size: 50px;
            line-height: 56px;
        }
        .shop_cta{
            margin-left: 13px;
        }
        .sec_heading{
            margin-bottom: 50px;
        }
        .sight_sound{
            padding:60px 0 43px;
        }
    }
</style>

