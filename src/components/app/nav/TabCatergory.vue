<template>

    <div class="py-4 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <div>
            <a href="/adicionar-membro" class="buttom-action-add d-flex">
                <div class="rounded-circle bg-primário bg-gradiente d-inline-flex p-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1V11" stroke="#191919" stroke-width="2" stroke-linecap="round" />
                        <path d="M1 6L11 6" stroke="#191919" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <div class="px-2">Adicionar uma Categoria</div>
            </a>
        </div>
        <div class="search-article d-none d-lg-block">
            <input class="form-control  input-group-sm" list="datalistOptions" id="exampleDataList"
                placeholder="Encontre uma categoria" data-bs-theme-value="dark">
            <datalist id="datalistOptions">
                <option value="Mailing"></option>
                <option value="Mailing List"></option>
            </datalist>
        </div>
    </div>
    <div class="tabFilter border-bottom py-2 d-flex justify-content-between" data-bs-theme="auto">
        <ul class="nav" data-bs-theme="auto">
            <li class="nav-item link-underline ">
                <a class="nav-link active link-underline" aria-current="page" href="#">Todos</a>
            </li>
            <li class="nav-item dropdown link-underline">
                <a class="nav-link dropdown-toggle link-underline" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Categorias</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Mailing</a></li>
                    <li><a class="dropdown-item" href="#">mailing list</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown link-underline">
                <a class="nav-link dropdown-toggle ink-underline" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Author</a>
                <ul class="dropdown-menu ink-underline">
                    <li><a class="dropdown-item" href="#">Fagner Mendes</a></li>
                    <li><a class="dropdown-item" href="#">Kratinho</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style>
.search-article {
    width: 260px;
}

.search-article input {
    height: 38px
}
</style>

<script>
export default {
    name: 'TabArticle',
}
</script>