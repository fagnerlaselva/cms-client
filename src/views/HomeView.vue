<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part">
    <div class="container">
      <TabArticle></TabArticle>
      <CardArticle></CardArticle>
      <CardArticle></CardArticle>
      <CardArticle></CardArticle>
      <CardArticle></CardArticle>
    </div>
  </section>
</template>
<script>

import NavSidebar from "../components/app/nav/NavSidebar.vue"
import CardArticle from "../components/app/card/Article.vue"
import TabArticle from "../components/app/nav/TabArticle.vue"

export default {
  components: { NavSidebar, CardArticle, TabArticle },
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