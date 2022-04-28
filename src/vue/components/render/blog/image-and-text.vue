<template>
    <section class="image_and_text_sec bg-sand">
        <!-- Sec Content -->
        <div class="sec_content">
            <div class="sec_img">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/image-text.jpg?v=1651037961" alt="error">
                <h2 class="img_text">I AM:</h2>
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
        padding: 0 30px 43px;           
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
    .img_text{
        font-weight: 700;
        font-size: 100px;
        line-height: 122px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        white-space: nowrap;
        text-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .shop_cta{
        margin-top: 8px;
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
            gap: 24px;
        }
        .shop_cta{
            margin: 10px 0 0 13px;
        }
        .sec_img img{
            width: 100%;
        }
        .img_text{
            white-space: break-spaces;
        }
    }

</style>