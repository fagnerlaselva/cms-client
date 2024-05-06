<template>
    <div
        class="navbar-expand-lg bg-body-tertiary position-fixed bottom-0 col-12 p-2 d-lg-none d-flex justify-content-between border-top bg-light">
        <div class="search-article">
            <input class="form-control input-group-sm" list="datalistOptions" id="exampleDataList"
                placeholder="Encontre um artigo..." data-bs-theme-value="auto">
            <datalist id="datalistOptions">
                <option value="Mailing o que é e como utilizá-lo de maneira inteligente."></option>
                <option value="Mailing o que é e como utilizá-lo de maneira inteligente."></option>
                <option value="Mailing o que é e como utilizá-lo de maneira inteligente."></option>
            </datalist>
        </div>
        <div class="menu-mobiledropdown " data-bs-theme="auto">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
            </button>
            <ul class="dropdown-menu flex-row" data-bs-theme="auto">
                <li>
                    <RouterLink :to="{ name: 'Report' }" class="dropdown-item">
                        Relatórios
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Home' }" class="dropdown-item">
                        Artigos
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Draft' }" class="dropdown-item">
                        Rascunhos
                    </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'Member' }" class="dropdown-item">
                        Autores
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Category' }" class="dropdown-item">
                        Categorias
                    </RouterLink>
                </li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li>
                    <RouterLink :to="{ name: 'Category' }" class="dropdown-item d-none">
                        Notificações
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'Category' }" class="dropdown-item d-none">
                        Configurações
                    </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'Profile' }" class="dropdown-item">
                        Meu Perfil
                    </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'Login' }" class="dropdown-item">
                        Sair
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.main_content {
    padding-left: 0;
}

.nav-pills li {
    opacity: 0.7;
}

.nav-pills li:focus,
.nav-pills li:hover {
    opacity: 1;
    background: #FDF8F4;
}

@media only screen and (min-width: 992px) {
    .main_content {
        padding-left: 100px;
    }
}
</style>

<script>
import IconUser from "../../../../public/user.svg";
export default {
    name: 'NavSidebarMobile',
    setup() {
        return {
            IconUser
        };
    }
}
</script>