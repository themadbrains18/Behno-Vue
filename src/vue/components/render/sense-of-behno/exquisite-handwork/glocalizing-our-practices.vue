<template>
    <section class="sec_glocalizing_our_practices">
        <div class="big_container">
            <div class="main_contenet">
                <h2 class="sec_heading">
                    {{shopifyData.secHeading}}
                </h2>
                <h4 class="card_heading_b">
                    {{shopifyData.subHeading}}
                </h4>
                <p class="body_text" v-for="(value, key) in shopifyData.paragraphData" :key="key">
                    {{ value.para }}
                </p>
            </div>
            <div class="sec_content">
                <div class="sec_img">
                    <div class="sec_img_inner">
                        <div class="images_row">
                            <div class="figCaption1" v-if="shopifyData.collageData[0]"> 
                                <img :src=(shopifyData.collageData[0].imgUrl.src) :src-placeholder=(shopifyData.collageData[0].imgUrl.placeholder)  :alt=(shopifyData.collageData[0].imgUrl.alt)>
                                <p class="fig_caption">{{ shopifyData.collageData[0].imageInfo }}</p>
                            </div>
                            <div class="figCaption2" v-if="shopifyData.collageData[1]"> 
                                <img :src=(shopifyData.collageData[1].imgUrl.src) :src-placeholder=(shopifyData.collageData[1].imgUrl.placeholder)  :alt=(shopifyData.collageData[1].imgUrl.alt)>
                                <p class="fig_caption">{{ shopifyData.collageData[1].imageInfo }}</p>
                            </div>
                            <div class="figCaption3" v-if="shopifyData.collageData[2]"> 
                                <img :src=(shopifyData.collageData[2].imgUrl.src) :src-placeholder=(shopifyData.collageData[2].imgUrl.placeholder)  :alt=(shopifyData.collageData[2].imgUrl.alt)>                                
                            </div>
                        </div>
                        <div class="images_row last">
                            <div class="figCaption4" v-if="shopifyData.collageData[3]"> 
                                <img :src=(shopifyData.collageData[3].imgUrl.src) :src-placeholder=(shopifyData.collageData[3].imgUrl.placeholder)  :alt=(shopifyData.collageData[3].imgUrl.alt)>
                                <p class="fig_caption">{{ shopifyData.collageData[3].imageInfo }}</p>
                            </div>
                            <div class="figCaption5" v-if="shopifyData.collageData[4]"> 
                                <img :src=(shopifyData.collageData[4].imgUrl.src) :src-placeholder=(shopifyData.collageData[4].imgUrl.placeholder)  :alt=(shopifyData.collageData[4].imgUrl.alt)>
                                <p class="fig_caption">{{ shopifyData.collageData[4].imageInfo }}</p>
                            </div>
                        </div>
                    </div>
                    
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
    }
}
</script>

<style scoped>
    .sec_glocalizing_our_practices{
        padding: 87px 0 0px;
    }
    
    .sec_heading{
        line-height: 44px;
    }
    .main_contenet{
        max-width: 494px;   
        margin: 0 auto;
        width: 100%;
    }
    .card_heading_b{
        margin: 14px 0;
        text-transform: initial;
    }
    .body_text{
        line-height: 19px;
        margin-bottom: 20px;
    }
    .body_text:last-child{
        margin-bottom:0px;
    }
   
    .sec_img{
        margin:  25px 0;
    }
    .images_row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
    .figCaption1{
        max-width: 345px;
        width: 100%;
    }
    .figCaption2{
        max-width: 484px;
        width: 100%;
    }
    .figCaption3{
        max-width: 295px;
        width: 100%;
        align-self: flex-start;
    }
    .figCaption4{
        max-width: 472px;
        width: 100%;
        margin-top: -68px;
    }
    .figCaption5{
        max-width: 571px;
        width: 100%;
    }
    .images_row.last{
        justify-content: space-evenly;        
    }
    /* Responsive Css Code */
    @media screen  and (max-width: 991px){
        .sec_glocalizing_our_practices{
            padding: 80px 0 100px;
        }
        .big_container{
            padding: 0 5px;
        }
        .sec_img{
            margin:  35px 0 70px;
        }
        .main_contenet{
            padding: 0 25px;
        }
        .images_row.last{
            margin-top: 20px;
        }
        
    }
    @media screen  and (max-width: 767px){
        .sec_glocalizing_our_practices{
            padding: 38px 0 53px;
        }
        .sec_content{
            margin-top: 43px;
        }
        .sec_img{
            margin: 45px 0 0px;
        }
        .images_row{
            justify-content: space-evenly;
            gap: 15px;
        }
        .fig_caption{
            font-size: 8px;
            line-height: 1;
        }
        .figCaption4{
            margin-top: -23px;
        }
   
    }
    @media screen  and (max-width: 480px){
        .figCaption4{
            max-width: 165px;
        }
        .figCaption1 {
            max-width: 90px;
        }
        .figCaption3{
            max-width: 95px;
        }     
    }
</style>    