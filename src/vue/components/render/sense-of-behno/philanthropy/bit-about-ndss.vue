<template>
  <!-- Section Constructing Ethos Hero Start -->
  <section class="sec_bit_about_ndss">
    <div class="big_container">
      <div class="sec_content">

        <template v-for="(value, key) in shopifyData.gridImage" :key="key">
            <div class="sec_img" v-if="key <= 4">
                <img
                  :src=(value.imgUrl.src)
                  :src-placeholder=(value.imgUrl.placeholder)
                  :alt=(value.imgUrl.alt)
                />
            </div>
        </template>

        <!-- Section Main Content Grid Box Start -->
          <div class="main_contenet">
            <div class="inner_text">
              <h2 class="sec_heading">{{shopifyData.redText}}</h2>
              <h4 class="card_heading_b sec_inner_heading">
                {{shopifyData.subHeading}}
              </h4>
              <p class="body_text">
                {{shopifyData.para}}
              </p>
            </div>
          </div>
        <!-- Section Main Content Grid Box Start -->
        <template v-for="(value, key) in shopifyData.gridImage" :key="key">
            <div class="sec_img" v-if="key >= 5">
                <img
                  :src=(value.imgUrl.src)
                  :src-placeholder=(value.imgUrl.placeholder)
                  :alt=(value.imgUrl.alt)
                />
            </div>
        </template>

      </div>


      <p class="subtitle">
        {{ shopifyData.afterGridText }}
      </p>
    </div>
  </section>
  <!-- Constructing Ethos Hero Start -->
</template>

<style scoped>
.sec_bit_about_ndss {
  padding-top: 78px;
}
.sec_img {
  line-height: 0;
}
.big_container {
  padding: 0 15px;
}
.sec_content{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
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
.subtitle {
  margin: 4px 0 0 15px;
}

.sec_video iframe {
  width: 100%;
  height: 715px;
}
.sec_heading {
  line-height: 44px;
  color: #fb0000;
}
.main_contenet {
  grid-column: span 2;
  display: grid;
  place-items: center;
  padding: 35px 64px;
}

.body_text {
  line-height: 19px;
  margin-bottom: 20px;
}
.body_text:last-child { 
  margin-bottom: 0px;
}
/* Responsive Css Code */
@media screen and (max-width: 1200px) {
  .main_contenet {
    padding: 20px 40px;
  }
}

@media screen and (max-width: 1024px) {
  .main_contenet {
    padding: 10px 20px;
  }
}

@media screen and (max-width: 991px) {
  .sec_bit_about_ndss {
    padding-top: 55px;
  }
  .main_contenet {
    padding: 0;
    margin: 40px 0 30px;
  }
  .card_heading_b {
    margin-bottom: 40px;
  }
  .sec_img {
    display: none;
  }
  .sec_img:first-child,
  .sec_img:nth-child(2) {
    display: block;
  }
  .sec_img:nth-child(3) {
    display: block;
    order: 3;
  }
  .sec_img:nth-child(4) {
    display: block;
    order: 4;
  }
  .big_container {
    padding: 0 9px;
  }
  .sec_content{
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }
  .subtitle {
    margin: 6px 0 0 9px;
  }
}

@media screen and (max-width: 767px) {
  .main_contenet {
    margin-bottom: 25px;
  }
  .sec_bit_about_ndss {
    padding-top: 46px;
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