<template>
    <section class="all_feature_bag_sec">
        <div class="container">
        <h3 class="card_heading">SHOP ALL FEATURED BAGS</h3>
        <!-- Sec Content -->
        <div class="sec_content">
            <div class="product_cards">
                <div class="card">
                    <a href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/product1.jpg?v=1651045599" alt="error">
                    <div class="product_info"> 
                        <p class="subtitle">ANA MINI CROSSBODY PEBBLE</p>
                        <p class="subtitle_b">$495</p>
                    </div>
                    </a>
                </div>
                <div class="card">
                    <a href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/product2.jpg?v=1651045599" alt="error">
                    <div class="product_info"> 
                        <p class="subtitle">ELIZABETH BAGUETTE MINI METALLIC</p>
                        <p class="subtitle_b">$495</p>
                    </div>
                    </a>
                </div>
                <div class="card">
                    <a href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/product3.jpg?v=1651045599" alt="error">
                    <div class="product_info"> 
                        <p class="subtitle">FRIDA FLAT TOTE NAPPA</p>
                        <p class="subtitle_b">$495</p>
                    </div>
                    </a>
                </div>
                <div class="card">
                    <a href="#">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/product4.jpg?v=1651045599" alt="error">
                    <div class="product_info"> 
                        <p class="subtitle">INA BAG LARGE PEBBLE</p>
                        <p class="subtitle_b">$495</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>


<style scoped>
    .all_feature_bag_sec{
        padding: 32px 15px 84px;
    }
    .container{
        max-width: 1410px;
        margin: 0 auto;
    }
    .card_heading{
        margin-bottom: 17px;
    }
    .product_info{
        margin-top: 6px;
    }
    .product_cards{
        display: flex;
        /* align-items: center; */
        gap: 6px;
        justify-content: center;
    }
    .card > a{
        display: block;    
    }

    /* Responsive Breakpoints */
    @media(max-width:767px){
        .all_feature_bag_sec{
            padding: 10px 0 51px 2px;
        }
        .card_heading{
            margin: 0 0 5px 12px;
        }
        /* .card > img{
            width: 166px;
            height: 166px;
        } */
        .product_cards{
            gap:2px;
            justify-content: unset;
        }
        .card{
            min-width: 166px;
        }
        .product_info{
            margin:8px 0 0 4px;
        }
        .sec_content{
            overflow-x:scroll;
        }
        .subtitle,
        .subtitle_b{
            font-size: 10px;
            line-height: 12px;
        }
        .card > a {
            max-width: 166px;
        }
        .subtitle{
            margin-bottom: 7px;
        }
    }
</style>