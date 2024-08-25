<template>
  <div>
    <div class="editorjs" id="editor">
      <UploadPhotoPerfil class="banner-editor-js" :class="{ 'activeImage': thumbnailUrl }" v-if="!editorLoading"
        @imageLoaded="changeThumbnail" :labelText="'Adicione uma imagem'" :inputId="'profile-photo'"
        :defaultImage="thumbnailUrl" :inputClass="'custom-file-input'" :name="'profile-image'"
        :accept="'image/png, image/jpeg, image/webp'" />

      <h1 contenteditable="true" spellcheck="true" ref="title" class="title-editor-js" @input="updateModelTitle"
        :class="{ 'empty': !title }">
        {{ title }}
      </h1>

      <SidebarArticle :toggle-sidebar="toggleSidebar" :editorCharCount="editorCharCount"
        :editorWordCount="editorWordCount" :title="title" :ogTitle="seo.meta.ogTitle"
        :ogDescription="seo.meta.ogDescription || ''" :thumbnailUrl="thumbnailUrl" @publishArticle="publishArticle"
        :updatedAt="updatedAt" :createdAt="createdAt" />
    </div>


    <!-- Modal -->
    <div class="modal fade modal-seo" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true" style="z-index: 9999;">
      <div class="modal-dialog modal-dialog-scrollable  modal-xl">
        <div class="modal-content modal-content rounded-5">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Informações para (SEO):</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="py-6 form-small">
              <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-8">
                  <UploadPhotoPerfil class="banner-editor-js" :class="{ 'activeImage': thumbnailUrl }"
                    v-if="!editorLoading" @imageLoaded="changeThumbnail" :labelText="'Adicione uma imagem'"
                    :inputId="'profile-photo'" :defaultImage="thumbnailUrl" :inputClass="'custom-file-input'"
                    :name="'profile-image'" :accept="'image/png, image/jpeg, image/webp'" />
                </div>
              </div>
              <div class="row my-4">
                <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Titulo da
                  página:</label>
                <div class="col-sm-8">
                  <input v-model="seo.meta.ogTitle" type="text" class="form-control" id="colFormLabelSurname"
                    placeholder="">
                  <small class="text-muted">
                    *As melhores title tags têm até, no máximo, 60 caracteres.
                  </small>
                </div>
              </div>

              <div class="row mb-4">
                <label for="page-description" class="col-sm-3 col-form-label text-md-end form-small">Descrição
                  página:</label>
                <div class="col-sm-8">
                  <textarea v-model="seo.meta.ogDescription" class="form-control" id="page-description"
                    rows="2"></textarea>
                  <small class="text-muted">*Uma meta description deve ter, no máximo, 160 caracteres.
                    Você colocou
                    <strong>
                      {{ seo.meta && seo.meta.ogDescription ? seo.meta.ogDescription.length : 0 }}
                    </strong>
                  </small>
                </div>
              </div>

              <div class="row my-3">
                <label for="colFormLabelName" class="col-sm-3 col-form-label text-md-end">keywords da
                  página:</label>
                <div class="col-sm-8 form-small">
                  <input v-model="ogKeywords" type="text" class="custom-file-input-label" id="colFormLabelName"
                    placeholder=""
                    value="Desvendando Estratégias: Identificação e Ampliação de Vendas para Expansão Empresarial">
                  <small class="text-muted">A meta tag keywords define palavras-chave da página, mas é
                    irrelevante para
                    SEO hoje.</small>
                </div>
              </div>

              <div class="row my-4">
                <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Slug
                  URL:</label>
                <div class="col-sm-8">
                  <input v-model="slug" type="text" class="form-control" id="colFormLabelSurname" placeholder="">
                  <small class="text-muted">
                    *Uma URL amigável para SEO é uma URL simples e compreensível que contém
                    palavras-chave relevantes e
                    descreve claramente o conteúdo da página.
                  </small>
                </div>
              </div>

              <div class="row my-4">
                <label for="colFormLabelSurname" class="col-sm-3 col-form-label text-md-end">Canonicol
                  URL:</label>
                <div class="col-sm-8">
                  <input v-model="seo.canonicalUrl" type="text" class="form-control" id="colFormLabelSurname"
                    placeholder="">
                  <small class="text-muted">
                    *O Link Canonical é uma tag que define a URL preferida de uma página, evitando
                    conteúdo duplicado e
                  </small>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Deixar para
              depois</button>
            <button @click="updateArticle" type="button" class="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

