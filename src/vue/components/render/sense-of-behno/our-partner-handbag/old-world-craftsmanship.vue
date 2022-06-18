<template>
    <section class="old_world_craftsmanship_sec">
        <div class="big_container">
            <!-- sec content -->
            <div class="sec_content">
                <div class="sec_content_inner">
                    <div class="sec_text">
                        <h2 class="sec_heading">{{ shopifyData.secHeading }}</h2>
                        <h4 class="card_heading_b">{{ shopifyData.secSubHeading }}</h4>
                        <p class="body_text" v-for="(item, index) in shopifyData.paragraph" :key="index"> {{ item.para }}</p>
                    </div>
                    <div class="sec_img">
                        <div class="image_grid">
                            <template v-for="(value, key) in shopifyData.gridImages" :key="key">
                                <img :src=(value.gridImg.src) :placeholder=(value.gridImg.placeholder) :alt=(value.gridImg.alt)>
                            </template>
                        </div>
                    </div>
                </div>  
                <div class="sec_content_inner bottom">
                    <div class="sec_text">
                        <h2 class="quotes_text">
                            {{ shopifyData.redText }}
                        </h2>
                    </div>
                    <div class="sec_img">
                        <img :src=(shopifyData.secImg.src) :placeholder=(shopifyData.secImg.placeholder) :alt=(shopifyData.secImg.alt)>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.old_world_craftsmanship_sec{
    padding: 40px 0 165px;
}
.body_text{
    margin-bottom: 20px;
}
.body_text:last-child{
    margin-bottom: 0;
}
.sec_content_inner{
    display: flex;
    align-items: center;
    gap: 101px;
}
.image_grid{   
    display: grid;
    grid-template-columns: repeat(3,183px);
    gap: 30px;
}
.quotes_text{
    color: #EF0000;
}

.sec_content_inner > div {
    width: 50%;
}
.sec_content_inner.bottom{
    margin-top: 64px;
}
.sec_content_inner.bottom .sec_img img{
    width: 100%;
    margin-left:15px;
}
.sec_text{
    max-width: 565px;
    width: 100%;
    margin: 0 0 0 auto;
}
.sec_heading{
    line-height: 41px;
}
.card_heading_b{
    line-height: 18px;
}

/* ===== RESPONSIVE BREAKPOINTS START ===== */
@media screen and (max-width: 1290px) {
    .sec_content_inner {
        flex-direction: column;
        gap: 50px;
    }
    .sec_content_inner > div {
        width: 100%;
    }
    .image_grid{
        justify-content: center;
    }
    .sec_text{
        margin: 0 auto;
    }
}

@media screen and (max-width: 1024px) {
    .quotes_text{
        font-size: 45px;
    }
}
@media screen and (max-width: 767px) {
    .old_world_craftsmanship_sec{
        padding: 30px 0 74px;
    }
    .image_grid{
        grid-template-columns: repeat(3,108px);
        gap: 15px 20px;
    }    
    .sec_content_inner.bottom{
        margin-top: 32px;
    }
    .quotes_text{
        font-size: 27px;
    }
    .sec_heading{
        overflow-wrap: break-word;
    }
    .sec_text {
        padding: 0 21px;
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
