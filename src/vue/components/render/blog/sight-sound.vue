<template>
    <section class="sight_sound " v-if="shopifyData.checkSection == 'true'" >
        <!-- Sec head -->
        <div class="sec_head">
            <h1 class="sec_heading">
                <template v-for="(item, key) in shopifyData.slide" :key="key">
                    <span >{{ item.secHeading }}</span>
                </template>
            </h1>
        </div>
        <!-- Sec Content -->
        <div class="sec_content">
            <div class="sec_img">
                <div class="product_popup">
                    <img @click="toggle_selection_for(key)" :src=(shopifyData.secImg.src)  :src-placeholder=(shopifyData.secImg.placeholder) :alt=(shopifyData.secImg.alt)>
                    <template v-if="shopifyData.productData">
                        <productPopup :productData=(shopifyData.productData)  :class="{ active: isactive.includes(key) }"  @close="toggle_selection_for(key)"/>
                    </template>
                </div>
                <div class="shop_cta" >
                    
                    <button class="subtitle"  @click="toggle_selection_for(key)" >
                        {{ shopifyData.secCta }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        shopifyData:{
            type:Object,
            required:true,
        }
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
   data() {
    return {
      windowWidth: window.innerWidth,
      isactive: []
    };
  },
}
</script>

<style scoped>
    .sight_sound .sec_img{
        cursor: pointer;
    }
    .sight_sound{
        padding:90px 0 43px;
        position: relative;
    }

    .sec_heading{
        margin-bottom: 121px;
    }
    .sec_heading span{
        font-family: 'Big Caslon',sans-serif;
        font-weight: 400;
        font-size: 101px;
        line-height: 89px;
        text-align: center;
        color: #000000;
        display: block;
        width: fit-content;
        margin: 0 auto;
    }
    .sec_content > img{
        display: block;
    }
    .shop_cta{
        margin-top:13px;
    }
    .sec_content{
        padding:0 54px;
    }
    .product_popup > img{ 
        width: 100%;
    }
    .sight_sound:after{
        content: '';
        background: #000;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 30px);
        height: 1px;
    }
    /* Responsive Breakpoints */
    @media(max-width:767px){
        .sec_content{
            padding:0;
        }
        .sec_heading span{
            font-size: 50px;
            line-height: 56px;
        }
        .shop_cta{
            margin-left: 13px;
        }
        .sec_heading{
            margin-bottom: 50px;
        }
        .sight_sound{
            padding:60px 0 43px;
        }
    }
</style>

