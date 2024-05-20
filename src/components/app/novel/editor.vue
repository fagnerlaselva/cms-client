<!-- EditorComponent.vue -->
<template>
  <div :class="customClass">
    <Editor ref="editorRef" className="teste" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { Editor as EditorClass } from '@tiptap/core';
import { Editor } from 'novel-vue';

const editorRef = ref<{ editor: EditorClass }>();

function setContent() {
  return {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: { level: 1 },
        content: [
          { type: 'text', text: 'Seu Título ' }
        ]
      },

      {
        type: 'paragraph',
        content: [
          { type: 'text', text: 'Começe a escrever...' }
        ]
      }
    ]
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

<style>
@import 'novel-vue/dist/style.css';

.teste {
  min-height: 100vh;
  max-width: 875px;
  margin-bottom: 10rem;
}

#tippy-1,
.tippy-box {
  background-color: transparent !important;
}

/* Estilos específicos para o componente EditorComponent.vue */
.editor-article {
  width: 100%;
  position: relative;
  padding-top: 5rem;
  border: none !important;
}

.editor-article>div {
  box-shadow: none;
  margin: 0 auto;
  border: none !important;
  width: 100%;
}

.editor-article h1,
.editor-article h2,
.editor-article h3,
.editor-article h4,
.editor-article h5,
.editor-article h6 {
  font-weight: 600 !important;
  color: #000 !important;
  font-size: 30px;
}

.editor-article p {
  font-size: 20px;
}
</style>
