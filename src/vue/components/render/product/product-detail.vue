<template>
    <section :data-id=(shopifyData.productId) class="product_sec">
        <div class="product_grid">
            
                       <!-- :pagination= "true"
                    :navigation="false" -->
            <div class="product_grid_image modify-slider">
                <swiper
                    :direction="'vertical'"
                    :modules="modules"
                    :autoHeight="true"
                    :loop="true"
                    :navigation="true"
                    :pagination= "{
                        type: 'bullets',
                    }"
                    :mousewheel= "{
                        invert: false,
                        releaseOnEdges: true
                    }"
                    :autoplay="{
                        delay: 1000000,
                    }"
                    :breakpoints="{
                        '320': {
                            navigation:false
                        },
                        '991': {
                            pagination : { type: 'fraction'}
                        }
                    }"
                    class="product-media-slider " id="productMediaslider">
                    <swiper-slide v-for="(value, key) in shopifyData.productMedia" :key="key" class="product_slide" >
                        <div class="product_media" v-html="encodeData(value.media)" @click="productZoomInOut">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="product_grid_content">
                <h1 class="product_title card_heading">{{shopifyData.productTitle}}</h1>
                <h2 class="product_price">{{shopifyData.productPrice}}</h2>
                <form>
                    <p class="after_pay">or 4 interest-free installments of $97.50 by<img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/afterpay.png?v=1653477636"></p>
                    <ul class="product_variant">
                        <!-- <template  v-for="(value, key) in shopifyData.productVariant" :key="key"> -->
                                <!-- {{value.title}} -->
                            <li class="color_variant_wrap">
                                <input type="radio" name="colorVariant" id="black" class="color_variant" checked>
                                <label class="color_variant_label" for="black"> 
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/black.png?v=1651228172" alt="">
                                </label> 
                            </li>
                            <li class="color_variant_wrap">
                                <input type="radio" name="colorVariant" id="skyblue" class="color_variant">
                                <label class="color_variant_label" for="skyblue"> 
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/skyblue.png?v=1651228172" alt="">
                                </label> 
                            </li>
                            <li class="color_variant_wrap">
                                <input type="radio" name="colorVariant" id="golden" class="color_variant">
                                <label class="color_variant_label" for="golden"> 
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/golden.png?v=1651228172" alt="">
                                </label> 
                            </li>
                            <li  class="color_variant_wrap">
                                <input type="radio" name="colorVariant" id="yellow" class="color_variant">
                                <label class="color_variant_label" for="yellow"> 
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/yellow.png?v=1651228173" alt="">
                                </label> 
                            </li>
                            <li class="color_variant_wrap">
                                <input type="radio" name="colorVariant" id="red_purple" class="color_variant">
                                <label class="color_variant_label" for="red_purple"> 
                                    <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/red_purple.png?v=1651228172" alt="">
                                </label> 
                            </li>
                        <!-- </template> -->
                    </ul>

                    <p class="product_left subtitle_b" v-if="shopifyData.productQuantity == 0">
                        Out of Stoke
                    </p>
                    <p class="product_left subtitle_b" v-else-if="shopifyData.productQuantity <= 5">
                        ONLY {{ shopifyData.productQuantity }} LEFT
                    </p>

                    <div class="add_cart_btn_wrap">
                        <button type="submit" class="add_cart_btn cta_btn cta_btn-black">
                            ADD TO BAG
                        </button>
                    </div>
                </form>


                <div class="product_description_data">
                    <div class="product_description"  v-html="encodeData(shopifyData.productDescription[0].description)"></div>
                    <ul class="product_accordians">
                        <!-- DETAILS -->
                        <li class="product_accordian" v-if="shopifyData.productDescription[1].description">
                            <button class="accodian d-flex w-100" @click="(event)=>{accordion(event)}">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.7969 16.1564C29.2245 15.7257 29.5537 15.2073 29.7616 14.6371C29.9696 14.0669 30.0514 13.4583 30.0015 12.8534C29.9517 12.2485 29.7712 11.6616 29.4726 11.1332C29.1741 10.6048 28.7645 10.1473 28.2721 9.79245C27.7797 9.43756 27.2162 9.19366 26.6204 9.07755C26.0247 8.96143 25.4108 8.97586 24.8212 9.11985C24.2316 9.26384 23.6802 9.53396 23.205 9.91159C22.7298 10.2892 22.3422 10.7654 22.0688 11.3073C22.0211 11.4032 22.0135 11.5141 22.0476 11.6157C22.0817 11.7172 22.1547 11.801 22.2506 11.8488C22.346 11.8967 22.4566 11.9049 22.558 11.8716C22.6595 11.8383 22.7436 11.7661 22.7921 11.671C22.9567 11.344 23.1722 11.0453 23.4306 10.786C23.8274 10.388 24.317 10.0948 24.8552 9.933C25.3935 9.77116 25.9635 9.74567 26.5141 9.85884C27.0646 9.972 27.5784 10.2203 28.0092 10.5813C28.44 10.9423 28.7742 11.4048 28.9819 11.9271C29.1896 12.4494 29.2642 13.0151 29.1989 13.5733C29.1337 14.1316 28.9306 14.6649 28.6081 15.1252C28.2856 15.5855 27.8537 15.9584 27.3513 16.2104C26.8488 16.4624 26.2917 16.5854 25.7299 16.5686L25.5197 13.8369C25.5131 13.7394 25.4714 13.6476 25.4023 13.5785C25.3332 13.5094 25.2414 13.4677 25.1439 13.4611L18.2016 12.9964C18.1437 12.9922 18.0856 13.0004 18.0312 13.0206C17.9768 13.0409 17.9274 13.0726 17.8864 13.1136L9.11751 21.8865C9.04224 21.9622 9 22.0646 9 22.1714C9 22.2781 9.04224 22.3806 9.11751 22.4563L16.5407 29.8795C16.5782 29.9177 16.6228 29.948 16.672 29.9689C16.7213 29.9897 16.7742 30.0005 16.8276 30.0007C16.9342 29.9992 17.0359 29.9556 17.1105 29.8795L25.8834 21.1106C25.9244 21.0696 25.9561 21.0202 25.9763 20.9658C25.9966 20.9114 26.0048 20.8533 26.0006 20.7954L25.7662 17.3849H25.8107C26.3651 17.3889 26.9148 17.2823 27.4275 17.0714C27.9403 16.8605 28.4058 16.5494 28.7969 16.1564ZM25.2005 20.6702L16.8276 29.0228L9.95803 22.1532L18.3268 13.8369L24.756 14.2612L24.9095 16.4474C24.3503 16.2935 23.8406 15.9969 23.4306 15.5866C23.3532 15.5204 23.2538 15.4859 23.1521 15.4898C23.0504 15.4937 22.9539 15.5359 22.882 15.6078C22.81 15.6798 22.7678 15.7763 22.7639 15.878C22.76 15.9797 22.7946 16.0791 22.8608 16.1564C23.4365 16.7333 24.1683 17.1294 24.9661 17.296L25.2005 20.6702Z" fill="black"/>
                                    </svg>
                                    DETAILS
                            </button>
                            <div class="product_accordian_panel" v-html="encodeData(shopifyData.productDescription[1].description)">
                            </div>
                        </li>
                        <!-- SPECIFICTION -->
                        <li class="product_accordian" v-if="shopifyData.productDescription[2].description">
                            <button class="accodian d-flex w-100" @click="(event)=>{accordion(event)}">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.9566 19.1634C33.8498 18.9424 33.5803 18.8488 33.3548 18.9534C31.7028 19.7237 29.7202 20.3344 27.5352 20.7605V14.7123C27.5386 14.6665 27.5419 14.6207 27.5419 14.5746C27.5419 14.4163 27.5235 14.2664 27.4874 14.1217C26.921 11.7333 22.6514 10 17.3347 10C17.0017 10 16.6582 10.0074 16.3131 10.0225C9.18902 10.3345 6 13.0553 6 15.6132C6 15.615 6.0003 15.6171 6.0003 15.6192C6.0003 15.6203 6 15.6215 6 15.6227V22.2731C6 22.482 6.02529 22.6941 6.07527 22.9028C6.92552 26.4928 12.7981 29 20.356 29C20.8733 29 21.3929 28.9882 21.8994 28.9648C26.4324 28.7675 30.6382 27.8615 33.7423 26.414C33.8997 26.3404 34 26.1847 34 26.0136V19.3632C34 19.3596 33.9988 19.3567 33.9988 19.3531C33.9991 19.2893 33.9865 19.2249 33.9566 19.1634ZM22.9938 21.3524C22.6144 21.3796 22.2339 21.4026 21.8515 21.4194C21.3568 21.4425 20.8525 21.4537 20.3524 21.454C20.3467 21.454 20.3413 21.454 20.3359 21.454C20.0498 21.454 19.7662 21.449 19.4838 21.4416C19.417 21.4398 19.3507 21.4378 19.2842 21.4357C17.0884 21.3645 15.0134 21.0743 13.2138 20.5829V16.8292C13.25 16.8587 13.2897 16.8871 13.3276 16.9157C13.3611 16.9411 13.393 16.9668 13.4279 16.992C13.523 17.0599 13.6233 17.1264 13.729 17.1905C13.7609 17.21 13.7952 17.2283 13.828 17.2476C13.9129 17.2966 14.0003 17.3445 14.0912 17.3909C14.1306 17.4112 14.1704 17.4313 14.211 17.4511C14.3218 17.5052 14.4362 17.5572 14.5551 17.6074C14.5717 17.6142 14.5868 17.6219 14.6036 17.6287C14.7418 17.686 14.8866 17.7398 15.0351 17.7915C15.0694 17.8036 15.1049 17.8152 15.1398 17.8267C15.2651 17.8687 15.3936 17.9088 15.5252 17.947C15.5571 17.9561 15.5884 17.9656 15.6207 17.9747C15.9509 18.0669 16.2999 18.1458 16.6648 18.2114C16.6952 18.217 16.7256 18.2223 16.756 18.2274C16.9361 18.2584 17.1191 18.2871 17.3064 18.3113C17.3085 18.3116 17.3103 18.3119 17.3124 18.3122C17.5117 18.3379 17.7147 18.3597 17.9215 18.3775C17.9504 18.3798 17.9796 18.3819 18.0088 18.384C18.1762 18.3973 18.3454 18.4082 18.517 18.4159C18.5628 18.418 18.6086 18.4206 18.6549 18.4221C18.8542 18.4295 19.0554 18.4348 19.2595 18.4348C19.2604 18.4348 19.2616 18.4348 19.2628 18.4348C19.264 18.4348 19.2649 18.4348 19.2661 18.4348C19.4931 18.4348 19.7244 18.4289 19.9526 18.4194C20.1287 18.4117 20.3021 18.4008 20.4743 18.3887C20.4969 18.3872 20.5195 18.3852 20.5421 18.3834C20.705 18.3713 20.8661 18.3571 21.0253 18.3411C21.0344 18.3402 21.0434 18.3394 21.0524 18.3385C23.5408 18.0826 25.5406 17.3524 26.6326 16.3596V20.9201C25.4972 21.1113 24.3282 21.2516 23.1413 21.3411C23.0919 21.3453 23.0429 21.3488 22.9938 21.3524ZM19.2986 13.4704C19.3727 13.4805 19.4468 13.4905 19.5181 13.5023C19.6012 13.5159 19.6816 13.5316 19.7614 13.5472C19.7873 13.5523 19.8144 13.5567 19.8397 13.562C21.0139 13.8067 21.8144 14.265 21.9611 14.7088V17.3149C21.629 17.3717 21.2909 17.418 20.9492 17.4544C20.9461 17.4547 20.9431 17.455 20.9401 17.4553C20.5978 17.4916 20.2515 17.5173 19.9029 17.533C19.6885 17.5419 19.47 17.5475 19.2559 17.5475C18.6185 17.5475 18.0172 17.5079 17.459 17.4367C15.0405 17.1264 13.4378 16.2208 13.2352 15.3612C13.2253 15.3249 13.2208 15.285 13.2208 15.2389C13.2208 14.4405 14.9791 13.5088 17.5987 13.3939C17.7442 13.3871 17.8893 13.3835 18.0305 13.3835C18.4339 13.3838 18.8187 13.4087 19.1785 13.453C19.2198 13.4586 19.2586 13.4648 19.2986 13.4704ZM16.3535 10.9077C16.685 10.8935 17.0153 10.8861 17.335 10.8861C22.0779 10.8861 26.1512 12.3955 26.6091 14.3273C26.6266 14.3973 26.6332 14.4694 26.635 14.5442C26.6344 14.5545 26.632 14.564 26.632 14.5746C26.632 15.5146 25.2431 16.5682 22.8646 17.1359V14.738C22.877 14.6778 22.8776 14.6142 22.8625 14.5501C22.6105 13.4923 21.1909 12.8665 19.6133 12.6197C19.0879 12.537 18.5447 12.4962 18.0209 12.4959C17.8652 12.4959 17.7053 12.4998 17.5467 12.5074C14.5109 12.6407 12.3076 13.7887 12.3076 15.2377C12.3076 15.2554 12.31 15.2714 12.3106 15.2885V20.3214C9.36576 19.3638 7.38556 17.8595 6.95502 16.0411C6.9207 15.8981 6.90354 15.7542 6.90354 15.6132C6.90324 13.5467 9.86073 11.1926 16.3535 10.9077ZM33.0971 25.7311C32.1905 26.1368 31.1894 26.4952 30.1155 26.804V24.8677C30.1155 24.6228 29.9135 24.4245 29.6639 24.4245C29.4143 24.4245 29.2122 24.6228 29.2122 24.8677V27.0469C28.2642 27.2859 27.2664 27.4871 26.231 27.6488V25.6419C26.231 25.3969 26.0289 25.1986 25.7794 25.1986C25.5298 25.1986 25.3277 25.3969 25.3277 25.6419V27.7779C24.3595 27.9047 23.3626 27.9971 22.3462 28.0533V25.9279C22.3462 25.6829 22.1441 25.4847 21.8945 25.4847C21.6449 25.4847 21.4429 25.6829 21.4429 25.9279V28.0935C21.0825 28.1056 20.7194 28.1136 20.356 28.1136C19.7102 28.1136 19.0782 28.0949 18.4616 28.0592V25.9279C18.4616 25.6829 18.2596 25.4847 18.01 25.4847C17.7604 25.4847 17.5584 25.6829 17.5584 25.9279V27.9933C16.5091 27.9017 15.5114 27.759 14.5768 27.5699V25.3984C14.5768 25.1534 14.3748 24.9552 14.1252 24.9552C13.8756 24.9552 13.6736 25.1534 13.6736 25.3984V27.3689C12.5671 27.0971 11.5666 26.7552 10.6923 26.3552V24.0764C10.6923 23.8315 10.4903 23.6332 10.2407 23.6332C9.9911 23.6332 9.78907 23.8315 9.78907 24.0764V25.8948C8.25387 25.0228 7.24707 23.9343 6.95502 22.7009C6.9207 22.5576 6.90354 22.4137 6.90354 22.2728V17.9499C7.99796 19.3856 9.99862 20.5534 12.599 21.324C12.6111 21.3287 12.621 21.3367 12.634 21.3405C12.7273 21.3677 12.8254 21.3914 12.9203 21.4174C12.9311 21.4203 12.942 21.4233 12.9528 21.4262C13.1976 21.4936 13.4463 21.5577 13.7004 21.6177C13.9226 21.6709 14.1472 21.722 14.3766 21.7696C14.3886 21.772 14.401 21.7743 14.4133 21.777C16.2087 22.1472 18.2145 22.349 20.3566 22.349C20.8748 22.349 21.3944 22.3369 21.9 22.3136C26.1256 22.1295 30.0673 21.3296 33.0977 20.0493V25.7311H33.0971Z" fill="black"/>
                                    </svg>
                                    SPECS
                            </button>
                            <div class="product_accordian_panel" v-html="encodeData(shopifyData.productDescription[2].description)">
                            </div>
                        </li>
                        <!-- SHIPPING -->
                        <li class="product_accordian" v-if="shopifyData.productDescription[3].description">
                            <button class="accodian d-flex w-100" @click="(event)=>{accordion(event)}">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.49357 20.3674H2.44845C2.20046 20.3674 2 20.5679 2 20.8159C2 21.0639 2.20046 21.2643 2.44845 21.2643H7.49357C7.74156 21.2643 7.94202 21.0639 7.94202 20.8159C7.94202 20.5679 7.74156 20.3674 7.49357 20.3674Z" fill="black"/>
                                        <path d="M37.9981 21.1145L33.631 16.3281H28.4312V13.21H17.2785C16.4341 11.3211 14.5412 10 12.342 10C9.36018 10 6.93359 12.4261 6.93359 15.4084C6.93359 18.1834 9.03595 20.4746 11.7312 20.7795V23.8169H8.36551C8.11751 23.8169 7.91706 24.0173 7.91706 24.2653C7.91706 24.5133 8.11751 24.7138 8.36551 24.7138H11.7312V27.2171H13.8281C13.9824 28.2884 14.8968 29.1167 16.0094 29.1167C17.1225 29.1167 18.0369 28.288 18.1912 27.2171H27.5338H28.4307H30.7277C30.882 28.2884 31.7964 29.1167 32.9094 29.1167C34.0221 29.1167 34.9369 28.288 35.0907 27.2171H37.9972V21.1145H37.9981ZM7.8305 15.4079C7.8305 12.9203 9.85438 10.8965 12.342 10.8965C14.8295 10.8965 16.8534 12.9203 16.8534 15.4079C16.8534 17.8955 14.8295 19.9194 12.342 19.9194C9.85438 19.9194 7.8305 17.895 7.8305 15.4079ZM16.0094 28.2194C15.2838 28.2194 14.6932 27.6292 14.6932 26.9027C14.6932 26.1776 15.2834 25.5869 16.0094 25.5869C16.7355 25.5869 17.3261 26.1771 17.3261 26.9027C17.3261 27.6292 16.7359 28.2194 16.0094 28.2194ZM27.5343 26.3197H18.1351C17.8772 25.3833 17.027 24.6905 16.0099 24.6905C14.9928 24.6905 14.143 25.3833 13.8851 26.3197H12.6285V20.8015C15.4771 20.6508 17.7503 18.2928 17.7503 15.4075C17.7503 14.9581 17.6889 14.524 17.5857 14.1065H27.5347V16.3277V26.3197H27.5343ZM32.9099 28.2194C32.1838 28.2194 31.5932 27.6292 31.5932 26.9027C31.5932 26.1776 32.1834 25.5869 32.9099 25.5869C33.6355 25.5869 34.2261 26.1771 34.2261 26.9027C34.2261 27.6292 33.6355 28.2194 32.9099 28.2194ZM37.1011 26.3197H35.0347C34.7768 25.3833 33.9265 24.6905 32.9099 24.6905C31.8923 24.6905 31.0425 25.3833 30.7847 26.3197H28.4312V17.2246H33.235L37.1011 21.4621V26.3197Z" fill="black"/>
                                        <path d="M3.37033 17.0373H5.95164C6.19963 17.0373 6.40009 16.8364 6.40009 16.5888C6.40009 16.3408 6.19963 16.1404 5.95164 16.1404H3.37033C3.12233 16.1404 2.92188 16.3408 2.92188 16.5888C2.92188 16.8364 3.12233 17.0373 3.37033 17.0373Z" fill="black"/>
                                        <path d="M12.2595 16.0559C12.2842 16.0725 12.3052 16.0936 12.3322 16.1048C12.386 16.1276 12.4452 16.1402 12.507 16.1402H15.0884C15.3363 16.1402 15.5368 15.9393 15.5368 15.6918C15.5368 15.4438 15.3363 15.2433 15.0884 15.2433H12.9555V11.8198C12.9555 11.5718 12.755 11.3713 12.507 11.3713C12.2595 11.3713 12.0586 11.5718 12.0586 11.8198V15.6918C12.0586 15.7536 12.0712 15.8128 12.094 15.8666C12.1052 15.894 12.1263 15.9146 12.1429 15.9393C12.1586 15.9626 12.1703 15.9891 12.1895 16.0088C12.2088 16.0285 12.2362 16.0402 12.2595 16.0559Z" fill="black"/>
                                    </svg>
                                    SHIPPING
                            </button>
                            <div class="product_accordian_panel" v-html="encodeData(shopifyData.productDescription[3].description)">
                            </div>
                        </li>
                        <!-- ETHICAL PHILOSOPHY -->
                        <li class="product_accordian" v-if="shopifyData.productDescription[4].description">
                            <button class="accodian d-flex w-100" @click="(event)=>{accordion(event)}">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0041 32H24.3126H24.3127C24.3163 32 24.3197 32 24.3235 31.9999L24.5551 31.9914C26.1948 31.9807 27.5289 30.6342 27.5289 28.9899V15.1685H31.7C31.8657 15.1685 32 15.0342 32 14.8685V10.5947C32 9.16396 30.8391 8 29.4121 8L29.3726 8.00002C29.3726 8.00002 29.3725 8 29.3725 8C29.3724 8 29.3723 8.00002 29.3721 8.00002L12.7783 8.00864C11.1384 8.01934 9.80439 9.36582 9.80439 11.0101V26.0631H8.3C8.13433 26.0631 8 26.1975 8 26.3631V28.9878C8 30.6487 9.34766 32 11.0041 32ZM31.4 10.5947V14.5685H27.5289V10.4437C27.5289 9.4272 28.3557 8.60024 29.3721 8.60002L29.4122 8.6C30.5084 8.6 31.4 9.49487 31.4 10.5947ZM10.4044 11.0101C10.4044 9.69453 11.4711 8.61714 12.7804 8.60864L27.7727 8.60086C27.2569 9.04923 26.9289 9.70823 26.9289 10.4437V28.9899C26.9289 30.3055 25.8623 31.3829 24.5423 31.3915L24.3098 31.3999C22.9856 31.3983 21.9087 30.317 21.9087 28.9878V26.3631C21.9087 26.1975 21.7744 26.0631 21.6087 26.0631H10.4044V11.0101ZM8.6 26.6631H21.3087V28.9878C21.3087 29.9735 21.7833 30.8501 22.5154 31.4H11.0041C9.67842 31.4 8.6 30.3179 8.6 28.9878V26.6631Z" fill="black"/>
                                    </svg>
                                    ETHICAL PHILOSOPHY
                            </button>
                            <div class="product_accordian_panel" v-html="encodeData(shopifyData.productDescription[4].description)">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Product Zoom Slider  -->
            <div class="product_zoom modify-slider" id="productZoom">
                <swiper
                    :modules="modules"
                    :autoHeight="true"
                    :loop="true"
                    :navigation="true"
                    :autoplay="{
                        delay: 1000000,
                    }">
                    <swiper-slide v-for="(value, key) in shopifyData.productMedia" :key="key" class="t-center">
                        <div class="product_media" v-html="encodeData(value.media)" @click="productZoomInOut">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<style>
    .product_slide,
    .product_zoom{
        background : #F1F1F1; 
    }
    .product_media {
        height: 100%;
        display: inline-block;
        cursor: url(https://cdn.shopify.com/s/files/1/1000/3130/files/18dddcc9cf53b547eaf0f76c308502f6.svg?v=1633015103) 16 16,auto;
    }
    .product_media > *{
        height: 100%;
        object-fit: cover;
    }
    /* Product Zoom css Start */
    .product_zoom{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        min-height: 100vh;
        overflow-y: scroll;
        z-index: -2;
        opacity: 0;
        visibility: hidden;
    }
    .product_zoom.active{
        z-index: 6;
        opacity: 1;
        visibility: visible;
    }
    .product_zoom .swiper-button-prev{
        left: 80px;
    }
    .product_zoom .swiper-button-next{
        right: 80px;
    }
    .product_zoom .product_media{
        line-height: 0;
        max-width: 1200px;
        margin: 0 auto;
        cursor: url(https://cdn.shopify.com/s/files/1/1000/3130/files/x.svg?v=1633016418) 16 16,auto;
    }
    /* Product Zoom css End */

    .product-media-slider .swiper-pagination-fraction {
        position: absolute;
        bottom: 15px;
        left: auto;
        width: fit-content;
        right: 20px;
        z-index: 2;
    }

    .product-media-slider .swiper-pagination-fraction,
    .product-media-slider .swiper-pagination-fraction span {
        color: #777777;
        font-size: 12px;
        letter-spacing: 0.01em;
    }
    .product-media-slider .swiper-button-prev{
        right: 15px;
        left: auto;
        transform: translateY(-100%) rotate(90deg);
    }
    .product-media-slider .swiper-button-next{
        transform: translateY(100%) rotate(-90deg);
    }

    .product_description_data .Ehic-Content li{
        display: flex;
        gap: 15px;
        margin-bottom: 10px;
    }
    .product_description_data .Ehic-Content li:last-child{
        margin-bottom: 0;
    }
    .product_description_data .Ehic-Content img{
        height: 42px;
        width: 42px;
    }
    .product_description_data *{
        font-family: 'adobe-caslon-pro',sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }

    @media only screen and (max-width:991px){
        .product_grid_image.modify-slider{
            position: relative;
        }
        .product-media-slider{
            position: static;
            
        }
        .product-media-slider .swiper-button-prev,
        .product-media-slider .swiper-button-next{
            display: none;
        }
        .product-media-slider .swiper-pagination{
            display: flex;
            top: calc(100% + 12px);
            transform: translateX(50%);
            right: 50%;
        }
        .product-media-slider .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, 
        .product-media-slider .swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{
            margin: 0 2px;
            height: 6px;
            width: 6px;
            background: #9D9D9D;
            opacity: 1;
        }
        .product-media-slider .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet.swiper-pagination-bullet-active{
            background: #3D3D3D;
        }

    }
    
</style>
<style scoped>
    .product_sec {
        padding-top: 30px;
    }
    .product_grid{
        display: grid;
        grid-template-columns: 55% 370px;
        gap: 80px;
        padding: 0 15px;
        overflow: hidden;
    } 

    .product-media-slider{
        height: calc(100vh - 110px);
        text-align: center;
    }

    
    .product_title {
        line-height: 18px;
    }
    .product_price{
        font-size: 15px;
        letter-spacing: 0.02em;
        margin: 9px 0;
        line-height: 18px;
    }
    .after_pay{
        font-size: 11px;
        letter-spacing: 0.015em;
    }
    .after_pay img{
        vertical-align: middle;
    }
    .product_variant{
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 20px 0 17px;
    }
    .color_variant{
        display: none;
    }
    .color_variant_label{
        cursor: pointer;
        line-height: 0;
        height: fit-content;
        border-radius: 50%;
        display: block;
        box-shadow: 0 0  0 1px #E0E0E0;
    }
    .color_variant:checked + .color_variant_label{
        box-shadow: 0 0  0 2px #fff,0 0  0 3px #6B6B6B;
    }
    .color_variant_label img{
        height: 24px;
        width: 24px;
        border-radius: 50%;
    }
    .product_left{
        line-height: 15px;
        color: #878787;
        margin-bottom: 12px;
    }
    .add_cart_btn{
        width: 100%;
        padding-block: 15px;
    }

    .product_description_data{
        margin-top: 30px;   
    }

    .product_accordians {
        margin-top: 15px;
    }
    .product_accordian{
        margin-top: 5px;
    }
    .accodian{
        font-family: 'Helvetica Neue',sans-serif;
        position: relative;
        align-items: center;
    }

    .accodian svg {
        margin-right: 10px;
    }

    .accodian::after{
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        height: 6px;
        background: url('https://cdn.shopify.com/s/files/1/0577/1178/8125/files/arrow.svg?v=1653913857') no-repeat center;
        background-size: 12px;
        transition: 0.3s;
    }
    .accodian.active::after{
        transform: translateY(-50%) rotate(-180deg);
    }

    .product_accordian_panel{
        height: 0;
        overflow: hidden;
        transition: 0.3s;
        padding-left: 18px;
    }

    
    @media only screen and (max-width:1440px){
        .product-media-slider{
            height: calc(100vh - 106px);
        }
        .product_grid{
            gap: 60px;
        }
    }
    
    @media only screen and (max-width:991px){
        .product_sec {
            padding-top: 0;
        }
        .product_grid{
            padding: 0;
            grid-template-columns : 100%;
            gap: 45px;
        }
        .product_grid_content{
            max-width: 600px;
            padding: 0 15px;
            width: 100%;
            margin: 0 auto;
        }
        .product-media-slider{
            height: 500px;
        }
        .add_cart_btn_wrap{
            padding: 0 15px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 3;
        }
    }

    @media only screen and (max-width:575px){
        .product-media-slider{
            height: 400px;
        }
    }
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay,Pagination,Mousewheel } from "swiper";
export default {
  
    data() {
      console.log(this.shopifyData)
      return {
        swiperDirection : true
      }
  },
  props: {
    shopifyData: {
      type: Object,
      required: true,
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods : {
    productZoomInOut(){
        let productZoom = document.querySelector("#productZoom");
        if(productZoom.matches('.active')){
            document.body.removeAttribute("style");
        }
        else {
            document.body.style.overflow = "hidden";
        }
        productZoom.classList.toggle("active");
    },
    encodeData(data){
        data =  atob(data);
        data = data.replace(/Â/g, "");
        return data;
    },
    accordion(event){
        const accodian = event.currentTarget;
        const accodianPanel = accodian.nextElementSibling;
        const activeAccodianPanel = document.querySelector(".accodian.active");
        if(activeAccodianPanel){
            activeAccodianPanel.classList.remove("active");    
            activeAccodianPanel.nextElementSibling.setAttribute("style",`height: 0px;`);
        }
        if(activeAccodianPanel !=  accodian){
            accodianPanel.setAttribute("style",`height: ${accodianPanel.scrollHeight}px;`);
            accodian.classList.add("active");
        }
    }
  },
  mounted(){
    window.addEventListener('resize',()=>{
        if(window.innerWidth <= 991){
            document.querySelector(".footer_content").style.paddingBottom = `${document.querySelector(".add_cart_btn_wrap").offsetHeight}px`;
            document.querySelector(".footer_wave").style.backgroundColor = document.querySelector(".tmbMain").style.backgroundColor = "#f1f1f1";
        }else{
            document.querySelector(".footer_content").style.paddingBottom = `0`;
            document.querySelector(".footer_wave").style.backgroundColor = document.querySelector(".tmbMain").style.backgroundColor = "transparent";
        }    
    })

    if(window.innerWidth <= 991){
        document.querySelector(".footer_content").style.paddingBottom = `${document.querySelector(".add_cart_btn_wrap").offsetHeight}px`;
        document.querySelector(".footer_wave").style.backgroundColor = document.querySelector(".tmbMain").style.backgroundColor = "#f1f1f1";
    }
  },
  setup() {
    return {
      modules: [Navigation,Autoplay,Pagination,Mousewheel]
    };
  }
};

</script>