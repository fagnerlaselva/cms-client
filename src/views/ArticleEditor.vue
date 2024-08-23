<template>
  <section class="dashboard_part article-editor" data-bs-theme="auto">
    <div class="status-save-breadcrumb" style=" max-width: 200px;">
      <nav aria-label="breadcrumb align-middle" class="fixed-top">
        <ol class="breadcrumb p-3">
          <li class="breadcrumb-item align-middle">
            <a @click="$router.go(-1)" class="text-decoration-none align-items-center text-primary-emphasis">
              &nbsp; Voltar
              <span>| {{ savedMessage || 'Atualizando...' }}</span>
            </a>

          </li>
        </ol>
      </nav>
    </div>
    <div>
      <div class="container py-6">
        <Editorjs @article-saved="handleArticleSaved" />
      </div>
      <ArticleForm></ArticleForm>
    </div>
    <!-- <SidebarArticle></SidebarArticle> -->
  </section>



  <div class="modal fade" id="addAuthor" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 9999;">
    <div class="modal-dialog modal-dialog-centered  modal-dialog-scrollabl">
      <div class="modal-content rounded-5">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Adicionar Autor</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <ImageCheckbox v-for="(item, index) in items" :key="index" :id="'checkboxAuthor' + index"
              :image="item.image" :name="item.name" v-model="item.checked" class="p-2" />
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
      <div class="modal-content rounded-5">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Escolha até 3 categorias</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-3 rounded-4">
          <ul class="list-group " style="background:var(--bs-tertiary-bg);">
            <li class="list-group-item d-flex align-items-center p-3">
              <input class="form-check-input me-1" type="checkbox" value="" id="mailing">
              <label class="form-check-label px-2" for="mailing">Mailing</label>
            </li>
            <li class="list-group-item d-flex align-items-center p-3">
              <input class="form-check-input me-1" type="checkbox" value="" id="mailing-list">
              <label class="form-check-label px-2" for="mailing-list">Mailing List</label>
            </li>
            <li class="list-group-item d-flex align-items-center p-3">
              <input class="form-check-input me-1" type="checkbox" value="" id="marketing-direto">
              <label class="form-check-label px-2" for="marketing-direto">Marketing Direto</label>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button @click="toggleSidebar" type="button" class="btn" data-bs-dismiss="modal">Cancelar</button>
          <button @click="toggleSidebar" type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleForm from "@/components/app/articleForm/ArticleForm.vue"
// import SidebarArticle from "@/components/generic/SidebarArticle.vue"
import Editorjs from '@/components/app/Editor/Editorjs.vue';
import ImageCheckbox from '@/components/generic/triggers/ImageCheckbox.vue';
export default {
  components: { ArticleForm, Editorjs, ImageCheckbox },
  name: 'ArticleSeo',
  data() {
    return {
      savedMessage: '',// Estado para armazenar a mensagem "Salvo"
      SeoPalavrasIdeial: 700,
      items: [
        {
          image: "https://avatars.githubusercontent.com/u/34191081?v=4",
          name: "Fafa Mendes",
          checked: false
        },
        {
          image: "https://via.placeholder.com/50",
          name: "Lu Maia",
          checked: false
        },
        {
          image: "https://avatars.githubusercontent.com/u/17029609?v=4",
          name: "Kratinho Lima",
          checked: false
        }
      ]
    };
  },
  methods: {
    handleArticleSaved(message) {
      this.savedMessage = message;  // Atualiza a mensagem no pai
    }
  },

  computed: {
    QuantideDePalavras() {
      return this.message.length
    },
    SeoPalavrasFalta() {
      return this.SeoPalavrasIdeial - this.QuantideDePalavras
    }

  },

}
</script>

<style>
section {
  position: relative;
  height: auto;
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
  padding: 12px !important;
}

.list-group-item {
  border: none;
}

.modal-footer,
.modal-header {
  text-align: center;
  border: 0 !important;
}
</style>