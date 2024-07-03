<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="py-4 text-primary-emphasis">Adicionar Bucket</h1>
      <div class="tabFilter border-bottom py-2">
        <div class="">Complete as informações da nova Bucket</div>
      </div>

      <form class="mt-4 max-900 form-small" action="/inicio" enctype="multipart/form-data">
        <UploadPhotoPerfil :labelText="'Selecione a logo'" :inputId="'profile-photo'" :imageUrl="imageUrl"
          :inputClass="'custom-file-input'" :name="'profile-image'" :accept="'image/png, image/jpeg, image/webp'" />

        <div class="row my-3 text-md-end">
          <label for="colFormLabelName" class="col-sm-3 col-form-label">Nome:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelName" placeholder="">
          </div>
        </div>

        <div class="row mb-4">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label text-md-end">Descrição página:</label>
          <div class="col-sm-8">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            <small class="text-muted">{{ message.length }} caracteres de 160</small>
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">URL:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder=""
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
export default {
  components: { UploadPhotoPerfil },
  name: 'ViewAddBucket',
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