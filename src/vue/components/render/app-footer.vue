<template>
  <div>
    <div class="footer_wave">
      <!-- ../../assets/images/footer-wave.png -->

      <v-lazy-image class="footer_wave_img" :src="getImage('footerWave')" />
    </div>
    <footer class="footer">
      <div class="big_container">
        <div class="footer_content">
          <!-- Footer Link -->
          <ul class="footer_link_list">
            <li class="footer_item">
              <a class="footer_link" href="#"> CLIENT SERVICES & POLICY </a>
            </li>
            <li class="footer_item">
              <a class="footer_link" href="#"> OUR ETHICAL PHILISOPHY </a>
            </li>
            <li class="footer_item">
              <a class="footer_link" href="#"> PRESS </a>
            </li>
            <li class="footer_item">
              <a class="footer_link" href="#"> TEAM </a>
            </li>
            <li class="footer_item">
              <a class="footer_link" href="#"> JOIN OUR AFFILIATE PROGRAM </a>
            </li>
            <li class="footer_item follow-journey">
              <span class="footer_link">FOLLOW OUR JOURNEY</span>
              <div class="footer_social_link">
                <a class="link" href="#">
                  <!-- ../../assets/svg/fb-icon.svg  -->
                  <v-lazy-image :src="getImage('fbIcon')" />
                </a>
                <a class="link" href="#">
                  <!-- ../../assets/svg/instagram-icon.svg -->
                  <v-lazy-image :src="getImage('instaIcon')" />
                </a>
              </div>
            </li>
          </ul>
          <!-- Footer Form -->
          <div class="footer_form">
            <h3 class="footer_form_heading">
              STAY IN TOUCH.
              <span>
                &nbsp;Enjoy 10% off your first order when you subscribe to the
                behno newsletter.
              </span>
            </h3>
            <form action="" class="email_form">
              <input
                class="footer_input"
                id="footeremail"
                type="email"
                placeholder="Enter your email address"
              />
              <button type="submit" class="footer_form_btn">SUBSCRIBE</button>
            </form>
            <h4 class="footer_after_pay">
              <!-- ../../assets/svg/after-icon.svg -->
              <v-lazy-image :src="getImage('afterIcon')" />

              <span> Finance your favorite bag with only 25% up front. </span>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Footer Css Code */
.footer_wave {
  line-height: 0;
}

.footer_wave_img {
  line-height: 0;
  width: 100%;
}

.footer {
  padding: 70px 0 76px;
  background-color: #e9e7e3;
}

.footer_content {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 530px);
  gap: 75px 30px;
  justify-content: space-between;
  align-items: center;
}

.footer_link {
  color: #000000;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
}

@media (hover: hover) {
  .footer_link:hover {
    text-decoration: underline;
  }

  span.footer_link:hover {
    text-decoration: initial;
  }
}

.footer_item.follow-journey,
.footer_social_link {
  display: flex;
  align-items: center;
  gap: 5px;
}

.footer_item {
  margin-bottom: 9px;
  line-height: 0;
}

.footer_item:last-child {
  margin-bottom: 0px;
}

.footer_social_link .link {
  display: flex;
  align-items: center;
}

/* Footer Form css Code */
.footer_form_heading {
  font-size: 12px;
  line-height: 14px;
  color: #000;
}

.footer_form_heading span {
  font-weight: 400;
}

.email_form {
  display: flex;
  border-bottom: 1px solid #000000;
  margin: 27px 0 38px;
}

.footer_input::placeholder,
.footer_input {
  color: #5c5c5c;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}

.footer_input {
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 0 10px 4px 0;
  outline: none;
}

.footer_form_btn {
  color: #5c5c5c;
  font-weight: 700;
  font-size: 12px;
}

.footer_after_pay {
  display: flex;
  align-items: center;
}

.footer_after_pay span {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}

@media only screen and (max-width: 991px) {
  .footer_content {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 768px) {
  .footer {
    padding: 30px 0 30px;
  }

  .footer_content {
    grid-template-columns: 1fr;
  }

  .footer_form {
    grid-row-start: -1;
    max-width: 500px;
  }
}
</style>

<script>
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage,
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
  created: function () {
    this.getImage();
  },
  methods: {
    getImage($name) {
      var imgObj = this.shopifyData;

      var ImgSrc = "";
      for (let item in imgObj) {
        if ($name == item) {
          ImgSrc = imgObj[item];
        } else {
          continue;
        }
      }

      return ImgSrc;
    },
  },
};
</script>
