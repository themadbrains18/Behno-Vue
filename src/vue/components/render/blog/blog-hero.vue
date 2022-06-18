<template>
    <section class="banner_sec" v-if="shopifyData.checkSection=='true'">
        <!-- Banner Content -->
        <div class="banner_content">
            <div class="banner_content">
                <h1 class="banner_main_heading">{{ shopifyData.heroHeading }}</h1>
                <div class="banner_img t-center">
                    <img class="desktop_img" :src=(shopifyData.heroImgDesktop.src) :src-placeholder=(shopifyData.heroImgDesktop.placeholder) :alt=(shopifyData.heroImgDesktop.alt)  />
                    <img class="mobile_img" :src=(shopifyData.heroImgMobile.src) :src-placeholder=(shopifyData.heroImgMobile.placeholder) :alt=(shopifyData.heroImgMobile.alt)>
                </div>
            </div>
        </div>
        <!-- gal -->
    </section>
</template>
<script>
    export default {
        data(){
            if(this.shopifyData.mode == 'true'){
                document.body.classList.add("landscape");
            }
        },
        props:{
            shopifyData:{
                type: Object,
                required: true,
            }
        }            
    }
</script>
<style>
    body.blog .tmbMain{
       background: linear-gradient(180deg, #DDCEC7 0%, #FFFFFF 100%); 
    }
</style>
<style scoped>
.banner_main_heading{
    transform: translateY(35%);
    font-weight: 700;
    font-size: 160px;
    line-height: 195px;
    text-align: center;
    color: #000000;
}
.mobile_img{
    display: none;
}

/* Responsive Breakpoints */
@media screen and (max-width: 767px) {
    .banner_main_heading{
        font-size: 72px;
        line-height: 87px;
    }
    .mobile_img{
        display: block;
        margin: 0 auto;
    }    
    .desktop_img{
        display: none;
    }
}

</style>