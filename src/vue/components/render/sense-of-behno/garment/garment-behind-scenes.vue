-<template>

    <!-- Section Garment Behind Scenes  Start -->
    <section class="sec_behind_scenes">
        <div class="big_container">
            <h2 class="sec_heading">
                {{ shopifyData.secHeading }}
            </h2>
            <p class="body_text">
                {{ shopifyData.secInfo }}
            </p>
            <div class="sec_content">
                <div class="sec_content_inner">
                    <div class="sec_img">
                        <div class="top_images">
                            <img class="item1"  src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1._GWP.jpg?v=1652700212" alt="">
                            <img class="item2" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/2-GWP.jpg?v=1652700212" alt="">
                        </div>
                        <div class="bottom_images">
                            <div class="img_caption"> 
                                <img class="item3" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/3-GWP.jpg?v=1652700212" alt="">
                                <p class="fig_caption">(From left to right). Kent Methews and Dan Smith At MSA Ethos.</p>
                            </div>
                            <img class="item4" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/4-GWP.jpg?v=1652700212" alt="">
                            <img class="item5" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/5._GWP.jpg?v=1652700212" alt="">
                        </div>
                    </div>
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

<script>
export default{
    props:{
        shopifyData: {
            type: Object,
            required: true,
        }
    }   
}
</script>


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
.top_images,
.bottom_images
{
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-bottom: 50px;
    gap: 130px;
}
.bottom_images{
    gap: 60px;
    margin-top: -60px;
}
.top_images .item1{
    width: 320px;
}
.top_images .item2{
    width: 350px;
}
.bottom_images .img_caption {
    max-width: 330px;
    width: 100%;
}
.bottom_images .item4 {
    width: 257px;
    margin-top: 40px;
}
.bottom_images .item5 {
    width: 278px;
    align-self: end;
}

/* Responsive Css Code */
@media screen  and  (max-width: 1200px){
    .top_images{
        gap: 50px;
    }
    .bottom_images{
        gap: 10px;
    }
}
@media screen  and  (max-width: 1024px){
.sec_content{
    grid-template-columns: 75% 25%;
}
}
@media screen  and  (max-width: 991px){
    .sec_behind_scenes{
        padding: 50px 0 70px;
    }
    .sec_content[data-v-461b26cc] {
        gap: 20px;
    }
    .bottom_images,
    .top_images
    {
        gap: 35px;
        margin-top: -40px;
    }
    .top_images .item1{
        width: 148px;
    }
    .top_images .item2 {
        width: 170px;
    }
    .bottom_images .img_caption{
        width: 200px;
    }
    .bottom_images .item4{
        width: 117px;
        margin-top: 30px;
    }
    .bottom_images .item5{
        width: 188px;
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
    /* .sec_content {
        grid-template-columns: 50% 50%;
    } */
    .sec_content{
        justify-content: flex-end;
    }
    .top_images,
    .bottom_images{
        gap: 16px;
        margin: 0;
    }
    .sec_video video{
        height: 200px;
    }
    .top_images .item1{
        width: 84px;
    }
    .top_images .item2 {
        width: 88px;
    }
    .bottom_images .img_caption{
        width: 81px;
    }
    .bottom_images .item4{
        width: 65px;
        margin-top: 20px;
    }
    .bottom_images .item5{
        width: 70px;
    }
    .fig_caption{
        font-size: 6px;
        max-width: 80px;
    }
}
</style>