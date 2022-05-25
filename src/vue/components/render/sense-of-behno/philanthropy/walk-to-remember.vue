<template>
  <!-- Section Walk To Remember  Start -->
  <section class="sec_walk_to_remember">
    <div class="big_container">
      <div class="main_contenet">
        <h2 class="sec_heading">{{shopifyData.redHeading}}</h2>
        <h4 class="card_heading_b">
          {{shopifyData.secSubHeading}}
        </h4>
        <p class="body_text" v-for="(value, key) in shopifyData.paraData" :key="key">
          {{ value.para }}
        </p>
      </div>
      <div class="sec_content">
        <div class="sec_img">
          <div class="image_grid">


            <div class="image_row">
              <div class="figcaption first" v-if="shopifyData.collageData[0]">
                <img :src=(shopifyData.collageData[0].imgUrl.src) :src-placeholder=(shopifyData.collageData[0].imgUrl.placeholder)  :alt=(shopifyData.collageData[0].imgUrl.alt)>
              </div>
              <div class="figcaption second" v-if="shopifyData.collageData[1]">
                <img :src=(shopifyData.collageData[1].imgUrl.src) :src-placeholder=(shopifyData.collageData[1].imgUrl.placeholder)  :alt=(shopifyData.collageData[1].imgUrl.alt)>
              </div>
              <div class="figcaption third" v-if="shopifyData.collageData[2]">
                <img :src=(shopifyData.collageData[2].imgUrl.src) :src-placeholder=(shopifyData.collageData[2].imgUrl.placeholder)  :alt=(shopifyData.collageData[2].imgUrl.alt)>
              </div>
            </div>
            <div class="image_row second">
              <div class="figcaption first" v-if="shopifyData.collageData[3]">
                <img :src=(shopifyData.collageData[3].imgUrl.src) :src-placeholder=(shopifyData.collageData[3].imgUrl.placeholder)  :alt=(shopifyData.collageData[3].imgUrl.alt)>
              </div>
              <div class="figcaption second" v-if="shopifyData.collageData[4]">
                <img :src=(shopifyData.collageData[4].imgUrl.src) :src-placeholder=(shopifyData.collageData[4].imgUrl.placeholder)  :alt=(shopifyData.collageData[4].imgUrl.alt)>
              </div>
              <div class="figcaption third" v-if="shopifyData.collageData[5]">
                <img :src=(shopifyData.collageData[5].imgUrl.src) :src-placeholder=(shopifyData.collageData[5].imgUrl.placeholder)  :alt=(shopifyData.collageData[5].imgUrl.alt)>
              </div>
              <div class="figcaption fourth" v-if="shopifyData.collageData[6]">
                <img :src=(shopifyData.collageData[6].imgUrl.src) :src-placeholder=(shopifyData.collageData[6].imgUrl.placeholder)  :alt=(shopifyData.collageData[6].imgUrl.alt)>
                
              </div>
            </div>
            
            <div class="image_row third">
              <div class="figcaption first" v-if="shopifyData.collageData[7]">
                <img :src=(shopifyData.collageData[7].imgUrl.src) :src-placeholder=(shopifyData.collageData[7].imgUrl.placeholder)  :alt=(shopifyData.collageData[7].imgUrl.alt)>
              </div>
              <div class="figcaption second" v-if="shopifyData.collageData[8]">
                <img :src=(shopifyData.collageData[8].imgUrl.src) :src-placeholder=(shopifyData.collageData[8].imgUrl.placeholder)  :alt=(shopifyData.collageData[8].imgUrl.alt)>
              </div>
              <div class="figcaption third" v-if="shopifyData.collageData[9]">
                <img :src=(shopifyData.collageData[9].imgUrl.src) :src-placeholder=(shopifyData.collageData[9].imgUrl.placeholder)  :alt=(shopifyData.collageData[9].imgUrl.alt)>
              </div>
              <div class="figcaption fourth" v-if="shopifyData.collageData[10]">
                <img :src=(shopifyData.collageData[10].imgUrl.src) :src-placeholder=(shopifyData.collageData[10].imgUrl.placeholder)  :alt=(shopifyData.collageData[10].imgUrl.alt)>
              </div>
            </div>
            <div class="image_row fourth">
              <div class="figcaption first" v-if="shopifyData.collageData[11]">
                <img :src=(shopifyData.collageData[11].imgUrl.src) :src-placeholder=(shopifyData.collageData[11].imgUrl.placeholder)  :alt=(shopifyData.collageData[11].imgUrl.alt)>
              </div>
              <div class="figcaption second" v-if="shopifyData.collageData[12]">
                <img :src=(shopifyData.collageData[12].imgUrl.src) :src-placeholder=(shopifyData.collageData[12].imgUrl.placeholder)  :alt=(shopifyData.collageData[12].imgUrl.alt)>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section Walk To Remember  End -->
</template>
<style scoped>
.sec_walk_to_remember {
    padding-top: 79px;
  }
.sec_heading {
  line-height: 44px;
  color: #FB0000;
}
.main_contenet {
  max-width: 565px;
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

.sec_img {
  margin: 10px 0;
}
.image_row{
  display: flex;
  align-items: flex-start;
  gap: 50px;
}
.figcaption.first {
    max-width: 225px;
    margin-top: 40px;
}
.figcaption.second {
    max-width: 260px;
}
.figcaption.third{
    max-width: 435px;
    margin-top: 40px;
}
.image_row.second{
  align-items: center;
  justify-content: space-evenly;
}
.image_row.second .first{
  max-width: 248px;
}
.image_row.second .second{
  max-width: 303px;
}
.image_row.second .third{
  max-width: 300px ;
}
.image_row.second .fourth{
  max-width: 170px;
  align-self: flex-start;
}
.image_row.third{
  justify-content: space-between;
}
.image_row.third .first{
  align-self: flex-end;
  margin-bottom: -50px;
}
.image_row.third .second{
  max-width:176px;
  align-self: center;
}
.image_row.third .third{
  max-width:250px;
}
.image_row.third .fourth{
  max-width:231px;

}
.image_row.fourth {
  justify-content: flex-end;
  margin-top: 30px;
  gap: 220px;
}
.image_row.fourth .first{
  max-width: 284px;
  align-self: flex-start;
  margin-top: -42px;
}
.image_row.fourth .second{
  max-width: 512px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_walk_to_remember {
    padding-top: 59px;
  }
  .big_container {
    padding: 0 ;
  }
  .main_contenet {
    padding: 0 20px;
  }
  .image_row.fourth{
    /* margin-top: 0; */
    gap: 60px;
  }
  .image_row.fourth .first{
      align-self: center;
      margin-top: 0px;
  }
}
@media screen and (max-width: 767px) {
  .sec_walk_to_remember {
    padding-top: 44px;
  }
  .image_grid {
      padding: 0 10px;
  }
  .image_row.third .first{
      margin-bottom: -10px;
  }
  .image_row[data-v-45ec762c] {
      gap: 15px;
  }
  .image_row.fourth .first{
      max-width: 154px;
  }
  .image_row.fourth .second{
      max-width: 242px;
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