<template>
  <section
    v-if="shopifyData.checkSection == 'true'"
    class="text_box"
  >
    <!-- Sec Content -->
    <div class="sec_content">
      <h4 class="subtitle_b">
        {{ shopifyData.secSubHeading }}
      </h4> 
      <p
        v-for="(item, key) in shopifyData.secInfo"
        :key="key"
        class="body_text"
      >
        {{ item.secInfo }}
      </p>
    </div>
  </section>
</template>

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