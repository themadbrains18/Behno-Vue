<template>
    <section class="video_sec"  v-if="shopifyData.checkSection=='true'">
        <!-- Sec Head -->
        <div class="sec_head bg-sand" v-if="shopifyData.SectionShow=='true'" >
            <h1 class="main_heading">{{ shopifyData.SecHeading }}</h1>
        </div>
        <!-- Sec Content -->
        <div class="sec_content bg-black t-center" v-if="shopifyData.VideoShow === 'true'">
            <video  autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true" preload="none" >
                <source :src=(shopifyData.videolink) />
            </video>
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
        padding: 43px 40px 15px;
    }
    video{
        height: 570px;
        object-fit: cover;
        max-width: 1020px;
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
        video{
            height: 400px;
        }
    }

    @media(max-width:767px){
        video{
            height: 203px;
        }
    }
</style>