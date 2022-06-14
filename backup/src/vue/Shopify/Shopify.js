import axios from "axios"

class ShopifyAPI {

    /**
     *  shopify global attributes
     */

    ShopifyInfo = window
    /**
     * add item in cart
     */

    addItem(item = {}) {
            // Object.keys(item).length === 0
            if(Object.keys(item).length == 0) { 
                console.log('Opps! something went wrong. Please try again.')
                return; 
            }
            axios.post('/cart/add.js', item)
            .then(function (response) {
                                
            })
            .catch(function (error) {
                console.log(error);
            });
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
    * Open menu drawer left side on the web page
    */

    openDrawer() {
        console.log('i am here!', this.location.pathname)
    }

    /**
     *  build drawerhtml
     */
    renderHtmlDrawer() {
        console.log('i am here!', this.location.pathname)
    }

    /**
     * On cart update
     */
    onCartUpdate = function (cart) {
        // alert('There are now ' + cart.item_count + ' items in the cart.');
    };


}


export { ShopifyAPI }