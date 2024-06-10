<template>
    <div class="py-3 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <AddButton :link="{ name: 'AddMember' }" buttonText="Adicionar um Membro" />

        <div class="search-article d-none d-lg-block">
            <input class="form-control  input-group-sm" list="datalistOptions" id="exampleDataList"
                placeholder="Encontre um membro" data-bs-theme-value="auto">
            <datalist id="datalistOptions">
                <option value="Fagner mendes"></option>
                <option value="kratinho Lima"></option>
            </datalist>
        </div>
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
export default {
    components: {
        AddButton,
    },
    name: 'TabMember',
}
</script>