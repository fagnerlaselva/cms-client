<template>
  <section class="main_content dashboard_part d-flex   flex-column flex-sm-row article-editor" data-bs-theme="auto">

    <div class="status-save-breadcrumb" style=" max-width: 200px;">
      <nav aria-label="breadcrumb align-middle" class="fixed-top">
        <ol class="breadcrumb p-3">
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
          <button type="button" class="btn" data-bs-dismiss="modal">Despublicar</button>
          <button type="button" class="btn" data-bs-dismiss="modal">Ok, ver todos artigos</button>
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
            <ImageCheckbox v-for="(item, index) in items" :key="index" :id="'checkbox' + index" :image="item.image"
              :name="item.name" v-model="item.checked" />
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
            <ImageCheckbox v-for="(item, index) in items" :key="index" :id="'checkbox' + index" :image="item.image"
              :name="item.name" v-model="item.checked" />
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
import Editorjs from '@/components/app/Editor/EditorjsPreview.vue';
import ImageCheckbox from '@/components/generic/triggers/ImageCheckbox.vue';
export default {

  components: { SidebarArticle, ArticleForm, Editorjs, ImageCheckbox },
  name: 'ArticleEditorPreview',

  data() {
    return {
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

  computed: {
    QuantideDePalavras() {
      return this.message.length
    },
    SeoPalavrasFalta() {
      return this.SeoPalavrasIdeial - this.QuantideDePalavras
    }
  },
  created() {
    fetch('path/to/your/data.json')
      .then(response => response.json())
      .then(data => {
        this.items = data.map(item => ({
          ...item,
          checked: false // Inicializa todos os checkboxes como não selecionados
        }));
      });
  }
}
</script>

<style scoped></style>