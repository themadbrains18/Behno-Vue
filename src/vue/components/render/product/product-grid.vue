<template>
    <section class="product_page_grid_wrap">
        <div class="product_page_grid">
            <div class="product_page_grid_item product_page_grid_item-first">
                <img v-if=(shopifyData.metaFieldsData.img.src) :src=(shopifyData.metaFieldsData.img.src) :src-placeholder=(shopifyData.metaFieldsData.img.placeholder) :alt=(shopifyData.metaFieldsData.img.alt)>
                <div class="product_page_grid_content">
                    <h3 class="product_grid_heading subtitle_b" v-if=(shopifyData.metaFieldsData.gridLeftHeading)>
                        {{  shopifyData.metaFieldsData.gridLeftHeading }}
                    </h3>
                    <p class="caption" v-if=(shopifyData.metaFieldsData.gridLeftPara)>
                        {{  shopifyData.metaFieldsData.gridLeftPara }}
                    </p>
                </div>
            </div>
            <div class="product_page_grid_item product_page_grid_item-second">
                <img :src=(shopifyData.RightGridImage.src) :src-placeholder=(shopifyData.RightGridImage.placeholder) :alt=(shopifyData.RightGridImage.alt)>
                <div class="product_page_grid_content">
                    <h3 class="product_grid_heading subtitle_b">
                        {{  shopifyData.RightGridHeading }}
                    </h3>
                    <p class="caption">
                        {{  shopifyData.RightGridpara }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .product_page_grid_wrap{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E9E7E3 100%);
        padding: 50px 0 130px;
    }
    .product_page_grid{
        max-width: 820px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap : 80px ;
    }
    .product_page_grid_item-first{
        margin-top: 320px;
    }
    .product_grid_heading{
        margin: 17px 0 21px;
    }
    @media only screen and (max-width:991px){
        .product_page_grid_wrap{
            padding: 50px 0 80px;
        }
        .product_page_grid{
            gap: 50px;
        }
    }
    @media only screen and (max-width:768px){
        .product_page_grid_wrap{
            padding: 50px 0;
        }
        .product_page_grid{
            grid-template-columns: 1fr;
        }
        .product_page_grid_item{
            text-align: center;
        }
        .product_page_grid_item-first{
            order: 2;
            margin-top: 0;
        }
        .product_page_grid_content{
            padding: 0 12px;
            text-align: left;
        }
    }
    @media only screen and (max-width:480px){
        .product_page_grid_item img{
            width: 100%;
            object-fit: cover;
        }
    }
</style>
<script>
export default {
    data() {
        console.log(this.shopifyData);
    },
    props: {
        shopifyData: {
            type: Object,
            required: true,
        }
    }
}
</script>
