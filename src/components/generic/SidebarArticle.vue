<template>
    <div>
        <div v-if="!isMobile" @click="toggleSidebar" class="toggle-sidebar text-primary-emphasis p-2">
            <div class="icon-info rounded-circle border">{{ isSidebarVisible ? '-' : '+' }} </div>
            Informações
        </div>
        <transition name="slide">
            <div v-if="isSidebarVisible" class="sidebar-article shadow-sm pb-4 d-flex flex-column flex-shrink-0">
                <!-- Conteúdo da barra lateral -->
                <div class="mb-auto p-4">
                    <!-- Autores -->
                    <div class="row mt-4">
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
                                <strong class="caption text-primary-emphasis">Editado</strong>
                                <span class="date">30/01/2024 às 6:23</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Botão de Publicar -->
                <div class="d-grid gap-3 col-12 mx-auto align-self-stretch p-4">
                    <button class="btn btn-primary" type="button">Publicar</button>
                </div>
            </div>
        </transition>
    </div>
</template>


<style scoped>
.span-add {
    color: var(--bs-primary-rgb);
    font-size: 0.9rem;
    cursor: pointer;
}

.sidebar-article {
    background: #fff;
    width: 100%;

}

.sidebar-article strong.caption {
    font-weight: 500;
    font-size: 1rem;
    color: var(--bs-primary-text-emphasis);
}

.sidebar-article .badge {
    margin-right: 0.8rem;
    background: var(--bs-primary-o-course);
    color: var(--bs-gray-dark);
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 12px;
}

.sidebar-article .badge .badge {
    margin: 0;
    cursor: pointer;
    opacity: 0.78;
    scale: 0.8;
    background: var(--bs-primary-rgb) !important;
    display: none;
}

.sidebar-article .badge:hover .badge {
    display: block;
}

.sidebar-article span {
    font-size: 0.8rem;
}

@media only screen and (min-width: 600px) {
    .sidebar-article {
        width: 100%;
        max-width: 340px;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 10px;
        z-index: 1;
        transition: all;
    }

    .toggle-sidebar {
        z-index: 1031;
        position: fixed;
        top: 0;
        right: 20px;
        font-size: 0.8rem;
        color: #000;
        cursor: pointer;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s, opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.icon-info {
    font-size: 10px;
    width: 21px;
    height: 21px;
    display: inline;
    float: left;
    text-align: center;
    align-items: center;
    margin-right: 4px;
    cursor: pointer;

}
</style>

<script>
export default {
    name: 'SidebarArticle',
    data() {
        return {
            isSidebarVisible: true,
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
