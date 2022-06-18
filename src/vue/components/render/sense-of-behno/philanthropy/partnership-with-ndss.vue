<template>
  <!-- section lives weavers Start -->
  <section class="sec_partnership_with_ndss">
    <div class="big_container">
      <div class="sec_header">
        <h2 class="quotes_text">
          {{shopifyData.redText}}
        </h2>
        <p class="body_text">{{shopifyData.secInfo}}</p>
      </div>
      <div class="sec_video">
        <template v-if="shopifyData.checkImage === 'true'">
            <video  controls autoplay="true" loop="true" muted="true"  controlsList="nodownload" disablepictureinpicture webkit-playsinline="true" playsinline="true" preload="none" >
              <source :src=(shopifyData.videolink) >
            </video>
          </template>
          <template v-else>
            <img  :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt) />
          </template>
      </div>
    </div>
  </section>
  <!-- section lives weavers End -->
</template>

<style scoped>
.sec_partnership_with_ndss {
  padding-top: 110px;
}
.body_text{ 
    line-height: 19px;
    margin: 20px 0 43px;
}
.sec_partnership_with_ndss .big_container {
  padding: 0 33px;
}
.quotes_text {
  color: #ef0000;
}

.sec_video{
    padding: 0 45px;    
}



/* Responsive Css Code */

@media only screen and (max-width: 1024px) {
  .sec_partnership_with_ndss {
    padding-top: 90px;
  }
  .body_text{
    margin: 10px 0 40px;
  }
  .quotes_text {
    font-size: 60px;
  }
  .sec_grid_img {
    padding: 0 35px;
  }
}
@media screen and (max-width: 991px) {
  .quotes_text {
    font-size: 40px;
  }
  .sec_partnership_with_ndss {
    padding-top: 60px;
  }
  
  .sec_grid_img {
    padding: 0 25px;
  }
  .sec_video{
    padding: 0 20px;
  }
}

@media screen and (max-width: 767px) {
  .sec_partnership_with_ndss {
    padding-top: 45px;
  }
  .quotes_text {
    font-size: 27px;
  }

  .sec_grid_img {
    row-gap: 5px;
    column-gap: 2px;
    padding: 0;
  }
  .sec_partnership_with_ndss .big_container {
    padding: 0 8px;
  }
  .sec_video{
    padding: 0 2px;
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