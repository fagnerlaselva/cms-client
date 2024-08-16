<template>
  <div>

    <div class="editorjs" id="editor">
      <input v-model="title" :onchange="updateArticle" type="text" placeholder="Seu titulo aqui" />
    </div>
    <button class="btn btn-primary" type="button">Salvar teste</button>
  </div>
</template>

<script>
import axios from 'axios'
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
import InlineImage from 'editorjs-inline-image';
import Warning from '@editorjs/warning';

export default {
  data() {
    return {
      currentBucketId: localStorage.getItem("currentBucket"),
      currentAccountId: localStorage.getItem('currentAccountId'),
      editor: undefined,
      editorLoading: true,
      articleId: undefined,
      title: '',
      editorData: {
        time: '1723827215213',
        version: '2.29.1',
        blocks: [],
      },
    }
  },
  methods: {
    async onChange() {
      await this.updateArticle()
    },
    async createArticle() {
      const output = await this.editor.save()

      const body = {
        blocks: output.blocks,
        authors: ['66ba4b7b402f7278849f95e7'],
        slug: 'sem-slug',
        title: this.title || 'Sem título'
      }
      const accessToken = localStorage.getItem('x-access-token')
      await axios.patch(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${this.currentBucketId}/article/${this.articleId}`, body, {
        headers: {
          'x-access-token': accessToken
        }
      })
    },

    async updateArticle() {
      const output = await this.editor.save()
      const body = {
        blocks: output.blocks,
        authors: ['66ba4b7b402f7278849f95e7'],
        slug: 'sem-slug',
        title: this.title || 'Sem título'
      }
      const accessToken = localStorage.getItem('x-access-token')
      await axios.patch(`${import.meta.env.VITE_CMS_API_URL}/${this.currentAccountId}/bucket/${this.currentBucketId}/article/${this.articleId}`, body, {
        headers: {
          'x-access-token': accessToken
        }
      })

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
    }
  },
  watch: {
    editorData() {
      // Toda vez que executar, chama API de update
    }
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
          class: InlineImage,
          inlineToolbar: true,
          config: {
            embed: {
              display: true,
            },
            unsplash: {
              appName: 'your_app_name',
              apiUrl: 'https://your-proxy-api-url.com',
              maxResults: 30,
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
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.editorjs {
  padding: 50px 0;
  padding-bottom: 20px;
  min-height: 77vh;
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

@media only screen and (min-width: 600px) {

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
</style>
