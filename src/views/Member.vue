<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part">
    <div class="container">
      <TabMember></TabMember>
      <CardMember></CardMember>
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
import TabMember from "../components/app/nav/TabMember.vue"
import CardMember from "../components/app/card/Member.vue"

export default {
  components: { NavSidebar, CardMember, TabMember },
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