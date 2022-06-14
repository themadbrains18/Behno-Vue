<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  data() {},
  mounted: function () {
    this.renderInitalLoad(); //method1 will execute at pageload
    this.saveTotalPagination();
    this.handleDebouncedScroll = this.handleScroll;

    window.addEventListener("scroll", this.handleDebouncedScroll);
  },
  beforeDestroy() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
    // window.removeEventListener('scroll', this.handleDebouncedScroll);
  },

  methods: {
    saveTotalPagination() {
      var pagination = document.querySelectorAll(".default_pagination span");
      if (pagination.length > 1) {
        localStorage.setItem(
          "totalPaginate",
          pagination[pagination.length - 2].children[0].innerHTML
        );
      } else {
        // else part destory local storeage
        localStorage.setItem("totalPaginate", 0);
      }
    },
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      this.isUserScrolling = window.scrollY > 0;
      const element = document.getElementById("shopify-section-footer");

      //   console.log(element.offsetTop, '=================', window.scrollY);
      var trigger = element.offsetTop - window.scrollY;
      //   console.log(trigger);

      if (trigger < 1000) {
        console.log("calling handleScroll");

        var totalP = localStorage.getItem("totalPaginate");

        if(totalP > 1 ){

          fetch("?page=2",{
              method : 'GET',
          })
          .then((response) => {
              return response.text()
           }).then((html) =>{
              // Initialize the DOM parser
                var parser = new DOMParser();

                // Parse the text
                var doc = parser.parseFromString(html, "text/html");

                // You can now even select part of that html as you would in the regular DOM 
                // Example:
                // var docArticle = doc.querySelector('article').innerHTML;

                console.log(doc);
           });
          
        }


      }

      //   console.log(localStorage.getItem('totalPaginate'))
    },

    productSwitch() {
      var clear = setInterval(() => {
        var toggleExtras = document.querySelectorAll("li.nav-dots");
        if (toggleExtras == null) return;

        Array.prototype.forEach.call(
          toggleExtras,
          function (toggleExtra, index) {
            toggleExtra.addEventListener("click", function (event) {
              event.preventDefault();

              console.log("hiiii");
              var currentElem = toggleExtra;
              var currentParentElem = toggleExtra.parentElement.childNodes;
              var targetProductGrid =
                toggleExtra.parentElement.parentElement.parentElement
                  .parentElement.parentElement;

              // remove active class from select ul group
              for (var i = 0; i < currentParentElem.length; i++) {
                currentParentElem[i].classList.remove("active");
              }

              // add class to active
              currentElem.classList.add("active");

              /// on click get active product
              var getActive = currentElem.getAttribute("index");

              var productData = JSON.parse(
                targetProductGrid.children[0].innerHTML
              ); /// read json object

              var activeProduct = productData[getActive];
              console.log(activeProduct);
              // collection all swatchs list
              var swatchs = [];
              productData.forEach((e, index) => {
                var metafield = e.metafield;
                var a = metafield.link;
                metafield["status"] = "";
                if (getActive == index) {
                  metafield["status"] = "active";
                }
                swatchs.push(metafield);
              });

              // collection all swatchs list
              var noscript = targetProductGrid.children[0].innerHTML;
              var swatchList = "";
              if (swatchs.length === 0) {
                console.log("Array is empty!");
              } else {
                swatchList = "";
                swatchList += "<ul>";
                swatchs.forEach((e, index) => {
                  swatchList += `<li  index="${index}" link="${e.name}" class="nav-dots ${e.status}"><span><img src="${e.img}" /></span></li>`;
                });
                swatchList += "</ul>";
              }

              //   var html = `<noscript>${noscript}</noscript>`;
              //   html += `<div class="card">
              //         <a href="/products/${activeProduct.product.handle}" >
              //             <div class="item_left item_left_active" ></div>
              //             <div class="product_img_wrapper" id="product_img_wrapper6617090588769" >
              //             <img src="${activeProduct.product.media[0].src}" id="${
              //     activeProduct.product.media[0].id
              //   }" alt="${activeProduct.product.media[0].alt}">
              //             </div>
              //             <h5 class="card-title" >${
              //               activeProduct.product.title
              //             }</h5>
              //             <h5 class="card-title bold">${
              //               activeProduct.product.price / 100
              //             }</h5>
              //         </a>
              //         <div class="quickButton quickActive" >
              //             <div class="color_swatches" >
              //                 ${swatchList}
              //             </div>
              //             <div class="product_cta_wrapper" data-v-32bfb114=""><button id="quickAdd6617090588769" class="quickAdd" data-v-32bfb114=""><span data-v-32bfb114="">Quick Add</span></button></div>
              //         </div>
              //     </div>`;

              // change content by selected swatches

              // product a tag
              targetProductGrid
                .querySelector("a")
                .setAttribute(
                  "href",
                  `/products/${activeProduct.product.handle}`
                );

              // product media
              targetProductGrid
                .querySelector(".product_img_wrapper img")
                .setAttribute("src", `${activeProduct.product.media[0].src}`);
              targetProductGrid
                .querySelector(".product_img_wrapper img")
                .setAttribute("alt", `${activeProduct.product.media[0].id}`);
              targetProductGrid
                .querySelector(".product_img_wrapper img")
                .setAttribute("id", `${activeProduct.product.media[0].alt}`);

              targetProductGrid
                .querySelector(".product_img_wrapper img.hoverImg")
                .setAttribute("src", `${activeProduct.product.media[1].src}`);
              targetProductGrid
                .querySelector(".product_img_wrapper img.hoverImg")
                .setAttribute("alt", `${activeProduct.product.media[1].id}`);
              targetProductGrid
                .querySelector(".product_img_wrapper img.hoverImg")
                .setAttribute("id", `${activeProduct.product.media[1].alt}`);

              //   console.log(this.renderHtmlGrid(activeProduct, noscript, swatchs))

              // console.log(currentParentElem.children.classList.remove('active'))
            });
          }
        );

        clearInterval(clear);
      }, 1000);
    },

    // this function (swatchs) will create swatch for products
    async swatchBuilder(swatchs) {
      if (swatchs.length === 0) {
        console.log("Array is empty!");
      }
      var html = "";
      html += "<ul>";
      swatchs.forEach((e, index) => {
        html += `<li  index="${index}" link="${e.name}" class="nav-dots ${e.status}"><span><img src="${e.img}" /></span></li>`;
      });
      return html + "</ul>";
    },

    // render product grid html
    async renderHtmlGrid(activeProduct, noscript, swatchs) {
      var swatchList = "";

      if (typeof swatchs == "object") {
        //
        swatchList = await this.swatchBuilder(swatchs);
      }

      var html = `<noscript>${noscript}</noscript>`;
      html += `<div class="card">
                    <a href="/products/${activeProduct.product.handle}" >
                        <div class="item_left item_left_active" ></div>
                        <div class="product_img_wrapper " id="product_img_wrapper6617090588769" >
                        <img src="${activeProduct.product.media[0].src}" id="${
        activeProduct.product.media[0].id
      }" alt="${activeProduct.product.media[0].alt}" class="normal" />
<img src="${activeProduct.product.media[1].src}" id="${
        activeProduct.product.media[1].id
      }" alt="${activeProduct.product.media[1].alt}" class="hoverImg" />
                        </div>
                        <h5 class="card-title" >${
                          activeProduct.product.title
                        }</h5>
                        <h5 class="card-title bold">${
                          activeProduct.product.price / 100
                        }</h5>
                    </a>
                    <div class="quickButton quickActive" >
                        <div class="color_swatches" >
                            ${swatchList}
                        </div>
                        <div class="product_cta_wrapper" data-v-32bfb114=""><button id="quickAdd6617090588769" class="quickAdd" data-v-32bfb114=""><span data-v-32bfb114="">Quick Add</span></button></div>
                    </div>
                </div>`;
      return html;
    },

    /// this function will execute when user first time load the colllection page
    async renderInitalLoad(activeIndex = 0) {
      /* your logic */
      var productMainGrid = document.querySelectorAll(
        ".product-containers  div.product_item"
      ); // this code will be get from all products grid capture noscript json

      productMainGrid.forEach(async (element, index) => {
        var productData = JSON.parse(element.children[0].innerHTML); /// read json object

        element.removeChild(element.children[1]); // remove svg loader

        if (productData.length > 1) {
          // this product have multiple variants

          var activeProduct = productData[activeIndex];

          // collection all swatchs list
          var swatchs = [];
          productData.forEach((e) => {
            var metafield = e.metafield;
            var a = metafield.link;
            metafield["status"] = "";
            if (a.indexOf(productData[activeIndex].product.handle) > -1) {
              metafield["status"] = "active";
            }
            swatchs.push(metafield);
          });
          // collection all swatchs list
          var noScript = element.children[0].innerHTML;

          var html = await this.renderHtmlGrid(
            activeProduct,
            noScript,
            swatchs
          );
          element.innerHTML = html; // content bind in same elements
        } else {
          // if loop comes in else part it mean's product have no variation
          var noScript = element.children[0].innerHTML;
          var html = await this.renderHtmlGrid(productData[0], noScript);
          element.innerHTML = html; // content bind in same elements
        }
      });

      await this.productSwitch(); // refresh click event
    },
  },
};
</script>
