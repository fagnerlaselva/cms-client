<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <nav aria-label="breadcrumb align-middle">
        <ol class="breadcrumb pt-4">
          <li class="breadcrumb-item">
            <RouterLink :to="{ name: 'Home' }" class="buttom-action-add d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              &nbsp; Home
            </RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink :to="{ name: 'Author' }" class="buttom-action-add d-flex">Autor</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Adicionar Autor</li>
        </ol>
      </nav>
      <h1 class="py-4 text-primary-emphasis">Adicionar Autors</h1>
      <div class="tabFilter border-bottom py-2">
        <div class="">Complete as informações do novo autor</div>
      </div>

      <form class="mt-4 max-900 form-small" enctype="multipart/form-data">
        <UploadPhotoPerfil :labelText="'Selecione uma foto de perfil'" :inputId="'profile-photo'" :imageUrl="imageUrl"
          :inputClass="'custom-file-input'" :name="'profile-image'" :accept="'image/png, image/jpeg, image/webp'" />

        <ImageUploader labelText="Selecione uma imagem" inputId="image-perfil" />

        <!--
        <div class="row my-3 py-4">
          <label for="colFormLabelName" class="col-sm-3 col-form-label">Adicionar imagem:</label>
          <div class="col-sm-8">
            <div class="thubnail-member rounded-4 position-relative">
              <div class="img-membro-upload border bg-light-subtle rounded-3 float-start position-absolute">
              
              </div>
            </div>
            

          </div>
        
    </div>
  -->
        <div class="row my-3 text-md-end">
          <label for="colFormLabelName" class="col-sm-3 col-form-label">Nome:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelName" placeholder="">
          </div>
        </div>

        <div class="row my-3 text-md-end">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label">Sobre Nome:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder="">
          </div>
        </div>

        <div class="row my-3 ">
          <label for="colFormLabelEmail" class="col-sm-3 col-form-label text-md-end">Email:</label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="colFormLabelEmail" placeholder="">
          </div>
        </div>

        <div class="row mb-3 text-md-end">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label">Biografia do Autor:</label>
          <div class="col-sm-8">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            <small class="text-muted">{{ message.length }} caracteres de 200</small>
          </div>
          <p></p>
        </div>
        <div class="row mb-3 text-md-end">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label">Senha</label>
          <div class="col-sm-8">
            <input class="form-control form-control-lg" :value="value" placeholder="" type="password"
              id="exampleInputPassword2" required>
          </div>
          <p></p>
        </div>
        <div class="row mb-3">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label text-md-end">Confirme a Senha</label>
          <div class="col-sm-8">
            <input class="form-control form-control-lg" :value="value" placeholder="" type="password"
              id="exampleInputPassword2" required>
          </div>
          <p></p>
        </div>
        <SocialLinks :initialBlocks="blocks" />

        <!-- Button trigger modal -->
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-primary justify-content-end" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Adicionar Autor
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
import ImageUploader from '@/components/generic/forms/UploadBanner.vue';
import UploadPhotoPerfil from '@/components/generic/forms/UploadPhotoPerfil.vue';
import SocialLinks from '@/components/generic/SocialLinksBlock.vue';


export default {
  components: { ImageUploader, UploadPhotoPerfil, SocialLinks },
  name: 'ViewProfile',
  data() {
    return {
      message: '',
      SeoPalavrasIdeial: 700,
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