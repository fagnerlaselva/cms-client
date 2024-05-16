<template>

  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="Pt-4">Racunhos</h1>
      <TabArticle></TabArticle>
      <div class="d-flex py-2 row align-items-center empty-section">
        <div>
          <h2>Sem rascunho no momento</h2>
          <p>
            <RouterLink :to="{ name: 'ArticleEditor' }" class="buttom-action-add d-flex">
              &rsaquo; Comece a escrever um artigo
            </RouterLink>
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>


import TabArticle from "../components/app/nav/TabArticle.vue"

export default {
  components: { TabArticle },
  name: 'ViewDraft',
  data() {
    return {
      message: '',
      SeoPalavrasIdeial: 700,
    }
  },

  computed: {
    QuantideDePalavras() {
      return this.message.length
    },
    SeoPalavrasFalta() {
      return this.SeoPalavrasIdeial - this.QuantideDePalavras
    }
  }
}
</script>