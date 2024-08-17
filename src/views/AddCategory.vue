<template>
  <section class="main_content dashboard_part" data-bs-theme="auto">
    <div class="container-lg">
      <nav aria-label="breadcrumb d-flex row">
        <ol class="breadcrumb pt-4">
          <li class="breadcrumb-item">
            <RouterLink :to="{ name: 'Categories' }" class="buttom-action-add d-flex">Categorias</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Adicionar categoria</li>
        </ol>
      </nav>
      <div class="tabFilter border-bottom py-2 justify-content">
        <div class="">Complete as informações da sua nova categoria</div>
      </div>


      <form @submit="addCategory" class="max-900 form-small">
        <UploadPhotoPerfil @imageLoaded="changeAvatar" :labelText="'Selecione a logo'" :inputId="'profile-photo'"
          :imageUrl="imageUrl" :inputClass="'custom-file-input'" :name="'profile-image'"
          :accept="'image/png, image/jpeg, image/webp'" />

        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-3 col-form-label text-md-end">Categoria:</label>
          <div class="col-sm-8">
            <input v-model="name" type="text" class="form-control custom-file-input-label" id="colFormLabelName"
              placeholder="" value="Mailing list">
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Titulo da página:</label>
          <div class="col-sm-8">
            <input v-model="title" type="text" class="form-control" id="colFormLabelSurname" placeholder=""
              value="Maling list e tudo que você precisa saber">
            <span class="text-muted">
              *As melhores title tags têm até, no máximo, 60 caracteres
            </span>
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
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Slug URL:</label>
          <div class="col-sm-8">
            <input type="text" v-model="slug" class="form-control" id="colFormLabelSurname"
              placeholder='https://blog.seudominio.com/'>
            <span class="text-muted">
              *Uma URL amigável para SEO é uma URL simples e compreensível que contém palavras-chave relevantes e
              descreve claramente o conteúdo da página.
            </span>
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Canonicol URL:</label>
          <div class="col-sm-8">
            <input v-model="canonical" type="text" class="form-control" id="colFormLabelSurname"
              placeholder='https://blog.seudominio.com/'>
            <span class="text-muted">
              *O Link Canonical é uma tag que define a URL preferida de uma página, evitando conteúdo duplicado e
              ajudando na classificação nos mecanismos de busca.
            </span>
          </div>
        </div>
        <div>

        </div>

        <!-- Button trigger modal -->
        <div class="d-flex justify-content-end">
          <button @click="$router.go(-1)" type="button" class="btn btn-outline-secondary mx-3"
            data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-primary justify-content-end" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Adicionar Categoria
          </button>
        </div>
      </form>
    </div>
  </section>

</template>
<style scoped>
.text-muted {
  font-weight: 300;
  font-size: 13px;
}

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

.custom-file-input {
  display: none;
  /* Oculta o campo de escolher arquivo */
}
</style>
<script>
import UploadPhotoPerfil from '@/components/generic/forms/UploadBanner.vue';
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      description: '',
      title: '',
      slug: '',
      canonical: '',
      currentBucketId: localStorage.getItem("currentBucket"),
      currentAccountId: localStorage.getItem('currentAccountId'),
      bannerFile: undefined,
      SeoPalavrasIdeial: 700,
    };
  },
  components: { UploadPhotoPerfil },
  name: 'ViewAddCategory',
  computed: {
    QuantideDePalavras() {
      return this.message.length
    },
    SeoPalavrasFalta() {
      return this.SeoPalavrasIdeial - this.QuantideDePalavras
    }
  },
  methods: {
    async changeAvatar(file) {
      this.bannerFile = file
    },
    async uploadAvatar() {
      const accessToken = localStorage.getItem('x-access-token')
      const options = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': accessToken
        }
      }
      const form = new FormData()
      form.append('banner', this.bannerFile)
      const response = await axios.post(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/category/${this.currentBucketId}/${this.categoryId}/banner`, form, options)
      console.log(response.data)
    },

    async addCategory(e) {
      e.preventDefault()
      const accessToken = localStorage.getItem('x-access-token')
      const options = {
        headers: {
          'x-access-token': accessToken
        }
      }
      const body = {
        name: this.name,
        title: this.title,
        description: this.description,
        slug: this.slug,
        canonical: this.canonical
      }
      const response = await axios.post(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/category/${this.currentBucketId}/`, body, options)
      this.categoryId = response.data.id
      if (this.bannerFile instanceof File) {
        await this.uploadAvatar()
      }
      this.$router.push({ name: 'Categories' })
    }
  },
}
</script>