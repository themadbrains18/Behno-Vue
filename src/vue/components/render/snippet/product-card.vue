<template>
        <div class="card" v-if="product.images.length>0" @mouseenter="isMobile==false?productId=product.id:''" @mouseleave="cardmouseleave(product.id)">
            <a :href="product.handle" >
                <div class="item_left" v-bind:class="{ item_left_active: product.id == productId }" :id="'item_left_'+product.id">{{product.variants[0].stock<=5 && product.variants[0].stock>=1?'ONLY '+ product.variants[0].stock +' LEFT':product.variants[0].stock==0?'Out Of Stock':''}}</div>

                <div class="product_img_wrapper" :id="'product_img_wrapper'+product.id" v-bind:class="{ out_of_stock: product.variants[0].stock == 0 }">
                    <img v-if="product.variants[0].featured_image!=null" :src="product.variants[0].featured_image.src" :id="product.id" />
                    <img  :src="product.images[0].src" :id="product.id"
                    @mouseenter="mouseover($event, product.images[product.images.length - 1].src)"
                    @mouseleave="mouseleave($event, product.images[0].src)" v-else />
                </div>
                <h5 class="card-title">{{ product.title }}</h5>
                <h5 class="card-title bold">${{ Math.floor(product.variants[0].price) }}</h5>
            </a>
            <div class="quickButton" v-bind:class="{ quickActive: isMobile==false?product.id == productId:true }">
                <div class="color_swatches">
                    <ul>
                        <li :key="color+index" class="nav-dots" v-for="(color,index) in product.options">
                            <span v-if="color.name.toLowerCase().includes('color')">
                                <template v-if="color.values.length <= 4 ">
                                    <label for="img-1" :key="colors" class="nav-dot" :style="inlineBgImage(colors)" :id="'img-dot-'+product.id+colors" @click="(e)=>onSelectColor(colors,product,e)" v-for="colors in color.values"></label>
                                </template>
                                <template v-else>
                                    <swiper
                                        :modules="modules"
                                        :slidesPerView="4"
                                        :slidesPerSlide="1"
                                        navigation
                                        >
                                            <swiper-slide :key="colors" v-for="colors in color.values">
                                                <label for="img-1"  class="nav-dot" :style="inlineBgImage(colors)" :id="'img-dot-'+product.id+colors" @click="(e)=>onSelectColor(colors,product,e)" ></label>
                                            </swiper-slide>
                                    </swiper>
                                </template>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="product_cta_wrapper">
                    <button :id="'quickAdd'+product.id" class="quickAdd" v-bind:class="{ quickAdd_deactive: product.variants[0].stock == 0 }" @click="addToCard(product)">
                        <span>Quick Add</span>
                    </button>
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
        product: {
            type: Object
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
            // console.log(product.id);
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
             
            // console.log(img);
            let varints= product.variants.filter(item=>{
                return item.title.includes(color)
            })
            if(varints.length>0){
                if(varints[0].featured_image!=null){
                    // console.log(varints[0].featured_image.src);
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
            // console.log(product);
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
.grid_inner .card {
    border: none;
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

@media (max-width: 767px) {
.card-title {
        font-size: 12px;
        margin: 10px 0 0;
    }
}
</style>
