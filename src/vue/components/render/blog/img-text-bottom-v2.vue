<template>
    <section class="image_and_text_sec bg-sand">
        <!-- Sec Content -->
        <div class="sec_content">
            <div class="sec_img">
                <div class="product_popup">
                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/img-column-bg-v2.jpg?v=1651054521" alt="error">
                    <productPopup />
                </div>
                <div class="shop_cta">
                    <a href="#" class="subtitle">SHOP THE BAG</a>
                </div>
            </div>
            <div class="sec_text">
                <p class="body_text">
                    The actress Jessie Buckley is a natural brunette, but her hair is currently chopped into a ragged black bob and her nails are painted the same emerald green that the writer Christopher Isherwood gave Sally Bowles, the glamorously in-denial singer, in his 1937 novella of the same name. “Different hair for every job,” says Buckley, characteristically wry over a video call from London. “People think you’re very transformative.” Later, she’ll go onstage in “Cabaret,” the musical adaptation of Isherwood’s story of Weimar-era doom, at the Playhouse Theatre’s Kit Kat Club, alongside Eddie Redmayne. And in a few weeks, she’ll fly to Los Angeles for the 94th Academy Awards: Her performance in “The Lost Daughter” garnered her a nomination for best actress in a supporting role. Her brother had delivered the news to her over text the day before. “I thought he was joking,” she says. “It’s just something that doesn’t happen in life.”
                </p>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .image_and_text_sec{
        padding: 53px 30px 129px;           
    }
    .sec_content{
        display: flex;
        align-items: flex-start;
        gap: 15px;
    }
    .sec_img {
        width: 64%;
    }
    .sec_img img{
        display: block;
        width: 100%;
    }
    .sec_text {
        width: 46%;
    }
    .shop_cta{
        margin-top: 11px;
    }
    .body_text{
        line-height: 19.42px;
        max-width: 469px;
    }

    /* Responsive Breakpoints */
    @media(max-width:767px){
        .sec_img,
        .sec_text{
            width: 100%;
        }
        .sec_text{
            padding: 0 9px 0 13px;
        }
        .image_and_text_sec{
            padding: 0 0px 35px;           
        }
        .sec_content{
            flex-direction: column;
            gap: 10px;
        }
        .shop_cta{
            margin: 4px 0 0 13px;
        }
        .sec_img img{
            width: 100%;
        }
        .body_text{
            line-height: 17.42px;
        }
    }

</style>


<script>
import productPopup from "../product-popup.vue";

export default {
  components: {
    productPopup,
  },
  data() {
    //    this.closePopup();
    window.addEventListener("load", this.showPopup);
    window.addEventListener("load", this.closePopup);
    window.addEventListener("resize", this.checkscreen);
  },
  methods: {
    checkscreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 767) {
        return;
      }
      this.showPopup();
      // this.closePopup()
    },
    showPopup() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 767) {
        return;
      }
      let secImg = document.querySelectorAll(".sec_img");
      for (let i of secImg) {
        i.addEventListener("click", () => {
          i.classList.add("active");
        });
      }
    },
    closePopup() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 767) {
        return;
      }

      let closeIcon = document.querySelectorAll(".close-icon");

      for (let i of closeIcon) {
        i.addEventListener("click", (e) => {
          e.stopPropagation();

          let secImgActive = document.querySelector(".sec_img.active");
          if (secImgActive) {
            secImgActive.classList.remove("active");
          }
        });
      }
    },
  },
};
</script>