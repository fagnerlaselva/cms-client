<template>
  <div>

    <!-- Verifica se há artigos para exibir -->
    <template v-if="articles.length > 0">
      <article v-for="article in articles" :key="article.id"
        class="article-card d-flex flex-sm-column flex-lg-row px-sm-3 justify-content-between border-bottom align-items-start">
        <div class="">
          <div class="flex">
            <!-- Detalhes do autor -->
            <div class="d-inline-flex align-items-center">
              <img
                src="https://cms-content.assisty24h.com.br/cms/66bb861dbeadeeadd54a23fc/bucket/66bb861dbeadeeadd54a23ff/avatar-fagners-bucket.png"
                alt="Contatus" width="38" height="38" class="rounded-3">
              <div class="d-flex flex-column flex-sm-row">
                <div class="name-author px-2">contatus</div>
                <div class="date-article px-2">Postado em {{ article.createdAt }}</div>
              </div>
            </div>
          </div>
          <div class="title-article mt-2 text-primary-emphasis">{{ article.title }}</div>
          <div class="description-article">{{ article.description }}</div>
          <div class="d-inline-flex category-article pt-2 align-items-center">
            <div>
              <!-- Exemplo de link para edição -->
              <RouterLink :to="{ name: 'ArticleEditor', query: { articleId: article.id } }" class="view-article px-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 3.99998H6.8C5.11984 3.99998 4.27976 3.99998 3.63803 4.32696C3.07354 4.61458 2.6146 5.07353 2.32698 5.63801C2 6.27975 2 7.11983 2 8.79998V17.2C2 18.8801 2 19.7202 2.32698 20.362C2.6146 20.9264 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9264 19.673 20.362C20 19.7202 20 18.8801 20 17.2V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9447C10.8425 15.8957 11.0376 15.8149 11.2166 15.7053C11.4184 15.5816 11.5914 15.4086 11.9373 15.0627L21.5 5.49998C22.3284 4.67156 22.3284 3.32841 21.5 2.49998C20.6716 1.67156 19.3284 1.67155 18.5 2.49998L8.93723 12.0627C8.59133 12.4086 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1574 8.05523 13.3615C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg> Editar
              </RouterLink>
            </div>
            <div class="">
              <div class="view-article px-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                100 visualizações
              </div>
            </div>
            <div class="">
              <div class="view-article px-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 10.5L11 12.5L15.5 8M19 21V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V21L12 17L19 21Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                #{{ article.categories }}
              </div>
            </div>
            <button @click="deleteArticle(article.id)" class="btn view-article px-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Deletar
            </button>
          </div>
        </div>
        <div class="">
          <div class="flex d-none d-xl-block align-items-center img-article-card"
            :style="{ backgroundImage: 'url(' + article.thumbnailUrl + ')' }">
            <!-- Imagem como background -->
          </div>
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
  emits: ['chaves'],
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {

    deleteArticle(articleId) {
      console.log(articleId)
      this.$emit('chaves')
    },
  },
};
</script>
<style>
article {
  padding: 25px 0;
  font-weight: 400;
}

.name-author {
  font-size: 1.4rem;
}

.date-article {
  font-size: 13px;
}

.category-article span {
  font-size: 13px;
  background-color: #FDF8F4;
  padding: 8px;
  border-radius: 8px;
  width: auto;
}

.view-article {
  font-size: 13px;
  color: #757575;
}

.img-article-card {
  width: 190px;
  height: 100px;
  background-size: cover;
  background-position: center;
}

.name-author {
  font-size: 13px;
}
</style>
