<template>
    <section class="shop_ndds_bottom">
        <div class="big_container">
            <div class="sec_head">
                <h4 class="card_heading_b">{{ shopifyData.secSubHeading }}</h4>
            </div>
            <div class="sec_content">
                <div class="product_wrapper">
                    <div class="produts_grid">
                            <!-- product Card -->
                                <template v-if="shopifyData.showProduct === 'true'">
                                    <div v-for="(value, key) in shopifyData.product" :key="key">
                                    <div class="grid_item featured_carousel_item">
                                        <a :href=value.productLink>
                                            <img :src=value.productImage alt="" />
                                            <span class="product_name subtitle">{{ value.productTitle }}</span>
                                            <span class="product_price subtitle_b">{{ value.productPrie }}</span>
                                        </a>
                                    </div>
                                    </div>
                                </template>
                                <!-- Custom card -->
                                <template v-else>
                                    <div v-for="(value, key) in shopifyData.box" :key="key">
                                    <div class="grid_item featured_carousel_item">
                                        <a :href=(value.link) class="grid_img-wrap line-h-0 d-block">
                                        <img
                                            class="grid_img"
                                            :src=(value.imgUrl.src)
                                            :src-placeholder=(value.imgUrl.placeholder)
                                            :alt=(value.imgUrl.alt)
                                        />
                                        </a>
                                    </div>
                                    </div>
                                </template>
                    </div>
                </div>
                <div class="sec_cta">
                    <a :href=(shopifyData.secCtaLink) class="cta_btn">{{ shopifyData.secCtaText }}</a>
                </div>
            </div>
        </div>
    </section>
  
</template>

<style scoped>
.shop_ndds_bottom{
    padding: 100px 0 20px;
}
.produts_grid{
    margin: 60px 0 101px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    align-items: flex-start;
    gap: 6px;
}
.card_heading_b{
    text-align: center;
}
.sec_cta{
    text-align: center;
}
.cta_btn{
    background-color:#F50000 ;
    color: #fff;
    font-weight: 400;
}
.grid_item img {
    min-width: 348px;
    width: 100%;
    height: 348px;
    object-fit: cover;
}
.grid_item span {
    display: block;
}
.product_wrapper {
    overflow-x: scroll;
}

@media only screen and (max-width: 767px) {
    .shop_ndds_bottom{
        padding: 20px 0 30px;
    }
    .produts_grid{
       margin:38px 0 75px ;
    }
    .subtitle_b{
        margin: 0;
    }
    .grid_item img[data-v-e20486aa] {
        min-width: 166px;
        height: 166px;
    }
    /* .produts_grid[data-v-e20486aa] {
        grid-template-columns: repeat(4,166px);
    } */
    /* .grid_item img {
        width: 166px;
        height: 166px;
        object-fit: cover;
    } */
}
</style>


<script>
export default {
    props: {
        shopifyData: {
        type: Object,
        required: true,
        }
    }
}
</script>
