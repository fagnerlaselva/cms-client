<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis">Artigos</h1>
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
          authorAvatar: 'https://avatars.githubusercontent.com/u/34191081?v=4',
          postedDate: '05 maio 2023',
          views: 400,
          category: 'Mailing',
          image: 'https://contatus.net.br/blog-image/marketing-direto-notbook.webp' // Caminho ajustado para imagem
        },
        {
          title: 'Mailing o que é e como utilizá-lo de maneira inteligente.',
          description: 'Mailing é um termo que tem origem do vocabulário inglês que é o ato de enviar uma correspondência ...',
          authorName: 'Fafafront Mendes',
          authorAvatar: 'https://avatars.githubusercontent.com/u/34191081?v=4',
          postedDate: '05 maio 2023',
          views: 400,
          category: 'Mailing',
          image: 'https://contatus.net.br/blog-image/newsletter.webp' // Caminho ajustado para imagem
        },
        {
          title: 'Organizando sua empresa e implementando as regras da LGPD.',
          description: 'Chegou o momento de se adequar as diretrizes da LGPD, o que fazer? Separamos para você todas as etapas de implementação do programa de proteção de dados.',
          authorName: 'kratinho Lima',
          authorAvatar: 'https://avatars.githubusercontent.com/u/17029609?v=4',
          postedDate: '05 maio 2023',
          views: 400,
          category: 'Mailing',
          image: 'https://contatus.net.br/blog-image/como-posso-segmentar-um-mailing-list.webp'
        }
      ]
    };
  }
};

</script>