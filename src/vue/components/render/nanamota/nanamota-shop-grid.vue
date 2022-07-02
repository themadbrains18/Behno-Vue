<template>
    <section class="nanamota_shop_grid">
        <div class="container">
            <div class="nanamota_grid_container">
                <!-------- Text Section ------->
                <div class="sec_text">
                    <h2 class="sec_text-heading">Feel it.</h2>
                    <p>Our Softest Tees are made with the highest quality ultra soft micromodal.</p>
                    <p>Tees so soft they are meant to be lived in and lived with.</p>
                    <!--- Shop button --->
                    <div class="cta_wrapper">
                        <a class="shop_btn d-block" href="#">SHOP ALL WOMENS > </a>
                    </div>
                </div>
                <!-------- Image Section ------->
                <div class="sec_image">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/shop-women.png?v=1656678499" class="d-block" alt="">
                </div>
                 <!--- Shop button in Responive --->
                <div class="cta_wrapper">
                    <a class="shop_btn mob_shop_btn d-block" href="#">SHOP ALL WOMENS > </a>
                </div>
            </div>
        </div>    
    </section>
</template>


<style scoped>

.d-block{
    display: block;
}

p{
    font-family: 'Work Sans',sans-serif;
}

.container{
    max-width:1460px;
    width:100%;
    padding-inline:20px;
    margin: 0 auto;
}

.nanamota_shop_grid{
    background-color: #7d8d8d;
    padding:45px 0;
}

.nanamota_grid_container{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
/*======= Text Section ======*/
.sec_text{
    max-width: 450px;
    width: 100%;
    align-self:center;
    margin: 0 auto;
}

.sec_text-heading{
    padding-bottom: 30px;
    font-size: 52px;
    color: #fff;
    font-family: 'Work Sans',sans-serif;
    text-align: left;
    line-height: 44px;
}
.sec_text p{
    font-size: 24px;
    font-weight: normal;
    letter-spacing:  -0.08px;
    line-height: 24px;
    color: #fff;
}

.sec_text p:not(:last-child){
    padding-bottom: 15px;
}
/*--- Shop button ---*/
.shop_btn{
    margin-top:40px ;
    padding: 10px 20px;
    background-color: #f0ded0;
    border-radius: 30px;
    text-align: center;
    width: fit-content;
}
.shop_btn:hover{
    background-color: #efd4bf !important;
}
.shop_btn a{
    font-family: 'Work Sans',sans-serif;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 1px;
    
}
/*======= Image Section ======*/
/*-- Shop button in Responive -- */
.shop_btn.mob_shop_btn{
    display: none;
}

/*======= Responsive Start =======*/
/*=== Breakpoint At 991px ===*/
@media only screen and (max-width: 991px){
    .nanamota_grid_container{
        grid-template-columns: 1fr;
        justify-content: center;
        max-width: 620px;
        margin: 0 auto;
    }

    .sec_text{
        max-width: 500px;
    }

    .sec_text-heading{
        padding-bottom: 20px;
        font-size: 40px;
        font-weight: normal;
    }

    .sec_text p{
        font-size: 18px;
    }

    .sec_image img{
        max-width: 600px;

    }

    /*-- Shop button in Responive -- */
    .shop_btn.mob_shop_btn{
        display: block;
        margin: 35px auto;
    }

    .shop_btn.mob_shop_btn a{
        font-size: 15px;
    }

    .shop_btn{
        display: none;
    }
}
/*=== Breakpoint At 776px ===*/
@media only screen and (max-width: 776px){
      .sec_image img{
        max-width: 100%;
    }

}
</style>
    
