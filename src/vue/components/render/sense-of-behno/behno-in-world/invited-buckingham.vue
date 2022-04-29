<template>
    <section class="sec_invited_buckingham">
        <div class="big_container">
            <div class="main_contenet">
                <h2 class="sec_heading">
                    We were invited to Buckingham Palace by Her Majesty, The Queen of England.
                </h2>
                <h4 class="card_heading_b">
                    behno was honored as the only American brand invited to be in the Commonwealth Fashion Exchange to present an ethical fashion eveningwear look to Her Royal Highness, The Duchess of Cambridge, Catherine Middleton.
                </h4>
                <p class="body_text">
                    behno incorporated elements from the Commonwealth countries of India and Tuvalu into a look that was presented to the royal family and celebrated in a reception attended by industry leaders, including Anna Wintour, Livia Firth, Edward Enninful, among others.
                </p>
            </div>
            <div class="sec_content">
                <div class="sec_video">
                    <img src="https://i.shgcdn.com/b789389d-9667-4da6-82ae-edf4b5b0f868/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">
                    <video width="300" height="" autoplay="" loop="" muted="" webkit-playsinline="" playsinline="" style="" preload="none" class="shogun-image ">
                        <source src="https://i.shgcdn.com/a9e2a160-708b-4b95-b28e-d4e901ffd4eb/gif2video/-/format/webm/-/quality/lighter/" type="video/webm">
                        <source src="https://i.shgcdn.com/a9e2a160-708b-4b95-b28e-d4e901ffd4eb/gif2video/-/format/mp4/-/quality/lighter/" type="video/mp4">
                    </video>
                </div>
                <div class="sec_img">
                    <img src="https://i.shgcdn.com/e97180ec-fe50-4bf3-813d-11343ac0c6f1/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .sec_invited_buckingham{
        padding: 125px 0 46px;
    }
    
    .sec_heading{
        line-height: 44px;
    }
    .main_contenet{
        max-width: 665px;
        margin: 0 auto;
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
    .sec_video img{
        width: 300px;
    }
    
    /* Responsive Css Code */
    @media screen  and (max-width: 991px){
        .sec_video video{
            width: 100%;
        }
        .big_container{
            padding: 0 5px;
        }
        .main_contenet{
            padding: 0 9px;
        }
        .sec_invited_buckingham{
            padding: 80px 0 100px;
        }
    }
    @media screen  and (max-width: 991px){
    .sec_invited_buckingham{
        padding: 58px 0 152px;
    }
    .sec_content{
        margin-top: 43px;
    }
    }
</style>    