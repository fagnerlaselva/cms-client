<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part">
    <div class="container">
      <TabCatergory></TabCatergory>
      <CardCategory></CardCategory>
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