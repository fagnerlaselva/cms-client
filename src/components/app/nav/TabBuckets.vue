<template>
    <div class="py-2 vstack row-gap-4 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'AddBucket' }" buttonText="Adicionar Buckets" />
        <SearchInput :options="memberOptions" placeholder="Encontre um Buckets" @input="handleMemberSearch" />
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