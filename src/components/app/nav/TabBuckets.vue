<template>
    <div class="vstack row-gap-4 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'AddBucket' }" buttonText="Adicionar Buckets" />
        <SearchInput :options="memberOptions" placeholder="Encontre um Buckets" @input="handleMemberSearch" />
    </div>

    <div class="tabFilter border-bottom pt-4 d-flex justify-content-between" data-bs-theme="auto">
        <ul class="nav" data-bs-theme="auto">
            <li class="nav-item link-underline ">
                <a class="nav-link active link-underline" aria-current="page" href="#">Todos</a>
            </li>
        </ul>
    </div>
</template>

<style></style>

<script>
import AddButton from '../../generic/triggers/AddButton.vue';
import SearchInput from '../../generic/triggers/SearchInput.vue';
export default {
    components: {
        AddButton, SearchInput,
    },
    name: 'TabBuckets',
    data() {
        return {
            memberOptions: [
                'Contatus',
            ],
        };
    },
    methods: {
        handleMemberSearch(value) {
            console.log('Buscando por artigo:', value);
            // Adicione a lógica de busca aqui
        },
    },

}
</script>