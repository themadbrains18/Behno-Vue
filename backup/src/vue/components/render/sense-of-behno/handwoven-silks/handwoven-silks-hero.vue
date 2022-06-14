<template>
  <!-- Section Constructing Ethos Hero Start -->
  <section class="sec_handwoven_hero">
          <h2 class="card_heading_b">{{ shopifyData.preHeading }}</h2>
        <div class="container">
          <div class="main_contenet">
        <h2 class="sec_heading">{{ shopifyData.secHeading }}</h2>
        <h4 class="card_heading_b sec_inner_heading">{{ shopifyData.subHeading }}</h4>
          <p class="body_text" v-for="(value, key) in shopifyData.paragraphData" :key="key">
              {{ value.para }}
          </p>
        </div>
      </div>
      <div class="sec_img">
          <img class="w-100" :src=(shopifyData.imgUrl.src)  :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt)>
      </div>
      <p class="subtitle">
          {{ shopifyData.afterImageText }}
      </p>
  </section>
  <!-- Constructing Ethos Hero Start -->
</template>

<style scoped>
.sec_handwoven_hero {
  padding-top: 45px;
  position: relative;
}
.sec_handwoven_hero::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height:calc(100% - 30px);
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E9E7E3 100%);
  z-index: -1;
}
.card_heading_b {
  margin-bottom: 72px;
  text-align: center;
  text-transform: initial;
}
.card_heading_b.sec_inner_heading {
  margin: 14px 0;
  text-align: start;
}
.subtitle{
    margin: 6px 0 0 18px;
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
  margin: 0 auto 83px auto;
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
}
.body_text:last-child {
  margin-bottom: 0px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_handwoven_hero {
    padding-top: 55px;
  }
  .main_contenet {
    padding: 0 20px;
    margin-bottom: 35px;
  }
  .card_heading_b {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 767px) {
  .main_contenet {
    margin-bottom: 25px;
  }
  .subtitle{
    margin: 6px 0 0 10px;
}
}
</style>

<script>
export default {
  props :{
    shopifyData : {
      type : Object,
      required : true
    }
  }
}
</script>
