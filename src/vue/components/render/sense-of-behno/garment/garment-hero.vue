<template>
  <!-- Garment Hero Section Start -->
  <section class="sec_garment_hero">
    <div class="sec_content">
      <h2 class="card_heading_b">
        {{ shopifyData.secheading }}
      </h2>
      <h3 class="card_heading_b sec_heading">
        {{ shopifyData.subheading }}
      </h3>
      <p
        v-for="(item, index) in shopifyData.para"
        :key="index"
        class="body_text"
      >
        {{ item.para }}
      </p>
    </div>
  </section>
  <!-- Garment Hero Section End -->
</template>

<script>
export default {
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
};
</script>
<style scoped>
.sec_garment_hero {
  padding: 72px 0 120px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e9e7e3 100%);
}
.sec_content{
  max-width:633px;
  width: 100%;
  margin:  0 auto;
  padding: 0 12px 0 20px;
}
.card_heading_b{
  text-align: center;
  margin-bottom: 72px;
}
.card_heading_b.sec_heading{
  text-transform: initial;
  font-family: 'Helvetica Neue',sans-serif;
  text-align: initial;
  margin-bottom: 14px;
}
.body_text{
  margin-bottom: 20px;
}
.body_text:last-child{
  margin-bottom: 0px;
}

/* Resposive Css Code */
@media screen and (max-width: 991px) {
  .card_heading_b{
    margin-bottom: 47px;
  } 
  
}
@media screen and (max-width: 767px) {
.sec_garment_hero{
    padding: 44px 0 37px;
  }

}
</style>