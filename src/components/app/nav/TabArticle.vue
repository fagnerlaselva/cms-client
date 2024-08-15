<template>
    <div class="py-2 vstack row-gap-4 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'ArticleEditor' }" buttonText="Adicionar artigo" />
        <SearchInput :options="articleOptions" placeholder="Encontre um artigo" @input="handleArticleSearch" />
    </div>
    <div class="tabFilter border-bottom pt-4 d-flex justify-content-between" data-bs-theme="auto">
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
import SearchInput from '../../generic/triggers/SearchInput.vue';
import AddButton from '../../generic/triggers/AddButton.vue';
export default {
    components: {
        AddButton, SearchInput
    },
    name: 'TabArticle',
    data() {
        return {
            articleOptions: [
                'Mailing o que é e como utilizá-lo de maneira inteligente.',
                'Outro artigo interessante.',
                'Mais um artigo útil.',
            ],
        };
    },
    methods: {
        handleArticleSearch(value) {
            console.log('Buscando por artigo:', value);
            // Adicione a lógica de busca aqui
        },
    },
};

</script>