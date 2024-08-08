<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="py-4 text-primary-emphasis">Configurações {{ this.name }}</h1>

      <nav class="nav tabFilter border-bottom">
        <a class="nav-link" aria-current="page" href="#">Editar informações</a>
        <RouterLink :to="{ name: 'SeoBlog' }" class="nav-link">SEO</RouterLink>
      </nav>

      <form class="mt-4 max-900 form-small" @submit="editBucket" enctype="multipart/form-data">
        <UploadPhotoPerfil @imageLoaded="uploadAvatar" :labelText="'Selecione a logo'" :inputId="'profile-photo'"
          :imageUrl="imageUrl" :inputClass="'custom-file-input'" :name="'profile-image'"
          :accept="'image/png, image/jpeg, image/webp'" />

        <div class="row my-3 text-md-end">
          <label for="colFormLabelName" class="col-sm-3 col-form-label">Nome:</label>
          <div class="col-sm-8">
            <input v-model="name" type="text" class="form-control" id="colFormLabelName" placeholder="">
          </div>
        </div>

        <div class="row mb-4">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label text-md-end">Descrição página:</label>
          <div class="col-sm-8">
            <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            <small class="text-muted">{{ description.length }} caracteres de 160</small>
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">URL:</label>
          <div class="col-sm-8">
            <input v-model="url" type="text" class="form-control" id="colFormLabelSurname" placeholder=""
              value="blog.assisty24h.com.br/">
            <span class="text-muted">
              *lorem ipson.
            </span>
          </div>
        </div>

        <!-- Button trigger modal -->
        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-primary justify-content-end" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Salvar
          </button>
        </div>
      </form>
    </div>
  </section>

</template>
<style>
.img-membro-upload {
  width: 155px;
  height: 155px;
  top: 90px;
  left: 20px;
}

form {
  font-weight: 400;
  font-size: 0.9rem;
}

.add-link span {
  font-size: 13px;
  font-weight: 300;
}
</style>
<script>

import UploadPhotoPerfil from '@/components/generic/forms/UploadPhotoPerfil.vue';
import axios from 'axios'

export default {
  components: { UploadPhotoPerfil },
  name: 'ViewEditBucket',
  data() {
    return {
      name: '',
      description: '',
      pictureUrl: '',
      url: '',
      SeoPalavrasIdeial: 700,
    }
  },

  computed: {
    QuantideDePalavras() {
      return this.description.length
    },
    SeoPalavrasFalta() {
      return this.SeoPalavrasIdeial - this.QuantideDePalavras
    }
  },
  methods: {
    async uploadAvatar(file) {
      const accessToken = localStorage.getItem('x-access-token')
      const options = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': accessToken
        }
      }
      const form = new FormData()
      form.append('avatar', file)
      const response = await axios.post(`${import.meta.env.VITE_CMS_API_URL}/bucket/${this.$route.params.bucketId}/avatar`, form, options)
      console.log(response.data)
    },

    async getBucketById(bucketId) {
      const accessToken = localStorage.getItem('x-access-token')
      const options = {
        headers: {
          'x-access-token': accessToken
        }
      }
      const response = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/bucket/${bucketId}`, options)
      this.name = response.data.name
      this.description = response.data.description
      this.pictureUrl = response.data.pictureUrl
      this.url = response.data.url
    },

    async editBucket(e) {
      e.preventDefault()
      const accessToken = localStorage.getItem('x-access-token')
      const options = {
        headers: {
          'x-access-token': accessToken
        }
      }
      const body = {
        name: this.name,
        description: this.description,
        url: this.url,
      }
      const response = await axios.patch(`${import.meta.env.VITE_CMS_API_URL}/bucket/${this.$route.params.bucketId}`, body, options)
      this.buckets = response.data
      this.$router.push({ name: 'Buckets' })
    }
  },
  mounted() {
    this.getBucketById(this.$route.params.bucketId)
  }

}
</script>