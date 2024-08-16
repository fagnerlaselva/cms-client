<template>
    <div class="py-2 vstack row-gap-4 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'AddAuthor' }" data-bs-toggle="modal" data-bs-target="#addUser"
            buttonText="Adicionar Autor" class="d-none" />

        <button type="button" class="btn buttom-action-add d-flex align-items-center add-link p-0"
            data-bs-toggle="modal" data-bs-target="#addUser">
            <div class="rounded-3 border bg-primário bg-gradiente d-inline-flex p-1"
                data-v-inspector="src/components/generic/SocialLinksBlock.vue:44:13">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="#35A936" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </div>
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


    <!--Modal-->
    <ModalAddMember />
</template>

<style></style>

<script>
import AddButton from '../../generic/triggers/AddButton.vue';
import SearchInput from '../../generic/triggers/SearchInput.vue';
import axios from 'axios'

export default {
    components: {
        AddButton, SearchInput,
    },
    name: 'TabMember',
    data() {
        return {
            email: ''
        };
    },
    methods: {
        async inviteAccountMember() {
            const accessToken = localStorage.getItem('x-access-token')
            const body = {
                email: this.email
            }
            await axios.post(`${import.meta.env.VITE_CMS_API_URL}/account/${localStorage.getItem('currentAccountId')}/member/invite`, body, {
                headers: {
                    'x-access-token': accessToken
                }
            })
            this.$router.go()
        }
    },

}
</script>