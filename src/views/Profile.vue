<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="mt-4 ">Perfil</h1>
      <div class="py-4 d-flex justify-content-between">
        <RouterLink :to="{ name: 'AddMember' }" class="buttom-action-add d-flex align-items-center">
          <div class="rounded-circle border bg-primário bg-gradiente d-inline-flex p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-plus">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <div class="px-2">Adicionar um Membro</div>
        </RouterLink>
      </div>
      <div class="tabFilter border-bottom py-2">
        <div class="">Meu Perfil</div>
      </div>
      <form>
        <UploadPhotoPerfil :labelText="'Selecione uma foto de perfil'" :inputId="'profile-photo'"
          :inputClass="'custom-file-input'" :name="'profile-image'" :accept="'image/png, image/jpeg, image/webp'" />

        <ImageUploader labelText="Selecione uma imagem" inputId="image-perfil" />
        <!--
        <div class="row my-3 py-4">
          <label for="colFormLabelName" class="col-sm-3 col-form-label">Adicionar imagem:</label>
          <div class="col-sm-8">
            <div class="thubnail-member rounded position-relative">
              <div class="img-membro-upload border bg-light-subtle  rounded-circle float-start position-absolute">
                <img src="https://avatars.githubusercontent.com/u/34191081?v=4" class="rounded-circle"
                  alt="Fagner Mendes" height="155" width="155">
              </div>
            </div>
          </div>
        </div>
-->
        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-3 col-form-label">Nome:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelName" value="Fagner" placeholder="">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label">Sobre Nome:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" value="De La Selva Mendes">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelEmail" class="col-sm-3 col-form-label">Email:</label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="colFormLabelEmail" Disabled value="fagnerlaselva@gmail.com">
          </div>
        </div>

        <div class="row mb-3">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label">
            <div class="">
              Biografia do Autor:
            </div>

          </label>
          <div class="col-sm-8">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            <small class="text-muted">{{ message.length }} caracteres de 200</small>
          </div>
          <p></p>
        </div>


        <div class="p-4 bg-body-tertiary rounded-2">
          <div class="row my-3">
            <div class="col-sm-3 col-form-label"></div>
            <div class="col-sm-8">
              <i>
                Links para as contas de redes sociais, como Twitter, Facebook, LinkedIn, entre outros, são
                fundamentais neste espaço. Sinta-se à vontade para adicionar quantos forem relevantes para sua
                presença online.
              </i>
            </div>
          </div>
          <div class="row my-3">
            <label for="colFormLabelLink" class="col-sm-3 col-form-label"> Link:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="colFormLabelLink" placeholder="">
            </div>
          </div>
          <div class="row my-3">
            <label for="colFormLabelName" class="col-sm-3 col-form-label">Nome do link:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="colFormLabelLink" placeholder="">
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn buttom-action-add d-flex">
                <div class="rounded-circle border bg-primário bg-gradiente d-inline-flex p-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6L11 6" stroke="#FF4655" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>


        <div class="row my-3">
          <div class="col-sm-4">
            <div class="py-4 d-flex justify-content-between  ">
              <button type="button" class="btn buttom-action-add d-flex  align-items-center ">
                <div class="rounded-circle border bg-primário bg-gradiente d-inline-flex p-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V11" stroke="#35A936" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 6L11 6" stroke="#35A936" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
                <div class="px-2">Adicionar mais um link</div>
              </button>
            </div>
          </div>
        </div>
        <!-- Button trigger modal -->
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
export default {
  props: {

  },

  components: { ImageUploader, UploadPhotoPerfil },
  name: 'ViewAddMember',

  data() {
    return {
      message: 'Eita doido, você mandou bem :) hahahahah',
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