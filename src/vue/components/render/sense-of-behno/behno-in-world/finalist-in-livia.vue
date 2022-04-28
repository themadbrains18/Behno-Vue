<template>
<!-- Sction Finalist Livia Start -->
    <section class="sec_finalist_livia">
        <div class="big_container">
            <div class="sec_video">
                <iframe class="shogun-video-embed shogun-lazyload" src="https://www.youtube.com/embed/dNwEUHHsGa4?start=0&amp;end=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=dNwEUHHsGa4&amp;version=3&amp;rel=0" allowfullscreen></iframe>
            </div>
            <div class="main_contenet">
                <h2 class="sec_heading">
                    Top 5 Finalist in Livia Firth’s Green Carpet Challenge
                </h2>
                <h4 class="card_heading_b">
                    behno was nominated for the highest award in sustainability in the fashion industry.
                </h4>
                <p class="body_text">
                    behno was shortlisted for top 10, where behno founder, Shivam Punjya, pitched to a jury in Paris comprised of Ellie Goulding, Vogue UK editor-in-chief, Edward Enninful, CNN style correspondent, Derek Blasberg, television host and philanthropist, Petra Nemcova, investor, Carmen Busqets, Matchesfashion.com fashion director, Natalie Kingham, among others.
                    behno was enlisted as a top five finalist and attended The Green Carpet Awards in Milan, held at the Teatro alla Scala. The Green Carpet Awards were founded by Livia Firth and have been attended by the likes of Anna Wintour, Cate Blanchett, among other movers and shakers of the fashion and media worlds.
                </p>
            </div>
            <div class="sec_img">
                <img src="https://i.shgcdn.com/1138e428-8f9f-40a2-a93a-0d5e753f703a/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">  
            </div>
        </div>
    </section>
<!-- Sction Finalist Livia End -->
</template>
// Section Css COde
<style scoped>
    .sec_finalist_livia{
        padding-bottom:90px;
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
        margin: 160px auto 0 auto;
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
    }
    .sec_img{
        margin-top: 75px;
    }
    /* Responsive Css Code */
    @media screen  and (max-width: 991px){
        .sec_finalist_livia{
            padding-bottom:0px ;
        }
        .main_contenet{
            margin-top: 100px;
            padding: 0 9px;
        }
        .big_container{
            padding: 0 8px;
        }
        .sec_img{
            margin-top: 5px;
        }
        .sec_video iframe{
            height: 500px;
        }
    }

    @media screen  and (max-width: 767px){
        .main_contenet{
            margin-top: 20px;
        }
        .sec_video iframe{
            height: 214px;
        }
    }
</style>