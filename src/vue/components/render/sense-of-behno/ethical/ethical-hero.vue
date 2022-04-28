<template>
  <!-- ========== Section OUR ETHICAL PHILOSOPHY Start ========== -->
  <section class="sec_our_ethical_philosophy">
    <div class="container">
      <h2 class="card_heading_b">OUR ETHICAL PHILOSOPHY</h2>
      <div class="sec_content">
        <!--    Section Image        -->
        <div class="sec_img">
          <img
            src="https://cdn.shopify.com/s/files/1/1000/3130/files/ethical-phIlosophy-img1.jpg?v=1650867775"
          />
        </div>
        <!--    Section text        -->
        <div class="sec_text">
          <div class="sec_img">
            <img
              src="https://cdn.shopify.com/s/files/1/1000/3130/files/ethical-phIlosophy-img2.jpg?v=1650867775"
            />
          </div>
          <h2 class="sec_inner_heading big-caslon-pro-font">Our name,a community.</h2>
          <h4 class="our-community_inner_heading">“behno” means sisters in Hindi.</h4>
          <p
            class="sec_info adobe-caslon-pro-font"
          >At our partner factories, female colleagues are referred to by their first name followed by the suffix of “behn” (sister). In plurality, they become a community of sisters.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section OUR ETHICAL PHILOSOPHY  End ========== -->
</template>

<style scoped>
/* ========== Section OUR ETHICAL PHILOSOPHY Css Code Start ========== */
.sec_our_ethical_philosophy {
  padding: 124px 0 22px;
}
.sec_our_ethical_philosophy .container {
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
.sec_our_ethical_philosophy .sec_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(448px, auto));
  gap: 60px;
}
.sec_our_ethical_philosophy .sec_img img {
  line-height: 0;
}

.sec_our_ethical_philosophy .sec_content > .sec_img img {
  line-height: 0;
  height: 100%;
}

.sec_our_ethical_philosophy .sec_text {
  max-width: 289px;
  width: 100%;
}
.sec_our_ethical_philosophy .card_heading_b {
  margin-bottom: 33px;
  color: #000000;
                   text-align: center;
}

.sec_our_ethical_philosophy .sec_inner_heading {
  font-weight: 400;
  font-size: 46px;
  line-height: 41.86px;
  color: #000000;
  margin: 27px 0 14px;
}
.sec_our_ethical_philosophy .our-community_inner_heading {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 14px;
}
.sec_our_ethical_philosophy .sec_info {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #000000;
}
/* ========== Section OUR ETHICAL PHILOSOPHY Css Code End ========== */

/* ========== Section OUR ETHICAL PHILOSOPHY Reponsive Css Code Start ========== */
@media only screen and (max-width: 1024px) {
  .sec_our_ethical_philosophy .sec_content {
    gap: 33px;
  }
}

@media only screen and (max-width: 991px) {
  .sec_our_ethical_philosophy .sec_content {
    grid-template-columns: 1fr;
  }
  .sec_our_ethical_philosophy .container {
    padding: 0;
  }

  .sec_our_ethical_philosophy .card_heading_b {
    display: none;
  }
  .sec_our_ethical_philosophy {
    padding: 70px 0 64px;
  }
  .sec_our_ethical_philosophy .sec_text {
    margin: 0 auto;
  }
  .sec_our_ethical_philosophy .sec_content .sec_img {
    text-align: center;
  }
  .sec_our_ethical_philosophy .sec_content .sec_text .sec_img {
    display: none;
  }
  .sec_our_ethical_philosophy .sec_inner_heading {
    margin-top: 0;
  }
}

/* ========== Section OUR ETHICAL PHILOSOPHY Reponsive Css Code End ========== */
</style>
