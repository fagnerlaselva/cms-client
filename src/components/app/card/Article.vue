<template>
  <div>
    <!-- Verifica se há artigos para exibir -->
    <template v-if="articles.length > 0">
      <article v-for="article in articles" :key="article.id"
        class="article-card d-flex flex-sm-column flex-lg-row px-sm-3 justify-content-between border-bottom align-items-center">
        <div>
          <div class="flex">
            <!-- Detalhes do autor -->
            <div class="d-inline-flex align-items-center">
              <img :src="article.authorAvatar" :alt="article.authorName" width="28" height="28" class="rounded-circle">

              <div class="d-flex flex-column flex-sm-row">
                <div class="date-article px-2">Postado em {{ article.postedDate }}</div>
                <div class="name-author px-2">{{ article.authorName }}</div>
              </div>
            </div>
          </div>
          <div class="title-article fw-bold mt-2 text-primary-emphasis">{{ article.title }}</div>
          <div class="description-article">{{ article.description }}</div>
          <div class="d-inline-flex category-article pt-2 align-items-center">
            <div>
              <!-- Exemplo de link para edição -->
              <RouterLink :to="{ name: 'ArticleEditorPreview', params: { articleId: article.id } }"
                class="view-article">
                Editar
              </RouterLink>
            </div>
            <div class="">
              <div class="view-article px-2">{{ article.views }} visualizações</div>
            </div>
            <div class="">
              <div class="view-article px-2">#{{ article.category }}</div>
            </div>
          </div>
        </div>
        <div class="flex d-none d-xl-block align-items-center">
          <img :src="article.image" :alt="article.altImg" width="190" height="100" class="img-article-card">
        </div>
      </article>
    </template>
    <template v-else>
      <!-- Seção de mensagem quando não houver artigos -->
      <div class="d-flex py-2 row align-items-center empty-section">
        <div>
          <h2 class="text-primary-emphasis">Sem artigos no momento</h2>
          <p>
            <RouterLink :to="{ name: 'ArticleEditor' }" class="buttom-action-add d-flex">
              &rsaquo; Comece a escrever um artigo
            </RouterLink>
          </p>
        </div>

      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CardArticle',
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
};
</script>
