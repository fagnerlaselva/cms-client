<template>
  <div class="editorjs" ref="htmlelement"></div>
</template>

<script setup>
import EditorJS from '@editorjs/editorjs';
import EmbedTool from '@editorjs/embed';
import ListTool from '@editorjs/list';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import Table from '@editorjs/table';
import LinkTool from '@editorjs/link';
import Hyperlink from 'editorjs-hyperlink'; // Corrigido para importação ES6

import VideoTool from './Video.js';
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
      linkTool: {
        class: LinkTool,
        config: {
          endpoint: 'http://127.0.0.1:5173/fetchUrl', // endpoint de back-end para busca de dados de URL
        }
      },
      header: {
        class: Header,
        shortcut: 'CMD+SHIFT+H',
        config: {
          placeholder: 'Seu título',
          levels: [2, 3, 4],
          defaultLevel: 2,
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
      hyperlink: {
        class: Hyperlink,
        config: {
          shortcut: 'CMD+L',
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
            title: 'New Button',
            toggle: true,
            action: (name) => {
              alert(`${name} button clicked`);
            }
          }
        ],
      },
      embed: EmbedTool,
      list: ListTool,
      image: ImageTool,

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

.ce-popover {}

.ce-popover-item__title {
  color: var(--bs-dark-text-emphasis);
}

svg {
  color: var(--bs-dark-text-emphasis);
}
</style>
