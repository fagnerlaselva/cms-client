<template>
    <nav class="sidebar d-none d-lg-block" data-bs-theme="auto">
        <div class="d-flex flex-column flex-shrink-0 border-end" style="width: 4.5rem;">
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li class="m-2 mt-3 rounded logo-li">
                    <img src="../../../../public/images/logo.png" width="50" height="50" class="rounded-1">
                </li>
                <li class="m-2 rounded">
                    <a href="/" class="nav-link py-3 rounded-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-file-text">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    </a>
                </li>
                <li class="m-2 rounded">
                    <a href="/membros" class="nav-link py-3 rounded-0 " data-bs-toggle="tooltip"
                        data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-users">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </a>
                </li>
                <li class="m-2 rounded">
                    <a href="/categoria" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip"
                        data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-bookmark">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </a>
                </li>
                <li class="m-2 rounded">
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Customers" data-bs-original-title="Customers">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-pie-chart">
                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center justify-content-center p-3 " data-bs-toggle="dropdown"
                    aria-expanded="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                        stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-settings">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                    </svg>
                    <img src="https://avatars.githubusercontent.com/u/34191081?v=4" alt="Fagner Mendes" width="42"
                        height="42" class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small shadow"
                    style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(0px, -38px);"
                    data-popper-placement="top-start">
                    <li><a class="dropdown-item" href="#">Notificações</a></li>
                    <li><a class="dropdown-item" href="#">Configurações</a></li>
                    <li><a class="dropdown-item" href="/perfil">Meu Perfil</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/login">Sair</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.main_content {
    padding-left: 0;
}

.logo-li:hover {
    background: none !important;
}

.nav-pills li {
    opacity: 1;
}

.nav-pills li.logo-li:hover {
    background: none !important;
}

.nav-pills li:focus,
.nav-pills li:hover {
    background: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
    border-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
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
    name: 'NavSidebar',
    setup() {
        return {
            IconUser
        };
    }
}
</script>