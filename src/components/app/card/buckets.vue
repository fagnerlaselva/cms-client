<template>
  <div>
    <article v-for="bucket in buckets" :key="bucket.id" class="d-flex flex-row border-bottom px-sm-3"
      aria-hidden="true">
      <div>
        <div class="flex align-items-center">
          <div class="d-flex flex-row align-items-center">
            <img :src="bucket.bannerUrl" width="38" height="38" class="rounded-3 placeholder-glow">
            <div class="title-article px-2 text-primary-emphasis placeholder-glow">{{ bucket.name }}</div>
            <div><span class="badge text-bg-secondary placeholder-glow">{{ bucket.role }}</span></div>
          </div>
        </div>
        <div class="description-member placeholder-glow">{{ bucket.description }}</div>
        <div class="d-inline-flex category-article py-2 align-items-center placeholder-glow">
          <div>
            <RouterLink :to="'/editar-bucket/' + bucket.id" class="view-article px-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 3.99998H6.8C5.11984 3.99998 4.27976 3.99998 3.63803 4.32696C3.07354 4.61458 2.6146 5.07353 2.32698 5.63801C2 6.27975 2 7.11983 2 8.79998V17.2C2 18.8801 2 19.7202 2.32698 20.362C2.6146 20.9264 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9264 19.673 20.362C20 19.7202 20 18.8801 20 17.2V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9447C10.8425 15.8957 11.0376 15.8149 11.2166 15.7053C11.4184 15.5816 11.5914 15.4086 11.9373 15.0627L21.5 5.49998C22.3284 4.67156 22.3284 3.32841 21.5 2.49998C20.6716 1.67156 19.3284 1.67155 18.5 2.49998L8.93723 12.0627C8.59133 12.4086 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1574 8.05523 13.3615C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Editar
            </RouterLink>
          </div>
          <div class="">
            <div class="view-article px-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              37 posts
            </div>
          </div>

          <div class="">
            <div class="view-article px-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              35.279 visualizações
            </div>
          </div>

        </div>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'CardBuckets',
  data() {
    return {
      buckets: []
    }
  },
  methods: {
    async listBuckets() {
      const accessToken = localStorage.getItem('x-access-token')
      const currentAccountId = localStorage.getItem('currentAccountId')

      const response = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/${currentAccountId}/bucket`, {
        headers: {
          'x-access-token': accessToken
        }
      })
      this.buckets = response.data
    }
  },
  mounted() {
    this.listBuckets()
  }
}
</script>

<style>
article {
  padding: 25px 0;
  font-weight: 400;
}

.date-article {
  font-size: 13px;
}

.category-article span {
  font-size: 13px;
  background-color: #FDF8F4;
  padding: 8px;
  border-radius: 8px;
  width: auto;
}

.view-article {
  font-size: 13px;
  color: #757575;
}

.checkbox-image {
  display: flex;
  align-items: center;
  cursor: pointer;

}

.checkbox-image.checked {
  color: var(--bs-primary-rgb);
}

.checkbox-image.checked img {
  border: 3px solid var(--bs-primary-rgb);

}

.checkbox-image img {
  width: 40px;
  height: 40px;
  background-size: cover;
  border-radius: 12px;
}
</style>