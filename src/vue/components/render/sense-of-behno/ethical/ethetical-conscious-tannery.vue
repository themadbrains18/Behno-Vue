<template>
  <!-- ========== Section Conscious tannery Start ========== -->
  <section class="sec_making_our_bags sec-conscious-tannery">
    <div class="container">
      <div class="sec_content">
        <!--    Section Image        -->
        <div class="sec_img">
          <a :href=(shopifyData.link)>
            <img
              :src=(shopifyData.imgUrl.src)
              :src-placeholder=(shopifyData.imgUrl.placeHolder)
              :alt=(shopifyData.imgUrl.alt)
            />
          </a>
        </div>
        <!--    Section text        -->
        <div class="sec_text">
          <h2 class="sec_heading ">{{ shopifyData.crdheading }}</h2>
          <h4 class="card_heading_b">{{ shopifyData.crdSubHeading }}</h4>
          <!-- {{ shopifyData.para }} -->
          <p class="body_text" v-for="(item, index) in shopifyData.para" :key="index">
            {{ item.para }}
          </p>
          <a :href=(shopifyData.link) class="cta_btn">{{ shopifyData.linkText }}</a>
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section Conscious tannery End ========== -->
</template>

<style scoped>
/* ========== Section Conscious tannery Css Code Start ========== */
.sec_making_our_bags.sec-conscious-tannery {
  padding: 0 0 121px;
}
.sec_making_our_bags.sec-conscious-tannery .sec_text {
  max-width: 440px;
}
.sec_making_our_bags.sec-conscious-tannery .sec_content {
  gap: 37px;
  margin-top: 0;
}
.sec_heading{
  line-height: 41px;
}

.card_heading_b{
  text-transform: initial;
  margin:  14px 0;
}

.body_text{
  padding-bottom:20px;
  line-height: 19px;
}

.cta_btn {
  background: #000000;
  width: fit-content;
  margin-top: 25px;
  color: #fff;
  border: 1px solid #000000;
}

@media (hover: hover) {
  .cta_btn:hover {
    background: #fff;
    color: #000;
    border-color: #000;
  }
}

/* ========== Section Conscious tannery Css Code End ========== */


/* ========== Section Conscious tannery Css Code Start ========== */
@media only screen and (max-width: 1024px) {
.sec_making_our_bags.sec-conscious-tannery{
	padding:0 0 90px;
}
}

@media only screen and (max-width: 991px) {
.sec_making_our_bags.sec-conscious-tannery{
	padding:0 0 50px;
}
}

@media only screen and (max-width: 767px) {
.sec_making_our_bags.sec-conscious-tannery{
	padding:0 0 35px;	
}
.sec_making_our_bags.sec-conscious-tannery .sec_text{
	padding:0 15px;
}
.sec_making_our_bags.sec-conscious-tannery .cta_btn{
	display:none;
}
}
/* ========== Section Conscious tannery Css Code End ========== */
</style>



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
