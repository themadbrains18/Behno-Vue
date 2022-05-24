<template>
    <section class="Urbanism_and_development_sec">
        <div class="big_container">
            <!-- sec content -->
            <div class="sec_content">
                <div class="sec_content_inner">
                    <div class="sec_img">
                        <div class="image_grid">
                            <img :src=(shopifyData.SecImg.src) :placeholder=(shopifyData.SecImg.placeholder) :alt=(shopifyData.SecImg.alt) />
                        </div>
                    </div>
                    <div class="sec_text">
                        <h2 class="sec_heading">{{ shopifyData.secHeading }}</h2>
                        <h4 class="card_heading_b">{{ shopifyData.secSubHeading }}</h4>
                        <p class="body_text" v-for="(item, index) in shopifyData.paragraph" :key="index">
                            {{ item.para }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.Urbanism_and_development_sec{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E9E7E3 100%);
    padding: 200px 0;
}
.sec_content_inner{
    display: flex;
    align-items: center;
    gap: 107px;
}
.sec_content_inner > div {
    width: 50%;
}
.body_text{
    margin-bottom: 20px;
}
.body_text:last-child{
    margin-bottom: 0;
}
.image_grid img {
    width: 100%;
}
.sec_content {
    padding: 0 50px;
}
/* ===== RESPONSIVE BREAKPOINTS START ===== */
@media screen and (max-width: 1024px) {
    .sec_content_inner{
        gap: 30px;
    }
    .sec_content{
        padding: 0;
    }
}
@media screen and (max-width: 767px) {
    .sec_content_inner{
        flex-direction: column;
    }
    .sec_content_inner> div{
        width: 100%;
    }
    .sec_text {
        padding: 0 20px;
    }
    .Urbanism_and_development_sec {
        padding: 20px 0;
    }
}
</style>

<script>
export default{
   props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
}
</script>
