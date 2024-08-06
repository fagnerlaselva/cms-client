<template>
  <div>
    <article v-for="bucket in buckets" :key="bucket.id" class="d-flex flex-row border-bottom px-sm-3"
      aria-hidden="true">
      <div>
        <div class="flex align-items-center">
          <div class="d-flex flex-row align-items-center">
            <img :src="bucket.pictureUrl" width="28" height="28" class="rounded-3 placeholder-glow">
            <div class="title-article px-2 text-primary-emphasis placeholder-glow">{{ bucket.name }}</div>
            <div><span class="badge text-bg-secondary placeholder-glow">{{ bucket.role }}</span></div>
          </div>
        </div>
        <div class="description-member placeholder-glow">{{ bucket.description }}</div>
        <div class="d-inline-flex category-article py-2 align-items-center placeholder-glow">
          <RouterLink :to="'/editar-bucket/' + bucket.id" class="view-article px-2">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 3.99998H6.8C5.11984 3.99998 4.27976 3.99998 3.63803 4.32696C3.07354 4.61458 2.6146 5.07353 2.32698 5.63801C2 6.27975 2 7.11983 2 8.79998V17.2C2 18.8801 2 19.7202 2.32698 20.362C2.6146 20.9264 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9264 19.673 20.362C20 19.7202 20 18.8801 20 17.2V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9447C10.8425 15.8957 11.0376 15.8149 11.2166 15.7053C11.4184 15.5816 11.5914 15.4086 11.9373 15.0627L21.5 5.49998C22.3284 4.67156 22.3284 3.32841 21.5 2.49998C20.6716 1.67156 19.3284 1.67155 18.5 2.49998L8.93723 12.0627C8.59133 12.4086 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1574 8.05523 13.3615C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Editar
          </RouterLink>
          <div class="view-article px-2">
            <strong>{{ bucket.articles }}</strong> 37 artigos <strong>
              {{ bucket.views }}
            </strong> 35.729 visualizações
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
      const response = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/bucket`, {
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