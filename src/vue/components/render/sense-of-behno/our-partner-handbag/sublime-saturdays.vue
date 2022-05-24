<template>
    <section class="sublime_saturdays_sec">
        <div class="big_container">
            <!-- Sec Content -->
            <div class="sec_content">
                <div class="sec_content_inner">
                    <div class="sec_text">
                        <h2 class="sec_heading">{{ shopifyData.secHeading }}</h2>
                        <h4 class="card_heading_b">{{ shopifyData.secSubHeading }}</h4>
                        <p class="body_text" v-for="(item, index) in shopifyData.paragraph" :key="index">
                            {{ item.para }}
                        </p>
                    </div>
                </div>
                <div class="image_collarge">
                    <div class="first_column">
                        <div class="image_wrapper first">
                            <div class="fig_cption_inner first">
                                <img class="img_item_1" :src=(shopifyData.collargeImg1.src) :placeholder=(shopifyData.collargeImg1.placeholder) :alt=(shopifyData.collargeImg1.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo1 }}</p>
                            </div>
                            <div class="fig_cption_inner second">
                                <img  class="img_item_2" :src=(shopifyData.collargeImg2.src) :placeholder=(shopifyData.collargeImg2.placeholder) :alt=(shopifyData.collargeImg2.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo2 }}</p>
                            </div>
                        </div>
                        <div class="image_wrapper second">
                            <div class="fig_cption_inner">
                                <img class="img_item_3" :src=(shopifyData.collargeImg3.src) :placeholder=(shopifyData.collargeImg3.placeholder) :alt=(shopifyData.collargeImg3.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo3 }}</p>
                            </div>
                            <div class="fig_cption_inner">
                                <img class="img_item_4" :src=(shopifyData.collargeImg4.src) :placeholder=(shopifyData.collargeImg4.placeholder) :alt=(shopifyData.collargeImg4.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo4 }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="second_column">
                        <div class="image_wrapper third">
                            <div class="fig_cption_inner inner-first">
                                <img class="img_item_5" :src=(shopifyData.collargeImg5.src) :placeholder=(shopifyData.collargeImg5.placeholder) :alt=(shopifyData.collargeImg5.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo5 }}</p>
                            </div>
                            <div class="fig_cption_inner inner-second">
                                <img class="img_item_6" :src=(shopifyData.collargeImg6.src) :placeholder=(shopifyData.collargeImg6.placeholder) :alt=(shopifyData.collargeImg6.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo6 }}</p>
                            </div>
                            <div class="fig_cption_inner inner-third">
                                <img class="img_item_7" :src=(shopifyData.collargeImg7.src) :placeholder=(shopifyData.collargeImg7.placeholder) :alt=(shopifyData.collargeImg7.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo7 }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="third_column">
                        <div class="image_wrapper fourth">
                            <div class="fig_cption_inner inner-fourth">
                                <img class="img_item_8" :src=(shopifyData.collargeImg8.src) :placeholder=(shopifyData.collargeImg8.placeholder) :alt=(shopifyData.collargeImg8.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo8 }}</p>
                            </div>
                            <div class="fig_cption_inner inner-fifth">
                                <img class="img_item_9" :src=(shopifyData.collargeImg9.src) :placeholder=(shopifyData.collargeImg9.placeholder) :alt=(shopifyData.collargeImg9.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo9 }}</p>
                            </div>
                            <div class="fig_cption_inner inner-sixth">
                                <img class="img_item_10" :src=(shopifyData.collargeImg10.src) :placeholder=(shopifyData.collargeImg10.placeholder) :alt=(shopifyData.collargeImg10.alt)>
                                <p class="fig_caption">{{ shopifyData.imgInfo10 }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <BackToTop />
</template>


<style scoped>
.sublime_saturdays_sec{
    padding: 120px 0 89px;
}
.sec_text {
    max-width: 523px;
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
    }
}
@media screen and (max-width: 767px) {
    .sublime_saturdays_sec{
        padding: 30px 0 45px;
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
        font-size: 8px;
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

<script>
// Import Swiper Vue.js components
import BackToTop from "../../back-to-top.vue";
export default {
  components: {
    BackToTop
  },
   props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
};
</script>