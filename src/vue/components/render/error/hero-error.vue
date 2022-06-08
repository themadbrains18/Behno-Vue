<template>
    <section class="error_hero_sec">
        <div class="big_container">
            <div class="sec_head">
                <h3 class="error_heading">{{ shopifyData.secHeading }}</h3>
                <div class="cta_wrapper t-center">
                    <a :href=(shopifyData.secCtaLink) class="cta_btn cta_btn-black">{{ shopifyData.secHeading }}</a>
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
    }
  }
}
</script>
<style scoped>
.error_hero_sec{
    padding-top: 106px;
    height: 48.5vh; 
}
.error_heading{
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #000000;
    text-align: center;
}
.cta_wrapper{
    margin-top: 97px;
}

/* ===== Responsive Breakpoints ===== */
@media (max-width:767px) {
    .error_hero_sec{
        padding-top: 121px;
    }    
}
</style>