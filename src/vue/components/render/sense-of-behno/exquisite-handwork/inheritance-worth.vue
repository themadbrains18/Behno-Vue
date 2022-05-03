<template>
<!-- Section inheritance worth Start -->
<section class=" sec_inheritance_worth">
    <div class="big_container">
        <div class="sec_content">
            <div class="sec_img">
                <img src="https://i.shgcdn.com/89bbf304-6ac8-45f8-a242-ea53138245ff/-/format/auto/-/preview/3000x3000/-/quality/lighter/"  alt="Image-description" >
            </div>
            <div class="sec_text">
                <h2
                    class="sec_heading"
                >Brainchild of a brilliant brain.</h2>
                <h4
                    class="card_heading_b"
                >Muni Seva Ashram is spearheaded by Dr. Vikram Patel, a visionary of our times.</h4>
                <p class="body_text">
                    Dr. Patel built the nonprofit to function like a self-sustaining village. Dr. Patel flourishes in intellectually yet realistically implementing concepts and systems that may, at first, seem far-fetched for a nonprofit village nestled in a rural landscape.
                </p>
                </div>
        </div>
    </div>
</section>    
<!-- Section inheritance worth End -->
</template>
<style scoped>
.sec_inheritance_worth{
    padding: 81px 0 151px;
}
.quotes_text{
    color: #EF0000;
}
.sec_content.invited_showcase .body_text{
    margin-top:14px;
}
.body_text:last-child{
    margin-bottom:0px;
}
.card_heading_b{
    margin:  14px 0;
    text-transform: initial;
}
.sec_heading{
    line-height: 41px;
}

.sec_content{
    display: grid;
    align-items: center;
    grid-template-columns: 48% 48%;
    gap: 32px;
    justify-content: space-between;
    padding: 0 65px;   
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
    max-width: 627px;
}
.sec_content.invited_showcase{
    margin-bottom:22px;
    margin-top: 16px;
}

/* Responsive Css Code */
@media only screen and (max-width: 1024px) {
  .quotes_text{
    font-size: 60px;
  }
}

@media only screen and (max-width: 991px) {
    .sec_inheritance_worth{
        padding: 45px 0 53px;
    }
  .quotes_text{
    font-size: 40px;
    padding: 0 10px 0;   
  }
  .sec_header,.sec_content{
      grid-template-columns: 1fr;

  }
  .sec_text{
      max-width: 100%;
  }
  
  .sec_content.invited_showcase .sec_img{
      max-width: initial;
  }
  .sec_content{
      padding: 0 15px;
      margin-top:60px ;
  }

  .sec_img{
      padding: 0 5px;
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
  .sec_content.invited_showcase,
  .sec_content.invited_showcase .sec_img{
      padding: 0 ;
  }
  .sec_content.invited_showcase{
      gap: 14px;
      margin-top:30px;
  }
  .sec_content.invited_showcase .sec_text{
      padding: 0 15px;
  }
}

@media only screen and (max-width: 767px) {
  .sec_inheritance_worth{
        padding: 36px 0 53px;
    }
  .quotes_text{
    font-size: 27px;
  }
  .sec_content{
      margin-top:34px ;
  }
  .sec_content.invited_showcase{
      margin-top:23px;
  }
}


</style>