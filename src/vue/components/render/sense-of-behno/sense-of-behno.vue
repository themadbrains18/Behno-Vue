<template>
  <section class="sens_of_behno_sec bg-sand">
    <!-- Sec Head -->
    <div class="sec_head">
      <div class="hero-component">
        <h1 class="main_heading item1">The <br />Sense</h1>
        <div class="hero_img">
          <img class="for-desktop" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/banner-flower.png?v=1651133061" alt="error"/>
          <img class="for-mobile" src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/flower-res.png?v=1651137373" alt="error"/>
        </div>
        <h1 class="main_heading item2">of <br />behno</h1>
      </div>
      <p class="body_text t-center">
        Welcome to our world. Get to know what encompasses our essence.
      </p>
      <div class="sec_btn t-center">
        <a href="#" class="cta_btn">LEARN ABOUT OUR STORY</a>
      </div>
    </div>
    <!-- Sec Content -->
    <div class="sec_content">
        <div class="sense_cards">
            <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/sense-card1.jpg?v=1651138225" alt="error">
                    <a href="#" class="cta_btn">LEARN MORE</a>
                </div>
                <h4 class="card_heading_b">OUR ETHICAL PHILOSOPHY</h4>
                <p class="body_text">Learn more about our foundational value system. It's an entire system coming together.</p>
            </div>
            <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/sense-card2.jpg?v=1651138225" alt="error">
                    <a href="#" class="cta_btn">LEARN MORE</a>
                </div>
                <h4 class="card_heading_b">THE GARMENT WORKER PROJECT</h4>
                <p class="body_text">Crediting the humans behind the pieces we love and humanizing the back-end of fashion.</p>
            </div>
            <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/sense-card3.jpg?v=1651138225" alt="error">
                    <a href="#" class="cta_btn">LEARN MORE</a>
                </div>
                <h4 class="card_heading_b">BEHNO IN THE WORLD</h4>
                <p class="body_text">You've seen us in the media, at Buckingham Palace, awards ceremony and in other spaces. And here's some more.</p>
            </div>
            <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/sense-card4.jpg?v=1651138225" alt="error">
                    <a href="#" class="cta_btn">LEARN MORE</a>
                </div>
                <h4 class="card_heading_b">CONSTRUCTING MSA ETHOS</h4>
                <p class="body_text">One and one make eleven. There is strength in unity. How (and why) we built our partner factory.</p>
            </div>
            <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/sense-card5.jpg?v=1651138225" alt="error">
                    <a href="#" class="cta_btn">LEARN MORE</a>
                </div>
                <h4 class="card_heading_b">EXQUISITE HANDWORK</h4>
                <p class="body_text">How tricks of the hand create magic for the eye. Visit our artisanal hand-embroidery workshop.</p>
            </div>
            <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/sense-card6.jpg?v=1651138225" alt="error">
                    <a href="#" class="cta_btn">LEARN MORE</a>
                </div>
                <h4 class="card_heading_b">HANDWOVEN SILKS</h4>
                <p class="body_text">How we bring to you the world's finest handwoven textiles from the historic city of Varanasi. Immerse yourself.</p>
            </div>
            <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/sense-card7.jpg?v=1651138225" alt="error">
                    <a href="#" class="cta_btn">LEARN MORE</a>
                </div>
                <h4 class="card_heading_b">FRONT END PHILANTHROPY</h4>
                <p class="body_text">How we share our resources with and support nonprofits like the National Down Syndrome Society and the Boys & Girls Clubs of America.</p>
            </div>
            <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/sense-card8.jpg?v=1651138225" alt="error">
                    <a href="#" class="cta_btn">LEARN MORE</a>
                </div>
                <h4 class="card_heading_b">OUR PARTNER HANDBAG FACTORY </h4>
                <p class="body_text">A home away from home, where we spend so much time developing and producing our luxury handbags.</p>
            </div>
            <div class="card">
                <div class="card_img">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/sense-card9.jpg?v=1651138225" alt="error">
                    <a href="#" class="cta_btn">LEARN MORE</a>
                </div>
                <h4 class="card_heading_b">OUR HOME BASE</h4>
                <p class="body_text">With love from the city that grounds, stimulates, and creates us without ever sleeping.</p>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.sens_of_behno_sec {
    padding: 67px 0 317px;
    margin-bottom: -200px;
}
.sec_head {
    padding-bottom: 117px;
}
.hero-component {
  position: relative;
}
.hero_img {
  text-align: right;
}
.hero_img img {
  width: 1020px;
  height: 605px;
  margin-bottom: 11px;
}
.main_heading {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.item1 {
  top: 0;
}
.item2 {
  bottom: 30px;
}
.sec_btn{
    margin-top: 40px;
}
.cta_btn {
  padding: 30px 19px;
  background: #000;
  color: #ffff;
}
.for-mobile{
    display: none;
}
.sec_content{
    padding: 0 15px;
}
.sense_cards{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:50px 5px;
}
.card_img{
    position: relative;
}
.card_heading_b{
    margin:16px 0 12px;
}
.card .cta_btn {
    margin: 0;
    padding: 30px 40px;
    position: absolute;
    top: 60%;
    left: 50%;
    z-index: 9;
    transform: translate(-50%,-50%);
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
}
.card_img img{
    display: block;
}
@media(hover:hover){
    .card:hover .cta_btn{
        /* transform: translate(-50%,-50%); */
        top: 50%;
        opacity: 1;
        visibility: visible;
    }
}   
/* Responsive Breakpoints */
@media(max-width:991px){
    .sense_cards {
        grid-template-columns: repeat(2,1fr);
    }
}
@media(max-width:767px){
    .sens_of_behno_sec {
        padding: 48px 0 250px;
    }
    .hero_img .for-mobile{
        display: block;
        width: 411px;
        height: 243px;
        margin: 0 0 0 auto;
    }
    
    .for-desktop{
        display: none;
    }
    .main_heading {
        position: relative;
        transform: none;
        top: 0;
        left: 0;
        text-align: center;
    }
    .hero_img img {
        margin-bottom: 0;    
    }
    .item1 {
        margin-bottom: -40px;
    }
    .item2 {
        margin-top: -65px;
    }
    .sec_head .body_text {
        margin: 66px 0 50px;
        margin-bottom: 0;
    }
    .sec_head {
        padding-bottom: 82px;
    }
}
@media(min-width:768px){
    .sec_btn{
        display: none;
    }
}
@media(max-width:575px){
    .sense_cards {
        grid-template-columns: 1fr;
        gap:21px;
    }
    .sec_content{
        padding: 0 28px;
    }
    .card_heading_b{
        margin: 11px 0 9px;
    }
    .sec_head .body_text {
        padding: 0 60px;
    }
}
</style>
