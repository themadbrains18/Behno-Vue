<template>
    <!-- ========== Section CANOPY x BEHNO Start ========== -->
    <section class="sec_making_our_bags sec-canopy-x-behno">
      <div class="container">
        <h2 class="card_heading_b t-center sec-heading">{{ shopifyData.secheading }}</h2>
        <div class="sec_content">
          <!--    Section text  -->
          <div class="sec_text">
            <h2 class="sec_heading">{{ shopifyData.crdheading }}</h2>
            <h4
              class="card_heading_b"
            >{{ shopifyData.crdSubHeading }}</h4>
            
            <p class="body_text" v-for="(item, index) in shopifyData.para" :key="index">
              {{ item.para }}
            </p>
            </div>
          <!--    Section Image        -->
          <div class="sec_img">
            <img
              :src=(shopifyData.imgUrl.src)
              :src-placeholder=(shopifyData.imgUrl.placeholder)
              :alt=(shopifyData.imgUrl.alt)
            />
          </div>
        </div>
      </div>
    </section>
    <!-- ========== Section CANOPY x BEHNO End ========== -->

    <!-- ========== Back to The Sense of behno  ========== -->
  
</template>
<style scoped>
/* ========== Section Canopy X Behno Css Code Start ========== */
.sec_making_our_bags.sec-canopy-x-behno {
  background: #000;
  padding: 56px 0 186px;
}

.card_heading_b{
  color: #fff;
  margin: 14px 0;
  text-transform: initial;
}
.sec_heading{
  color: #fff;
  line-height: 41px;
}
.sec_making_our_bags.sec-canopy-x-behno .container {
  max-width: 1133px;
}

.sec_making_our_bags.sec-canopy-x-behno .sec_content {
  gap: 24px;
  margin-top: 0;
}
.sec_making_our_bags.sec-canopy-x-behno .text-heading,
.sec_making_our_bags.sec-canopy-x-behno .text-inner-heading,
.sec_making_our_bags.sec-canopy-x-behno .text-info {
  color: #fff;
}
.sec_making_our_bags.sec-canopy-x-behno .sec_text {
  max-width: 480px;
}
.body_text{
  color: #fff;
  margin-bottom:20px;
}
.body_text:last-child{
margin-bottom:0px;
}
.sec_making_our_bags.sec-canopy-x-behno .sec-heading {
  color: #fff;
  margin: 0 0 90px 0;
}

.back_sense_behno {
  margin: 57px auto 151px;
}
/* ========== back_sense_behno Css Code End ========== */

/* ========== Section Canopy X Behno Responsive Css Code Start ========== */
@media only screen and (max-width: 1024px) {
  .sec_making_our_bags.sec-canopy-x-behno {
    background: #000;
    padding: 45px 0 110px;
  }
}
@media only screen and (max-width: 991px) {
  /* ========== Section Canopy X Behno Css Code Start ========== */
  .sec_making_our_bags.sec-canopy-x-behno {
    background: #000;
    padding: 32px 0 80px;
  }

  .sec_making_our_bags.sec-canopy-x-behno .sec-heading {
    margin-bottom: 40px;
  }

  .sec-canopy-x-behno .sec_img{
    padding: 0 10px;
  }
  /* ========== Section Canopy X Behno Css Code End ========== */

  /* ========== back_sense_behno Responsive  Css Code End ========== */
  .back_sense_behno {
    margin: 62px auto 100px;
  }
  /* ========== back_sense_behno Responsive Css Code End ========== */
}

@media only screen and (max-width: 767px) {
  /* ========== Section Canopy X Behno Css Code Start ========== */
  .sec_making_our_bags.sec-canopy-x-behno {
    background: #000;
    padding: 32px 0 51px;
  }
  .sec_making_our_bags.sec-canopy-x-behno .sec-heading {
    margin-bottom: 32px;
  }
  .sec_making_our_bags.sec-canopy-x-behno .sec_text {
    padding: 0 15px;
  }
  /* ========== Section Canopy X Behno Css Code End ========== */

  /* ========== back_sense_behno Responsive  Css Code End ========== */
  .back_sense_behno {
    margin: 62px auto 87px;
  }
  /* ========== back_sense_behno Responsive Css Code End ========== */
}

/* ========== Section Canopy X Behno Css Code End ========== */
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
