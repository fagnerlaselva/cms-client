<template>
    <div>
        <div v-if="!isMobile" @click="toggleSidebar" class="toggle-sidebar text-primary-emphasis p-3">
            <div class="icon-info rounded-circle border">{{ isSidebarVisible ? '-' : '+' }} </div>
            Publicar
        </div>
        <transition name="slide">
            <div v-if="isSidebarVisible" class="sidebar-article shadow-lg d-flex flex-column flex-shrink-0 rounded-4">
                <!-- Conteúdo da barra lateral -->
                <div class="mb-auto p-4">
                    <!-- Autores -->
                    <div class="row">
                        <strong class="caption text-primary-emphasis">Autores</strong>
                        <div class="py-2">
                            <img src="https://avatars.githubusercontent.com/u/34191081?v=4" class="rounded-circle"
                                alt="Fagner Mendes" height="24" width="24">
                            <span class="px-2">Fagner Mendes</span>
                        </div>
                        <span class="span-add" data-bs-toggle="modal" data-bs-target="#addAuthor">Adicionar</span>
                    </div>
                    <!-- Categoria do post -->
                    <div class="row mt-4">
                        <strong class="caption text-primary-emphasis">Categoria do post</strong>
                        <div class="col pt-2">
                            <span class="badge rounded-pill p-2 position-relative" disabled aria-label="Close">Marketing
                                <span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    x
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </span>
                            <span class="badge rounded-pill p-2 position-relative">Mailing
                                <span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    x
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </span>
                            <span class="badge rounded-pill p-2 position-relative">Mailing List
                                <span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    x
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </span>
                        </div>
                        <span class="span-add" data-bs-toggle="modal" data-bs-target="#addCategory">Adicionar</span>
                    </div>
                    <!-- Estatísticas -->
                    <div class="row mt-4">
                        <strong class="caption text-primary-emphasis">Estátistica</strong>
                        <div class="col">
                            <strong>766 </strong><span>Palavras</span>
                        </div>
                        <div><strong>4.443 </strong><span>Caracteres</span></div>
                        <div class="col"><span>Tempo de leitura 8 min</span></div>
                    </div>
                    <!-- Datas de criação e edição -->
                    <div class="row mt-4">
                        <div class="col">
                            <div class="row">
                                <strong class="caption text-primary-emphasis">Criado</strong>
                                <span class="date">30/01/2024 às 4:03</span>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <strong class="caption text-primary-emphasis">Rascunho</strong>
                                <span class="date">30/01/2024 às 6:23</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Botão de Publicar -->
                <div class="d-grid gap-3 col-12 mx-auto align-self-stretch px-4 py-2">
                    <button type="button" class="btn btn-outline-secondary " data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
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
                    <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#publication">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 16L16 12M16 12L12 8M16 12H8M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Publicar</button>
                </div>
            </div>
        </transition>
    </div>
</template>


<style scoped>
@media only screen and (min-width: 640px) {}
</style>

<script>
export default {
    name: 'SidebarArticle',
    data() {
        return {
            isSidebarVisible: false,
            isMobile: window.innerWidth < 640
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        updateIsMobile() {
            this.isMobile = window.innerWidth < 600;
        }
    },
    mounted() {
        window.addEventListener('resize', this.updateIsMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateIsMobile);
    },

};
</script>
