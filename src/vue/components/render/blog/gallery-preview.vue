<template>
    <section class="gallery_preview_sec bg-sand" id="app">
        <!-- Sec Content -->
        <div class="sec_content">
            <h1 class="main_heading">
                {{shopifyData.GalleryPreviewHeading }}
            </h1>

            <div class="gallery_preview" v-for="(item,index) in shopifyData.previewimage" :key="index"> 
                <img  :src=(item.previewimage.src) :placeholder=(item.previewimage.placeholder) :alt=(item.previewimage.alt)  />
            </div>
            <div class="gallery-cta">
                <button @click="show = !show"  class="subtitle">VIEW + SHOP GALLERY</button>
            </div>      
                <div class="overlay" :class="{ 'active': !show}" @click="show = !show"></div>
                <div class="gallery_preview_popup" :class="{ 'active': !show}"> 
                    <div class="gallery_preview_inner">
                        <div class="popup_top_row">
                            <h3 class="card_heading">GALLERY</h3>
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/close-icon.png?v=1651150909" alt="error" class="popup_close" @click="show = !show"> 
                        </div>
                        <div class="gallery_cards">
                            <div class="card">
                                <a href="#" class="product_link"> 
                                <div class="card_img">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/gallery-img1.jpg?v=1651233038" alt="error">
                                </div>
                                <p class="subtitle">ELIZABETH BAGUETTE MINI METALLIC</p>
                                <p class="subtitle_b">$495</p>
                                </a>
                            </div>
                            <div class="card">
                                <a href="#" class="product_link"> 
                                <div class="card_img">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/gallery-img2.jpg?v=1651233038" alt="error">
                                </div>
                                <p class="subtitle">SIMONE MINI CROSSBODY SUEDE</p>
                                <p class="subtitle_b">$495</p>
                                </a>
                            </div>
                            <div class="card">
                                <a href="#" class="product_link"> 
                                <div class="card_img">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/gallery-img3.jpg?v=1651233038" alt="error">
                                </div>
                                <p class="subtitle">TINA BAGUETTE PEBBLE RUCHED</p>
                                <p class="subtitle_b">$495</p>
                                </a>
                            </div>
                            <div class="card">
                                <a href="#" class="product_link"> 
                                <div class="card_img">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/gallery-img4.jpg?v=1651233038" alt="error">
                                </div>
                                <p class="subtitle">MARY BAG MINI NAPPA</p>
                                <p class="subtitle_b">$495</p>
                                </a>
                            </div>
                            <div class="card">
                                <a href="#" class="product_link"> 
                                <div class="card_img">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/gallery-img5.jpg?v=1651233038" alt="error">
                                </div>
                                <p class="subtitle">LEX MINI ACCORDION NAPPA</p>
                                <p class="subtitle_b">$495</p>
                                </a>
                            </div>
                            <div class="card">
                                <a href="#" class="product_link"> 
                                <div class="card_img">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/gallery-img6.jpg?v=1651233038" alt="error">
                                </div>
                                <p class="subtitle">SIMONE MINI CROSSBODY SUEDE</p>
                                <p class="subtitle_b">$495</p>
                                </a>
                            </div>
                            <div class="card">
                                <a href="#" class="product_link"> 
                                <div class="card_img">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/gallery-img7.jpg?v=1651233038" alt="error">
                                </div>
                                <p class="subtitle">TINA BAGUETTE PEBBLE RUCHED </p>
                                <p class="subtitle_b">$495</p>
                                </a>
                            </div>
                            <div class="card">
                                <a href="#" class="product_link"> 
                                <div class="card_img">
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/gallery-img8.jpg?v=1651233038" alt="error">
                                </div>
                                <p class="subtitle">MARY BAG MINI NAPPA</p>
                                <p class="subtitle_b">$495</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<script>
    export default {
    
    data: function(){
        return{
            show: true
        }
    },
    props:{
        shopifyData:{
            type: Object,
            required: true,
        }
    }            
    }
</script>

<style scoped>

/* common css */
html{
    scroll-behavior: smooth;
}

.gallery_preview_sec{
    padding: 0 56px 45px 56px;
}
.main_heading{
    margin-bottom: 50px;    
    max-width: 694px;
}
.gallery_preview{
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 17px;
    padding-left:4px;
}
.gallery-cta{
    padding-left:4px;
}
.gallery_preview > img {
    width: 100px;
    height: 140px;
    object-fit: cover;
}
.gallery_preview_popup{
    padding: 19px 40px 140px;
    background: #fff;
    max-width: 1343px;
    margin: 0 auto;
    z-index: 4;
    position: fixed;
    top: 210px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    overflow-y: scroll;
    overscroll-behavior: none;
    min-height: 100vh;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: 0.4s;
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: linear-gradient(180deg, #DDCEC7 0%, #FFFFFF 100%), #FFFFFF;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
}
.gallery_preview_popup.active{
    top: 110px;
}
.overlay.active,
.gallery_preview_popup.active
{
    opacity: 1;
    visibility: visible;
}
.gallery_cards{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 48px 12px;
}
.popup_top_row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.popup_close{
    width: 33px;
    height: 33px;
    position: absolute;
    top:9px;
    right:10px;
    cursor: pointer;
}
.card .subtitle{
    margin-top: 7px;
}
.gallery_preview_popup::-webkit-scrollbar {
    width: 5px;
}
.gallery_preview_popup::-webkit-scrollbar-thumb {
    background: grey;
}
.gallery_preview_popup::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Responsive Breakpoints */
@media screen and (max-width: 767px) {
    .gallery_preview_sec{
        padding: 0 0px 28px 13px;
    }
    .gallery_preview{
        overflow-x: scroll;
        padding-left: 0;
        margin-bottom: 10px;
    }
    .main_heading{
        margin-bottom: 15px;    
        max-width: 264px;
        line-height: 41px;
    }
    .gallery-cta{
        padding-left:0px;
    }
    .gallery_preview_popup,
    .overlay 
    {
        display: none;
    }
}

</style>
