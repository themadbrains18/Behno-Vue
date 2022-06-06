<template>
<!-- Section Meet Fashion Desingners Start -->
<section class="sec_meet_fashion_designers">
    <div class="big_container">
        <div class="sec_header">
            <h2 class="quotes_text">
                {{ shopifyData.redHeading }}
            </h2>
            <div class="logo">
                <img :src=(shopifyData.imgUrl2.src) :placeholder=(shopifyData.imgUrl2.placeholder) :alt=(shopifyData.imgUrl2.alt) />  
                <a :href=(shopifyData.ctaLink) class="cta_btn">
                    {{ shopifyData.ctaText }}
                </a>
            </div>
        </div>
        <div class="sec_content" v-for="(value, key) in shopifyData.Slide" :key="key" >
            <div class="sec_text invited_showcase" >
                <h2 class="sec_heading">
                    {{ value.secHeading }}
                </h2>
                <h4 class="card_heading_b">
                    {{ value.secSubHeading }}
                </h4>
                <p class="body_text">
                    {{ value.secInfo }}
                </p>
                <div class="cta_wrapper">
                    <a :href=(value.secCtaLink) class="cta_btn" > {{ value.secCtaText }}</a>
                </div>
            </div>
            <div class="sec_img">
                <img    
                    :src="value.imgUrl.src"
                    :placeholder="value.imgUrl.placeholder"
                    :alt="value.imgUrl.alt" />
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
.big_container > .sec_content:last-child > .sec_text {
    order: 2;
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
    .sec_header +  .sec_content .sec_img {
        order: 1;
    }
    .sec_header +  .sec_content .sec_text  {
        order: 2;
    }
}


</style>

<style>
.sec_meet_fashion_designers  .sec_header+.sec_content .cta_btn{
    display: none ;
}
</style>
<script>
export default{
    props:{
        shopifyData:{
            type:Object,
            required:true,
        }
    }
}
</script>