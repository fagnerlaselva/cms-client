<!-- EditorComponent.vue -->
<template>
  <div :class="customClass">
    <button class="btn btn-primary" @click="setContent">Veja conteúdo teste</button>
    <Editor ref="editorRef" />

  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { Editor as EditorClass } from '@tiptap/core';
import { Editor } from 'novel-vue';
import 'novel-vue/dist/style.css';

const editorRef = ref<{ editor: EditorClass }>();

function setContent() {
  if (editorRef.value) {
    editorRef.value.editor.commands.setContent({
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: { level: 1 },
          content: [
            { type: 'text', text: 'Titulo ' }
          ]
        },
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Texto em ' },
            { type: 'text', marks: [{ type: 'bold' }], text: 'negrito' },
            { type: 'text', text: ' e ' },
            { type: 'text', marks: [{ type: 'italic' }], text: 'itálico' },
            { type: 'text', text: '.' }
          ]
        },
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.' }
          ]
        },
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'continue escrevendo' }
          ]
        }
      ]
    });
  }
}

// Define props
const props = defineProps({
  customClass: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
/* Estilos específicos para o componente EditorComponent.vue */
.editor-article {
  padding-top: 5rem;
  border: none !important;
}

.editor-article>div {
  box-shadow: none;
  border: none !important;
  width: 100%;
}
</style>
