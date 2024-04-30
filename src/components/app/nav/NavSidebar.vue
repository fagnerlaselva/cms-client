<template>
    <nav class="sidebar">
        <div class="d-flex flex-column flex-shrink-0 border-end" style="width: 4.5rem;">
            <div class="p-2">
                <img src="../../../../public/images/logo.png" width="60" height="60">
            </div>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Orders" data-bs-original-title="Orders">
                        <img :src="IconUser" alt="" width="20" />
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Products" data-bs-original-title="Products">
                        <img :src="IconUser" alt="" width="20" />
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Customers" data-bs-original-title="Customers">
                        <img :src="IconUser" alt="" width="20" />
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Customers" data-bs-original-title="Customers">
                        <img :src="IconUser" alt="" width="20" />
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Customers" data-bs-original-title="Customers">
                        <img :src="IconUser" alt="" width="20" />
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Customers" data-bs-original-title="Customers">
                        <img :src="IconUser" alt="" width="20" />
                    </a>
                </li>
            </ul>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center justify-content-center p-3 " data-bs-toggle="dropdown"
                    aria-expanded="true">
                    <img src="https://avatars.githubusercontent.com/u/34191081?v=4" alt="mdo" width="42" height="42"
                        class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small shadow"
                    style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(0px, -38px);"
                    data-popper-placement="top-start">
                    <li><a class="dropdown-item" href="#">Configurações</a></li>
                    <li><a class="dropdown-item" href="/membros">Membros</a></li>
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
.dropdown {
    margin-left: 10px;
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