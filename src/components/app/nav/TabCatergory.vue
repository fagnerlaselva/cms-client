<template>
    <div class="vstack row-gap-4 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'AddCategory' }" buttonText="Adicionar Categoria" />
        <SearchInput :options="categoryOptions" placeholder="Encontre uma categoria" @input="handleCategorySearch" />
    </div>
    <div class="tabFilter border-bottom pt-4 d-flex justify-content-between" data-bs-theme="auto">
        <ul class="nav" data-bs-theme="auto">
            <li class="nav-item link-underline">
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
import SearchInput from '../../generic/triggers/SearchInput.vue';
export default {
    components: {
        AddButton, SearchInput,
    },
    name: 'TabArticle',
    data() {
        return {
            categoryOptions: [
                'Mailing',
                'mailing List',
                'Marketing Direto',
            ],
        };
    },
    methods: {
        handleCategorySearch(value) {
            console.log('Buscando por Categoria:', value);
            // Adicione a lógica de busca aqui
        },
    },
};

</script>