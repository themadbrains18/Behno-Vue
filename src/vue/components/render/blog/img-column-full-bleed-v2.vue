<template>
    <section class="img_column_full_bleed_sec bg-sand">
        <div class="sec_sontent">
            <div class="sec_img">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/image-column1.jpg?v=1651053964" alt="error">
                <div class="shop_cta">
                    <!-- <a href="#" class="subtitle">SHOP THE BAG</a> -->
                </div>
            </div>
            <div class="sec_img">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/image-column2.jpg?v=1651053964" alt="error">
                <div class="shop_cta">
                    <a href="#" class="subtitle">SHOP THE BAG</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .img_column_full_bleed_sec{
        padding:75px 0 53px;
    }
    .sec_sontent{
        display: flex;
        /* align-items:center; */
        gap:15px;
        max-width: 1115px;
        width: 100%;
        margin: 0 auto;
    }
    .sec_img img{
        display: block;
    }
    .shop_cta{
        margin: 10px 0 0 0px;        
    }

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