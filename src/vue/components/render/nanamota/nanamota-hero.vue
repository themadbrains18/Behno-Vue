<template>
    <!-- Hero Section -->
    <section class="tmb_hero_sec" v-if="shopifyData.checkSection=='false'">
       <div class="hero_sec_imgContainer">
        <img
            :src="shopifyData.bannerimg.src"
            :src-placeholder="shopifyData.bannerimg.placeholder"
            :alt="shopifyData.bannerimg.alt"
          >
        <!-- video show at 991 -->
        <video  preload="none" class="shogun-image ">
        <source :src="(shopifyData.bannerMobileImg)">
      </video>
       </div>
    </section>
</template>


<style scoped>
.hero_sec_imgContainer{
   text-align: center;
}
.hero_sec_imgContainer video{
    display:none;
}
/*=== Breakpoint at 991px ===*/
@media only screen and (max-width: 991px) {
 .hero_sec_imgContainer img{
    display:none;
 }
 .hero_sec_imgContainer video{
    display:block;
 }  
}
</style>

<script>

export default ({
   props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
})
</script>



