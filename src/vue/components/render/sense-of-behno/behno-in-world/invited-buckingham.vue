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
                    <div class="sec-image-modifier">
                        <img :src=(shopifyData.imgUrl1.src) :alt=(shopifyData.imgUrl1.alt) :placeholder=(shopifyData.imgUrl1.placeholder)>
                        <p class="fig_caption">behno's looks for the Commonwelth Fashion Exchange.</p>
                    </div>
                    <template v-if="shopifyData.checkImage === 'true'">
                        <video  autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true" preload="none" >
                        <source :src=(shopifyData.videolink) >
                        </video>
                    </template>
                    <template v-else>
                        <v-lazy-image class="grid_img" :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt) />
                    </template>
                </div>
                <div class="sec_img">
                    <div class="t-start">
                        <div>
                            <img class="img_item1" :src=(shopifyData.imgUrl2.src) :alt=(shopifyData.imgUrl2.alt) :placeholder=(shopifyData.imgUrl2.placeholder)>
                            <p class="fig_caption">Hamish Bowles (L) , Anna Wintour (R)</p>
                        </div>
                    </div>
                    <div class="t-end">
                        <div class="item1">
                            <img class="img_item2" :src=(shopifyData.imgUrl3.src) :alt=(shopifyData.imgUrl3.alt) :placeholder=(shopifyData.imgUrl3.placeholder)>
                            <p class="fig_caption">Marama Anne Papau (L) , HRH The Duchess of Cambridge (R).</p>
                        </div>

                    </div>
                    <div class="t-center">
                        <div>
                            <img class="img_item3" :src=(shopifyData.imgUrl4.src) :alt=(shopifyData.imgUrl4.alt) :placeholder=(shopifyData.imgUrl4.placeholder)>
                            <p class="fig_caption">(L to R) Lisa Armstong , Shivam and Marama Anne Papau</p>
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
    .sec_video img{
        width: 300px;
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
        margin: 70px 0 70px auto;
        width: fit-content;
        text-align: start;
    }
     .img_item3{
        max-width: 330px;
        width: 100%;
        height: auto;
    }
    .fig_caption {
        font-family: 'adobe-caslon-pro',sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
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
    }
    @media screen  and (max-width: 575px){
        .img_item1{
            max-width: 160px;
        }
        .img_item2{
            max-width: 176px;
            margin: 25px 0 30px;
        }
        .img_item3{
            max-width: 117px;
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