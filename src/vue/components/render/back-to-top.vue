<template>
    <a class="back_sense_behno samll_text" href="#">
      Back to The Sense of behno 
    </a> 
</template>

<style scoped>
.back_sense_behno{
    text-decoration: underline;
    display: block;
    width: fit-content;
    margin:  100px auto 127px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;
    color: #000000;
}
@media screen and (max-width: 991px) {
  .back_sense_behno{
        margin:  60px auto 40px;
  }
}
@media screen and (max-width: 767px) {
  .back_sense_behno{
    margin:  45px auto 22px;
  } 
}
</style>

<script>
export default  {
    name : "back-to-top"
}
</script>
