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
            <div class="product_cards tmb-md-none">
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
            <div class="cta_link t-center">
                <button class="cta_btn" v-on:click = "showproducts">
                    <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L16 16.5L31 1.5" stroke="#A4A4A4" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                </button>
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
        display: grid;
        gap: 6px;
        justify-content: center;
        grid-template-columns: repeat(4,1fr);
    }
    .card > a{
        display: block;    
    }
    .product_cards:not(:last-child){
        padding-bottom: 54px;
    }
    .cta_link{
        margin-top: 30px;
    }
    .cta_btn {
        padding: 0;
    }
    /* Responsive Breakpoints */
    @media(max-width:767px){
        .all_feature_bag_sec{
            padding: 10px 0 31px 2px;
        }
        .card_heading{
            margin: 0 0 5px 12px;
        }
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
            display: flex;
            gap: 2px;
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
        .product_cards:not(:last-child){
            padding-bottom: 20px;
        }
        .cta_link.t-center{
            display: none;
        }
        .product_cards.tmb-md-none.show{
            height: 0 !important;
        }
    }

    @media(min-width:768px){
        .product_cards.tmb-md-none{
            opacity: 0;
            visibility: hidden;
            height: 0;
            overflow: hidden;
            padding-bottom: 0;
            transition: 0.4s;
        }
        .product_cards.tmb-md-none.show + .cta_link{
            margin-top:84px;
        }
        .cta_btn{
            transition: 0.4s;
        }
        .cta_btn.rotate{
            transform: rotate(180deg);
        }
    }
</style>
<script>

export default {
    methods: {
        showproducts() {
            let productRow = document.querySelectorAll(".product_cards.tmb-md-none");
            let rowBtn = document.querySelector(".cta_btn");
            
            for(let pr of productRow){
                let rowHeight = pr.scrollHeight;
                if(pr.classList.contains("show")){
                    pr.classList.remove("show");
                    pr.setAttribute("style","height:0;opacity:0;visibility:hidden;overflow:hidden;");
                }else{
                    pr.classList.add("show");
                    pr.setAttribute("style",`height:${rowHeight}px;opacity:1;visibility:visible;overflow:visible;`);
                }
            }
            rowBtn.classList.toggle("rotate");
        },
    },
};
</script>
