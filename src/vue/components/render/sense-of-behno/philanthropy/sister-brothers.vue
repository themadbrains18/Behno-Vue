<template>
  <!-- Section Sister Brothers Start -->
  <section class="sec_sister-brothers">
    <div class="big_container">
      <h2 class="card_heading_b">
        {{ shopifyData.Heading }}
      </h2>
      <div class="sec_content">
        <img
          :src="(shopifyData.imgUrl.src)"
          :src-placeholder="(shopifyData.imgUrl.placeholder)"
          :alt="(shopifyData.imgUrl.alt)"
        >
        <img
          :src="(shopifyData.rightImgUrl.src)"
          :src-placeholder="(shopifyData.rightImgUrl.placeholder)"
          :alt="(shopifyData.rightImgUrl.alt)"
        >
      </div>
    </div>
  </section>
  <!-- Section Sister Brothers End -->
</template>

<!-- Section Sister Brothers Css Code Start -->
<script>
export default {
    props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
}
</script>
<!-- Section Sister Brothers Css Code End -->

<style scoped>
.sec_sister-brothers {
  padding-top: 73px;
}
.big_container{
    padding: 0 24px;
}
.card_heading_b {
  margin-bottom: 19px;
  text-align: center;
  text-transform: initial;
}
.sec_content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 12px;
}
@media screen and (max-width: 991px) {
    .sec_content{
        gap: 10px;
        grid-template-columns: 1fr;
    }
    .big_container{
        padding: 0 9px;
    }
}
</style>