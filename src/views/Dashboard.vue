<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4">Dashboard</h1>
      <ReportCard :cardData="cardData" />
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
import ReportCard from '@/components/app/card/ReportCard.vue';
export default {
  name: 'ViewReport',
  components: {
    ReportCard
  },
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
</style>
