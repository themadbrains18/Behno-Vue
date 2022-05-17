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
                    <img :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.src) :alt=(shopifyData.imgUrl.alt) >
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
   
    .sec_img{
        margin:  25px 0;
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
        margin: 45px 0 98px;
    }
    }
</style>    