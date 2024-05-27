<template>
  <div class="editorjs border-bottom" ref="htmlelement"></div>
</template>

<script setup>
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
import { onMounted, onUnmounted, ref, watch } from 'vue';


const htmlelement = ref(null);
const props = defineProps(['modelValue', 'placeholder']);
const emit = defineEmits(['update:modelValue']);

let editor;
let updatingModel = false;

// model -> view
function modelToView() {
  if (!props.modelValue) { return; }
  if (typeof props.modelValue === 'string') {
    editor.blocks.renderFromHTML(props.modelValue);
    return;
  }
  editor.render(props.modelValue);
}

// view -> model
function viewToModel(api, event) {
  updatingModel = true;
  editor.save().then((outputData) => {
    console.log(event, 'Saving completed: ', outputData);
    emit('update:modelValue', outputData);
  }).catch((error) => {
    console.log(event, 'Saving failed: ', error);
  }).finally(() => {
    updatingModel = false;
  });
}

onMounted(() => {
  editor = new EditorJS({
    holder: htmlelement.value,
    inlineToolbar: ['bold', 'italic', 'link'],
    "link": {
      "Add a link": "Adicone um link"
    },
    autofocus: true,
    placeholder: 'Comece a escrever sua história ',
    tools: {
      header: {
        class: Header,
        shortcut: 'CMD+SHIFT+H',
        config: {
          placeholder: 'Seu título',
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
    data: props.modelValue,
    onReady: modelToView,
    onChange: viewToModel,
    i18n: {
      /**
       * @type {I18nDictionary}
       */
      messages: {
        /**
         * Other below: translation of different UI components of the editor.js core
         */
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

        /**
         * Section for translation Tool Names: both block and inline tools
         */
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

        /**
         * Section for passing translations to the external tools classes
         */
        tools: {
          /**
           * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
           * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
           */
          "warning": { // <-- 'Warning' tool will accept this dictionary section
            "Title": "Título",
            "Message": "Menssagem",
          },

          /**
           * Link is the internal Inline Tool
           */
          "link": {
            "Add a link": "Adicionar link"
          },
          /**
           * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
           */
          "stub": {
            'The block can not be displayed correctly.': 'O bloco não pode ser exibido corretamente.'
          }
        },

        /**
         * Section allows to translate Block Tunes
         */
        blockTunes: {
          /**
           * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
           * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
           *
           * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
           */
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

});



watch(() => props.modelValue, () => {
  if (!updatingModel) {
    modelToView();
  }
});

onUnmounted(() => {
  editor.destroy();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.editorjs {
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

.editorjs h1.ce-header,
.editorjs h2.ce-header,
.editorjs h3.ce-header,
.editorjs h4.ce-header {
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
}

.inline-image .cdx-input {
  border: none;
  opacity: 0.8;
  font-style: italic;

}

.cdx-block.inline-image,
inline-image__picture {
  margin-left: -50px;
  margin-right: -50px;
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



@media only screen and (min-width: 600px) {

  .ce-toolbar__actions {
    left: -120px;
  }
}
</style>
