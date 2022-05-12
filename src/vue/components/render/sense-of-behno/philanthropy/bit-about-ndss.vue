<template>
  <!-- Section Constructing Ethos Hero Start -->
  <section class="sec_bit_about_ndss">
    <div class="big_container">
      <div class="sec_content">
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/3b59092d-70c5-4662-94bd-68fa774b1d5d/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/66ab95c1-2d15-4dca-b493-7b9bbe24332f/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/d7c84c42-8201-4b8a-82b8-dd24e3a52440/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/b798c9eb-dc4e-4447-9676-ddd41921d783/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/65224513-2f41-4943-9f55-ebc499390c4f/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
        <div class="main_contenet">
          <div class="inner_text">
            <h2 class="sec_heading">A bit about NDSS.</h2>
            <h4 class="card_heading_b sec_inner_heading">
              NDSS was founded in 1979 by Betsy Goodwin and is now the largest
              nonprofit in the United States dedicated to advocating for all
              people with Down Syndrome.
            </h4>
            <p class="body_text">
              NDSS is the leading human rights organization for all individuals
              with Down syndrome and provides state -of-the - art, comprehensive
              programming to all individuals with Down syndrome and their
              families, which include: The National Advocacy & Public Policy
              Center in Washington, DC, its Down Syndrome Health Resources &
              Promotion Program, the first of its kind #DSWORKS® Employment
              Program, which is showing the world that people with Down syndrome
              are ready, willing and able to work as well as the National Buddy
              Walk® Program.
            </p>
          </div>
        </div>
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/2d72c39c-9fa9-4f6d-ad10-4fa9a58f0d86/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/5ebe5e2f-b2da-4f14-94ba-55c77bb97172/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/3e3e9c70-89b9-473b-a367-1910b97c511a/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/43b55d58-bd50-4e31-9433-32650d2740e2/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
        <div class="sec_img">
          <img
            src="https://i.shgcdn.com/7a25ed66-dc1d-4bab-a6f4-abadc3af52eb/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Image-description"
          />
        </div>
      </div>
      <p class="subtitle">
        DYANI, EMMETT, MALIK AND VICTORIA WEAR THE NDSS X BEHNO CAPSULE
        COLLECTION AS PART OF OUR ICONIC “I AM:” CAMPAIGN.
      </p>
    </div>
  </section>
  <!-- Constructing Ethos Hero Start -->
</template>

<style scoped>
.sec_bit_about_ndss {
  padding-top: 78px;
}
.sec_img {
  line-height: 0;
}
.big_container {
  padding: 0 15px;
}
.sec_content{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}
.card_heading_b {
  margin-bottom: 72px;
  text-align: center;
  text-transform: initial;
}
.card_heading_b.sec_inner_heading {
  margin: 14px 0;
  text-align: start;
}
.subtitle {
  margin: 4px 0 0 15px;
}

.sec_video iframe {
  width: 100%;
  height: 715px;
}
.sec_heading {
  line-height: 44px;
  color: #fb0000;
}
.main_contenet {
  grid-column: span 2;
  display: grid;
  place-items: center;
  padding: 35px 64px;
}

.body_text {
  line-height: 19px;
  margin-bottom: 20px;
}
.body_text:last-child { 
  margin-bottom: 0px;
}
/* Responsive Css Code */
@media screen and (max-width: 1200px) {
  .main_contenet {
    padding: 20px 40px;
  }
}

@media screen and (max-width: 1024px) {
  .main_contenet {
    padding: 10px 20px;
  }
}

@media screen and (max-width: 991px) {
  .sec_bit_about_ndss {
    padding-top: 55px;
  }
  .main_contenet {
    padding: 0;
    margin: 40px 0 30px;
  }
  .card_heading_b {
    margin-bottom: 40px;
  }
  .sec_img {
    display: none;
  }
  .sec_img:first-child,
  .sec_img:nth-child(2) {
    display: block;
  }
  .sec_img:nth-child(3) {
    display: block;
    order: 3;
  }
  .sec_img:nth-child(4) {
    display: block;
    order: 4;
  }
  .big_container {
    padding: 0 9px;
  }
  .sec_content{
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }
  .subtitle {
    margin: 6px 0 0 9px;
  }
}

@media screen and (max-width: 767px) {
  .main_contenet {
    margin-bottom: 25px;
  }
  .sec_bit_about_ndss {
    padding-top: 46px;
  }
}
</style>



