<template>
    <div>
        <div v-if="!isMobile" @click="toggleSidebar" class="toggle-sidebar text-primary-emphasis p-3">
            <div class="icon-info rounded-circle border">{{ isSidebarVisible ? '-' : '+' }} </div>
            Publicar
        </div>
        <transition name="slide">
            <div v-if="isSidebarVisible" class="sidebar-article shadow-lg d-flex flex-column flex-shrink-0">
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
                        Configurações para SEO
                    </button>
                </div>

                <!-- Botão de Publicar -->
                <div class="d-grid gap-3 col-12 mx-auto align-self-stretch p-4 px-4 py-2 pb-4">
                    <button class="btn btn-primary" type="button" data-bs-toggle="modal"
                        data-bs-target="#publication">Publicar</button>
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
