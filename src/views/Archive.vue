<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="pt-4 text-primary-emphasis">Arquivado</h1>
      <TabArticle></TabArticle>
      <div>
        <CardArticle @chaves="deleteArticle" :articles="articles"></CardArticle>
      </div>
    </div>
  </section>
</template>
<script>

import CardArticle from "../components/app/card/Article.vue"
import TabArticle from "../components/app/nav/TabArticle.vue"
import axios from "axios"

export default {
  components: { CardArticle, TabArticle },
  name: 'ViewDraft',
  data() {
    return {
      articles: [],
      currentBucketId: localStorage.getItem("currentBucket"),
      currentAccountId: localStorage.getItem('currentAccountId'),
    };
  },
  methods: {
    async getArticles() {
      const accessToken = localStorage.getItem('x-access-token')
      const response = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${this.currentBucketId}/article/`, {
        params: {
          status: 'ARCHIVED'
        },
        headers: {
          'x-access-token': accessToken
        },

      })
      this.articles = response.data
    },
    async deleteArticle(articleId) {
      console.log("teste")
      const accessToken = localStorage.getItem('x-access-token')
      await axios.delete(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${this.currentBucketId}/article/${articleId}`, {
        headers: {
          'x-access-token': accessToken
        }
      })
      this.getArticles()
    },
  },
  async mounted() {

    await this.getArticles()
  }

};

</script>