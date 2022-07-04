<template>
    <section class="small_things_sec">
        <div class="container">
            <h2 class="small_things_heading d-block">The small things we do have a big impact.</h2>
            <div class="small_things-texts">
                <p>nana = small</p>
                <p>mota = big</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    
    .d-block{
        display: block;
    }

    p{
        font-family: 'Work Sans',sans-serif;
        color: #ffff;
    }

    .container{
        max-width:1460px;
        width:100%;
        padding-inline:20px;
        margin: 0 auto;
    }

    .small_things_sec{
        background-color: #f0ded0;
        padding:100px 0;
        margin-bottom: 30px;
    }

    .small_things_heading{
        color: #ffff;
        font-size: 52px;
        font-family: 'Work Sans',sans-serif;
        line-height: 44px;
        text-align: center;
        margin-bottom: 30px;
        font-weight: 500;
        letter-spacing:-0.16px;
    }

    .small_things-texts{
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-wrap:wrap;
    }

    .small_things-texts p{
        line-height: 24px;
        font-size: 24px;
        font-weight: normal;
        letter-spacing:-0.08;
        width: 50%;
    }

/*=== Breakpoint At 767px ===*/
@media only screen and (max-width: 767px){
    .small_things-texts{
        flex-direction:column;
    }
    .small_things_heading{
        font-size: 44px;
        line-height: 40px;
    }
    .small_things-texts p{
        line-height: 18px;
        font-size: 18px;
        width: 100%;
    }
}
</style>
