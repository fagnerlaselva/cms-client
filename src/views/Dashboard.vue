<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis">Dashboard</h1>
      <div class="py-3 d-flex justify-content flex-column flex-sm-row row-gap-3 column-gap-4">
        <AddButton :link="{ name: 'ArticleEditor' }" buttonText="Adicionar um artigo" />
        <AddButton :link="{ name: 'AddCategory' }" buttonText="Adicionar uma Categoria" />
        <AddButton :link="{ name: 'AddMember' }" buttonText="Adicionar um Membro" />
      </div>
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
import AddButton from '@/components/generic/triggers/AddButton.vue';
export default {
  name: 'ViewReport',
  components: {
    ReportCard, AddButton
  },
  data() {
    return {
      cardData: [
        { label: 'Membros', value: 600 },
        { label: 'Visualizações', value: 6000 },
        { label: 'Artigos', value: 37 },
        { label: 'Rascunhos', value: 2 },
        { label: 'Categorias', value: 6 },
        { label: 'Autores', value: 5 },

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
