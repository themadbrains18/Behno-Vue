<template>
    <section class="video_sec">
        <!-- Sec Head -->
        <div class="sec_head bg-sand">
            <h1 class="main_heading">{{shopifyData.SectionHeading}}</h1>
        </div>
        <!-- Sec Content -->
        <div class="sec_content bg-black t-center">
            <!-- <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/dummy-video.jpg?v=1651039976" alt="error"> -->
            <template v-if="shopifyData.checkImage === 'true'">
                <video  autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true" preload="none" >
                    <source :src=(shopifyData.videolink) />
                </video>
            </template>
            <template v-else>
                <img class="grid_img" :src=(shopifyData.checkImage.src) :placeholder=(shopifyData.checkImage.placeholder) :alt=(shopifyData.checkImage.alt) />
            </template>
        </div>
    </section>
</template>

<script>
export default({
    props:{
        shopifyData:{
            type:Object,
            required:true,
        }
    }
})
</script>


<style scoped>
    .sec_head{
        padding: 0 40px 15px;
    }
    .main_heading{
        color: #EF0000;        
        font-family: 'Helvetica Neue',sans-serif;
        font-weight: 700;
        line-height: 69px;
    }
    .sec_content{   
        padding: 110px 54px 100px;
    }
    .sec_content iframe{  
        max-width: 1020px;
        margin: 0 auto  ;
    }
    .sec_content.bg-black iframe {
        width: 100%;
        height: 570px;
    }
    /* Responsive Breakpoints */
    @media(max-width:767px){
        .sec_content{   
            padding: 67px 57px 159px;
        }        
        .sec_head{
            padding: 0 13px 60px;
        }
        .main_heading{
            font-size: 27px;
            line-height: 27px;
        }
        .sec_content.bg-black iframe {
            height: 155px;
        }
    }
</style>