import axios from "axios"

class ShopifyAPI {

    /**
     *  shopify global attributes
     */

    // ShopifyInfo = window




    /**
 * Open menu drawer left side on the web page
 */

    openDrawer() {

        // current page is cart then skip open the drawer

        if (this.ShopifyInfo.location.pathname == '/cart')
            return false;

        // get minicart container
        var miniCart = document.querySelector('.mini_cart_container').classList.add('active')
        document.querySelector('.mini-add-card').classList.add('active')


    }

    /**
     * 
     * post request
     */

    async postRequest(url, data) {
        let response = await axios.post(url, data)
            .then(function (response) {
                // add open drawer    
                return response;
            })
            .catch(function (error) {
                return error;
            });
        return response;
    }

    /**
     *  get request management
     * @param {*} item 
     * @returns 
     */

    async getRequest(url) {
        let response = await axios.get(url)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });

        if (response.status == 200) {
            return response
        } else {
            return response
        }

    }

    async removeItem(item = {}) {  // removeItemt (add/remove) product from the cart working for the both
        // Object.keys(item).length === 0
        if (Object.keys(item).length == 0) {
            console.log('Opps! something went wrong. Please try again.')
            return;
        }

        var response = await this.postRequest('/cart/change.js', item)

        if (response.status == 200) {

            this.renderHtmlDrawer()
            this.openDrawer()

        } else {
            console.log('Opps! something went wrong. Please try again')
        }

        return response;

    }

    /**
     * add item in cart
     */

    async addItem(item = {}) {
        // Object.keys(item).length === 0
        if (Object.keys(item).length == 0) {
            console.log('Opps! something went wrong. Please try again.')
            return;
        }

        var response = await this.postRequest('/cart/add.js', item)

        if (response.status == 200) {
            this.renderHtmlDrawer()
            this.openDrawer()

        } else {
            console.log('Opps! something went wrong. Please try again')
        }

    }

    /**
     * add items in cart for multiple products
     */

    addItems(items = {}) {
        console.log('i am here!', this.location.pathname)
    }

    /**
    * update cart
    */

    chnageCart(item = {}) {
        console.log('i am here!', this.location.pathname)
    }


    /**
     * get cart items
     */

    async getCart() {
        return await this.getRequest('/cart.js')
    }

    /**
     *  build drawerhtml
     */
    async renderHtmlDrawer() {

        var getCartData = await this.getCart()

        var CartItems = getCartData.data.items;

        var card = ''

        for (let item in CartItems) {
            card += `<div class="card">
                    <div class="product_img_wrapper" id="product_img_wrapper6678699180129" pid="${CartItems[item].product_id}">
                        <img src="${CartItems[item].image}" id="6678699180129">
                        <button class="body_text remove" variantID="${CartItems[item].variant_id}">Remove</button>
                    </div>
                    <h5 class="subtitle">${CartItems[item].product_title}</h5>
                    <h5 class="subtitle_b">$${(CartItems[item].price / 100).toFixed(2)}</h5>
                <div class="mini_cart-products">
                    <button class="behno_increment_dec" request="minus" key="${CartItems[item].key}">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.4998L21 10.4998" stroke="#656565" stroke-width="1.5"/>
                        </svg>
                    </button>
                    <span><input name="number" value="${CartItems[item].quantity}" readonly></span>
                    <button class="behno_increment_dec"  request="plus" key="${CartItems[item].key}">
                        <svg width="21" height="21" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7723 0.96283L17.7723 34.5824" stroke="#656565" stroke-width="1.5"/>
                            <path d="M0.962891 17.7723L34.5824 17.7723" stroke="#656565" stroke-width="1.5"/>
                        </svg>
                    </button> 
                </div>
            </div>`
        }

        document.querySelector('p.subtotal_price.body_text').innerHTML = '$' + (getCartData.data.total_price / 100).toFixed(2)
        document.querySelector('.shopping_btn_count').innerHTML = getCartData.data.item_count
        document.querySelector('#mini_cart_content').innerHTML = card
        if (getCartData.data.item_count == 0) {
            document.querySelector('.mini_cart-payment').style.display = 'none'
            document.querySelector('.mini-add-card').style.display = 'none'
            document.querySelector('.if_cart_is_empty').style.display = 'block'
        } else {
            document.querySelector('.mini_cart-payment').style.display = 'block'
            document.querySelector('.mini-add-card').style.display = 'block'
            document.querySelector('.if_cart_is_empty').style.display = 'none'
        }

        // this function will refresh the click events
        this.refreshRemoveEvent()
        this.increamtDecriment()
    }

    /**
     * qty increase decrease
     */

    increamtDecriment() {
        var classObj = this
        var btn = document.querySelectorAll('.behno_increment_dec')
        for (const button of btn) {
            button.addEventListener('click',  function (event) {
                var targeted = event.target
                var parent = event.target.parentNode.parentNode
                var currentValue = parent.querySelector('input').getAttribute('value')
                var key = targeted.getAttribute('key')
                var qty = 0
                /// check if request id minus
                if(targeted.getAttribute('request') == 'minus'){
                    qty = (parseInt(currentValue)-1)
                }else if(targeted.getAttribute('request') == 'plus'){
                    qty = (parseInt(currentValue)+1)
                }

                parent.querySelector('input').setAttribute('value',qty) // set new value

                var items = {
                    quantity : qty,
                    id       : key
                }
               
                classObj.removeItem(items) // working (add/delete both)


            })
        }

    }


    /**
     *
     *  reander cart for behno main cart page 
     */

    async mainCart() {
        var getCartData = await this.getCart()
        
        console.log(getCartData);

        var CartItems = getCartData.data.items;
        var card = ''

        // if (this.ShopifyInfo.location.pathname != 'cart')
        //     return false;

        for (let item in CartItems) {
            card += `<div class="card">
                            <!-- <a href="#"> -->
                                <div class="product_img_wrapper" id="product_img_wrapper${CartItems[item].id}" >
                                    <img src="${CartItems[item].featured_image.url}" id="${CartItems[item].id}" >
                                    <button class="body_text remove">Remove</button>
                                </div>
                                <h5 class="card-title" >${CartItems[item].product_title}</h5>
                                <h5 class="card-title bold" >${CartItems[item].price}</h5>
                            <!-- </a> -->
                        </div>`
        }

        document.querySelector('#behno_main_cart').innerHTML = card
    }

    /**
     * refresh remove click
     */

    async refreshRemoveEvent() {

        var removeBtn = document.querySelectorAll('button.body_text.remove')
        var item = {}
        var obj = this // (this) used behalf of cuurent class

        for (const button of removeBtn) {
            button.addEventListener('click', await function (event) {
                console.log(event.target)
                var variantid = event.target.getAttribute('variantid')
                item = {
                    id: variantid,
                    quantity: 0
                }
                obj.removeItem(item)
            })
        }


    }

    /**
     * header minicart refresh when user realod the page
     */

    refreshMiniCart() {
        this.renderHtmlDrawer()
    }


    /**
     * On cart update
     */
    onCartUpdate  (cart) {
        // alert('There are now ' + cart.item_count + ' items in the cart.');
    }


}


export { ShopifyAPI }