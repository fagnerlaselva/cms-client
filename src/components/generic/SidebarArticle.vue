<template>
    <div>
        <div @click="toggleSidebar" class="toggle-sidebar text-primary-emphasis p-3">
            <div class="icon-info rounded-circle border">{{ isSidebarVisible ? '-' : '+' }} </div>
            Configurações
        </div>
        <transition name="slide">
            <div v-if="isSidebarVisible" class="sidebar-article shadow-lg d-flex flex-column flex-shrink-0 rounded-4">
                <!-- Conteúdo da barra lateral -->
                <div class="mb-auto p-4">
                    <!-- Autores -->
                    <div class="row">
                        <strong class="caption text-primary-emphasis">Autores</strong>
                        <div class="py-2">
                            <img src="https://avatars.githubusercontent.com/u/34191081?v=4" class="rounded-3"
                                alt="Fagner Mendes" height="24" width="24">
                            <span class="px-2"> teste fixo name Fagner Mendes</span>
                        </div>
                        <span class="span-add" data-bs-toggle="modal" data-bs-target="#addAuthor">Adicionar
                            co-autor</span>
                    </div>

                    <div class="row mt-4">
                        <strong class="caption text-primary-emphasis">Categorias do post</strong>
                        <div class="col pt-2">
                            <span v-for="(category, index) in selectedCategories" :key="index"
                                class="badge rounded-pill p-2 position-relative">
                                {{ category.name }}
                                <span @click="removeCategory(index)"
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    style="cursor: pointer;">
                                    x
                                    <span class="visually-hidden">Remove categoria</span>
                                </span>
                            </span>
                        </div>
                        <span class="span-add" data-bs-toggle="modal"
                            data-bs-target="#addCategoryModal">Selecionar</span>
                    </div>


                    <!-- Estatísticas -->
                    <div class="row mt-4">
                        <strong class="caption text-primary-emphasis">Estátistica</strong>
                        <div class="col">
                            <strong>{{ editorWordCount }}</strong><span> Palavras</span>
                        </div>
                        <div><strong>{{ editorCharCount }}</strong><span> Caracteres</span></div>
                        <div class="col"><span>Tempo de leitura: {{ readingTime }} min</span></div>
                    </div>
                    <!-- Datas de criação e edição -->
                    <div class="row mt-4">
                        <div class="col">
                            <div class="row">
                                <strong class="caption text-primary-emphasis">Criado</strong>
                                <span class="date">{{ formatDate(createdAt) }}</span>
                            </div>
                            <!-- </div>
                        <div class="col"> -->
                            <div class="row">
                                <strong class="caption text-primary-emphasis">Salvo</strong>
                                <span class="date">{{ formatDate(updatedAt) }}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Botão de SEO -->
                <div class="d-grid gap-3 col-12 mx-auto align-self-stretch px-4 py-2">
                    <button type="button" class="btn btn-outline-secondary " data-bs-toggle="modal"
                        @click="toggleSidebar" data-bs-target="#exampleModal">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        SEO
                    </button>
                </div>

                <!-- Botão de Publicar -->
                <div class="d-grid gap-3 col-12 mx-auto align-self-stretch p-4 px-4 py-2 pb-4">
                    <button class="btn btn-primary" type="button" @click="emitUpdateArticle" id="liveToastBtn"
                        ref="liveToastBtn">

                        <svg width="30" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 12V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M16 7L12 3M12 3L8 7M12 3V15"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Salvar</button>


                    <div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-bs-delay="10000">
                        <div role="alert" aria-live="assertive" aria-atomic="true">Kratinho toast</div>
                    </div>
                </div>


                <div class="d-grid gap-3 col-12 mx-auto align-self-stretch p-4 px-4 py-2 pb-4">
                    <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#publication">
                        <svg width="30" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 12V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M16 7L12 3M12 3L8 7M12 3V15"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Publicar</button>
                </div>
            </div>
        </transition>

        <!-- Toast -->
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div ref="liveToast" id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <!-- <img src="..." class="rounded me-2" alt="..."> -->
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="publication" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 9999;">
            <div class="modal-dialog  modal-dialog-centered  modal-dialog-scrollabl">
                <div class="modal-content rounded-5">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Finalizar postagem</h1>
                        <button @click="handleButtonClick" type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="padding: 0;">
                        <div class="card-link">
                            <span>
                                <span class="">
                                    <a href="https://contatus.net.br/blog/conheca-acoes-marketing-direto"
                                        class="carbon-img" target="_blank" rel="noopener sponsored">
                                        <img :src="thumbnailUrl" alt="Carregando Imagem" border="0" height="100"
                                            width="150" data-no-statview="no"
                                            style="max-width: 150px; margin-right: 14px;">
                                    </a>
                                    <a href="https://contatus.net.br/blog/conheca-acoes-marketing-direto" class="title"
                                        target="_blank" rel="noopener sponsored">
                                        {{ ogTitle }}
                                    </a>
                                </span>
                                <a href="https://contatus.net.br/blog/conheca-acoes-marketing-direto"
                                    class="description " target="_blank" rel="noopener sponsored">
                                    {{ ogDescription || '' }}</a>
                            </span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="toggleSidebar" type="button" class="btn"
                            data-bs-dismiss="modal">Cancelar</button>
                        <button @click="$emit('publishArticle'); toggleSidebar()" type="button" class="btn btn-primary"
                            data-bs-dismiss="modal">Publicar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { formatDate } from "@/utils/date"
import { Toast } from "bootstrap"
export default {

    name: 'SidebarArticle',
    props: {
        categories: {
            type: Array,
            default: () => []
        },

        createdAt: {
            type: String,
            required: true
        },
        updatedAt: {
            type: String,
            required: true
        },
        ogTitle: {
            type: String,
            default: '',
            required: true
        },
        ogDescription: {
            type: String,
            default: '',
        },
        thumbnailUrl: {
            type: String,
        },
        editorWordCount: {
            type: Number,
            required: true
        },
        editorCharCount: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            isSidebarVisible: false,
            isMobile: window.innerWidth < 640,
            selectedCategories: this.categories // Inicializar com as categorias passadas
        };
    },
    computed: {
        readingTime() {
            return Math.ceil(this.editorWordCount / 200);
        }
    },
    methods: {
        emitUpdateArticle() {
            this.$emit('updateArticle')
            const toastLiveExample = this.$refs.liveToast;
            const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show();
        },
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        removeCategory(index) {
            this.selectedCategories.splice(index, 1);
        },
        updateCategories(newCategories) {
            this.selectedCategories = newCategories;
        },

        formatDate: (date) => {
            return formatDate(date)
        },
    },
    mounted() {

    },
    watch: {
        categories(newCategories) {
            this.selectedCategories = newCategories; // Atualiza as categorias selecionadas quando a prop muda
        }
    }
};
</script>