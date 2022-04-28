<template>
    <section class="gallery_preview_sec bg-sand">
        <!-- Sec Content -->
        <div class="sec_content">
            <h1 class="main_heading">
                What is The Sense of behno?
            </h1>
            <div class="gallery_preview"> 
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/landscape1.png?v=1651052805" alt="error">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/landscape2.png?v=1651052805" alt="error">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/landscape3.png?v=1651052805" alt="error">
                <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/landscape4.png?v=1651052805" alt="error">
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
    padding: 50px 56px 45px 56px;
}
.main_heading{
    margin-bottom: 50px;    
    max-width: 694px;
}
.gallery_preview{
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 11px;
    padding-left:4px;
}
.gallery-cta{
    padding-left:4px;
}
.gallery_preview > img {
    width: 160px;
    height: 90px;
    object-fit: cover;
}

/* Responsive Breakpoints */
@media screen and (max-width: 767px) {
    .gallery_preview_sec{
        padding: 40px 0px 28px 13px;
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