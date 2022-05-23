<template>
    <section class="old_world_craftsmanship_sec">
        <div class="big_container">
            <!-- sec content -->
            <div class="sec_content">
                <div class="sec_content_inner">
                    <div class="sec_text">
                        <h2 class="sec_heading">Old-world craftsmanship,new world needs.</h2>
                        <h4 class="card_heading_b">The hands and tools.</h4>
                        <p class="body_text">The behno team interprets age-old heritage craft for the modern you. The attention to detail, the slow, meticulous construction of an object is paramount to both our factory and us.</p>
                        <p class="body_text">We want to create beautiful pieces that you grow into over the years to come.</p>
                    </div>
                    <div class="sec_img">
                        <div class="image_grid">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1IN_THE_WORLD.jpg?v=1652347248" alt="error">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1IN_THE_WORLD.jpg?v=1652347248" alt="error">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1IN_THE_WORLD.jpg?v=1652347248" alt="error">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1IN_THE_WORLD.jpg?v=1652347248" alt="error">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1IN_THE_WORLD.jpg?v=1652347248" alt="error">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1IN_THE_WORLD.jpg?v=1652347248" alt="error">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1IN_THE_WORLD.jpg?v=1652347248" alt="error">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1IN_THE_WORLD.jpg?v=1652347248" alt="error">
                            <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/1IN_THE_WORLD.jpg?v=1652347248" alt="error">
                        </div>
                    </div>
                </div>  
                <div class="sec_content_inner bottom">
                    <div class="sec_text">
                        <h2 class="quotes_text">
                            “NASHIK HAS BECOME HOME FOR US.”
                        </h2>
                    </div>
                    <div class="sec_img">
                        <img src="https://cdn.shopify.com/s/files/1/0577/1178/8125/files/flower-hand.png?v=1653039853" alt="error">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.old_world_craftsmanship_sec{
    padding: 40px 0 165px;
}
.body_text{
    margin-bottom: 20px;
}
.body_text:last-child{
    margin-bottom: 0;
}
.sec_content_inner{
    display: flex;
    align-items: center;
    gap: 101px;
}
.image_grid{   
    display: grid;
    grid-template-columns: repeat(3,183px);
    gap: 30px;
}
.quotes_text{
    color: #EF0000;
}

.sec_content_inner > div {
    width: 50%;
}
.sec_content_inner.bottom{
    margin-top: 64px;
}
.sec_content_inner.bottom .sec_img img{
    width: 100%;
    margin-left:15px;
}

/* ===== RESPONSIVE BREAKPOINTS START ===== */
@media screen and (max-width: 1290px) {
    .sec_content_inner {
        flex-direction: column;
        gap: 50px;
    }
    .sec_content_inner > div {
        width: 100%;
    }
    .image_grid{
        justify-content: center;
    }
}

@media screen and (max-width: 1024px) {
    .quotes_text{
        font-size: 45px;
    }
}
@media screen and (max-width: 767px) {
    .old_world_craftsmanship_sec{
        padding: 30px 0 74px;
    }
    .image_grid{
        grid-template-columns: repeat(3,108px);
        gap: 15px 20px;
    }    
    .sec_content_inner.bottom{
        margin-top: 32px;
    }
    .quotes_text{
        font-size: 27px;
    }
    .sec_heading{
        overflow-wrap: break-word;
    }
}
</style>