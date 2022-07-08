<template>
<!-- NanaMota Commitmet Section  -->
    <section class="sec_nanmota_commitment" v-if="shopifyData.checkSection=='false'">
        <div class="sec_text bg-black">
            <h2 class="sec_heading work-sans-family"> {{shopifyData.secheading}}</h2>
            <p class="sec_info work-sans-family">{{shopifyData.secinfo}}
            </p>
        </div>
        <div class="sec_img">
            <img
                :src="shopifyData.secimg.src"
                :src-placeholder="shopifyData.secimg.placeholder"
                :alt="shopifyData.secimg.alt"
            >
            <div class="commitment_card">
                <div class="card" v-for="(item, index) in shopifyData.collageData" :key="index">
                    <h3 class="card_heading work-sans-family">
                        {{item.cardHeading}}
                    </h3>
                    <p class="card_info work-sans-family">
                        {{item.cardinfo}}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>

    .sec_text{
        padding:45px 24px 60px;
    }
    .sec_heading,.sec_info{
        max-width: 850px;
        margin: 0 auto;
        text-align: center;
        letter-spacing: -0.08px;
    }
    
    .sec_heading{
        color: #29b0ff;
        font-size: 52px;
        font-weight: 400;
        max-width: 800px;
        margin-bottom: 30px;
    }
    
    .sec_info {
        font-size: 24px;
        color: #29b0ff;
    }
    .commitment_card{
        display: flex;
        justify-content: center;
        gap: 10px;
        max-width: 1420px;
        margin: -60px auto 0;
        padding-bottom:45px;
    }
    .sec_img{
        text-align:center;
    }

    .sec_img img{
        min-height: 1200px;
        object-fit: cover;
        display: block;
    }
    .card{
        padding:  25px 35px;
        border-radius: 15px;
        background: #fff;
    }
    
    .card_heading{
        font-size: 32px;
        letter-spacing: -0.08px;
        font-weight: 600;
        text-transform: none;
        margin-bottom:15px;
        line-height: 40px;
        text-align: start;

    }
    .card_info{
        font-size: 18px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: -0.08px;

    }

    /* Breackpoint In css Code */
    @media screen  and (max-width:1024px){
        .card_heading{
            font-size: 28px;
        }
        .card_info{
            font-size: 17px;
        }
    }
    @media screen  and (max-width:991px){
        .sec_img{
            position: relative;        
        }
        .commitment_card{
            position: absolute;        
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            flex-direction: column;
            margin-top:0;
            gap: 20px;
        }   
        .card{
            margin-left: -12px;
            margin-right: 5%;
            padding: 25px 35px;
        }   
        .card_heading{
            margin-bottom: 10px;
            font-size: 24px;
            line-height: 32px;
        }
        .card_info{
            font-size: 16px;
            line-height: 18px;
        }
        .sec_text{
            padding:45px 24px;
        }
        .sec_heading{
            font-size: 44px;
            line-height:32px;
    }
    
    }
    
    
</style>


<script>

export default ({
   props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
})
</script>
