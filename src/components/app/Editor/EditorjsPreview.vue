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
import Warning from '@editorjs/warning';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import SimpleImage from "@editorjs/simple-image";
import AudioPlayer from 'editorjs-audio-player';
import AttachesTool from '@editorjs/attaches';

const htmlelement = ref(null);
const props = defineProps(['modelValue', 'placeholder']);
const emit = defineEmits(['update:modelValue']);

let editor;
let updatingModel = false;

// Adicionando o novo bloco de dados
const initialData = props.modelValue || {
  blocks: [
    {
      id: "",
      type: "header",
      data: {
        text: "Marketing direto: 7 principais exemplos de ações",
        level: 1,
      },
    },
    {
      type: "image",
      data: {
        url: "https://contatus.net.br/blog-image/comprar-mailinglist-vantagens.webp",
        caption: "Comprar mailing e suas vantagens",
        withBorder: false,
        withBackground: false,
        stretched: true
      }
    },
    {
      id: "mhTl6ghSkV",
      type: "paragraph",
      data: {
        text: "O marketing direto é um conjunto de estratégias aplicadas com o objetivo de entrar em contato com um público específico e bem segmentado, que de fato tem interesse em determinado produto ou serviço. ",
      },
    },
    {
      id: "mhTl6ghSkV",
      type: "paragraph",
      data: {
        text: "Ele pode ser utilizado na conquista de novos clientes ou para reforçar o relacionamento com clientes já alcançados, estabelecendo aqui o desejo de que este seja duradouro e de sucesso.",
      },
    },
    {
      id: "mhTl6ghSkV",
      type: "paragraph",
      data: {
        text: "O marketing direto trabalha com pessoas, ou empresas, que já demonstraram algum tipo de interesse pela sua marca.",
      },
    },
    {
      id: "mhTl6ghSkV",
      type: "paragraph",
      data: {
        text: "Portanto, seus custos e resultados tendem a ser melhores e mais vantajosos. Não somente no digital, mas fora dele também, há como implantar algumas destas estratégias. Aqui neste texto, vamos citar algumas delas e assim, quem sabe te ajudar a começar o seu planejamento.",
      },
    },
    {
      id: "mhTl6ghSkV",
      type: "header",
      data: {
        text: "7 principais ações do marketing diretoMarketing direto: 7 principais exemplos de ações",
        level: 1,
      },
    },
    {
      id: "XKNT99-qqS",
      type: "attaches",
      data: {
        file: {
          url: "https://fase.org.br/wp-content/uploads/2014/05/exemplo-de-pdf.pdf",
          size: 12902,
          name: "exemplo.pdf",
          extension: "pdf",
        },
        title: "My file",
      },
    },
    {
      type: "quote",
      data: {
        text: "The unexamined life is not worth living.",
        caption: "Socrates",
        alignment: "left"
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          {
            content: "Número de compartilhamentos do seu blog/site;",
          },
          {
            content: "Número de downloads do seu conteúdo;",
          },
          {
            content: "Primeira compra etc.",
            items: [
              {
                content: "Número de compartilhamentos do seu blog/site;",
              },
              {
                content: "Número de downloads do seu conteúdo;",
              },
              {
                content: "Você pode pensar em estratégias como: ",
                items: []
              },
            ],
          },
        ]
      }
    },
    {
      id: "hZAjSnqYMX",
      type: "image",
      data: {
        file: {
          url: "https://contatus.net.br/blog-image/identificar-e-aumentar-vendas-expandir-negocios.webp",
        },
        withBorder: false,
        withBackground: false,
        stretched: true,
        caption: "CodeX Code Camp 2019",
      },
    },

    {
      id: "mhTl6ghSkV",
      type: "paragraph",
      data: {
        text: "Marketing direto: 7 principais exemplos de ações",
      },
    },
    {
      type: "linkTool",
      data: {
        link: "https://contatus.net.br/",
        meta: {
          title: "Mailing list para marketing direto",
          site_name: "Contatus",
          description: "Mailing list da Contatus possui dados reais e ativos para telemarketing ou call center. Teste Grátis agora!",
          image: {
            url: "https://contatus.net.br/blog-image/pog/protocolo-open-graph-mailing.jpg"
          }
        }
      },
    },
    {
      type: "embed",
      data: {
        service: "coub",
        source: "https://coub.com/view/8356t",
        embed: "https://coub.com/embed/8356t",
        width: 580,
        height: 320,
        caption: "My Life"
      }
    },
    {
      "type": "audioPlayer",
      "data": {
        "src": "https://file-examples.com/storage/fed5266c9966708dcaeaea6/2017/11/file_example_MP3_700KB.mp3"
      }
    },
    {
      type: "embed",
      data: {
        service: "youtube",
        source: "https://www.youtube.com/view/FEG2GlLFYDM",
        embed: "https://www.youtube.com/embed/FEG2GlLFYDM",
        width: 580,
        height: 420,
        caption: "Mailing list direcionada para vender mais - Contatus Expertise Marketing Direto"
      }
    },

  ],
};

// model -> view
function modelToView() {
  if (!props.modelValue) { return; }
  if (typeof props.modelValue === 'string') {
    editor.blocks.renderFromHTML(props.modelValue);
    return;
  }
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
    placeholder: 'Comece a escrever sua história ',
    tools: {


      header: {
        class: Header,
        shortcut: 'CMD+SHIFT+H',
        config: {
          levels: [1, 2, 3, 4],
          defaultLevel: 1,
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
      image: SimpleImage,
      attaches: {
        class: AttachesTool,
        title: "teste",
        config: {
          endpoint: 'http://localhost:8008/uploadFile'
        }
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
      audioPlayer: AudioPlayer,
      delimiter: Delimiter,
      alert: Alert,
      embed: EmbedTool,

    },
    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 3,
      },
    },
    minHeight: 'auto',
    data: initialData,
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
            "Message": "Mensagem",
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
editorjs h4.ce-header {
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
  background: none
}

.link-tool__image {
  width: 150px !important;
  height: 110px !important;
  background: none
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
