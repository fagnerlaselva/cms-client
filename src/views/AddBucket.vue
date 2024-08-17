<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="py-4 text-primary-emphasis">Adicionar Bucket</h1>
      <div class="tabFilter border-bottom py-2">
        <div class="">Complete as informações da nova Bucket</div>
      </div>

      <form class="mt-4 max-900 form-small" @submit="addBucket">

        <UploadPhotoPerfil @imageLoaded="changeAvatar" :labelText="'Selecione a logo'" :inputId="'profile-photo'"
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
          <button @click="$router.go(-1)" type="button" class="btn btn-outline-secondary mx-3"
            data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-primary justify-content-end" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Adicionar bucket
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
  name: 'ViewAddBucket',
  data() {
    return {
      name: '',
      description: '',
      pictureUrl: '',
      url: '',
      avatarFile: undefined,
      SeoPalavrasIdeial: 700,
      currentAccountId: localStorage.getItem('currentAccountId'),
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
    async changeAvatar(file) {
      this.avatarFile = file
    },
    async uploadAvatar(bucketId) {
      const accessToken = localStorage.getItem('x-access-token')
      const options = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': accessToken
        }
      }
      const form = new FormData()
      form.append('avatar', this.avatarFile)
      const response = await axios.post(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${bucketId}/avatar`, form, options)
      console.log(response.data)
    },
    async addBucket(e) {
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

      const response = await axios.post(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket`, body, options)
      if (this.avatarFile instanceof File) {
        await this.uploadAvatar(response.data.id)
      }
      this.$router.go({ name: "Buckets" })
    }
  },
}
</script>