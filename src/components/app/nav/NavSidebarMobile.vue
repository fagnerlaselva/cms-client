<template>
    <div class="nav-bar-mobile position-fixed bottom-0 col-12 d-lg-none d-flex justify-content-between rounded-top-4 shadow-lg"
        :class="{ 'off-sidebar': hideSidebar }">
        <div class="col-2">
            <RouterLink :to="{ name: 'Dashboard' }" class="d-flex align-item-center text-center row py-3"
                @click="toggleActive('Dashboard')">
                <div class="icon-wrapper" :class="{ active: isActive('Dashboard') }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 17V21H9V17M5.2 17H18.8C19.9201 17 20.4802 17 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C22 15.4802 22 14.9201 22 13.8V6.2C22 5.0799 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H5.2C4.07989 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.07989 2 6.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.0799 17 5.2 17Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Home' }" class="d-flex row align-item-center text-center row py-3"
                @click="toggleActive('Home')">
                <div class="icon-wrapper" :class="{ active: isActive('Home') }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Category' }" class="d-flex align-item-center text-center row py-3"
                @click="toggleActive('Category')">
                <div class="icon-wrapper" :class="{ active: isActive('Category') }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M14 17H8M16 13H8M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Author' }" class="d-flex align-item-center text-center row py-3"
                aria-current="page" @click="toggleActive('Member')">
                <div class="icon-wrapper" :class="{ active: isActive('Member') }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 11.9412V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H14M14 11H8M10 15H8M16 7H8M15 17H21"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </RouterLink>
        </div>
        <div class="col-2">
            <RouterLink :to="{ name: 'Config' }" class="d-flex align-item-center text-center row py-3"
                @click="toggleActive('Config')">
                <div class="icon-wrapper" :class="{ active: isActive('Config') }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8ZM9 16L21 16M9 16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.65685 13 9 14.3431 9 16Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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