<template>
    <section class="gallery_preview_sec bg-sand">
        <!-- Sec Content -->
        <div class="sec_content">
            <h1 class="main_heading">
                Amrit Sandhu chats with the behno team.
            </h1>
            <div class="gallery_preview"> 
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/galler-preview1.jpg?v=1650966802" alt="error">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/galler-preview2.jpg?v=1650966802" alt="error">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/galler-preview3.jpg?v=1650966802" alt="error">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/blog-banner-bg-res.jpg?v=1650965505" alt="error">
            </div>
            <div class="gallery-cta">
                <a href="#" class="subtitle">VIEW + SHOP GALLERY</a>
            </div>
        </div>
    </section>
</template>



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
    display: flex;
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
}

</style>