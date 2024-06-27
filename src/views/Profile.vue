<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="pt-4 text-primary-emphasis">Perfil</h1>
      <div class="py-4 d-flex justify-content-between">
        <RouterLink :to="{ name: 'AddAuthor' }" class="buttom-action-add d-flex align-items-center">
          <div class="rounded-3 border bg-primário bg-gradiente d-inline-flex p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-plus">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <div class="px-2">Adicionar um Autor</div>
        </RouterLink>
      </div>
      <div class="tabFilter border-bottom py-2">
        <div class="">Meu Perfil</div>
      </div>
      <form enctype="multipart/form-data" class="max-900 form-small">
        <UploadPhotoPerfil :labelText="'Selecione uma foto de perfil'" :inputId="'profile-photo'"
          :inputClass="'custom-file-input'" :name="'profile-image'" :accept="'image/png, image/jpeg, image/webp'" />

        <ImageUploader labelText="Selecione uma imagem" inputId="image-perfil" />

        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-3 col-form-label text-md-end">Nome:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelName" value="Fagner" placeholder="">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Sobre Nome:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" value="De La Selva Mendes">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelEmail" class="col-sm-3 col-form-label text-md-end">Email:</label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="colFormLabelEmail" Disabled value="fagnerlaselva@gmail.com">
          </div>
        </div>

        <div class="row mb-3">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label text-md-end">
            <div class="">
              Biografia do Autor:
            </div>
          </label>
          <div class="col-sm-8">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            <small class="text-muted">{{ message.length }} caracteres de 200</small>
          </div>
          <p></p>
        </div>

        <SocialLinks :initialBlocks="blocks" />

        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-primary justify-content-end" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Salvar
          </button>
        </div>
      </form>
    </div>

  </section>
</template>

<script>

import ImageUploader from '@/components/generic/forms/UploadBanner.vue';
import UploadPhotoPerfil from '@/components/generic/forms/UploadPhotoPerfil.vue';
import SocialLinks from '@/components/generic/SocialLinksBlock.vue';

export default {
  props: {

  },

  components: { ImageUploader, UploadPhotoPerfil, SocialLinks },
  name: 'ViewAddAuthor',

  data() {
    return {
      message: 'Possuo 14 anos de experiência como Front-end developer, sou apaixonado por desenvolvimento web',
      SeoPalavrasIdeial: 700,
      blocks: [{ id: 1 }]
    }
  },
  methods: {
    adicionarBloco() {
      const novoID = this.blocks.length > 0 ? this.blocks[this.blocks.length - 1].id + 1 : 1;
      this.blocks.push({ id: novoID });
    },
    removeBlock(index) {
      this.blocks.splice(index, 1); // Remove o bloco correspondente ao índice
    }
  },
  computed: {
    QuantideDePalavras() {
      return this.message.length
    },
    SeoPalavrasFalta() {
      return this.SeoPalavrasIdeial - this.QuantideDePalavras
    }
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
