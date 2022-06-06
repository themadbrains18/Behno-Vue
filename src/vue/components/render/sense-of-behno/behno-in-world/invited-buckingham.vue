<template>
    <section class="sec_invited_buckingham">
        <div class="big_container">
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
            <div class="sec_content">
                <div class="sec_video">
                    <div class="sec-image-modifier" v-if="shopifyData.collageData[0]">                        
                        <img class="item1" :src=(shopifyData.collageData[0].imgUrl.src) :src-placeholder=(shopifyData.collageData[0].imgUrl.placeholder)  :alt=(shopifyData.collageData[0].imgUrl.alt)>
                        <p class="fig_caption">{{ shopifyData.collageData[0].imageInfo }}</p>
                    </div>
                    <template v-if="shopifyData.checkImage === 'true'">
                        <video  autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true" preload="none" >
                            <source :src=(shopifyData.videolink) >
                        </video>
                    </template>
                    <template v-else>
                        <img class="grid_img" :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt) />
                    </template>
                </div>
                <div class="sec_img">
                    <div class="t-start">
                        <div class="img_item1" v-if="shopifyData.collageData[1]">
                            <img  :src=(shopifyData.collageData[1].imgUrl.src) :src-placeholder=(shopifyData.collageData[1].imgUrl.placeholder)  :alt=(shopifyData.collageData[1].imgUrl.alt)>
                            <p class="fig_caption">{{ shopifyData.collageData[1].imageInfo }}</p>
                        </div>
                    </div>
                    <div class="t-end">
                        <div class="item1 img_item2" v-if="shopifyData.collageData[2]">
                            <img :src=(shopifyData.collageData[2].imgUrl.src) :src-placeholder=(shopifyData.collageData[2].imgUrl.placeholder)  :alt=(shopifyData.collageData[2].imgUrl.alt)>
                            <p class="fig_caption">{{ shopifyData.collageData[2].imageInfo }}</p>
                        </div>
                    </div>
                    <div class="t-center">
                        <div class="img_item3" v-if="shopifyData.collageData[3]">
                            <img  :src=(shopifyData.collageData[3].imgUrl.src) :src-placeholder=(shopifyData.collageData[3].imgUrl.placeholder)  :alt=(shopifyData.collageData[3].imgUrl.alt)>
                            <p class="fig_caption">{{ shopifyData.collageData[3].imageInfo }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .sec_invited_buckingham{
        padding: 125px 0 46px;
    }
    
    .sec_heading{
        line-height: 44px;
    }
    .main_contenet{
        max-width: 665px;
        margin: 0 auto;
        width: 100%;
    }
    .sec_content{
        display: grid;
        grid-template-columns: 28% 64%;
        align-items: center;
        margin-top: 34px;
        gap: 30px;
        justify-content: center;
    }
    .card_heading_b{
        margin: 14px 0;
        text-transform: initial;
    }
    .body_text{
        line-height: 19px;
    }
    .sec_video{
        max-width: 300px;
        width: 100%;
    }
    .img_item1{
        max-width: 540px;
        width: 100%;
        height: auto;
    }
    .img_item2{
        max-width: 490px;
        width: 100%;
        height: auto;
    }
    .item1{
        margin: 70px 0 0px auto;
        width: fit-content;
        text-align: start;
    }
     .img_item3{
        max-width: 330px;
        width: 100%;
        height: auto;
        margin: 100px auto 0;
    }
    .fig_caption {
        text-align: start;
    }
    .sec-image-modifier{
        margin-bottom: 30px;
    }
    
    /* Responsive Css Code */
    @media screen  and (max-width: 991px){
        .sec_video video{
            width: 100%;
        }
        .big_container{
            padding: 0 5px;
        }
        .main_contenet{
            padding: 0 9px;
        }
        .sec_invited_buckingham{
            padding: 80px 0 100px;
        }
    }
    @media screen  and (max-width: 991px){
    .sec_invited_buckingham{
        padding: 58px 0 152px;
    }
    .sec_content{
        margin-top: 43px;
    }
    .fig_caption{
        font-size: 10px !important;
    }
    }
    @media screen  and (max-width: 575px){
        .img_item1{
            max-width: 160px;
        }
        .img_item2{
            max-width: 176px;
            margin: 25px 0 30px auto;
        }
        .img_item3{
            max-width: 117px;
            margin: 0 0 0 35px;
        }
        .sec_video video,
        .sec_video img
        {
            width: 90px;
        }
    }
</style>    

<script>
    export default{
        props:{
            shopifyData:{
                type: Object,
                required: true,
            }
        }   
    }
</script>