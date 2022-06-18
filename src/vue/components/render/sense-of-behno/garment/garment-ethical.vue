<template>
  <!-- Section Garment Ethical Start  -->
  <section class="sec_ethical">
    <div class="big_container">
      <div class="sec_content">
        <div class="sec_text">
          <h2 class="sec_heading">
            {{ shopifyData.secHeading }}
          </h2>
          <p class="body_text">
            {{ shopifyData.secInfo }}
          </p>
        </div>
        <div class="sec_img">
          <template v-if="shopifyData.checkImage === 'true'">
            <!-- <video
              controls autoplay="true" loop="true" muted="true"  controlsList="nodownload" disablepictureinpicture
              webkit-playsinline="true"
              playsinline="true"
              preload="none"
            >
              <source :src="shopifyData.videolink" />
            </video> -->
            <iframe src="https://www.youtube.com/embed/A6opxWqCCiM?autoplay=1&mute=1&loop=1&rel=0" title="YouTube video player" allow="autoplay"></iframe>
          </template>
          <template v-else>
            <img
              class="grid_img"
              :src="shopifyData.imgUrl.src"
              :src-placeholder="shopifyData.imgUrl.placeholder"
              :alt="shopifyData.imgUrl.alt"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
  <!-- Section Garment Ethical End -->
</template>
<style scoped>
.sec_ethical {
  background: #000000;
  padding: 117px 0 148px;
}
.big_container {
  padding: 0 50px 0 6px;
}
.sec_content {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.sec_text {
  max-width: 395px;
  margin: 0 auto;
}
.sec_heading {
  margin-bottom: 4px;
  font-weight: 400;
}
.sec_heading,
.body_text {
  color: #fff;
}
iframe {
  width: 695px;
  height: 390px;
  border: none;
}
.sec_img iframe{
    width: 100%;
    height: 480px;
}
/* Resposive css Code */
@media screen and (max-width: 1200px) {
  iframe {
    width: 500px;
  }
}
@media screen and (max-width: 991px) {
  .sec_ethical {
    padding: 90px 0 50px;
  }
  .sec_content {
    grid-template-columns: 1fr;
  }
  .big_container {
    padding: 0 7px;
  }
  .sec_img {
    text-align: center;
  }
  .sec_text {
    padding: 0 20px;
    max-width: 100%;
    margin: 0;
  }
  iframe {
    width: 100%;
  }
}
@media screen and (max-width: 767px) {
  .sec_ethical {
    padding: 43px 0 28px;
  }
  iframe {
    height: 244px;
  }
}
</style>
<script>
export default {
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
};
</script>

