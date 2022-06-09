<template>
    <!-- ====== Shoping cart Default template ====== -->
    <section class="cart_default_sec">
        <div class="big_container">
            <div class="sec_head">
                <div class="pre_arrow_wrapper">
                    <button class="prev_cta">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/left-arrow-new.svg?v=1654580925" alt="error">
                    </button>
                </div>
            </div>
            <div class="sec_content">
                <h3 class="cart_heading">YOUR BAG</h3>
                <p class="body_text">Your bag is empty.</p>
                <div class="cta_wrapper">
                    <a href="#" class="cta_btn cta_btn-black">SHOP ALL </a>
                    <a href="#" class="cta_btn cta_btn-black">BACK TO HOMEPAGE</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ====== Shoping cart With Products template ====== -->
    <section class="cart_with_products">
        <div class="big_container">
        <!-- sec head -->
            <div class="sec_head">
                <div class="pre_arrow_wrapper">
                    <button class="prev_cta">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/left-arrow-new.svg?v=1654580925" alt="error">
                    </button>
                </div>
            </div>
            <div class="sec_content">
                <div class="sec_left">
                    <h3 class="cart_heading">YOUR BAG</h3>
                    <div class="product_grid">
                        <div class="card">
                            <a href="#">
                                <div class="product_img_wrapper" id="product_img_wrapper6678699180129" >
                                    <img src="https://cdn.shopify.com/s/files/1/1000/3130/products/ELIZABETHBAGUETTEMINIAPRICOTFRONTcopy.jpg?v=1637782216" id="6678699180129" >
                                </div>
                                <h5 class="card-title" >ELIZABETH BAGUETTE MINI PEBBLE BORDEAUX</h5>
                                <h5 class="card-title bold" >$285</h5>
                            </a>
                        </div>
                        <div class="card">
                            <a href="#">
                                <div class="product_img_wrapper" id="product_img_wrapper6678699180129" >
                                    <img src="https://cdn.shopify.com/s/files/1/1000/3130/products/ELIZABETHBAGUETTEMINIAPRICOTFRONTcopy.jpg?v=1637782216" id="6678699180129" >
                                </div>
                                <h5 class="card-title" >ELIZABETH BAGUETTE MINI PEBBLE BORDEAUX</h5>
                                <h5 class="card-title bold" >$285</h5>
                            </a>
                        </div>
                        <div class="card">
                            <a href="#">
                                <div class="product_img_wrapper" id="product_img_wrapper6678699180129" >
                                    <img src="https://cdn.shopify.com/s/files/1/1000/3130/products/ELIZABETHBAGUETTEMINIAPRICOTFRONTcopy.jpg?v=1637782216" id="6678699180129" >
                                </div>
                                <h5 class="card-title" >ELIZABETH BAGUETTE MINI PEBBLE BORDEAUX</h5>
                                <h5 class="card-title bold" >$285</h5>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="sec_right">
                    <div class="sec_right_inner">
                        <h4 class="subtotal_heading">SUBTOTAL</h4>
                        <p class="subtotal_price body_text">$1,080</p>
                        <p class="body_text">Excluding tax & shipping</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.cart_default_sec,
.cart_with_products{
    padding: 45px 50px 179px;
    
}
.big_container{
    padding: 0;
}
.cart_default_sec{
    display: none;
}
.cart_default_sec .sec_content{
    max-width: 365px;
    width: 100%;
    margin: 43px auto 0;    
}
.pre_arrow_wrapper img{
    cursor: pointer;
}
.cart_heading{
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #000000;
    margin-bottom:42px;
}
.body_text{
    margin-bottom:41px;
    font-family: 'Helvetica Neue',sans-serif;
}
.cta_wrapper{
    display: flex;
    align-items: center;
    gap: 15px;
}
.cart_with_products .cart_heading {
    margin: 47px 0 27px;
}
.cart_with_products .sec_content{
    display: flex;
    align-items: flex-start;
    gap: 170px;
}
.cart_with_products .sec_left{
    width: 55%;
}
.product_grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6px;
    row-gap: 28px;
}
.card .card-title{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    margin-top: 6px;
}
.card-title.bold{
    font-weight: 700;
}
</style>