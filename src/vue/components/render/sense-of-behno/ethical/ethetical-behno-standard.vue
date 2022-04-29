<template>
  <!-- ========== Section Behno Standard Start ========== -->
  <section class="sec_behno_standard">
    <div class="big_container">
      <h2
        class="sec_heading"
      >{{ shopifyData.redText }}</h2>
      <div class="sec_content">
        <!--    Section Image        -->
        <div class="sec_img">
          <a :href=(shopifyData.imgUrl.link)>
            <img
              :src=(shopifyData.imgUrl.src) 
              :src-placeholder=(shopifyData.imgUrl.placeholder) 
              :alt=(shopifyData.imgUrl.alt) 
            />
          </a>
        </div>
        <!-- Section Text           -->
        <div class="sec_text">
          <p
            class="sec_info"
          >{{ shopifyData.para }}</p>
          <a :href=(shopifyData.imgUrl.link)   class="cta_btn">{{ shopifyData.linkText }}</a>
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section Behno Standard End ========== -->
</template>

<style scoped>
/* ========== Section Behno  standard  Start Css Code Start ========== */
.sec_behno_standard {
  padding: 25px 0 104px;
}
.sec_behno_standard .sec_heading {
  font-family: 'Helvetica Neue',sans-serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 95.9%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ef0000;
}

.sec_behno_standard .sec_content {
  display: flex;
  align-items: center;
  max-width: 924px;
  width: 100%;
  margin: 70px auto 0;
  gap: 32px;
  justify-content: space-between;
}

.sec_behno_standard .sec_text {
  max-width: 432px;
  width: 100%;
}

.sec_behno_standard .sec_info {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #000000;
}

.sec_behno_standard .cta_btn {
  background: #000000;
  width: fit-content;
  margin-top: 25px;
  color: #fff;
  border: 1px solid #000000;
}

@media (hover: hover) {
  .cta_btn:hover {
    background: #fff;
    color: #000;
    border-color: #000;
  }
}
/* ========== Section Behno  standard  Start Css Code End  ========== */

/* Responsive Css Code */
@media only screen and (max-width: 1200px) {
  /* ========== Section Behno Standard Responsive Css  Start  ========== */
  .sec_behno_standard .sec_heading {
    font-size: 50px;
  }
  /* ========== Section Behno Standard Responsive Css  End ========== */
}

@media only screen and (max-width: 1024px) {
  .sec_behno_standard .sec_heading {
    font-size: 40px;
  }
}

@media only screen and (max-width: 991px) {
  .sec_behno_standard .sec_content {
    flex-direction: column;
    margin-top: 45px;
  }

  .sec_behno_standard .sec_heading {
    font-size: 35px;
  }
  .sec_behno_standard .cta_btn {
    margin: 25px auto 0;
    width: fit-content;
    display: block;
  }
}

@media only screen and (max-width: 767px) {
  .sec_behno_standard .sec_heading {
    font-size: 27px;
    line-height: 102%;
  }
  .sec_behno_standard .sec_content {
    margin-top: 34px;
  }
}

@media only screen and (max-width: 575px) {
  .sec_behno_standard .big_container {
    padding: 0;
  }
  .sec_behno_standard .sec_heading {
    padding: 0 3px;
  }

  .sec_behno_standard .sec_text {
    max-width: 310px;
    margin: 0 auto;
  }
  .sec_behno_standard .cta_button {
    margin-top: 35px;
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
