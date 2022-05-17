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
                            <div class="figCaption1"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1-EXQUISITEHANDWORK.jpg?v=1652763172" alt="error" />
                                <p class="fig_caption">Some of the many zardozi colours available for us to choose from.</p>
                            </div>
                            <div class="figCaption2"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/2-EXQUISITEHANDWORK.jpg?v=1652763172" alt="error" />
                                <p class="fig_caption">Our go-to zardozi at the Malad.</p>
                            </div>
                            <div class="figCaption3"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/3-EXQUISITEHANDWORK.jpg?v=1652763172" alt="error" />
                            </div>
                        </div>
                        <div class="images_row last">
                            <div class="figCaption4"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/4-EXQUISITEHANDWORK.jpg?v=1652763172" alt="error" />
                                <p class="fig_caption">studio floor,embroidery threads.</p>
                            </div>
                            <div class="figCaption5"> 
                                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/5-EXQUISITEHANDWORK.jpg?v=1652763172" alt="error" />
                                <p class="fig_caption">Our go-to glass bead supplier at the Malad Market.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    
    <BackToTop/>

</template>

<script>
import BackToTop from "../../back-to-top.vue"
export default {
    props: {
        shopifyData: {
        type: Object,
        required: true,
        }
    },
    components : {
        BackToTop
    }
}
</script>

<style scoped>
    .sec_glocalizing_our_practices{
        padding: 87px 0 33px;
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
    .back_sense_behno{
        text-decoration: underline;
        display: block;
        width: fit-content;
        margin: 0 auto;
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
        width: 345px;
    }
    .figCaption2{
        width: 484px;
    }
    .figCaption3{
        width: 295px;
        align-self: flex-start;
    }
    .figCaption4{
        width: 472px;
        margin-top: -68px;
    }
    .figCaption5{
        width: 571px;
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
        
    }
    @media screen  and (max-width: 767px){
        .sec_glocalizing_our_practices{
            padding: 38px 0 100px;
        }
        .sec_content{
            margin-top: 43px;
        }
        .sec_img{
            margin: 45px 0 0px;
        }
        .images_row[data-v-dafdbb6c] {
            justify-content: space-evenly;
            gap: 15px;
        }
        .figCaption1{
            width: 95px;
        }
        .figCaption2{
            width: 130px;
        }
        .figCaption3{
            width: 80px;
        }
        .fig_caption{
            font-size: 8px;
            line-height: 1;
        }
        .figCaption4[data-v-dafdbb6c] {
            margin-top: -23px;
        }
    }
</style>    