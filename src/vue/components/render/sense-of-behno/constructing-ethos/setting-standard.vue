<template>
  <!-- Section Constructing Ethos Hero Start -->
  <section class="sec_setting_standard">
    <div class="big_container">
      <div class="main_contenet">
        <h2 class="sec_heading">
          {{ shopifyData.secHeading }}
        </h2>
        <p class="body_text">
          {{ shopifyData.secinfo }}
        </p>
      </div>
      <div class="sec_accordian">
        <div
          v-for="(value, key) in shopifyData.cardData"
          :key="key"
          class="accordian_card"
        >
          <button
            class="accordian_btn"
            @click="(event)=>{setActive(event)}"
          >
            <span class="subtitle_b">{{ value.crdHeading }}</span>
            <div class="crose_icon line-h-0">
              <img
                src="../../../../../assets/svg/accordian-arrow-icon.svg"
                alt=""
              >
            </div>
          </button>
          <div class="accordian_info">
            <img
              :src="(value.imgUrl.src)"
              :src-placeholder="(value.imgUrl.placeholder)"
              :alt="(value.imgUrl.src)"
            >
            <div class="body_text_wrapper">
              {{ value.cardInfo }}
            </div>
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
    props: {
        shopifyData: {
            type: Object,
            required: true,
        }
    },
   

     data: function () {
  
  
  
  
         window.addEventListener("load", this.onWindowLoad);    
        window.addEventListener('load',()=>{

            let finalValue = document.querySelectorAll(".accordian_info .body_text_wrapper");
            for(let i of finalValue){
                let spliVal =  i.innerHTML.split("-");
                var html  = '';
                html  += `<ul>`;
                spliVal.forEach((elem) => {
                    if(elem == '') 
                      return;
                   /// collect li list here !
                      html += `<li class="body_text">${elem}</li>`; 
                })
                html  += '</ul>';
                i.innerHTML  = html;
            }
  })
  },
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
<style>
.sec_accordian .body_text_wrapper ul{
    padding-left: 30px;
    padding-bottom: 30px;
}
.sec_accordian .body_text_wrapper li {
    list-style: disc;
}
</style>
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
    overflow: hidden;
    position: relative;
}

.accordian_item{
    list-style: initial;
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
.accordian_item.body_text{
    margin: 0px;
    text-align: start; 
}
.body_text {
  line-height: 19px;
  margin: 14px 0 43px; 
  text-align: center;
}
.accordian_btn.active + .accordian_info{
    border-bottom: 1px solid #000000;
}

.accordian_info{
    transition: 0.3s;
    height: 0;
    overflow: hidden;
    border-inline: 1px solid #000000;
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
  .accordian_list{
        padding:10px 10px 10px 26px;
    }
  }
</style>



