<template>
    <nav class="sidebar">
        <div class="d-flex flex-column flex-shrink-0 border-end" style="width: 4.5rem;">
            <a href="/" class="d-block p-3 link-dark text-decoration-none" data-bs-toggle="tooltip"
                data-bs-placement="right" data-bs-original-title="Icon-only">
                logo
                <span class="visually-hidden">Icon-only</span>
            </a>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li class="nav-item">
                    <a href="/" class="nav-link  py-3 rounded-0" aria-current="page" data-bs-toggle="tooltip"
                        data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
                        a
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Dashboard" data-bs-original-title="Dashboard">
                        b
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Orders" data-bs-original-title="Orders">
                        c
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Products" data-bs-original-title="Products">
                        d
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Customers" data-bs-original-title="Customers">
                        e
                    </a>
                </li>
            </ul>
            <div class="dropdown">
                <a href="#"
                    class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none show"
                    data-bs-toggle="dropdown" aria-expanded="true">
                    <img src="https://avatars.githubusercontent.com/u/34191081?v=4" alt="mdo" width="42" height="42"
                        class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small shadow"
                    style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(0px, -58px);"
                    data-popper-placement="top-start">
                    <li><a class="dropdown-item" href="#">Configurações</a></li>
                    <li><a class="dropdown-item" href="/perfil">Perfil</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/login">Sair</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    name: 'NavSidebar',
}
</script>