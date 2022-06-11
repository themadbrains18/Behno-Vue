<template>
    <section class="text_box" v-if="shopifyData.checkSection == 'true'">
        <!-- Sec Content -->
        <div class="sec_content">
           <h4 class="subtitle_b">{{ shopifyData.secSubHeading }}</h4> 
           <p class="body_text" v-for="(item, key) in shopifyData.secInfo" :key="key">
               {{ item.secInfo }}
           </p>
        </div>
    </section>
</template>

<style scoped>
    .text_box{
        padding-top: 45px;
    }
    .sec_content{
        max-width: 564px;
        margin: 0 auto;
        padding: 0 11px 0 13px;
    }
    .subtitle_b{
        margin-bottom: 15px;           
    }
    .body_text{
        margin-bottom: 20px;
    }
    .body_text:last-child{
        margin-bottom: 0px;
    }
    @media screen and (max-width: 767px) {
        .text_box{
            padding-top: 28px;
        }
    }
</style>
<script>
export default {
    props:{
        shopifyData:{
            type:Object,
            required:true,
        }
    } 
}
</script>