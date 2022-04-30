<template>
  <!-- ========== Section Forming real relationships Start ========== -->
  <div>
  <section class=" sec_portraitures_powerhouse">
    <div class="container">
      <div class="sec_content">
        <!--    Section text        -->
        <div class="sec_text">
          <h2 class="sec_heading">Portraitures of a powerhouse.</h2>
          <h4 class="card_heading_b">The Garment Worker Project.</h4>
          <p
            class="body_text"
          >Our founder initiated the Garment Worker Project, which explores the less visible side of fashion. We invited fashion photographer Dan Smith and documentary filmmaker Kent Mathews to MSA Ethos.</p>
          <a href="/" class="cta_btn">discover the project</a>
        </div>
        <!--    Section Image        -->
        <div class="sec_img">
          <video width="340" height="604" autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true"  preload="none" class="shogun-image ">
                <source src="https://i.shgcdn.com/dfe5ddee-faae-4df5-86a6-44c58a4de1c9/gif2video/-/format/webm/-/quality/lighter/" type="video/webm">
                <source src="https://i.shgcdn.com/dfe5ddee-faae-4df5-86a6-44c58a4de1c9/gif2video/-/format/mp4/-/quality/lighter/" type="video/mp4">
            </video>
        </div>
      </div>
    </div>
    
  </section>
  <a class="back_sense_behno samll_text" href="#">
            Back to The Sense of behno
    </a>
  </div>
  <!-- ========== Section Forming real relationships End ========== -->
</template>

<style scoped>
/* ========== Section Forming real relationships Css Code Start  ========== */
.sec_portraitures_powerhouse {
  padding: 60px 0;
  background: #000000;
}

.sec_heading{
  color: #fff;
  line-height: 41px;
}
.sec_portraitures_powerhouse .container {
  max-width: 1056px;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
}

.sec_portraitures_powerhouse .sec_content {
  display: grid;
  grid-template-columns: 44% 50%;
  gap: 60px;
  justify-content: space-between;
  align-items: center;
}

.sec_portraitures_powerhouse .sec_text_heading {
  font-weight: 400;
  font-size: 46px;
  line-height: 91%;
  color: #ffffff;
}

.sec_portraitures_powerhouse .card_heading_b {
  line-height: 18px;
  color: #ffffff;
  margin: 14px 0;
  text-transform: initial;
}

.sec_portraitures_powerhouse .body_text {
  line-height: 19px;
  color: #ffffff;
}

.sec_portraitures_powerhouse .cta_btn {
  background: #ffffff;
  border: 1px solid #000000;
  margin-top: 35px;
}
.sec_portraitures_powerhouse .sec_text {
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
.sec_portraitures_powerhouse .sec_img video{
    width: 100%;
}
.back_sense_behno{
    text-decoration: underline;
    display: block;
    width: fit-content;
    margin:  100px auto 127px;
} 
/* ========== Section Forming real relationships Css Code End  ========== */

/* ========== Section Forming real relationships Responsive Css Code Start  ========== */
@media only screen and (max-width: 991px) {
  .sec_portraitures_powerhouse {
    padding: 30px 0 50px;
  }
  .sec_portraitures_powerhouse .sec_content {
    gap: 54px;
    justify-content: initial;
    grid-template-columns: 1fr;
  }
  .sec_portraitures_powerhouse .sec_text {
    order: 2;
    margin: 0 auto;
    max-width: 100%;
  }
  .sec_portraitures_powerhouse .sec_img {
    text-align: center;
  }
  
  .sec_portraitures_powerhouse .cta_button {
    margin: 30px auto 0;
    width: fit-content;
    display: block;
  }
  .sec_portraitures_powerhouse .cta_btn {
    margin-top: 30px;
  }

 .back_sense_behno{
    margin:  60px auto 40px;
 }
}

@media only screen and (max-width: 767px) {
  .sec_portraitures_powerhouse {
    padding: 22px 0 50px;
  }
  .back_sense_behno{
    margin:  45px auto 22px;
  } 
}


@media only screen and (max-width: 575px) {
.sec_portraitures_powerhouse .sec_text{
	max-width:310px;
}
}
/* ========== Section Forming real relationships Responsive Css Code End  ========== */
</style>