<template>
    <nav class="sidebar d-none d-lg-block" data-bs-theme="auto">
        <div class="d-flex flex-column flex-shrink-0 border-end" style="width: 4.5rem;">
            <div class="p-2">
                <img src="../../../../public/images/logo.png" width="60" height="60">
            </div>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li>
                    <a href="/" class="nav-link py-3 rounded-0">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR4nO3WO0oEQRSF4U8UTMTMTFBEBDNF1MTAB2YTCWZuY7B2oBtwQHAFPkINxmxmEcKA+xhQUBoqGBqh26oKBOfASfqevn9TNMXhj2gfPdwnuoe9trATfGKA20QP4o6jNsAXPMjXI57bBN8QCgBD3JUMnEMH5zV34qw4cBNjfNU8jrPiwN8qTIH/90gP0Mdrg/sxmw3cwBWuG3wVs9nAVIVU4DK6uGxwN2azgacY4b3Bo5jNBqYqpAJnsYWdmtcnMovYrl3iycCzHy7syh9YiJm7+OyiBLDSCtZqXpqYz2MVM6WAKQpTYOkS9dS2RB3HP3CYUROHccdh26+rSuxNRhGu3t3NOp9S+gZKVZaDkx14sQAAAABJRU5ErkJggg==">
                    </a>
                </li>
                <li>
                    <a href="/membros" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip"
                        data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwUlEQVR4nO2WuUsDQRjFfyJelQceEQsRr8YD7AQFixQ2auGfoIVXbMRCEcFGLKwsxMbGIqAgdrEQBA/QqJ14NN5gYaMWKvGKDLyAhN24JptKH0yx871v3n7fzrwd+MdfQzHQD8xo9AGeZAilAOPACxCOGs/AmDiuYU6LnwM9QA1QC/QCF4rNuiXWoQV3gWyLeA6wJ06bG4JbwBtQEYNTBbwDG4mKZWqhTQfcbXHTExH0qFV+B1y/uAnt2lQgpLY6qTCknISwqm9YGYNTrXYGcAHNwAcQ1I6MRi6wL8EmXMIw8Alcyl3MGayT61wpNuSWmEEasGjhMpGxDGTY5OYBDUCWU7FWOUxYbQtKYAU40FxYlbZH5XbL+kz8Gqj/SWxE7XoARoF8G0M3Xvok7oTmB/R8C8xrH+zEEvPpzQ6BMgedMLv4WDkBiZmqyhU/Ax7tko05v8qYC3GOEuDuWwsjYpOaW7JLDIjQwu8waFFZROwIKLBKKlW/110WK7JL7BLJ/OucwhevmMG0iI04g1diN/GIGXQCUzZHwAqRxb3xiMWDNQmYc7eQbDFzcbqPsrlTmUFSYK4dJ6rM7FLz3c0twRZfeJWKVvbGN1QAAAAASUVORK5CYII=">
                    </a>
                </li>
                <li>
                    <a href="/categoria" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip"
                        data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQ0lEQVR4nO2Wu0oDQRSGP1TSC64rNgEvr2AjSZHCRrxgmVYLfYCA5YqQxtbO9CF5A30FGxsvrfgAQmySKjLwLwxmk+zszFrlg9PsDHzMnDM/CwumUwUSoAv0M6oHXAMRATgCBsA4R30BsY/sGBgBP0BTJ1jNqDWgJeltCFktx/5Ywl4ZsnXgBrgAlvQtkrAfWmZ4svp27iPMe43vljApKnTp2QHwBjxaT8FJWHcckCwiF+EZ8OkhM2xIaMLhX2j+6ekEh8AzsBNAtgJ8K5FMDE5Q1aLp2S5haAGNaYuJjm+uwYc9oA0sz9v4IOGWh6ymGxoqS2dyJeG9p2yk9zuXCvAiabtsmZ3ur5LekY99DZuRnVIAF6m3zEVqy04IQDxDGlyWsgl8WNO7rXdaaEBcpOn0pjXQj1RpVIBLoKNEyszGBYZf94tzQQuPmKoAAAAASUVORK5CYII=">
                    </a>
                </li>
                <li>
                    <a href="/" class="nav-link py-3 rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"
                        aria-label="Customers" data-bs-original-title="Customers">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEUlEQVR4nO3WsUoDQRSF4U9fIY1gZ5faVju1VxGbdKkVrCxVBM0rBALpxXSxsvMJ7EVML8TGQJCIMuEiQSKKmU0RcuAsdxk4P3NnL7PMNWtaxxlqmXyKtZ9g+3hBE/VMbkbm3jjgDQ4K6Noh2uMW7lD5Q8AJbsOp/k2VyP43sIWrcGtawKNwqpdwPOJS0cBV9GPHA5SnAXyOtd6kwOWR80peKRpYxluczWuEFw7sRZ1C58BejpYO4oPpj7T0Ppx9LErfhjoN+fbI+/Ykg3+NC/l1Gdlf2sIDuvhAB4+Z3InMbjASa/h4RxUbBbkajM0EXIi78AmNjJdvPdyInbaDNdQidnGe8feiFk6ZO8GYawb0CZqmuH7/rVUNAAAAAElFTkSuQmCC">
                    </a>
                </li>
            </ul>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center justify-content-center p-3 " data-bs-toggle="dropdown"
                    aria-expanded="true">
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
    name: 'NavSidebar',
    setup() {
        return {
            IconUser
        };
    }
}
</script>