<template>
  <!-- ========== Section sustainability and ethics Start ========== -->
  <section class="sec_sustainability_ethics">
    <div class="container">
      <div class="sec_content">
        <!--    Section text        -->
        <div class="sec_text">
          <h2
            class="sec_heading"
          >
            {{ shopifyData.heading }}
          </h2>
          <h4
            class="card_heading_b"
          >
            {{ shopifyData.subHeading }}
          </h4>
          <p class="body_text">
            {{ shopifyData.para1 }}
          </p>
          <p class="body_text">
            {{ shopifyData.para2 }}
          </p>
          <div class="sec_img">
            <img
              :src="(shopifyData.leftImg.src)"
              :src-placeholder="(shopifyData.leftImg.placeHolder)"
              :alt="(shopifyData.leftImg.alt)"
            >
          </div>
        </div>
        <!--    Section Image        -->
        <div class="sec_img">
          <img
            :src="(shopifyData.rightImg.rightImgSrc)"
            :src-placeHolder="(shopifyData.rightImg.rightPlaceHolder)"
            :alt="(shopifyData.rightImg.alt)"
          >
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section sustainability and ethics  End ========== -->
</template>

<script>
export default {
  props:{
    shopifyData: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
/* ========== Section sustainability and ethics  Start Css Code Start ========== */
.sec_sustainability_ethics {
  padding: 45px 0 75px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e9e7e3 100%);
}
.body_text{
  margin-bottom:20px;
  line-height: 19px;
}
.body_text:last-of-type{
  margin-bottom: 0;
}
.sec_text {
  max-width: 432px;
  width: 100%;
}
.card_heading_b{
  margin:  14px 0;
  text-transform: initial;
}
.sec_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, auto));
  gap: 60px;
  justify-content: space-between;
}

.container {
  max-width: 1056px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
}

.sec_heading {
  line-height: 41px;
}
.sec_inner_heading {
  font-weight: 400;
  font-size: 46px;
  line-height: 41.86px;
  color: #000000;
  margin: 27px 0 14px;
}
.our-community_inner_heading {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 14px;
}
.sec_info {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #000000;
}
.sec_text .sec_img {
  text-align: center;
  max-width:244px;
  width: 100%; 
  margin: 19px auto auto;
}
/* ========== Section sustainability and ethics  Start Css Code End ========== */

/* ========== Section sustainability and ethics Responsive Css  Start ========== */
@media only screen and (max-width: 991px) {
  .container {
    padding: 0;
  }
  .sec_sustainability_ethics {
    padding: 0 0 70px;
  }
  .sec_content {
    gap: 55px;
    justify-content: initial;
    grid-template-columns: 1fr;
  }
  .sec_text .sec_img {
    margin-top: 15px;
  }
  .sec_text {
    order: 1;
    margin: 0 auto;
  }
  .sec_inner_heading {
    margin-top: 0;
  }
  .sec_img {
    text-align: center;
  }

  /* ========== Section sustainability and ethics Responsive Css  End ========== */
}

@media only screen and (max-width: 575px) {
  .sec_text {
    max-width: 289px;
  }
}
</style>