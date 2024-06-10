<template>
    <div class="py-3 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'ArticleEditor' }" buttonText="Adicionar um artigo" />
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
    <div class="tabFilter border-bottom py-2 d-flex justify-content-between" data-bs-theme="auto">
        <ul class="nav" data-bs-theme="auto">
            <li class="nav-item link-underline ">
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
                <a class="nav-link link-underline  dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Author</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Fagner Mendes</a></li>
                    <li><a class="dropdown-item" href="#">Kratinho</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style></style>

<script>
import AddButton from '../../generic/triggers/AddButton.vue';
export default {
    components: {
        AddButton,
    },
    name: 'TabArticle',
}
</script>