<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis">Membros</h1>
      <TabMember></TabMember>
      <CardAuthor></CardAuthor>
    </div>
  </section>
</template>
<script>

import TabMember from "../components/app/nav/TabMember.vue"
import CardAuthor from "../components/app/card/Author.vue"



export default {
  components: { CardAuthor, TabMember },
  name: 'ViewAuthor',

}
</script>