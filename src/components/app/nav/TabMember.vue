<template>

    <ul class="nav nav-underline tabFilter py-2">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Todos</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                aria-expanded="false">Author</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Admin</a></li>
                <li><a class="dropdown-item" href="#">Autor</a></li>
                <li><a class="dropdown-item" href="#">Editor</a></li>

            </ul>
        </li>
    </ul>
</template>

<style>
.dropdown {
    margin-left: 10px;
}
</style>

<script>
export default {
    name: 'TabMember',
}
</script>