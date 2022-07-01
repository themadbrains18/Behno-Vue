<template>
    <!-- Shop Tab Section -->
    <section class="shop_tabs_sec">
      <div class="container">
        <!-- Tabs Header on Scroll -->
            <ul class="nanamota_tabs_header">
                <!-- nanamota logo -->
                <li class="nanamota_logo d-block ">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/nanamota-logo.png?v=1656669813" class="d-block" alt="">
                </li>
            <!-- Tabs Tittles Button  -->
                <li class="d-block">
                     <ul class="shop_tab_list">
                        <li class="tab_btn">
                            <button  class="tab_title active">WOMENS</button>
                        </li>
                        <li class="tab_btn">
                            <button  class="tab_title">MENS</button>
                        </li>
                        <li class="tab_btn">
                            <button  class="tab_title">FACEMASKS</button>
                        </li>        
                    </ul>    
                </li>
                <li class="d-block">
                    <a href="#">BACK TO BEHNO</a>
                </li>
            </ul>
        <!-- Tabs Body -->
       <div class="tabs_body">
            <div class="tabs_contents_grid">
                <!-- Image Of Product -->
                <div class="tabs_img">
                    <a class="tabs_contents_link d-block" href="#">
                        <img class="d-block" src="https://i.shgcdn.com/eca09b83-5922-43a2-bb37-52375e847292/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">

                        <!-- Content Detail Of Product On Image -->
                        <div class="content_detail">
                            <p class="content_name">'The Softest Tee' Womens Fitted</p>
                            <p class="content_type">Short Sleeve | White</p>
                            <p class="content_cost">$49</p>
                        </div>
                    </a>
                </div>
                <!-- Image Of Product -->
                  <div class="tabs_img">
                    <a class="tabs_contents_link d-block" href="#">
                        <img class="d-block" src="https://i.shgcdn.com/5513b52f-fba3-4194-87d4-dc2195b097ed/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">

                        <!-- Content Detail Of Product On Image -->
                        <div class="content_detail">
                            <p class="content_name">'The Softest Tee' Womens Fitted</p>
                            <p class="content_type">Long Sleeve | White</p>
                            <p class="content_cost">$55</p>
                        </div>
                    </a>
                </div>
                <!-- Image Of Product -->
                  <div class="tabs_img">
                    <a class="tabs_contents_link d-block" href="#">
                        <img class="d-block" src="https://i.shgcdn.com/2aa06892-078f-4e23-9cfd-d1b0bc0e3c63/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">

                        <!-- Content Detail Of Product On Image -->
                        <div class="content_detail">
                            <p class="content_name">'The Softest Tee' Womens Fitted</p>
                            <p class="content_type">Short Sleeve | Black</p>
                            <p class="content_cost">$49</p>
                        </div>
                    </a>
                </div>
            </div>
        </div> 
      </div>
      <div class="cta_wrapper">
        <a class="shop_btn d-block" href="#">SHOP ALL WOMENS > </a>
      </div>
    </section>
</template>


<style scoped>
/*======= CSS=======*/
.d-block{
    display: block;
}

p{
    font-family: 'Work Sans',sans-serif;
}

/*------- Tabs Tittles Button css -------*/
.shop_tabs_sec{
    padding-block:45px;
}

.container{
    max-width:1460px;
    width:100%;
    padding-inline:20px;
    margin: 0 auto;
}
/*------- Tabs Header on Scroll -------*/
.nanamota_tabs_header{
    display: grid;
    grid-template-columns: 200px 600px 155px;
    justify-content: space-between;
    align-items:center;
}
.nanamota_tabs_header > li:last-child{
    text-align: end;
    font-size: 14px;
    padding: 10px 20px;
}
.shop_tab_list{
    display:flex;
    max-width: 600px;
    justify-content: space-between;
    margin: 0 auto;
}

.tab_btn{
    cursor: pointer;
    padding: 10px 15px;
}

.tab_title{
    font-family: 'Work Sans',sans-serif;
    font-size:18px;
    font-weight: normal;
    width:auto;
    text-align:center;
    color:#7d8d8d;
}

.tab_title.active{
 border-bottom: 2px solid #000;
 color: #000;
}

/*------- Tabs body css -------*/
.tabs_body{
    margin-top:90px;
}

.tabs_contents_grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    gap:30px;
}

/*-- Image of Product --*/
.tabs_img{
    position: relative;
    width: fit-content;
    margin: 0 auto;
}

/*-- Content Detail Of Product On Image --*/
.content_detail{
    position: absolute;
    left: 5px;
    bottom:5px;
}

.content_detail p{
    line-height: 9px;
    letter-spacing:-0.08px;

}
.content_name{
    font-weight: 700;
    font-size: 13px;
}

.content_type,
.content_cost{
    font-size: 12px;
    margin-top:10px;
    font-weight: normal;
}
.shop_btn{
    margin: 100px auto 0;
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

/*=== Breakpoint At 991px ===*/

@media only screen and (max-width: 991px) {
    .tabs_contents_grid{
        grid-template-columns: 1fr;
        justify-content: center;
    }
    .shop_btn a{
        font-size: 13px;
}
    /*------- Tabs Header on Scroll -------*/
    .nanamota_tabs_header > li:last-child,
    .nanamota_logo{
        display: none;
    }
    .nanamota_tabs_header{
        grid-template-columns:1fr;
    }
    .tab_title{
        font-size: 16px;
    }

}
/*=== Breakpoint At 767px ===*/
@media only screen and (max-width: 767px){
    /*------- Tabs body css -------*/
    .tabs_body{
        margin-top:60px;
}

}
/*=== Breakpoint At 575px ===*/
@media only screen and (max-width: 575px){
    .tab_btn{
        padding: 10px 5px;
    }

}
</style>