<template>
  <!-- ========== Section Forming real relationships Start ========== -->
  <section class="sec_forming_relationship">
    <div class="container">
      <div class="sec_content">
        <!--    Section text        -->
        <div class="sec_text">
          <h2 class="sec_heading">{{ shopifyData.heading }}</h2>
          <h4 class="card_heading_b">{{ shopifyData.subHeading }}</h4>
          <p
            class="body_text"
          >{{ shopifyData.para }}</p>
          <a :href=(shopifyData.link) class="cta_btn cta_btn-white ">{{ shopifyData.linkText }}</a>
        </div>
        <!--    Section Image        -->
        <div class="sec_img">
          <a :href=(shopifyData.link) >
            <template v-if="shopifyData.showVideo === 'true'">
              <video  autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true" preload="none" >
                <source :src=(shopifyData.videoUrl) >
              </video>
            </template>
            <template v-else>
              <img
                :src=(shopifyData.imgUrl.src)
                :src-placeholder=(shopifyData.imgUrl.placeholder)
                :alt=(shopifyData.imgUrl.alt)
                />
            </template>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section Forming real relationships End ========== -->
</template>

<style scoped>
/* ========== Section Forming real relationships Css Code Start  ========== */
.sec_forming_relationship {
  padding: 60px 0;
  background: #000000;
}

.sec_heading{
  color: #fff;
  line-height: 41px;
}
.sec_forming_relationship .container {
  max-width: 1056px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
}

.sec_forming_relationship .sec_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, auto));
  gap: 60px;
  justify-content: space-between;
  align-items: center;
}

.sec_forming_relationship .sec_text_heading {
  font-weight: 400;
  font-size: 46px;
  line-height: 91%;
  color: #ffffff;
}

.sec_forming_relationship .card_heading_b {
  line-height: 18px;
  color: #ffffff;
  margin: 14px 0;
  text-transform: initial;
}

.sec_forming_relationship .body_text {
  line-height: 19px;
  color: #ffffff;
}

.sec_forming_relationship .cta_btn {
  background: #ffffff;
  border: 1px solid #000000;
  margin-top: 35px;
}
.sec_forming_relationship .sec_text {
  max-width: 403px;
  width: 100%;
}

@media (hover: hover) {
  .cta_btn:hover {
    background: #000;
    color: #fff;
    border-color: #fff;
  }
}
/* ========== Section Forming real relationships Css Code End  ========== */

/* ========== Section Forming real relationships Responsive Css Code Start  ========== */
@media only screen and (max-width: 991px) {
  .sec_forming_relationship {
    padding: 30px 0 50px;
  }
  .sec_forming_relationship .sec_content {
    gap: 54px;
    justify-content: initial;
    grid-template-columns: 1fr;
  }
  .sec_forming_relationship .sec_text {
    order: 2;
    margin: 0 auto;
    max-width: 100%;
    padding:  0 25px;
  }
  .sec_forming_relationship .sec_img {
    text-align: center;
  }
  .sec_forming_relationship .cta_button {
    margin: 30px auto 0;
    width: fit-content;
    display: block;
  }
  .cta_btn{
    margin: 0 auto;
    display: block;
    width: fit-content;
  }
}

@media only screen and (max-width: 767px) {
  .sec_forming_relationship .container {
    padding: 0 15px;
  }
  .sec_forming_relationship {
    padding: 22px 0 50px;
  }
}

/* ========== Section Forming real relationships Responsive Css Code End  ========== */
</style>

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