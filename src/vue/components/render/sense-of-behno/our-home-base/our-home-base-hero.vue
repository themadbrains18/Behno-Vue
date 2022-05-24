<template>
<!-- Exquisite-Handwork-Hero Section Start -->
<section class="sec_exquisite_handwork_hero">
    <h2 class="card_heading_b">{{ shopifyData.secHeading }}</h2>
    <div class="sec_content">
        <template v-if="shopifyData.checkbox === 'true'">
            <video   autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true"  preload="none" >
                <source :src=(shopifyData.videoLink) >
            </video>
        </template>
        <template v-else>
            <img :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt) />
        </template>
    </div>
</section>  
<!-- Exquisite-Handwork-Hero Section End -->
</template>
<style scoped>
    .sec_exquisite_handwork_hero{
        padding-top: 45px;
    }
    .card_heading_b {
        margin-bottom: 24px;
        text-align: center;
        text-transform: initial;
    }
    /* Responsive Css Code */
@media screen and (max-width: 1200px) {
    .sec_content{
        padding: 0 20px;
    }
}
@media screen and (max-width: 991px) {
    .card_heading_b {
        margin-bottom: 28px;
    }
    .sec_content{
        padding: 0 0px;
    }
    iframe{
        height: 518px;
    }
    .sec_exquisite_handwork_hero{
        padding-top: 50px;
    }
}
@media screen and (max-width: 767px) {
    iframe{
        height: 210px;
    }
    .sec_exquisite_handwork_hero{
        padding-top: 60px;
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

};
</script>