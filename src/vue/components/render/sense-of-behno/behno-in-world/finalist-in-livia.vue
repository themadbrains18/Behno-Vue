<template>
<!-- Sction Finalist Livia Start -->
    <section class="sec_finalist_livia">
        <div class="big_container">
            <div class="sec_video">
                <template v-if="shopifyData.checkImage === 'true'">
                    <video  autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true" preload="none" >
                        <source :src=(shopifyData.videolink) />
                    </video>
                </template>
                <template v-else>
                    <img class="grid_img" :src=(shopifyData.checkImage.src) :placeholder=(shopifyData.checkImage.placeholder) :alt=(shopifyData.checkImage.alt) />
                </template>
            </div>
            <div class="main_contenet">
                <h2 class="sec_heading">
                    {{ shopifyData.secHeading }}
                </h2>
                <h4 class="card_heading_b">
                    {{ shopifyData.secSubHeading }}

                </h4>
                <p class="body_text">
                    {{ shopifyData.secInfo }}
                </p>
            </div>
            <div class="sec_img">
                <img class="main-img" :src=(shopifyData.secImg.src) :placeholder=(shopifyData.secImg.placeholder) :alt=(shopifyData.secImg.alt) />  
                <div class="img_grid"> 
                    <div v-for="(value, key) in shopifyData.Slide" :key="key" >
                        <!-- <v-lazy-image :src=(value.imgUrl.src) :placeholder=(value.imgUrl.placeholder) :alt=(value.imgUrl.alt) /> -->
                        <img
                            :src="value.imgUrl.src"
                            :src-placeholder="value.imgUrl.placeholder"
                            :alt="value.imgUrl.alt"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- Sction Finalist Livia End -->
</template>
<style scoped>
    .sec_finalist_livia{
        padding-bottom:90px;
    }
    .sec_video iframe{
        width: 100%;
        height: 715px;
    }
    .sec_heading{
        line-height: 44px;
    }
    .main_contenet{
        max-width: 665px;
        margin: 160px auto 0 auto;
        width: 100%;
    }
    .sec_content{
        display: grid;
        grid-template-columns: 28% 64%;
        align-items: center;
        margin-top: 34px;
        gap: 30px;
        
    }
    .card_heading_b{
        margin: 14px 0;
        text-transform: initial;
    }
    .body_text{
        line-height: 19px;
    }
    .sec_img{
        margin-top: 75px;
    }
    /* Responsive Css Code */
    @media screen  and (max-width: 991px){
        .sec_finalist_livia{
            padding-bottom:0px ;
        }
        .main_contenet{
            margin-top: 100px;
            padding: 0 9px;
        }
        .big_container{
            padding: 0 8px;
        }
        .sec_img{
            margin-top: 5px;
        }
        .sec_video iframe{
            height: 500px;
        }
    }

    @media screen  and (max-width: 767px){
        .main_contenet{
            margin-top: 20px;
        }
        .sec_video iframe{
            height: 214px;
        }
    }
</style>

<script>
export default{
    props:{
        shopifyData:{
            type:Object,
            required:true,
        }
    }
}
</script>
