<template>
  <!-- Section Walk To Remember  Start -->
  <section class="sec_walk_to_remember">
    <div class="big_container">
      <div class="main_contenet">
        <h2 class="sec_heading">A walk to remember.</h2>
        <h4 class="card_heading_b">
          The Buddy Walk is one of the largest events hosted by NDSS to bring its community together. Taking place in New York City, Nini was a Grand Marshall for 2019.
        </h4>
        <p class="body_text">
          The behno team came together to celebrate and support NDSS and the
          Down syndrome community for the Buddy Walk, which started in iconic
          Times Square with a presentation of some of their star members. Nini,
          as the hero of the NDSS x behno capsule collection, was shy when her
          image came onto one of the larger-than-life screens in the heart of
          Times Square being watched by thousands of spectators.
        </p>
        <p class="body_text">
          After the viewing, everyone migrated to Central Park where over 2,000
          people came together for an afternoon of fun and the actual Buddy
          Walk. There were games, Zumba, food, and of course, so much love being
          shared amongst the community!
        </p>
      </div>
      <div class="sec_content">
        <div class="sec_img">
          <!-- <img
            src="https://i.shgcdn.com/86d29134-f4be-4081-b8d4-43fb8997ebce/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt=""
          /> -->
          <div class="image_grid">
            <div class="image_row">
              <div class="figcaption first">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1-NDSS.jpg?v=1652771577" alt="error">
              </div>
              <div class="figcaption second">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/2-NDSS.jpg?v=1652771577" alt="error">
              </div>
              <div class="figcaption third">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/3-NDSS.jpg?v=1652771577" alt="error">
              </div>
            </div>
            <div class="image_row second">
              <div class="figcaption first">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/4-NDSS.jpg?v=1652771577" alt="error">
              </div>
              <div class="figcaption second">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/5-NDSS.jpg?v=1652771577" alt="error">
              </div>
              <div class="figcaption third">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/6-NDSS.jpg?v=1652771577" alt="error">
              </div>
              <div class="figcaption fourth">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/7-NDSS.jpg?v=1652771577" alt="error">
              </div>
            </div>
            <div class="image_row third">
              <div class="figcaption first">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/8-NDSS.jpg?v=1652771577" alt="error">
              </div>
              <div class="figcaption second">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/9-NDSS.jpg?v=1652771577" alt="error">
              </div>
              <div class="figcaption third">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/10-NDSS.jpg?v=1652771577" alt="error">
              </div>
              <div class="figcaption fourth">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/11-NDSS.jpg?v=1652771577" alt="error">
              </div>
            </div>
            <div class="image_row fourth">
              <div class="figcaption first">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/12-NDSS.jpg?v=1652771577" alt="error">
              </div>
              <div class="figcaption second">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/13-NDSS.jpg?v=1652776700" alt="error">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section Walk To Remember  End -->
</template>
<style scoped>
.sec_walk_to_remember {
    padding-top: 79px;
  }
.sec_heading {
  line-height: 44px;
  color: #FB0000;
}
.main_contenet {
  max-width: 565px;
  margin: 0 auto;
  width: 100%;
}
.card_heading_b {
  margin: 14px 0;
  text-transform: initial;
}
.body_text {
  line-height: 19px;
  margin-bottom: 20px;
}
.body_text:last-child {
  margin-bottom: 0px;
}

.sec_img {
  margin: 10px 0;
}
.image_row{
  display: flex;
  align-items: flex-start;
  gap: 50px;
}
.figcaption.first {
    max-width: 225px;
    margin-top: 40px;
}
.figcaption.second {
    max-width: 260px;
}
.figcaption.third{
    max-width: 435px;
    margin-top: 40px;
}
.image_row.second{
  align-items: center;
  justify-content: space-evenly;
}
.image_row.second .first{
  max-width: 248px;
}
.image_row.second .second{
  max-width: 303px;
}
.image_row.second .third{
  max-width: 300px ;
}
.image_row.second .fourth{
  max-width: 170px;
  align-self: flex-start;
}
.image_row.third{
  justify-content: space-between;
}
.image_row.third .first{
  align-self: flex-end;
  margin-bottom: -50px;
}
.image_row.third .second{
  max-width:176px;
  align-self: center;
}
.image_row.third .third{
  max-width:250px;
}
.image_row.third .fourth{
  max-width:231px;

}
.image_row.fourth {
  justify-content: flex-end;
  margin-top: 30px;
  gap: 220px;
}
.image_row.fourth .first{
  max-width: 284px;
  align-self: flex-start;
  margin-top: -42px;
}
.image_row.fourth .second{
  max-width: 512px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_walk_to_remember {
    padding-top: 59px;
  }
  .big_container {
    padding: 0 ;
  }
  .main_contenet {
    padding: 0 20px;
  }
  .image_row.fourth{
    /* margin-top: 0; */
    gap: 60px;
  }
  .image_row.fourth .first{
      align-self: center;
      margin-top: 0px;
  }
}
@media screen and (max-width: 767px) {
  .sec_walk_to_remember {
    padding-top: 44px;
  }
  .image_grid {
      padding: 0 10px;
  }
  .image_row.third .first{
      margin-bottom: -10px;
  }
  .image_row[data-v-45ec762c] {
      gap: 15px;
  }
  .image_row.fourth .first{
      max-width: 154px;
  }
  .image_row.fourth .second{
      max-width: 242px;
  }

}
</style>    