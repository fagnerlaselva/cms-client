<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis">Autores</h1>
      <TabMember></TabMember>
      <CardMember></CardMember>
    </div>
  </section>
</template>
<script>

import TabMember from "../components/app/nav/TabMember.vue"
import CardMember from "../components/app/card/Member.vue"

export default {
  components: { CardMember, TabMember },
  name: 'ViewMember',
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