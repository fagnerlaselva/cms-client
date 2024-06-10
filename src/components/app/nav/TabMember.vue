<template>
    <div class="vstack row-gap-4 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'AddMember' }" buttonText="Adicionar um Membro" />
        <SearchInput :options="memberOptions" placeholder="Encontre um Membro" @input="handleMemberSearch" />
    </div>

    <div class="tabFilter border-bottom py-2 d-flex justify-content-between" data-bs-theme="auto">
        <ul class="nav" data-bs-theme="auto">
            <li class="nav-item link-underline ">
                <a class="nav-link active link-underline" aria-current="page" href="#">Todos</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle link-underline" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Author</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Admin</a></li>
                    <li><a class="dropdown-item" href="#">Autor</a></li>
                    <li><a class="dropdown-item" href="#">Editor</a></li>

                </ul>
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
    name: 'TabMember',
    data() {
        return {
            memberOptions: [
                'Fafa mendesss',
                'Lu maia',
                'Kratinho Lima',
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