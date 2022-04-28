-<template>

    <!-- Section Garment Behind Scenes  Start -->
    <section class="sec_behind_scenes">
        <div class="big_container">
            <h2 class="sec_heading">
                Behind the scenes (and the people).
            </h2>
            <p class="body_text">
                BTS with Dan Smith and Kent Mathews as they spend time at MSA Ethos.
            </p>
            <div class="sec_content">
                <div class="sec_img">
                    <img src="https://i.shgcdn.com/936c9978-2dc9-49de-8515-43c0bb09048c/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">
                </div>
                <div class="sec_video">
                    <video width="340" height="604" autoplay="true" loop="true" muted="true" webkit-playsinline="true" playsinline="true"  preload="none" class="shogun-image ">
                        <source src="https://i.shgcdn.com/dff50808-792e-478f-bb8f-4066cb73301e/gif2video/-/format/webm/-/quality/lighter/" type="video/webm">
                        <source src="https://i.shgcdn.com/dff50808-792e-478f-bb8f-4066cb73301e/gif2video/-/format/mp4/-/quality/lighter/" type="video/mp4">
                    </video>        
                </div>
            </div>
        </div>
    </section>
    <!-- Section Garment Behind Scenes  End -->
</template>

<style scoped>
.sec_behind_scenes{
    padding:  74px 0 117px;
}
.sec_heading,.body_text{
    text-align: center;
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

/* Responsive Css Code */
@media screen  and  (max-width: 1024px){
.sec_content{
    grid-template-columns: 75% 25%;
}
}
@media screen  and  (max-width: 991px){
    .sec_behind_scenes{
        padding: 50px 0 70px;
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
    .sec_video video{
        height: 200px;
    }
}
</style>