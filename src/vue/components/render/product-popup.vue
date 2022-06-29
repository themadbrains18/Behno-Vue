<template>
  <div class="product_info_card">
    <div class="product_img">
      <img
        class="close-icon"
        src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/close-icon.png?v=1651150909"
        alt="error"
        @click="$emit('close')"
      >
      <a :href="(productData.productUrl)">
        <img :src="(productData.productidImage)">
      </a>
    </div>
    <p class="subtitle">
      {{ productData.productTitle }}
    </p>
    <p class="subtitle_b">
      {{ productData.productidPrice }}
    </p>
    <div class="product_cta">
      <template v-if="productData.productQuantity > 0">
        <a
          :href="(productData.productUrl)"
          class="cta_btn"
        >VIEW</a>
        <button
          type="button"
          class="cta_btn cta-modifier"
        >
          QUICK ADD
        </button>  
      </template>
      <template v-else>
        <button
          type="button"
          class="cta_btn sold-out"
        >
          SOLD OUT
        </button>
      </template>
    </div>
  </div>
</template>
<script>

export default {
  name:"ProductPopup",
  props:{
    productData:{
      type:Object,
      required: true
    }
  },
  emits:['close'],
 
  methods:{
    toggle_selection_for(e){
        var popupParent =  e.target;
        // console.log(popupParent.parentNode);
          this.$store.dispatch('my-module/toggle');
          console.log(this.$store.state['my-module'].visible)
      //  $store.dispatch('my-module/toggle');
      
    }
  }
  
}

</script>

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
  .subtitle {
    margin: 6px 0 5px;
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
      /* display: none; */
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

@media(max-width:768px){
.subtitle_b{
    margin-bottom: 35px;
  }
  .product_info_card{
    height: auto;
  }
}

@media(max-width:575px){
  
  .product_info_card a img{
    /* height: 400px; */
    object-fit: cover;
  }
  
  .product_info_card{
    padding: 17px;
  }
}
@media(max-width:480px){
  .product_info_card a img{
    height: 100%;
  }
  .product_info_card{
    height: 100%;
  }
}
</style>
