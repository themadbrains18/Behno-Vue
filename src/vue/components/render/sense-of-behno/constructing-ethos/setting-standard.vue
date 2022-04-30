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
                <button class="accordian_btn" @click="(event)=>{setActive(event)}">
                    <span class="subtitle_b">HEALTH</span>
                    <div class="crose_icon line-h-0">
                        <img src="../../../../../assets/svg/accordian-arrow-icon.svg" alt="">
                    </div>
                </button>
                <div class="accordian_info" >
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
                <button class="accordian_btn" @click="(event)=>{setActive(event)}" >
                    <span class="subtitle_b">GARMENT WORKER SOCIAL MOBILITY</span>
                    <div class="crose_icon line-h-0">
                        <img src="../../../../../assets/svg/accordian-arrow-icon.svg" alt="">
                    </div>
                </button>
                <div class="accordian_info" >
                    <img src="https://i.shgcdn.com/acac32e8-341d-40ba-a4f1-3aeb4c90ad43/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Active acknowledgement of garment workers through fair and transparent agreements.
                        </li>
                        <li class="accordian_item">
                            Equipping garment workers with specific high-end technical and creative craft trainings to further their skillset.
                        </li>
                        <li class="accordian_item">
                            Fair wages.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordian_card">
                <button class="accordian_btn" @click="(event)=>{setActive(event)}">
                    <span class="subtitle_b">FAMILY PLANNING</span>
                    <div class="crose_icon line-h-0">
                        <img src="../../../../../assets/svg/accordian-arrow-icon.svg" alt="">
                    </div>
                </button>
                <div class="accordian_info" >
                    <img src="https://i.shgcdn.com/c72951e4-912d-4465-a4f0-4dbd4d4ad658/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Accessibility to and provision of affordable family planning education and services
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordian_card">
                <button class="accordian_btn" @click="(event)=>{setActive(event)}">
                    <span class="subtitle_b">WOMEN’S RIGHTS</span>
                    <div class="crose_icon line-h-0">
                        <img src="../../../../../assets/svg/accordian-arrow-icon.svg" alt="">
                    </div>
                </button>
                <div class="accordian_info" >
                    <img src="https://i.shgcdn.com/9cf42402-0044-4058-a522-b1148ac51f91/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Prioritization of women’s legal and physical social mobility by providing leadership opportunities to female workers.
                        </li>
                        <li class="accordian_item">
                            Ensuring equal remuneration for women as their male counterparts in similar positions or roles.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordian_card">
                <button class="accordian_btn" @click="(event)=>{setActive(event)}">
                    <span class="subtitle_b">WORKER SATISFACTION & BENEFITS</span>
                    <div class="crose_icon line-h-0">
                        <img src="../../../../../assets/svg/accordian-arrow-icon.svg" alt="">
                    </div>
                </button>
                <div class="accordian_info" >
                    <img src="https://i.shgcdn.com/e234a0c4-9dfa-4995-87d1-9afefe6969d3/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list">
                        <li class="accordian_item">
                            Development of clean recreational spaces within the factory setting where garment workers feel safe and welcome to relax, socialize, and find spiritual and educational resources.
                        </li>
                        <li class="accordian_item">
                            Access to schools and educational and recreational resources for garment workers’ children.
                        </li>
                        <li class="accordian_item">
                            Subsidies and reimbursements for transportation to and from home when appropriate.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="accordian_card">
                <button class="accordian_btn" @click="(event)=>{setActive(event)}">
                    <span class="subtitle_b">ECO-CONSCIOUSNESS</span>
                    <div class="crose_icon line-h-0">
                        <img src="../../../../../assets/svg/accordian-arrow-icon.svg" alt="">
                    </div>
                </button>
                <div class="accordian_info" >
                    <img src="https://i.shgcdn.com/70a825fb-bc7d-44ca-ae2f-6225e8cf3995/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Image-Description">
                    <ul class="accordian_list" >
                        <li class="accordian_item">
                            Utilization of state of the art machinery geared towards safety and controlled carbon footprint and environmental waste.
                        </li>
                        <li class="accordian_item">
                            Installment of safe foundation infrastructure abiding to international regulations on safety standards and worker rights.
                        </li>
                        <li class="accordian_item">
                            Sourcing of leather from compliant tanneries and factories using leather resulting from the existing food supply chain.
                        </li>
                        <li class="accordian_item">
                            No fur or exotic skins.
                        </li>
                        <li class="accordian_item">
                            Limiting fabric wastage.
                        </li>
                        <li class="accordian_item">
                            No sourcing from ancient and endangered forests and a preference for innovative alternatives in partnership with Canopy.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
  </section>
  <!-- Constructing Ethos Hero Start -->
</template>

<!-- Accordian Script Code -->
<script>
export default {
   data:()=>({
   }),
   methods:{
    setActive(e){
        let accordianBtn = e.currentTarget;
            accordianBtn.classList.toggle("active");
            let ScrollHeight= accordianBtn.nextElementSibling.scrollHeight;
            accordianBtn.parentElement.classList.toggle("active");
            if(accordianBtn.nextElementSibling.getAttribute("style")){
                accordianBtn.nextElementSibling.removeAttribute("style");
            }else{
                accordianBtn.nextElementSibling.setAttribute("style",`height: ${ScrollHeight}px;`);
            }
    }
   }
}
</script>

<!-- Section Css COde -->
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
    transition: 0.5s;
    position: relative;
}
.accordian_card::after{
    content: "";
    position: absolute;
    top: 0;
    left: -1px;
    height: 0;
    width: 100%;
    z-index: -1;
    border: 1px solid #000000;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
}
.accordian_card.active::after {
    visibility: visible;
    opacity: 1;
    height: 100%;
}

.accordian_item{
    list-style: initial;
    font-size: 18px;
    font-family: 'adobe-caslon-pro',sans-serif;
    line-height: 19px;
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
    border: 1px solid #000000;
    transition: 0.5s;
}
.accordian_btn.active{ 
    border-left-color: transparent;
    border-right-color: transparent;
}
.accordian_btn .subtitle_b{
    text-align: start;
}
.crose_icon{
    transition: 0.3s;
    transform-origin: center;
}
.accordian_btn.active .crose_icon{
    transform: rotate(-225deg);
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
    transition: 0.3s;
    height: 0;
    overflow: hidden;

}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_setting_standard{
    padding-top: 36px;
  }
  .sec_accordian{
      grid-template-columns:repeat(2,1fr);
      gap: 18px;
  }
  .big_container{
      padding:  0 5px;
  }
  .main_contenet{
      padding: 0 15px;
  }
  .sec_heading,.body_text{
      text-align: start;
  }
  .accordian_btn{
        padding: 10px 15px 30px 12px;
  }
  .accordian_info img{
      margin: 20px 0;
  }
}

@media screen and (max-width: 767px) {
  
  .sec_setting_standard {
    padding-top: 9px;
  }
  .sec_accordian{
      row-gap: 18px;
      column-gap: 7px;
  }
  .accordian_btn{
        padding: 6px 10px 23px 10px;
        height: 60px;
  }
  .accordian_btn  .subtitle_b{
      margin-bottom:0;
  }
  .body_text{
      margin: 12px 0 24px;
  }
  }
</style>



