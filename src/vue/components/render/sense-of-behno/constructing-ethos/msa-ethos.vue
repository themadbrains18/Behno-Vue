<template>
  <!-- Section Meet Fashion Desingners Start -->
  <section class="sec_msa_ethos">
    <div class="big_container">
      <div class="sec_header">
        <h2 class="quotes_text">
          {{ shopifyData.redText }}
        </h2>
      </div>
      <div class="sec_content">
          <div class="sec_content_inner" v-for="(value, key) in shopifyData.secGrid" :key="key">
            <div class="sec_text">
              <h2 class="sec_heading">{{ value.gridHeading }}</h2>
              <h4 class="card_heading_b">{{ value.gridSubHeading }}</h4>
              <p class="body_text">{{ value.gridInfo }}</p>
            </div>
            <div class="sec_img">
              <img :src=(value.imgUrl.src) :placeholder=(value.imgUrl.placeholder) :alt=(value.imgUrl.alt) >
            </div>
          </div>
      </div>

      <div class="image_grid">
        <div class="image_grid_inner">
          <div class="img_row">
            <div class="image_caption1" v-if="shopifyData.collageData[0]">
              <img :src=(shopifyData.collageData[0].imgUrl.src) :src-placeholder=(shopifyData.collageData[0].imgUrl.placeholder)  :alt=(shopifyData.collageData[0].imgUrl.alt)>
              <p class="fig_caption">{{ shopifyData.collageData[0].imageInfo }}</p>
            </div>
            <div class="image_caption2" v-if="shopifyData.collageData[1]">
              <img :src=(shopifyData.collageData[1].imgUrl.src) :src-placeholder=(shopifyData.collageData[1].imgUrl.placeholder)  :alt=(shopifyData.collageData[1].imgUrl.alt)>
              <p class="fig_caption">{{ shopifyData.collageData[1].imageInfo }}</p>
            </div>
            <div class="image_caption3" v-if="shopifyData.collageData[2]">
              <img :src=(shopifyData.collageData[2].imgUrl.src) :src-placeholder=(shopifyData.collageData[2].imgUrl.placeholder)  :alt=(shopifyData.collageData[2].imgUrl.alt)>
              <p class="fig_caption">{{ shopifyData.collageData[2].imageInfo }}</p>
            </div>
          </div>
          <div class="img_row middle">
            <div class="image_caption4" v-if="shopifyData.collageData[3]">
              <img :src=(shopifyData.collageData[3].imgUrl.src) :src-placeholder=(shopifyData.collageData[3].imgUrl.placeholder)  :alt=(shopifyData.collageData[3].imgUrl.alt)>
              <p class="fig_caption">{{ shopifyData.collageData[3].imageInfo }}</p>
            </div>
            <div class="image_caption5" v-if="shopifyData.collageData[4]">
              <img :src=(shopifyData.collageData[4].imgUrl.src) :src-placeholder=(shopifyData.collageData[4].imgUrl.placeholder)  :alt=(shopifyData.collageData[4].imgUrl.alt)>
              <p class="fig_caption">{{ shopifyData.collageData[4].imageInfo }}</p>
            </div>
          </div>
          <div class="img_row">
            <div class="image_caption6" v-if="shopifyData.collageData[5]">
              <img :src=(shopifyData.collageData[5].imgUrl.src) :src-placeholder=(shopifyData.collageData[5].imgUrl.placeholder)  :alt=(shopifyData.collageData[5].imgUrl.alt)>
              <p class="fig_caption">{{ shopifyData.collageData[5].imageInfo }}</p>
            </div>
            <div class="image_caption7" v-if="shopifyData.collageData[6]">
              <img :src=(shopifyData.collageData[6].imgUrl.src) :src-placeholder=(shopifyData.collageData[6].imgUrl.placeholder)  :alt=(shopifyData.collageData[6].imgUrl.alt)>
              <p class="fig_caption">{{ shopifyData.collageData[6].imageInfo }}</p>
            </div>
            <div class="image_caption8" v-if="shopifyData.collageData[7]">
              <img :src=(shopifyData.collageData[7].imgUrl.src) :src-placeholder=(shopifyData.collageData[7].imgUrl.placeholder)  :alt=(shopifyData.collageData[7].imgUrl.alt)>
              <p class="fig_caption">{{ shopifyData.collageData[7].imageInfo }}</p>
            </div>
          </div>
          <div class="img_row last">
            <div class="image_caption" v-if="shopifyData.collageData[8]">
              <img :src=(shopifyData.collageData[8].imgUrl.src) :src-placeholder=(shopifyData.collageData[8].imgUrl.placeholder)  :alt=(shopifyData.collageData[8].imgUrl.alt)>
              <p class="fig_caption">{{ shopifyData.collageData[8].imageInfo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section Meet Fashion Desingners End -->
</template>

<style scoped>
.sec_msa_ethos {
  padding: 68px 0 78px;
}
.quotes_text {
  color: #ef0000;
}
.sec_content_inner.invited_showcase .body_text {
  margin-top: 14px;
}
.body_text:last-child {
  margin-bottom: 0px;
}
.card_heading_b {
  margin: 14px 0;
  text-transform: initial;
}
.sec_heading {
  line-height: 41px;
}
.image_grid{
  max-width: 1920px;
  margin: 0 auto;
}

.sec_content_inner {
  display: grid;
  align-items: center;
  grid-template-columns: 48% 48%;
  margin-top: 32px;
  gap: 32px;
  justify-content: space-between;
  padding: 0 50px;
}
.sec_text {
  max-width: 577px;
  width: 100%;
}
.body_text {
  line-height: 19px;
}
.cta_btn {
  background: #000000;
  width: fit-content;
  margin-top: 25px;
  color: #fff;
  border: 1px solid #000000;
  display: block;
}
.img_row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 25px;
}
.image_caption1 {
  max-width: 315px;
}
.image_caption2 {
  max-width: 400px;
}
.image_caption3 {
  max-width: 392px;
}
.image_caption4 {
  max-width: 654px;
}
.image_caption5 {
  max-width: 372px;
}
.img_row.middle {
  align-items: center;
}
.image_caption6 {
  max-width: 400px;
}
.image_caption7 {
  max-width: 301px;
}
.image_caption8 {
  max-width: 420px;
}
.img_row.last {
  max-width: 838px;
  margin: 63px auto 0;
}
.image_grid_inner {
  margin-top: 50px;
}
@media (hover: hover) {
  .cta_btn:hover {
    background: #fff;
    color: #000;
    border-color: #000;
  }
}
.invited_showcase .sec_img {
  max-width: 627px;
}
.sec_content_inner_inner.invited_showcase {
  margin-bottom: 22px;
  margin-top: 16px;
}

/* ==== Responsive Css Code ==== */
@media only screen and (max-width: 1024px) {
  .quotes_text {
    font-size: 60px;
  }
}

@media only screen and (max-width: 991px) {
  .sec_msa_ethos {
    padding: 45px 0 53px;
  }
  .quotes_text {
    font-size: 40px;
    padding: 0 10px 0;
  }
  .sec_header,
  .sec_content_inner{
    grid-template-columns: 1fr;
  }
  .sec_text {
    max-width: 100%;
  }

  .sec_content_inner.invited_showcase .sec_img {
    max-width: initial;
  }
  .sec_content_inner {
    padding: 0 15px;
    margin-top: 60px;
  }

  /* .sec_img {
    padding: 0 5px;
  } */

  .logo {
    text-align: center;
  }
  .logo img {
    max-width: 101px;
    margin: 0 auto;
    width: 100%;
  }
  .cta_btn {
    margin: 15px auto 0 auto;
  }
  .big_container {
    padding: 0;
  }
  .sec_content_inner.invited_showcase,
  .sec_content_inner.invited_showcase .sec_img {
    padding: 0;
  }
  .sec_content_inner.invited_showcase {
    gap: 14px;
    margin-top: 30px;
  }
  .sec_content_inner.invited_showcase .sec_text {
    padding: 0 15px;
  }
}

@media only screen and (max-width: 767px) {
  .sec_msa_ethos {
    padding: 36px 0 37px;
  }
  .quotes_text {
    font-size: 27px;
  }
  .sec_content_inner {
    margin-top: 34px;
    gap: 14px;
  }
  .sec_content_inner.invited_showcase {
    margin-top: 23px;
  }
  .img_row{
      gap: 17px;
  }
  .image_grid_inner {
    margin-top: 40px;
    padding: 0 15px;
  }
  .fig_caption {
    font-size: 10px;
  }
  .img_row.last {
    max-width: 838px;
    margin: 43px auto 0;
    padding: 0 34px;
  }
}
</style>

<style>
.sec_msa_ethos .sec_content .sec_content_inner:nth-child(even) .sec_text{
  order: 1;
}
.sec_msa_ethos .sec_content .sec_content_inner:nth-child(even) .sec_img{
    width: calc( 100% + 35px);
    margin-left: -20px;
}

</style>
<script>
export default {
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
};
</script>
