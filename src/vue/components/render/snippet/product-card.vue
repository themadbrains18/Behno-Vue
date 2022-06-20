<template>
  <div
    class="grid_inner"
    :class="{ grid_inner_max: gridMax, grid_inner_min: gridMin }"
  >
    <div
      v-for="product in productList"
      :key="product.id"
      class="product_item"
    >
      <div
        v-if="product.images.length>0"
        class="card"
        @mouseenter="isMobile==false?productId=product.id:''"
        @mouseleave="cardmouseleave(product.id)"
      >
        <a :href="product.handle">
          <div
            :id="'item_left_'+product.id"
            class="item_left"
            :class="{ item_left_active: product.id == productId }"
          >{{ product.variants[0].stock<=5 && product.variants[0].stock>=1?'ONLY '+ product.variants[0].stock +' LEFT':product.variants[0].stock==0?'Out Of Stock':'' }}</div>
          <div
            :id="'product_img_wrapper'+product.id"
            class="product_img_wrapper"
            :class="{ out_of_stock: product.variants[0].stock == 0 }"
          >
            <img
              v-if="product.variants[0].featured_image!=null"
              :id="product.id"
              :src="product.variants[0].featured_image.src"
            >
            <img
              v-else
              :id="product.id"
              :src="product.images[0].src"
              @mouseenter="mouseover($event, product.images[product.images.length - 1].src)"
              @mouseleave="mouseleave($event, product.images[0].src)"
            >
          </div>  
          <h5 class="card-title">{{ product.title }}</h5>
          <h5 class="card-title bold">${{ Math.floor(product.variants[0].price) }}</h5>
        </a>
        <div
          class="quickButton"
          :class="{ quickActive: isMobile==false?product.id == productId:true }"
        >
          <div class="color_swatches">
            <ul>
              <li
                v-for="(color,index) in product.options"
                :key="color+index"
                class="nav-dots"
              >
                <span v-if="color.name.toLowerCase().includes('color')">
                  <template v-if="color.values.length <= 4 ">
                    <label
                      v-for="colors in color.values"
                      :id="'img-dot-'+product.id+colors"
                      :key="colors"
                      for="img-1"
                      class="nav-dot"
                      :style="inlineBgImage(colors)"
                      @click="(e)=>onSelectColor(colors,product,e)"
                    />
                  </template>
                  <template v-else>
                    <swiper
                      :modules="modules"
                      :slides-per-view="4"
                      :slides-per-slide="1"
                      navigation
                    >
                      <swiper-slide
                        v-for="colors in color.values"
                        :key="colors"
                      >
                        <label
                          :id="'img-dot-'+product.id+colors"
                          for="img-1"
                          class="nav-dot"
                          :style="inlineBgImage(colors)"
                          @click="(e)=>onSelectColor(colors,product,e)"
                        />
                      </swiper-slide>
                    </swiper>
                  </template>
                </span>
              </li>
            </ul>
          </div>
          <div class="product_cta_wrapper">
            <button
              :id="'quickAdd'+product.id"
              class="quickAdd"
              :class="{ quickAdd_deactive: product.variants[0].stock == 0 }"
              @click="addToCard(product)"
            >
              <span>Quick Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },   
    props: {
        productList: {
            type: Array
        },
        isMobile:{
            type: Boolean
        }
    },
    data() {
        return{
            productId:0,
        }
    },
    methods: {
        cardmouseleave:function(id){
            this.productId=0;
            let quickAdd=document.querySelector('#quickAdd'+id);
            quickAdd.classList.remove("quickAdd_active");
        },
        /* change images on hover */
        mouseover: function (event, imgsrc) {
            event.target.src = imgsrc;
        },
        mouseleave: function (event, imgsrc) {
            event.target.src = imgsrc;
        },
        /* end change images on hover */
        
        inlineBgImage:function(colors){
            let color=colors.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
            let bgImage = "//cdn.shopify.com/s/files/1/0899/2182/files/" + color + ".png?v=5251390435792914590";

            let url=`background-image:url(${bgImage});`
            return url + 'background:'+ color;
        },
         onSelectColor:function(color,product,event){
            
            if(event.currentTarget.parentElement.children.length>1){
                let childcolor=event.currentTarget.parentElement.children;
                for(let item of childcolor){
                    item.classList.remove('activecolor')        
                }
            }
            event.currentTarget.classList.add('activecolor')
            let img=document.getElementById(product.id);
            let div=document.querySelector('#item_left_'+product.id);
            let product_img_div=document.querySelector('#product_img_wrapper'+product.id);
            let out_of_stock_text=document.querySelector('#out_of_stock_text'+product.id);
            let quickAdd=document.querySelector('#quickAdd'+product.id);
             
            
            let varints= product.variants.filter(item=>{
                return item.title.includes(color)
            })
            if(varints.length>0){
                if(varints[0].featured_image!=null){
                    
                    img.src=varints[0].featured_image.src;
                }
                div.textContent=varints[0].stock<=5?'ONLY '+varints[0].stock+' LEFT':'';

                if(varints[0].stock == 0){
                    div.textContent='Out Of Stock';
                    out_of_stock_text.classList.add("out_of_stock_text_active");
                    product_img_div.classList.add("out_of_stock");
                    quickAdd.classList.remove("quickAdd_active");
                    quickAdd.classList.add("quickAdd_deactive");
                }
                else{
                    out_of_stock_text.classList.remove("out_of_stock_text_active");
                    product_img_div.classList.remove("out_of_stock");
                    quickAdd.classList.remove("quickAdd_deactive");
                    quickAdd.classList.add("quickAdd_active");
                }
            }
        },
        addToCard:function(product){
            
        }
    }
}
</script>


