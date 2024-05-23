<template>
  <div class="editorjs" ref="htmlelement"></div>
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
.editorjs {
  margin-top: 50px;
  min-height: 100vh;
}

.editorjs .ce-block {
  padding-bottom: 1rem;
  font-size: 1.2rem;
}

.editorjs .ce-paragraph.cdx-block,
.editorjs .ce-header {
  color: #000 !important;
}

.editorjs .cdx-input.link-tool__input {
  font-weight: 100;
}

.editorjs h1.ce-header,
.editorjs h2.ce-header,
.editorjs h3.ce-header,
.editorjs h4.ce-header {
  font-weight: 600;
  font-size: 1.6rem;
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
</style>