import UploadPhotoPerfil from '@/components/generic/forms/UploadBanner.vue';
import SidebarArticle from "@/components/generic/SidebarArticle.vue"

import EditorJS from '@editorjs/editorjs';
import EmbedTool from '@editorjs/embed';
import NestedList from '@editorjs/nested-list';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import LinkTool from '@editorjs/link';
import Hyperlink from 'editorjs-hyperlink'; // Corrigido para importação ES6
import Alert from 'editorjs-alert';
import Delimiter from '@editorjs/delimiter';
import Marker from '@editorjs/marker';
import ChangeCase from 'editorjs-change-case';
import Warning from '@editorjs/warning';
import ImageTool from '@editorjs/image';
import Paragraph from '@editorjs/paragraph';

export default {
  components: { UploadPhotoPerfil, SidebarArticle },
  data() {
    return {
      savedMessage: '',
      editorCharCount: 0,
      editorWordCount: 0,
      seo: {
        canonicalUrl: '',
        meta: {
          ogTitle: '',
          ogDescription: ''
        },
      },
      slug: '',
      ogKeywords: '',
      currentBucketId: localStorage.getItem("currentBucket"),
      currentAccountId: localStorage.getItem('currentAccountId'),
      thumbnailFile: undefined,
      thumbnailUrl: undefined,
      editor: undefined,
      editorLoading: true,
      articleId: undefined,
      author: JSON.parse(localStorage.getItem('userData')).id,
      coAuthor: undefined,
      title: '',
      createdAt: new Date().toISOString(), // Data atual no formato ISO
      updatedAt: new Date(), // Inicialmente, não há data de atualização
      updateInterval: null,
      timeout: undefined,
      editorData: {
        time: '1723827215213',
        version: '2.29.1',
        blocks: [],
      },
    }
  },

  methods: {
    handleButtonClick() {
      this.$emit('toggle-sidebar');
    },

    titleEnter(event) {
      if (event.keyCode === 13) {
        event.preventDefault()
        this.editor.focus()
      }
    },

    updateModelTitle(event) {
      this.title = event.target.innerText || event.target.value;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.updateArticle();
      }, 1000);
    },

    async changeThumbnail(file) {
      this.thumbnailFile = file
      this.uploadThumbnail()
    },

    async publishArticle() {
      const accessToken = localStorage.getItem('x-access-token')
      const options = {
        headers: {
          'x-access-token': accessToken
        }
      }
      const url = `${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${this.currentBucketId}/article/${this.articleId}/publish`
      await axios.patch(url, {}, options)
      this.$router.push({ name: 'Published' })
    },

    async uploadThumbnail() {
      const accessToken = localStorage.getItem('x-access-token')
      const options = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': accessToken
        }
      }
      const form = new FormData()
      form.append('image', this.thumbnailFile)
      const response = await axios.post(`${import.meta.env.VITE_CMS_API_URL}/storage/${this.currentAccountId}`, form, options)
      this.thumbnailUrl = response.data.file.url
    },

    async onChange() {
      const output = await this.editor.save()
      this.editorContent = output.blocks.map(block => block.data.text || '').join('\n');
      this.updateEditorStats();
      this.updateArticle()
    },
    async handleEditorChange() {
      const outputData = await this.editor.save();
      this.editorContent = outputData.blocks.map(block => block.data.text || '').join('\n');
    },

    async createArticle() {
      const currentDate = new Date().toISOString()

      const body = {
        blocks: [],
        author: this.author,
        coAuthor: this.coAuthor,
        slug: this.slug,
        title: this.title || 'Sem título',
        updatedAt: this.updatedAt,
        createdAt: this.createdAt,

      }
      const accessToken = localStorage.getItem('x-access-token')
      const response = await axios.post(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${this.currentBucketId}/article/`, body, {
        headers: {
          'x-access-token': accessToken
        }
      })
      this.articleId = response.data.id
      this.updatedAt = currentDate // Atualizar o campo updatedAt no front-end
    },

    async updateArticle() {
      const output = await this.editor.save();
      const currentDate = new Date().toISOString(); // Obter a data atual no formato ISO

      this.updatedAt = currentDate; // Atualizar o campo updatedAt no front-end

      const body = {
        blocks: output.blocks,
        author: this.author,
        coAuthor: this.coAuthor,
        title: this.title || 'Sem título',
        thumbnailUrl: this.thumbnailUrl,
        updatedAt: this.updatedAt,
        createdAt: this.createdAt,
        slug: this.slug,
        seo: {
          canonicalUrl: this.seo.canonicalUrl,
          meta: {
            openGraph: {
              ogTitle: this.seo.meta.ogTitle,
              ogDescription: this.seo.meta.ogDescription,
              ogKeywords: this.ogKeywords.split(',').map(keyword => keyword.trim()) // Divide a string em um array e remove espaços em branco
            }
          }
        }
      }
      const accessToken = localStorage.getItem('x-access-token')
      await axios.patch(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${this.currentBucketId}/article/${this.articleId}`, body, {
        headers: {
          'x-access-token': accessToken
        }
      })
      this.updateSavedMessage();
      this.$emit('article-saved', this.savedMessage); // Emite o evento com a mensagem atualizada para o componente pai

      this.$forceUpdate();
    },
    async getArticle() {
      const accessToken = localStorage.getItem('x-access-token')
      const response = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${this.currentBucketId}/article/${this.articleId}`, {
        headers: {
          'x-access-token': accessToken
        },
      })
      this.editorData.blocks = response.data.blocks
      this.title = response.data.title
      this.slug = response.data.slug
      this.thumbnailUrl = response.data.thumbnailUrl
      this.updatedAt = response.data.updatedAt
      this.createdAt = response.data.createdAt
      this.categories = response.data.categories
      this.seo.meta.ogTitle = response.data.seo.meta.openGraph.ogTitle
      this.seo.canonicalUrl = response.data.seo.canonicalUrl
      this.seo.meta.ogDescription = response.data.seo.meta.openGraph.ogDescription // Salva o objeto meta em uma variável separada

      this.ogKeywords = response.data.seo.meta.openGraph.ogKeywords.join(', ') // Converte o array de keywords para uma string
      this.updateSavedMessage();
      this.$emit('article-saved', this.savedMessage);
    },

    updateSavedMessage() {
      const timeAgo = this.getTimeAgo(new Date(this.updatedAt));
      this.savedMessage = `Atualizado ${timeAgo}`;
    },

    getTimeAgo(date) {
      const now = new Date();
      const diffInMs = now - date;

      const seconds = Math.floor(diffInMs / 1000);
      const minutes = Math.floor(diffInMs / (1000 * 60));
      const hours = Math.floor(diffInMs / (1000 * 60 * 60));
      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      if (seconds < 2) return 'com sucesso';
      if (seconds < 5) return 'há menos de 5 segundos';
      if (seconds < 10) return 'há menos de 10 segundos';
      if (seconds < 20) return 'há menos de 20 segundos';
      if (seconds < 30) return 'há menos de 30 segundos';
      if (seconds < 40) return 'há menos de 40 segundos';
      if (seconds < 50) return 'há menos de 50 segundos';
      if (seconds < 60) return 'há menos de 1 minuto';
      if (minutes === 1) return 'há 1 minuto';
      if (minutes < 60) return `há ${minutes} minutos`;
      if (hours === 1) return 'há 1 hora';
      if (hours < 24) return `há ${hours} horas`;
      if (days === 1) return 'há 1 dia';
      return `há ${days} dias`;
    },
    updateEditorStats() {
      const content = this.editorContent || '';
      this.editorCharCount = content.length;
      this.editorWordCount = content.trim().split(/\s+/).length;
    },

    saveItem() {
      // Atualize o createdAt e o updatedAt quando salvar o item
      this.createdAt = new Date().toISOString();
      this.updatedAt = this.createdAt; // Inicialmente é a mesma data que a criação
    },
    formatDate(dateString) {
      if (!dateString) return 'Data não disponível';
      const date = new Date(dateString);
      return date.toLocaleString(); // Formatar a data conforme as preferências locais
    }
  },
  computed: {
    wordCount() {
      return this.editorWordCount;
    },
    charCount() {
      return this.editorCharCount;
    },
  },
  async mounted() {
    this.articleId = this.$route.query.articleId
    if (this.articleId) {
      //buscar o conteúdo atual do artigo na API
      await this.getArticle()
    } else {
      await this.createArticle()
    }

    this.editor = new EditorJS({
      holder: 'editor',
      inlineToolbar: ['bold', 'italic', 'link'],
      "link": {
        "Add a link": "Adicione um link"
      },
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+I',
        },
        header: {
          class: Header,
          shortcut: 'CMD+SHIFT+H',
          config: {
            placeholder: 'Sem título',
            levels: [2, 3, 4],
            defaultLevel: 2,
          }
        },
        changeCase: {
          class: ChangeCase,
          config: {
            showLocaleOption: true, // enable locale case options
            locale: 'tr-TR' // or ['tr', 'TR', 'tr-TR']
          }
        },
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: 'http://127.0.0.1:5173/fetchUrl', // endpoint de back-end para busca de dados de URL
          }
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        Marker: {
          class: Marker,
          shortcut: 'ALT+SHIFT+M',
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+W',
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Digite a Citação',
            captionPlaceholder: 'Quem é o autor?',
          },
        },
        hyperlink: {
          class: Hyperlink,
          config: {
            shortcut: 'ALT+L',
            target: '_blank',
            rel: 'nofollow',
            availableTargets: ['_blank', '_self'],
            availableRels: ['author', 'noreferrer'],
            validate: false,
          },
          actions: [
            {
              name: 'new_button',
              icon: '<svg>...</svg>',
              title: 'Novo botão',
              toggle: true,
              action: (name) => {
                alert(`${name} button clicked`);
              }
            }
          ],
        },
        delimiter: Delimiter,
        alert: Alert,
        embed: EmbedTool,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              async uploadByFile(file) {
                const accessToken = localStorage.getItem('x-access-token')
                const currentAccountId = localStorage.getItem('currentAccountId')
                const url = `${import.meta.env.VITE_CMS_API_URL}/storage/${currentAccountId}`
                const body = new FormData()
                body.append('image', file)
                body.append('originalFileName', file.name.split('.')[0])
                const options = { headers: { 'x-access-token': accessToken } }
                const response = await axios.post(url, body, options)
                return response.data
              }
            }
          }
        }
      },
      minHeight: 'auto',
      placeholder: 'Comece a escrever',
      data: this.editorData,
      onChange: this.onChange,
      i18n: {
        /**
         * @type {I18nDictionary}
         */
        messages: {
          ui: {
            "blockTunes": {
              "toggler": {
                "Click to tune": "Clique para atualizar",
                "or drag to move": "Ou arraste para mover"
              },
            },
            "inlineToolbar": {
              "converter": {
                "Convert to": "Converter para"
              }
            },
            "toolbar": {
              "toolbox": {
                "Add": "Adicionar"
              }
            }
          },
          toolNames: {
            "Text": "Texto",
            "Heading": "Cabeçalho",
            "List": "Lista",
            "Warning": "Alerta",
            "Checklist": "Checklist",
            "Quote": "Citar",
            "Code": "Code",
            "Delimiter": "Delimitador",
            "Raw HTML": "Raw HTML",
            "Table": "Tabela",
            "Link": "Link",
            "Marker": "Marcador",
            "Bold": "Bold",
            "Italic": "Itálico",
            "InlineCode": "Código embutido",
            "Image": "Imagem"
          },
          tools: {
            "warning": {
              "Title": "Título",
              "Message": "Mensagem",
            },
            "link": {
              "Add a link": "Adicionar link"
            },
            "stub": {
              'The block can not be displayed correctly.': 'O bloco não pode ser exibido corretamente.'
            }
          },

          blockTunes: {

            "delete": {
              "Delete": "Excluir"
            },
            "moveUp": {
              "Move up": "Mover para cima"
            },
            "moveDown": {
              "Move down": "Mover para baixo"
            }
          },
        }
      },
    });
    await this.editor.isReady
    this.editorLoading = false

    this.updateEditorStats()

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.title-editor-js.empty:before {
  display: block;
  content: 'Seu título';
  color: #ccc;
  pointer-events: none;
}

.editorjs .col-sm-3 {
  margin-top: 95px;
  color: var(--bs-dark-text-emphasis);
  opacity: 0.7;
}

.padding {
  margin: 50px 0;
  padding-bottom: 100px;
  min-height: 100vh;
}

.cdx-nested-list__item-content,
.editorjs .ce-block {
  padding-bottom: 0.5rem;
}

.editorjs .ce-block__content {
  max-width: 760px;
}

.ce-block a {
  color: var(--bs-primary);
}

.editorjs .ce-block i,
.editorjs .ce-paragraph.cdx-block,
.editorjs .cdx-nested-list__item {
  color: #000 !important;
  font-size: 1.2rem !important;
  line-height: 1.70;
}

.editorjs .ce-header {
  font-size: 1.6rem;
}

.editorjs .cdx-nested-list__item-content,
.editorjs .ce-paragraph {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.editorjs .cdx-input.link-tool__input {
  font-weight: 100;
}

.editorjs *::selection {
  background-color: var(--bs-primary);
}

.editorjs h1.ce-header,
.editorjs h2.ce-header,
.editorjs h3.ce-header,
.editorjs h4.ce-header {
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #000;
  padding: 1em 0 3px;
}

.cdx-simple-image__picture {
  margin-left: -30px;
  margin-right: -30px;
}

.cdx-simple-image {
  border-radius: 8px;
}

.cdx-input.image-tool__caption,
.cdx-input.cdx-simple-image__caption,
.embed-tool__caption,
.inline-image .cdx-input {
  border: none;
  opacity: 0.8;
  font-style: italic;
  box-shadow: none;
  text-align: center;
}

.cdx-search-field__input {
  padding: 0 !important;
}

.cdx-alert-info {
  background-color: var(--bs-primary-o-course) !important;
  border: none;
  color: #362c2b !important;
}

.form-control input {
  padding: 0;
}

.ce-popover-item__title {
  color: var(--bs-dark-text-emphasis);
}

svg {
  color: var(--bs-dark-text-emphasis);
}

.modal-content .close {
  padding: 20px;
}

.cdx-input.cdx-quote__caption::before {
  content: "88";
}

.link-tool__content--rendered {
  border: none !important;
}

.cdx-input.cdx-quote__caption,
.cdx-input.cdx-quote__text {
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;
  font-style: italic;
  border: 0;
  box-shadow: none;
}

.cdx-block .cdx-quote__text {
  min-height: auto;
}

.cdx-attaches--with-file {
  border: 0 !important;
}

.cdx-loader:before {
  border-width: 3px;
  border-left-color: var(--bs-primary-rgb);
  width: 20px;
  height: 20px;
}

.link-tool__content.link-tool__content--rendered {
  box-shadow: var(--bs-box-shadow-sm) !important;
  background: none;
}

.link-tool__image {
  width: 150px !important;
  height: 110px !important;
  background: none;
}

.dashboard_part.article-editor .breadcrumb {
  padding-bottom: 10px !important;
  background: #fff;
}

.banner-editor-js.activeImage {
  background: none !important;
}

.modal-seo .banner-editor-js.activeImage {
  height: 200px;
}

@media only screen and (min-width: 600px) {
  .editorjs .col-sm-3 {
    display: flex;
    width: 100% !important;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .banner-editor-js .thubnail-member {
    width: 100%;
    height: 420px;
  }

  .cdx-block.inline-image,
  inline-image__picture {
    margin-left: -50px;
    margin-right: -50px;
  }

  .ce-toolbar__actions {
    right: unset;
    left: -120px;
  }
}

.banner-editor-js {
  position: relative;
  /* max-width: 760px; */
  border-radius: 14px;
  background: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
}

.banner-editor-js label {
  position: absolute;
  border: 0;
}

.banner-editor-js .thubnail-member {
  width: 100%;
  min-height: 220px;
}

.editorjs .upload-status {
  display: flex;
  width: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.banner-editor-js .col-sm-8 {
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  border-radius: 18px;
}

.title-editor-js {
  border: 0;
  margin: 0 auto;
  display: block;
  max-width: 760px;
  height: initial;
  min-height: initial;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #000;
  padding: 1em 0 20px 0;
  overflow-y: hidden;
}

.dashboard_part .container {
  overflow-x: visible;
}

.editorjs {
  padding: 50px 0;
  padding-bottom: 20px;
  min-height: 77vh;
}

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
  font-family: Arial, Helvetica, sans-serif;
}

.ce-block__content .wrapper input {
  border: 0 !important;
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

@media only screen and (min-width: 720px) {
  .banner-editor-js .thubnail-member {
    width: 100%;
    height: 100px;
  }

  .codex-editor--narrow .codex-editor__redactor {
    margin-right: 0
  }

  .activeImage {
    height: 500px;
  }

  .activeImage .thubnail-member,
  .activeImage .loading-overlay {
    height: 480px;
  }

  .modal-seo .activeImage,
  .modal-seo .activeImage .thubnail-member,
  .modal-seo .activeImage .loading-overlay {
    height: 200px;
  }
}
</style>
