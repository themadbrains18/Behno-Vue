<template>
  <!-- Hero Section -->
  <section class="hero_sec t-center big_container">
    <h1 class="main_heading heroheading_top">The World’s Finest,</h1>
    <img
      class="hero_img"
      src="{{ 'hero-img.jpg' | asset_url }}"
      alt="Hero Image"
    />
    <h1 class="main_heading heroheading_bottom">Consciously Made Handbags.</h1>
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
    padding: 50px 0px 70px;
  }
  .heroheading_bottom {
    transform: translateY(-35%);
  }
}
</style>

 