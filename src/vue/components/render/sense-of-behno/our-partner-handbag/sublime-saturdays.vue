<template>
    <section class="sublime_saturdays_sec">
        <div class="big_container">
            <!-- Sec Content -->
            <div class="sec_content">
                <div class="sec_content_inner">
                    <div class="sec_text">
                        <h2 class="sec_heading">Sublime Saturdays.</h2>
                        <h4 class="card_heading_b">The hands and tools.</h4>
                        <p class="body_text">The behno team takes time on Saturdays to explore and absorb Nashik and its locality – its markets, temples, local vineyards, caves, and all the serene sights making the city so special.</p>
                        <p class="body_text">The colors of the city, its vibrancy, its people, and its peri-urban landscape foster an intimacy with a space unique to Nashik.</p>
                    </div>
                </div>
                <div class="image_collarge">
                    <div class="first_column">
                        <div class="image_wrapper first">
                            <div class="fig_cption_inner first">
                                <img class="img_item_1" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/3-NASHIK.jpg?v=1653031573" alt="error">
                                <p class="fig_caption">Finding Inspiration in small, unexpected corners while exploring Nashik.</p>
                            </div>
                            <div class="fig_cption_inner second">
                                <img  class="img_item_2" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/4-NASHIK.jpg?v=1653031573" alt="error">
                                <p class="fig_caption">A woman holding her rain poncho in the city center.</p>
                            </div>
                        </div>
                        <div class="image_wrapper second">
                            <div class="fig_cption_inner">
                                <img class="img_item_3" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/2-NASHIK.jpg?v=1653031574" alt="error">
                                <p class="fig_caption">Sunrise form the Pandaoleni Cavas.</p>
                            </div>
                            <div class="fig_cption_inner">
                                <img class="img_item_4" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/5-NASHIK.jpg?v=1653031573" alt="error">
                                <p class="fig_caption">The terrain on the outskirts of Nashik</p>
                            </div>
                        </div>
                    </div>
                    <div class="second_column">
                        <div class="image_wrapper third">
                            <div class="fig_cption_inner inner-first">
                                <img class="img_item_5" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/6-NASHIK.jpg?v=1653031573" alt="error">
                                <p class="fig_caption">Views of Rock cut Caves on early morning hikes.</p>
                            </div>
                            <div class="fig_cption_inner inner-second">
                                <img class="img_item_6" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/7-NASHIK.jpg?v=1653031573" alt="error">
                                <p class="fig_caption">Sunset From our Factory.</p>
                            </div>
                            <div class="fig_cption_inner inner-third">
                                <img class="img_item_7" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/8-NASHIK.jpg?v=1653031573" alt="error">
                                <p class="fig_caption">Sunrise form the Pandaoleni Caves , Nashik.</p>
                            </div>
                        </div>
                    </div>
                    <div class="third_column">
                        <div class="image_wrapper fourth">
                            <div class="fig_cption_inner inner-fourth">
                                <img class="img_item_8" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/9-NASHIK.jpg?v=1653031574" alt="error">
                                <p class="fig_caption">A snapshot of our morning drive From Mumbai to Nashik.</p>
                            </div>
                            <div class="fig_cption_inner inner-fifth">
                                <img class="img_item_9" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/10-NASHIK.jpg?v=1653031573" alt="error">
                                <p class="fig_caption">An evening at Sula Vineyards , Where the Behno team relaxed with cowworkers From this factory.</p>
                            </div>
                            <div class="fig_cption_inner inner-sixth">
                                <img class="img_item_10" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/11-NASHIK.jpg?v=1653031573" alt="error">
                                <p class="fig_caption">A flower vendor outside the Trimbakeshwar temple.</p>
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