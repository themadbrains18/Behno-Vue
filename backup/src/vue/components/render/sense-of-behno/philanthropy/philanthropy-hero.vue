<template>
  <!-- Section Constructing Ethos Hero Start -->
  <section class="sec_philanthropy_hero">
    <h2 class="card_heading_b">{{ shopifyData.preHeading }}</h2>
    <div class="container">
      <div class="main_contenet">
        <h2 class="sec_heading">{{ shopifyData.secHeading }}</h2>
        <p class="body_text" v-for="(value, key) in shopifyData.paraData" :key="key">
          {{ value.para }}
        </p>
      </div>
    </div>
    <div class="sec_img">
      <img
        :src=(shopifyData.imgUrl.src)
        :src-placeholder =(shopifyData.imgUrl.placeholder)
        :alt=(shopifyData.imgUrl.alt)
      />
    </div>
    <p class="subtitle">{{ shopifyData.afterImageText }}</p>
  </section>
  <!-- Constructing Ethos Hero Start -->
</template>

<style scoped>
.sec_philanthropy_hero {
  padding-top: 45px;
  position: relative;
}
.sec_philanthropy_hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 100px);
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e9e7e3 100%);
  z-index: -1;
}
.card_heading_b {
  margin-bottom: 45px;
  text-align: center;
  text-transform: initial;
}
.card_heading_b.sec_inner_heading {
  margin: 14px 0;
  text-align: start;
}
.subtitle {
  margin: 6px 0 0 18px;
  max-width: 683px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #F70000;
}

.sec_video iframe {
  width: 100%;
  height: 715px;
}
.sec_heading {
  line-height: 44px;
}
.main_contenet {
  max-width: 716px;
  margin: 0 auto 60px auto;
  width: 100%;
}

.sec_content {
  display: grid;
  grid-template-columns: 28% 64%;
  align-items: center;
  margin-top: 34px;
  gap: 30px;
}

.body_text {
  line-height: 19px;
  margin-bottom: 20px;
  margin-top: 14px;
}
.body_text:last-child {
  margin-bottom: 0px;
}
.sec_img{
  line-height: 0;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_philanthropy_hero {
    padding-top: 60px;
  }
  .main_contenet {
    padding: 0 20px;
    margin-bottom: 83px;
  }
  .card_heading_b {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 767px) {
  .subtitle {
    margin: 7px 7px 0 8px;
  }
  .main_contenet{
      padding: 0 24px;
  }
}
</style>

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

