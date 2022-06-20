<template>
  <section class="shop_ndds_bottom">
    <div class="big_container">
      <div class="sec_head">
        <h4 class="card_heading_b">
          {{ shopifyData.secSubHeading }}
        </h4>
      </div>
      <div class="sec_content">
        <div
          id="productWrapper"
          class="product_wrapper"
        >
          <div class="produts_grid">
            <!-- product Card -->
            <template v-if="shopifyData.showProduct === 'true'">
              <div
                v-for="(value, key) in shopifyData.product"
                :key="key"
              >
                <div class="grid_item featured_carousel_item">
                  <a :href="value.productLink">
                    <img
                      :src="value.productImage"
                      alt=""
                    >
                    <span class="product_name subtitle">{{ value.productTitle }}</span>
                    <span class="product_price subtitle_b">{{ value.productPrie }}</span>
                  </a>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="sec_cta">
          <a
            :href="(shopifyData.secCtaLink)"
            class="cta_btn"
          >{{ shopifyData.secCtaText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        shopifyData: {
        type: Object,
        required: true,
        }
    },
    data(){
            window.addEventListener("DOMContentLoaded",()=>{
                let slider = document.querySelector('#productWrapper');
                let mouseDown = false;
                let startX, scrollLeft;
        
                let startDragging = function (e) {
                    mouseDown = true;
                    startX = e.pageX - slider.offsetLeft;
                    scrollLeft = slider.scrollLeft;
                };
                let stopDragging = function (event) {
                    mouseDown = false;
                };
                slider.addEventListener('mousemove', (e) => {
                    e.preventDefault();
                    if(!mouseDown) { return; }
                    const x = e.pageX - slider.offsetLeft;
                    const scroll = x - startX;
                    slider.scrollLeft = scrollLeft - scroll;
                });

                // Add the event listeners
                slider.addEventListener('mousedown', startDragging, false);
                slider.addEventListener('mouseup', stopDragging, false);
                slider.addEventListener('mouseleave', stopDragging, false);

        })
    }
}
</script>


<style scoped>
.shop_ndds_bottom{
    padding: 100px 0 20px;
}
.produts_grid{
    margin: 60px 0 101px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    align-items: flex-start;
    gap: 6px;
}
.card_heading_b{
    text-align: center;
}
.sec_cta{
    text-align: center;
}
.cta_btn{
    background-color:#F50000 ;
    color: #fff;
    font-weight: 400;
}
.grid_item img {
    min-width: 348px;
    width: 100%;
    /* height: 348px; */
    object-fit: cover;
}
.grid_item span {
    display: block;
}
.product_wrapper {
    overflow-x: scroll;
}
@media only screen and (min-width: 768px) {
.product_wrapper::-webkit-scrollbar {
    display: none;
}
}
@media only screen and (max-width: 767px) {
    .shop_ndds_bottom{
        padding: 20px 0 30px;
    }
    .produts_grid{
       margin:38px 0 75px ;
    }
    .subtitle_b{
        margin: 0;
    }
    .grid_item img[data-v-e20486aa] {
        min-width: 166px;
        height: 166px;
    }
}
@media only screen and (max-width: 480px) {
    .grid_item img{
        min-width: 166px;
    }
}
</style>
