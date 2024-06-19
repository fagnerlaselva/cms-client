<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis">Rascunho</h1>
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
  name: 'ViewHome',
  data() {
    return {
      articlesList: [
        {
          title: 'Marketing direto: 7 principais exemplos de ações',
          description: 'Mailing é um termo que tem origem do vocabulário inglês que é o ato de enviar uma correspondência ...',
          authorName: 'Lu Maia',
          authorAvatar: '/images/foto-marca-cms.jpg',
          postedDate: '05 maio 2023',
          views: 400,
          category: 'Mailing',
          altImg: '',
          image: 'https://contatus.net.br/blog-image/marketing-direto-notbook.webp' // Caminho ajustado para imagem
        },
        {
          title: 'Marketing direto: 7 principais exemplos de ações - Duplicado',
          description: 'Mailing é um termo que tem origem do vocabulário inglês que é o ato de enviar uma correspondência ...',
          authorName: 'Lu Maia',
          authorAvatar: '/src/assets/images/foto-marca-cms.jpg',
          postedDate: '05 maio 2023',
          views: 400,
          category: 'Mailing',
          altImg: 'Sem imagem',
          image: 'https://contatus.net.br/blog-image/marketing-direto-notbook.webp' // Caminho ajustado para imagem
        },
      ]
    };
  }
};

</script>