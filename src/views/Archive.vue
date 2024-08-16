<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="pt-4 text-primary-emphasis">Arquivado</h1>
      <TabArticle></TabArticle>
      <CardArticle @delete="deleteArticle('asds111d')" :articles="articles"></CardArticle>
    </div>
  </section>
</template>

<script>
import CardArticle from '../components/app/card/Article.vue'
import TabArticle from "../components/app/nav/TabArticle.vue"
import axios from "axios"

export default {
  components: { TabArticle, CardArticle },
  name: 'ViewDraft',
  data() {
    return {
      articles: [],
      currentBucketId: localStorage.getItem("currentBucket"),
      currentAccountId: localStorage.getItem('currentAccountId'),
    };
  },
  methods: {
    async deleteArticle(articleId) {
      const accessToken = localStorage.getItem('x-access-token')
      await axios.delete(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${this.currentBucketId}/article/${articleId}`, {
        headers: {
          'x-access-token': accessToken
        }
      })
      this.getArticles()
    },
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
    
  },
  async mounted() {
    await this.getArticles()
  }

};

</script>