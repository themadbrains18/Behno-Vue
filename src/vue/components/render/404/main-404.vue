<template>
  <section class="error_hero_sec">
    <div class="big_container">
      <div class="sec_head">
        <h3 class="error_heading">{{ shopifyData.secHeading }}</h3>
        <p class="brief_heading">But, continue your journey below:</p>
        <div class="cta_wrapper t-center">
          <a href="#" class="cta_btn cta_btn-black">ALL HANDBAGS & WALLETS</a>
          <a href="#" class="cta_btn cta_btn-black">CROSSBODY BAGS</a>
          <a href="#" class="cta_btn cta_btn-black">SHOULDER BAGS</a>
          <a href="#" class="cta_btn cta_btn-black">MINI BAGS</a>
        </div>
        <div class="homepage_link">
          <a href="#">Back to homepage.</a>
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
.error_hero_sec {
  padding: 106px 0;
  /* height: 48.5vh; */
}
.error_heading {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #000000;
  text-align: center;
}

.brief_heading {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  letter-spacing: 0.02em;
  color: #000000;
  padding-top: 10px;
  max-width: 263px;
  margin: 0 auto;
}

.cta_wrapper {
  margin-top: 63px;
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.homepage_link {
  margin-top: 138px;
  text-align: center;
}

.homepage_link a {
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.02em;
  text-decoration: underline;
  color: #000000;
}

/* ===== Responsive Breakpoints ===== */
@media (max-width: 767px) {
  .error_hero_sec {
    padding: 121px 0;
  }
}

@media (max-width: 480px) {
  .cta_wrapper {
    flex-direction: column;
    margin-top: 76px;
    gap: 24px;
  }

  .brief_heading {
    text-align: center;
  }

  .homepage_link {
    margin-top: 115px;
  }
}
</style>