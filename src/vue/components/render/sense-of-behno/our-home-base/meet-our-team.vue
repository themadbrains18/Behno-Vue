<template>
  <!-- Section Garment Ethical Start  -->
  <section class="sec_meet_our_team">
    <div class="big_container">
      <div class="sec_content">
        <div class="sec_img">
          <a :href=(shopifyData.link) >
            <video width="" height="" autoplay="" loop="" muted="" webkit-playsinline=""  playsinline="" preload="none">
              <source  :src=(shopifyData.videoUrl)>
            </video>
          </a>
        </div>
        <div class="sec_text">
          <a :href=(shopifyData.link) class="cta_btn cta_btn-white">{{ shopifyData.ctaText }}</a>
        </div>
      </div>
    </div>
  </section>

  <BackToTop/>
  <!-- Section Garment Ethical End -->
</template>
<style scoped>
.sec_meet_our_team {
  background: #000000;
  padding: 90px 0;
}
.big_container {
  padding: 0 80px;
}
.sec_content {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  gap: 81px;
}
.sec_text {
  margin: 0 auto;
}
.sec_heading {
  margin-bottom: 4px;
  font-weight: 400;
}
.sec_heading,
.body_text {
  color: #fff;
}
iframe {
  width: 695px;
  height: 390px;
  border: none;
}

/* Resposive css Code */

@media screen and (max-width: 991px) {
  .sec_meet_our_team {
    padding: 50px 0 60px ;
  }
  .sec_content {
    grid-template-columns: 1fr;
  }
  .big_container {
    padding: 0 15px;
  } 
  .sec_img {
    text-align: center;
  }
  .sec_text {
    padding: 0 20px;
    max-width: 100%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 767px) {
  .sec_meet_our_team {
    padding: 28px 0 76px;
  }
}
</style>
<script>
import BackToTop from "../../back-to-top.vue"
export default {
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
  components : {
        BackToTop
    }
};
</script>

