<template>

<section class="sec_speaking_angagment">
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
                <p class="body_text">
                    {{ shopifyData.InfoBreak }}
                </p>
            </div>
            <div class="sec_img">
                   <!-- <img :src=(shopifyData.imgUrl.src) :placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt) />   -->
                <div class="img_grid">
                    <div class="grid_items">
                        <div class="figCaption">  
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/slideimg1.jpg?v=1652527132" alt="">  
                            <p class="fig_caption">The speakers included (L to R ) Shivam, Andrea Reyes,Pattrick Duffy,Amanda Carr,Ashia Dearwester and Lilian Liu.</p>
                        </div>
                        <div class="figCaption middle">  
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/slideimg2.jpg?v=1652527144" alt="">  
                        </div>
                    </div>
                    <div class="grid_items">
                        <div class="figCaption">  
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/working-artisan-left.jpg?v=1652526860" alt="">  
                            <p class="fig_caption">Over 700 Indivisual gathred at the united Nations to discuss fashion as a social mobilizer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
</section>    
        
</template>
<style scoped>
    .sec_speaking_angagment{
        padding-top:46px;
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
        margin: 0 auto;
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
        margin-bottom: 20px;
    }
    .body_text:last-child{
        margin-bottom: 0px;
    }
    .sec_img{
        margin-top: 41px;
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
        align-items: center;
    }
    .fig_caption.middle{
        max-width: 520px;
        
    }

    /* Responsive Css Code */
    @media screen  and (max-width: 1200px){
        .img_grid > div{
            width: 50%;
        }
        .grid_items,
        .img_grid
        {
            gap: 43px;
        }
    }
    @media screen  and (max-width: 991px){
        .sec_speaking_angagment{
            padding-top:30px ;
        }
        .main_contenet{
            padding: 0 19px;
        }
        .big_container{
            padding: 0;
        }
        .sec_img{
            margin-top: 5px;
        }
        .sec_video iframe{
            height: 500px;
        }
        .img_grid{
            margin-top: 40px;
            padding: 0 15px;
        }
    }

    @media screen  and (max-width: 767px){
        .sec_speaking_angagment{
            padding-top:20px ;
        }
        .sec_video iframe{
            height: 214px;
        }
        .img_grid{
            gap: 23px;
        }
        .fig_caption{
            font-size: 8px;
        }
        .grid_items{
            gap: 26px;
        }
        .figCaption.middle {
            width: 80%;
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