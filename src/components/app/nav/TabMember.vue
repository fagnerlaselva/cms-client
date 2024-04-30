<template>
    <div class="py-4 d-flex justify-content-between">
        <a href="/adicionar-membro" class="buttom-action-add d-flex">
            <div class="rounded-circle bg-primário bg-gradiente d-inline-flex p-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V11" stroke="#191919" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 6L11 6" stroke="#191919" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
            <div class="px-2">Adicionar um Membro</div>
        </a>
    </div>
    <ul class="nav nav-underline tabFilter py-2">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Todos</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                aria-expanded="false">Author</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Admin</a></li>
                <li><a class="dropdown-item" href="#">Autor</a></li>
                <li><a class="dropdown-item" href="#">Editor</a></li>

            </ul>
        </li>
    </ul>
</template>

<style>
.dropdown {
    margin-left: 10px;
}
</style>

<script>
export default {
    name: 'TabMember',
}
</script>