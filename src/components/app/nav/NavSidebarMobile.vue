<template>
    <div class="nav-bar-mobile position-fixed bottom-0 col-12 d-lg-none d-flex justify-content-between rounded-top-4 shadow-lg"
        :class="{ 'off-sidebar': hideSidebar }">
        <div class="col-2">
            <RouterLink :to="{ name: 'Report' }" class="d-flex align-item-center text-center row py-3">
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-pie-chart">
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Home' }" class="d-flex row align-item-center text-center row py-3">
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-file">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Category' }" class="d-flex align-item-center text-center row py-3">
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-bookmark">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Member' }" class="d-flex align-item-center text-center row py-3"
                aria-current="page">
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-users">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Config' }" class="d-flex align-item-center text-center row py-3">
                <div class="align-item-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-settings">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                    </svg>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style>
.nav-bar-mobile {
    transition: bottom 0.5s;
    /* Adiciona uma transição suave para o fundo */
}

.off-sidebar {
    bottom: -80px;
    display: none !important;
    /* Define o fundo como -80px quando o menu está oculto */
}

/* Esconde o menu e o torna transparente */
.nav-bar-mobile.loading {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s;
}
</style>

<script>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'NavSidebarMobile',
    setup() {
        const router = useRouter();
        const loading = ref(true); // Estado de carregamento do menu
        const hideSidebar = ref(false); // Estado para ocultar o menu

        // Verifica se a rota atual é /editor-artigo
        const checkRoute = () => {
            const currentPath = router.currentRoute.value.path;
            hideSidebar.value = currentPath === '/editor-artigo';
            loading.value = false; // Define loading como false após verificar a rota
        }

        // Executa checkRoute assim que o componente é montado
        onMounted(checkRoute);

        return {
            loading,
            hideSidebar
        };
    }
}
</script>