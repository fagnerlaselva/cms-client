<template>
  <section class="main_content dashboard_part py-6" data-bs-theme="auto">
    <div class="container py-6">
      <form class="py-6">

        <ImageUploader labelText="Selecione uma imagem" inputId="image-perfil" />

        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-3 col-form-label text-md-end">Título do artigo:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control custom-file-input-label" id="colFormLabelName" placeholder=""
              value="Desvendando Estratégias: Identificação e Ampliação de Vendas para Expansão Empresarial">
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Titulo da página:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder=""
              value="Técnicas para Identificar e Aumentar Vendas e Expandir Negócios">
            <span class="text-muted">
              *As melhores title tags têm até, no máximo, 60 caracteres, para não extrapolar o limite permitido para
              visualização no Google, Bing, etc.
            </span>
          </div>
        </div>

        <div class="row mb-4">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label text-md-end">Descrição página:</label>
          <div class="col-sm-8">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            <small class="text-muted">*Uma meta description deve ter, no máximo, 160 caracteres. Você colocou <strong>{{
              message.length }}</strong> caracteres</small>
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Slug URL:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder="" value="blog/mailing-list">
            <span class="text-muted">
              *Uma URL amigável para SEO é uma URL simples e compreensível que contém palavras-chave relevantes e
              descreve claramente o conteúdo da página.
            </span>
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Canonicol URL:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder="" value="blog/mailing-list">
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
          <button type="button" class="btn btn-primary justify-content-end" data-bs-toggle="modal"
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
import ImageUploader from '@/components/generic/forms/UploadBanner.vue';
export default {
  data() {
    return {
      imagePreviewUrl: null,
      imageLoaded: false,
      labelText: "Selecione uma imagem",
      backgroundImageStyle: null,
      message: 'Potencialize vendas e expanda seu negócio com a Contatus. Identificamos potenciais clientes através de perfis detalhados e estatísticas para segmentação.',
      SeoPalavrasIdeial: 700,
    };
  },
  components: { ImageUploader },
  name: 'ArticleSeo',

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