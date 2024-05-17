<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4">Dashboard</h1>
      <div class="row py-4">
        <div v-for="(item, index) in cardData" :key="index" class="col-sm-6 col-md-4 col-lg-4">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title text-primary-emphasis">{{ item.value }}</h5>
              <p class="card-text">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="marquee">
      <div>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ViewReport',
  data() {
    return {
      cardData: [
        { label: 'Membros', value: 600 },
        { label: 'Visualizações', value: 6000 },
        { label: 'Artigos', value: 37 },
        { label: 'Categorias', value: 6 },
        { label: 'Autores', value: 2 }
      ]
    };
  }
}
</script>

<style>
.marquee {
  height: 35px;
  width: 100%;
  margin-left: -28px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  padding: 8px 0 4px 0;
}

.marquee div {
  display: inline-block;
  width: 300%;
  height: 40px;
  position: absolute;
  overflow: hidden;
  animation: marquee 30s linear infinite;
}

.marquee span {
  float: left;
  width: 200px;
}

.marquee:hover div {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    left: 0%;
  }

  100% {
    left: -1100px;
  }
}

/* @import must be at top of file, otherwise CSS will not work */
@import url("//hello.myfonts.net/count/3909a7");

@font-face {
  font-family: 'UniversLTPro-Ex';
  src: url('webfonts/3909A7_0_0.eot');
  src: url('webfonts/3909A7_0_0.eot?#iefix') format('embedded-opentype'), url('webfonts/3909A7_0_0.woff2') format('woff2'), url('webfonts/3909A7_0_0.woff') format('woff'), url('webfonts/3909A7_0_0.ttf') format('truetype');
}

.card-title {
  font-weight: 600;
}
</style>
