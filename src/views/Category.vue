<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part">

    <div class="container">
      <div class="py-4 d-flex justify-content-between">
        <a href="/adicionar-categoria" class="buttom-action-add d-flex">
          <div class="rounded-circle bg-primário bg-gradiente d-inline-flex p-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11" stroke="#191919" stroke-width="2" stroke-linecap="round" />
              <path d="M1 6L11 6" stroke="#191919" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <div class="px-2">Adicionar categoria</div>
        </a>
      </div>
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

export default {
  components: { NavSidebar, CardCategory },
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