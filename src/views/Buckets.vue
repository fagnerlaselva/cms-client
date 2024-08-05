<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="pt-4 text-primary-emphasis">Buckets</h1>
      <TabBuckets></TabBuckets>
      <CardBuckets></CardBuckets>
    </div>
  </section>
</template>
<script>

import TabBuckets from "../components/app/nav/TabBuckets.vue"
import CardBuckets from "../components/app/card/buckets.vue"

export default {
  components: { CardBuckets, TabBuckets },
  name: 'ViewBuckets',
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