<template>
<!-- Sction Finalist Livia Start -->
    <section class="sec_finalist_livia">
        <div class="big_container">
            <div class="sec_video">
                <template v-if="shopifyData.checkImage === 'true'">
                    <video  controls autoplay="true" loop="true" muted="true"  controlsList="nodownload" webkit-playsinline="true" playsinline="true" preload="none" >
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
                <div class="main_bg" v-if="shopifyData.collageData[0]"> 
                    <img class="main-img" :src=(shopifyData.collageData[0].imgUrl.src) :src-placeholder=(shopifyData.collageData[0].imgUrl.placeholder)  :alt=(shopifyData.collageData[0].imgUrl.alt)>  
                    <p class="fig_caption">{{ shopifyData.collageData[0].imageInfo }}</p>
                </div>
                <div class="img_grid"> 
                    <div class="grid_items">
                        <div v-if="shopifyData.collageData[1]">
                            <img :src=(shopifyData.collageData[1].imgUrl.src) :src-placeholder=(shopifyData.collageData[1].imgUrl.placeholder)  :alt=(shopifyData.collageData[1].imgUrl.alt)>  
                            <p class="fig_caption">{{ shopifyData.collageData[1].imageInfo }}</p>
                        </div>
                        <div v-if="shopifyData.collageData[2]">
                            <img :src=(shopifyData.collageData[2].imgUrl.src) :src-placeholder=(shopifyData.collageData[2].imgUrl.placeholder)  :alt=(shopifyData.collageData[2].imgUrl.alt)>  
                            <p class="fig_caption">{{ shopifyData.collageData[2].imageInfo }}</p>
                        </div>
                    </div>
                    <div class="grid_items">
                        <div v-if="shopifyData.collageData[3]">
                            <img :src=(shopifyData.collageData[3].imgUrl.src) :src-placeholder=(shopifyData.collageData[3].imgUrl.placeholder)  :alt=(shopifyData.collageData[3].imgUrl.alt)>  
                            <p class="fig_caption">{{ shopifyData.collageData[3].imageInfo }}</p>
                        </div>

                    </div>
                    <div class="grid_items">
                        <div v-if="shopifyData.collageData[4]">
                            <img :src=(shopifyData.collageData[4].imgUrl.src) :src-placeholder=(shopifyData.collageData[4].imgUrl.placeholder)  :alt=(shopifyData.collageData[4].imgUrl.alt)>  
                            <p class="fig_caption">{{ shopifyData.collageData[4].imageInfo }}</p>
                        </div>
                        <div v-if="shopifyData.collageData[5]">
                            <img :src=(shopifyData.collageData[5].imgUrl.src) :src-placeholder=(shopifyData.collageData[5].imgUrl.placeholder)  :alt=(shopifyData.collageData[5].imgUrl.alt)>  
                            <p class="fig_caption">{{ shopifyData.collageData[5].imageInfo }}</p>
                        </div>
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
    .main-img{
        width: 100%;
    }
    .img_grid{
        display: flex;
        align-items: center;
        column-gap: 70px;
        justify-content: space-between;
    }
    .grid_items{
        display: flex;
        flex-direction: column;
        gap: 160px;
    }
    p.fig_caption {
        font-family: 'adobe-caslon-pro',sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
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
        .grid_items{
            gap: 60px;
        }
        .img_grid{
            gap: 23px;
        }
        .fig_caption{
            font-size: 10px !important;
        }
        .sec_video {
            width: calc(100% + 16px);
            margin-left: -8px;
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
