<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4">Artigos</h1>
      <TabArticle></TabArticle>
      <CardArticle></CardArticle>
      <CardArticle></CardArticle>
      <CardArticle></CardArticle>
      <CardArticle></CardArticle>
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