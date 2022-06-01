<template>
    <section class="text_box bg-sand" v-if="shopifyData.checkSection == 'true'">
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
    .sec_content{
        max-width: 564px;
        margin: 0 auto;
        padding: 0 11px 30px 13px;
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