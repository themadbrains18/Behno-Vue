<template>
    <section class="Urbanism_and_development_sec">
        <div class="big_container">
            <!-- sec content -->
            <div class="sec_content">
                <div class="sec_content_inner">
                    <div class="sec_img">
                        <div class="image_grid">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/Urbanism_and_development_sec.png?v=1653041500" alt="error">
                        </div>
                    </div>
                    <div class="sec_text">
                        <h2 class="sec_heading">Urbanism and development among heritage and history.</h2>
                        <h4 class="card_heading_b">Nashik, an unspoken gem of a city.</h4>
                        <p class="body_text">The behno team spends much time in Nashik, the city where our partner factory in India is based. Nashik is one of the oldest cities in the subcontinent, located in the western state of Maharashtra, about a four hour car journey from Mumbai. The ride crosses various terrains – dizzying cityscapes, magnificent mountains, vast farmlands, and flowing rivers – on both smooth and bumpy roads.</p>
                        <p class="body_text">We go to the factory to personally do quality control, assuring you receive the best object we make. While we’re there, we also work with their teams to experiment with design development, build relationships, and most importantly, to get a pulse of what’s going on in the field at a grassroots level.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.Urbanism_and_development_sec{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E9E7E3 100%);
    padding: 200px 0;
}
.sec_content_inner{
    display: flex;
    align-items: center;
    gap: 107px;
}
.sec_content_inner > div {
    width: 50%;
}
.body_text{
    margin-bottom: 20px;
}
.body_text:last-child{
    margin-bottom: 0;
}
.image_grid img {
    width: 100%;
}
.sec_content {
    padding: 0 50px;
}
/* ===== RESPONSIVE BREAKPOINTS START ===== */
@media screen and (max-width: 1024px) {
    .sec_content_inner{
        gap: 30px;
    }
    .sec_content{
        padding: 0;
    }
}
@media screen and (max-width: 767px) {
    .sec_content_inner{
        flex-direction: column;
    }
    .sec_content_inner> div{
        width: 100%;
    }
    .sec_text {
        padding: 0 20px;
    }
    .Urbanism_and_development_sec {
        padding: 20px 0;
    }
}
</style>