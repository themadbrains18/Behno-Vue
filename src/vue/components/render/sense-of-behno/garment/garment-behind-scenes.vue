-<template>

    <!-- Section Garment Behind Scenes  Start -->
    <section class="sec_behind_scenes">
        <div class="big_container">
            <div class="sec_head">          
                <h2 class="sec_heading">
                    {{ shopifyData.secHeading }}
                </h2>
                <p class="body_text">
                    {{ shopifyData.secInfo }}
                </p>
            </div>
            <div class="sec_content">
                <div class="sec_content_inner">
                    <div class="sec_img">
                        <div class="top_images">
                            <template v-if="shopifyData.collageData[0]"> 
                                <img class="item1" :src=(shopifyData.collageData[0].imgUrl.src) :src-placeholder=(shopifyData.collageData[0].imgUrl.placeholder)  :alt=(shopifyData.collageData[0].imgUrl.alt)>
                            </template>
                            <template v-if="shopifyData.collageData[1]"> 
                                <img class="item2" :src=(shopifyData.collageData[1].imgUrl.src) :src-placeholder=(shopifyData.collageData[1].imgUrl.placeholder)  :alt=(shopifyData.collageData[1].imgUrl.alt)>
                            </template>
                        </div>
                        <div class="bottom_images">
                            <div class="img_caption" v-if="shopifyData.collageData[2]"> 
                                <img class="item3" :src=(shopifyData.collageData[2].imgUrl.src) :src-placeholder=(shopifyData.collageData[2].imgUrl.placeholder)  :alt=(shopifyData.collageData[2].imgUrl.alt)>
                            </div>
                            <template v-if="shopifyData.collageData[3]">
                                <img class="item4" :src=(shopifyData.collageData[3].imgUrl.src) :src-placeholder=(shopifyData.collageData[3].imgUrl.placeholder)  :alt=(shopifyData.collageData[3].imgUrl.alt)>
                            </template>
                            <template v-if="shopifyData.collageData[4]">
                                <img class="item5" :src=(shopifyData.collageData[4].imgUrl.src) :src-placeholder=(shopifyData.collageData[4].imgUrl.placeholder)  :alt=(shopifyData.collageData[4].imgUrl.alt)>
                            </template>
                        </div>
                    </div>
                </div>
                    <div class="sec_video">
                         <template v-if="shopifyData.checkImage === 'true'">
                            <video  autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true" preload="none" >
                                <source :src=(shopifyData.videolink) >
                            </video>
                        </template>
                        <template v-else>
                            <img  :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt) />
                        </template>    
                    </div>
            </div>
            <p class="body_text body-modifier">
               {{ shopifyData.mobileCaption }}
            </p>
        </div>
    </section>
    <!-- Section Garment Behind Scenes  End -->
</template>

<script>
export default{
    props:{
        shopifyData: {
            type: Object,
            required: true,
        }
    }   
}
</script>


<style scoped>
.sec_behind_scenes{
    padding:  74px 0 117px;
}
.sec_head {
    max-width: fit-content;
    margin: 0 auto;
}
.sec_content{
    display: grid;
    grid-template-columns:70% 30%;
    align-items: center;
}
.sec_video{
    text-align: center;
}
.sec_video video{
    max-width: 340px;
    width: 100%;
    
}
.body_text{
    margin: 14px 0 26px;
}
.top_images,
.bottom_images
{
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-bottom: 50px;
    gap: 130px;
}
.bottom_images{
    gap: 40px;
    margin-top: -60px;
}
.top_images .item1{
    max-width: 320px;
    width: 100%;
}
.top_images .item2{
    max-width: 350px;
    width: 100%;
}
.bottom_images .img_caption {
    max-width: 330px;
    width: 100%;
}
.bottom_images .item4 {
    max-width: 257px;
    width: 100%;    
    margin-top: 40px;
}
.bottom_images .item5 {
    max-width: 278px;
    width: 100%;
    align-self: end;
}
.body_text.body-modifier{
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;
    color: #000000;
    margin-bottom: 0;
}

/* Responsive Css Code */

@media screen  and  (max-width: 1200px){
    .top_images{
        gap: 50px;
    }
    .bottom_images{
        gap: 10px;
    }
}
@media screen  and  (max-width: 1024px){
.sec_content{
    grid-template-columns: 75% 25%;
}
}
@media screen  and  (max-width: 991px){
    .sec_behind_scenes{
        padding: 50px 0 70px;
    }
    .sec_content[data-v-461b26cc] {
        gap: 20px;
    }
    .bottom_images,
    .top_images
    {
        gap: 35px;
        margin-top: 0px;
    }
    .top_images .item1{
        max-width: 148px;
    }
    .top_images .item2 {
        max-width: 170px;
    }
    .bottom_images .img_caption{
        max-width: 200px;
    }
    .bottom_images .item4{
        max-width: 117px;
        margin-top: 30px;
    }
    .bottom_images .item5{
        max-width: 188px;
    }


}
@media screen  and  (max-width: 767px){
    .sec_behind_scenes{
        padding: 41px 0 ;
    }
    .sec_heading{
        line-height: 41px;
    }
    .body_text{
        margin-bottom:38px;
    }
    .sec_video video{
        height: 300px;
    }
}
@media screen  and  (max-width: 767px){
    /* .sec_content {
        grid-template-columns: 50% 50%;
    } */
    .sec_content{
        justify-content: flex-end;
        gap: 15px;
    }
    .top_images,
    .bottom_images{
        gap: 16px;
        margin: 0;
    }
    .bottom_images{
        margin-top:20px ;
    }
    .sec_video video{
        height: 200px;
    }
    .bottom_images .item5{
        max-width: 95px;
    }
  
    .bottom_images .item4{
        margin-top: 20px;
    }
   
    .fig_caption{
        font-size: 7px;
        max-width: 80px;
    }
}
@media screen  and  (max-width: 480px){
    .top_images{
        gap: 35px;
    }
    .bottom_images{
        gap: 10px;
    }
    .top_images .item1{
        max-width: 84px;
    }
    .top_images .item2 {
        max-width: 88px;
    }
    .bottom_images .img_caption{
        max-width: 81px;
    } 
    .bottom_images .item4{
        max-width: 65px;
    }
    .bottom_images .item5{
        max-width: 70px;
    }
}
@media screen and (min-width:768px) {
    .body_text.body-modifier{
        display: none;
    }
}
</style>