<template>
  <!-- section lives weavers Start -->
  <section class="sec_partnership_with_ndss">
    <div class="big_container">
      <div class="sec_header">
        <h2 class="quotes_text">
          “WE LAUNCHED A VERY SPECIAL PARTNERSHIP WITH NDSS TO SUPPORT AND
          AMPLIFY THE TREMENDOUS WORK THEY DO FOR THE COMMUNITY.”
        </h2>
        <p class="body_text">This partnership is very personal to us. The Nini Bag, the jewel of this capsule collection, pays homage to behno’s founder’s darling sister, Nirali, nicknamed “Nini,” who has Down Syndrome.</p>
      </div>
      <div class="sec_video">
        <video autoplay="" loop="" webkit-playsinline="true" playsinline="true" preload="none" data-v-14a5dad6=""><source src="https://cdn.shopify.com/s/files/1/1000/3130/files/Full-Length-behno-on-the-Road.mp4?v=1651818176" data-v-14a5dad6=""></video>
      </div>
    </div>
  </section>
  <!-- section lives weavers End -->
</template>

<style scoped>
.sec_partnership_with_ndss {
  padding-top: 110px;
}
.body_text{ 
    line-height: 19px;
    margin: 20px 0 43px;
}
.sec_partnership_with_ndss .big_container {
  padding: 0 33px;
}
.quotes_text {
  color: #ef0000;
}

.sec_video{
    padding: 0 45px;    
}



/* Responsive Css Code */

@media only screen and (max-width: 1024px) {
  .sec_partnership_with_ndss {
    padding-top: 90px;
  }
  .body_text{
    margin: 10px 0 40px;
  }
  .quotes_text {
    font-size: 60px;
  }
  .sec_grid_img {
    padding: 0 35px;
  }
}
@media screen and (max-width: 991px) {
  .quotes_text {
    font-size: 40px;
  }
  .sec_partnership_with_ndss {
    padding-top: 60px;
  }
  
  .sec_grid_img {
    padding: 0 25px;
  }
  .sec_video{
    padding: 0 20px;
  }
}

@media screen and (max-width: 767px) {
  .sec_partnership_with_ndss {
    padding-top: 45px;
  }
  .quotes_text {
    font-size: 27px;
  }

  .sec_grid_img {
    row-gap: 5px;
    column-gap: 2px;
    padding: 0;
  }
  .sec_partnership_with_ndss .big_container {
    padding: 0 8px;
  }
  .sec_video{
    padding: 0 2px;
  }
}
</style>