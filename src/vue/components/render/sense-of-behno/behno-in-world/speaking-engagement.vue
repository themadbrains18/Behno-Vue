<template>

<section class="sec_speaking_angagment">
    <div class="big_container">
            <div class="main_contenet">
                <h2 class="sec_heading">
                    Speaking engagement at the United Nations, a first of its kind.
                </h2>
                <h4 class="card_heading_b">
                    behno founder, Shivam Punjya, was invited to the United Nations to speak on fashion as a social mobilizer.
                </h4>
                <p class="body_text">
                    behno founder spoke on fashion as an industry capable of mobilizing communities and consumers for social change and global impact and share his story and social enterprise model. The talk was attended by diplomats, figureheads, and industry veterans.
                </p>
                <p class="body_text">
                    For the first time, the United Nations discussed the fashion industry as a mobilizer for change by inviting six leaders in the fashion space to present their business models to discuss best practices and stimulate dialogue.
                </p>
            </div>
            <div class="sec_img">
                <img src="https://i.shgcdn.com/14d47b25-6099-4efd-b7e6-1c22d146e08a/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="">  
            </div>
        </div>
        
</section>    
        
</template>
<style scoped>
    .sec_speaking_angagment{
        padding-top:46px;
    }
    .sec_video iframe{
        width: 100%;
        height: 715px;
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
        margin-bottom: 20px;
    }
    .body_text:last-child{
        margin-bottom: 0px;
    }
    .sec_img{
        margin-top: 41px;
    }
    /* Responsive Css Code */
    @media screen  and (max-width: 991px){
        .sec_speaking_angagment{
            padding-top:30px ;
        }
        .main_contenet{
            padding: 0 19px;
        }
        .big_container{
            padding: 0;
        }
        .sec_img{
            margin-top: 5px;
        }
        .sec_video iframe{
            height: 500px;
        }
    }

    @media screen  and (max-width: 767px){
        .sec_speaking_angagment{
            padding-top:20px ;
        }
        .sec_video iframe{
            height: 214px;
        }
    }
</style>
