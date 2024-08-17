<template>
  <section class="main_content dashboard_part">
    <div class="container-lg" v-if="!loading">
      <h1 class="pt-4 text-primary-emphasis">Editar meu perfil</h1>
      <!-- <div class="py-4 d-flex justify-content-between">
        <RouterLink :to="{ name: 'AddAuthor' }" class="buttom-action-add d-flex align-items-center">
          <div class="rounded-3 border bg-primário bg-gradiente d-inline-flex p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-plus">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <div class="px-2">Adicionar Autor</div>
        </RouterLink>
      </div> -->
      <!-- <div class="tabFilter border-bottom py-2">
        <div class="">Meu Perfil</div>
      </div> -->
      <form @submit.prevent="updateUserData" class="max-900 form-small">
        <UploadPhotoPerfil :default-image="this.user.avatarUrl" @imageLoaded="uploadAvatar" :labelText="'Selecione uma foto de perfil'" :inputId="'profile-photo'"
          :inputClass="'custom-file-input'" :name="'profile-image'" :accept="'image/png, image/jpeg, image/webp'" />

        <!-- <ImageUploader labelText="Selecione uma imagem" inputId="image-perfil" /> -->

        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-3 col-form-label text-md-end">Nome:</label>
          <div class="col-sm-8">
            <input v-model="user.name" type="text" class="form-control" id="colFormLabelName" placeholder="">
          </div>
        </div>
        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-3 col-form-label text-md-end">Sobrenome:</label>
          <div class="col-sm-8">
            <input v-model="user.lastname" type="text" class="form-control" id="colFormLabelName">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelEmail" class="col-sm-3 col-form-label text-md-end">Email:</label>
          <div class="col-sm-8">
            <input v-model="user.email" type="email" class="form-control" id="colFormLabelEmail">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelEmail" class="col-sm-3 col-form-label text-md-end">Telefone:</label>
          <div class="col-sm-8">
            <input v-model="user.phone" type="text" class="form-control" id="colFormLabelEmail">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelEmail" class="col-sm-3 col-form-label text-md-end">Nascimento:</label>
          <div class="col-sm-8">
            <input v-model="user.birthDate" type="date" class="form-control" id="colFormLabelEmail">
          </div>
        </div>

        <div class="row mb-3">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label text-md-end">
            <div class="">Biografia:</div>
          </label>
          <div class="col-sm-8">
            <textarea v-model="user.bio" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            <small class="text-muted">{{ user.bio.length }} caracteres de 200</small>
          </div>
          <p></p>
        </div>

        <SocialLinks :initialBlocks="blocks" class="d-none" />

        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-primary justify-content-end">Salvar</button>
        </div>
      </form>
    </div>

  </section>
</template>

<script>
import axios from 'axios'
import UploadPhotoPerfil from '@/components/generic/forms/UploadPhotoPerfil.vue'
import SocialLinks from '@/components/generic/SocialLinksBlock.vue'

export default {
  components: { UploadPhotoPerfil, SocialLinks },
  name: 'EditProfile',
  data() {
    return {
      loading: true,
      user: {
        name: '',
        lastname: '',
        bio: '',
        phone: '',
        avatarUrl: '',
        birthDate: '',
        gender: '',
        email: ''
      }
    }
  },
  methods: {
    async uploadAvatar(file) {
      const url = `${import.meta.env.VITE_CMS_API_URL}/user/avatar`
      const body = new FormData()
      body.append('avatar', file)
      const options = {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token')
        }
      }
      const response = await axios.patch(url, body, options)
      this.user.avatarUrl = response.data.url
    },
    async getUserData() {
      const url = `${import.meta.env.VITE_CMS_API_URL}/user`
      const options = {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token')
        }
      }
      const response = await axios.get(url, options)
      this.user.name = response.data.name || ''
      this.user.lastname = response.data.lastname || ''
      this.user.bio = response.data.bio || ''
      this.user.birthDate = response.data.birthDate || ''
      this.user.phone = response.data.phone || ''
      this.user.avatarUrl = response.data.avatarUrl || ''
      this.user.gender = response.data.gender || ''
      this.user.email = response.data.email || ''
    },
    async updateUserData() {
      const url = `${import.meta.env.VITE_CMS_API_URL}/user`
      const body = {
        name: this.user.name,
        lastname: this.user.lastname,
        phone: this.user.phone,
        birthDate: this.user.birthDate,
        bio: this.user.bio,
        gender: this.user.gender,
        avatarUrl: this.user.avatarUrl,
        email: this.user.email
      }
      const options = {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token')
        }
      }
      await axios.patch(url, body, options)
    }
  },
  async mounted() {
    await this.getUserData()
    this.loading = false
  }
}
</script>

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
