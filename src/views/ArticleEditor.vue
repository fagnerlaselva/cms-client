<template>
  <section class="main_content dashboard_part d-flex   flex-column flex-sm-row article-editor" data-bs-theme="auto">

    <div class="status-save-breadcrumb" style=" max-width: 200px;">
      <nav aria-label="breadcrumb align-middle" class="fixed-top">
        <ol class="breadcrumb p-2">
          <li class="breadcrumb-item align-middle">
            <router-link :to="{ path: '/caminho-da-pagina-anterior' }" @click="$router.go(-1)"
              class="text-decoration-none align-items-center text-primary-emphasis">
              &nbsp; Voltar
              <span>| Rascunho - salvo </span>
            </router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div>
      <div class="container py-6">
        <Editorjs />
      </div>
      <ArticleForm></ArticleForm>
    </div>
    <SidebarArticle></SidebarArticle>
  </section>

  <!-- Modal -->
  <div class="modal fade" id="publication" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 9999;">
    <div class="modal-dialog modal-dialog-centered  modal-dialog-scrollabl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Publicado</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Veja seu artigo: <br>
          <a href="/" target="_blank">
            https://contatus.net.br/blog/lgpd-o-que-e
          </a>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">Transformar em rascunho</button>
          <button type="button" class="btn" data-bs-dismiss="modal">Lista de artigos</button>

        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="addAuthor" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 9999;">
    <div class="modal-dialog modal-dialog-centered  modal-dialog-scrollabl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Adicionar Autor</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
              <label class="form-check-label" for="firstCheckbox">First checkbox</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
              <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
              <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="addCategory" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 9999;">
    <div class="modal-dialog modal-dialog-centered  modal-dialog-scrollabl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Escolha até 3 categorias</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
              <label class="form-check-label stretched-link" for="firstCheckboxStretched">Marketing Direto</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched">
              <label class="form-check-label stretched-link" for="secondCheckboxStretched">Marketing Direto</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched">
              <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Mailing</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
              <label class="form-check-label stretched-link" for="firstCheckboxStretched">Marketing Direto</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched">
              <label class="form-check-label stretched-link" for="secondCheckboxStretched">Marketing Direto</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched">
              <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Mailing</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
              <label class="form-check-label stretched-link" for="firstCheckboxStretched">Marketing Direto</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
              <label class="form-check-label stretched-link" for="firstCheckboxStretched">Marketing Direto</label>
            </li>

          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleForm from "@/components/app/articleForm/ArticleForm.vue"
import SidebarArticle from "@/components/generic/SidebarArticle.vue"
import Editorjs from '@/components/app/Editor/Editorjs.vue';
export default {
  components: { SidebarArticle, ArticleForm, Editorjs },
  name: 'ArticleSeo',
  data() {
    return {
      SeoPalavrasIdeial: 700,
    };
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

<style scoped>
section {
  position: relative;
  height: auto;
}

textarea {
  margin-bottom: 100px;
  min-height: 100vh;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 80px;
  font-size: 1.4rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  font-family: Arial, Helvetica, sans-serif
}

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

.status-save-breadcrumb {
  background: var(--bs-body-bg) !important;
}

.modal {
  background: rgba(0, 0, 0, 0.4);
}

.modal input {
  padding: 7px !important;
}

.modal-content {
  padding: 1rem;
}

.list-group-item {
  border: none;
}

.modal-footer,
.modal-header {
  text-align: center;
  border: none;
}

@media only screen and (min-width: 600px) {
  .main_content {}

  .article-editor {}
}
</style>