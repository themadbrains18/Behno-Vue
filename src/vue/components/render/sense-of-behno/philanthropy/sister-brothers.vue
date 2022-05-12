<template>
  <!-- Section Sister Brothers Start -->
  <section class="sec_sister-brothers">
    <div class="big_container">
      <h2 class="card_heading_b">A SISTER AND HER BROTHERS</h2>
      <div class="sec_content">
        <img
          src="https://i.shgcdn.com/ab501f7d-2a14-4f03-be00-b0b0226fdcb0/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt="Image-Description"
        />
        <img
          src="https://i.shgcdn.com/9a4d26f6-05f3-424f-a608-6d546e517ac0/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt="Image-Description"
        />
      </div>
    </div>
  </section>
  <!-- Section Sister Brothers End -->
</template>

<!-- Section Sister Brothers Css Code Start -->
<style scoped>
.sec_sister-brothers {
  padding-top: 73px;
}
.big_container{
    padding: 0 24px;
}
.card_heading_b {
  margin-bottom: 19px;
  text-align: center;
  text-transform: initial;
}
.sec_content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 12px;
}
@media screen and (max-width: 991px) {
    .sec_content{
        gap: 10px;
        grid-template-columns: 1fr;
    }
    .big_container{
        padding: 0 9px;
    }
}
</style>
<!-- Section Sister Brothers Css Code End -->