<template>
  <div class="col-12 col-sm-12 col-lg-6 pb-4 top-list">
    <ol class="p-2 list-group list-group-numbered rounded-4">
      <div class="h4 text-primary-emphasis pb-2 px-3 mt-4">Top Artigos</div>
      <li v-for="article in articles" :key="article.id"
        class="list-group-item d-flex justify-content-between align-items-start">
        <div class="me-auto text-secondary d-flex">
          <div class="image-container rounded-3" style="width:100px;"
            :style="{ backgroundImage: 'url(' + article.image + ')' }">
          </div>
          <div class="px-2">
            <div class="text-primary-emphasis fw-medium">{{ article.title }}</div>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ article.views }} Views
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TopArticles',
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => []
    }
  }

};
</script>

<style scoped>
.image-container {
  width: 60px;
  height: 60px;
  background-size: cover;
  background-position: center;
}
</style>
