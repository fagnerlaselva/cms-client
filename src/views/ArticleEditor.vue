<template>
  <section class="main_content dashboard_part d-flex justify-content-between  flex-column flex-sm-row">
    <div class="" style=" max-width: 200px;">
      <nav aria-label="breadcrumb" class="fixed-top">
        <ol class="breadcrumb p-2">
          <li class="breadcrumb-item"><a href="/">&lsaquo; Voltar</a></li>
        </ol>
      </nav>
    </div>

    <div class="container p-4">
      <textarea v-model="message" placeholder="Comece a escrever" focus>
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
