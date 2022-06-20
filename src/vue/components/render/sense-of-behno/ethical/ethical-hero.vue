<template>
  <!-- ========== Section OUR ETHICAL PHILOSOPHY Start ========== -->
  <section class="sec_our_ethical_philosophy">
    <div class="container">
      <h2 class="card_heading_b">
        {{ shopifyData.secHeading }}
      </h2>
      <div class="sec_content">
        <!--    Section Image        -->
        <div class="sec_img">
          <img
            :src="(shopifyData.leftImg.src)"
            :src-placeHolder="(shopifyData.leftImg.placeHolder)"
            :alt="(shopifyData.leftImg.alt)"
          >
        </div>
        <!--    Section text        -->
        <div class="sec_text">
          <div class="sec_img">
            <img
              :src="(shopifyData.rightImg.rightImgSrc)"
              :src-placeHolder="(shopifyData.rightImg.rightPlaceHolder)"
              :alt="(shopifyData.rightImg.alt)"
            >
          </div>
          <h2 class="sec_heading">
            {{ shopifyData.crdHeading }}
          </h2>
          <h4 class="our-community_inner_heading">
            {{ shopifyData.crdSubHeading }}
          </h4>
          <p
            class="body_text"
          >
            {{ shopifyData.para }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section OUR ETHICAL PHILOSOPHY  End ========== -->
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
/* ========== Section OUR ETHICAL PHILOSOPHY Css Code Start ========== */
.sec_our_ethical_philosophy {
  padding: 60px 0 22px;
}
.sec_our_ethical_philosophy .container {
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
.sec_our_ethical_philosophy .sec_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(448px, auto));
  gap: 60px;
}
.sec_our_ethical_philosophy .sec_img img {
  line-height: 0;
}

.sec_our_ethical_philosophy .sec_content > .sec_img img {
  line-height: 0;
  height: 100%;
}

.sec_our_ethical_philosophy .sec_text {
  max-width: 289px;
  width: 100%;
}
.sec_our_ethical_philosophy .card_heading_b {
  margin-bottom: 33px;
  color: #000000;
                   text-align: center;
}

.sec_our_ethical_philosophy .sec_heading {
  line-height: 41.86px;
  color: #000000;
  margin: 27px 0 14px;
}
.sec_our_ethical_philosophy .our-community_inner_heading {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 14px;
}
.body_text{
  line-height: 19px;
}
.sec_our_ethical_philosophy .sec_info {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #000000;
}
/* ========== Section OUR ETHICAL PHILOSOPHY Css Code End ========== */

/* ========== Section OUR ETHICAL PHILOSOPHY Reponsive Css Code Start ========== */
@media only screen and (max-width: 1024px) {
  .sec_our_ethical_philosophy .sec_content {
    gap: 33px;
  }
}

@media only screen and (max-width: 991px) {
  .sec_our_ethical_philosophy .sec_content {
    grid-template-columns: 1fr;
  }
  .sec_our_ethical_philosophy .container {
    padding: 0;
  }

  .sec_our_ethical_philosophy .card_heading_b {
    display: none;
  }
  .sec_our_ethical_philosophy {
    padding: 70px 0 64px;
  }
  .sec_our_ethical_philosophy .sec_text {
    margin: 0 auto;
  }
  .sec_our_ethical_philosophy .sec_content .sec_img {
    text-align: center;
  }
  .sec_our_ethical_philosophy .sec_content .sec_text .sec_img {
    display: none;
  }
  .sec_our_ethical_philosophy .sec_heading {
    margin-top: 0;
  }
}

@media only screen and (max-width: 767px) {
  .sec_our_ethical_philosophy{
    padding: 0 0 64px;
  }
}


/* ========== Section OUR ETHICAL PHILOSOPHY Reponsive Css Code End ========== */
</style>