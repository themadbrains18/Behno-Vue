<template>
<!-- Exquisite-Handwork-Hero Section Start -->
<section class="sec_exquisite_handwork_hero">
    <h2 class="card_heading_b">BEHNO IN THE WORLD</h2>
    <div class="sec_content">
        <iframe class="shogun-video-embed " src="https://www.youtube.com/embed/o-lg_1M7OiI?start=0&amp;end=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=o-lg_1M7OiI&amp;version=3&amp;rel=0" allowfullscreen="">
        </iframe>
    </div>
</section>
<!-- Exquisite-Handwork-Hero Section End -->
</template>
<style >
.sec_exquisite_handwork_hero iframe video{
    width: 100%!important;
    left: 0;
}
video{
    width: 100%!important;
}
</style>
<style scoped>
    .sec_exquisite_handwork_hero{
        padding-top: 40px;
    }
    iframe{
        height: 718px;
        width: 100%;
        border: none;
    }
    .sec_content{
        padding: 0 54px;
    }
    .card_heading_b {
        margin-bottom: 24px;
        text-align: center;
        text-transform: initial;
    }
    /* Responsive Css Code */
@media screen and (max-width: 1200px) {
    .sec_content{
        padding: 0 20px;
    }
}
@media screen and (max-width: 991px) {
    .card_heading_b {
        margin-bottom: 40px;
    }
    .sec_content{
        padding: 0 0px;
    }
    iframe{
        height: 518px;
    }
}
@media screen and (max-width: 767px) {
    iframe{
        height: 210px;
    }
}
</style>
