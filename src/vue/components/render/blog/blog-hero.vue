<template>
    <section class="banner_sec bg-sand">
        <!-- Banner Content -->
        <div class="banner_content">
            <div class="banner_content">
                <h1 class="banner_main_heading">I AM:</h1>
                <div class="banner_img t-center">
                    <img class="desktop_img" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/blog-banner-bg.jpg?v=1650964822" alt="error">
                    <img class="mobile_img" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/blog-banner-bg-res.jpg?v=1650965505" alt="error">
                </div>
            </div>
        </div>
        <!-- gal -->
    </section>
</template>

<style scoped>

.banner_sec{
    /* background: linear-gradient(180deg, #DDCEC7 0%, #FFFFFF 100%); */
    
    padding: 0 0 52px;
}
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