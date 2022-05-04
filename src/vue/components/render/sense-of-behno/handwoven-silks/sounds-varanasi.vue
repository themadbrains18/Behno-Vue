<template>
  <!-- Section Sounds Varanasi Start -->
  <section class="sec_sounds_varanasi">
        <div class="container">
          <div class="main_contenet">
        <h2 class="sec_heading">Steep into the sounds of Varanasi.</h2>
        <h4
          class="card_heading_b sec_inner_heading"
        >Sound on, immerse yourself.</h4>
        <p class="body_text">
            The first video captures three scenes; our founder’s first sounds and mystic fog upon waking up at his hotel on the banks of the sacred Ganges; a ritualized chanting of Buddhist texts at Sarnath; and the stunning chaos at evening aarti gatherings.
        </p>        
        <p class="body_text">           
            The second video expands on an evening aarti prayer and two scenes from his daily commute by boat, embracing the beauty travel by water offers this canal city.
        </p>        
          </div>
      </div>
      <div class="sec_video">
          <iframe class="shogun-video-embed shogun-lazyloaded" src="https://www.youtube.com/embed/ZRcu0Grwew4?start=0&amp;end=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=ZRcu0Grwew4&amp;version=3&amp;rel=0" allowfullscreen="">
          </iframe>
          <iframe class="shogun-video-embed shogun-lazyloaded" src="https://www.youtube.com/embed/QBMVAqNYACg?start=0&amp;end=0&amp;autoplay=0&amp;loop=1&amp;playlist=QBMVAqNYACg&amp;version=3&amp;rel=0" allowfullscreen="">
          </iframe>
      </div>
  </section>
  <!-- Section Sounds Varanasi Start -->
</template>

<style scoped>
.sec_sounds_varanasi {
  padding:103px 69px  145px;
  background: #000;
}
.sec_video iframe{
  border: none;
  width: 100%;
  height: 680px;
}
.sec_video iframe:first-child{
    margin-bottom: 51px;
}
.card_heading_b {
  margin-bottom: 72px;
  text-align: center;
  text-transform: initial;
  color: #fff;
}
.card_heading_b.sec_inner_heading {
  margin: 14px 0;
  text-align: start;
}
.subtitle{
    margin: 6px 0 0 18px;
}

.sec_heading {
  line-height: 44px;
  color: #fff;
}
.main_contenet {
  max-width: 716px;
  margin: 0 auto 27px auto;
  width: 100%;
  
}

.sec_content {
  display: grid;
  grid-template-columns: 28% 64%;
  align-items: center;
  margin-top: 34px;
  gap: 30px;
}
.body_text {
  line-height: 19px;
  margin-bottom: 20px;
  color: #fff;
}
.body_text:last-child {
  margin-bottom: 0px;
}
/* Responsive Css Code */
@media screen and (max-width: 991px) {
  .sec_sounds_varanasi {
    padding: 62px  40px 89px;
  }
  .main_contenet {
    padding: 0 20px;
    margin-bottom: 35px;
  }
  .card_heading_b {
    margin-bottom: 40px;
  }
  .sec_video iframe:first-child{
    margin-bottom: 28px;
  }
  .sec_video iframe{
      height: 300px;
  }
}

@media screen and (max-width: 767px) {
  .sec_sounds_varanasi {
    padding: 42px  20px 59px;
  }
    
  .main_contenet {
    margin-bottom: 25px;
  }
  .subtitle{
    margin: 6px 0 0 10px;
  }
  .sec_video iframe{
      height: 184px;
  }
}
</style>
