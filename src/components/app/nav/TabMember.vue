<template>
    <div class="py-3 d-flex justify-content-between flex-column flex-sm-row" data-bs-theme="auto">
        <div>
            <RouterLink :to="{ name: 'AddMember' }" class="buttom-action-add d-flex align-items-center">
                <div class="rounded-circle  border bg-primário bg-gradiente d-inline-flex p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
                <div class="px-2">Adicionar um Membro</div>
            </RouterLink>
        </div>
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
export default {
    name: 'TabMember',
}
</script>