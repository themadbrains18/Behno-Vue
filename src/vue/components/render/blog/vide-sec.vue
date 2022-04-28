<template>
    <section class="video_sec">
        <!-- Sec Head -->
        <div class="sec_head bg-sand">
            <h1 class="main_heading">“I WAS ALWAYS FEARLESS.”</h1>
        </div>
        <!-- Sec Content -->
        <div class="sec_content bg-black t-center">
            <!-- <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/dummy-video.jpg?v=1651039976" alt="error"> -->
            <iframe src="https://www.youtube.com/embed/fCUnpreQAoM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
</template>


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
        padding: 110px 210px 100px;
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