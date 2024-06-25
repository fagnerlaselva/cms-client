<template>
    <div class="nav-bar-mobile position-fixed bottom-0 col-12 d-lg-none d-flex justify-content-between rounded-top-4 shadow-lg"
        :class="{ 'off-sidebar': hideSidebar }">
        <div class="col-2">
            <RouterLink :to="{ name: 'Dashboard' }" class="d-flex align-item-center text-center row py-3"
                @click="toggleActive('Dashboard')">
                <div class="icon-wrapper" :class="{ active: isActive('Dashboard') }">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 17V21H9V17M5.2 17H18.8C19.9201 17 20.4802 17 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C22 15.4802 22 14.9201 22 13.8V6.2C22 5.0799 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H5.2C4.07989 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.07989 2 6.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.0799 17 5.2 17Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Home' }" class="d-flex row align-item-center text-center row py-3"
                @click="toggleActive('Home')">
                <div class="icon-wrapper" :class="{ active: isActive('Home') }">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Category' }" class="d-flex align-item-center text-center row py-3"
                @click="toggleActive('Category')">
                <div class="icon-wrapper" :class="{ active: isActive('Category') }">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 11.9412V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H14M14 11H8M10 15H8M16 7H8M15 17H21"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Author' }" class="d-flex align-item-center text-center row py-3"
                aria-current="page" @click="toggleActive('Member')">
                <div class="icon-wrapper" :class="{ active: isActive('Member') }">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Config' }" class="d-flex align-item-center text-center row py-3"
                @click="toggleActive('Config')">
                <div class="icon-wrapper" :class="{ active: isActive('Config') }">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8ZM9 16L21 16M9 16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.65685 13 9 14.3431 9 16Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeIcons = ref([]);

const toggleActive = (routeName) => {
    if (isActive(routeName)) {
        activeIcons.value = activeIcons.value.filter(name => name !== routeName);
    } else {
        activeIcons.value = [...activeIcons.value, routeName];
    }

    // Navega para a rota apenas se não estivermos na mesma página
    if (router.currentRoute.value.name !== routeName) {
        router.push({ name: routeName });
    }
};

const isActive = (routeName) => {
    return router.currentRoute.value.name === routeName;
};
</script>
<style scoped>
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

.icon-wrapper {
    transition: transform 0.3s ease-in-out;
}

.icon-wrapper.active {
    transform: scale(1.2);
    /* Aumenta o ícone quando estiver ativo */
}
</style>