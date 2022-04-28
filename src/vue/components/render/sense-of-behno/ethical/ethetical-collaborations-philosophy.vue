<template>
  <!-- ========== Section COLLABORATIONS PHILOSOPHY Start ========== -->
  <section class="sec_collaborations_philosophy">
    <div class="big_container">
      <h2 class="sec_heading">“COLLABORATIONS ARE AT THE CORE OF OUR ETHICAL PHILOSOPHY.”</h2>
      <div class="sec_content">
        <!--    Section Image        -->
        <div class="sec_img">
          <img
            src="https://cdn.shopify.com/s/files/1/1000/3130/files/collaborations-img1.jpg?v=1650891936"
          />
          <p class="sec_info">VISIT OUR PARTNER HANDLOOM WEAVER’S COLLECTIVE.</p>
        </div>
        <div class="sec_img">
          <img
            src="https://cdn.shopify.com/s/files/1/1000/3130/files/collaborations-img2.jpg?v=1650891934"
          />
          <p class="sec_info">SEE OUR ARTISAN HAND EMBROIDERY WORKSHOP.</p>
        </div>
      </div>
      <h3 class="sec_inner_heading">A SOCIAL ENTERPRISE ON THE FRONT END, TOO.</h3>
      <div class="sec_content">
        <!--    Section Image        -->
        <div class="sec_img">
          <img
            src="https://cdn.shopify.com/s/files/1/1000/3130/files/collaborations-img3.jpg?v=1650891934"
          />
          <p class="sec_info">VISIT OUR PARTNER HANDLOOM WEAVER’S COLLECTIVE.</p>
        </div>
        <div class="sec_img">
          <img
            src="https://cdn.shopify.com/s/files/1/1000/3130/files/collaborations-img4.jpg?v=1650891934"
          />
          <p class="sec_info">SEE OUR ARTISAN HAND EMBROIDERY WORKSHOP.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section COLLABORATIONS PHILOSOPHY End ========== -->
</template>

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