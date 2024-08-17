<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    style="z-index: 9999;">
    <div class="modal-dialog modal-dialog-scrollable  modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Informações para (SEO):</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="py-6 form-small">
            <ImageUploader labelText="Selecione uma imagem" inputId="image-perfil" />



            <div class="row my-4">
              <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Titulo da página:</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="colFormLabelSurname" placeholder=""
                  value="Técnicas para Identificar e Aumentar Vendas e Expandir Negócios">
                <small class="text-muted">
                  *As melhores title tags têm até, no máximo, 60 caracteres.
                </small>
              </div>
            </div>

            <div class="row mb-4">
              <label for="page-description" class="col-sm-3 col-form-label text-md-end form-small">Descrição
                página:</label>
              <div class="col-sm-8">
                <textarea v-model="message" class="form-control" id="page-description" rows="2"></textarea>
                <small class="text-muted">*Uma meta description deve ter, no máximo, 160 caracteres. Você colocou
                  <strong>{{
                  message.length }}</strong> caracteres</small>
              </div>
            </div>

            <div class="row my-3">
              <label for="colFormLabelName" class="col-sm-3 col-form-label text-md-end">keywords da página:</label>
              <div class="col-sm-8 form-small">
                <input type="text" class="custom-file-input-label" id="colFormLabelName" placeholder=""
                  value="Desvendando Estratégias: Identificação e Ampliação de Vendas para Expansão Empresarial">
                <small class="text-muted">A meta tag keywords define palavras-chave da página, mas é irrelevante para
                  SEO hoje.</small>
              </div>
            </div>

            <div class="row my-4">
              <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Slug URL:</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="colFormLabelSurname" placeholder=""
                  value="blog/mailing-list">
                <small class="text-muted">
                  *Uma URL amigável para SEO é uma URL simples e compreensível que contém palavras-chave relevantes e
                  descreve claramente o conteúdo da página.
                </small>
              </div>
            </div>

            <div class="row my-4">
              <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Canonicol URL:</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="colFormLabelSurname" placeholder=""
                  value="blog/mailing-list">
                <small class="text-muted">
                  *O Link Canonical é uma tag que define a URL preferida de uma página, evitando conteúdo duplicado e
                  ajudando na classificação nos mecanismos de busca.
                </small>
              </div>
            </div>

          </form>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Deixar para depois</button>
          <button type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageUploader from '@/components/generic/forms/UploadBanner.vue';

export default {
  components: { ImageUploader },
  name: 'ArticleForm',
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
}
</script>