<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="mt-4">Categorias</h1>
      <TabCatergory></TabCatergory>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>
      <CardCategory></CardCategory>
    </div>
  </section>
</template>
<script>

import NavSidebar from "../components/app/nav/NavSidebar.vue"
import CardCategory from "../components/app/card/Category.vue"
import TabCatergory from "../components/app/nav/TabCatergory.vue"


export default {
  components: { NavSidebar, CardCategory, TabCatergory },
  name: 'ViewCategory',
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