<template>
  <section class="tnd_sec">
    <div class="container">
      <!-- Sec Head -->
      <div class="sec_head">
        <div
          v-for="(value, key) in shopifyData.box"
          :key="key"
          class="contact_info"
        >
          <div class="contact_logo">
            <img
              :src="(value.imgUrl.src)"
              :src-placeholder="(value.imgUrl.placeHolder)"
              :alt="(value.imgUrl.alt)"
            >
          </div>
          <h3 class="contact_heading">
            {{ value.boxHeading }}
          </h3>
          <p
            class="contact_brief"
            v-html="renderHtml(value.boxContent)"
          />
          <div class="contact_number">
            <a :href="(value.link)">{{ value.linkText }}</a>
          </div>
        </div>
      </div>
      <!-- Sec Content -->
      <div class="tnd_tabs">
        <ul class="tnd_tabs_inner">
          <li
            v-for="(value, key) in shopifyData.tabs"
            :key="key"
          >
            <button
              v-if="key === 0"
              class="tab_btn show"
            >
              {{ value.Heading }}
              <img
                src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/tab-button-icon.png?v=1650705094"
                alt="image_decription"
              >
            </button>
            <button
              v-else
              class="tab_btn"
            >
              {{ value.Heading }}
              <img
                src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/tab-button-icon.png?v=1650705094"
                alt="image_decription"
              >
            </button>
            <div class="tab_content">
              <div
                class="tab_content_inner"
                v-html="renderHtml(value.Content)"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { Buffer } from "buffer";
window.Buffer = Buffer;

export default {
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
  
  data() {
    window.addEventListener("load", this.onWindowLoad);
    window.addEventListener("resize", this.onWindowLoad);
  },
  created: function () {
    this.renderHtml();
  },
  methods: {
    renderHtml(html) {
      if (html == null || html == "undefined") {
        return;
      }
      var finalhtml = window.atob(html);
      return finalhtml;
    },
    onWindowLoad() {
      try {
        const tabBtn = document.querySelectorAll(".tnd_tabs .tab_btn");
        if (window.innerWidth >= 768) {
          const showTabBtn = document.querySelector(".tnd_tabs .tab_btn.show");
          showTabBtn
            .closest(".tnd_tabs_inner")
            .setAttribute(
              "style",
              `padding-bottom:${showTabBtn.nextElementSibling.offsetHeight}px`
            );
          for (let i of tabBtn) {
            i.addEventListener("click", () => {
              const showTabBtn = document.querySelector(
                ".tnd_tabs .tab_btn.show"
              );
              if (showTabBtn) {
                showTabBtn.classList.remove("show");
              }
              if (i != showTabBtn) {
                i.classList.add("show");
                i.closest(".tnd_tabs_inner").setAttribute(
                  "style",
                  `padding-bottom:${i.nextElementSibling.offsetHeight}px`
                );
              } else {
                i.closest(".tnd_tabs_inner").setAttribute(
                  "style",
                  `padding-bottom:0px`
                );
              }
            });
          }
        } else {
          const showTabBtn = document.querySelector(".tnd_tabs .tab_btn.show");
          showTabBtn.nextElementSibling.setAttribute(
            "style",
            `height:${showTabBtn.nextElementSibling.scrollHeight}px;`
          );
          for (let i of tabBtn) {
            // showTabBtn
            i.addEventListener("click", () => {
              const showTabBtn = document.querySelector(
                ".tnd_tabs .tab_btn.show"
              );
              if (showTabBtn) {
                showTabBtn.classList.remove("show");
              }
              if (i != showTabBtn) {
                i.classList.add("show");
                i.nextElementSibling.setAttribute(
                  "style",
                  `height:${i.nextElementSibling.scrollHeight}px;`
                );
              } else {
                i.nextElementSibling.setAttribute("style", `height:0px;`);
              }
            });
          }
        }
      } catch (error) {
        console.log("Error in Term and Custom js code Error");
      }
    }
  }
};
</script>

