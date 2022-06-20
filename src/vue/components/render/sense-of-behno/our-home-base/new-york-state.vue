<template>
  <section class="sec_new_york_state">
    <div class="big_container">
      <div class="main_contenet">
        <h2 class="sec_heading">
          {{ shopifyData.secHeading }}
        </h2>
        <h4 class="card_heading_b">
          {{ shopifyData.subHeading }}
        </h4>
        <p
          v-for="(value, key) in shopifyData.paragraphData"
          :key="key"
          class="body_text"
        >
          {{ value.para }}
        </p>
      </div>
      <div class="sec_content">
        <div class="icon">
          <img
            v-if="shopifyData.collageData[0]"
            :src="(shopifyData.collageData[0].imgUrl.src)"
            :src-placeholder="(shopifyData.collageData[0].imgUrl.placeholder)"
            :alt="(shopifyData.collageData[0].imgUrl.alt)"
          >
        </div>
        <div class="sec_img">
          <div class="first_img">
            <img
              v-if="shopifyData.collageData[1]"
              :src="(shopifyData.collageData[1].imgUrl.src)"
              :src-placeholder="(shopifyData.collageData[1].imgUrl.placeholder)"
              :alt="(shopifyData.collageData[1].imgUrl.alt)"
            >
          </div>
          <div class="img second_img">
            <img
              v-if="shopifyData.collageData[2]"
              :src="(shopifyData.collageData[2].imgUrl.src)"
              :src-placeholder="(shopifyData.collageData[2].imgUrl.placeholder)"
              :alt="(shopifyData.collageData[2].imgUrl.alt)"
            >
          </div>
        </div>
        <div class="sec_img">
          <div class="third_img">
            <img
              v-if="shopifyData.collageData[3]"
              :src="(shopifyData.collageData[3].imgUrl.src)"
              :src-placeholder="(shopifyData.collageData[3].imgUrl.placeholder)"
              :alt="(shopifyData.collageData[3].imgUrl.alt)"
            >
          </div>
          <div class="four_img">
            <img
              v-if="shopifyData.collageData[4]"
              :src="(shopifyData.collageData[4].imgUrl.src)"
              :src-placeholder="(shopifyData.collageData[4].imgUrl.placeholder)"
              :alt="(shopifyData.collageData[4].imgUrl.alt)"
            >
          </div>
          <div class="img fifth_img">
            <img
              v-if="shopifyData.collageData[5]"
              :src="(shopifyData.collageData[5].imgUrl.src)"
              :src-placeholder="(shopifyData.collageData[5].imgUrl.placeholder)"
              :alt="(shopifyData.collageData[5].imgUrl.alt)"
            >
          </div>
        </div>
      </div>
      <div class="sec_inner_content">
        <h2 class="quotes_text">
          {{ shopifyData.redText }}
        </h2>
        <div class="sec_img">
          <img
            :src="(shopifyData.gridImage.src)"
            :src-placeholder="(shopifyData.gridImage.placeholder)"
            :alt="(shopifyData.gridImage.alt)"
          >
        </div>
      </div>
    </div>
  </section>
</template>
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

<style scoped>
.sec_new_york_state {
  padding: 84px 0;
}
.sec_content {
  margin: 0 auto 131px auto;
  padding-left: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  width: 100%;
  position: relative;
  gap: 55px;
  max-width: 1920px;
}
.icon {
  position: absolute;
  bottom: 0;
  left: -15px;
  height: 320px;
  width: 280px;
}
.sec_heading {
  line-height: 44px;
}
.main_contenet {
  max-width: 577px;
  margin: 0 auto;
  width: 100%;
}
.card_heading_b {
  margin: 14px 0;
  text-transform: initial;
}
.body_text {
  line-height: 19px;
  margin-bottom: 20px;
}
.body_text:last-child {
  margin-bottom: 0px;
}
.back_sense_behno {
  text-decoration: underline;
  display: block;
  width: fit-content;
  margin: 0 auto;
}

.sec_img {
  margin: 25px 0;
}

.quotes_text {
  color: #ef0000;
}

.sec_inner_content {
  display: grid;
  grid-template-columns: 57% 43%;
}
.sec_inner_content .sec_img {
  text-align: end;
  margin: 0;
}
.four_img {
  margin: 40px 0;
  text-align: center;
}

.four_img img {
  width: 350px;
}
.img.second_img {
  text-align: start;
  margin-top: 140px;
}
.first_img img {
  width: 465px;
}
.second_img img {
  width: 300px;
  margin: 0 0 0 auto;
}
.third_img {
  text-align: end;
}
.third_img img {
  width: 365px;
  margin: 0 0 0 auto;
}
.fifth_img {
  transform: translateX(-115px);
}
.fifth_img img {
  width: 550px;
}

/* Responsive Css Code */
@media screen and (max-width: 1200px) {
  .sec_content {
    padding-left: 100px;
  }
  .icon {
    height: 250px;
    width: 200px;
  }
  .first_img img {
    width: 365px;
  }
  .third_img img {
    width: 265px;
  }
  .four_img img {
    width: 250px;
  }
  .second_img img {
    width: 200px;
  }
  .fifth_img {
    width: 450px;
  }
}

@media screen and (max-width: 991px) {
  .sec_new_york_state {
    padding: 50px 0 0;
  }
  .main_contenet {
    padding: 0 30px;
    margin-bottom:80px;
  }
  .sec_inner_content {
    grid-template-columns: 1fr;
  }
  .sec_inner_content .quotes_text {
    padding: 0 6px;
  }

  .big_container {
    padding: 0;
  }
  .sec_content {
    padding-left: 65px;
  }
  .icon {
    height: 200px;
    width: 150px;
  }
  .img.second_img {
    margin-top: 45px;
  }
  .four_img {
    margin: 25px 0;
  }
  .sec_content .sec_img {
    width: 100%;
  }

  .first_img img {
    width: 265px;
  }
  .third_img img {
    width: 165px;
  }
  .four_img img {
    width: 150px;
  }
  .second_img img {
    width: 100px;
  }
  .fifth_img {
    width: 350px;
  }
  
}
@media screen and (max-width: 767px) {
  .sec_new_york_state {
    padding: 28px 0 0;
  }

  .sec_content {
    margin-top: 10px;
    margin-bottom:50px;
  }
  .sec_content .sec_img {
    margin: 0 0 28px;
  }
  .sec_inner_content .sec_img {
    margin: 0;
  }
  .first_img img {
    width: 200px;
  }
  .third_img img {
    width: 150px;
  }
  .four_img img {
    width: 150px;
  }
  .second_img img {
    width: 150px;
  }
  .fifth_img {
    width: 200px;

  }
  .img.fifth_img{
    transform: translateX(-40px);
  }
  .icon {
    height: 80px;
    width: 90px;
  }
  
}
@media screen and (max-width: 575px) {
  .first_img img {
    width: 130px;
  }
  .third_img img {
    width: 80px;
  }
  .four_img img {
    width: 100px;
  }
  .second_img img {
    width: 100px;
  }
  .fifth_img {
    width: 150px;

  }
}
</style>    