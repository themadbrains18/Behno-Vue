<template>
    <section class="product_page_grid_wrap">
        <div class="product_page_grid">
            <div class="product_page_grid_item product_page_grid_item-first">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/product-grid.jpg?v=1653551871" alt="">
                <div class="product_page_grid_content">
                    <h3 class="product_grid_heading subtitle_b">
                        WHAT FITS INSIDE YOUR LEX MINI ACCORDION?
                    </h3>
                    <p class="caption">
                        The soft yet structured exterior of the Lex Bag opens to reveal a spacious interior. This bag is an effortlessly way to carry your essentials like your phone, classic pouch, lip balm, sunscreen stick, silk scarf and sunglasses for bright and beautiful days ahead.
                    </p>
                </div>
            </div>
            <div class="product_page_grid_item product_page_grid_item-second">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/product-grid1.jpg?v=1653551886" alt="">
                <div class="product_page_grid_content">
                    <h3 class="product_grid_heading subtitle_b">
                        AN HONEST ACCESSORY.
                    </h3>
                    <p class="caption">
                        Your bag is handcrafted in Nashik, Maharashtra, in a facility that incrementally implements The behno Standard, a set of six guiding principles.
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