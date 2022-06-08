<template>
    <section class="partner_handbag_hero">
        <div class="big_container">
            <h2 class="card_heading_b" data-v-75498a5c="">{{ shopifyData.secSubHeading }}</h2>
            <div class="sec_video">
                <template v-if="shopifyData.checkImage === 'true'">
                    <video  autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true" preload="none" >
                        <source :src=(shopifyData.videolink) />
                    </video>
                </template>
                <template v-else>
                    <img class="grid_img" :src=(shopifyData.checkImage.src) :placeholder=(shopifyData.checkImage.placeholder) :alt=(shopifyData.checkImage.alt) />
                </template>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .partner_handbag_hero {
        padding: 65px 0px;
    }
    .sec_video {
        padding: 0 38px;
    }
    .card_heading_b{
        margin-bottom: 24px;
        text-align:center;

    }
    .sec_video video{
        display: block;
    }

    /* ===== RESPONSIVE BREAKPOINTS START ===== */
    @media screen and (max-width: 767px) {
        .partner_handbag_hero{
            padding: 60px 0 0;
        }
        .sec_video ,
        .big_container
        {
            padding: 0;
        }        
        .card_heading_b{
            margin-bottom: 20px;
        }
    }
    /* ===== RESPONSIVE BREAKPOINTS END ===== */
</style>

<script>
    export default{
        props:{
            shopifyData:{
                type:Object,
                required:true,
            }
        }
    }
</script>