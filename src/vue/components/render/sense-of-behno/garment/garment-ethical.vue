<template>
<!-- Section Garment Ethical Start  -->
    <section class="sec_ethical">
        <div class="big_container">
            <div class="sec_content">
                <div class="sec_text">
                    <h2 class="sec_heading">
                        An Ethical Way. The only way.
                    </h2>
                    <p class="body_text">
                        A documentary film by Kent Mathews.
                    </p>
                </div>
                <div class="sec_img">
                    <iframe class="shogun-video-embed shogun-lazyload" src="https://www.youtube.com/embed/A6opxWqCCiM?start=0&amp;end=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=A6opxWqCCiM&amp;version=3&amp;rel=0" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </section>
<!-- Section Garment Ethical End -->
    
</template>
<style scoped>
.sec_ethical{
    background: #000000;
    padding: 117px  0 148px;
}
.big_container{
    padding:  0 50px 0 6px;
}
.sec_content{
    display:grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;    
    gap: 20px;
}
.sec_text{
    max-width: 395px;
    margin:  0 auto;
}
.sec_heading{
    margin-bottom: 4px;
    font-weight: 400;
}
.sec_heading,.body_text{
    color: #fff;

}
iframe {
    width: 695px;
    height: 390px;
    border: none;
}
/* Resposive css Code */
@media screen  and (max-width: 1200px){
    iframe {
        width: 500px;
    }
}
@media screen  and (max-width: 991px){
    .sec_ethical{
        padding: 90px 0 50px;
    }
    .sec_content{
        grid-template-columns: 1fr ;    
    }
    .big_container{
        padding: 0 7px;
    }
    .sec_img{
        text-align: center;
    }
    .sec_text{
        padding: 0 20px;
        max-width: 100%;
        margin: 0;
    }
    iframe {
        width: 100%;
    }
}
@media screen  and (max-width: 767px){
    .sec_ethical{
        padding: 43px 0 28px;
    }
}

</style>
