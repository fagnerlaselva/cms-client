<template>

  <NavSidebar></NavSidebar>



  <section class="main_content dashboard_part">
    <div class="container">
      <h1>home</h1>
    </div>
  </section>



</template>

<script>
import NavSidebar from "../components/app/NavSidebar.vue"


export default {
  components: { NavSidebar, },
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