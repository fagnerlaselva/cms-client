<template>
  <section class="main_content dashboard_part d-flex justify-content-between  flex-column flex-sm-row article-editor"
    data-bs-theme="auto">

    <div class="status-save-breadcrumb" style=" max-width: 200px;">
      <nav aria-label="breadcrumb align-middle" class="fixed-top">
        <ol class="breadcrumb p-2">
          <li class="breadcrumb-item align-middle">
            <router-link :to="{ path: '/caminho-da-pagina-anterior' }" @click="$router.go(-1)"
              class="text-decoration-none align-items-center">
              &nbsp; Voltar
              <span>| Rascunho - salvo </span>
            </router-link>
          </li>
        </ol>
      </nav>
    </div>
    <div>
      <div class="container py-6">
        <EditorComponent customClass="editor-article" />
      </div>
      <ArticleForm></ArticleForm>
    </div>
    <SidebarArticle></SidebarArticle>
  </section>
</template>
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
</style>
<script>
import ArticleForm from "@/components/app/articleForm/ArticleForm.vue"
import SidebarArticle from "@/components/generic/SidebarArticle.vue"
import EditorComponent from "@/components/app/novel/editor.vue";
export default {
  components: { SidebarArticle, ArticleForm, EditorComponent },
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