<template>
    <div class="py-3 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'AddCategory' }" buttonText="Adicionar uma Categoria" />
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
                <a class="nav-link active link-underline" aria-current="page" href="#">Todas categorias</a>
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
import AddButton from '../../generic/triggers/AddButton.vue';
export default {
    components: {
        AddButton,
    },
    name: 'TabArticle',
}

</script>