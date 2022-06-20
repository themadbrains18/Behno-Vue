<template>
  <section class="sublime_saturdays_sec">
    <div class="big_container">
      <!-- Sec Content -->
      <div class="sec_content">
        <div class="sec_content_inner">
          <div class="sec_text">
            <h2 class="sec_heading">
              {{ shopifyData.secHeading }}
            </h2>
            <h4 class="card_heading_b">
              {{ shopifyData.secSubHeading }}
            </h4>
            <p
              v-for="(item, index) in shopifyData.paragraph"
              :key="index"
              class="body_text"
            >
              {{ item.para }}
            </p>
          </div>
        </div>
        <div class="image_collarge">
          <div class="first_column">
            <div class="image_wrapper first">
              <div
                v-if="shopifyData.collageData[0]"
                class="fig_cption_inner first"
              >
                <img
                  class="img_item_1"
                  :src="(shopifyData.collageData[0].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[0].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[0].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[0].imageInfo }}
                </p>
              </div>
              <div
                v-if="shopifyData.collageData[1]"
                class="fig_cption_inner second"
              >
                <img
                  class="img_item_2"
                  :src="(shopifyData.collageData[1].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[1].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[1].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[1].imageInfo }}
                </p>
              </div>
            </div>
            <div class="image_wrapper second">
              <div
                v-if="shopifyData.collageData[2]"
                class="fig_cption_inner"
              >
                <img
                  class="img_item_3"
                  :src="(shopifyData.collageData[2].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[2].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[2].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[2].imageInfo }}
                </p>
              </div>
              <div
                v-if="shopifyData.collageData[3]"
                class="fig_cption_inner"
              >
                <img
                  class="img_item_4"
                  :src="(shopifyData.collageData[3].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[3].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[3].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[3].imageInfo }}
                </p>
              </div>
            </div>
          </div>
          <div class="second_column">
            <div class="image_wrapper third">
              <div
                v-if="shopifyData.collageData[4]"
                class="fig_cption_inner inner-first"
              >
                <img
                  class="img_item_5"
                  :src="(shopifyData.collageData[4].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[4].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[4].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[4].imageInfo }}
                </p>
              </div>
              <div
                v-if="shopifyData.collageData[5]"
                class="fig_cption_inner inner-second"
              >
                <img
                  class="img_item_6"
                  :src="(shopifyData.collageData[5].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[5].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[5].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[5].imageInfo }}
                </p>
              </div>
              <div
                v-if="shopifyData.collageData[6]"
                class="fig_cption_inner inner-third"
              >
                <img
                  class="img_item_7"
                  :src="(shopifyData.collageData[6].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[6].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[6].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[6].imageInfo }}
                </p>
              </div>
            </div>
          </div>
          <div class="third_column">
            <div class="image_wrapper fourth">
              <div
                v-if="shopifyData.collageData[7]"
                class="fig_cption_inner inner-fourth"
              >
                <img
                  class="img_item_8"
                  :src="(shopifyData.collageData[7].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[7].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[7].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[7].imageInfo }}
                </p>
              </div>
              <div
                v-if="shopifyData.collageData[8]"
                class="fig_cption_inner inner-fifth"
              >
                <img
                  class="img_item_9"
                  :src="(shopifyData.collageData[8].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[8].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[8].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[8].imageInfo }}
                </p>
              </div>
              <div
                v-if="shopifyData.collageData[9]"
                class="fig_cption_inner inner-sixth"
              >
                <img
                  class="img_item_10"
                  :src="(shopifyData.collageData[9].imgUrl.src)"
                  :src-placeholder="(shopifyData.collageData[9].imgUrl.placeholder)"
                  :alt="(shopifyData.collageData[9].imgUrl.alt)"
                >
                <p class="fig_caption">
                  {{ shopifyData.collageData[9].imageInfo }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
// Import Swiper Vue.js components
export default {
   props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>
.big_container{
    max-width: 1440px;
}
.sublime_saturdays_sec{
    padding: 120px 0 79px;
}
.sec_text {
    max-width: 523px;
    margin: 0 0 0 97px;
}
.body_text{
    margin-bottom: 20px;
}
.body_text:last-child{
    margin-bottom: 0;
}

.image_collarge img{
    width: 100%;
}
.first_column{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.image_wrapper.first{
    display: flex;
    justify-content: space-between;
    gap: 15px;
}
.fig_cption_inner.first{
    max-width: 374px;
    margin-top: 89px;
}
.fig_cption_inner.second{
    max-width: 310px;
    margin-top: 171px;
}
.img_item_3{
    max-width: 522px;
    margin-top: -210px;
}
.img_item_2 + .fig_caption {
    padding-left: 22px;
}
.img_item_3 + .fig_caption {
    padding-left: 12px;
}
.image_collarge{
    padding: 0 20px;
}
.img_item_4 {
    max-width: 360px;
}
.image_wrapper.second {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
}
.image_wrapper.third,
.image_wrapper.fourth
{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 60px;
}
.image_wrapper.fourth {
    margin-top: -60px;
}
.img_item_5 {
    max-width: 491px;
}
.img_item_6{
    max-width: 260px;
}
.img_item_7{
    max-width: 521px;
}
.inner-first{
    margin-bottom: 140px;
}
.inner-second {
    align-self: center;
}
.inner-third {
    align-self: flex-end;
}
.inner-fourth {
    max-width: 435px;
    align-self: flex-start;
    margin-bottom: 70px;
}
.inner-fifth {
    max-width: 362px;
    align-self: center;
}
.inner-sixth {
    max-width: 402px;
    align-self: flex-end;
}
/* ===== RESPONSIVE BREAKPOINTS START ===== */
@media screen and (max-width: 1200px) {
    .image_wrapper.fourth{
        margin-top: -30px;
    }
    .sec_text{
        max-width: 390px;
        margin: 0;
    }
}
@media screen and (max-width: 767px) {  
    .sublime_saturdays_sec{
        padding: 30px 0 40px;
        position: relative;
        overflow-x: hidden;
    }
    .sec_heading {
        width: calc(100% + 6px);
    }
    .sec_text{
        max-width: 100%;
        margin-bottom: 20px;
    }
    .img_item_3{
        margin: 0;
    }
    .fig_cption_inner.second{
        margin-top: 100px;
    }
    .fig_cption_inner.first{
        margin-top: 40px;
    }
    .image_wrapper.second {
        gap: 30px;
    }
    .fig_caption {
        font-size: 10px;
    }
    .image_collarge{
        padding: 0;
    }
    .img_item_2 + .fig_caption,
    .img_item_3 + .fig_caption
    {
        padding: 0;
    }
    .image_wrapper.third,
    .image_wrapper.fourth
    {
        margin-top: 10px;
    }
    .inner-first{
        margin-bottom: 40px;
    }

    .inner-fourth{
        margin-bottom: 20px;
        margin-left: -10px;
    }
}
</style>