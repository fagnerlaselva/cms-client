<template>
  <section class="main_content dashboard_part d-flex justify-content-between  flex-column flex-sm-row">
    <div class="" style=" max-width: 200px;">
      <nav aria-label="breadcrumb align-middle" class="fixed-top">
        <ol class="breadcrumb p-2">
          <li class="breadcrumb-item align-middle">
            <RouterLink :to="{ name: 'Home' }" class="text-decoration-none align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              &nbsp; Home
            </RouterLink>
          </li>
        </ol>
      </nav>
    </div>

    <div class="container ">
      <textarea class="p-4" v-model="message" placeholder="Comece a escrever" focus>
      </textarea>
    </div>

    <div class="position-relative p-4" style="max-width: 340px;">
      <span>Rascunho - salvo </span>
      <template v-if="message.length">
        <p>{{ message.split(' ').length }} palavras</p>
        <p>{{ message.length }} caracteres</p>
        <p>
          falta {{ SeoPalavrasFalta }} para atingir o objetivo de SEO
        </p>
      </template>
      <template>
        Comece a escrever seu artigo
      </template>

    </div>
  </section>
</template>
<style>
textarea {
  width: 100%;
  height: 100vh;
}
</style>
<script>
export default {
  components: {},
  name: 'ArticleEditor',
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
