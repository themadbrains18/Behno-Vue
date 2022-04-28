<template>
  <!-- Garment Hero Section Start -->
  <section class="sec_garment_hero">
    <div class="sec_content">
        <h2 class="card_heading_b">
            THE GARMENT WORKER PROJECT
        </h2>
        <h3 class="card_heading_b sec_heading">
            The Garment Worker Project debuted in July 2016 at Sotheby’s in New York City.
        </h3>
        <p class="sec_info body_text">
          Created out of a collaboration between nonprofit organization Muni Seva Ashram (MSA), veterans of the garment industry, and the team behind behno, MSA Ethos is the ethical knits and wovens ready-to-wear factory that first implemented “The behno Standard.”
          <br><br>
          Through the Garment Worker Project, behno’s founder, Shivam Punjya, invited fashion photographer Dan Smith and documentary filmmaker Kent Mathews to MSA Ethos to explore the less visible side of fashion. While Smith captured the unique individuals of MSA Ethos through an emotional series of intimate portraits, Mathews documented their personal stories and the unique infrastructure of the factory through documentary film.
          <br><br>
          The initiative demonstrated that garment workers are not a commodity and that garment production in the multibillion-dollar fashion industry need not be based on the exploitation of labor.
          The portraits below are framed and available for sale. Please inquire within by emailing clientservices@behno.com.
        </p>
    </div>
  </section>
  <!-- Garment Hero Section End -->
</template>

<style scoped>
.sec_garment_hero {
  padding: 72px 0 120px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e9e7e3 100%);
}
.sec_content{
  max-width:633px;
  width: 100%;
  margin:  0 auto;
  padding: 0 12px 0 20px;
}
.card_heading_b{
  text-align: center;
  margin-bottom: 72px;
}
.card_heading_b.sec_heading{
  text-transform: initial;
  font-family: 'Helvetica Neue',sans-serif;
  text-align: initial;
  margin-bottom: 14px;
}

/* Resposive Css Code */
@media screen and (max-width: 991px) {
  .card_heading_b{
    margin-bottom: 47px;
  } 
  
}
@media screen and (max-width: 767px) {
.sec_garment_hero{
    padding: 44px 0 37px;
  }

}
</style>