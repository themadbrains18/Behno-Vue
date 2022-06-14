<template>
    <section class="image_and_text_sec " v-if="shopifyData.checkSection == 'true'" >
        <!-- Sec Content -->
        <div class="sec_content">
            <div class="sec_img">
                <div class="product_popup" >
                    <img :src=(shopifyData.secImg.src) :src-placeholder=(shopifyData.secImg.placeholder) :alt=(shopifyData.secImg.alt) @click="toggle_selection_for()"/>
                    <productPopup :productData=(shopifyData.productData)  :class="{ active: isactive.includes() }"  @close="toggle_selection_for()"/>
                </div>
                <h2 class="img_text" v-if="shopifyData.checkImgHeading == 'true'" >{{ shopifyData.imgHeading }}</h2>
                <button class="shop_cta subtitle"  @click="toggle_selection_for()">
                    {{ shopifyData.secCta }}
                </button>
            </div>
            <div class="sec_text">
                <p class="body_text" v-for="(item, key) in shopifyData.paragraph" :key="key">
                    {{ item.para }}
                </p>
            </div>
        </div>
    </section>
</template>
<style scoped>

    .image_and_text_sec.active .body_text,.image_and_text_sec.active .shop_cta.subtitle{
        color: #FFFFFF;
    }
    
    .image_and_text_sec{
        padding: 56px 30px 40px;           
    }
    .image_and_text_sec .product_popup img{
        width: 100%;
    }
    .sec_content{
        display: flex;
        align-items: flex-start;
        gap: 28px;
        max-width: 940px;
        margin: 0 auto;
    }
    .sec_img {
        position: relative;
        width: 48%;
    }
    .sec_img img{
        display: block;
    }
    .sec_text {
        width: 50%;
    }
    .img_text{
        font-weight: 700;
        font-size: 100px;
        line-height: 122px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        white-space: nowrap;
        text-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .shop_cta{
        margin-top: 8px;
    }
    /* Responsive Breakpoints */
    @media(max-width:767px){
        .sec_img,
        .sec_text{
            width: 100%;
        }
        .sec_text{
            padding: 0 9px 0 13px;
        }
        .image_and_text_sec{
            padding: 0 0px 35px;           
        }
        .sec_content{
            flex-direction: column;
            gap: 24px;
        }
        .shop_cta{
            margin: 10px 0 0 13px;
        }
        .sec_img img{
            width: 100%;
        }
        .img_text{
            white-space: break-spaces;
        }
    }

</style>

<script>
import productPopup from '../product-popup.vue'

export default {
    components:{
        productPopup
    },
    methods: {
    toggle_selection_for(key) {
      if(window.innerWidth <= 768){
        if (this.isactive.includes(key)) {
          this.isactive = this.isactive.filter(
            (item) => item !== key
          );
        } else {
          this.isactive.push(key);
        }
      }
    },
  },
    data:()=>{
    window.addEventListener("scroll",()=>{
        if(document.querySelectorAll(".image_and_text_sec")[1]){
            let VideoSection=document.querySelectorAll(".image_and_text_sec")[1];
            VideoSection.getBoundingClientRect();
            if(VideoSection.getBoundingClientRect().top<0){
                document.body.classList.remove("active-Bg");
                VideoSection.classList.remove("active")
            }
            else{
                VideoSection.classList.add("active")
            }
        }
    });    
        return {
            isactive: [],
            windowWidth: window.innerWidth
    }
  },
    props:{
        shopifyData:{
            type:Object,
            required:true,
        }
    }
}
</script>