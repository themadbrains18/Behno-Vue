<template>
    <section class="video_sec">
        <!-- Sec Content -->
        <div class="sec_content bg-black t-center">
            <div class="sec_content_inner">
                <!-- <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/dummy-video.jpg?v=1651039976" alt="error"> -->
                <iframe src="https://www.youtube.com/embed/fCUnpreQAoM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="shop_cta">
                    <a href="#" class="subtitle" >SHOP THE BAG</a>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .video_sec{
        padding-top:129px;
    }
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
        padding: 110px 54px 80px;

    }
    .sec_content > img{ 
        display: block;
        width:100%;
    }

    .shop_cta{
        text-align: start;
        margin-top: 16px;
    }
    .subtitle{
        color:#fff;
    }
    .sec_content.bg-black iframe {
        width: 100%;
        height: 570px;
    }
    .sec_content_inner{
        max-width: 1020px;
        margin: 0 auto;
    }
    
    /* Responsive Breakpoints */
    @media(max-width:767px){
        .sec_content{   
            padding: 67px 57px 139px;
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