<template>
  <!-- ========== Section sustainability and ethics Start ========== -->
  <section class="sec_sustainability_ethics">
    <div class="container">
      <div class="sec_content">
        <!--    Section text        -->
        <div class="sec_text">
          <h2
            class="sec_heading"
          >We redefine sustainability and ethics in fashion.</h2>
          <h4
            class="card_heading_b"
          >We’re pioneering a new standard for manufacturing in the global garment trade, revolutionizing the way garment workers and artisans are viewed, employed, and treated.</h4>
          <p class="body_text">
            Inspiring change not only by example at our own factory, we also partner with other international factories adhering to rigid compliances striving to improve factory conditions in developing countries.
          </p>
            <p class="body_text">
            Our objects are handmade in facilities incrementally implementing “The behno Standard,” a set of six guiding principles:
          </p>
          <div class="sec_img">
            <img
              src="https://cdn.shopify.com/s/files/1/1000/3130/files/sustainability-ethics-img.png?v=1650875462"
            />
          </div>
        </div>
        <!--    Section Image        -->
        <div class="sec_img">
          <img
            src="https://cdn.shopify.com/s/files/1/1000/3130/files/ethical-phIlosophy-img3.jpg?v=1650867775"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section sustainability and ethics  End ========== -->
</template>

<style scoped>
/* ========== Section sustainability and ethics  Start Css Code Start ========== */
.sec_sustainability_ethics {
  padding: 45px 0 75px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e9e7e3 100%);
}
.body_text{
  margin-bottom:20px;
  line-height: 19px;
}
.body_text:last-of-type{
  margin-bottom: 0;
}
.sec_sustainability_ethics .sec_text {
  max-width: 432px;
  width: 100%;
}
.card_heading_b{
  margin:  14px 0;
  text-transform: initial;
}
.sec_sustainability_ethics .sec_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, auto));
  gap: 60px;
  justify-content: space-between;
}

.sec_sustainability_ethics .container {
  max-width: 1056px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
}

.sec_sustainability_ethics .sec_heading {
  line-height: 41px;
}
.sec_sustainability_ethics .sec_inner_heading {
  font-weight: 400;
  font-size: 46px;
  line-height: 41.86px;
  color: #000000;
  margin: 27px 0 14px;
}
.sec_sustainability_ethics .our-community_inner_heading {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 14px;
}
.sec_sustainability_ethics .sec_info {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #000000;
}
.sec_sustainability_ethics .sec_text .sec_img {
  text-align: center;
  margin-top: 19px;
}
/* ========== Section sustainability and ethics  Start Css Code End ========== */

/* ========== Section sustainability and ethics Responsive Css  Start ========== */
@media only screen and (max-width: 991px) {
  .sec_sustainability_ethics .container {
    padding: 0;
  }
  .sec_sustainability_ethics {
    padding: 0 0 70px;
  }
  .sec_sustainability_ethics .sec_content {
    gap: 55px;
    justify-content: initial;
    grid-template-columns: 1fr;
  }
  .sec_sustainability_ethics .sec_text .sec_img {
    margin-top: 15px;
  }
  .sec_sustainability_ethics .sec_text {
    order: 1;
    margin: 0 auto;
  }
  .sec_sustainability_ethics .sec_inner_heading {
    margin-top: 0;
  }
  .sec_sustainability_ethics .sec_img {
    text-align: center;
  }

  /* ========== Section sustainability and ethics Responsive Css  End ========== */
}

@media only screen and (max-width: 575px) {
  .sec_sustainability_ethics .sec_text {
    max-width: 289px;
  }
}
</style>