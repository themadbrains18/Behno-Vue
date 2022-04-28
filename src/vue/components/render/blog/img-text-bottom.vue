<template>
    <section class="image_and_text_sec">
        <!-- Sec Content -->
        <div class="sec_content">
            <div class="sec_img">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/img-text-2.jpg?v=1651041883" alt="error">
                <div class="shop_cta">
                    <a href="#" class="subtitle">SHOP THE BAG</a>
                </div>
            </div>
            <div class="sec_text">
                <p class="body_text">
                    The actress Jessie Buckley is a natural brunette, but her hair is currently chopped into a ragged black bob and her nails are painted the same emerald green that the writer Christopher Isherwood gave Sally Bowles, the glamorously in-denial singer, in his 1937 novella of the same name. “Different hair for every job,” says Buckley, characteristically wry over a video call from London. “People think you’re very transformative.” Later, she’ll go onstage in “Cabaret,” the musical adaptation of Isherwood’s story of Weimar-era doom, at the Playhouse Theatre’s Kit Kat Club, alongside Eddie Redmayne. And in a few weeks, she’ll fly to Los Angeles for the 94th Academy Awards: Her performance in “The Lost Daughter” garnered her a nomination for best actress in a supporting role. Her brother had delivered the news to her over text the day before. “I thought he was joking,” she says. “It’s just something that doesn’t happen in life.”
                </p>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .image_and_text_sec{
        padding: 0 30px 39px;           
        position: relative;
    }
    .image_and_text_sec::after{
        content: '';
        background: #000;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 30px);
        height: 1px;
        
    }
    .sec_content{
        display: flex;
        align-items: flex-start;
        gap: 28px;
        max-width: 940px;
        margin: 0 auto;
    }
    .sec_img {
        position: relative;
        width: 48%;
    }
    .sec_img img{
        display: block;
    }
    .sec_text {
        width: 50%;
    }
    .shop_cta{
        margin-top: 9px;
    }
    .body_text{
        line-height: 19.42px;
    }

    /* Responsive Breakpoints */
    @media(max-width:767px){
        .sec_img,
        .sec_text{
            width: 100%;
        }
        .sec_text{
            padding: 0 9px 0 13px;
        }
        .image_and_text_sec{
            padding: 0 0px 35px;           
        }
        .sec_content{
            flex-direction: column;
            gap: 10px;
        }
        .shop_cta{
            margin: 4px 0 0 13px;
        }
        .sec_img img{
            width: 100%;
        }
        .body_text{
            line-height: 17.42px;
        }
        .image_and_text_sec::after{
            width: calc(100% - 20px);
        }
    }

</style>