<style >
.mb-35,
.tab_content_inner p + p {
  margin-bottom: 35px;
}
.mb-20,
.tab_content_inner ul,
.tab_content_inner p {
  margin-bottom: 20px;
}
.tab_content_inner li > p {
  margin: 0;
}
.tab_content_inner ul {
  padding-left: 20px;
}
.tab_content_inner ul > li {
  list-style: disc;
}
.contact_number a,
.tab_content_inner p {
  font-family: "adobe-caslon-pro", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #000000;
}
.tab_content_inner h4 {
  font-weight: 700;
  font-size: 12px;
  line-height: 14.65px;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
}

.tab_content > ul {
  padding-left: 30px;
}
.tab_content > ul li {
  list-style: disc !important;
}
.tab_content_inner ul a{
    font-family: adobe-caslon-pro,sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .02em;
}
</style>



<style scoped>

.tnd_sec {
  padding: 167px 0 71px;
}
.tnd_sec .sec_head {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  justify-content: space-between;
  max-width: 1178px;
  padding: 0 20px;
  margin: 0 auto 77px;
}
.contact_logo {
  margin-bottom: 21px;
}
.contact_heading {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 8px;
}
.contact_brief {
  font-family: "adobe-caslon-pro", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #000000;
  max-width: 417px;
}
.contact_brief.brief-modifier {
  max-width: 433px;
}
.contact_number {
  margin-top: 24px;
}
.tnd_tabs {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
}
.tnd_tabs .tnd_tabs_inner {
  display: flex;
  gap: 4px;
  transition: 0.4s;
}
.tnd_tabs .tnd_tabs_inner > li {
  width: 33.33%;
}
.tnd_tabs .tab_btn {
  font-weight: 700;
  font-size: 12px;
  text-align: start;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #000000;
  width: 100%;
  background: #e9e7e3;
  border: 1px solid #000000;
  padding: 20px 20px 20px 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.tnd_tabs .tab_content {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1340px;
  padding: 0 20px;
  width: 100%;
}
.tnd_tabs .tab_content_inner {
  background-color: #fff;

  border: 1px solid #000000;
  padding: 35px 74px 45px;
}

.tab_btn + .tab_content {
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
}
.tab_btn.show {
  background-color: #fff;
  position: relative;
}
.tab_btn.show:after {
  content: "";
  position: absolute;
  bottom: -6px;
  width: 100%;
  height: 15px;
  background: #fff;
  left: -1px;
  z-index: 1;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.tab_btn.show + .tab_content {
  opacity: 1;
  visibility: visible;
}
.tab_btn img {
  transition: 0.4s;
}
.tab_btn.show img {
  transform: rotate(45deg);
}

@media (max-width: 1024px) {
  .tnd_tabs .tab_content_inner {
    padding: 35px 30px 45px;
  }
}
@media (max-width: 767px) {
  .tab_btn.show + .tab_content {
    height: auto;
    overflow: visible;
  }
  .tnd_sec {
    padding: 121px 0;
  }
  .contact_logo {
    margin-bottom: 18px;
  }
  .tnd_sec .sec_head {
    flex-direction: column;
    gap: 58px;
    margin-bottom: 27px;
    padding: 0 10px;
  }
  .tnd_tabs {
    padding: 0 10px;
  }
  ul.tnd_tabs_inner {
    flex-direction: column;
  }
  .tnd_tabs .tnd_tabs_inner > li {
    width: 100%;
  }
  .tnd_tabs .tab_content {
    position: static;
    transform: none;
    padding: 0;
    height: 0;
    overflow: hidden;
  }
  .tnd_tabs .tab_content_inner {
    padding: 20px 16px 30px;
  }
  .tnd_tabs .tab_btn {
    margin-bottom: 0px;
  }
  .tnd_tabs .tnd_tabs_inner {
    gap: 8px;
  }
  .contact_info .contact_brief {
    max-width: 100%;
  }
}
</style>

