<template>
  <!-- Section Sounds Varanasi Start -->
  <section class="sec_sounds_varanasi">
        <div class="container">
          <div class="main_contenet">
        <h2 class="sec_heading">{{ shopifyData.secHeading }}</h2>
        <h4 class="card_heading_b sec_inner_heading">{{ shopifyData.subHeading }}</h4>
          <p class="body_text" v-for="(item, index) in shopifyData.paragraph" :key="index">
              {{ item.para }}
          </p>        
          </div>
      </div>
      <div class="sec_video">
          <video  autoplay="true" loop="true" muted="true" controls webkit-playsinline="true" playsinline="true" preload="none" v-for="(item, index) in shopifyData.videoData" :key="index">
            <source :src=(item.video) >
          </video>
      </div>
  </section>
  <!-- Section Sounds Varanasi Start -->
</template>

<style scoped>
.sec_sounds_varanasi {
  padding:103px 69px  145px;
  background: #000;
}
.sec_video iframe{
  border: none;
  width: 100%;
  height: 680px;
}
.sec_video iframe:first-child{
    margin-bottom: 51px;
}
.card_heading_b {
  margin-bottom: 72px;
  text-align: center;
  text-transform: initial;
  color: #fff;
}
.card_heading_b.sec_inner_heading {
  margin: 14px 0;
  text-align: start;
}
.subtitle{
  margin: 6px 0 0 18px;
}

.sec_heading {
  line-height: 44px;
  color: #fff;
}
.main_contenet {
  max-width: 716px;
  margin: 0 auto 27px auto;
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
  color: #fff;
}
.body_text:last-child {
  margin-bottom: 0px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_sounds_varanasi {
    padding: 62px  40px 89px;
  }
  .main_contenet {
    padding: 0 20px;
    margin-bottom: 35px;
  }
  .card_heading_b {
    margin-bottom: 40px;
  }
  .sec_video iframe:first-child{
    margin-bottom: 28px;
  }
  .sec_video iframe{
      height: 300px;
  }
}

@media screen and (max-width: 767px) {
  .sec_sounds_varanasi {
    padding: 42px  20px 59px;
  }
    
  .main_contenet {
    margin-bottom: 25px;
  }
  .subtitle{
    margin: 6px 0 0 10px;
  }
  .sec_video iframe{
      height: 184px;
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
