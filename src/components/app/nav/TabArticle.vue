<template data-bs-theme="dark">

    <div class="py-4 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="dark">
        <div>
            <a href="/editor-artigo" class="buttom-action-add d-flex">
                <div class="rounded-circle bg-primário bg-gradiente d-inline-flex p-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1V11" stroke="#191919" stroke-width="2" stroke-linecap="round" />
                        <path d="M1 6L11 6" stroke="#191919" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <div class="px-2">Adicionar um artigo</div>
            </a>
        </div>
        <div class="search-article d-none d-lg-block">
            <input class="form-control  input-group-sm" list="datalistOptions" id="exampleDataList"
                placeholder="Encontre um artigo" data-bs-theme-value="dark">
            <datalist id="datalistOptions">
                <option value="Mailing o que é e como utilizá-lo de maneira inteligente."></option>
                <option value="Mailing o que é e como utilizá-lo de maneira inteligente."></option>
                <option value="Mailing o que é e como utilizá-lo de maneira inteligente."></option>
            </datalist>
        </div>
    </div>
    <div class="tabFilter py-2 d-flex justify-content-between">
        <ul class=" nav nav-underline ">
            <li class=" nav-item">
                <a class="nav-link active" aria-current="page" href="#">Todos</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Categorias</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Mailing</a></li>
                    <li><a class="dropdown-item" href="#">mailing list</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Author</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Fagner Mendes</a></li>
                    <li><a class="dropdown-item" href="#">Kratinho</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Visualizações</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Mais lidos</a></li>
                    <li><a class="dropdown-item" href="#">Menos lidos</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style></style>

<script>
export default {
    name: 'TabArticle',
}
</script>