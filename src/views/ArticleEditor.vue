<template>
  <section class="dashboard_part article-editor" data-bs-theme="auto">
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
      <div class="modal-content rounded-5">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Publicado</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" style="padding: 0;">
          <div class="card-link">
            <span>
              <span class="">
                <a href="https://contatus.net.br/blog/conheca-acoes-marketing-direto" class="carbon-img" target="_blank"
                  rel="noopener sponsored">
                  <img src="https://contatus.net.br/blog-image/marketing-direto-notbook.webp" alt="ads via Carbon"
                    border="0" height="100" width="150" data-no-statview="no"
                    style="max-width: 150px; margin-right: 14px;">
                </a>
                <a href="https://contatus.net.br/blog/conheca-acoes-marketing-direto" class="title" target="_blank"
                  rel="noopener sponsored">
                  Marketing direto: 7 principais exemplos de ações
                </a>
              </span>
              <a href="https://contatus.net.br/blog/conheca-acoes-marketing-direto" class="description" target="_blank"
                rel="noopener sponsored">Mailing é um termo que tem
                origem do vocabulário inglês que é o ato de enviar uma correspondência ...</a>
            </span>
          </div>
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
import ImageCheckbox from '@/components/generic/triggers/ImageCheckbox.vue';
export default {
  components: { SidebarArticle, ArticleForm, Editorjs, ImageCheckbox },
  name: 'ArticleSeo',
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

<style>
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

@media only screen and (min-width: 600px) {}
</style>