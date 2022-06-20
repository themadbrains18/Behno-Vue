<template>
  <!-- Section Behno In World Start -->
  <section class="sec_behno_world">
    <h2 class="card_heading_b">
      {{ shopifyData.SecHeading }}
    </h2>
    <div class="sec_img">
      <img
        :src="(shopifyData.imgUrl.src)"
        :src-placeholder="(shopifyData.imgUrl.placeholder)"
        :alt="(shopifyData.imgUrl.alt)"
      >
    </div>
  </section>
  <!-- Section Behno In World End -->
</template>

<script>
    export default {
        props:{
            shopifyData:{
                type: Object,
                required: true,
            }
        }            
    }
</script>

<style scoped>
.sec_behno_world{
    padding-top:72px;
}   
.card_heading_b{
    margin-bottom:53px;
    text-align: center;
}
.sec_img{
    text-align: center;
}
.sec_img img{
    width: 100%;
}

/* Resposive Css Code */
@media screen and (max-width: 991px){
 .sec_behno_world{
    padding-top:60px;
}   
.card_heading_b{
    margin-bottom:45px;
}
}
@media screen and (max-width: 767px){
.sec_behno_world{
    padding-top:36px;
}   
.card_heading_b{
    margin-bottom:36px;
}
}
</style>