<style>
/* .nav-dots .swiper-button-prev{
    position: static;
} */
.nav-dots .swiper-button-prev::after
{
    /* content: url(https://cdn.shopify.com/s/files/1/0577/1178/8125/files/color-swatches-arrow.svg?v=1653549630);
    position: static; */
    display: none !important;
}
.nav-dots .swiper-button-next::after{
    content: url(https://cdn.shopify.com/s/files/1/0577/1178/8125/files/color-swatches-arrow.svg?v=1653549630);
}
.nav-dots .swiper.swiper-initialized{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 0;
}
.nav-dots .swiper-button-next {
    position: static;
}

@media(max-width:767px) {
    .grid_inner .product_item:nth-child(5n) 
    {
        grid-column: 1 / span 2;
    }

}

</style>
<style scoped>
.card-title {
    font-size: 14px;
    text-align: left;
}

.card .card-title {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    margin-top: 6px;
}

.card>img {
    width: 100%;
    height: 100%;
}

.card-title.bold {
    font-weight: 700;
}

.item_left{
    text-align: end;
    height: 12px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 12px;
    align-items: center;
    letter-spacing: 0.02em;
    color: #878787;
    visibility: hidden;
}
.out_of_stock img{
    opacity: 0.2;
}   
.item_left_active{
    visibility: visible !important;
}

.grid_inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 6px;
    row-gap: 28px;
}

.grid_inner_max {
    grid-template-columns: repeat(6, 1fr) !important;
    transition: 0.3s;
}

.grid_inner_min {
    grid-template-columns: repeat(2, 1fr) !important;
    transition: 0.3s;
}

.grid_inner .card {
    border: none;
}

.quickButton .product_cta_wrapper{
    width: 50%;
    text-align: end;
}


.quickAdd{
    border: 1px solid #000;
    padding: 8px 30px;
    background: #FFFFFF;
    gap: 15px;
    flex-direction: row;
    align-items: flex-start;
    transition: 0.3s;
}
.quickButton .quickAdd:hover{
    background: #000;
}
.quickButton .quickAdd:hover span{
    color: #fff;
}
.quickAdd_deactive{
    visibility: hidden;
}
.quickAdd_active{
    visibility: visible;
}
.quickAdd span{
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    
}


.quickButton{
    justify-content: space-between; 
    display: flex;
    opacity: 0;
    visibility: hidden;
    align-items: center;
    transition: 0.3s;
}
.quickActive{
    opacity: 1;
    visibility: visible;
}

.quickButton ul{
    text-align: left;
    width: 50%;
}

.color_swatches {
    position: relative;
}

.nav-dots span {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: scroll;
    width: 100px;
}
.nav-dots span::-webkit-scrollbar{
    display: none;
}

.nav-dots .nav-dot {
  top: 0px;
  min-width: 13px;
  height: 13px;
  margin: 0 6px;
  position: relative;
  border-radius: 100%;
  display: inline-block;
  background: red;
  border: 1px solid #E0E0E0;
  cursor: pointer;
  transition: 0.3s;
}


@media (max-width: 1024px) {
    .quickAdd[data-v-bb57343a] {
        padding: 8px 20px;
    }
}
@media (max-width: 1024px) {
    .grid_inner {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 767px) {
.card-title {
        font-size: 12px;
        margin: 10px 0 0;
    }
    .grid_inner .product_item:nth-child(5n) 
    {
        grid-column: 1 / span 2;
    }
    .grid_inner {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2px;
        row-gap: 11px;
    }
    .product_cta_wrapper{
        display: none;
    }
}


</style>
