<template>
    <!-- Hero Section -->
    <section class="tmb_hero_sec">
       <div class="hero_sec_imgContainer">
        <!-- image hide at 991-->
        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/nanamota-banner.gif?v=1656576827" alt="">
        <!-- video show at 991 -->
        <video  preload="none" class="shogun-image ">
        <source src="https://i.shgcdn.com/db2966c4-5632-4d06-9bac-ff89f55cf4f8/gif2video/-/format/webm/-/quality/lighter/" type="video/webm">
        <source src="https://i.shgcdn.com/db2966c4-5632-4d06-9bac-ff89f55cf4f8/gif2video/-/format/mp4/-/quality/lighter/" type="video/mp4">
      </video>
       </div>
    </section>
</template>


<style scoped>
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




