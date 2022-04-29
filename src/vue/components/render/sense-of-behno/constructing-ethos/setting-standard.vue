<template>
  <!-- Section Constructing Ethos Hero Start -->
  <section class="sec_setting_standard">
      <div class="big_container">
        <div class="main_contenet">
            <h2 class="sec_heading">Setting the standard.</h2>
            <p class="body_text">
                “The behno Standard,” incrementally implemented, is made up of:
            </p>
        </div>
        <div class="sec_accordian">
            <div class="accordian_card">
                <button class="accordian_btn" v-on:click="hello" >
                    <span class="subtitle_b">HEALTH</span>
                    <div class="crose_icon">
                        <span class="arrow_first"></span>
                        <span class="arrow_second"></span>
                    </div>
                </button>
                <div class="accordian_info">
                    <img src="https://i.shgcdn.com/b0323974-51b9-42fc-acc5-d6ae7619c47d/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Provision of exemplary healthcare services including coverage and access to health clinics.
                        </li>
                        <li class="accordian_item">
                            Access to fresh sanitized water and additional nutritional ammunition for those in need.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordian_card">
                <button class="accordian_btn" v-on:click="hello" >
                    <span class="subtitle_b">HEALTH</span>
                    <div class="crose_icon">
                        <span class="arrow_first"></span>
                        <span class="arrow_second"></span>
                    </div>
                </button>
                <div class="accordian_info">
                    <img src="https://i.shgcdn.com/b0323974-51b9-42fc-acc5-d6ae7619c47d/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Provision of exemplary healthcare services including coverage and access to health clinics.
                        </li>
                        <li class="accordian_item">
                            Access to fresh sanitized water and additional nutritional ammunition for those in need.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordian_card">
                <button class="accordian_btn" v-on:click="hello" >
                    <span class="subtitle_b">HEALTH</span>
                    <div class="crose_icon">
                        <span class="arrow_first"></span>
                        <span class="arrow_second"></span>
                    </div>
                </button>
                <div class="accordian_info">
                    <img src="https://i.shgcdn.com/b0323974-51b9-42fc-acc5-d6ae7619c47d/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Provision of exemplary healthcare services including coverage and access to health clinics.
                        </li>
                        <li class="accordian_item">
                            Access to fresh sanitized water and additional nutritional ammunition for those in need.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordian_card">
                <button class="accordian_btn" v-on:click="hello" >
                    <span class="subtitle_b">HEALTH</span>
                    <div class="crose_icon">
                        <span class="arrow_first"></span>
                        <span class="arrow_second"></span>
                    </div>
                </button>
                <div class="accordian_info">
                    <img src="https://i.shgcdn.com/b0323974-51b9-42fc-acc5-d6ae7619c47d/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Provision of exemplary healthcare services including coverage and access to health clinics.
                        </li>
                        <li class="accordian_item">
                            Access to fresh sanitized water and additional nutritional ammunition for those in need.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordian_card">
                <button class="accordian_btn" v-on:click="hello" >
                    <span class="subtitle_b">HEALTH</span>
                    <div class="crose_icon">
                        <span class="arrow_first"></span>
                        <span class="arrow_second"></span>
                    </div>
                </button>
                <div class="accordian_info">
                    <img src="https://i.shgcdn.com/b0323974-51b9-42fc-acc5-d6ae7619c47d/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Provision of exemplary healthcare services including coverage and access to health clinics.
                        </li>
                        <li class="accordian_item">
                            Access to fresh sanitized water and additional nutritional ammunition for those in need.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordian_card">
                <button class="accordian_btn" v-on:click="hello" >
                    <span class="subtitle_b">HEALTH</span>
                    <div class="crose_icon">
                        <span class="arrow_first"></span>
                        <span class="arrow_second"></span>
                    </div>
                </button>
                <div class="accordian_info">
                    <img src="https://i.shgcdn.com/b0323974-51b9-42fc-acc5-d6ae7619c47d/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Provision of exemplary healthcare services including coverage and access to health clinics.
                        </li>
                        <li class="accordian_item">
                            Access to fresh sanitized water and additional nutritional ammunition for those in need.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
  </section>
  <!-- Constructing Ethos Hero Start -->
</template>

// Accordian Script Code
<script>
export default {
    props:{
       data:String,
    },
    methods:{
       hello()
       {
        let AccordianInfo=document.querySelector(".accordian_info");
         AccordianInfo.setAttribute("style",`height:${AccordianInfo.scrollHeight}px;`
        );
       }
    }
}
</script>

// Section Css COde
<style scoped>
.sec_setting_standard {
  padding-top: 38px;
}
.big_container{
    padding: 0 45px;
}
.accordian_list{
    padding:15px 10px 15px 50px;
}
.accordian_card{
    border: 1px solid #000000;
}
.accordian_item{
    list-style: initial;
    font-size: 18px;
    font-family: 'adobe-caslon-pro',sans-serif;
    line-height: 19px;
}
.arrow_first,.arrow_second{
    height: 19px;
    width: 1.5px;
    background: #656565;
    display: inline-block;
}
.arrow_second{
    transform: rotate(-90deg) translateY(-2px);
}
.sec_accordian{
    display: grid;
    grid-template-columns:repeat(3,1fr);
    gap: 30px;
}
.accordian_btn{
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 12px 20px 44px 13px;
    background: #FFFFFF;
    
    width: 100%;
}
.sec_heading {
  line-height: 44px;
  text-align: center;
}
.body_text {
  line-height: 19px;
  margin: 14px 0 43px; 
  text-align: center;
}

.accordian_info{
    height: 0px;
    overflow: hidden;
    transition: 0.3s;

}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_setting_standard{
    padding-top: 36px;
  }
  
}

@media screen and (max-width: 767px) {
  
  .sec_setting_standard {
    padding-top: 9px;
  }
}
</style>



