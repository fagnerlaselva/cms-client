<template>
  <div>
    <article v-for="category in categories" :key="category.id"
      class="article-card d-flex flex-sm-column flex-lg-row px-sm-3 justify-content-between border-bottom align-items-start">
      <div class="flex">
        <div class="d-block-flex">
          <div class="title-article py-1 text-primary-emphasis">{{ category.name }}</div>
          <div class="description-member">{{ category.title }}</div>
          <div class="d-inline-flex category-article pt-2 align-items-center">
            <div>
              <!-- Exemplo de link para edição -->
              <RouterLink :to="'/editar-categoria/' + category.id" class="view-article px-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 3.99998H6.8C5.11984 3.99998 4.27976 3.99998 3.63803 4.32696C3.07354 4.61458 2.6146 5.07353 2.32698 5.63801C2 6.27975 2 7.11983 2 8.79998V17.2C2 18.8801 2 19.7202 2.32698 20.362C2.6146 20.9264 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9264 19.673 20.362C20 19.7202 20 18.8801 20 17.2V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9447C10.8425 15.8957 11.0376 15.8149 11.2166 15.7053C11.4184 15.5816 11.5914 15.4086 11.9373 15.0627L21.5 5.49998C22.3284 4.67156 22.3284 3.32841 21.5 2.49998C20.6716 1.67156 19.3284 1.67155 18.5 2.49998L8.93723 12.0627C8.59133 12.4086 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1574 8.05523 13.3615C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Editar
              </RouterLink>

              <RouterLink :to="{ name: 'AddCategory' }" class="view-article px-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Desativar
              </RouterLink>

              <button @click="deleteCategory(category.id, category.bucketId)" class="btn view-article px-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex d-none d-xl-block align-items-center img-article-card"
        :style="{ backgroundImage: 'url(' + category.bannerUrl + ')' }">
        <!-- Imagem como background -->
      </div>
    </article>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: 'CardCategory',
  data() {
    return {
      categories: [],
      currentBucketId: localStorage.getItem("currentBucket"),
      currentAccountId: localStorage.getItem('currentAccountId')
    };
  },
  methods: {
    async deleteCategory(categoryId) {
      const accessToken = localStorage.getItem('x-access-token')
      await axios.delete(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/category/${this.currentBucketId}/${categoryId}`, {
        headers: {
          'x-access-token': accessToken
        }
      })
      this.listCategories()
    },
    async listCategories() {
      const accessToken = localStorage.getItem('x-access-token')
      const response = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/category/${this.currentBucketId}`, {
        headers: {
          'x-access-token': accessToken
        }
      })
      this.categories = response.data
    },

  },
  async mounted() {
    await this.listCategories()
  }
}
</script>
<style>
.title-article {
  width: 100%;
}

article {
  padding: 25px 0;
  font-weight: 400;
}

.name-member {
  font-size: 1.4rem;
}

.date-article {
  font-size: 13px;
}

.category-article span {
  font-size: 13px;
  background-color: #FDF8F4;
  padding: 3px 5px;
  border-radius: 8px;
  width: auto;
}

.view-article {
  font-size: 13px;
  color: #757575;
}

.img-article-card {
  width: 190px;
  height: 100px;
  background-size: cover;
  background-position: center;
}
</style>
