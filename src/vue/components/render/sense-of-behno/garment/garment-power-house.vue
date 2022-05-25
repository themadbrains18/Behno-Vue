<template>
<!-- Section Garment Ethical Start  -->
    <section class="sec_power_house">
        <div class="big_container">
            <div class="sec_content">
                <div class="sec_img">
                    <img :src=(shopifyData.imgUrl.src) :src-placeholder=(shopifyData.imgUrl.placeholder) :alt=(shopifyData.imgUrl.alt)  />
                </div>
                <div class="sec_text">
                    <h2 class="sec_heading">
                        {{ shopifyData.secheading }} 
                    </h2>
                    <a :href=(shopifyData.Btnlink) class="cta_btn  cta_btn-black">
                        {{ shopifyData.BtnText }} 
                    </a>
                </div>
            </div>
        </div>
    </section>
<!-- Section Garment Ethical End -->
    
</template>

<script>
export default{
   
    props: {
        shopifyData: {
            type: Object,
            required: true,
        }
    } 
}
</script>

<style scoped>
.sec_power_house{
    padding: 0 0 17px 0;    
}
.big_container{
    padding:  0 50px 0 6px;
}

.sec_content{
    display:grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 60% 40%;    
    gap: 37px;
}
.sec_heading{
    font-weight: 400;
    margin-bottom: 40px;
}
.sec_text{
    max-width: 403px;
    width: 100%;
    margin:  0 auto;
}
.cta_btn{
    color: #fff;
    background: #000000;
    border: 1px solid #000;
}
.back_sense_behno{
    margin:  117px auto 202px;
}
@media (hover: hover) {
  .cta_btn:hover {
    background: #fff;
    color: #000;
    border-color: #000;
  }
}
/* Resposive css Code */

@media screen  and (max-width: 991px){

    .sec_content{
        grid-template-columns: 1fr ;    
    }
    .sec_img{
        text-align: center;
    }
    .sec_text{
        padding: 0 20px;
        max-width: 100%;
        margin: 0;
    }

    .sec_heading,.sec_text{
        text-align: center;
    }
    .sec_heading{
        margin-bottom: 20px;
    }
    .big_container{
        padding: 0;
    }
    .sec_power_house{
        padding-bottom:80px;
    }
    .back_sense_behno{
        margin:  80px auto 70px;
    }
}
@media screen  and (max-width: 767px){
    .back_sense_behno{
        margin:  63px auto 43px;
    }
    .sec_power_house{
        padding: 0 0 17px 0;    
    }
}
</style>
