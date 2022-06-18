<template>
  <!-- Hero Section -->
  <section class="hero_sec t-center big_container">
    <h1 class="main_heading heroheading_top">{{ shopifyData.heading }} </h1>
    <a :href=(shopifyData.imagelink) >
      <v-lazy-image class="hero_img" 
      :src=(shopifyData.heroImage.imgSrc) 
      :src-placeholder=(shopifyData.heroImage.placeHolder)
      :alt=(shopifyData.heroImage.alt)
      />
    </a>
    <h1 class="main_heading heroheading_bottom">{{ shopifyData.subHeading }}</h1>
  </section>
</template>
<style scoped>
/* index Hero sec */
.hero_sec {
  padding: 50px 0px 100px;
}
.hero_img {
  margin: 0 auto;
}
.heroheading_top {
  transform: translateY(40%);
}
.heroheading_bottom {
  transform: translateY(-45%);
}

@media only screen and (max-width: 767px) {
  .hero_sec {
    padding: 50px 0px 30px;
  }
  .heroheading_bottom {
    transform: translateY(-35%);
  }
}
</style>

 
<script>
import VLazyImage from "v-lazy-image";
export default {
  components: {
    VLazyImage,
  },
  data:()=>{
    // Hero Heading Animation
    window.addEventListener("scroll",()=>{
      let heroSec = document.querySelector(".hero_sec");
      let mainHeading = document.querySelectorAll(".hero_sec .main_heading");
      let heroSecHeight =  heroSec.getBoundingClientRect().height;

      let halfHeight = heroSecHeight / 1.2;

       if(window.scrollY <= halfHeight){
          for(let i of mainHeading){
            i.setAttribute("style",`opacity:${1 - (window.scrollY / halfHeight).toFixed(1)}; transition:0.4s;`);
          }
       }
    });    
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  }
};
</script>
