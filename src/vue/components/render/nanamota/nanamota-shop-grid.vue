<template v-if="shopifyData.checkSection=='false'">
  <section
    class="nanamota_shop_grid"
    :class="[shopifyData.SecModifier=='false' ? activeClass : 'bg-white']"
  >
    <div class="container">
      <div class="nanamota_grid_container">
        <!-------- Text Section ------->
        <div class="sec_text">
          <h2 class="sec_text-heading">
            {{ shopifyData.secheading }}
          </h2>
          <p
            v-for="(item, index) in shopifyData.infodata"
            :key="index"
          >
            {{ item.secinfo }}
          </p>
          <!--- Shop button --->
          <div class="cta_wrapper">
            <a
              class="shop_btn d-block"
              :href="(shopifyData.secBtnUrl)"
            >{{ shopifyData.secBtn }}</a>
          </div>
        </div>
        <!-------- Image Section ------->
        <div class="sec_image">
          <img
            class="d-block"
            :src="(shopifyData.secimg.src)"
            :src-placeholder="(shopifyData.secimg.placeholder)"
            :alt="(shopifyData.secimg.alt)"
          >
        </div>
      </div>
      <!--- Shop button in Responive --->
      <div class="cta_wrapper">
        <a
          class="shop_btn mob_shop_btn d-block"
          :href="(shopifyData.secBtnUrl)"
        >{{ shopifyData.secBtn }}</a>
      </div>
    </div>    
  </section>
</template>


<script>

export default ({
   props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
})
</script>
    
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
    padding:0 20px;
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
    
}

.sec_text-heading{
    padding-bottom: 30px;
    font-size: 52px;
    line-height: 54px;
    color: #fff;
    font-family: 'Work Sans',sans-serif;
    font-weight: 500;
    text-align: left;
    /* line-height: 44px; */
}
[id$="shop-grid-third"] .sec_text{
  max-width: 650px;
}

.sec_text p{
    font-size: 24px;
    font-weight: normal;
    letter-spacing:  -0.08px;
    line-height: 28px;
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
.nanamota_shop_grid.bg-white .sec_text:nth-of-type(1) {
    order: 2;
}
.nanamota_shop_grid.bg-white .sec_image:nth-of-type(2) {
    order: 1;
}
.nanamota_shop_grid.bg-white p{
    text-align: end;
}
.nanamota_shop_grid.bg-white h2{
    text-align: end;
}
.nanamota_shop_grid.bg-white .shop_btn{
    margin: 40px 0 0 auto;
}
/*======= Image Section ======*/
/*-- Shop button in Responive -- */
.shop_btn.mob_shop_btn{
    display: none;
}

.nanamota_shop_grid.bg-white{
    background: #fff;
}
.nanamota_shop_grid.bg-white .sec_text-heading,.nanamota_shop_grid.bg-white .sec_text p{
    color: #000;
}
.nanamota_shop_grid.bg-white .sec_text{
    justify-self: end;
    max-width: 390px;
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
        line-height: 40px;
    }

    .sec_text p{
        font-size: 18px;
        line-height: 20px;
    }

    .sec_image img{
        max-width: 600px;

    }
    .nanamota_shop_grid.bg-white .sec_text:nth-of-type(1) {
    order: 1;
}
.nanamota_shop_grid.bg-white .sec_image:nth-of-type(2) {
    order: 2;
}
.nanamota_shop_grid.bg-white p{
    text-align: start;
}
.nanamota_shop_grid.bg-white h2{
    text-align: start;
}

    /*-- Shop button in Responive -- */
    .shop_btn.mob_shop_btn{
        display: block;
        margin: 35px auto 0;
    }

    .nanamota_shop_grid.bg-white .shop_btn{
    margin: 40px auto 0;
    }
    .shop_btn.mob_shop_btn a{
        font-size: 15px;
    }

    .shop_btn{
        display: none;
    }

    .nanamota_shop_grid.bg-white .sec_text{
    justify-self: start;
}

}
/*=== Breakpoint At 776px ===*/
@media only screen and (max-width: 776px){
      .sec_image img{
        max-width: 100%;
    }

}
</style>