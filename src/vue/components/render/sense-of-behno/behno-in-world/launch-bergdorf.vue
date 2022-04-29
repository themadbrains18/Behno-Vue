<template>
  <!-- Garment Up-close Start -->
  <section class="sec_launch_bergdoft">
    <div class="big_container">
      <div class="sec_content">
        <div class="sec_slider modify-slider">
          <swiper
            :navigation="true"
            :modules="modules"
            :centeredSlides="true"
            :spaceBetween="100"
            :loop="true"
            class="mySwiper"
          >
            <swiper-slide>
              <img
                src="https://i.shgcdn.com/92d1339a-6a33-4105-91ae-ffc03d9cdcfc/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="Image-description"
              />
            </swiper-slide>

            <swiper-slide>
              <img
                src="https://i.shgcdn.com/e9b12bc6-f648-4ad7-a8fd-f7a842d504bf/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="Image-description"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://i.shgcdn.com/b005e3bd-2ad6-4730-b4d3-4b5bd463181f/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="Image-description"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="https://i.shgcdn.com/52b7e16d-10af-4f3a-b84d-86bb026a1cbd/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                alt="Image-description"
              />
            </swiper-slide>
          </swiper>
        </div>
        <!--    Section text        -->
        <div class="sec_text">
          <h2 class="sec_heading">Launch at Bergdorf Goodman, a crown jewel in luxury retail.</h2>
          <h4
            class="card_heading_b"
          >In Fall 2018, behno launched its first handbag collection at Bergdorf Goodman.</h4>
          <p
            class="body_text"
          >behno launched at Bergdorf Goodman with a celebratory breakfast with industry insiders, reporters, and editors from the fashion world. Betty Halbreich, Bergdorf Goodman’s most coveted personal shopper, attended the launch breakfast.</p>
        </div>
      </div>
      <a class="back_sense_behno samll_text" href="#">
            Back to The Sense of behno
        </a>
    </div>
  </section>
  <!-- Garment Up-close End -->
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation]
    };
  }
};
</script>

<style >
@media screen and (max-width: 767px) {
  .sec_launch_bergdoft .swiper-button-next {
    right: -5px !important;
  }
  .sec_launch_bergdoft .swiper-button-prev {
    left: -5px !important;
  }
}
@media screen and (max-width: 480px) {
.sec_launch_bergdoft .swiper-button-prev,.sec_launch_bergdoft .swiper-button-next{
    display: block!important;
}
}
</style>


<style scoped>
.sec_launch_bergdoft {
  padding-top: 136px;
}
.sec_content {
  display: grid;
  grid-template-columns: 47.5% 47.5%;
  align-items: center;
  gap: 32px;
}
.sec_text {
  max-width: 577px;
  width: 100%;
  margin: 0 auto;
}

.swiper-slide img {
  width: 100%;
}
.sec_heading {
  line-height: 41px;
}
.card_heading_b {
  text-transform: initial;
  margin: 14px 0;
}
.body_text {
  line-height: 19px;
}
.swiper {
  padding: 0 55px;
}

.back_sense_behno{
    text-decoration: underline;
    display: block;
    width: fit-content;
    margin:  100px auto 127px;

}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_launch_bergdoft {
    padding-top: 80px ;
  }
  .sec_launch_bergdoft .big_container {
    padding: 0;
  }
  .sec_launch_bergdoft .sec_content {
    grid-template-columns: 100%;
  }
  .sec_slider {
    order: 1;
  }
  .sec_heading {
    margin-bottom: 25px;
  }
  .sec_text {
    max-width: 100%;
    padding: 0 25px;
  }
  .back_sense_behno{
        margin:  60px auto 40px;
  }
}

@media screen and (max-width: 767px) {
  .sec_launch_bergdoft {
    padding-top: 20px ;
  }
  .sec_heading {
    margin-bottom: 18px;
    text-align: start;
  }
  .swiper {
    padding: 0 30px;
  }
  .back_sense_behno{
    margin:  45px auto 22px;
  } 
  .sec_launch_bergdoft .swiper-button-prev{
    display: block!important;
  }
}

</style>
