<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="pt-4 text-primary-emphasis">Arquivado</h1>
      <TabArticle></TabArticle>
      <CardArticle :articles="articlesList"></CardArticle>
    </div>
  </section>
</template>
<script>
import CardArticle from "../components/app/card/Article.vue"
import TabArticle from "../components/app/nav/TabArticle.vue"

export default {
  components: { CardArticle, TabArticle },
  name: 'ViewArchive',
  data() {
    return {
      articlesList: [
        {
          title: 'Prospecção de novos clientes com utilização de Mailing List.',
          description: 'Mailing é um termo que tem origem do vocabulário inglês que é o ato de enviar uma correspondência ...',
          authorName: 'Lu Maia',
          authorAvatar: '/images/foto-marca-cms.jpg',
          postedDate: '05 maio 2023',
          views: 400,
          category: 'Mailing',
          altImg: 'teste alt',
          image: 'https://contatus.net.br/blog-image/prospeccao-novos-clientes.webp' // Caminho ajustado para imagem
        },
        {
          title: 'Controle de Qualidade e suas implicações no Contact Center',
          description: 'Mailing é um termo que tem origem do vocabulário inglês que é o ato de enviar uma correspondência ...',
          authorName: 'Lu Maia',
          authorAvatar: '/images/foto-marca-cms.jpg',
          postedDate: '05 maio 2023',
          views: 400,
          category: 'Mailing',
          altImg: 'teste alt',
          image: 'https://contatus.net.br/blog-image/pog/img-pog-controle-qualidade-contact-center.jpg' // Caminho ajustado para imagem
        },
      ]
    };
  }
};

</script>