<template>
  <!-- ========== Section Making Our Bags Start ========== -->
  <section class="sec_making_our_bags">
    <div class="container">
      <h2 class="sec_heading sec-heading">THE MAKING OF OUR BAGS</h2>
      <div class="sec_content">
        <!--    Section text        -->
        <div class="sec_text">
          <h2 class="sec_heading">It takes a village.</h2>
          <h4 class="card_heading_b">Our partner handbag factory.</h4>
          <p
            class="body_text"
          >Our bags are made in a world-class factory which works with luxury purveyors across the globe.</p>
          <a href="/" class="cta_btn">MORE ABOUT THE PARTNERSHIP</a>
        </div>
        <!--    Section Image        -->
        <div class="sec_img">
          <img
            src="https://cdn.shopify.com/s/files/1/1000/3130/files/making-our-bag-img.jpg?v=1650894060"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section Forming real relationships End ========== -->
</template>

<style >
/* ========== Section Making Our Bags Css Code Start ========== */
.sec_making_our_bags {
  padding: 50px 0 88px;
}
.sec_making_our_bags .container {
  max-width: 1056px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
}

.sec_making_our_bags .sec_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, auto));
  gap: 32px;
  justify-content: space-between;
  align-items: center;
  margin-top: 57px;
}

.sec_making_our_bags .sec_heading.sec-heading{
  font-weight: 700;
  font-size: 15px;
  text-align: center;
}

.sec_making_our_bags .sec_text {
  max-width: 346px;
  width: 100%;
}
.sec_making_our_bags .card_heading_b {
  margin: 14px 0;
  text-transform: initial;
}
.sec_making_our_bags .body_text{
  line-height: 19px;
}
.sec_making_our_bags .cta_btn {
  background: #000000;
  color: #fff;
  margin-top: 30px;
}


/* ========== Section Making Our Bags Css Code End ========== */

/* ========== Section Making Our Bags Responsive Css Code Start ========== */
@media only screen and (max-width: 991px) {
  .sec_making_our_bags .sec_content {
    justify-content: initial;
    grid-template-columns: 1fr;
  }

  .sec_making_our_bags .sec_text {
    order: 2;
    margin: 0 auto;
  }
  .sec_making_our_bags .sec_img {
    text-align: center;
  }
  .sec_making_our_bags .cta_btn {
    margin: 27px auto 0;
    width: fit-content;
    display: block;
  }
}
@media only screen and (max-width: 767px) {
  .sec_making_our_bags {
    padding: 24px 0 43px;
  }
  .sec_making_our_bags .container {
    padding: 0;
  }
  .sec_making_our_bags .sec_content {
    margin-top: 33px;
  }
}

@media only screen and (max-width: 575px) {
  .sec_making_our_bags .sec_text {
    max-width: 320px;
    width: 100%;
  }
}
/* ========== Section Making Our Bags Responsive Css Code End ========== */
</style>