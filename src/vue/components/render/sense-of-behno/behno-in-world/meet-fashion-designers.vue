<template>
<!-- Section Meet Fashion Desingners Start -->
<section class="sec_meet_fashion_designers">
    <div class="big_container">
        <div class="sec_header">
            <h2 class="quotes_text">
                “MEET FASHION’S COOL NEW WAVE OF SUSTAINABLE CHIC DESIGNERS.”
            </h2>
            <div class="logo">
                <img src="https://cdn.shopify.com/s/files/1/1000/3130/files/vogue-logo.svg?v=1651153240" alt="Image-Description">
                <a href="#" class="cta_btn">
                    EXPLORE OUR PRESS
                </a>
            </div>
        </div>
        <div class="sec_content">
            <div class="sec_text">
                <h2
                    class="sec_heading"
                >Top 5 Finalist for the Accessories Council of America’s Design Excellence Awards.</h2>
                <h4
                    class="card_heading_b"
                >behno was a top five finalist for the Design Excellence Award for the “Handbags Under $1000” category.</h4>
                <p class="body_text">
                    behno was in exciting company; Fendi, Givenchy, Jimmy Choo, Chloe, Sperry, Frances Valentine, among others are finalists as well, all spanning across their respective categories.
                </p>
                <p class="body_text">
                    The bag behno submitted for the award truly integrates The behno Standard on various levels and speaks to both our ethical and design philosophy. The drop cloth itself is upcycled from block printers, the embroidery tells the story of the artisans we work with, and the bag itself is made in a factory that we’re so proud to call a partner. The bag itself is the smallest size from our iconic Ina series.
                </p></div>
            <div class="sec_img">
                <img src="https://i.shgcdn.com/89e538cf-f2b3-433a-a083-fd5d1bda824b/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">
            </div>
        </div>
         <div class="sec_content invited_showcase">
              <div class="sec_img">
                <img src="https://i.shgcdn.com/f7e400d5-33d6-4318-8f4d-73e47a7b649c/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">
            </div>
            <div class="sec_text">
                <h2
                    class="sec_heading"
                >Invited to showcase the Garment Worker Project at Sotheby’s.</h2>
                <h4
                    class="card_heading_b"
                >In 2016, behno debuted its Garment Worker Project at Sotheby’s in a private reception co-hosted by behno founder, Shivam Punjya, and celebrity stylist Micaela Erlanger.</h4>
                <p class="body_text">
                    The Garment Worker Project, a first of its kind, garnered international attention and was the first time a celebrity stylist took a strong position on ethical manufacturing. The project was photographed by fashion photographer Dan Smith and filmed by Kent Mathews.
                </p>
                <a href="#" class="cta_btn cta_btn-black">
                    LEARN MORE 
                </a>
            </div>
           
        </div>
    </div>
</section>    
<!-- Section Meet Fashion Desingners End -->
</template>
<style scoped>
.sec_meet_fashion_designers{
    padding: 85px 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E9E7E3 100%);
}

.quotes_text{
    color: #EF0000;
    padding-bottom:50px ;
}

.body_text:last-child{
    margin-bottom:0px;
}
.card_heading_b{
    margin:  14px 0;
    text-transform: initial;
}
.sec_header{
    display: grid;
    grid-template-columns:70%  25%;
    align-items: flex-end;
    gap: 32px;
    justify-content: space-between;
    max-width: 1101px;
    margin:  0 auto;
    width: 100%;
    padding: 0 8px;
}
.sec_heading{
    line-height: 41px;
}

.sec_content{
    display: grid;
    align-items: center;
    grid-template-columns: 50% 50%;
    gap: 36px;
    margin-top:129px;
    justify-content: space-between;
    padding: 0 50px;   
}   
.sec_text{
    max-width: 577px;
    width: 100%;
}
.body_text{
    line-height: 19px;
}
.cta_btn {
        background: #000000;
        width: fit-content;
        margin-top: 25px;
        color: #fff;
        border: 1px solid #000000;
        display: block;
    }
    @media (hover: hover) {
        .cta_btn:hover {
            background: #fff;
            color: #000;
            border-color: #000;
        }
    }
.invited_showcase .sec_img{
    max-width: 577px;
}
 
.sec_content.invited_showcase{
    margin-top: 68px;
}

/* Responsive Css Code */
@media only screen and (max-width: 1024px) {
  .quotes_text{
    font-size: 60px;
  }
}

@media only screen and (max-width: 991px) {
    .sec_meet_fashion_designers{
        padding: 45px 0 53px;
    }
  .quotes_text{
    font-size: 40px;
    padding-bottom: 0;
  }
  .sec_header,.sec_content{
      grid-template-columns: 1fr;

  }
  .sec_text{
      max-width: 100%;
  }
  .sec_content.invited_showcase{
      margin-top:30px;
  }
  .sec_content.invited_showcase .sec_img{
      max-width: initial;
  }
  .sec_content{
      margin-top:60px ;
  }
  
  .logo{
      text-align: center;
  }
  .logo img{
      max-width: 101px;
      margin: 0 auto;
      width: 100%;
  }
  .cta_btn{
      margin:  15px auto 0 auto;
  }
  .big_container{
    padding: 0;
  }
  
}

@media only screen and (max-width: 767px) {
  .sec_meet_fashion_designers{
        padding: 36px 0 53px;
    }
  .quotes_text{
    font-size: 27px;
  }
  .sec_content{
      margin-top:36px ;
      padding: 0 ;
  }
  .sec_text{
    padding: 0 19px;
  }
  .sec_content.invited_showcase{
      margin-top:23px;
  }
}


</style>