<template>
  <!-- ========== Section Making Our Bags Start ========== -->
  <section class="sec_making_our_bags">
    <div class="container">
      <h2 class="card_heading_b t-center sec-heading">{{ shopifyData.secHeading }}</h2>
      <div class="sec_content">
        <!--    Section text        -->
        <div class="sec_text">
          <h2 class="sec_heading">{{ shopifyData.crdheading }}</h2>
          <h4 class="card_heading_b">{{ shopifyData.crdSubHeading }}</h4>
          <p
            class="body_text"
          >{{ shopifyData.para }}</p>
          <a :href=(shopifyData.link) class="cta_btn cta_btn-black ">{{ shopifyData.linkText }}</a>
        </div>
        <!--    Section Image        -->
        <div class="sec_img">
          <a :href=(shopifyData.link)> 
             <template v-if="shopifyData.showVideo === 'true'">
              <iframe :src="'https://www.youtube.com/embed/' + shopifyData.video_url + '?start=0&end=0&autoplay=1&loop=1&mute=1&playlist=V9cOfo22-5M&version=3&rel=0'" frameborder="0"  allowfullscreen>
              </iframe>
            </template>
            <template v-else>
              <img
                :src=(shopifyData.imgUrl.src)
                :src-placeholder=(shopifyData.imgUrl.placeholder)
                :alt=(shopifyData.imgUrl.alt)
              />
            </template>
          
          </a>
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
iframe{
  height: 305px;
  width: 538px;
}
.sec_making_our_bags .sec_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, auto));
  gap: 32px;
  justify-content: space-between;
  align-items: center;
  margin-top: 57px;
}



.sec_making_our_bags .sec_text {
  max-width: 346px;
  width: 100%;
}
.sec_content .card_heading_b {
  margin: 14px 0;
  text-transform: initial;
}
.sec_making_our_bags .body_text{
  line-height: 19px;
}
.sec_making_our_bags .cta_btn {
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
  iframe{
    height: 221px;
    width: 100%;
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
