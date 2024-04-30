<template>
  <template v-if="message.length">
    <p>{{ message.split(' ').length }} palavras</p>
    <p>{{ message.length }} caracteres</p>
    <p>
      falta {{ SeoPalavrasFalta }} para atingir o objetivo de SEO
    </p>
  </template>

  <template v-else>
    Comece a escrever seu artigo
  </template>
  <textarea v-model="message">

</textarea>
</template>

<script>
export default {
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
