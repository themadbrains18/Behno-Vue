<template>
  <!-- ========== Section Forming real relationships Start ========== -->
  <section class="sec_forming_relationship">
    <div class="container">
      <div class="sec_content">
        <!--    Section text        -->
        <div class="sec_text">
          <h2 class="sec_text_heading big-caslon-font">Forming real relationships.</h2>
          <h4 class="sec_text_inner_heading">The Garment Worker Project.</h4>
          <p
            class="sec_info adobe-caslon-pro-font"
          >Our founder initiated the Garment Worker Project, which explores the less visible side of fashion. We invited fashion photographer Dan Smith and documentary filmmaker Kent Mathews to MSA Ethos.</p>
          <a href="/" class="cta_btn">discover the project</a>
        </div>
        <!--    Section Image        -->
        <div class="sec_img">
          <img
            src="https://cdn.shopify.com/s/files/1/1000/3130/files/forming-relationshop-img.jpg?v=1650887016"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Section Forming real relationships End ========== -->
</template>

<style scoped>
/* ========== Section Forming real relationships Css Code Start  ========== */
.sec_forming_relationship {
  padding: 60px 0;
  background: #000000;
}

.sec_forming_relationship .container {
  max-width: 1056px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
}

.sec_forming_relationship .sec_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, auto));
  gap: 60px;
  justify-content: space-between;
  align-items: center;
}

.sec_forming_relationship .sec_text_heading {
  font-weight: 400;
  font-size: 46px;
  line-height: 91%;
  color: #ffffff;
}

.sec_forming_relationship .sec_text_inner_heading {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin: 14px 0;
}

.sec_forming_relationship .sec_info {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.sec_forming_relationship .cta_btn {
  background: #ffffff;
  border: 1px solid #000000;
  margin-top: 35px;
}
.sec_forming_relationship .sec_text {
  max-width: 403px;
  width: 100%;
}

@media (hover: hover) {
  .cta_btn:hover {
    background: #000;
    color: #fff;
    border-color: #fff;
  }
}
/* ========== Section Forming real relationships Css Code End  ========== */

/* ========== Section Forming real relationships Responsive Css Code Start  ========== */
@media only screen and (max-width: 991px) {
  .sec_forming_relationship {
    padding: 30px 0 50px;
  }
  .sec_forming_relationship .sec_content {
    gap: 54px;
    justify-content: initial;
    grid-template-columns: 1fr;
  }
  .sec_forming_relationship .sec_text {
    order: 2;
    margin: 0 auto;
  }
  .sec_forming_relationship .sec_img {
    text-align: center;
  }
  .sec_forming_relationship .cta_button {
    margin: 30px auto 0;
    width: fit-content;
    display: block;
  }
}

@media only screen and (max-width: 767px) {
  .sec_forming_relationship .container {
    padding: 0;
  }
  .sec_forming_relationship {
    padding: 22px 0 50px;
  }
}


@media only screen and (max-width: 575px) {
.sec_forming_relationship .sec_text{
	max-width:310px;
}
}
/* ========== Section Forming real relationships Responsive Css Code End  ========== */
</style>