<template>
  <!-- ========== Section COLLABORATIONS PHILOSOPHY Start ========== -->
  <section class="sec_collaborations_philosophy">
    <div class="big_container">
      <h2 class="sec_heading">
        {{ shopifyData.redText }}
      </h2>
      <div class="sec_content">
        <!--    Section Image        -->
        <template
          v-for="(item, index) in shopifyData.card"
          :key="index"
        > 
          <div
            v-if="index <= 1"
            class="sec_img"
          >
            <a :href="(item.link)">
              <img
                :src="(item.imgUrl.src)"
                :src-placeholder="(item.imgUrl.placeholder)"
                :alt="(item.imgUrl.alt)"
              >
              <p class="sec_info">{{ item.crdHeading }}</p>
            </a>
          </div>
        </template>
      </div>
      <h3 class="sec_inner_heading">
        {{ shopifyData.secHeading }}
      </h3>
      <div class="sec_content">
        <!--    Section Image        -->
        <template
          v-for="(item, index) in shopifyData.card"
          :key="index"
        > 
          <div
            v-if="index >= 2"
            class="sec_img"
          >
            <a :href="(item.link)">
              <img
                :src="(item.imgUrl.src)"
                :src-placeholder="(item.imgUrl.placeholder)"
                :alt="(item.imgUrl.alt)"
              >
              <p class="sec_info">{{ item.crdHeading }}</p>
            </a>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ========== Section COLLABORATIONS PHILOSOPHY End ========== -->
</template>

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

<style scoped>
/* ========== Section COLLABORATIONS PHILOSOPHY Css Code Start ========== */
.sec_collaborations_philosophy {
  padding: 25px 0 138px;
}

.sec_collaborations_philosophy .sec_heading {
  font-weight: 700;
  font-size: 72px;
  line-height: 95.9%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ef0000;
  margin-bottom: 100px;
  font-family: 'Helvetica Neue',sans-serif;
}

.sec_collaborations_philosophy .sec_content {
  display: flex;
  gap: 25px;
  max-width: 603px;
  width: 100%;
  margin: 0 auto;
}
.sec_collaborations_philosophy .sec_img {
  max-width: 289px;
  width: 100%;
}
.sec_collaborations_philosophy .sec_info {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-top: 5px;
}

.sec_collaborations_philosophy .sec_inner_heading {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #000000;
  margin: 116px 0 36px;
  text-align: center;
}
/* ========== Section COLLABORATIONS PHILOSOPHY Css Code End ========== */

/* Responsive Css Code */
/* ========== Section COLLABORATIONS PHILOSOPHY Responsive Css Code Start ========== */
@media only screen and (max-width: 1200px) {
  .sec_collaborations_philosophy .sec_heading {
    font-size: 50px;
  }
}
@media only screen and (max-width: 991px) {
  .sec_collaborations_philosophy .sec_heading {
    font-size: 35px;
    margin-bottom: 60px;
  }
  .sec_collaborations_philosophy .sec_inner_heading {
    margin: 80px 0 25px;
  }
  .sec_collaborations_philosophy {
    padding: 20px 0 90px;
  }
}
@media only screen and (max-width: 767px) {
  .sec_collaborations_philosophy .sec_heading {
    font-size: 27px;
    margin-bottom: 45px;
  }
  .sec_collaborations_philosophy .sec_inner_heading {
    margin: 47px 0 17px;
  }
  .sec_collaborations_philosophy {
    padding: 13px 0 64px;
  }
}

@media only screen and (max-width: 575px) {
  .sec_collaborations_philosophy .big_container {
    padding: 0;
  }
  .sec_collaborations_philosophy .sec_heading {
    padding: 0 3px;
    margin-bottom: 33px;
  }
  .sec_collaborations_philosophy .sec_content {
    max-width: 600px;
    width: 100%;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 289px 289px;
    gap: 14px;
    padding-left: 14px;
    scrollbar-width: none;
  }
  .sec_collaborations_philosophy .sec_content::-webkit-scrollbar {
    display: none;
  }
}
/* ========== Section COLLABORATIONS PHILOSOPHY Responsive Css Code End ========== */
</style>
