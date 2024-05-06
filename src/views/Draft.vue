<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part">
    <div class="container">
      <TabArticle></TabArticle>

      <div class="f-flex py-4">
        <h1>Sem rascunho no momento</h1>
        <p><a href="/editor-artigo">&rsaquo; Comece a escrever um artigo </a></p>

      </div>
    </div>
  </section>
</template>
<style>
.dashboard_part .container {
  width: 100%;
  max-width: 910px;
  margin: 0 auto;
}
</style>
<script>

import NavSidebar from "../components/app/nav/NavSidebar.vue"
import TabArticle from "../components/app/nav/TabArticle.vue"

export default {
  components: { NavSidebar, TabArticle },
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