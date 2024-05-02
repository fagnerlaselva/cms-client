<template>
    <div
        class="navbar-expand-lg bg-body-tertiary position-fixed bottom-0 col-12 p-2 d-lg-none d-flex justify-content-between border-top bg-light">

        <div class="search-article">
            <input class="form-control input-group-sm" list="datalistOptions" id="exampleDataList"
                placeholder="Encontre um artigo..." data-bs-theme-value="dark">
            <datalist id="datalistOptions">
                <option value="Mailing o que é e como utilizá-lo de maneira inteligente."></option>
                <option value="Mailing o que é e como utilizá-lo de maneira inteligente."></option>
                <option value="Mailing o que é e como utilizá-lo de maneira inteligente."></option>
            </datalist>
        </div>
        <div class="menu-mobiledropdown " data-bs-theme="dark">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
            </button>
            <ul class="dropdown-menu flex-row" data-bs-theme="dark">
                <li>
                    <a href="/" class="dropdown-item" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Products" data-bs-original-title="Article">
                        Artigos
                    </a>
                </li>
                <li>
                    <a href="/membros" class="dropdown-item " data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Products" data-bs-original-title="author">
                        Autores
                    </a>
                </li>
                <li>
                    <a href="/categoria" class="dropdown-item" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Products" data-bs-original-title="Category">
                        Categorias
                    </a>
                </li>

                <li>
                    <hr class="dropdown-divider">
                </li>

                <li><a class="dropdown-item" href="#">Notificações</a></li>
                <li><a class="dropdown-item" href="#">Configurações</a></li>
                <li><a class="dropdown-item" href="#">Meu Pefil</a></li>
                <li><a class="dropdown-item" href="/login">Sair</a></li>
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

.dropdown {
    margin-left: 10px;
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