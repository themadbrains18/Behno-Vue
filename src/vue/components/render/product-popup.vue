<template>
  <section class="product_info_card">
      <div class="product_img">
        <img class="close-icon" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/close-icon.png?v=1651150909" alt="error">
        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/product-card.jpg?v=1651147294" alt="error">
      </div>
      <p class="subtitle">TINA BAGUETTE NAPPA RUCHED</p>
      <p class="subtitle_b">$495</p>
      <div class="product_cta">
        <a href="#" class="cta_btn">VIEW</a>
        <a href="#" class="cta_btn cta-modifier">QUICK ADD</a>
        <a href="#" class="cta_btn sold-out">SOLD OUT</a>
      </div>
  </section>
</template>


<style scoped>
  .product_info_card{
      padding: 10px 12px;
      border: 1px solid #000;
      background-color:#FFFFFF;
      max-width: 240px;
  }
  .subtitle_b{
    margin-bottom: 23px;
  }
  .product_cta{
    display: flex;
    align-items: center;
    gap: 3px;
  }
  .product_cta .cta_btn{
    width: 50%;
    padding:7px;
    background: #fff;
    color: #000;
    text-align: center;
    font-size: 10px;
    line-height: 11px;
    font-weight: 400;
    border: 1px solid #000;
    transition: 0.3s ease;
  }
  .product_cta .cta_btn:hover{
    background: #000;
    color: #fff;
    border: 1px solid #000;
  }
  .cta_btn.sold-out{
      width: 100%;
      display: none;
  }
  .close-icon {
      position: absolute;
      top: 7px;
      right: 7px;
      width: 30px;
      height: 30px;
  }
/* Responsive Breakpoints */
@media(min-width:768px){
  .close-icon {
    display: none;
  }
}

</style>


<script>
export default {
  name:"productPopup",
}

</script>
