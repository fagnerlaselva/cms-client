<template>
    <div class="vstack row-gap-4 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'AddAuthor' }" data-bs-toggle="modal" data-bs-target="#addUser"
            buttonText="Adicionar Autor" class="d-none" />

        <button type="button" class="btn buttom-action-add d-flex align-items-center add-link" data-bs-toggle="modal"
            data-bs-target="#addUser">
            <div class="rounded-3 border bg-primário bg-gradiente d-inline-flex p-2"
                data-v-inspector="src/components/generic/SocialLinksBlock.vue:44:13"><svg width="12" height="12"
                    viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                    data-v-inspector="src/components/generic/SocialLinksBlock.vue:45:15">
                    <path d="M6 1V11" stroke="#35A936" stroke-width="2" stroke-linecap="round"
                        data-v-inspector="src/components/generic/SocialLinksBlock.vue:46:17"></path>
                    <path d="M1 6L11 6" stroke="#35A936" stroke-width="2" stroke-linecap="round"
                        data-v-inspector="src/components/generic/SocialLinksBlock.vue:47:17"></path>
                </svg></div>
            <div class="px-2" data-v-inspector="src/components/generic/SocialLinksBlock.vue:50:13">Adicionar um Autor
            </div>
        </button>
        <SearchInput :options="memberOptions" placeholder="Encontre um Autor" @input="handleMemberSearch" />
    </div>

    <div class="tabFilter border-bottom pt-4 d-flex justify-content-between" data-bs-theme="auto">
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

    <div ref="changerBucket" class="modal fade" id="addUser" tabindex="-1" data-bs-backdrop="static"
        data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 99999;">
        <div class="modal-dialog modal-dialog-scrollable  modal-dialog-centered  modal-dialog-scrollabl">
            <div class="modal-content rounded-5">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Adicionar um membro</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="p-3 rounded-4" style="background: var(--bs-tertiary-bg);">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="col-sm-13 col-form-label text-md-end">Endereço
                                de email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="nome@exemplo.com">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Deixa para
                        depois</button>
                    <button type="button" class="btn btn-primary">Adicionar</button>
                </div>
            </div>
        </div>
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