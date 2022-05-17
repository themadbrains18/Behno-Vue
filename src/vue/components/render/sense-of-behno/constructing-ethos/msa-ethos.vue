<template>
<!-- Section Meet Fashion Desingners Start -->
<section class=" sec_msa_ethos">
    <div class="big_container">
        <div class="sec_header">
            <h2 class="quotes_text">
                {{ shopifyData.redText }}
            </h2> 
        </div>
        <div class="sec_content">
            <div class="sec_text">
                <h2 class="sec_heading">{{ shopifyData.fHeading }}</h2>
                <h4
                    class="card_heading_b"
                >{{ shopifyData.fsubHeading }}</h4>
                <p class="body_text">
                   {{ shopifyData.finfo }}
                </p>
                </div>
            <div class="sec_img">
                <img :src=(shopifyData.fImage.src) :src-placeholder=(shopifyData.fImage.placeholder) :alt=(shopifyData.fImage.alt)>
            </div>
        </div>
         <div class="sec_content invited_showcase">
              <div class="sec_img">
                <img :src=(shopifyData.sImage.src) :src-placeholder=(shopifyData.sImage.placeholder) :alt=(shopifyData.sImage.alt)>
            </div>
            <div class="sec_text">
                <h2 class="sec_heading">{{ shopifyData.sHeading }}</h2>
                <p class="body_text">
                    {{ shopifyData.sinfo }}
                </p>
            </div>
        </div>
        <div class="image_grid">
            <div class="image_grid_inner">
                <div class="img_row">
                    <div class="image_caption1">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1-MSAETHOS.jpg?v=1652704178" alt="error" >
                        <p class="fig_caption">Utilizing state of art solar discs, MSA genrate it owns electricity throught solar power.</p>
                    </div>
                    <div class="image_caption2">
                        <img  src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/2-MSAETHOS.jpg?v=1652704178" alt="error" >
                        <p class="fig_caption">MSA addresses the needs of vulnerable polutions through its insite orphanage, center for mentally disabled woman, and senior citizens home.</p>
                    </div>
                    <div class="image_caption3">
                        <img  src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/3-MSAETHOS.jpg?v=1652704178" alt="error" >
                        <p class="fig_caption">Here we see the distribution of milk form MSA own Dairy farm to local community members.</p>
                    </div>
                </div>
                <div class="img_row middle">
                    <div class="image_caption4">
                        <img  src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/4-MSAETHOS.jpg?v=1652704178" alt="error" >
                        <p class="fig_caption">Utilizing state of art solar discs, MSA genrate it owns electricity throught solar power.</p>
                    </div>
                    <div class="image_caption5">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/5-MSAETHOS.jpg?v=1652704178" alt="error" >
                        <p class="fig_caption">MSA addresses the needs of vulnerable polutions through its insite orphanage, center for mentally disabled woman, and senior citizens home.</p>
                    </div>
                </div>
                <div class="img_row">
                    <div class="image_caption6">
                        <img  src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/6-MSAETHOS.jpg?v=1652704178" alt="error" >
                        <p class="fig_caption">Within all its activities , MSA employes local community member to run its vast operations</p>
                    </div>
                    <div class="image_caption7">
                        <img  src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/7-MSAETHOS.jpg?v=1652704178" alt="error" >
                        <p class="fig_caption">Sharing oranges form the farms at MSA as an afternoon snack at the factory.</p>
                    </div>
                    <div class="image_caption8">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/8-MSAETHOS.jpg?v=1652704178" alt="error" >
                        <p class="fig_caption">making a Thousands of roties at the community kitchen for students of MSA's resident primary ,secondry and vocational training schools, for visitors and for residents of MSA. </p>
                    </div>
                </div>
                <div class="img_row last">
                    <div class="image_caption">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/9-MSAETHOS.jpg?v=1652704178" alt="error" >
                        <p class="fig_caption">The MSA Ethos and behno team at MSA.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <img :src=(shopifyData.collageImg.src) :src-placeholder=(shopifyData.collageImg.placeholder) :alt=(shopifyData.collageImg.alt)> -->
    </div>
</section>    
<!-- Section Meet Fashion Desingners End -->
</template>
<style scoped>
.sec_msa_ethos{
    padding: 68px 0 78px;
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
    margin-top:32px;
    gap: 32px;
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
.img_row{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.image_caption1{
    max-width: 315px;
}
.image_caption2{
    max-width: 400px;
}
.image_caption3{
    max-width: 392px;
}
.image_caption4{
    max-width: 654px;
}
.image_caption5{
    max-width: 372px;
}
.img_row.middle{
    align-items: center;
}
.image_caption6{
    max-width: 400px;
}
.image_caption7{
    max-width: 301px;
}
.image_caption8{
    max-width: 420px;
}
.img_row.last{
    max-width: 838px;
    margin: 63px auto 0;
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
    .sec_msa_ethos{
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
  .sec_msa_ethos{
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

<script>


export default {
    props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
}
</script>
