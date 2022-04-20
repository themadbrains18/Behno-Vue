<template>
  <!-- Grid Two  -->
  <section class="grid_two big_container">
    <div class="grid_item">
      <a href="#" class="grid_img-wrap line-h-0 d-block">
        <img class="grid_img" src="{{ 'grid-two.jpg' | asset_url }}" alt="" />
      </a>
      <div class="grid_info">
        <h3 class="card_heading grid_heading">TITLE OF THE EDIT.</h3>
        <a href="#" class="link body_text"> Clickable link. </a>
      </div>
    </div>
    <div class="grid_item">
      <a href="#" class="grid_img-wrap line-h-0 d-block">
        <img class="grid_img" src="{{ 'grid-two1.jpg' | asset_url }}" alt="" />
      </a>
      <div class="grid_info">
        <h3 class="card_heading grid_heading">TITLE OF THE EDIT.</h3>
        <a href="#" class="link body_text"> Clickable link. </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Two Grid */
.grid_two {
  padding: 0 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px 5px;
}
.grid_img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.grid_heading {
  margin: 7px 0 5px;
}
@media only screen and (max-width: 991px) {
  .grid_two {
    padding: 0;
  }
}
@media only screen and (max-width: 767px) {
  .grid_two {
    grid-template-columns: 1fr;
  }
}
</style>
