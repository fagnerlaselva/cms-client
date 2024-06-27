<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="pt-4 text-primary-emphasis">Autores</h1>
      <TabMember></TabMember>
      <CardAuthor></CardAuthor>
    </div>
  </section>
</template>
<script>

import TabMember from "../components/app/nav/TabMember.vue"
import CardAuthor from "../components/app/card/Author.vue"

export default {
  components: { CardAuthor, TabMember },
  name: 'ViewAuthor',
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